/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.njk",
    "./src/**/*.{html,njk,md}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: { // <--- This styles the content in the LIGHT/DEFAULT theme
          css: {
            'h3': {
              // Set the color for light mode (e.g., a dark gray)
              'color': '#f3f4f6', // A good dark gray (gray-800) for light mode contrast
            },
            // ... other light mode styles
          },
        },
        dark: { // <--- This styles the content specifically for DARK mode
          css: {
            'h3': {
              'color': '#f3f4f6', // A very light gray (gray-100) for dark mode contrast
            },
            // ... other dark mode styles
          }
        }
      },
    },
  },
// ...
  plugins: [
    require('@tailwindcss/typography'),
    // ... any other plugins
  ],
}

