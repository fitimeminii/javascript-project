/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",
  'node_modules/preline/dist/*.js',],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated'),
    require('preline/plugin'),
    require('tailwind-scrollbar'),
  ],
}