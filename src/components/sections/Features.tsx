'use client'

import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  AlertTriangle,
  Clock,
  Star,
  Sparkles,
  Bell,
  Globe,
} from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const features = [
  {
    icon: Search,
    title: 'Smart Search',
    description:
      'Filter by sector, region, budget, and deadline. Find the exact tenders relevant to your business in seconds.',
    color: 'blue',
  },
  {
    icon: FileText,
    title: 'AI Tender Summary',
    description:
      'Our AI reads complex tender documents and delivers a clear, concise summary so you understand the opportunity instantly.',
    color: 'green',
  },
  {
    icon: AlertTriangle,
    title: 'AI Risk Analysis',
    description:
      'Identify potential risks, technical barriers, and eligibility issues before investing time in preparation.',
    color: 'blue',
  },
  {
    icon: Clock,
    title: 'Deadline Tracking',
    description:
      'Never miss a submission date. Visual timeline tracking with reminders at 7 days, 48 hours, and same day.',
    color: 'green',
  },
  {
    icon: Star,
    title: 'Favorites & Lists',
    description:
      'Save interesting tenders to custom lists and share them with your team for collaborative review.',
    color: 'blue',
  },
  {
    icon: Sparkles,
    title: 'Personalized Feed',
    description:
      'The more you use the app, the smarter it gets. AI learns your business profile and surfaces the best matches.',
    color: 'green',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description:
      'Push notifications for new matching tenders, deadline alerts, and status changes — delivered in real time.',
    color: 'blue',
  },
  {
    icon: Globe,
    title: 'Multi-language',
    description:
      'Available in Arabic, French, and English. Tender summaries are auto-translated to your preferred language.',
    color: 'green',
  },
]

export default function Features() {
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
                Everything you need
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Built for serious{' '}
              <span className="text-gradient">tender hunters</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Every feature is designed to give you an edge — from discovery to submission.
            </motion.p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon
              const isBlue = feature.color === 'blue'
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
                        : 'bg-[#14754E]/10 text-[#14754E] dark:text-[#1A9663]'
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
