import type { Metadata } from 'next'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to the most common questions about Mlue Tenders — plans, AI analysis, tender coverage, notifications, language support, and more.',
  alternates: { canonical: 'https://www.mluetenders.com/faq' },
}

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-8 text-center bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1220] dark:to-[#080E1A]">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
            Frequently asked{' '}
            <span className="text-gradient">questions</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Find quick answers to everything you want to know about Mlue Tenders.
          </p>
        </div>
      </section>
      <FAQ />
      <Contact />
    </>
  )
}
