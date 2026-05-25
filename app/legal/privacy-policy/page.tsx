import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Aneeras Privacy Policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://aneeras.com/legal/privacy-policy' },
  robots: { index: true, follow: true },
}

const sections = [
  {
    number: '1',
    title: 'Introduction',
    content: (
      <p>
        Aneeras LLP (hereinafter <strong>Aneeras</strong>, <strong>we</strong>, <strong>our</strong>, or <strong>us</strong>) is committed to
        protecting the privacy of all users (<strong>you</strong> or <strong>User</strong>) of the Aneeras mobile application and website
        (collectively, the <strong>Platform</strong>). This Privacy Policy explains what personal information we collect, how we use it,
        how we share it, and the rights you have over it. By using the Platform, you agree to the terms of this Privacy Policy.
      </p>
    ),
  },
  {
    number: '2',
    title: 'Information We Collect',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-space font-semibold text-white text-base mb-3">2.1 Information You Provide Directly</h4>
          <ul className="space-y-2">
            {[
              'Full name, email address, phone number, and location during account registration',
              'Profile photo, bio, travel preferences, and home location',
              'Communications you send to us including support requests and feedback',
              'Business listing information submitted by operators: name, address, category, photos, hours, and contact details',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-lavender flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-space font-semibold text-white text-base mb-3">2.2 Information Collected Automatically</h4>
          <ul className="space-y-2">
            {[
              'Device identifiers (IDFA on iOS, GAID on Android), IP address, operating system, and browser type',
              'App usage data: pages viewed, searches performed, listings clicked, and time spent on features',
              'Location data (with your permission): GPS coordinates for trip planning and nearby listing discovery',
              'Log data: crash reports, performance data, error logs, and timestamps',
              'Cookies and similar tracking technologies on the web platform',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-lavender flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-space font-semibold text-white text-base mb-3">2.3 Information from Third Parties</h4>
          <ul className="space-y-2">
            {[
              'If you sign in via Google or Apple, we receive your name, email, and profile photo from those providers',
              'Publicly available travel and geographic data from mapping and tourism APIs',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-lavender flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: '3',
    title: 'How We Use Your Information',
    content: (
      <ul className="space-y-2">
        {[
          'To create, maintain, and manage your account on the Platform',
          'To provide trip planning, itinerary generation, map-based discovery, and personalized travel recommendations',
          'To display and manage business listings submitted by operators',
          'To send transactional emails, notifications, and account alerts',
          'To send promotional communications about features and travel content — you may opt out at any time',
          'To analyze usage and improve the functionality, safety, and design of the Platform',
          'To detect and prevent fraudulent activity, abuse, and security threats',
          'To comply with legal obligations and enforce our policies',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-lavender flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '4',
    title: 'How We Share Your Information',
    content: (
      <div className="space-y-5">
        {[
          {
            sub: '4.1 With Service Providers',
            text: 'We share information with trusted vendors who help us operate the Platform: cloud hosting, analytics, email delivery, and customer support tools. They are contractually prohibited from using your data for any other purpose.',
          },
          {
            sub: '4.2 With Business Operators',
            text: 'If you interact with a business listing, we may share your name and contact information with that business solely to fulfil your request. We do not share payment data as users are not charged.',
          },
          {
            sub: '4.3 For Legal Reasons',
            text: 'We may disclose your information if required by law, court order, or to protect the rights, property, or safety of Aneeras, our users, or the public.',
          },
          {
            sub: '4.4 Business Transfers',
            text: 'In a merger, acquisition, or sale of assets, your information may transfer to the successor entity under the same privacy protections.',
          },
        ].map(({ sub, text }) => (
          <div key={sub}>
            <h4 className="font-space font-semibold text-white text-base mb-2">{sub}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '5',
    title: 'Data Retention',
    content: (
      <p>
        We retain your personal information for as long as your account is active. Upon account deletion, we delete or anonymize
        your data within <strong className="text-white">30 days</strong>, except where retention is required by law.
      </p>
    ),
  },
  {
    number: '6',
    title: 'Your Privacy Rights',
    content: (
      <>
        <ul className="space-y-2 mb-4">
          {[
            ['Right to Access', 'Request a copy of the personal data we hold about you'],
            ['Right to Rectification', 'Request correction of inaccurate or incomplete data'],
            ['Right to Erasure', 'Request deletion of your personal data'],
            ['Right to Restrict Processing', 'Request that we limit how we use your data'],
            ['Right to Data Portability', 'Receive your data in a machine-readable format'],
            ['Right to Object', 'Object to processing, including for direct marketing'],
            ['Right to Withdraw Consent', 'Withdraw consent at any time'],
          ].map(([right, desc]) => (
            <li key={right} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-soft-lavender flex-shrink-0" />
              <span><strong className="text-white">{right}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
        <p>
          To exercise these rights, contact us at{' '}
          <a href="mailto:legal@aneeras.com" className="text-soft-lavender hover:text-white transition-colors">
            legal@aneeras.com
          </a>
          . We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    number: '7',
    title: 'Security',
    content: (
      <p>
        We implement AES-256 encryption at rest, TLS 1.2+ in transit, role-based access controls, and regular security audits.
        No system is completely secure and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    number: '8',
    title: "Children's Privacy",
    content: (
      <p>
        The Platform is not directed to children under 13 (or 16 in the EEA). We do not knowingly collect personal information
        from children. Contact{' '}
        <a href="mailto:support@aneeras.com" className="text-soft-lavender hover:text-white transition-colors">
          support@aneeras.com
        </a>{' '}
        if you believe a child has submitted their information.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy at any time. Material changes will be notified via the Platform and, where required,
        by direct notification. Continued use after changes constitutes acceptance.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

        <div className="relative z-10 w-full container-custom pt-28 pb-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 font-inter text-sm transition-colors duration-200 mb-7"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-purple/15 border border-royal-purple/25 mb-5">
            <FileText size={12} className="text-soft-lavender" />
            <span className="text-soft-lavender font-inter text-xs font-medium tracking-wide uppercase">Legal</span>
          </span>

          <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-inter text-white/50 text-base max-w-xl mb-2">
            How Aneeras collects, uses, and protects your personal information.
          </p>
          <p className="font-inter text-white/25 text-sm">Last updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark pb-24">
        <div className="container-custom">
          <div className="max-w-3xl space-y-10">
            {sections.map(({ number, title, content }) => (
              <div
                key={number}
                className="glass rounded-2xl p-8 border border-white/6"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-royal-purple/20 border border-royal-purple/30 flex items-center justify-center font-space font-bold text-soft-lavender text-sm">
                    {number}
                  </span>
                  <h2 className="font-space font-bold text-white text-xl">{title}</h2>
                </div>
                <div className="font-inter text-white/55 text-sm leading-relaxed">
                  {content}
                </div>
              </div>
            ))}

            {/* Contact card */}
            <div className="rounded-2xl p-8 bg-royal-purple/10 border border-royal-purple/25">
              <h2 className="font-space font-bold text-white text-xl mb-4">10. Contact</h2>
              <p className="font-inter text-white/55 text-sm mb-5">
                For any privacy-related questions or to exercise your rights, reach out to us:
              </p>
              <div className="flex flex-col gap-2">
                <p className="font-inter text-white/70 text-sm font-medium">Aneeras LLP</p>
                <a
                  href="mailto:support@aneeras.com"
                  className="inline-flex items-center gap-2 text-soft-lavender hover:text-white font-inter text-sm transition-colors duration-200"
                >
                  <Mail size={14} />
                  support@aneeras.com
                </a>
                <a
                  href="https://www.aneeras.com"
                  className="font-inter text-soft-lavender hover:text-white text-sm transition-colors duration-200"
                >
                  www.aneeras.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
