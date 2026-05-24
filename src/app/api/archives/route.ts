import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { archiveCreateSchema, parseOrError } from "@/lib/schemas";

// GET /api/archives
export async function GET() {
  try {
    console.log('Fetching archives from database...');
    const archives = await prisma.archive.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    console.log(`Found ${archives.length} archives`);
    return NextResponse.json(archives);
  } catch (error) {
    console.error('Error fetching archives:', error);
    console.error('Error details:', {
      message: (error as Error).message,
      stack: (error as Error).stack,
      name: (error as Error).name
    });
    return NextResponse.json(
      { error: 'Failed to fetch archives', details: (error as Error).message },
      { status: 500 }
    );
  }
}

// POST /api/archives
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const parsed = parseOrError(archiveCreateSchema, await request.json());
    if (parsed instanceof NextResponse) return parsed;

    const archive = await prisma.archive.create({
      data: {
        title: parsed.title,
        content: parsed.content,
        date: new Date(parsed.date),
        category: parsed.category,
        imageUrl: parsed.imageUrl,
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