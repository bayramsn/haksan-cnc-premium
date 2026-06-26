/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#CF060C', light: '#E82030', dark: '#A8050A' },
        secondary: '#1A1A1A',
        text: '#3D3E3F',
        surface: '#F9F9F9',
        border: '#EBEBEB',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        site: '1428px',
      },
    },
  },
  plugins: [],
};
