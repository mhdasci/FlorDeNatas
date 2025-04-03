/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          700: '#795548',
          900: '#3E2723'
        },
        pink: {
          300: '#f8bbd0',
          400: '#f48fb1',
          500: '#ec407a'
        }
      }
    },
  },
  plugins: [],
};