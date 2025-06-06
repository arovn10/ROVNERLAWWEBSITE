import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const lawyer = await prisma.lawyer.findUnique({
      where: { id },
    });

    if (!lawyer) {
      return NextResponse.json({ error: "Lawyer not found" }, { status: 404 });
    }

    return NextResponse.json(lawyer);
  } catch (error) {
    console.error('Error fetching lawyer:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const { name, title, bio, education, experience, specialties, image, email, phone, order, active } = body;

    const lawyer = await prisma.lawyer.update({
      where: { id },
      data: {
        name,
        title,
        bio,
        education,
        experience,
        specialties,
        image,
        email,
        phone,
        order,
        active,
      },
    });

    return NextResponse.json(lawyer);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update lawyer" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    
    await prisma.lawyer.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Lawyer deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete lawyer" }, { status: 500 });
  }
} 