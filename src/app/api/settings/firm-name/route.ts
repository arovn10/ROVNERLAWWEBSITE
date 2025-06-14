import { NextResponse } from 'next/server';
import { getFirmName, setFirmName } from '@/lib/settings';

export async function GET() {
  const firmName = await getFirmName();
  return NextResponse.json({ firmName });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { firmName } = body;
  if (!firmName || typeof firmName !== 'string') {
    return NextResponse.json({ error: 'firmName is required' }, { status: 400 });
  }
  const updated = await setFirmName(firmName);
  return NextResponse.json({ firmName: updated.firmName });
} 