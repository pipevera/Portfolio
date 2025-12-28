/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'gradient': 'gradient 8s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
			},
			keyframes: {
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				glow: {
					'0%': { boxShadow: '0 0 5px rgba(253, 224, 71, 0.2), 0 0 10px rgba(253, 224, 71, 0.2)' },
					'100%': { boxShadow: '0 0 10px rgba(253, 224, 71, 0.4), 0 0 20px rgba(253, 224, 71, 0.4)' },
				},
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
