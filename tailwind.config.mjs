/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: {
          950: '#0C0E12',
          900: '#12151A',
          850: '#181C23',
          800: '#1E232B',
          700: '#272D37',
          600: '#343B47',
          500: '#4A5260',
          400: '#6B7280',
        },
        cream: {
          50: '#FDFAF7',
          100: '#F5F0EB',
          200: '#E8E0D6',
          300: '#CFC5B8',
          400: '#9A9085',
        },
        accent: {
          DEFAULT: '#E0634A',
          light: '#F08B72',
          dark: '#C04F38',
          muted: 'rgba(224, 99, 74, 0.14)',
        },
        secondary: {
          DEFAULT: '#2DB896',
          light: '#4DD4B2',
          dark: '#249A7D',
          muted: 'rgba(45, 184, 150, 0.12)',
        },
        glow: {
          accent: 'rgba(224, 99, 74, 0.28)',
          secondary: 'rgba(45, 184, 150, 0.18)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'brick-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h28v14H0V0zm30 0h30v14H30V0zM0 16h30v14H0V16zm32 0h28v14H32V16z' fill='%23E0634A' fill-opacity='0.04'/%3E%3C/svg%3E\")",
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 48px -8px rgba(224, 99, 74, 0.35)',
        'glow-sm': '0 0 24px -4px rgba(224, 99, 74, 0.25)',
        'glow-secondary': '0 0 32px -6px rgba(45, 184, 150, 0.25)',
        'inner-glow': 'inset 0 0 60px -20px rgba(224, 99, 74, 0.06)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
