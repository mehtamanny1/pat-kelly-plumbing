'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Phone, ShieldCheck, Clock, CheckCircle } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'
import PageHero from '@/components/PageHero'

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'

const TRUST_ITEMS = [
  { icon: CheckCircle, label: 'Free, no obligation' },
  { icon: Clock, label: 'Response within 2 business hours' },
  { icon: ShieldCheck, label: 'Licensed & insured' },
]

function QuotePageInner() {
  const searchParams = useSearchParams()
  const preselectedService = searchParams.get('service') || ''

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
        {/* Form */}
        <div className="lg:col-span-3">
          <QuoteForm heading="Request a Free Quote" preselectedService={preselectedService} />
        </div>

        {/* Trust sidebar */}
        <aside className="hidden lg:flex lg:col-span-2 flex-col gap-5">
          <div className="sticky top-24">
            <div
              className="rounded-xl p-6 border border-blue-100"
              style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)' }}
            >
              <p className="eyebrow mb-5">Why request a quote?</p>
              <ul className="space-y-4">
                {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white border border-blue-100 flex items-center justify-center shrink-0">
                      <Icon size={12} strokeWidth={2} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-body">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-blue-100/80">
                <p className="text-xs text-muted mb-2">Prefer to call us?</p>
                <a
                  href={`tel:${PHONE.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-sm font-semibold text-ink hover:text-blue-600 transition-colors duration-150"
                >
                  <Phone size={13} strokeWidth={1.75} />
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote"
        title="Request a Free Quote"
        subtitle={`Fill out the form and we'll get back to you promptly. For immediate help, call us directly.`}
      >
        <a
          href={`tel:${PHONE.replace(/\D/g, '')}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-200 hover:text-white transition-colors duration-150"
        >
          <Phone size={13} strokeWidth={1.75} />
          {PHONE}
        </a>
      </PageHero>

      <Suspense fallback={<div className="py-20 text-center text-sm text-muted">Loading...</div>}>
        <QuotePageInner />
      </Suspense>
    </>
  )
}
