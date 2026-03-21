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
  const { id } = params;
  const data = await req.json();
  try {
    const updated = await prisma.settlement.update({
      where: { id },
      data: {
        title: data.title,
        amount: data.amount,
        caseType: data.caseType,
        date: data.date,
        description: data.description,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settlement' }, { status: 500 });
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