import type { Metadata } from 'next'
import LegalPageLayout from '@/components/legal/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn how Aneeras uses cookies and similar tracking technologies on our website and apps.',
  alternates: { canonical: 'https://aneeras.com/legal/cookie-policy' },
  robots: { index: true, follow: true },
}

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      description="How we use cookies and similar technologies to improve your experience."
      pdfPath="/legal/Cookie.pdf"
      lastUpdated="January 2026"
    />
  )
}
