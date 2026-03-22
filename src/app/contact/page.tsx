import type { Metadata } from 'next'
import { Phone, Mail, Clock, AlertCircle, MapPin } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import QuoteForm from '@/components/QuoteForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Pat Kelly Plumbing Co',
  description: 'Contact Pat Kelly Plumbing Co in Cincinnati, OH. Call for same-day service or fill out our contact form. Licensed plumber serving Greater Cincinnati.',
  path: '/contact',
})

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@patkellyplumbing.com'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We're here when you need us. Reach out by phone or fill out the form below."
      />

      {/* Contact details bar */}
      <section className="border-b border-border bg-surface-subtle">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-sm font-medium text-body hover:text-blue-600 transition-colors duration-150"
            >
              <Phone size={13} strokeWidth={1.75} className="text-muted" />
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-sm font-medium text-body hover:text-blue-600 transition-colors duration-150"
            >
              <Mail size={13} strokeWidth={1.75} className="text-muted" />
              {EMAIL}
            </a>
            <div className="flex items-center gap-2 text-sm text-body">
              <Clock size={13} strokeWidth={1.75} className="text-muted" />
              Mon–Fri 7am–6pm · Emergency service available
            </div>
            <div className="flex items-center gap-2 text-sm text-body">
              <MapPin size={13} strokeWidth={1.75} className="text-muted" />
              Greater Cincinnati, Ohio
            </div>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form */}
          <div className="lg:col-span-3">
            <QuoteForm heading="Send Us a Message" />
          </div>

          {/* Quick info */}
          <aside className="hidden lg:flex lg:col-span-2 flex-col gap-4">
            <div className="border border-border rounded-xl p-5 shadow-card">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-surface-muted flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={13} strokeWidth={1.75} className="text-muted" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">Response Time</p>
                  <p className="text-sm text-body leading-relaxed">
                    We typically respond within 2 business hours during normal operating hours.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-5 border border-red-100"
              style={{ background: 'linear-gradient(135deg, #FFF5F5 0%, #FFF8F8 100%)' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle size={13} strokeWidth={1.75} className="text-red-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">Emergency?</p>
                  <p className="text-sm text-body mb-2">
                    For emergencies, always call — don&apos;t wait on the form.
                  </p>
                  <a
                    href={`tel:${PHONE.replace(/\D/g, '')}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-150"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-5 border border-blue-100"
              style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)' }}
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} strokeWidth={1.75} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink mb-1">Service Area</p>
                  <p className="text-sm text-body">
                    Serving Greater Cincinnati, Ohio and surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
