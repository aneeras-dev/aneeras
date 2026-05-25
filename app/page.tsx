import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import FeaturedProduct from '@/components/home/FeaturedProduct'
import Technologies from '@/components/home/Technologies'
import WhyAneeras from '@/components/home/WhyAneeras'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Aneeras — Building Digital Products That Move People',
  description:
    'Aneeras is a product-first startup creating next-generation digital experiences. Explore Tripknot — the smart travel companion built for modern explorers.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <Technologies />
      <WhyAneeras />
      <CTABanner />
    </>
  )
}
