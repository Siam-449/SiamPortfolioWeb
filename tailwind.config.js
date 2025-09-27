/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#0d1224',
        'navy-medium': '#111827', // Added for CTA background
        'mint-green': '#64ffda',
        'light-slate': '#ccd6f6',
        'slate': '#8892b0',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['"Fira Code"', 'monospace']
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'stroke-dash': {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        blink: 'blink 1.2s infinite',
        'stroke-dash': 'stroke-dash 1.5s ease-out forwards',
      },
      dropShadow: {
        'glow-light': '0 0 10px rgba(20, 184, 166, 0.25)', // Teal glow for light mode
        'glow-dark': '0 0 10px rgba(100, 255, 218, 0.25)', // Mint green glow for dark mode
        'glow-subtle-light': '0 0 6px rgba(20, 184, 166, 0.2)', // More subtle teal glow
        'glow-subtle-dark': '0 0 6px rgba(100, 255, 218, 0.2)', // More subtle mint green glow
      },
    },
  },
  plugins: [],
}