import type { Metadata } from 'next'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Download from '@/components/sections/Download'
import PricingHero from '@/components/sections/PricingHero'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for Mlue Tenders. Start free, upgrade to Premium at 149 MAD/month for unlimited tender access, instant notifications, and personalized matching.',
  alternates: { canonical: 'https://www.mluetenders.com/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Pricing />
      <FAQ />
      <Download />
    </>
  )
}
