import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { parseOrError, settlementCreateSchema } from "@/lib/schemas";

export async function GET() {
  try {
    const settlements = await prisma.settlement.findMany({
      orderBy: { date: 'desc' }
    });
    return NextResponse.json(settlements);
  } catch (error) {
    console.error('Error fetching settlements:', error);
    return NextResponse.json({ error: 'Failed to fetch settlements' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const parsed = parseOrError(settlementCreateSchema, await req.json());
    if (parsed instanceof NextResponse) return parsed;

    const newSettlement = await prisma.settlement.create({
      data: {
        title: parsed.title,
        amount: parsed.amount,
        caseType: parsed.caseType,
        date: new Date(parsed.date),
        description: parsed.description,
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
