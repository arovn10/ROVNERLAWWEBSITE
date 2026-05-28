import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Mailgun from "mailgun.js";
import formData from "form-data";
import { rateLimit } from "@/lib/rate-limit";

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
    // Rate limit by client IP — best-effort, in-memory, per-instance.
    // Production behind a global limit would need Vercel KV/Redis.
    const ip = getClientIp(request);
    const rl = rateLimit(`contact:${ip}`, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: { "Retry-After": String(rl.retryAfterSec) },
        }
      );
    }

    const data = await request.json();

    // Basic validation
    if (!data.name?.trim() || !data.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 1. Verify hCaptcha token if HCAPTCHA_SECRET is configured.
    // When the secret is unset, captcha is bypassed entirely (dev/test).
    const captchaSecret = process.env.HCAPTCHA_SECRET;
    if (captchaSecret) {
      if (!data.captchaToken) {
        return NextResponse.json(
          { error: "Captcha is required" },
          { status: 400 }
        );
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
        return NextResponse.json(
          { error: "Captcha verification failed" },
          { status: 400 }
        );
      }
    }

    // 2. Save to database
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        dateOfIncident: data.dateOfIncident ? new Date(data.dateOfIncident) : null,
        caseType: data.caseType || null,
        represented: data.represented || null,
        facts: data.facts || "(none provided)",
      },
    });

    // 3. Send email notification via Mailgun
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

    const fromAddress =
      process.env.MAILGUN_FROM || `Rovner Law <mailgun@${domain}>`;

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
        <p><strong>Facts:</strong></p>
        <p>${escapeHtml(data.facts) || "(none provided)"}</p>
      `,
    });

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