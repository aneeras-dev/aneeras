import type { Metadata } from 'next'
import { Poppins, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorGlow from '@/components/ui/CursorGlow'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aneeras — Building Digital Products That Move People',
    template: '%s | Aneeras',
  },
  description:
    'Aneeras creates next-generation applications focused on real-world experiences and modern technology. Home of Tripknot — the smart travel companion.',
  keywords: [
    'Aneeras',
    'Tripknot',
    'travel app',
    'digital products',
    'startup',
    'Next.js',
    'modern web',
  ],
  authors: [{ name: 'Aneeras' }],
  creator: 'Aneeras',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aneeras.com',
    title: 'Aneeras — Building Digital Products That Move People',
    description:
      'Aneeras creates next-generation applications focused on real-world experiences and modern technology.',
    siteName: 'Aneeras',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aneeras — Building Digital Products That Move People',
    description:
      'Aneeras creates next-generation applications focused on real-world experiences and modern technology.',
    creator: '@aneeras',
  },
  icons: {
    icon: '/logo/aneeras-icon.png',
    apple: '/logo/aneeras-icon.png',
    shortcut: '/logo/aneeras-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-dark text-cream antialiased overflow-x-hidden">
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
