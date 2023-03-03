/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      },
      spacing: {
        74: '18.5rem',
        120: '30rem',
        160: '40rem',
        280: '70rem',
      },
      boxShadow: {
        grid: 'rgb(0 0 0 / 40%) 0px 2px 8px;',
      },
    },
  },
  plugins: [],
};
