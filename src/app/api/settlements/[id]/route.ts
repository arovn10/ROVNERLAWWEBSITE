import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { parseOrError, settlementUpdateSchema } from '@/lib/schemas';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const settlement = await prisma.settlement.findUnique({ where: { id } });
    if (!settlement) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(settlement);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch settlement' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { id } = await params;
    const parsed = parseOrError(settlementUpdateSchema, await req.json());
    if (parsed instanceof NextResponse) return parsed;

    const updated = await prisma.settlement.update({
      where: { id },
      data: {
        ...(parsed.title !== undefined && { title: parsed.title }),
        ...(parsed.description !== undefined && { description: parsed.description }),
        ...(parsed.amount !== undefined && { amount: parsed.amount }),
        ...(parsed.caseType !== undefined && { caseType: parsed.caseType }),
        ...(parsed.date !== undefined && { date: new Date(parsed.date) }),
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating settlement:', error);
    return NextResponse.json(
      { error: 'Failed to update settlement', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  try {
    await prisma.settlement.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete settlement' }, { status: 500 });
  }
}
