import { WHATSAPP__NUMBER } from '@/src/lib/constants';
import { NextResponse } from 'next/server';

export async function GET() {
    const whatsappUrl = `https://wa.me/${WHATSAPP__NUMBER}`;
    return NextResponse.redirect(whatsappUrl, 302);
}