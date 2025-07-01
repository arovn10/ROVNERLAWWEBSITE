import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // 1. Verify hCaptcha (DISABLED TEMPORARILY)
    // const hcaptchaToken = data.hcaptchaToken;
    // const hcaptchaSecret = process.env.HCAPTCHA_SECRET;
    // const hcaptchaRes = await fetch('https://hcaptcha.com/siteverify', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: `response=${hcaptchaToken}&secret=${hcaptchaSecret}`
    // });
    // const hcaptchaResult = await hcaptchaRes.json();
    // if (!hcaptchaResult.success) {
    //   return NextResponse.json({ error: 'hCaptcha verification failed' }, { status: 400 });
    // }

    // 2. Save to database
    const contactSubmission = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        dateOfIncident: data.dateOfIncident ? new Date(data.dateOfIncident) : null,
        caseType: data.caseType,
        represented: data.represented,
        facts: data.facts
      }
    });

    // 3. Send email notification
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['arovner@dial-law.com'],
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Case Type:</strong> ${data.caseType}</p>
        <p><strong>Facts:</strong> ${data.facts}</p>
      `
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message. We will contact you soon!' 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
} 