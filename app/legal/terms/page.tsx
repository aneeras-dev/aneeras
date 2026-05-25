import type { Metadata } from 'next'
import LegalPageLayout from '@/components/legal/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Aneeras Terms of Service to understand the rules and guidelines for using our products and services.',
  alternates: { canonical: 'https://aneeras.com/legal/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      description="The rules and guidelines that govern your use of Aneeras products and services."
      pdfPath="/legal/terms-of-Use.pdf"
      lastUpdated="January 2026"
    />
  )
}
