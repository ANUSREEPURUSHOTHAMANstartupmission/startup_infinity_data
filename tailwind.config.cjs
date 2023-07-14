/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
				'josefin': ['Josefin Sans', 'sans-serif', 'ui-sans-serif', 'system-ui', '-apple-system'],
				'raleway': ['Raleway', 'sans-serif', 'ui-sans-serif', 'system-ui', '-apple-system'],
			},

		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('flowbite/plugin')

	],
}
