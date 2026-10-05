import { NextResponse } from 'next/server';

// Static export (output: 'export'): this route is prerendered to a static
// JSON payload at build time. force-dynamic is illegal here by design.
export async function GET() {
  return NextResponse.json({ ok: true });
}
