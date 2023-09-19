/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				light: ['QuickSand-Light'],
				normal: ['QuickSand-Regular'],
				medium: ['QuickSand-Medium'],
				semiBold: ['QuickSand-SemiBold'],
				bold: ['QuickSand-Bold'],
			},
		},
	},
	plugins: [],
};
