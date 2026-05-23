import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import CompanyTimeline from '@/components/about/CompanyTimeline'
import MissionVision from '@/components/about/MissionVision'
import AboutStats from '@/components/about/AboutStats'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'About — Aneeras',
  description:
    'Learn about Aneeras — who we are, our mission, and the story behind building Tripknot and other digital products that move people.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CompanyTimeline />
      <AboutStats />
      <CTABanner />
    </>
  )
}
