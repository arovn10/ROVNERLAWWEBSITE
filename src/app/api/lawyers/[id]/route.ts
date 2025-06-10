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
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession();
  
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const data = await request.json();
    const lawyer = await prisma.lawyer.update({
      where: { id: params.id },
      data: {
        name: data.name,
        title: data.title,
        bio: data.bio,
        education: data.education,
        experience: data.experience,
        specialties: data.specialties,
        email: data.email,
        phone: data.phone,
        order: data.order,
        active: data.active,
        image: data.image,
      },
    });

    return NextResponse.json(lawyer);
  } catch (error) {
    console.error('Error updating lawyer:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession();
  
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    await prisma.lawyer.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting lawyer:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 