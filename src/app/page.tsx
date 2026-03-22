import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/serviceAreas'
import CTABanner from '@/components/CTABanner'
import Testimonials from '@/components/Testimonials'
import ServiceCard from '@/components/ServiceCard'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

export const metadata: Metadata = buildMetadata({
  title: 'Cincinnati Plumber — Same-Day Residential Service',
  description: 'Pat Kelly Plumbing Co offers licensed, insured residential plumbing in Greater Cincinnati. Drain cleaning, water heaters, leak repair, and emergency service. Call today.',
  path: '/',
})

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'

export default function HomePage() {
  const featuredServices = services.slice(0, 6)
  const allCities = serviceAreas.flatMap((z) => z.cities).slice(0, 8)

  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-blue-800"
        style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #1e3a8a 100%)' }}
      >
        {/* Decorative circle — top right */}
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #BFDBFE 0%, transparent 70%)' }}
        />
        {/* Decorative circle — bottom left */}
        <div
          aria-hidden
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(circle, #99F6E4 0%, transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-5">Greater Cincinnati, Ohio</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white mb-6 max-w-3xl">
            Residential plumbing,<br className="hidden sm:block" /> done right.
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-xl">
            Pat Kelly Plumbing handles residential plumbing across Greater Cincinnati — from routine repairs to emergency service. Licensed, insured, and on time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-ink font-semibold px-6 py-2.5 rounded-lg text-sm
                         shadow-btn hover:bg-white/90 hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] transition-all duration-150"
            >
              <Phone size={14} strokeWidth={1.75} />
              {PHONE}
            </a>
            <Link href="/quote" className="btn-ghost-dark">
              Request a Quote
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-blue-600">
            {[
              { icon: ShieldCheck, label: 'Licensed & Insured' },
              { icon: Clock, label: 'Same-Day Service' },
              { icon: MapPin, label: 'Greater Cincinnati' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={13} strokeWidth={1.75} className="text-blue-300" />
                <span className="text-xs text-blue-200 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="eyebrow mb-3">Services</p>
              <h2 className="section-heading">What We Handle</h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 shrink-0"
            >
              View all services <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                serviceId={service.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Pat — subtle blue tint */}
      <section className="bg-surface-blue/30 border-b border-blue-100/60">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-12">
            <p className="eyebrow mb-3">Why Pat Kelly</p>
            <h2 className="section-heading">Built on Trust</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Licensed & Insured', desc: 'Fully licensed and insured in Ohio. Every job is covered — no corners cut.' },
              { title: 'Local & Family-Owned', desc: 'A Cincinnati business serving Cincinnati neighbors — not a franchise or call center.' },
              { title: 'Guaranteed Work', desc: 'We stand behind every repair and installation. If something is not right, we make it right.' },
            ].map((item) => (
              <div key={item.title}>
                <div
                  className="w-8 h-[3px] rounded-full mb-5"
                  style={{ background: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                />
                <h3 className="text-base font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Service Area Callout */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="eyebrow mb-3">Coverage</p>
              <h2 className="section-heading">Serving Greater Cincinnati</h2>
            </div>
            <Link
              href="/service-area"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1.5 shrink-0"
            >
              See full service area <ArrowRight size={13} strokeWidth={2} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {allCities.map((city) => (
              <span
                key={city}
                className="text-sm font-medium text-body bg-surface-muted px-3 py-1.5 rounded-lg border border-border hover:border-blue-200 hover:text-blue-600 transition-colors duration-150"
              >
                {city}
              </span>
            ))}
            <span className="text-sm text-muted self-center ml-1">and more</span>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Get Started?" subheading="Call us today or submit a quote request — we respond fast." />
    </>
  )
}
