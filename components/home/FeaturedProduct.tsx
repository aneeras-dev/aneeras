'use client'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Map, Users, Sparkles, CreditCard, ArrowUpRight } from 'lucide-react'
import GlowCard from '@/components/ui/GlowCard'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import PhoneMockup from '@/components/ui/PhoneMockup'
import { staggerContainer, staggerItem, fadeInLeft } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Map,
    title: 'Smart Trip Planning',
    description: 'AI-powered itinerary builder that creates perfect trips based on your preferences and budget.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Users,
    title: 'Group Travel Coordination',
    description: 'Effortlessly plan and coordinate trips with friends. Split costs, sync schedules, vote on activities.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    icon: Sparkles,
    title: 'AI Recommendations',
    description: 'Personalized destination suggestions, local experiences, and hidden gems powered by advanced AI.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: CreditCard,
    title: 'Seamless Booking',
    description: 'Book flights, hotels, and activities in one place. Best price guarantee with zero hidden fees.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
]

const statsData = [
  { end: 10000, suffix: '+', label: 'Active Travelers' },
  { end: 50, suffix: '+', label: 'Destinations' },
  { end: 98, suffix: '%', label: 'Satisfaction Rate' },
  { end: 4, suffix: '.9★', label: 'App Rating' },
]

export default function FeaturedProduct() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fp-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.fp-title',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.fp-stat', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.fp-stats',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-dark-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-deep-indigo/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fp-title">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender" />
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Featured Product</span>
          </span>

          {/* Tripknot logo */}
          <div className="flex justify-center mb-6">
            <div className="relative h-14 w-64 rounded-2xl overflow-hidden bg-white/8 border border-white/10 px-4 py-2">
              <Image
                src="/tripknot-logo.png"
                alt="Tripknot — Don't Just Travel. Connect."
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight">
            Your Smart{' '}
            <span className="text-gradient">Travel Companion</span>
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Plan, coordinate, and book unforgettable journeys with the power of AI — all in one beautifully designed app.
          </p>
        </div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Phone mockup */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 bg-royal-purple/20 rounded-full blur-[90px]" />
              </div>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PhoneMockup />
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <GlowCard className="p-6 h-full">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${feature.bg} mb-4`}>
                    <feature.icon size={20} className={feature.color} />
                  </div>
                  <h3 className="font-space font-semibold text-white text-base mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-white/45 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="fp-stats grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="fp-stat text-center py-8 px-6 glass rounded-2xl glow-card"
            >
              <div className="font-space font-bold text-4xl text-gradient mb-2">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="font-inter text-white/45 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://tripknot.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-gradient text-white font-inter font-semibold text-base transition-all duration-300 hover:shadow-glow-lg hover:scale-[1.03] active:scale-[0.98]"
          >
            Visit Tripknot
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}
