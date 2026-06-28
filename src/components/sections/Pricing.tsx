'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const plans = [
  {
    name: 'Free',
    price: '0',
    currency: 'MAD',
    period: '/month',
    description: 'Perfect for exploring and getting started with tender discovery.',
    cta: 'Get Started Free',
    ctaStyle: 'secondary',
    features: [
      { label: 'Browse public tenders', included: true },
      { label: 'Up to 5 saved tenders', included: true },
      { label: 'Basic search filters', included: true },
      { label: 'Email notifications (weekly)', included: true },
      { label: 'AI tender summaries', included: false },
      { label: 'AI risk analysis', included: false },
      { label: 'Instant push notifications', included: false },
      { label: 'Unlimited saved tenders', included: false },
      { label: 'Advanced AI match scoring', included: false },
      { label: 'Multi-language support', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '149',
    currency: 'MAD',
    period: '/month',
    description: 'Full AI power for companies serious about winning more tenders.',
    cta: 'Start Premium',
    ctaStyle: 'primary',
    popular: true,
    features: [
      { label: 'Browse public tenders', included: true },
      { label: 'Unlimited saved tenders', included: true },
      { label: 'Advanced search & filters', included: true },
      { label: 'Instant push notifications', included: true },
      { label: 'AI tender summaries', included: true },
      { label: 'AI risk analysis', included: true },
      { label: 'AI competitiveness scoring', included: true },
      { label: 'Personalized recommendations', included: true },
      { label: 'Multi-language support', included: true },
      { label: 'Priority customer support', included: true },
    ],
  },
]

const comparisonRows = [
  { feature: 'Tender browsing', free: true, premium: true },
  { feature: 'Saved tenders', free: '5', premium: 'Unlimited' },
  { feature: 'Search filters', free: 'Basic', premium: 'Advanced' },
  { feature: 'Notifications', free: 'Weekly email', premium: 'Instant push' },
  { feature: 'AI summaries', free: false, premium: true },
  { feature: 'AI risk analysis', free: false, premium: true },
  { feature: 'Match scoring', free: false, premium: true },
  { feature: 'Multi-language', free: false, premium: true },
  { feature: 'Support', free: 'Community', premium: 'Priority' },
]

export default function Pricing() {
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
                Simple pricing
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Start free, upgrade{' '}
              <span className="text-gradient">when you&apos;re ready</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400">
              No hidden fees. Cancel anytime.
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
                      Most Popular
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
                  className={`flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 mb-8 ${
                    plan.ctaStyle === 'primary'
                      ? 'bg-gradient-to-r from-[#5CA3E0] to-[#3D8DD4] text-white shadow-lg shadow-[#5CA3E0]/25 hover:shadow-[#5CA3E0]/40 hover:-translate-y-0.5'
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
                            ? 'bg-[#14754E]/15 text-[#14754E] dark:text-[#1A9663]'
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
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Feature</div>
              <div className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300">Free</div>
              <div className="text-center text-sm font-semibold text-[#5CA3E0]">Premium</div>
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
