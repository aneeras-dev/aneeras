export default function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aneeras',
    url: 'https://aneeras.com',
    logo: 'https://aneeras.com/logo/aneeras-icon.png',
    description:
      'Aneeras is a product-first startup building next-generation digital products. Home of Tripknot — the smart AI-powered travel companion.',
    foundingDate: '2026',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: 'https://aneeras.com/contact',
    },
    sameAs: [
      'https://twitter.com/aneeras',
      'https://www.linkedin.com/company/aneeras',
    ],
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aneeras',
    url: 'https://aneeras.com',
    description: 'Building digital products that move people.',
    publisher: {
      '@type': 'Organization',
      name: 'Aneeras',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  )
}
