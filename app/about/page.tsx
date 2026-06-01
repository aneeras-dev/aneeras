import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import AboutStats from '@/components/about/AboutStats'
import CTABanner from '@/components/home/CTABanner'

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Aneeras — Our Story, Mission & Vision',
  description: 'Learn about Aneeras — a product-first startup founded in 2026. Our mission, vision, core values, and the story behind building Tripknot.',
  url: 'https://aneeras.com/about',
  publisher: {
    '@type': 'Organization',
    name: 'Aneeras',
    url: 'https://aneeras.com',
    logo: 'https://aneeras.com/logo/aneeras-icon.png',
  },
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutHero />
      <MissionVision />
      <AboutStats />
      <CTABanner />
    </>
  )
}
