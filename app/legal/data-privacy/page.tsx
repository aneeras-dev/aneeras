import type { Metadata } from 'next'
import LegalPageLayout from '@/components/legal/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Data Privacy',
  description: 'Understand how Aneeras handles, stores, and processes your data in compliance with global data protection standards.',
  alternates: { canonical: 'https://aneeras.com/legal/data-privacy' },
  robots: { index: true, follow: true },
}

export default function DataPrivacyPage() {
  return (
    <LegalPageLayout
      title="Data Privacy"
      description="How we handle, store, and process your data in line with global privacy standards."
      pdfPath="/legal/data-privacy.pdf"
      lastUpdated="January 2026"
    />
  )
}
