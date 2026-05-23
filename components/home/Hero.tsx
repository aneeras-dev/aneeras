'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { gsap } from 'gsap'
import PhoneMockup from '@/components/ui/PhoneMockup'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import { staggerContainer, staggerItem, fadeInRight } from '@/lib/animations'

const stats = [
  { value: '10K+', label: 'Product Users' },
  { value: '2022', label: 'Founded' },
  { value: '4.9★', label: 'User Rating' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-grid-line',
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power1.inOut', stagger: 0.1 }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Animated blobs */}
      <FloatingBlobs />

      {/* Hero gradient */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Subtle grid */}
      <div className="hero-grid-line hero-grid absolute inset-0 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-28 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
                <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide">
                  Product-first Startup · Est. 2022
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="font-space font-bold text-5xl sm:text-6xl xl:text-7xl text-white leading-[1.08] tracking-tight mb-6"
            >
              Building Digital
              <span className="block text-gradient">Products That</span>
              Move People.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={staggerItem}
              className="font-inter text-white/55 text-lg lg:text-xl leading-relaxed mb-10 max-w-[500px]"
            >
              Aneeras creates next-generation applications focused on real-world experiences and modern technology. We build for the humans behind the screen.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent-gradient text-white font-inter font-semibold text-sm transition-all duration-300 hover:shadow-glow hover:scale-[1.03] active:scale-[0.98]"
              >
                Our Story
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 font-inter font-medium text-sm transition-all duration-300"
              >
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Play size={9} className="fill-white ml-0.5" />
                </span>
                Get in Touch
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-space font-bold text-2xl text-white">{stat.value}</div>
                  <div className="font-inter text-white/40 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end relative"
          >
            {/* Glow behind phone */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 bg-royal-purple/25 rounded-full blur-[100px]" />
            </div>

            <div className="relative">
              {/* Floating phone */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PhoneMockup />
              </motion.div>

              {/* Floating card: Trip planned */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-12 top-1/4 glass rounded-2xl px-4 py-3 shadow-glass"
              >
                <p className="text-white font-inter text-[11px] font-semibold">✈️ Trip Planned!</p>
                <p className="text-white/50 font-inter text-[10px] mt-0.5">Bali, Indonesia</p>
              </motion.div>

              {/* Floating card: AI suggestions */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -right-4 bottom-1/4 glass rounded-2xl px-4 py-3 shadow-glass"
              >
                <p className="text-white font-inter text-[11px] font-semibold">🤖 AI Matched</p>
                <p className="text-white/50 font-inter text-[10px] mt-0.5">3 Hotels Found</p>
              </motion.div>

              {/* Rating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -left-6 bottom-1/3 glass rounded-2xl px-3 py-2 shadow-glass"
              >
                <p className="text-yellow-400 text-sm font-bold">★ 4.9</p>
                <p className="text-white/50 font-inter text-[9px]">App Store</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-6 bg-gradient-to-b from-white/30 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
