/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      orange: colors.orange,
      purple: '#aa89bb',
      purple2: '#9974ac',
      purple3: '#c8abdb',
      warmgray: colors.warmGray,
    },

    fontFamily: {
      font1: ['Montserrat', 'sans-serif'],
      font2: ['Comfortaa', 'sans-serif'],
      font3: ['Lora', 'serif'],
      font4: ['Quicksand', 'sans-serif'],
      font5: ['Noto Sans', 'sans-serif'],
    },
  },
  plugins: [],
}