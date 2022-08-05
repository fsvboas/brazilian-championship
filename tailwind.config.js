/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    listStyleType: {
      square: 'square'
    },
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / 1 )',
        secondary: 'rgb(var(--secondary) / 1 )',
        dark: 'rgb(var(--dark) / 1 )',
        light: 'rgb(var(--light) / 1 )',
      }
    },
  },
  plugins: [],
}
