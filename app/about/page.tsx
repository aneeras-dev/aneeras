import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import AboutStats from '@/components/about/AboutStats'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Aneeras — a product-first startup founded in 2026. Our mission, vision, core values, and the story behind building Tripknot and future digital products.',
  keywords: ['about Aneeras', 'startup story', 'product-first company', 'Tripknot founders', 'digital product studio'],
  alternates: { canonical: 'https://aneeras.com/about' },
  openGraph: {
    title: 'About Aneeras — Our Story, Mission & Vision',
    description: 'Learn about Aneeras — a product-first startup on a mission to build digital experiences that genuinely move people.',
    url: 'https://aneeras.com/about',
  },
  twitter: {
    title: 'About Aneeras — Our Story, Mission & Vision',
    description: 'Learn about Aneeras — a product-first startup on a mission to build digital experiences that genuinely move people.',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <AboutStats />
      <CTABanner />
    </>
  )
}
