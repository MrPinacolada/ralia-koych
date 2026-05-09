import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        bone: '#F8F4EC',
        paper: '#FFFFFF',
        ink: '#1A1814',
        moss: '#3F4E36',
        clay: '#B85F40',
        sand: '#E8DDC8',
        fog: '#6B7165',
        gold: '#A98855',
        cream: '#FAEFE2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'PT Serif', 'Georgia', 'serif'],
        sans: ['Onest', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section-xs': '4rem',
        'section-sm': '6rem',
        section: '8rem',
        'section-lg': '10rem',
        'section-xl': '14rem',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(26, 24, 20, 0.04)',
        soft: '0 2px 8px rgba(26, 24, 20, 0.06)',
        lift: '0 8px 24px rgba(26, 24, 20, 0.08)',
        focus: '0 0 0 3px rgba(63, 78, 54, 0.25)',
      },
      maxWidth: {
        narrow: '580px',
        text: '720px',
        wide: '1180px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
