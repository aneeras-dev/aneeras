'use client'
import { motion } from 'framer-motion'
import GlowCard from '@/components/ui/GlowCard'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Tripknot completely transformed how I travel. The AI itinerary builder saved me hours of planning, and the group coordination feature made our family trip to Bali absolutely seamless.',
    name: 'Aryan Mehta',
    role: 'Travel Enthusiast, Mumbai',
    avatar: 'AM',
    rating: 5,
    gradient: 'from-blue-500/10',
  },
  {
    quote:
      "Aneeras is building exactly what the travel-tech space needed. The product quality and attention to UX detail is outstanding. Tripknot feels like it was designed just for me.",
    name: 'Priya Sharma',
    role: 'Product Manager, Bangalore',
    avatar: 'PS',
    rating: 5,
    gradient: 'from-purple-500/10',
  },
  {
    quote:
      'We used Tripknot for our annual team offsite and it was a game-changer. Real-time collaboration, smart hotel suggestions, and a beautiful interface. Highly recommend!',
    name: 'Karan Patel',
    role: 'Startup Founder, Delhi',
    avatar: 'KP',
    rating: 5,
    gradient: 'from-pink-500/10',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-16 right-0 w-[500px] h-[400px] bg-deep-indigo/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Testimonials</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight">
            Loved by{' '}
            <span className="text-gradient">Travelers</span>
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-xl mx-auto">
            Real stories from people using Tripknot to create unforgettable journeys.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={staggerItem}>
              <GlowCard className={`p-7 h-full bg-gradient-to-br ${t.gradient} to-transparent`}>
                {/* Quote icon */}
                <div className="mb-5">
                  <Quote size={28} className="text-royal-purple/60" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-inter text-white/70 text-sm leading-relaxed mb-7">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-white font-space font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-space font-semibold text-white text-sm">{t.name}</div>
                    <div className="font-inter text-white/40 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto glow-card">
            <p className="font-space font-bold text-white/90 text-xl sm:text-2xl leading-relaxed">
              &ldquo;Our vision is to make travel planning as effortless and joyful as the trip itself. Tripknot is just the beginning.&rdquo;
            </p>
            <div className="mt-5 font-inter text-white/40 text-sm">— The Aneeras Team</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
