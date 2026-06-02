'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import ParticleField from '@/components/ui/ParticleField'
import { staggerContainer, staggerItem } from '@/lib/animations'

const line1 = 'Our Story.'
const line2 = 'Our Mission & Vision.'

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.char', {
        opacity: 0,
        y: 60,
        duration: 0.6,
        stagger: 0.025,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[75vh] flex items-center overflow-hidden bg-white"
    >
      <FloatingBlobs />

      {/* Full-background particle network */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
      </div>

      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="hero-grid-line hero-grid absolute inset-0 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10 w-full container-custom py-20 pt-28 lg:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-6xl text-left"
        >
          {/* Badge */}
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
              <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide">
                About Aneeras
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <h1 className="font-space font-bold text-5xl sm:text-6xl xl:text-7xl text-[#4259A7] leading-[1.08] tracking-tight">
              {line1.split('').map((char, i) => (
                <span
                  key={i}
                  className={`char inline-block ${char === ' ' ? 'whitespace-pre' : ''}`}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
          {/* Gradient line as whole element — bg-clip-text breaks with per-char spans */}
          <motion.h1
            variants={staggerItem}
            className="font-space font-bold text-5xl sm:text-6xl xl:text-7xl text-gradient leading-[1.08] tracking-tight mb-8"
          >
            {line2}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={staggerItem}
            className="font-inter text-[#4259A7]/60 text-lg lg:text-xl leading-relaxed max-w-4xl"
          >
            We're a passionate team of builders, designers, and dreamers creating digital products that genuinely move people — emotionally, physically, and culturally.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
