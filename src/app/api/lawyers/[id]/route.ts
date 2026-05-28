import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { lawyerUpdateSchema, parseOrError } from "@/lib/schemas";

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
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = await params;
    const parsed = parseOrError(lawyerUpdateSchema, await request.json());
    if (parsed instanceof NextResponse) return parsed;

    const updatedLawyer = await prisma.lawyer.update({
      where: { id },
      data: {
        ...(parsed.name !== undefined && { name: parsed.name }),
        ...(parsed.title !== undefined && { title: parsed.title }),
        ...(parsed.bio !== undefined && { bio: parsed.bio }),
        ...(parsed.education !== undefined && { education: parsed.education }),
        ...(parsed.experience !== undefined && { experience: parsed.experience }),
        ...(parsed.specialties !== undefined && { specialties: parsed.specialties }),
        ...(parsed.image !== undefined && { image: parsed.image }),
        ...(parsed.email !== undefined && { email: parsed.email }),
        ...(parsed.phone !== undefined && { phone: parsed.phone }),
        ...(parsed.order !== undefined && { order: parsed.order }),
        ...(parsed.active !== undefined && { active: parsed.active }),
      },
    });
    return NextResponse.json(updatedLawyer);
  } catch (error) {
    console.error('Error updating lawyer:', error);
    return NextResponse.json(
      { error: 'Failed to update lawyer', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);

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