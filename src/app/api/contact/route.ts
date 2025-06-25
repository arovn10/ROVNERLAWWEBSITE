import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Save to database
    const contactSubmission = await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        dateOfIncident: data.dateOfIncident ? new Date(data.dateOfIncident) : null,
        caseType: data.caseType,
        represented: data.represented,
        facts: data.facts
      }
    });

    // Send email notification (you can implement this later with a service like SendGrid)
    // For now, we'll just log it
    console.log('Contact form submission received:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      caseType: data.caseType,
      facts: data.facts
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