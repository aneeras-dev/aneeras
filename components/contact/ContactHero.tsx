'use client'
import { motion } from 'framer-motion'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import ParticleField from '@/components/ui/ParticleField'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function ContactHero() {
  return (
    <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-white">
      <FloatingBlobs />

      <div className="absolute inset-0 pointer-events-none">
        <ParticleField />
      </div>

      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="hero-grid-line hero-grid absolute inset-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="relative z-10 w-full container-custom py-20 pt-28 lg:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-6xl text-left"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
              <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide">
                Contact Us
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-space font-bold text-5xl sm:text-6xl xl:text-7xl text-[#4259A7] leading-[1.08] tracking-tight mb-6"
          >
            Let's Connect
            <span className="block text-gradient">& Build Together.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="font-inter text-[#4259A7]/60 text-lg lg:text-xl leading-relaxed max-w-4xl"
          >
            Have an idea, a question, or just want to say hi? We'd love to hear from you. Our team typically responds within 24 hours.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
