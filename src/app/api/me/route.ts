import { meData } from '@/assets/data/me'
import { NextResponse } from 'next/server'

export async function GET() {
	return NextResponse.json(meData)
}
