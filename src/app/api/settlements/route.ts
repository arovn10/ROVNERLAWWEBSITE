import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";

export async function GET() {
  try {
    const settlements = await prisma.settlement.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    return NextResponse.json(settlements);
  } catch (error) {
    console.error('Error fetching settlements:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settlements' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data = await req.json();
    
    // Validate required fields
    if (!data.title || !data.amount || !data.caseType || !data.date || !data.description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newSettlement = await prisma.settlement.create({
      data: {
        title: data.title,
        amount: parseFloat(data.amount),
        caseType: data.caseType,
        date: new Date(data.date),
        description: data.description,
      },
    });
    return NextResponse.json(newSettlement, { status: 201 });
  } catch (error) {
    console.error('Error creating settlement:', error);
    return NextResponse.json(
      { error: 'Failed to create settlement', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 