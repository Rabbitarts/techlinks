import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { ITypeLinks } from './links.interface'

export const links: ITypeLinks[] = [
	{
		id: 'link_1',
		icon: {
			path: '/icons/twitter.svg',
			width: 60,
		},
		background: '#1F262E',
		link: 'https://localhost:3000',
		title: 'Twitter',
		// isImportant: true,
	},
	{
		id: 'link_2',
		icon: {
			path: '/icons/github.svg',
			width: 60,
		},
		background: '#252525',
		link: 'https://github.com/Rabbitarts',
		title: 'GitHub',
		// isImportant: true,
	},
	{
		id: 'link_3',
		icon: {
			path: '/icons/telegram.svg',
			width: 60,
		},
		background: '#1F262E',
		link: 'https://t.me/TechArtem',
		title: 'Personal Telegram',
		// isImportant: true,
	},
	{
		id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 60,
		},
		background: '#1F262E',
		link: 'https://localhost:3000',
		title: 'Telegram Channel',
		isImportant: true,
	},
	{
		id: 'link_5',
		icon: {
			path: '/icons/youtube.svg',
			width: 80,
		},
		background: '#2F2123',
		link: 'https://localhost:3000',
		title: 'Youtube',
		// isImportant: true,
	},
	{
		id: 'link_6',
		icon: {
			path: '/icons/homepage.svg',
			width: 70,
		},
		background: '#182B2D',
		link: 'https://tech.portfolio.io',
		title: 'Portfolio',
		isImportant: true,
	},
	{
		id: 'link_7',
		icon: {
			path: '/icons/devto.svg',
			width: 70,
		},
		background: '#252525',
		link: 'https://dev.to/rabbitarts',
		title: 'dev.to',
		// isImportant: true,
	},
]

export async function GET(req: NextApiRequest) {
	return NextResponse.json(links)
}
