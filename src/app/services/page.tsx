import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Droplets, Flame, Droplet, Wrench, RefreshCw,
  Settings2, RotateCcw, ArrowDownToLine, AlertCircle, HelpCircle, LucideProps,
} from 'lucide-react'
import { ComponentType } from 'react'
import { buildMetadata } from '@/lib/metadata'
import { services } from '@/data/services'
import CTABanner from '@/components/CTABanner'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = buildMetadata({
  title: 'Plumbing Services in Cincinnati',
  description: 'Full-service residential plumbing in Greater Cincinnati. Drain cleaning, water heaters, leak repair, pipe replacement, emergency service, and more.',
  path: '/services',
})

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Droplets, Flame, Droplet, Wrench, RefreshCw,
  Settings2, RotateCcw, ArrowDownToLine, AlertCircle, HelpCircle,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Plumbing Services"
        subtitle="Residential plumbing done right — Greater Cincinnati homeowners trust Pat Kelly for quality, reliability, and fair pricing."
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="divide-y divide-border">
          {services.map((service) => {
            const Icon = ICON_MAP[service.icon] || HelpCircle
            return (
              <div
                key={service.id}
                className="group py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                {/* Icon */}
                <div className="md:col-span-1">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center
                                  group-hover:bg-blue-100 transition-colors duration-200">
                    <Icon size={17} strokeWidth={1.75} className="text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8">
                  <h2 className="text-base font-semibold text-ink mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-sm text-body leading-relaxed">{service.description}</p>
                </div>

                {/* CTA */}
                <div className="md:col-span-3 md:text-right flex md:justify-end items-start">
                  <Link
                    href={`/quote?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted
                               group-hover:text-blue-600 transition-colors duration-200"
                  >
                    Request a Quote
                    <ArrowRight size={13} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            )
          })}

          {/* Other / Not Sure */}
          <div className="group py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="w-9 h-9 rounded-lg bg-surface-muted flex items-center justify-center">
                <HelpCircle size={17} strokeWidth={1.75} className="text-muted" />
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-base font-semibold text-ink mb-2">Not Sure?</h2>
              <p className="text-sm text-body leading-relaxed">
                Don&apos;t see what you&apos;re looking for? Pat Kelly Plumbing handles a wide range of plumbing needs beyond what&apos;s listed here. Reach out and describe your situation — we&apos;ll find the right solution for you.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right flex md:justify-end items-start">
              <Link
                href="/quote?service=other"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted
                           group-hover:text-blue-600 transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight size={13} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTABanner heading="Need a Plumber Today?" subheading="Call for same-day service or request a quote online." />
    </>
  )
}
