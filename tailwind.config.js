/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#AB8F54',
        'bright-blue': '#0273D0',
        'dark-red': '#7A1F2A',
        'off-white': '#F5EFE7',
        'medium-gray': '#666666',
        'dark-gray': '#1A1D24',
      },
      fontFamily: {
        'league-spartan': ['League Spartan', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

