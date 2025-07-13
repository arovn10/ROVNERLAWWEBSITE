import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";

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
  try {
    console.log('Lawyer PUT request received');
    
    // Temporarily skip session check to test database connection
    // const session = await getServerSession();
    // if (!session) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const { id } = await params;
    const data = await request.json();
    
    console.log('Update data for lawyer:', data);
    
    // Validate required fields
    if (!data.name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    console.log('Updating lawyer with data:', {
      name: data.name,
      title: data.title || null,
      bio: data.bio || null,
      education: data.education || null,
      experience: data.experience || null,
      specialties: data.specialties || null,
      image: data.image || null,
      email: data.email || null,
      phone: data.phone || null,
      order: data.order ? parseInt(data.order) : 0,
      active: data.active !== undefined ? data.active : true,
    });
    
    // Update the lawyer with the new data
    const updatedLawyer = await prisma.lawyer.update({
      where: { id },
      data: {
        name: data.name,
        title: data.title || null,
        bio: data.bio || null,
        education: data.education || null,
        experience: data.experience || null,
        specialties: data.specialties || null,
        image: data.image || null,
        email: data.email || null,
        phone: data.phone || null,
        order: data.order ? parseInt(data.order) : 0,
        active: data.active !== undefined ? data.active : true,
      },
    });

    console.log('Lawyer updated successfully:', updatedLawyer);
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