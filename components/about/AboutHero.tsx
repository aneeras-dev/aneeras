'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function AboutHero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.char', {
        opacity: 0,
        y: 60,
        duration: 0.6,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  const headline = 'Our Story. Our Mission.'

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden bg-dark pt-20">
      <FloatingBlobs />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative z-10 container-custom py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
              <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">About Aneeras</span>
            </span>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <h1 className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight">
              {headline.split('').map((char, i) => (
                <span
                  key={i}
                  className={`char inline-block ${char === ' ' ? 'whitespace-pre' : ''}`}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          <motion.h2
            variants={staggerItem}
            className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl text-gradient mb-8 leading-[1.08] tracking-tight"
          >
            Our Vision.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-inter text-white/55 text-xl leading-relaxed max-w-2xl"
          >
            We're a passionate team of builders, designers, and dreamers creating digital products that genuinely move people — emotionally, physically, and culturally.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
