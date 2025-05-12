// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#121212',
        'anthracite': '#1E1E1E',
        'royal-gold': '#D4AF37',
        'ivory-white': '#FFFFF0',
        'night-blue': '#0F1E2D',
        'taupe-gray': '#483C32',
        'burgundy': '#800020',
        'emerald': '#046307',
        'gold-light': '#E6C158',
        'gold-dark': '#B89030',
        'success': '#2E7D32',
        'error': '#C62828',
        'info': '#1976D2',
        'disabled': '#5E5E5E',
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to right, #121212, #1E1E1E)',
        'gold-gradient': 'linear-gradient(to right, #D4AF37, #B89030)',
        'card-overlay': 'radial-gradient(rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.95))',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}