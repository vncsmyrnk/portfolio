/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(8%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-8%)' },
          '100%': { transform: 'translateX(0)' },
        },
        upDown: {
          '0%': { transform: 'translateY(8%)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
