import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Mlue Tenders team. We\'re here to answer your questions, handle support requests, or explore enterprise partnerships.',
  alternates: { canonical: 'https://www.mluetenders.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-8 text-center bg-gradient-to-b from-slate-50 to-white dark:from-[#0B1220] dark:to-[#080E1A]">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
            We&apos;d love to{' '}
            <span className="text-gradient">hear from you</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Questions, feedback, partnerships — our team is ready to help.
          </p>
        </div>
      </section>
      <Contact />
    </>
  )
}
