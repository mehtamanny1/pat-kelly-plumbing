'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { services } from '@/data/services'
import { CheckCircle, AlertCircle, Phone } from 'lucide-react'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || ''
const PHONE = process.env.NEXT_PUBLIC_PHONE || '513-555-0100'

interface QuoteFormProps {
  heading?: string
  preselectedService?: string
}

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  address: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  service?: string
  address?: string
  message?: string
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length < 4) return digits
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const inputClass = (error?: string) =>
  `w-full rounded-lg border px-3.5 py-2.5 text-sm text-ink bg-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors duration-200 ${
    error ? 'border-red-400 bg-red-50/30' : 'border-border hover:border-slate-300'
  }`

export default function QuoteForm({ heading = 'Request a Free Quote', preselectedService = '' }: QuoteFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    address: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)

  const isOther = form.service === 'other'

  useEffect(() => {
    if (preselectedService) {
      setForm((f) => ({ ...f, service: preselectedService }))
    }
  }, [preselectedService])

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm((f) => ({ ...f, phone: formatPhone(value) }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (form.name.trim().length < 2) errs.name = 'Please enter your full name.'
    const digits = form.phone.replace(/\D/g, '')
    if (digits.length !== 10) errs.phone = 'Please enter a valid 10-digit US phone number.'
    if (!validateEmail(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.service) errs.service = 'Please select a service.'
    if (form.address.trim().length < 5) errs.address = 'Please enter your service address.'
    if (isOther && form.message.trim().length === 0) errs.message = 'Please describe the service you need.'
    return errs
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setServerError(false)
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      document.querySelector('[data-error="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setServerError(true)
      }
    } catch {
      setServerError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    const firstName = form.name.trim().split(' ')[0]
    return (
      <div className="border border-border rounded-xl p-10 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle size={36} strokeWidth={1.5} className="text-green-500" />
        </div>
        <h3 className="text-lg font-semibold text-ink mb-2">Request received</h3>
        <p className="text-sm text-body leading-relaxed">
          Thanks, {firstName}. We received your request and will be in touch shortly.
          For urgent issues, call us directly at{' '}
          <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
            {PHONE}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {heading && <h2 className="text-xl font-semibold text-ink mb-6">{heading}</h2>}

      {/* Name */}
      <div data-error={!!errors.name}>
        <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input id="name" name="name" type="text" autoComplete="name" value={form.name}
          onChange={handleChange} className={inputClass(errors.name)} placeholder="John Smith" />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div data-error={!!errors.phone}>
        <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
          Phone Number <span className="text-red-400">*</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone}
          onChange={handleChange} className={inputClass(errors.phone)} placeholder="(513) 555-0100" />
        {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div data-error={!!errors.email}>
        <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email" value={form.email}
          onChange={handleChange} className={inputClass(errors.email)} placeholder="john@example.com" />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Service */}
      <div data-error={!!errors.service}>
        <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">
          Service Needed <span className="text-red-400">*</span>
        </label>
        <select id="service" name="service" value={form.service}
          onChange={handleChange} className={inputClass(errors.service)}>
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
          <option value="other">Other (please describe below)</option>
        </select>
        {errors.service && <p className="mt-1.5 text-xs text-red-500">{errors.service}</p>}
      </div>

      {/* Address */}
      <div data-error={!!errors.address}>
        <label htmlFor="address" className="block text-sm font-medium text-ink mb-1.5">
          Service Address <span className="text-red-400">*</span>
        </label>
        <input id="address" name="address" type="text" autoComplete="street-address" value={form.address}
          onChange={handleChange} className={inputClass(errors.address)} placeholder="123 Main St, Cincinnati, OH" />
        {errors.address && <p className="mt-1.5 text-xs text-red-500">{errors.address}</p>}
      </div>

      {/* Message */}
      <div data-error={!!errors.message}>
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          {isOther ? <>Description <span className="text-red-400">*</span></> : 'Message / Details'}
          {!isOther && <span className="text-muted font-normal ml-1">(optional)</span>}
        </label>
        <textarea id="message" name="message" rows={4} value={form.message}
          onChange={handleChange} maxLength={500}
          className={inputClass(errors.message)}
          placeholder={isOther ? 'Please describe the service you need...' : 'Any additional details about your issue...'} />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
        <p className="mt-1 text-xs text-muted text-right">{form.message.length}/500</p>
      </div>

      {serverError && (
        <div className="flex items-start gap-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={15} strokeWidth={1.75} className="shrink-0 mt-0.5" />
          <span>
            Something went wrong. Please try again or call{' '}
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="font-medium underline">{PHONE}</a>.
          </span>
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />

      <button
        type="submit"
        disabled={submitting}
        className="w-full btn-primary justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {submitting ? 'Submitting...' : 'Submit Request'}
      </button>

      <p className="text-xs text-muted text-center">
        Or call us directly at{' '}
        <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
          <Phone size={11} strokeWidth={2} />{PHONE}
        </a>
      </p>
    </form>
  )
}
