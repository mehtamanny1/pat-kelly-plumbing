import type { Metadata } from 'next'

const BASE_URL = 'https://patkellyplumbing.com'
const OG_IMAGE = `${BASE_URL}/og-image.jpg`

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  return {
    title: `${title} | Pat Kelly Plumbing Co`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Pat Kelly Plumbing Co`,
      description,
      url,
      siteName: 'Pat Kelly Plumbing Co',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Pat Kelly Plumbing Co' }],
      type: 'website',
    },
  }
}
