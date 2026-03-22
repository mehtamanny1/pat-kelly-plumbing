const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@patkellyplumbing.com'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Pat Kelly Plumbing Co',
    description: 'Licensed and insured residential plumbing services in Greater Cincinnati, Ohio.',
    telephone: PHONE,
    email: EMAIL,
    url: 'https://patkellyplumbing.com',
    areaServed: {
      '@type': 'State',
      name: 'Greater Cincinnati, Ohio',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cincinnati',
      addressRegion: 'OH',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
