import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Aneeras — Let\'s Build Together',
  description: 'Get in touch with Aneeras. Whether you have a partnership idea, a product question, or just want to say hi — we respond within 24 hours.',
  url: 'https://aneeras.com/contact',
  publisher: {
    '@type': 'Organization',
    name: 'Aneeras',
    url: 'https://aneeras.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@aneeras.com',
      contactType: 'customer support',
      availableLanguage: 'English',
    },
  },
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Aneeras. Whether you have a partnership idea, a product question, or just want to say hi — we respond within 24 hours.',
  keywords: ['contact Aneeras', 'Aneeras support', 'partnership', 'get in touch', 'startup contact'],
  alternates: { canonical: 'https://aneeras.com/contact' },
  openGraph: {
    title: 'Contact Aneeras — Let\'s Build Together',
    description: 'Have an idea or a question? Reach out to the Aneeras team — we\'d love to connect.',
    url: 'https://aneeras.com/contact',
  },
  twitter: {
    title: 'Contact Aneeras — Let\'s Build Together',
    description: 'Have an idea or a question? Reach out to the Aneeras team — we\'d love to connect.',
  },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactHero />
      <section className="section-padding bg-dark-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-deep-indigo/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            {/* Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
