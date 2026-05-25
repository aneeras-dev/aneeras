'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import FloatingBlobs from '@/components/ui/FloatingBlobs'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface Props {
  title: string
  description: string
  pdfPath: string
  lastUpdated: string
}

export default function LegalPageLayout({ title, description, pdfPath, lastUpdated }: Props) {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden bg-dark pt-20">
        <FloatingBlobs />
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

        <div className="relative z-10 w-full container-custom py-14 pt-20">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerItem}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-inter text-sm transition-colors duration-200 mb-7"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </motion.div>

            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
                <FileText size={12} className="text-soft-lavender" />
                <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Legal</span>
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight mb-4"
            >
              {title}
            </motion.h1>

            <motion.p variants={staggerItem} className="font-inter text-white/50 text-base max-w-xl mb-3">
              {description}
            </motion.p>

            <motion.p variants={staggerItem} className="font-inter text-white/25 text-sm">
              Last updated: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Document */}
      <section className="bg-dark pb-20">
        <div className="container-custom">
          <div className="flex justify-end mb-4">
            <a
              href={pdfPath}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royal-purple/15 border border-royal-purple/25 text-soft-lavender hover:bg-royal-purple/25 font-inter text-sm font-medium transition-all duration-200"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/8 h-[80vh]">
            <iframe
              src={pdfPath}
              className="w-full h-full bg-white"
              title={title}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
