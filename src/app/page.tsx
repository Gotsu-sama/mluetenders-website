import Hero from '@/components/sections/Hero'
import Trusted from '@/components/sections/Trusted'
import Features from '@/components/sections/Features'
import AISection from '@/components/sections/AISection'
import HowItWorks from '@/components/sections/HowItWorks'
import Screenshots from '@/components/sections/Screenshots'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import Download from '@/components/sections/Download'

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Features />
      <AISection />
      <HowItWorks />
      <Screenshots />
      <Pricing />
      <FAQ />
      <Contact />
      <Download />
    </>
  )
}
