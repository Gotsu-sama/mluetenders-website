'use client'

import { motion } from 'framer-motion'
import { Smartphone, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Download() {
  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1A2E] via-[#0B1220] to-[#0F2318]" />
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] blob opacity-20"
        style={{ background: 'radial-gradient(circle, #5CA3E0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob opacity-15"
        style={{ background: 'radial-gradient(circle, #14754E 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-grid-dark opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeInUp} className="inline-flex mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5CA3E0] to-[#14754E] flex items-center justify-center shadow-2xl shadow-[#5CA3E0]/30 mx-auto">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]"
          >
            Ready to win more{' '}
            <span className="text-gradient">tenders?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Join thousands of Moroccan businesses already using Mlue Tenders to discover opportunities, analyze risks, and submit winning bids.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white text-slate-900 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[200px]"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-slate-500">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white text-slate-900 font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 min-w-[200px]"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.65.22 1.02.13l12.4-6.99-2.65-2.65-10.77 9.51zm16.84-10.65L17.12 12l2.9-1.11c.77-.3.77-1.54 0-1.84l-16-6.1C2.87 2.44 1.82 3.68 2.36 4.74l3.72 6.15L17.12 12l-11.04.11-3.72 6.15c-.54 1.06.51 2.3 1.66 1.79l16-6.1c.77-.3.77-1.54 0-1.84z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-slate-500">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-sm text-slate-500">
            Free to download • No credit card required • iOS & Android
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
