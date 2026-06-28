'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { useI18n } from '@/i18n/I18nContext'
import { analytics } from '@/lib/analytics'

export default function Pricing() {
  const { t } = useI18n()

  const plans = [
    {
      id: 'free',
      name: t.pricing.freeName,
      price: 'Free',
      currency: '',
      period: '',
      description: t.pricing.freeDesc,
      cta: t.pricing.freeCta,
      ctaStyle: 'secondary',
      features: [
        { label: t.pricing.feat1, included: true },
        { label: t.pricing.feat2, included: true },
        { label: t.pricing.feat3, included: true },
        { label: t.pricing.feat4, included: true },
        { label: t.pricing.feat5, included: false },
        { label: t.pricing.feat6, included: false },
        { label: t.pricing.feat7, included: false },
        { label: t.pricing.feat8, included: false },
        { label: t.pricing.feat9, included: false },
        { label: t.pricing.feat10, included: false },
      ],
    },
    {
      id: 'premium',
      name: t.pricing.premiumName,
      price: '699',
      currency: 'MAD',
      period: '/year',
      description: t.pricing.premiumDesc,
      cta: t.pricing.premiumCta,
      ctaStyle: 'primary',
      popular: true,
      features: [
        { label: t.pricing.premFeat1, included: true },
        { label: t.pricing.premFeat2, included: true },
        { label: t.pricing.premFeat3, included: true },
        { label: t.pricing.premFeat4, included: true },
        { label: t.pricing.premFeat5, included: true },
        { label: t.pricing.premFeat6, included: true },
        { label: t.pricing.premFeat7, included: true },
        { label: t.pricing.premFeat8, included: true },
        { label: t.pricing.premFeat9, included: true },
        { label: t.pricing.premFeat10, included: true },
      ],
    },
  ]

  const comparisonRows = [
    { feature: t.pricing.row1, free: true, premium: true },
    { feature: t.pricing.row2, free: t.pricing.saved5, premium: t.pricing.savedUnlimited },
    { feature: t.pricing.row3, free: t.pricing.filterBasic, premium: t.pricing.filterAdvanced },
    { feature: t.pricing.row4, free: t.pricing.notifWeekly, premium: t.pricing.notifInstant },
    { feature: t.pricing.row5, free: false, premium: true },
    { feature: t.pricing.row6, free: false, premium: true },
    { feature: t.pricing.row7, free: false, premium: true },
    { feature: t.pricing.row8, free: false, premium: true },
    { feature: t.pricing.row9, free: t.pricing.supportCommunity, premium: t.pricing.supportPriority },
  ]

  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-[#0B1220] dark:to-[#080E1A]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div variants={fadeInUp} className="inline-flex mb-4">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                {t.pricing.tag}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              {t.pricing.heading1}{' '}
              <span className="text-gradient">{t.pricing.headingHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400">
              {t.pricing.description}
            </motion.p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#5CA3E0]/40 bg-white dark:bg-[#0F1A2E] shadow-2xl shadow-[#5CA3E0]/15'
                    : 'border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.03]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#5CA3E0] to-[#3D8DD4] text-white shadow-lg shadow-[#5CA3E0]/30">
                      <Zap className="w-3 h-3 fill-current" />
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">{plan.name}</p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">{plan.price}</span>
                    <span className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      {plan.currency}{plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
                </div>

                <a
                  href="#download"
                  onClick={() => analytics.pricingClick(plan.id)}
                  className={`flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-8 ${
                    plan.ctaStyle === 'primary'
                      ? 'bg-gradient-to-r from-[#14754E] to-[#2E9D6A] text-white shadow-lg shadow-[#14754E]/25 hover:shadow-[#14754E]/40 hover:-translate-y-0.5'
                      : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div
                        className={`w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          f.included
                            ? 'bg-[#14754E]/15 text-[#14754E] dark:text-[#2E9D6A]'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-300 dark:text-slate-600'
                        }`}
                      >
                        {f.included ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                      </div>
                      <span
                        className={`text-sm ${
                          f.included
                            ? 'text-slate-700 dark:text-slate-300'
                            : 'text-slate-400 dark:text-slate-600'
                        }`}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Comparison table */}
          <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/[0.07]">
            <div className="grid grid-cols-3 bg-slate-50 dark:bg-white/[0.03] border-b border-slate-200 dark:border-white/[0.07] px-6 py-4">
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">{t.pricing.tableFeature}</div>
              <div className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300">{t.pricing.tableFree}</div>
              <div className="text-center text-sm font-semibold text-[#5CA3E0]">{t.pricing.tablePremium}</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 px-6 py-4 items-center ${
                  i < comparisonRows.length - 1
                    ? 'border-b border-slate-100 dark:border-white/[0.04]'
                    : ''
                } bg-white dark:bg-transparent`}
              >
                <span className="text-sm text-slate-700 dark:text-slate-300">{row.feature}</span>
                <div className="flex justify-center">
                  {typeof row.free === 'boolean' ? (
                    row.free ? (
                      <Check className="w-4 h-4 text-[#14754E]" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    )
                  ) : (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{row.free}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {typeof row.premium === 'boolean' ? (
                    row.premium ? (
                      <Check className="w-4 h-4 text-[#14754E]" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    )
                  ) : (
                    <span className="text-xs font-medium text-[#5CA3E0]">{row.premium}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
