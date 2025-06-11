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
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const { id } = await params;
    const data = await request.json();
    
    // Update the lawyer with the new data
    const updatedLawyer = await prisma.lawyer.update({
      where: { id },
      data: {
        ...data,
        // Ensure the image URL is properly set
        image: data.image || null,
      },
    });

    return NextResponse.json(updatedLawyer);
  } catch (error) {
    console.error('Error updating lawyer:', error);
    return new NextResponse('Error updating lawyer', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession();
  
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const { id } = await params;
    await prisma.lawyer.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting lawyer:', error);
    return new NextResponse('Error deleting lawyer', { status: 500 });
  }
} 