'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  ClipboardList,
  Clock,
  Star,
  LayoutList,
  Bell,
  Globe,
} from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { useI18n } from '@/i18n/I18nContext'

const featureIcons = [Search, FileText, ClipboardList, Clock, Star, LayoutList, Bell, Globe]
const featureColors = ['blue', 'green', 'blue', 'green', 'blue', 'green', 'blue', 'green']

export default function Features() {
  const { t } = useI18n()

  const features = [
    { title: t.features.f1Title, description: t.features.f1Desc },
    { title: t.features.f2Title, description: t.features.f2Desc },
    { title: t.features.f3Title, description: t.features.f3Desc },
    { title: t.features.f4Title, description: t.features.f4Desc },
    { title: t.features.f5Title, description: t.features.f5Desc },
    { title: t.features.f6Title, description: t.features.f6Desc },
    { title: t.features.f7Title, description: t.features.f7Desc },
    { title: t.features.f8Title, description: t.features.f8Desc },
  ]

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {t.features.tag}
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              {t.features.heading1}{' '}
              <span className="text-gradient">{t.features.headingHighlight}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              {t.features.description}
            </motion.p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => {
              const Icon = featureIcons[i]
              const isBlue = featureColors[i] === 'blue'
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group relative p-6 rounded-2xl border bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.07] hover:border-[#5CA3E0]/30 dark:hover:border-[#5CA3E0]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-[#5CA3E0]/5 cursor-default"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                      isBlue
                        ? 'bg-[#5CA3E0]/10 text-[#5CA3E0]'
                        : 'bg-[#14754E]/10 text-[#14754E] dark:text-[#2E9D6A]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div
                    className={`absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isBlue
                        ? 'bg-gradient-to-r from-transparent via-[#5CA3E0]/50 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-[#14754E]/50 to-transparent'
                    }`}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
