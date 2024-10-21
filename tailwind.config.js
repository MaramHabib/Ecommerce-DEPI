/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
        './src/pages/**/*.{html,jsx}',
    './src/components/**/*.{html,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}