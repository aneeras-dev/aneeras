'use client'
import { motion } from 'framer-motion'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { staggerContainer, staggerItem } from '@/lib/animations'

const stats = [
  { end: 2026,  suffix: '',   label: 'Year Founded',       icon: '🚀', description: 'Born with a bold idea' },
  { end: 1,     suffix: '',   label: 'Flagship Product',   icon: '📱', description: 'Tripknot — smart travel' },
  { end: 5,     suffix: '+',  label: 'Team Members',       icon: '🧑‍💻', description: 'Builders & dreamers' },
  { end: 10,    suffix: 'K+', label: 'Early Users',        icon: '👥', description: 'Beta community growing' },
  { end: 4,     suffix: '.9★',label: 'User Rating',        icon: '⭐', description: 'Loved from day one' },
  { end: 2,     suffix: '+',  label: 'Products in Pipeline', icon: '🔭', description: 'Beyond travel' },
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
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Aneeras by the Numbers</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            Early Days,{' '}
            <span className="text-gradient">Real Momentum</span>
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-xl mx-auto">
            We're just getting started — and the numbers already say something.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
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
