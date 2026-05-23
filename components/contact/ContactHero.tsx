'use client'
import { motion } from 'framer-motion'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ContactHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-dark pt-20">
      <FloatingBlobs />
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="relative z-10 container-custom py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
              <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Contact Us</span>
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight mb-6"
          >
            Let's{' '}
            <span className="text-gradient">Connect</span>
            <br />
            & Build.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="font-inter text-white/55 text-xl leading-relaxed max-w-xl"
          >
            Have an idea? A question? Or just want to say hi? We'd love to hear from you. Our team typically responds within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
