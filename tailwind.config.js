/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [ "dark"],
  },
  plugins: [require('daisyui')],
}

