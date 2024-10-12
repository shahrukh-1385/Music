/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn100: ['Vazirmatn100'],
        vazirmatn200: ['Vazirmatn200'],
        vazirmatn300: ['Vazirmatn300'],
        vazirmatn400: ['Vazirmatn400'],
        vazirmatn500: ['Vazirmatn500'],
      },

    },
  },
  plugins: [],
}