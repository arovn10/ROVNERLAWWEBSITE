import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { getFirmName, setFirmName } from '@/lib/settings';
import { authOptions } from '@/lib/auth';
import { firmNameSchema, parseOrError } from '@/lib/schemas';

export async function GET() {
  const firmName = await getFirmName();
  return NextResponse.json({ firmName });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const parsed = parseOrError(firmNameSchema, await req.json());
  if (parsed instanceof NextResponse) return parsed;
  const updated = await setFirmName(parsed.firmName);
  return NextResponse.json({ firmName: updated.firmName });
}
