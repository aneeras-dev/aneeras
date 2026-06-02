import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-indigo': '#2d3d7c',
        'royal-purple': '#4259A7',
        'soft-lavender': '#9CAED9',
        'cream': '#CBD3E5',
        dark: {
          DEFAULT: '#FFFFFF',
          100: '#F5F7FC',
          200: '#EBF0F8',
          300: '#CBD3E5',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        space: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #4259A7, #9CAED9)',
        'accent-gradient-reverse': 'linear-gradient(135deg, #9CAED9, #4259A7)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(66, 89, 167, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(66, 89, 167, 0.07), rgba(156, 174, 217, 0.04))',
        'glow-gradient': 'radial-gradient(circle at center, rgba(66, 89, 167, 0.25) 0%, transparent 70%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        gradient: 'gradient 8s ease infinite',
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        blob: 'blob 7s ease-in-out infinite',
        'blob-delayed': 'blob 7s ease-in-out 2.5s infinite',
        'blob-slow': 'blob 9s ease-in-out 4s infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(1.5deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(66, 89, 167, 0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(156, 174, 217, 0.4)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(66, 89, 167, 0.25)',
        'glow-lg': '0 0 80px rgba(66, 89, 167, 0.3)',
        'glow-soft': '0 0 20px rgba(156, 174, 217, 0.3)',
        glass: '0 8px 32px rgba(66, 89, 167, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
