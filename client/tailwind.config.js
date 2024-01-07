/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#BD5D38', // Use the hex code of the color you want
        'inactive': '#DEAE9C',
      },
    },
  },
  plugins: [],
}