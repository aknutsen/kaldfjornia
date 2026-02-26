import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm creams and wood tones
        cream: {
          DEFAULT: '#F5EDD8',
          50:  '#FDFAF4',
          100: '#F9F3E6',
          200: '#F5EDD8',
          300: '#EAD9B8',
          400: '#D9C090',
        },
        // Deep walnut browns
        walnut: {
          DEFAULT: '#2C1810',
          50:  '#8B6240',
          100: '#6B4A30',
          200: '#4E3420',
          300: '#2C1810',
          400: '#1A0D08',
        },
        // Warm amber/honey accent
        amber: {
          DEFAULT: '#C8860A',
          50:  '#F5D98A',
          100: '#E8C055',
          200: '#D4A428',
          300: '#C8860A',
          400: '#8B5E07',
        },
        // Forest green
        moss: {
          DEFAULT: '#3D5A3E',
          50:  '#8FAE90',
          100: '#6D8E6E',
          200: '#4E724F',
          300: '#3D5A3E',
          400: '#2A3E2B',
        },
        // Stone/slate
        stone: {
          DEFAULT: '#8C8480',
          50:  '#E8E4E0',
          100: '#C8C4C0',
          200: '#A8A4A0',
          300: '#8C8480',
          400: '#5A5650',
          500: '#3A3630',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // CSS-only wood grain pattern
        'wood-grain': `
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 40px,
            rgba(200,134,10,0.04) 40px,
            rgba(200,134,10,0.04) 42px,
            transparent 42px,
            transparent 88px,
            rgba(200,134,10,0.06) 88px,
            rgba(200,134,10,0.06) 91px,
            transparent 91px,
            transparent 140px,
            rgba(200,134,10,0.03) 140px,
            rgba(200,134,10,0.03) 142px
          )
        `,
        // Climbing wall grid
        'climb-grid': `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'wood-grain': '160px 100%',
        'climb-grid': '44px 44px',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      animation: {
        'grain-drift': 'grainDrift 20s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        grainDrift: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%':       { backgroundPosition: '5% 2%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
