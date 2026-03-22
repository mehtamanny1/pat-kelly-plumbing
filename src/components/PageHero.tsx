import { ReactNode } from 'react'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-blue-800" style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #1e3a8a 100%)' }}>
      {/* Decorative circle — top right */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #BFDBFE 0%, transparent 70%)' }}
      />
      {/* Decorative circle — bottom left */}
      <div
        aria-hidden
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #99F6E4 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-4">{eyebrow}</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  )
}
