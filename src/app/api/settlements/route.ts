import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET() {
  try {
    const settlements = await prisma.settlement.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(settlements);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch settlements" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, description, amount, caseType, year, featured, order } = body;

    const settlement = await prisma.settlement.create({
      data: {
        title,
        description,
        amount,
        caseType,
        year,
        featured: featured || false,
        order: order || 0,
      },
    });

    return NextResponse.json(settlement, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create settlement" }, { status: 500 });
  }
} 