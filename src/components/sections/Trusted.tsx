'use client'

import { motion } from 'framer-motion'
import { TrendingUp, RefreshCw, Brain, Bell } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const stats = [
  {
    icon: TrendingUp,
    value: '50,000+',
    label: 'Public Tenders',
    description: 'From all Moroccan government agencies',
    color: 'blue',
  },
  {
    icon: RefreshCw,
    value: 'Daily',
    label: 'Automatic Updates',
    description: 'New tenders added every morning',
    color: 'green',
  },
  {
    icon: Brain,
    value: 'AI-Powered',
    label: 'Smart Analysis',
    description: 'Summaries, risks, and scoring in seconds',
    color: 'blue',
  },
  {
    icon: Bell,
    value: 'Instant',
    label: 'Notifications',
    description: 'Get alerts before the deadline closes',
    color: 'green',
  },
]

export default function Trusted() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-[#080E1A] dark:to-[#0B1220]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-12"
          >
            Trusted by businesses across Morocco
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              const isBlue = stat.color === 'blue'
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative p-6 rounded-2xl border bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.07] hover:border-[#5CA3E0]/40 dark:hover:border-[#5CA3E0]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5CA3E0]/10"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                      isBlue
                        ? 'bg-[#5CA3E0]/10 text-[#5CA3E0]'
                        : 'bg-[#14754E]/10 text-[#14754E] dark:text-[#1A9663]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{stat.description}</div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[#5CA3E0]/5 to-transparent" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
