import { NextResponse } from 'next/server'

export interface ITypeMe {
	siteName: string
	avatar: string
	description: string
}

export const me: ITypeMe = {
	siteName: 'Tech Links',
	avatar: '/avatar.jpg',
	description:
		'<p>My name is artem, I have been studying and doing web development for half a year now. I make mini copies of projects of big tech giants  </p>' +
		'<p>Like everyone else I started with learning html, css, js. Then I started learning more advanced frameworks like React and writing on Next.js. </p>' +
		'<p>And then I started making some good fullstack pet projects for my portfolio. </p>' +
		'<p>The main mission is to create cool and interesting and beautiful projects for your development. Thank you for visiting this site 😊 </p>',
}

export async function GET() {
	return NextResponse.json(me)
}
