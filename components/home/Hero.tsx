'use client'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import PhoneMockup from '@/components/ui/PhoneMockup'

const stats = [
  { value: '10K+', label: 'Product Users' },
  { value: '4.9★', label: 'User Rating' },
  { value: '2026', label: 'Founded' },
]

export default function Hero() {
  return (
    <section className="bg-white pt-16 overflow-hidden">
      {/* Two-column header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — giant heading */}
          <div>
            <h1 className="font-syne font-bold text-[#111827] text-5xl sm:text-6xl xl:text-[72px] leading-[1.06] tracking-tight">
              Building Digital
              <br />
              Products That
              <br />
              <span className="text-gradient">Move People.</span>
            </h1>
          </div>

          {/* Right — description + CTA + stats */}
          <div className="lg:pt-3 flex flex-col gap-8">
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Aneeras creates next-generation applications focused on real-world experiences and modern technology. We build for the humans behind the screen.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4259A7] text-white font-inter font-semibold text-sm hover:bg-[#2d3d7c] transition-colors duration-200"
              >
                Our Story
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-inter font-medium text-sm hover:border-gray-300 hover:text-[#111827] transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-syne font-bold text-xl text-[#111827]">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-0.5 font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mockup showcase — light gray card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative bg-[#F5F7FC] rounded-3xl overflow-hidden flex items-center justify-center min-h-[480px] lg:min-h-[580px]">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 hero-dot-grid opacity-50" />

          {/* Floating badge — top left */}
          <div className="absolute top-8 left-8 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-inter text-sm font-medium text-[#111827]">Product-first Startup</span>
          </div>

          {/* Floating badge — top right */}
          <div className="absolute top-8 right-8 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
              ))}
              <span className="font-inter text-sm font-semibold text-[#111827] ml-1">4.9</span>
            </div>
            <div className="text-gray-400 text-xs mt-0.5 font-inter">User Rating</div>
          </div>

          {/* Phone mockup */}
          <div className="relative z-10 py-8">
            <PhoneMockup />
          </div>

          {/* Floating badge — bottom left */}
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
            <div className="font-syne font-bold text-[#111827] text-sm">10,000+</div>
            <div className="text-gray-400 text-xs font-inter">Early Users</div>
          </div>

          {/* Floating badge — bottom right */}
          <div className="absolute bottom-8 right-8 bg-[#4259A7] rounded-2xl px-4 py-3 shadow-sm flex items-center gap-2">
            <ArrowUpRight size={16} className="text-white" />
            <span className="font-inter text-sm font-semibold text-white">Explore Tripknot</span>
          </div>
        </div>
      </div>
    </section>
  )
}
