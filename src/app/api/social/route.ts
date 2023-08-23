import { fetchLatestPosts } from '@/utils/fetchLatestPosts'
import { NextResponse } from 'next/server'

export async function GET() {
	const result = fetchLatestPosts()
	return NextResponse.json(result)
}