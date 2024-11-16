/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',   // App Router pages
    './src/pages/**/*.{js,ts,jsx,tsx}', // Traditional Pages Router
    './src/components/**/*.{js,ts,jsx,tsx}', // Shared components
    './src/**/*.{js/ts.jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

