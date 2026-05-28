import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// GET: Fetch a single practice area by ID
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const area = await prisma.practiceArea.findUnique({ where: { id } });
  if (!area) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(area);
}

// PUT: Update a practice area by ID
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const data = await req.json();
  const area = await prisma.practiceArea.update({ where: { id }, data });
  return NextResponse.json(area);
}

// DELETE: Remove a practice area by ID
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  await prisma.practiceArea.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
