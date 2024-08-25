/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input-focus': '0 0 8px rgba(0, 0, 0, 0.2)',
      },
      gradientColorStops: {
        'focus-start': '#FFB6C1', // Soft pink
        'focus-end': '#B0E57C', // Light green
      },
    },
  },
  plugins: [],
}
