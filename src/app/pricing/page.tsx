import type { Metadata } from 'next'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Download from '@/components/sections/Download'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Mlue Tenders. Start free, upgrade to Premium at 149 MAD/month for unlimited AI analysis, instant notifications, and personalized tender matching.',
  alternates: { canonical: 'https://www.mluetenders.com/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-8 text-center bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1220] dark:to-[#080E1A]">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
            Simple, honest{' '}
            <span className="text-gradient">pricing</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Start for free. Upgrade when you need the full AI power. Cancel any time, no questions asked.
          </p>
        </div>
      </section>
      <Pricing />
      <FAQ />
      <Download />
    </>
  )
}
