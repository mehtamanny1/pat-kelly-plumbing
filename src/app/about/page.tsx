import type { Metadata } from 'next'
import { ShieldCheck, Calendar, MapPin } from 'lucide-react'
import { buildMetadata } from '@/lib/metadata'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = buildMetadata({
  title: 'About Pat Kelly — Licensed Cincinnati Plumber',
  description: 'Learn about Pat Kelly Plumbing Co — a licensed, insured, locally owned plumbing company serving Greater Cincinnati homeowners with honest, reliable service.',
  path: '/about',
})

const credentials = [
  { icon: ShieldCheck, title: 'Licensed & Insured', desc: 'Fully licensed and insured in the state of Ohio for residential plumbing.' },
  { icon: Calendar, title: 'Years of Experience', desc: '[X] years in the plumbing trade — from apprentice to business owner.' },
  { icon: MapPin, title: 'Locally Owned & Operated', desc: 'A Cincinnati business, built by a Cincinnati plumber, for Cincinnati homeowners.' },
]

const values = [
  { title: 'Honest Assessments', desc: "No upsells, no unnecessary work. I'll tell you exactly what needs to be done and why." },
  { title: 'On-Time Arrivals', desc: "I respect your schedule. When I say I'll be there, I'll be there." },
  { title: 'Guaranteed Work', desc: "Every repair and installation I complete is backed by my guarantee. If something isn't right, I'll make it right." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Pat Kelly Plumbing"
        subtitle="Local, licensed, and built on doing the job right."
      />

      {/* Bio */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Photo placeholder */}
          <div className="bg-surface-muted rounded-2xl aspect-square flex items-center justify-center border border-border">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 mx-auto mb-3 flex items-center justify-center">
                <span className="text-base font-semibold text-blue-600">PK</span>
              </div>
              <p className="text-xs text-muted">Photo coming soon</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-2xl font-semibold text-ink mb-5">Hi, I&apos;m Pat Kelly</h2>
            <div className="space-y-4 text-body text-sm leading-relaxed">
              <p>
                [Bio placeholder — Pat&apos;s background, years in the trade, why he started the business, and what he values: honest work, fair pricing, showing up on time.]
              </p>
              <p>
                Based in Greater Cincinnati, I started Pat Kelly Plumbing because I believe homeowners deserve a plumber they can trust — someone who explains the problem clearly, gives a fair price, and gets the job done right the first time.
              </p>
              <p>
                Every job I take on, whether it&apos;s a simple drain cleaning or a full repipe, gets the same care and attention. That&apos;s my commitment to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials — blue tint */}
      <section
        className="border-y border-blue-100/60"
        style={{ background: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {credentials.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <div className="w-9 h-9 rounded-lg bg-white border border-blue-100 shadow-card flex items-center justify-center mb-4">
                  <Icon size={17} strokeWidth={1.75} className="text-blue-600" />
                </div>
                <h3 className="text-sm font-semibold text-ink mb-1.5">{title}</h3>
                <p className="text-sm text-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="eyebrow mb-3">Approach</p>
          <h2 className="section-heading">What You Can Expect</h2>
        </div>
        <div className="divide-y divide-border">
          {values.map((item, i) => (
            <div key={item.title} className="py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
              <div className="md:col-span-1">
                <span className="text-xs font-semibold text-muted">0{i + 1}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <CTABanner heading="Ready to Work with Pat?" subheading="Call today or request a quote — honest, reliable service every time." />
    </>
  )
}
