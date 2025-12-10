import { WHATSAPP__NUMBER } from '@/src/lib/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const whatsappUrl = `https://wa.me/${WHATSAPP__NUMBER}`;
    return NextResponse.redirect(whatsappUrl, 302);
}