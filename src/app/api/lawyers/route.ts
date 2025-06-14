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
    const { name, title, bio, education, experience, specialties, image, email, phone, order, active } = body;

    const lawyer = await prisma.lawyer.create({
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
        order: order || 0,
        active: active !== undefined ? active : true,
      },
    });

    return NextResponse.json(lawyer, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create lawyer" }, { status: 500 });
  }
} 