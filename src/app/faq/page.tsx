import type { Metadata } from 'next'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import FAQHero from '@/components/sections/FAQHero'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to the most common questions about Mlue Tenders — plans, tender coverage, notifications, language support, and more.',
  alternates: { canonical: 'https://www.mluetenders.com/faq' },
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQ />
      <Contact />
    </>
  )
}
