'use client'

import { motion } from 'framer-motion'
import { UserPlus, SlidersHorizontal, Inbox, Send } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    description:
      'Sign up in under 2 minutes. Enter your business details, sector, and regions of interest to personalize your experience.',
    color: 'blue',
  },
  {
    step: '02',
    icon: SlidersHorizontal,
    title: 'Select Your Interests',
    description:
      'Choose business categories, geographic zones, and budget ranges. Our AI uses this to filter the thousands of daily tenders.',
    color: 'green',
  },
  {
    step: '03',
    icon: Inbox,
    title: 'Receive Matching Tenders',
    description:
      'Get a curated daily digest of tenders matched to your profile. Each one comes with an AI summary and fit score.',
    color: 'blue',
  },
  {
    step: '04',
    icon: Send,
    title: 'Apply Before the Deadline',
    description:
      'Track deadlines with visual alerts. Download documents, review AI analysis, and submit your bid on time, every time.',
    color: 'green',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 relative">
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
              <span className="px-3 py-1 rounded-full border border-[#14754E]/30 bg-[#14754E]/8 dark:bg-[#14754E]/10 text-[#14754E] dark:text-[#1A9663] text-sm font-medium">
                Simple process
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              From signup to{' '}
              <span className="text-gradient">winning tenders</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              Get started in minutes. No learning curve.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon
                const isBlue = step.color === 'blue'
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
                  >
                    {/* Step circle */}
                    <div
                      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${
                        isBlue
                          ? 'bg-gradient-to-br from-[#5CA3E0] to-[#3D8DD4] shadow-[#5CA3E0]/25'
                          : 'bg-gradient-to-br from-[#14754E] to-[#0F5A3C] shadow-[#14754E]/25'
                      }`}
                    >
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
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#5CA3E0] to-[#14754E] bg-size-300 hover:bg-right shadow-xl shadow-[#5CA3E0]/25 hover:shadow-[#5CA3E0]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start for free today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
