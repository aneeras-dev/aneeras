import type { Metadata } from 'next'
import LegalPageLayout from '@/components/legal/LegalPageLayout'

export const metadata: Metadata = {
  title: 'End User License Agreement',
  description: 'Read the Aneeras End User License Agreement (EULA) governing the use of our software and applications.',
  alternates: { canonical: 'https://aneeras.com/legal/eula' },
  robots: { index: true, follow: true },
}

export default function EulaPage() {
  return (
    <LegalPageLayout
      title="End User License Agreement"
      description="The license terms governing your use of Aneeras software and applications."
      pdfPath="/legal/eula.pdf"
      lastUpdated="January 2026"
    />
  )
}
