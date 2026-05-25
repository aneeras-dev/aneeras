import type { Metadata } from 'next'
import { Poppins, Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorGlow from '@/components/ui/CursorGlow'
import SmoothScroll from '@/components/ui/SmoothScroll'

const GTM_ID = 'GTM-T46BLM7P'
const GA_ID  = 'G-4T1QBN67SK'

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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`,
          }}
        />
      </head>
      <body className="bg-dark text-cream antialiased overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            className="hidden"
          />
        </noscript>
        <SmoothScroll>
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
