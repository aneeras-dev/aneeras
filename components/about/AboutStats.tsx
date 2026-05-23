'use client'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { staggerContainer, staggerItem } from '@/lib/animations'

const stats = [
  { end: 10000, suffix: '+', label: 'Active Users', icon: '👥', description: 'travelers on Tripknot' },
  { end: 50, suffix: '+', label: 'Destinations', icon: '🌍', description: 'cities covered' },
  { end: 2000, suffix: '+', label: 'Trips Planned', icon: '✈️', description: 'memorable journeys' },
  { end: 98, suffix: '%', label: 'Satisfaction', icon: '⭐', description: 'user happiness rate' },
  { end: 12, suffix: '+', label: 'Team Members', icon: '🧑‍💻', description: 'passionate builders' },
  { end: 3, suffix: 'x', label: 'YoY Growth', icon: '📈', description: 'year-over-year growth' },
]

export default function AboutStats() {
  return (
    <section className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-royal-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">By the Numbers</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Traction &{' '}
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-xl mx-auto">
            Numbers that reflect the real impact Aneeras is having on the world.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="glass rounded-2xl p-7 text-center glow-card group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="font-space font-bold text-4xl lg:text-5xl text-gradient mb-2">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-space font-semibold text-white/80 text-base mb-1">{stat.label}</div>
              <div className="font-inter text-white/35 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
