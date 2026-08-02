import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { archiveUpdateSchema, parseOrError } from '@/lib/schemas';
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const archive = await prisma.archive.findUnique({ where: { id } });
    if (!archive) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(archive);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch archive' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const parsed = parseOrError(archiveUpdateSchema, await req.json());
  if (parsed instanceof NextResponse) return parsed;
  try {
    const updated = await prisma.archive.update({
      where: { id },
      data: {
        ...(parsed.title !== undefined && { title: parsed.title }),
        ...(parsed.imageUrl !== undefined && { imageUrl: parsed.imageUrl }),
        ...(parsed.date !== undefined && { date: new Date(parsed.date) }),
        ...((parsed.description !== undefined || parsed.content !== undefined) && {
          content: parsed.description ?? parsed.content,
        }),
        ...(parsed.category !== undefined && { category: parsed.category }),
      },
    });
    revalidatePath('/photo-gallery');
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update archive' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  try {
    await prisma.archive.delete({ where: { id } });
    revalidatePath('/photo-gallery');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete archive' }, { status: 500 });
  }
} 