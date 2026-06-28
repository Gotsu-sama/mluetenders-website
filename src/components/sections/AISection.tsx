'use client'

import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, TrendingUp, Clock, FileText, FileSearch } from 'lucide-react'
import { slideInLeft, slideInRight, staggerContainer, fadeInUp } from '@/lib/animations'
import { useI18n } from '@/i18n/I18nContext'

export default function TenderDetailSection() {
  const { t } = useI18n()

  const capabilities = [
    { icon: FileText, text: t.tenderDetail.cap1, color: 'green' },
    { icon: CheckCircle, text: t.tenderDetail.cap2, color: 'blue' },
    { icon: Clock, text: t.tenderDetail.cap3, color: 'orange' },
    { icon: AlertCircle, text: t.tenderDetail.cap4, color: 'blue' },
    { icon: TrendingUp, text: t.tenderDetail.cap5, color: 'green' },
  ]

  return (
    <section id="tender-detail" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#5CA3E0]/5 dark:from-[#080E1A] dark:via-[#0B1220] dark:to-[#0F1A2E]" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] blob opacity-[0.07] dark:opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #5CA3E0 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Tender Detail Card */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1A2E] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden p-6">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14754E] to-[#2E9D6A] flex items-center justify-center shadow-lg shadow-[#14754E]/25">
                  <FileSearch className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.tenderDetail.cardHeaderTitle}
                  </p>
                </div>
              </div>

              {/* Tender info */}
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  {t.tenderDetail.cardTenderLabel}
                </p>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {t.tenderDetail.cardTenderTitle}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {t.tenderDetail.cardTenderMeta}
                </p>
              </div>

              {/* Overview */}
              <div className="mb-5 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.06]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  {t.tenderDetail.overviewLabel}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {t.tenderDetail.overviewText}
                </p>
              </div>

              {/* Status columns */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: t.tenderDetail.col1Label, value: t.tenderDetail.col1Value, color: '#5CA3E0' },
                  { label: t.tenderDetail.col2Label, value: t.tenderDetail.col2Value, color: '#5CA3E0' },
                  { label: t.tenderDetail.col3Label, value: t.tenderDetail.col3Value, color: '#14754E' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center p-3 rounded-xl border border-slate-100 dark:border-white/[0.06] bg-white dark:bg-white/[0.03]"
                  >
                    <span className="text-sm font-bold" style={{ color: s.color }}>
                      {s.value}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Required docs */}
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">
                  {t.tenderDetail.reqLabel}
                </p>
                <div className="flex flex-col gap-1.5">
                  {[
                    t.tenderDetail.req1,
                    t.tenderDetail.req2,
                    t.tenderDetail.req3,
                    t.tenderDetail.req4,
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#14754E] flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>

              {/* Deadline */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-[#5CA3E0]" />
                  {t.tenderDetail.deadlineLabel}{' '}
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {t.tenderDetail.deadlineDays}
                  </span>
                </div>
                <button className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#14754E] to-[#2E9D6A] text-white shadow-md shadow-[#14754E]/20">
                  {t.tenderDetail.saveTender}
                </button>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#14754E]/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#14754E]/15 blur-3xl rounded-full pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={slideInRight}>
            <div className="inline-flex mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                {t.tenderDetail.tag}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-[1.1]">
              {t.tenderDetail.heading1}{' '}
              <span className="text-gradient">{t.tenderDetail.headingHighlight}</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              {t.tenderDetail.description}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {capabilities.map((cap, i) => {
                const Icon = cap.icon
                const colorMap = {
                  green: 'text-[#14754E] dark:text-[#2E9D6A] bg-[#14754E]/10',
                  blue: 'text-[#5CA3E0] bg-[#5CA3E0]/10',
                  orange: 'text-[#5CA3E0] bg-[#5CA3E0]/10',
                }
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] hover:border-[#5CA3E0]/25 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[cap.color as keyof typeof colorMap]}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                      {cap.text}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
