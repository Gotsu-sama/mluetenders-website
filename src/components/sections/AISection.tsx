'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, AlertCircle, TrendingUp, Clock, Sparkles } from 'lucide-react'
import { slideInLeft, slideInRight, staggerContainer, fadeInUp } from '@/lib/animations'

const aiCapabilities = [
  { icon: CheckCircle, text: 'Instant document comprehension in Arabic & French', color: 'green' },
  { icon: Brain, text: 'Eligibility check against your company profile', color: 'blue' },
  { icon: AlertCircle, text: 'Risk flags: tight deadlines, complex requirements', color: 'orange' },
  { icon: TrendingUp, text: 'Competitiveness score based on market data', color: 'blue' },
  { icon: Clock, text: 'Time-to-prepare estimate', color: 'green' },
]

export default function AISection() {
  return (
    <section id="ai" className="py-24 lg:py-32 relative overflow-hidden">
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
          {/* Left: AI Analysis Card */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1A2E] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden p-6">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5CA3E0] to-[#14754E] flex items-center justify-center shadow-lg shadow-[#5CA3E0]/25">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Analysis</p>
                  <p className="text-xs text-slate-400">Generated in 1.2s</p>
                </div>
                <span className="ml-auto px-2.5 py-1 rounded-full text-xs font-medium bg-[#14754E]/10 text-[#14754E] dark:text-[#1A9663] border border-[#14754E]/20">
                  Match: 91%
                </span>
              </div>

              {/* Tender info */}
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Tender</p>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  Fourniture et installation d&apos;équipements informatiques
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Ministère de l&apos;Éducation Nationale, Rabat • Budget: 3.2M MAD
                </p>
              </div>

              {/* AI Summary */}
              <div className="mb-5 p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.06]">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">AI Summary</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  This tender requires supplying and installing 850 computer workstations across 12 school facilities in Rabat. Delivery within 60 days. Technical specifications require i5 12th gen minimum. Experience certificate with government contracts required.
                </p>
              </div>

              {/* Risk & scores */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Risk Level', value: 'Low', color: '#14754E', bg: '#14754E' },
                  { label: 'Complexity', value: 'Medium', color: '#E07C5C', bg: '#E07C5C' },
                  { label: 'Competition', value: 'High', color: '#5CA3E0', bg: '#5CA3E0' },
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
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2.5">Key Requirements</p>
                <div className="flex flex-col gap-1.5">
                  {[
                    'RC, Patente, CNSS certificates',
                    'Technical reference: 3+ similar contracts',
                    'Financial capacity: 5M MAD minimum',
                    'ISO 9001 certification',
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5CA3E0] flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>

              {/* Deadline */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Clock className="w-4 h-4 text-[#E07C5C]" />
                  Deadline: <span className="font-semibold text-slate-900 dark:text-white">12 days left</span>
                </div>
                <button className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#5CA3E0] to-[#3D8DD4] text-white shadow-md shadow-[#5CA3E0]/20">
                  Save Tender
                </button>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#5CA3E0]/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#14754E]/15 blur-3xl rounded-full pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={slideInRight}>
            <div className="inline-flex mb-6">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                AI-Powered
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-[1.1]">
              Let AI do the heavy{' '}
              <span className="text-gradient">reading for you</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Tender documents can run to hundreds of pages. Our AI reads them in seconds and gives you a clear picture — what&apos;s required, what the risks are, and whether it&apos;s worth your time.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {aiCapabilities.map((cap, i) => {
                const Icon = cap.icon
                const colorMap = {
                  green: 'text-[#14754E] dark:text-[#1A9663] bg-[#14754E]/10',
                  blue: 'text-[#5CA3E0] bg-[#5CA3E0]/10',
                  orange: 'text-[#E07C5C] bg-[#E07C5C]/10',
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
