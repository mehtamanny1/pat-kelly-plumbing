import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'

const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@patkellyplumbing.com'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Service Area', href: '/service-area' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/quote' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <p className="text-base font-bold text-white mb-3">Pat Kelly Plumbing</p>
          <p className="text-sm text-white/50 leading-relaxed">
            Licensed and insured residential plumbing serving Greater Cincinnati, Ohio.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Navigation</p>
          <ul className="space-y-2">
            {NAV.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Contact</p>
          <ul className="space-y-3">
            <li>
              <a href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200">
                <Phone size={13} strokeWidth={1.75} className="shrink-0" />
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200">
                <Mail size={13} strokeWidth={1.75} className="shrink-0" />
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-white/50">
              <Clock size={13} strokeWidth={1.75} className="shrink-0 mt-0.5" />
              <span>Mon–Fri 7am–6pm<br />Emergency service available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Pat Kelly Plumbing Co. All rights reserved.</p>
          <p className="text-xs text-white/30">Greater Cincinnati, Ohio</p>
        </div>
      </div>
    </footer>
  )
}
