import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Fetch a single practice area by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const area = await prisma.practiceArea.findUnique({ where: { id: params.id } });
  if (!area) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(area);
}

// PUT: Update a practice area by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const area = await prisma.practiceArea.update({ where: { id: params.id }, data });
  return NextResponse.json(area);
}

// DELETE: Remove a practice area by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await prisma.practiceArea.delete({ where: { id: params.id } });
  return NextResponse.json({ success: true });
} 