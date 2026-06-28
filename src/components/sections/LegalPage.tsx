'use client'

import Link from 'next/link'
import { useI18n } from '@/i18n/I18nContext'
import { legalTranslations, type LegalSection } from '@/i18n/legalTranslations'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/lib/config'

const EMAIL = CONTACT_EMAIL

function linkifyEmail(text: string) {
  const parts = text.split(EMAIL)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <a
              href={CONTACT_MAILTO}
              className="text-[#5CA3E0] hover:underline"
            >
              {EMAIL}
            </a>
          )}
        </span>
      ))}
    </>
  )
}

function Para({ text }: { text: string }) {
  return (
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
      {linkifyEmail(text)}
    </p>
  )
}

function Section({ section }: { section: LegalSection }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {section.title}
      </h2>
      {section.paragraphs.map((p, i) => (
        <Para key={i} text={p} />
      ))}
      {section.items && (
        <ul className="mt-3 mb-2 space-y-2 ps-5 list-disc text-slate-600 dark:text-slate-400">
          {section.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
      {section.afterItems && <Para text={section.afterItems} />}
    </div>
  )
}

export default function LegalPage({ doc }: { doc: 'privacy' | 'terms' }) {
  const { locale } = useI18n()
  const content = legalTranslations[locale][doc]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="mb-12">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            {content.badge}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {content.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{content.lastUpdated}</p>
        </div>

        <div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            {content.intro}
          </p>

          {content.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
            <Link
              href={content.crossLink.href}
              className="text-[#5CA3E0] hover:text-[#4a92cf] text-sm font-medium hover:underline transition-colors"
            >
              {content.crossLink.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
