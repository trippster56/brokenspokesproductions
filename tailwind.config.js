/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'american-blue': '#002C63',
        'bold-red': '#B31942',
      },
      fontFamily: {
        'western': ['Playfair Display', 'Georgia', 'serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};