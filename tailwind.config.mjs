/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          200: '#FFFDE7',
          300: '#FFF9C4',
          400: '#FFF59D',
          500: '#FFF176',
        },
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
