/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: {
				"soft-cyan": "hsl(174, 77%, 80%)",
				"strong-cyan": "hsl(174, 86%, 45%)",
				"light-grayish-red": "hsl(14, 92%, 95%)",
				"light-red": "hsl(15, 100%, 70%)",
				"pale-blue": "hsl(226, 100%, 87%)",
			},
			neutral: {
				100: "hsl(0, 0%, 100%)",
				200: "hsl(230, 100%, 99%)",
				300: "hsl(224, 65%, 95%)",
				400: "hsl(223, 50%, 87%)",
				500: "hsl(225, 20%, 60%)",
				600: "hsl(227, 35%, 25%)",
			},
		},
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		fontSize: {
			sm: "12px",
			base: "15px",
			xl: "28px",
		},
		fontWeight: {
			semibold: "600",
			extrabold: "800",
		},
		extend: {},
	},
	plugins: [],
}
