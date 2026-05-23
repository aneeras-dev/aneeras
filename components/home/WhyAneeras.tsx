'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, Layers, Heart, Zap, Rocket, Code2 } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import { staggerContainer, staggerItem } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const bentoItems = [
  {
    icon: Lightbulb,
    title: 'Product Innovation',
    description: 'We ship ideas that matter. Every feature starts with a user problem and ends with an elegant solution.',
    size: 'col-span-2 sm:col-span-1 lg:col-span-2',
    gradient: 'from-yellow-500/10 to-orange-500/5',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-400/10',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Built to grow. Our systems handle millions of requests without breaking a sweat.',
    size: 'col-span-2 sm:col-span-1',
    gradient: 'from-blue-500/10 to-cyan-500/5',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
  },
  {
    icon: Heart,
    title: 'User-Centric Design',
    description: 'Beautiful interfaces that feel intuitive from the first tap. Accessibility is never an afterthought.',
    size: 'col-span-2 sm:col-span-1',
    gradient: 'from-pink-500/10 to-rose-500/5',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-400/10',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Sub-second load times. Optimized for Core Web Vitals. Performance is a feature.',
    size: 'col-span-2 sm:col-span-1',
    gradient: 'from-green-500/10 to-emerald-500/5',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-400/10',
  },
  {
    icon: Rocket,
    title: 'Startup Speed',
    description: 'We move fast. From ideation to production in record time without sacrificing quality.',
    size: 'col-span-2 sm:col-span-1',
    gradient: 'from-purple-500/10 to-violet-500/5',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-400/10',
  },
  {
    icon: Code2,
    title: 'Modern Engineering',
    description: 'TypeScript, testing, CI/CD, clean architecture. We follow best practices because they work.',
    size: 'col-span-2 sm:col-span-1 lg:col-span-2',
    gradient: 'from-indigo-500/10 to-blue-500/5',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-400/10',
  },
]

export default function WhyAneeras() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bento-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.bento-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-deep-indigo/15 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Why Aneeras</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight">
            The{' '}
            <span className="text-gradient">Aneeras</span>
            {' '}Difference
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine deep technical expertise with a relentless focus on product quality to build experiences that stand out.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-2 lg:grid-cols-4 gap-4">
          {bentoItems.map((item) => (
            <div key={item.title} className={`bento-card ${item.size}`}>
              <GlowCard className={`h-full p-7 bg-gradient-to-br ${item.gradient}`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${item.iconBg} mb-5`}>
                  <item.icon size={22} className={item.iconColor} />
                </div>
                <h3 className="font-space font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="font-inter text-white/45 text-sm leading-relaxed">{item.description}</p>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
