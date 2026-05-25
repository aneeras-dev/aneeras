import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import AboutStats from '@/components/about/AboutStats'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'About — Aneeras',
  description:
    'Meet the team behind Aneeras — our mission, vision, the people building it, and the numbers that show we\'re just getting started.',
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
