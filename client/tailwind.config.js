/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1A73E8',
        bgColor: 'EEF5FF',
      },
      fontSize: {
        med: '20px',
      }
    },
  },
  plugins: [],
})