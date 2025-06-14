import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";

// GET /api/archives
export async function GET() {
  try {
    const archives = await prisma.archive.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    return NextResponse.json(archives);
  } catch (error) {
    console.error('Error fetching archives:', error);
    return NextResponse.json(
      { error: 'Failed to fetch archives' },
      { status: 500 }
    );
  }
}

// POST /api/archives
export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const data = await request.json();
    const archive = await prisma.archive.create({
      data: {
        title: data.title,
        content: data.content,
        date: new Date(data.date),
        category: data.category,
        imageUrl: data.imageUrl
      }
    });
    return NextResponse.json(archive);
  } catch (error) {
    console.error('Error creating archive:', error);
    return NextResponse.json(
      { error: 'Failed to create archive' },
      { status: 500 }
    );
  }
} 