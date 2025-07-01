import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: List all practice areas
export async function GET() {
  const areas = await prisma.practiceArea.findMany({ orderBy: { title: 'asc' } });
  return NextResponse.json(areas);
}

// POST: Create a new practice area
export async function POST(req: NextRequest) {
  const data = await req.json();
  const area = await prisma.practiceArea.create({ data });
  return NextResponse.json(area, { status: 201 });
} 