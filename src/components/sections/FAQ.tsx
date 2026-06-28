'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { useInView } from '@/hooks/useInView'
import { analytics } from '@/lib/analytics'

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

      {/* CSS grid accordion — animates height: 0 → auto without JS */}
      <div
        className="accordion-grid"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div
          className="overflow-hidden transition-opacity duration-300"
          style={{ opacity: isOpen ? 1 : 0 }}
        >
          <p className="pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useI18n()
  const { ref, visible } = useInView()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
    { question: t.faq.q5, answer: t.faq.a5 },
    { question: t.faq.q6, answer: t.faq.a6 },
    { question: t.faq.q7, answer: t.faq.a7 },
    { question: t.faq.q8, answer: t.faq.a8 },
    { question: t.faq.q9, answer: t.faq.a9 },
    { question: t.faq.q10, answer: t.faq.a10 },
  ]

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid lg:grid-cols-5 gap-16${visible ? ' in-view' : ''}`}
        >
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <div className="fade-up inline-flex mb-4" style={{ animationDelay: '0ms' }}>
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                {t.faq.tag}
              </span>
            </div>
            <h2
              className="fade-up text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
              style={{ animationDelay: '80ms' }}
            >
              {t.faq.heading1}{' '}
              <span className="text-gradient">{t.faq.headingHighlight}</span>
            </h2>
            <p
              className="fade-up text-slate-600 dark:text-slate-400 leading-relaxed mb-8"
              style={{ animationDelay: '160ms' }}
            >
              {t.faq.description}
            </p>
            <a
              className="fade-up inline-flex items-center gap-2 text-sm font-semibold text-[#5CA3E0] hover:text-[#3D8DD4] transition-colors"
              href="/contact"
              style={{ animationDelay: '240ms' }}
            >
              {t.faq.contactLink}
            </a>
          </div>

          {/* Right: Accordion */}
          <div
            className="fade-up lg:col-span-3"
            style={{ animationDelay: '80ms' }}
          >
            <div className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => {
                    if (openIndex !== i) analytics.faqOpen(faq.question)
                    setOpenIndex(openIndex === i ? null : i)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
