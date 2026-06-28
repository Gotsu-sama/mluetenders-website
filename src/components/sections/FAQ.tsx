'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const faqs = [
  {
    question: 'What is Mlue Tenders?',
    answer:
      'Mlue Tenders is an AI-powered mobile application that helps companies, SMEs, freelancers, and contractors discover Moroccan public tenders, receive personalized notifications, and analyze opportunities using artificial intelligence — so you never miss a business opportunity.',
  },
  {
    question: 'How does the AI analysis work?',
    answer:
      'Our AI engine reads the full content of each tender document (in Arabic or French) and produces a structured analysis including: a plain-language summary, eligibility check against your profile, risk assessment, competitiveness score, required documents, and estimated preparation time. The analysis is generated in seconds.',
  },
  {
    question: 'What types of tenders are listed?',
    answer:
      'We list all public tenders published by Moroccan government agencies — including central government, regional authorities, public enterprises, and municipalities. This covers construction, IT, supplies, consultancy, services, and more.',
  },
  {
    question: 'How often are tenders updated?',
    answer:
      'Our platform aggregates tenders daily from official government portals. New tenders are typically available within hours of publication. Premium users receive instant push notifications as soon as a matching tender is detected.',
  },
  {
    question: 'Can I use the app in Arabic and French?',
    answer:
      'Yes. The app is fully available in Arabic, French, and English. AI summaries and analysis are also available in your preferred language, regardless of the original tender language.',
  },
  {
    question: 'What is included in the Free plan?',
    answer:
      'The Free plan lets you browse all public tenders, save up to 5 tenders, use basic search filters, and receive weekly email notifications. AI analysis features and instant notifications are exclusive to the Premium plan.',
  },
  {
    question: 'How much does Premium cost?',
    answer:
      'Premium costs 149 MAD/month. It unlocks unlimited saved tenders, AI tender summaries, AI risk analysis, instant push notifications, personalized recommendations, advanced filters, multi-language support, and priority customer support.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer:
      'Yes. You can cancel your Premium subscription at any time directly from the app settings. You will retain access to Premium features until the end of your current billing period.',
  },
  {
    question: 'Is my business data secure?',
    answer:
      'Absolutely. We follow strict data security standards. Your business profile information is encrypted and never shared with third parties. We comply with Moroccan data protection regulations.',
  },
  {
    question: 'Which platforms is the app available on?',
    answer:
      'Mlue Tenders is available on iOS (App Store) and Android (Google Play). A web dashboard is also in development.',
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-slate-100 dark:border-white/[0.06] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-[#5CA3E0] transition-colors duration-200">
          {question}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center border transition-all duration-200 ${
            isOpen
              ? 'bg-[#5CA3E0]/10 border-[#5CA3E0]/25 text-[#5CA3E0]'
              : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'
          }`}
        >
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-5 gap-16"
        >
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <motion.div variants={fadeInUp} className="inline-flex mb-4">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                FAQ
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Frequently asked{' '}
              <span className="text-gradient">questions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Everything you need to know about Mlue Tenders. Can&apos;t find your answer?
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5CA3E0] hover:text-[#3D8DD4] transition-colors"
            >
              Contact Support →
            </motion.a>
          </div>

          {/* Right: Accordion */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <div className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
