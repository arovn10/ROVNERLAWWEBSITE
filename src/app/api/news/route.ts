import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { newsCreateSchema, parseOrError } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

// GET /api/news
export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}

// POST /api/news
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const parsed = parseOrError(newsCreateSchema, await request.json());
    if (parsed instanceof NextResponse) return parsed;

    const news = await prisma.news.create({
      data: {
        title: parsed.title,
        content: parsed.content,
        date: new Date(parsed.date),
        source: parsed.source,
        url: parsed.url,
        imageUrl: parsed.imageUrl,
      }
    });

    revalidatePath('/in-the-news');
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Failed to create news' },
      { status: 500 }
    );
  }
} 