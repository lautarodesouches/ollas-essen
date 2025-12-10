import { INSTAGRAM__PAGE } from '@/src/lib/constants'
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.redirect(INSTAGRAM__PAGE, 302)
}
