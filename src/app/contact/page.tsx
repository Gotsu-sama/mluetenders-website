import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'
import ContactHero from '@/components/sections/ContactHero'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with the Mlue Tenders team. We're here to answer your questions, handle support requests, or explore enterprise partnerships.",
  alternates: { canonical: 'https://www.mluetenders.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Contact />
    </>
  )
}
