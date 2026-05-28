import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { practiceAreasSeedData } from '@/lib/practiceAreasSeedData';

async function seedIfEmpty() {
  const count = await prisma.practiceArea.count();
  if (count > 0) return;
  await prisma.practiceArea.createMany({
    data: practiceAreasSeedData.map((p) => ({
      title: p.title,
      slug: p.slug,
      description: p.description,
      content: p.description,
      features: p.features.join('\n'),
      image: p.image,
      banner: p.banner,
      color: p.color,
      order: p.order,
      active: true,
    })),
    skipDuplicates: true,
  });
}

// GET: List all practice areas. Self-seeds the table on first call if empty.
export async function GET() {
  await seedIfEmpty();
  const areas = await prisma.practiceArea.findMany({
    orderBy: [{ order: 'asc' }, { title: 'asc' }],
    where: { active: true },
  });
  return NextResponse.json(areas);
}

// POST: Create a new practice area
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const data = await req.json();
  const area = await prisma.practiceArea.create({ data });
  return NextResponse.json(area, { status: 201 });
}
