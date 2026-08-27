/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#F2EBDC',
          300: '#E8DCB8',
          400: '#D9C694',
        },
        terracotta: {
          DEFAULT: '#D4A373',
          light: '#E6BC92',
          dark: '#B58252',
        },
        dustyrose: {
          DEFAULT: '#C97A7E',
          light: '#DE999D',
          dark: '#A85A5E',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          muted: '#555555',
          light: '#888888',
        },
        surface: {
          white: '#FAFAFA',
          card: 'rgba(255, 255, 255, 0.85)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(45, 45, 45, 0.08)',
        'glow': '0 0 25px rgba(212, 163, 115, 0.25)',
        'glass': '0 8px 32px 0 rgba(199, 160, 120, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
