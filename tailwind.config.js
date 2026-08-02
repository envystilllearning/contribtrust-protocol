/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0a0a0a',
          secondary: '#737373',
          accent: '#00d4ff',
          background: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};
