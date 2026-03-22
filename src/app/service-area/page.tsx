import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { serviceAreas } from '@/data/serviceAreas'
import CTABanner from '@/components/CTABanner'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = buildMetadata({
  title: 'Service Area — Greater Cincinnati, Ohio',
  description: 'Pat Kelly Plumbing serves Hyde Park, Blue Ash, Anderson Township, Loveland, Delhi Township, and throughout Greater Cincinnati, OH.',
  path: '/service-area',
})

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'

export default function ServiceAreaPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Serving Greater Cincinnati"
        subtitle="We provide residential plumbing services throughout the Greater Cincinnati area. See if we serve your neighborhood below."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {serviceAreas.map((zone) => (
            <div key={zone.zone}>
              <p className="eyebrow mb-4">{zone.zone}</p>
              <div className="flex flex-wrap gap-2">
                {zone.cities.map((city) => (
                  <span
                    key={city}
                    className="text-sm font-medium text-body bg-surface-muted px-3 py-1.5 rounded-lg
                               border border-border hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50
                               transition-colors duration-150 cursor-default"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Not in your area */}
        <div
          className="mt-16 rounded-xl p-8 border border-blue-100"
          style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)' }}
        >
          <div className="max-w-xl">
            <h2 className="text-lg font-semibold text-ink mb-2">
              Don&apos;t see your area?
            </h2>
            <p className="text-sm text-body mb-6">
              Don&apos;t see your city or neighborhood listed? Give us a call — we may still be able to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="btn-teal"
              >
                <Phone size={13} strokeWidth={1.75} />
                Call Now
              </a>
              <Link href="/quote" className="btn-outline">
                Request a Quote
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Schedule Service?" subheading="Call us or submit a quote request — we respond quickly." />
    </>
  )
}
