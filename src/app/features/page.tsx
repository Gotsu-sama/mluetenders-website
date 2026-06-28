import type { Metadata } from 'next'
import Features from '@/components/sections/Features'
import AISection from '@/components/sections/AISection'
import HowItWorks from '@/components/sections/HowItWorks'
import Download from '@/components/sections/Download'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore all features of Mlue Tenders: AI summaries, risk analysis, deadline tracking, smart search, personalized recommendations, and instant notifications for Moroccan public tenders.',
  alternates: { canonical: 'https://www.mluetenders.com/features' },
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 text-center bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1220] dark:to-[#080E1A]">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            Features
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
            Everything you need to{' '}
            <span className="text-gradient">win tenders</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            From discovery to submission — Mlue Tenders gives you every tool your business needs to identify, analyze, and win public tenders in Morocco.
          </p>
        </div>
      </section>
      <Features />
      <AISection />
      <HowItWorks />
      <Download />
    </>
  )
}
