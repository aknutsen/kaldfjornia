'use client'

import { useState, useEffect, FormEvent } from 'react'
import SectionWrapper from './SectionWrapper'
import { products } from '@/lib/products'

interface FormData {
  name: string
  email: string
  productInterest: string
  message: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const initialForm: FormData = {
  name: '',
  email: '',
  productInterest: '',
  message: '',
}

function validate(data: FormData): Partial<FormData> {
  const errors: Partial<FormData> = {}
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = 'Please enter a valid email address.'
  if (!data.productInterest)
    errors.productInterest = 'Please select a product or enquiry type.'
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = 'Please write at least 20 characters.'
  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<Status>('idle')

  // Pre-select product if arriving from product card
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('inquireProduct')
      if (saved) {
        setFormData(prev => ({ ...prev, productInterest: saved }))
        sessionStorage.removeItem('inquireProduct')
      }
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-cream-100 border ${
      errors[field] ? 'border-red-400' : 'border-cream-300'
    } rounded-sm px-4 py-3 font-body text-sm text-walnut-300 placeholder-stone-200 focus:outline-none focus:border-amber-300 transition-colors duration-200`

  if (status === 'success') {
    return (
      <section id="contact" className="bg-cream-200 py-24 px-6">
        <SectionWrapper className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-moss-400/10">
            <svg viewBox="0 0 32 32" fill="none" stroke="#3D5A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
              <circle cx="16" cy="16" r="14" />
              <polyline points="10,16 13,19 22,11" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold text-walnut-300 mb-4">
            Message received.
          </h2>
          <p className="font-body text-stone-300 text-base leading-relaxed">
            Thank you for reaching out. We read every enquiry carefully and
            will get back to you within a few days.
          </p>
          <button
            onClick={() => { setStatus('idle'); setFormData(initialForm) }}
            className="mt-8 font-body text-sm text-amber-300 hover:text-amber-400 underline underline-offset-4"
          >
            Send another message
          </button>
        </SectionWrapper>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-cream-200 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left — heading + decorative rope */}
          <SectionWrapper className="lg:col-span-2">
            <p className="font-body text-xs tracking-widest2 uppercase text-amber-300 mb-6">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-walnut-300 leading-[1.1] mb-6">
              Tell us what you&apos;re after.
            </h2>
            <p className="font-body text-stone-300 text-base leading-relaxed mb-8">
              Every order starts with a conversation. Tell us about your training,
              your space, and what you&apos;re looking for — we&apos;ll figure out
              the rest together.
            </p>
            <p className="font-body text-sm text-walnut-100 leading-relaxed">
              We typically respond within 2–3 days. For urgent enquiries, include
              your phone number in the message.
            </p>

            {/* Rope decoration */}
            <div className="hidden lg:flex mt-12 items-start gap-4">
              <div className="rope-line h-32 shrink-0" aria-hidden="true" />
              <p className="font-body text-xs italic text-stone-200 leading-relaxed mt-2 max-w-[160px]">
                &ldquo;Every board leaves the workshop the way I&apos;d want it
                to arrive.&rdquo;
              </p>
            </div>
          </SectionWrapper>

          {/* Right — form */}
          <SectionWrapper className="lg:col-span-3" delay={0.15}>
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-body text-xs tracking-widest uppercase text-walnut-200 mb-1.5 block">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                />
                {errors.name && (
                  <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="font-body text-xs tracking-widest uppercase text-walnut-200 mb-1.5 block">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                />
                {errors.email && (
                  <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Product interest */}
              <div>
                <label htmlFor="productInterest" className="font-body text-xs tracking-widest uppercase text-walnut-200 mb-1.5 block">
                  I&apos;m interested in
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className={`${inputClass('productInterest')} cursor-pointer`}
                >
                  <option value="">Select a product or enquiry type</option>
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                  <option value="custom">Custom / bespoke order</option>
                  <option value="general">General enquiry</option>
                </select>
                {errors.productInterest && (
                  <p className="font-body text-xs text-red-500 mt-1">{errors.productInterest}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="font-body text-xs tracking-widest uppercase text-walnut-200 mb-1.5 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your training setup, goals, or any specific requirements…"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="font-body text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <p className="font-body text-sm text-red-500 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
                  Something went wrong. Please try again or send us an email directly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-amber-300 text-walnut-400 font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-amber-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
              </button>
            </form>
          </SectionWrapper>

        </div>
      </div>
    </section>
  )
}
