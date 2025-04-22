/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#323438',
          850: '#1c1e24',
          950: '#0c0d10',
        },
        purple: {
          950: '#2e1065',
        },
      },
    },
  },
  plugins: [],
};