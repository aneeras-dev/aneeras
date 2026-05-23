'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 bg-dark-200 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-accent-gradient opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-royal-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-purple/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-purple/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">
              Let's Build Together
            </span>
          </motion.span>

          <h2 className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight leading-[1.05]">
            Let's Build the{' '}
            <span className="text-gradient">Future</span>
            <br />
            Together.
          </h2>

          <p className="font-inter text-white/50 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're a potential partner, an early adopter, or someone who believes in what we're building — we'd love to connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-gradient text-white font-inter font-semibold text-base transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in Touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 font-inter font-medium text-base transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
