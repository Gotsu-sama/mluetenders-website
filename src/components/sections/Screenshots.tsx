'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '@/lib/animations'

const screens = [
  {
    title: 'Personalized Dashboard',
    description: 'Your daily tender feed, curated by AI based on your business profile and past interactions.',
    color: '#5CA3E0',
    emoji: '🏠',
    items: ['23 new tenders today', 'Your match score: 91%', 'Deadline alerts: 3'],
  },
  {
    title: 'Smart Search & Filters',
    description: 'Powerful filters by sector, region, budget range, and deadline. Find exactly what you need.',
    color: '#14754E',
    emoji: '🔍',
    items: ['Filter by 12 sectors', 'Region & city filter', 'Budget range slider'],
  },
  {
    title: 'AI Tender Analysis',
    description: 'Deep AI analysis delivered in seconds — summary, risks, eligibility, and competitiveness score.',
    color: '#5CA3E0',
    emoji: '🤖',
    items: ['Risk: Low', 'Match: 91%', 'Summary in 3 languages'],
  },
  {
    title: 'Deadline Tracker',
    description: 'Visual timeline of all your saved tenders with countdown timers and priority alerts.',
    color: '#14754E',
    emoji: '⏰',
    items: ['Visual timeline', 'Priority sorting', 'Push notifications'],
  },
  {
    title: 'Notifications Center',
    description: 'Real-time alerts for new tenders, deadline reminders, and market intelligence updates.',
    color: '#5CA3E0',
    emoji: '🔔',
    items: ['Real-time push alerts', 'Daily digest email', 'Custom alert rules'],
  },
]

export default function Screenshots() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + screens.length) % screens.length)
  const next = () => setActive((a) => (a + 1) % screens.length)

  const screen = screens[active]

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#080E1A] dark:via-[#0B1220] dark:to-[#080E1A]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div variants={fadeInUp} className="inline-flex mb-4">
              <span className="px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                App screenshots
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Beautiful design,{' '}
              <span className="text-gradient">powerful features</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 dark:text-slate-400">
              Explore the app experience crafted for ease and efficiency.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Phone mockup */}
            <motion.div variants={fadeInUp} className="relative flex-shrink-0">
              <div className="relative w-[260px] h-[520px] rounded-[42px] border-[5px] border-slate-800 dark:border-slate-700 bg-[#0B1220] shadow-2xl shadow-black/40 overflow-hidden">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full z-10" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col p-5 pt-12"
                    style={{
                      background: `linear-gradient(135deg, #0F1A2E 0%, #0B1220 100%)`,
                    }}
                  >
                    <div className="text-center mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl"
                        style={{ background: `${screen.color}20` }}
                      >
                        {screen.emoji}
                      </div>
                      <p className="text-white font-bold text-sm">{screen.title}</p>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                      {screen.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/[0.07]"
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: screen.color }}
                          />
                          <span className="text-xs text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      className="mt-4 py-3 rounded-xl text-center text-sm font-semibold text-white"
                      style={{ background: `linear-gradient(135deg, ${screen.color}, ${screen.color}99)` }}
                    >
                      View Details
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Content + Controls */}
            <div className="flex-1 max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                    style={{ background: `${screen.color}15`, color: screen.color }}
                  >
                    Screen {active + 1} of {screens.length}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {screen.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {screen.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  {screens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-300"
                      aria-label={`Go to screen ${i + 1}`}
                    >
                      <div
                        className={`rounded-full transition-all duration-300 ${
                          i === active
                            ? 'w-6 h-2 bg-[#5CA3E0]'
                            : 'w-2 h-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/30'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
