import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

// GET: Fetch a single practice area by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const area = await prisma.practiceArea.findUnique({ where: { id: params.id } });
  if (!area) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(area);
}

// PUT: Update a practice area by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  const area = await prisma.practiceArea.update({ where: { id: params.id }, data });
  return NextResponse.json(area);
}

// DELETE: Remove a practice area by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  await prisma.practiceArea.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
}
