import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { parseOrError, practiceAreaUpdateSchema } from '@/lib/schemas';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const area = await prisma.practiceArea.findUnique({ where: { id } });
  if (!area) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(area);
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const before = await prisma.practiceArea.findUnique({ where: { id }, select: { slug: true } });
  const parsed = parseOrError(practiceAreaUpdateSchema, await req.json());
  if (parsed instanceof NextResponse) return parsed;
  const area = await prisma.practiceArea.update({ where: { id }, data: parsed });
  revalidatePath('/practice');
  revalidatePath('/');
  revalidatePath(`/practice/${area.slug}`);
  // Cover the pre-edit slug too, in case this update renamed it — otherwise
  // the old URL would keep serving stale cached content until redeploy.
  if (before && before.slug !== area.slug) revalidatePath(`/practice/${before.slug}`);
  return NextResponse.json(area);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const existing = await prisma.practiceArea.findUnique({ where: { id }, select: { slug: true } });
  await prisma.practiceArea.delete({ where: { id } });
  revalidatePath('/practice');
  revalidatePath('/');
  if (existing) revalidatePath(`/practice/${existing.slug}`);
  return NextResponse.json({ success: true });
}
