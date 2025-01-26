/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      colors: {
        navy: {
          800: '#1a1f35',
          900: '#0f1729',
        },
      },
    },
  },
  plugins: [],
};