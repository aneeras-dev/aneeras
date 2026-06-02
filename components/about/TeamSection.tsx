'use client'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import GlowCard from '@/components/ui/GlowCard'
import { staggerContainer, staggerItem } from '@/lib/animations'

const team = [
  {
    name: 'Roopavanan',
    role: 'Co-founder & CEO',
    bio: 'Visionary product builder with a drive to create digital experiences that feel inevitable. Obsessed with user problems, elegant solutions, and shipping things that matter.',
    initials: 'RV',
    gradient: 'from-deep-indigo via-royal-purple to-soft-lavender',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Yuva B.',
    role: 'Co-founder & CTO',
    bio: 'Full-stack engineer who believes great software is invisible. Passionate about performance, clean architecture, and building the technical foundation for products that scale.',
    initials: 'YB',
    gradient: 'from-royal-purple via-soft-lavender to-blue-400',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Aishwarya S.',
    role: 'Head of Design',
    bio: 'Crafting interfaces where beauty meets function. Bridges the gap between user psychology and pixel-perfect execution — every interaction tells a story.',
    initials: 'AS',
    gradient: 'from-blue-500 via-indigo-500 to-royal-purple',
    linkedin: '#',
    twitter: '#',
  },
]

export default function TeamSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] bg-royal-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">The People</span>
          </span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Meet the <span className="text-gradient">Builders</span>
          </h2>
          <p className="font-inter text-white/50 text-lg mt-4 max-w-xl">
            A small, focused team on a big mission — building digital products people actually love.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6 mb-10"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <GlowCard className="p-8 h-full border border-white/8 hover:border-royal-purple/30 transition-all duration-300 group">
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="font-space font-bold text-white text-xl">{member.initials}</span>
                </div>

                {/* Info */}
                <h3 className="font-space font-bold text-white text-xl mb-1">{member.name}</h3>
                <p className="text-soft-lavender font-inter text-sm font-medium mb-4">{member.role}</p>
                <p className="font-inter text-white/50 text-sm leading-relaxed mb-6">{member.bio}</p>

                {/* Social */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-royal-purple/20 border border-white/8 hover:border-royal-purple/30 flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={14} className="text-white/50 hover:text-soft-lavender" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-royal-purple/20 border border-white/8 hover:border-royal-purple/30 flex items-center justify-center transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter size={14} className="text-white/50 hover:text-soft-lavender" />
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Hiring callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-royal-purple/15"
        >
          <div>
            <h4 className="font-space font-bold text-white text-lg mb-1">We're growing fast</h4>
            <p className="font-inter text-white/45 text-sm">
              Passionate about product, design, or engineering? We'd love to meet you.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-gradient text-white font-inter font-semibold text-sm hover:shadow-glow hover:scale-[1.03] transition-all duration-300"
          >
            Join the Team
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
