/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.njk",
    "./src/**/*.{html,njk,md}",
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

