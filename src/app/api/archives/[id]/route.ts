import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const archive = await prisma.archive.findUnique({ where: { id } });
    if (!archive) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(archive);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch archive' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = params;
  const data = await req.json();
  try {
    const updated = await prisma.archive.update({
      where: { id },
      data: {
        title: data.title,
        imageUrl: data.imageUrl,
        date: data.date,
        content: data.description,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update archive' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id } = params;
  try {
    await prisma.archive.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete archive' }, { status: 500 });
  }
} 