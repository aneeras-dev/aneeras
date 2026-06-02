'use client'
import { motion } from 'framer-motion'
import { Target, Eye, Compass } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import { staggerContainer, staggerItem } from '@/lib/animations'

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To build digital products that eliminate friction from real-world experiences. We believe technology should feel effortless — empowering people to focus on what matters most.',
    accent: 'from-royal-purple/20 to-deep-indigo/10',
    iconColor: 'text-royal-purple',
    iconBg: 'bg-royal-purple/20',
    border: 'border-royal-purple/20 hover:border-royal-purple/50',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      "A world where every person can discover, plan, and experience the world without barriers. We're building the infrastructure for the next generation of travel and beyond.",
    accent: 'from-soft-lavender/15 to-royal-purple/5',
    iconColor: 'text-soft-lavender',
    iconBg: 'bg-soft-lavender/15',
    border: 'border-soft-lavender/20 hover:border-soft-lavender/50',
  },
  {
    icon: Compass,
    title: 'Our Philosophy',
    description:
      "Product-first. User-obsessed. Engineering-driven. We don't build features — we solve problems. Every pixel, every line of code serves the human using it.",
    accent: 'from-blue-400/15 to-indigo-400/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/15',
    border: 'border-blue-400/20 hover:border-blue-400/50',
  },
]

export default function MissionVision() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-32 top-1/2 w-[400px] h-[400px] bg-royal-purple/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom">
        <motion.div
          className="text-center mb-14"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Core Values</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-[#4259A7] mb-4 tracking-tight">
            What We{' '}
            <span className="text-gradient">Stand For</span>
          </h2>
          <p className="font-inter text-[#4259A7]/60 text-lg max-w-xl mx-auto">
            The principles that guide every decision we make at Aneeras.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div key={card.title} variants={staggerItem}>
              <GlowCard className={`p-8 h-full bg-gradient-to-br ${card.accent} border ${card.border} transition-all duration-300`}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.iconBg} mb-6`}>
                  <card.icon size={26} className={card.iconColor} />
                </div>
                <h3 className="font-space font-bold text-[#4259A7] text-xl mb-4">{card.title}</h3>
                <p className="font-inter text-[#9CAED9] text-sm leading-relaxed">{card.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Culture note */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 glass rounded-3xl p-10 lg:p-14 text-center max-w-4xl mx-auto glow-card"
        >
          <div className="text-4xl mb-5">🚀</div>
          <h3 className="font-space font-bold text-[#4259A7] text-2xl sm:text-3xl mb-4">
            Startup Culture, Enterprise Quality
          </h3>
          <p className="font-inter text-[#4259A7]/60 text-base leading-relaxed max-w-2xl mx-auto">
            We move with the urgency of a startup but build with the rigor of an enterprise. Fast iteration, strong foundations, and an obsession with quality — that's the Aneeras way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
