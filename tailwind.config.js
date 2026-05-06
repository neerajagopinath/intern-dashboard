/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0f1117',
        card: '#171a23',
        muted: '#9ca3af',
        border: '#2a2f3a',
      },
      boxShadow: { soft: '0 8px 32px rgba(0,0,0,.24)' },
    },
  },
  darkMode: 'class',
  plugins: [],
};
