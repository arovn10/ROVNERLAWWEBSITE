import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { lawyerCreateSchema, parseOrError } from "@/lib/schemas";

export async function GET() {
  try {
    const lawyers = await prisma.lawyer.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(lawyers);
  } catch {
    return NextResponse.json({ error: "Failed to fetch lawyers" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const parsed = parseOrError(lawyerCreateSchema, await request.json());
    if (parsed instanceof NextResponse) return parsed;

    let finalOrder = parsed.order;
    if (finalOrder === undefined) {
      const highestOrderLawyer = await prisma.lawyer.findFirst({
        orderBy: { order: 'desc' }
      });
      finalOrder = (highestOrderLawyer?.order || 0) + 1;
    }

    const lawyer = await prisma.lawyer.create({
      data: {
        name: parsed.name,
        title: parsed.title,
        bio: parsed.bio,
        education: parsed.education,
        experience: parsed.experience,
        specialties: parsed.specialties,
        image: parsed.image,
        email: parsed.email,
        phone: parsed.phone,
        order: finalOrder,
        active: parsed.active ?? true,
      },
    });

    // Log the id only. This previously logged the whole record — the exact
    // pattern PR 22 stripped from every other route, reintroduced by PR 21.
    console.log('Lawyer created successfully:', lawyer.id);
    // /attorneys now runs on hourly ISR (previously revalidate: 0, a
    // Postgres query on every view) — without this, a new attorney would not
    // appear on the public site for up to an hour.
    revalidatePath('/attorneys');
    return NextResponse.json(lawyer, { status: 201 });
  } catch (error) {
    console.error('Error creating lawyer:', error);
    return NextResponse.json({ 
      error: "Failed to create lawyer", 
      details: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
} 