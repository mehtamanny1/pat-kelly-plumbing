import Link from 'next/link'
import {
  ArrowRight, Droplets, Flame, Droplet, Wrench, RefreshCw,
  Settings2, RotateCcw, ArrowDownToLine, AlertCircle, HelpCircle,
  LucideProps,
} from 'lucide-react'
import { ComponentType } from 'react'

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  Droplets, Flame, Droplet, Wrench, RefreshCw,
  Settings2, RotateCcw, ArrowDownToLine, AlertCircle, HelpCircle,
}

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  serviceId?: string
}

export default function ServiceCard({ title, description, icon, serviceId }: ServiceCardProps) {
  const quoteHref = serviceId ? `/quote?service=${serviceId}` : '/quote'
  const Icon = (icon && ICON_MAP[icon]) ? ICON_MAP[icon] : HelpCircle

  return (
    <div className="group relative bg-white border border-border rounded-xl p-6
                    hover:border-blue-200 hover:shadow-card-blue
                    transition-all duration-200 flex flex-col cursor-default">
      {/* Icon */}
      <div className="icon-blue mb-4">
        <Icon size={17} strokeWidth={1.75} className="text-blue-600" />
      </div>

      <h3 className="text-sm font-semibold text-ink mb-1.5 group-hover:text-blue-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-body leading-relaxed flex-1">{description}</p>

      <Link
        href={quoteHref}
        className="mt-5 flex items-center gap-1.5 text-sm font-medium text-muted
                   group-hover:text-blue-600 transition-colors duration-200"
      >
        Request a Quote
        <ArrowRight
          size={13}
          strokeWidth={2}
          className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200"
        />
      </Link>
    </div>
  )
}
