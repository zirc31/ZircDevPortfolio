/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '200px',
        'md': '768px',
        'lg': '992px',
      },
    },
  },
  plugins: [],
}

