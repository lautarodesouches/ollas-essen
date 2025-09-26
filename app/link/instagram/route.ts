import { INSTAGRAM__PAGE } from '@/constants';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.redirect(INSTAGRAM__PAGE, 302);
}