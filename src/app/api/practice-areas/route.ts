import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { parseOrError, practiceAreaCreateSchema } from '@/lib/schemas';

// GET: List all practice areas
export async function GET() {
  const areas = await prisma.practiceArea.findMany({ orderBy: { title: 'asc' } });
  return NextResponse.json(areas);
}

// POST: Create a new practice area
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const parsed = parseOrError(practiceAreaCreateSchema, await req.json());
  if (parsed instanceof NextResponse) return parsed;
  const area = await prisma.practiceArea.create({ data: parsed });
  return NextResponse.json(area, { status: 201 });
}
