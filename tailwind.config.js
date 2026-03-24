/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}"
  ],
   safelist: [
    "text-blue-300",
    "text-cyan-300",
    "text-orange-300",
    "text-green-300",
    "text-teal-300",
    "text-purple-300",
    "text-pink-300",
    "text-yellow-300",
    "text-slate-300",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
        heading: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

