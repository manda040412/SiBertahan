/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bahnschrift: ['"Bahnschrift"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
