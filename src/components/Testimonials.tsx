import { testimonials } from '@/data/testimonials'

interface TestimonialsProps {
  limit?: number
}

export default function Testimonials({ limit }: TestimonialsProps) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="relative overflow-hidden">
      {/* Tinted gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 50%, #F8FAFC 100%)' }}
        aria-hidden
      />
      <div className="absolute inset-0 border-y border-blue-100/60" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="section-heading">Trusted by Cincinnati Homeowners</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-6 shadow-card hover:shadow-card-md transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="13" height="13" viewBox="0 0 24 24" aria-hidden>
                    <path fill="#F59E0B" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-body leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {/* Avatar initial */}
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-blue-600">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink leading-none">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
