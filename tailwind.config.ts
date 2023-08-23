import type { Config } from 'tailwindcss'

const colors = {
	primary: '#ff3850',
	bg: '#171717',
	secondary: '#212223',
}

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				...colors,
			},
			borderRadius: {
				layout: '1rem',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .3s ease-in-out',
			},
		},
		screens: {
			md: '480px',
			lg: '768px',
			xl: '1024px',
		},
	},
	plugins: [],
}
export default config
