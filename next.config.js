/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
	},
	images: { domains: ['localhost'] },
}

module.exports = nextConfig
