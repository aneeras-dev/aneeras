import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact — Aneeras',
  description:
    "Get in touch with Aneeras. Whether you have a question, a partnership idea, or just want to say hi — we'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <>
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
