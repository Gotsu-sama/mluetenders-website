'use client'

import { useI18n } from '@/i18n/I18nContext'

export default function ContactHero() {
  const { t } = useI18n()

  return (
    <section className="pt-32 pb-8 text-center bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1220] dark:to-[#080E1A]">
      <div className="max-w-3xl mx-auto px-4">
        <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
          {t.pages.contactTag}
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
          {t.pages.contactHeading1}{' '}
          <span className="text-gradient">{t.pages.contactHeadingHighlight}</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          {t.pages.contactDesc}
        </p>
      </div>
    </section>
  )
}
