/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        md: '900px',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      },
      spacing: {
        120: '30rem',
        160: '40rem',
      },
      boxShadow: {
        grid: 'rgb(0 0 0 / 40%) 0px 2px 8px;',
      },
    },
  },
  plugins: [],
};
