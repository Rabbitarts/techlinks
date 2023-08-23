import { LinksData } from '@/assets/data/links/links-data'
import { NextResponse } from 'next/server'

export async function GET() {
	return NextResponse.json(LinksData)
}
