'use client'
import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    year: '2022',
    quarter: 'Q4',
    title: 'The Idea',
    description: 'Aneeras was born from a single frustration: planning group travel is painfully broken. Two friends, one whiteboard, countless ideas.',
    color: 'bg-blue-400',
    textColor: 'text-blue-400',
  },
  {
    year: '2023',
    quarter: 'Q1',
    title: 'First Build',
    description: 'We built the first prototype of Tripknot in 30 days. Rough around the edges, but users loved the core idea of AI-powered trip planning.',
    color: 'bg-purple-400',
    textColor: 'text-purple-400',
  },
  {
    year: '2023',
    quarter: 'Q3',
    title: 'Beta Launch',
    description: 'Tripknot went live to 500 beta users. The response was overwhelming. 94% said it changed how they planned travel.',
    color: 'bg-pink-400',
    textColor: 'text-pink-400',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'Public Launch',
    description: 'Tripknot launched to the public. Within 3 months, we crossed 5,000 active users and 200+ group trips planned.',
    color: 'bg-green-400',
    textColor: 'text-green-400',
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Tripknot 2.0',
    description: 'We shipped Tripknot 2.0 with real-time group coordination, live booking integration, and our new AI recommendation engine.',
    color: 'bg-yellow-400',
    textColor: 'text-yellow-400',
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: 'What\'s Next',
    description: 'We\'re expanding to new markets, building new products, and growing the Aneeras family. The best is yet to come.',
    color: 'bg-soft-lavender',
    textColor: 'text-soft-lavender',
  },
]

export default function CompanyTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline-container',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -right-32 top-1/2 w-[400px] h-[400px] bg-royal-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Our Journey</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight">
            From Idea to{' '}
            <span className="text-gradient">Impact</span>
          </h2>
          <p className="font-inter text-white/50 text-lg max-w-xl mx-auto">
            Every great product has a story. Here's ours.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-royal-purple/50 via-soft-lavender/30 to-transparent" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div key={`${item.year}-${item.quarter}`} className="timeline-item relative flex gap-8">
                {/* Dot */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-dark-100 border border-white/10 flex flex-col items-center justify-center`}>
                    <span className={`font-space font-bold text-[10px] ${item.textColor}`}>{item.quarter}</span>
                    <span className="font-inter text-white/30 text-[8px]">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="glass rounded-2xl p-6 glow-card hover:border-royal-purple/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-space font-bold text-white text-lg">{item.title}</h3>
                      <span className={`inline-block px-2.5 py-1 rounded-lg ${item.textColor} bg-white/5 font-inter text-xs font-medium flex-shrink-0`}>
                        {item.year}
                      </span>
                    </div>
                    <p className="font-inter text-white/50 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
