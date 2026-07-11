import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/isAdmin';

export async function GET() {
  const admin = await isAdmin();
  return NextResponse.json({ isAdmin: admin });
}
