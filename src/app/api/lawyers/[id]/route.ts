import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const lawyer = await prisma.lawyer.findUnique({
      where: { id: params.id },
    });

    if (!lawyer) {
      return NextResponse.json({ error: "Lawyer not found" }, { status: 404 });
    }

    return NextResponse.json(lawyer);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch lawyer" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { name, title, bio, education, experience, specialties, image, email, phone, order, active } = body;

    const lawyer = await prisma.lawyer.update({
      where: { id: params.id },
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
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await prisma.lawyer.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Lawyer deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete lawyer" }, { status: 500 });
  }
} 