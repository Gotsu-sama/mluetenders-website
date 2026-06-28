import type { Metadata } from 'next'
import Features from '@/components/sections/Features'
import AISection from '@/components/sections/AISection'
import HowItWorks from '@/components/sections/HowItWorks'
import Download from '@/components/sections/Download'
import FeaturesHero from '@/components/sections/FeaturesHero'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore all features of Mlue Tenders: tender summaries, requirements analysis, deadline tracking, smart search, personalized recommendations, and instant notifications for Moroccan public tenders.',
  alternates: { canonical: 'https://www.mluetenders.com/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <FeaturesHero />
      <Features />
      <AISection />
      <HowItWorks />
      <Download />
    </>
  )
}
