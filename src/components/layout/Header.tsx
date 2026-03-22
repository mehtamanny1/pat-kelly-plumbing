'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: '64px' }}>

          {/* Logo */}
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-ink hover:text-blue-700 transition-colors duration-150"
          >
            Pat Kelly Plumbing
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : 'text-body hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-150"
            >
              <Phone size={14} strokeWidth={2} />
              {PHONE}
            </a>
            <Link href="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="text-blue-600 hover:text-blue-700 transition-colors duration-150"
              aria-label="Call us"
            >
              <Phone size={18} strokeWidth={2} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="text-body hover:text-ink transition-colors duration-150 p-1"
            >
              {menuOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-6 pb-5 pt-3">
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`py-3 text-sm font-medium border-b border-border transition-colors duration-150 ${pathname === '/' ? 'text-blue-600' : 'text-body hover:text-ink'}`}
              >
                Home
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm font-medium border-b border-border transition-colors duration-150 ${
                    pathname === link.href ? 'text-blue-600' : 'text-body hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-4">
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-sm font-semibold text-teal-600"
              >
                <Phone size={14} strokeWidth={2} />
                {PHONE}
              </a>
              <Link href="/quote" onClick={() => setMenuOpen(false)} className="btn-primary justify-center">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-teal-600 shadow-lg">
        <a
          href={`tel:${PHONE.replace(/\D/g, '')}`}
          className="flex items-center justify-center gap-2 text-white text-sm font-bold py-3.5"
        >
          <Phone size={15} strokeWidth={2} />
          Call Now — {PHONE}
        </a>
      </div>
    </>
  )
}
