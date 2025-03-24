/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts,scss}",
    ],
    theme: {
      extend: {
        colors: {
          'theme-blue': '#3b82f6',
        }
      },
    },
    plugins: [],
  }