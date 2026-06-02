'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowUpRight, Building2 } from 'lucide-react'
import Image from 'next/image'

const values = [
  'Product-first mindset, always',
  'Relentless user obsession',
  'Engineering-driven execution',
  'Move fast, ship quality',
  'Radical simplicity in design',
]

const floatingChips = [
  { emoji: '💡', label: 'Innovation',  top: 'top-6',    left: 'left-6',    delay: 0   },
  { emoji: '🚀', label: 'Speed',       top: 'top-6',    right: 'right-44', delay: 0.6 },
  { emoji: '🎯', label: 'Focus',       top: 'top-28',   left: 'left-4',    delay: 1.2 },
  { emoji: '⚡', label: 'Execution',   bottom: 'bottom-40', left: 'left-20', delay: 0.9 },
]

const tripStats = [
  { value: '10K+', label: 'Early Users'  },
  { value: '4.9★', label: 'User Rating'  },
  { value: '50+',  label: 'Destinations' },
]

export default function CompanySection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">

      {/* Header */}
      <div className="container-custom text-center mb-12">
        <motion.div initial={{ y: 20 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-inter font-medium tracking-wide uppercase mb-5">
            <Building2 size={11} className="text-[#4259A7]" />
            About Us
          </span>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-[#111827] tracking-tight mb-4">
            Explore Our{' '}
            <span className="text-[#4259A7]">Standout Story</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-inter leading-relaxed">
            A product company born in 2026 with a singular mission — build digital
            products that genuinely change how people live and explore.
          </p>
        </motion.div>
      </div>

      {/* Bento grid */}
      <div className="container-custom grid grid-cols-1 lg:grid-cols-5 gap-4">

        {/* ── Card 1 — Company identity (large, top-left) ── */}
        <motion.div
          initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="lg:col-span-3 bg-[#EBF0F8] rounded-3xl p-8 relative overflow-hidden min-h-[380px] flex flex-col justify-end"
        >
          {/* Plus decorators */}
          <span className="absolute top-6 right-32 text-[#9CAED9]/40 text-2xl font-light select-none">+</span>
          <span className="absolute top-16 right-10 text-[#9CAED9]/30 text-xl font-light select-none">+</span>
          <span className="absolute top-36 right-24 text-[#9CAED9]/20 text-xl font-light select-none">+</span>
          <span className="absolute bottom-24 right-10 text-[#9CAED9]/30 text-2xl font-light select-none">+</span>

          {/* Floating chips */}
          {floatingChips.map((chip) => (
            <motion.div
              key={chip.label}
              className={`absolute ${chip.top ?? ''} ${chip.left ?? ''} ${(chip as { right?: string }).right ?? ''} ${(chip as { bottom?: string }).bottom ?? ''} bg-white rounded-xl px-3 py-2 shadow-sm border border-white flex items-center gap-2`}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3.5 + chip.delay, repeat: Infinity, ease: 'easeInOut', delay: chip.delay }}
            >
              <span className="text-base leading-none">{chip.emoji}</span>
              <span className="text-xs font-inter font-medium text-gray-600">{chip.label}</span>
            </motion.div>
          ))}

          {/* Central company card */}
          <motion.div
            className="absolute top-18 right-8 bg-white rounded-2xl p-5 shadow-md border border-gray-100 w-[190px]"
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 overflow-hidden">
              <Image src="/logo/aneeras-icon.png" alt="Aneeras" width={36} height={36} className="w-full h-full object-cover" />
            </div>
            <div className="font-syne font-bold text-[#111827] text-sm mb-0.5">Aneeras</div>
            <div className="text-gray-400 text-[11px] font-inter">Product Company · 2026</div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <span className="text-[10px] text-gray-400 font-inter">Active & Shipping</span>
            </div>
          </motion.div>

          {/* Bottom text */}
          <div className="relative z-10">
            <h3 className="font-syne font-bold text-[#111827] text-2xl mb-2">Born to Build</h3>
            <p className="text-gray-500 text-sm font-inter leading-relaxed max-w-xs">
              Founded with a single obsession — create digital products that
              eliminate friction from the real world.
            </p>
          </div>
        </motion.div>

        {/* ── Card 2 — Core values (top-right) ── */}
        <motion.div
          initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden"
        >
          {/* Dot-pattern top-right corner */}
          <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-60 rounded-bl-3xl" />

          <div className="relative z-10">
            <h3 className="font-syne font-bold text-[#111827] text-xl mb-1">What Drives Us</h3>
            <p className="text-gray-400 text-sm font-inter mb-6 leading-relaxed">
              The principles guiding every decision we make.
            </p>

            <ul className="space-y-4">
              {values.map((v, i) => (
                <li key={v}>
                  <motion.div
                    initial={{ x: -12 }} whileInView={{ x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#EBF0F8] flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-[#4259A7]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#111827] font-inter text-sm">{v}</span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Card 3 — Tripknot showcase (bottom-left) ── */}
        <motion.div
          initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3 bg-[#EBF0F8] rounded-3xl p-8 relative overflow-hidden min-h-[300px] flex flex-col justify-between"
        >
          {/* Plus decorators */}
          <span className="absolute top-8 right-16 text-[#9CAED9]/40 text-2xl font-light select-none">+</span>
          <span className="absolute bottom-8 right-8 text-[#9CAED9]/30 text-2xl font-light select-none">+</span>

          {/* Top content */}
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[10px] font-inter font-semibold text-[#4259A7] uppercase tracking-widest mb-1">
                Our Flagship Product
              </div>
              <h3 className="font-syne font-bold text-[#111827] text-2xl mb-2">
                Tripknot
              </h3>
              <p className="text-gray-500 text-sm font-inter leading-relaxed max-w-xs">
                AI-powered travel companion that plans, books, and personalises every journey.
              </p>
            </div>
            <Link
              href="https://tripknot.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4259A7] text-white font-inter font-semibold text-xs hover:bg-[#2d3d7c] transition-colors"
            >
              Explore <ArrowUpRight size={12} />
            </Link>
          </div>

          {/* Stats + floating trip cards */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-6">
            {/* Stats */}
            <div className="flex gap-8">
              {tripStats.map((s) => (
                <div key={s.label}>
                  <div className="font-syne font-bold text-2xl text-[#111827]">{s.value}</div>
                  <div className="text-gray-400 text-xs font-inter mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Floating trip cards */}
            <div className="flex flex-col gap-2">
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image src="/tag-1.png" alt="Rayar's Mess" width={260} height={80} className="rounded-xl shadow-sm" />
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <Image src="/tag2.png" alt="Heritage Grand" width={260} height={80} className="rounded-xl shadow-sm" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── Card 4 — Dark CTA (bottom-right) ── */}
        <motion.div
          initial={{ y: 24 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 bg-[#4259A7] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
        >
          {/* Abstract SVG shapes */}
          <svg className="absolute top-0 right-0 w-44 h-44 opacity-10" viewBox="0 0 200 200" fill="none">
            <path d="M160 20 C200 60 200 140 160 180 C120 200 40 180 20 140 C0 100 20 40 60 20 C100 0 140 -10 160 20Z" fill="white"/>
          </svg>
          <svg className="absolute bottom-0 left-0 w-28 h-28 opacity-10" viewBox="0 0 200 200" fill="none">
            <circle cx="60" cy="140" r="80" stroke="white" strokeWidth="24"/>
          </svg>

          <div className="relative z-10">
            <div className="text-[#CBD3E5] text-[10px] font-inter font-semibold uppercase tracking-widest mb-3">
              Ready to connect?
            </div>
            <h3 className="font-syne font-bold text-white text-2xl leading-tight mb-4">
              Join the<br />Journey
            </h3>
            <p className="text-[#CBD3E5] text-sm font-inter leading-relaxed">
              Partner with us, invest, or just say hello — we respond within 24 hours.
            </p>
          </div>

          <div className="relative z-10 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#4259A7] font-inter font-semibold text-sm hover:bg-gray-50 transition-colors duration-200"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
