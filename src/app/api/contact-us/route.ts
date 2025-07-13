import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const contactUs = await prisma.contactUs.findFirst();
    
    if (!contactUs) {
      // Create default content if none exists
      const defaultContactUs = await prisma.contactUs.create({
        data: {
          heroTitle: "Contact Us",
          heroSubtitle: "Get in touch for a free consultation",
          mainTitle: "Get Your Free Consultation Today",
          paragraph1: "At the Law Offices of Rovner Law, we understand that dealing with legal issues can be overwhelming. That's why we offer free consultations to discuss your case and explore your legal options.",
          paragraph2: "Our experienced attorneys are here to help you navigate through your legal challenges. Whether you've been injured in an accident, need help with a personal injury claim, or require legal representation for other matters, we're here to fight for your rights.",
          whyChooseTitle: "Why Choose Rovner Law?",
          whyChooseList: "Over 40 years of experience\nNo fee unless we win your case\nDedicated team of attorneys\nProven track record of success\nPersonalized attention to every case",
          officeAddress: "175 Bustleton Pike\nFeasterville-Trevose, PA 19053",
          officePhone: "215-259-5958",
          officeEmail: "rovners@dial-law.com",
          officeHours: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: By Appointment\nSunday: Closed"
        }
      });
      return NextResponse.json(defaultContactUs);
    }
    
    return NextResponse.json(contactUs);
  } catch (error) {
    console.error('Error fetching contact us content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact us content' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    const contactUs = await prisma.contactUs.findFirst();
    
    if (contactUs) {
      // Update existing content
      const updatedContactUs = await prisma.contactUs.update({
        where: { id: contactUs.id },
        data: body
      });
      return NextResponse.json(updatedContactUs);
    } else {
      // Create new content
      const newContactUs = await prisma.contactUs.create({
        data: body
      });
      return NextResponse.json(newContactUs);
    }
  } catch (error) {
    console.error('Error updating contact us content:', error);
    return NextResponse.json(
      { error: 'Failed to update contact us content' },
      { status: 500 }
    );
  }
} 