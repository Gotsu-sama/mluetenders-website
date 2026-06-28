'use client'

import { TrendingUp, RefreshCw, Globe, Bell } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { useInView } from '@/hooks/useInView'

export default function Trusted() {
  const { t } = useI18n()
  const { ref, visible } = useInView()

  const stats = [
    {
      icon: RefreshCw,
      value: t.trusted.stat1Value,
      label: t.trusted.stat1Label,
      description: t.trusted.stat1Desc,
      color: 'green',
    },
    {
      icon: Bell,
      value: t.trusted.stat2Value,
      label: t.trusted.stat2Label,
      description: t.trusted.stat2Desc,
      color: 'blue',
    },
    {
      icon: Globe,
      value: t.trusted.stat3Value,
      label: t.trusted.stat3Label,
      description: t.trusted.stat3Desc,
      color: 'green',
    },
    {
      icon: TrendingUp,
      value: t.trusted.stat4Value,
      label: t.trusted.stat4Label,
      description: t.trusted.stat4Desc,
      color: 'blue',
    },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-[#080E1A] dark:to-[#0B1220]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={visible ? 'in-view' : ''}>
          <p
            className="fade-up text-center text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-12"
            style={{ animationDelay: '0ms' }}
          >
            {t.trusted.heading}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              const isBlue = stat.color === 'blue'
              return (
                <div
                  key={i}
                  className="fade-up group relative p-6 rounded-2xl border bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.07] hover:border-[#5CA3E0]/40 dark:hover:border-[#5CA3E0]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5CA3E0]/10"
                  style={{ animationDelay: `${80 + i * 80}ms` }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      isBlue
                        ? 'bg-[#5CA3E0]/10 text-[#5CA3E0]'
                        : 'bg-[#14754E]/10 text-[#14754E] dark:text-[#2E9D6A]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.description}</div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[#5CA3E0]/5 to-transparent" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
