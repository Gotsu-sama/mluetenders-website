import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

const Trusted = dynamic(() => import('@/components/sections/Trusted'))
const Features = dynamic(() => import('@/components/sections/Features'))
const AISection = dynamic(() => import('@/components/sections/AISection'))
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'))
const Screenshots = dynamic(() => import('@/components/sections/Screenshots'))
const Pricing = dynamic(() => import('@/components/sections/Pricing'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const Contact = dynamic(() => import('@/components/sections/Contact'))
const Download = dynamic(() => import('@/components/sections/Download'))

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
