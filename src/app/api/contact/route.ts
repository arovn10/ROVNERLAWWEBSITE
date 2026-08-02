import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Mailgun from "mailgun.js";
import formData from "form-data";
import { contactSubmissionSchema, parseOrError } from "@/lib/schemas";
import { rateLimit } from "@/lib/rate-limit";

/**
 * Public contact-form intake — the firm's primary lead channel.
 *
 * Three protections shipped here in earlier work (PRs 12, 13 and 14) and were
 * silently dropped when PR 21 rewrote this route to add zod validation: the
 * per-IP rate limit, the server-side honeypot check, and the confirmation
 * auto-reply. `src/lib/rate-limit.ts` was left in the tree imported by nothing,
 * and the `website` honeypot field carried on rendering on the form while
 * nothing inspected it. All three are restored below, on top of the zod
 * validation that replaced them.
 */

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

// Recipient(s) from env; comma-separated for multiple. Default: rovneralec@gmail.com
const getRecipients = (): string[] => {
  const env = process.env.CONTACT_EMAIL || "rovneralec@gmail.com";
  return env.split(",").map((e) => e.trim()).filter(Boolean);
};

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
  return ip.toLowerCase();
}

function escapeHtml(text: string | undefined | null): string {
  if (text == null) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    // 1. Per-IP rate limit. The cheapest possible rejection, so it runs before
    // the body is parsed and before any upstream call.
    const ip = getClientIp(request);
    const rl = rateLimit(`contact:${ip}`, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
      );
    }

    const rawBody = await request.json();

    // 2. Honeypot. A real visitor leaves `website` empty because it is hidden;
    // a bot that fills every input gives itself away. Answer 200 so the bot
    // records a success and does not retry, but write nothing.
    if (typeof rawBody?.website === "string" && rawBody.website.trim() !== "") {
      return NextResponse.json({
        success: true,
        message: "Thank you for your message. We will contact you soon!",
      });
    }

    // 3. Validate.
    const parsed = parseOrError(contactSubmissionSchema, rawBody);
    if (parsed instanceof NextResponse) return parsed;
    const data = parsed;

    // 4. Verify hCaptcha if HCAPTCHA_SECRET is configured. When the secret is
    // unset, captcha is bypassed entirely (dev/test).
    const captchaSecret = process.env.HCAPTCHA_SECRET;
    if (captchaSecret) {
      if (!data.captchaToken) {
        return NextResponse.json({ error: "Captcha is required" }, { status: 400 });
      }
      const verifyResponse = await fetch("https://hcaptcha.com/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: captchaSecret,
          response: data.captchaToken,
        }).toString(),
      });
      const verifyResult = (await verifyResponse.json()) as { success?: boolean };
      if (!verifyResult.success) {
        return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
      }
    }

    // 5. Save. The disclaimer acknowledgement is stored as a timestamp so there
    // is an actual record of consent, not just a checkbox that blocked a button.
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        dateOfIncident: data.dateOfIncident ? new Date(data.dateOfIncident) : null,
        caseType: data.caseType || null,
        represented: data.represented || null,
        facts: data.facts || "(none provided)",
        disclaimerAcceptedAt: data.disclaimerAccepted ? new Date() : null,
      },
    });

    // 6. Notify the firm.
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    if (!apiKey || !domain) {
      console.error("MAILGUN_API_KEY or MAILGUN_DOMAIN not set - skipping email");
      return NextResponse.json({
        success: true,
        message: "Thank you for your message. We will contact you soon!",
      });
    }

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: apiKey,
      url: process.env.MAILGUN_EU === "true" ? "https://api.eu.mailgun.net" : undefined,
    });

    const fromAddress = process.env.MAILGUN_FROM || `Rovner Law <mailgun@${domain}>`;

    await mg.messages.create(domain, {
      from: fromAddress,
      to: getRecipients(),
      "h:Reply-To": data.email,
      subject: "New Contact Form Submission - Rovner Law",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone) || "(not provided)"}</p>
        <p><strong>Date of Incident:</strong> ${escapeHtml(data.dateOfIncident) || "(not provided)"}</p>
        <p><strong>Case Type:</strong> ${escapeHtml(data.caseType) || "(not provided)"}</p>
        <p><strong>Represented by another lawyer:</strong> ${escapeHtml(data.represented) || "(not provided)"}</p>
        <p><strong>Disclaimer acknowledged:</strong> ${data.disclaimerAccepted ? "Yes" : "No"}</p>
        <p><strong>Facts:</strong></p>
        <p>${escapeHtml(data.facts) || "(none provided)"}</p>
      `,
    });

    // 7. Confirmation auto-reply to the submitter. Best-effort: a failure here
    // must not turn a captured lead into a user-facing error.
    const replyTo = process.env.MAILGUN_REPLY_TO || getRecipients()[0] || `noreply@${domain}`;
    try {
      await mg.messages.create(domain, {
        from: fromAddress,
        to: [data.email],
        "h:Reply-To": replyTo,
        subject: "We received your message — Law Offices of Rovner, Allen, Rovner & Sigman",
        html: `
          <p>Hi ${escapeHtml(data.name)},</p>
          <p>Thank you for reaching out to the Law Offices of Rovner, Allen, Rovner &amp; Sigman.
          We received your message and a member of our team will be in touch shortly.</p>
          <p>If your matter is urgent, please call
          <a href="tel:888-342-5529">888-DIAL-LAW</a>.</p>
          <p>For your records, here is a copy of what you sent us:</p>
          <ul>
            <li><strong>Phone:</strong> ${escapeHtml(data.phone) || "(not provided)"}</li>
            <li><strong>Date of incident:</strong> ${escapeHtml(data.dateOfIncident) || "(not provided)"}</li>
            <li><strong>Case type:</strong> ${escapeHtml(data.caseType) || "(not provided)"}</li>
            <li><strong>Currently represented:</strong> ${escapeHtml(data.represented) || "(not provided)"}</li>
          </ul>
          <p><strong>Your message:</strong></p>
          <p>${escapeHtml(data.facts) || "(none provided)"}</p>
          <hr />
          <p style="font-size:12px;color:#555">This message confirms receipt only. It is not legal
          advice and does not create an attorney-client relationship. No representation begins
          until a written agreement is signed by both parties.</p>
        `,
      });
    } catch (error) {
      console.error("Confirmation email to submitter failed:", error);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will contact you soon!",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to submit contact form: ${message}` },
      { status: 500 }
    );
  }
}
