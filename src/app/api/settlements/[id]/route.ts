import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const settlement = await prisma.settlement.findUnique({ where: { id } });
    if (!settlement) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(settlement);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settlement' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log('Settlement PUT request received for ID:', params.id);
    
    const { id } = params;
    const data = await req.json();
    console.log('Update data:', data);
    
    // Validate required fields
    if (!data.title || !data.amount || !data.caseType || !data.date) {
      console.log('Missing required fields:', { title: !!data.title, amount: !!data.amount, caseType: !!data.caseType, date: !!data.date });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Updating settlement with data:', {
      title: data.title,
      amount: parseFloat(data.amount),
      caseType: data.caseType,
      date: new Date(data.date),
      description: data.description || null,
    });

    const updated = await prisma.settlement.update({
      where: { id },
      data: {
        title: data.title,
        amount: parseFloat(data.amount),
        caseType: data.caseType,
        date: new Date(data.date),
        description: data.description || null,
      },
    });
    
    console.log('Settlement updated successfully:', updated);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating settlement:', error);
    return NextResponse.json(
      { error: 'Failed to update settlement', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    await prisma.settlement.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete settlement' }, { status: 500 });
  }
} 