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
        'deep-indigo': '#2C2678',
        'royal-purple': '#4B4AA8',
        'soft-lavender': '#8B8CC9',
        'cream': '#F8F8F8',
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#0f0f1a',
          200: '#13131f',
          300: '#1a1a2e',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        space: ['var(--font-space)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #2C2678, #8B8CC9)',
        'accent-gradient-reverse': 'linear-gradient(135deg, #8B8CC9, #2C2678)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(75, 74, 168, 0.25) 0%, rgba(10, 10, 15, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(44, 38, 120, 0.12), rgba(139, 140, 201, 0.06))',
        'glow-gradient': 'radial-gradient(circle at center, rgba(75, 74, 168, 0.4) 0%, transparent 70%)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(75, 74, 168, 0.25)' },
          '50%': { boxShadow: '0 0 60px rgba(139, 140, 201, 0.5)' },
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
        glow: '0 0 40px rgba(75, 74, 168, 0.35)',
        'glow-lg': '0 0 80px rgba(75, 74, 168, 0.4)',
        'glow-soft': '0 0 20px rgba(139, 140, 201, 0.2)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config
