/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0f',
          darkAlt: '#111118',
          darkSurface: '#16161f',
          darkBorder: '#1e1e2a',
          rose: '#d4729a',
          roseLight: '#f0a2bc',
          roseDark: '#b85a7b',
          gold: '#e5c06e',
          goldLight: '#f4dca8',
          goldDark: '#c9a34a',
          pink: '#f06292',
          cream: '#faf4ec',
          muted: '#9ca3af',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['Satisfy', 'cursive'],
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2s infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 100%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 100%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-ring': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(212,114,154,0.15)',
        'glow-md': '0 0 20px rgba(212,114,154,0.25)',
        'glow-lg': '0 0 40px rgba(212,114,154,0.35)',
        'glow-gold': '0 0 25px rgba(229,192,110,0.2)',
        'glow-rose': '0 0 40px rgba(212,114,154,0.3)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}