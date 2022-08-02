/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"Video"'],
				sans: ['"PressStart2P"'],
			},
		},
		fontSize: {
			xs: ['12px', '16px'],
			sm: ['16px', '24px'],
			base: ['20px', '30px'],
			lg: ['16px', '22px'],
			xl: ['32px', '48px'],
			'2xl': ['48px', '68px'],
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			blue: '#7ADEE6',
			orange: '#EF8C94',
			'dark-blue': '#14182E',
			pink: '#B12663',
			'dark-pink': '#8E1E4F',
			'press-pink': '#6A173B',
		},
	},
	plugins: [],
};