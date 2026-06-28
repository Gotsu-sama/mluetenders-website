'use client'

import { UserPlus, SlidersHorizontal, Inbox, Send } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { useInView } from '@/hooks/useInView'

const stepIcons = [UserPlus, SlidersHorizontal, Inbox, Send]

export default function HowItWorks() {
  const { t } = useI18n()
  const { ref, visible } = useInView()

  const steps = [
    { step: '01', title: t.howItWorks.step1Title, description: t.howItWorks.step1Desc },
    { step: '02', title: t.howItWorks.step2Title, description: t.howItWorks.step2Desc },
    { step: '03', title: t.howItWorks.step3Title, description: t.howItWorks.step3Desc },
    { step: '04', title: t.howItWorks.step4Title, description: t.howItWorks.step4Desc },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-[#0B1220] dark:to-[#080E1A]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={visible ? 'in-view' : ''}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="fade-up inline-flex mb-4" style={{ animationDelay: '0ms' }}>
              <span className="px-3 py-1 rounded-full border border-[#14754E]/30 bg-[#14754E]/8 dark:bg-[#14754E]/10 text-[#14754E] dark:text-[#2E9D6A] text-sm font-medium">
                {t.howItWorks.tag}
              </span>
            </div>
            <h2
              className="fade-up text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
              style={{ animationDelay: '80ms' }}
            >
              {t.howItWorks.heading1}{' '}
              <span className="text-gradient">{t.howItWorks.headingHighlight}</span>
            </h2>
            <p
              className="fade-up text-lg text-slate-600 dark:text-slate-400"
              style={{ animationDelay: '160ms' }}
            >
              {t.howItWorks.description}
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <div
                    key={i}
                    className="fade-up relative flex flex-col items-center text-center lg:items-start lg:text-left"
                    style={{ animationDelay: `${240 + i * 80}ms` }}
                  >
                    {/* Step circle */}
                    <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-gradient-to-br from-[#14754E] to-[#0F5B3C] shadow-[#14754E]/25">
                      <Icon className="w-6 h-6 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-[#0F1A2E] border-2 border-slate-200 dark:border-white/10 flex items-center justify-center">
                        <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="fade-up mt-16 text-center" style={{ animationDelay: '600ms' }}>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#14754E] to-[#2E9D6A] shadow-xl shadow-[#14754E]/25 hover:shadow-[#14754E]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.howItWorks.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
