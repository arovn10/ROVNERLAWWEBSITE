import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";

export async function GET() {
  try {
    const lawyers = await prisma.lawyer.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(lawyers);
  } catch {
    return NextResponse.json({ error: "Failed to fetch lawyers" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    console.log('Creating lawyer with data:', body);
    
    const { name, title, bio, education, experience, specialties, image, email, phone, order, active } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const lawyer = await prisma.lawyer.create({
      data: {
        name,
        title: title || null,
        bio: bio || null,
        education: education || null,
        experience: experience || null,
        specialties: specialties || null,
        image: image || null,
        email: email || null,
        phone: phone || null,
        order: order || 0,
        active: active !== undefined ? active : true,
      },
    });

    console.log('Lawyer created successfully:', lawyer);
    return NextResponse.json(lawyer, { status: 201 });
  } catch (error) {
    console.error('Error creating lawyer:', error);
    return NextResponse.json({ 
      error: "Failed to create lawyer", 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
} 