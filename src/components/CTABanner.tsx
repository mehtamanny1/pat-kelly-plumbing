import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'

interface CTABannerProps {
  heading?: string
  subheading?: string
}

export default function CTABanner({
  heading = 'Ready to Get Started?',
  subheading = 'Call for same-day service or submit a quote request online.',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-cta-gradient text-white">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -bottom-24 right-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 65%)' }}
      />
      {/* Top border glow */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.4) 50%, transparent)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">{heading}</h2>
          <p className="text-white/45 text-lg mb-8">{subheading}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-white text-ink font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/90 shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-150"
            >
              <Phone size={14} strokeWidth={1.75} />
              {PHONE}
            </a>
            <Link
              href="/quote"
              className="btn-ghost-dark"
            >
              Request a Quote
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
