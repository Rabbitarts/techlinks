import { getSiteUrl, SITE_NAME } from '@/config/url.config'
import Provider from '@/provider/Provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg',
	},
	title: 'Tech Links | All useful links here',
	description: 'My links',
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: [`info@${SITE_NAME}`],
	},
	authors: {
		name: SITE_NAME,
		url: `https://${SITE_NAME}`,
	},
	publisher: SITE_NAME,
	formatDetection: {
		telephone: false,
	},
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={inter.className}>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
