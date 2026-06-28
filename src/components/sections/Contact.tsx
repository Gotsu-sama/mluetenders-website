'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { useInView } from '@/hooks/useInView'
import { analytics } from '@/lib/analytics'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/config'

type FormFields = {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<'name' | 'email' | 'subject' | 'message', string>>

const EMPTY_FORM: FormFields = { name: '', email: '', company: '', subject: '', message: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const { t } = useI18n()
  const { ref, visible } = useInView()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<FormFields>(EMPTY_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [errorBanner, setErrorBanner] = useState<string | null>(null)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = t.contact.validationRequired
    if (!form.email || !EMAIL_RE.test(form.email)) e.email = t.contact.validationEmail
    if (!form.subject.trim()) e.subject = t.contact.validationRequired
    if (!form.message.trim()) e.message = t.contact.validationRequired
    return e
  }

  const set =
    (key: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorBanner(null)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setLoading(true)

    try {
      analytics.contactClick('form')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || undefined,
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorBanner((data as { error?: string }).error ?? t.contact.errorMessage)
      } else {
        setSubmitted(true)
      }
    } catch {
      setErrorBanner(t.contact.errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const inputCls = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-xl border ${
      hasError
        ? 'border-red-400 dark:border-red-500'
        : 'border-slate-200 dark:border-white/10'
    } bg-white dark:bg-white/[0.04] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14754E]/40 focus:border-[#14754E]/60 transition-all duration-200 text-sm`

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-[#080E1A] dark:to-[#0B1220]" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blob opacity-[0.08] dark:opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #5CA3E0 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-start${visible ? ' in-view' : ''}`}
        >
          {/* Left */}
          <div className="slide-left" style={{ animationDelay: '0ms' }}>
            <div className="inline-flex mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                {t.contact.tag}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
              {t.contact.heading1}{' '}
              <span className="text-gradient">{t.contact.headingHighlight}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              {t.contact.description}
            </p>

            <div className="flex flex-col gap-5">
              <a
                href={CONTACT_MAILTO}
                onClick={() => analytics.contactClick('email')}
                aria-label={`Send email to ${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] hover:border-[#5CA3E0]/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#5CA3E0]/10 flex items-center justify-center text-[#5CA3E0] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                    {t.contact.emailLabel}
                  </p>
                  <p className="text-sm text-[#5CA3E0]">{CONTACT_EMAIL}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03]">
                <div className="w-11 h-11 rounded-xl bg-[#14754E]/10 flex items-center justify-center text-[#14754E] dark:text-[#2E9D6A]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                    {t.contact.chatLabel}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.contact.chatSub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="slide-right" style={{ animationDelay: '100ms' }}>
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03] shadow-xl shadow-slate-200/30 dark:shadow-black/30">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  {errorBanner && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-400 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{errorBanner}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={set('name')}
                        placeholder={t.contact.namePlaceholder}
                        className={inputCls(!!errors.name)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'err-name' : undefined}
                        autoComplete="name"
                      />
                      {errors.name && (
                        <p id="err-name" className="mt-1 text-xs text-red-500 dark:text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                        {t.contact.emailInputLabel}
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder={t.contact.emailPlaceholder}
                        className={inputCls(!!errors.email)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'err-email' : undefined}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <p id="err-email" className="mt-1 text-xs text-red-500 dark:text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      {t.contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={set('company')}
                      placeholder={t.contact.companyPlaceholder}
                      className={inputCls()}
                      autoComplete="organization"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={set('subject')}
                      placeholder={t.contact.subjectPlaceholder}
                      className={inputCls(!!errors.subject)}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'err-subject' : undefined}
                    />
                    {errors.subject && (
                      <p id="err-subject" className="mt-1 text-xs text-red-500 dark:text-red-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={set('message')}
                      placeholder={t.contact.messagePlaceholder}
                      className={`${inputCls(!!errors.message)} resize-none`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                    />
                    {errors.message && (
                      <p id="err-message" className="mt-1 text-xs text-red-500 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#14754E] to-[#2E9D6A] shadow-lg shadow-[#14754E]/25 hover:shadow-[#14754E]/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <Send className="w-4 h-4" aria-hidden="true" />
                    )}
                    {t.contact.send}
                  </button>
                </form>
              ) : (
                <div className="success-enter flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-[#14754E]/10 flex items-center justify-center text-[#14754E] dark:text-[#2E9D6A] mb-6">
                    <CheckCircle className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">{t.contact.successDesc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
