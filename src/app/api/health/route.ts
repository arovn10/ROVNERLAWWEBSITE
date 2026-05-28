import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Health-check endpoint. Returns 200 with `{ status: "ok", db: "up", ... }` when
// the app can reach Postgres. Returns 503 with `db: "down"` and the error message
// when the Prisma connection or trivial query fails. Designed for Vercel uptime
// monitors, external health probes, and on-call smoke tests.
//
// Marked `dynamic = 'force-dynamic'` so the response is never cached — caching a
// successful response would defeat the purpose of a health check.
export const dynamic = "force-dynamic";

export async function GET() {
  const startedAt = Date.now();
  try {
    // Lightweight ping that doesn't depend on any specific schema or row.
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: "ok",
      db: "up",
      latencyMs: Date.now() - startedAt,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "degraded",
        db: "down",
        latencyMs: Date.now() - startedAt,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 503 },
    );
  }
}
