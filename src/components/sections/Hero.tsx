'use client'

import Link from 'next/link'
import { ArrowRight, Download, Bell, RefreshCw, Clock, Home, Search, Star, User } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'

export default function Hero() {
  const { t } = useI18n()

  const floatingBadges = [
    { icon: Bell, label: t.hero.badge1, color: 'blue', pos: 'top-[12%] -left-4' },
    { icon: RefreshCw, label: t.hero.badge2, color: 'green', pos: 'top-[40%] -right-6' },
    { icon: Clock, label: t.hero.badge3, color: 'blue', pos: 'bottom-[20%] -left-2' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-[#0B1220]/60 dark:to-[#0B1220]" />

      {/* Gradient Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] blob opacity-30 dark:opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, #5CA3E0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] blob opacity-20 dark:opacity-15 animate-blob"
        style={{
          background: 'radial-gradient(circle, #14754E 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <div className="hero-fade-up inline-flex mb-6" style={{ animationDelay: '50ms' }}>
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium">
                {t.hero.tag}
              </span>
            </div>

            <h1
              className="hero-fade-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white mb-6"
              style={{ animationDelay: '150ms' }}
            >
              {t.hero.headline1}{' '}
              <span className="text-gradient">{t.hero.headlineHighlight}</span>{' '}
              {t.hero.headline2}
            </h1>

            <p
              className="hero-fade-up text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              style={{ animationDelay: '250ms' }}
            >
              {t.hero.description}
            </p>

            <div
              className="hero-fade-up flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              style={{ animationDelay: '350ms' }}
            >
              <Link
                href="#download"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-[#14754E] to-[#2E9D6A] shadow-xl shadow-[#14754E]/30 hover:shadow-[#14754E]/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Download className="w-4.5 h-4.5" />
                {t.hero.downloadApp}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t.hero.exploreFeatures}
              </Link>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div
            className="hero-scale-in relative flex justify-center lg:justify-end"
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="relative w-[260px] sm:w-[300px] h-[540px] sm:h-[620px] rounded-[48px] border-[6px] border-slate-800 dark:border-slate-700 bg-[#0B1220] shadow-2xl shadow-black/50 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-10" />

                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A2E] to-[#0B1220] flex flex-col">
                  {/* App header */}
                  <div className="pt-12 px-5 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-slate-400 text-xs">{t.hero.mockupGoodMorning}</p>
                        <p className="text-white font-semibold text-sm">{t.hero.mockupTitle}</p>
                      </div>
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#14754E] to-[#2E9D6A] flex items-center justify-center">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Search bar */}
                    <div className="flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-2.5 border border-white/10">
                      <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-500" />
                      <span className="text-slate-500 text-xs">{t.hero.mockupSearch}</span>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="px-5 grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: t.hero.mockupNew, value: '23', color: '#5CA3E0' },
                      { label: t.hero.mockupMatched, value: '8', color: '#14754E' },
                      { label: t.hero.mockupSaved, value: '14', color: '#2E9D6A' },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                        <div className="text-lg font-bold text-white">{s.value}</div>
                        <div className="text-[10px] text-slate-400">{s.label}</div>
                        <div className="mt-1.5 h-1 rounded-full" style={{ background: s.color, width: '60%' }} />
                      </div>
                    ))}
                  </div>

                  {/* Tender list */}
                  <div className="px-5 flex flex-col gap-2.5 flex-1">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      {t.hero.mockupRecent}
                    </p>
                    {[
                      { title: 'Travaux de voirie — Casablanca', budget: '2.4M MAD', tag: 'BTP' },
                      { title: 'Système informatique — Rabat', budget: '850K MAD', tag: 'IT' },
                      { title: 'Fournitures bureau — Marrakech', budget: '120K MAD', tag: 'Supply' },
                    ].map((tender, i) => (
                      <div
                        key={i}
                        className="bg-white/5 rounded-2xl p-3 border border-white/[0.07] flex flex-col gap-1.5"
                      >
                        <p className="text-white text-[11px] font-medium leading-tight line-clamp-2">
                          {tender.title}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#14754E]/15 text-[#2E9D6A]">
                            {tender.tag}
                          </span>
                          <span className="text-[10px] text-slate-400">{tender.budget}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="flex items-center justify-around px-4 pb-4 pt-3 border-t border-white/5">
                    {[Home, Search, Bell, Star, User].map((Icon, i) => (
                      <button
                        key={i}
                        className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${i === 0 ? 'text-[#5CA3E0] opacity-100' : 'text-slate-400 opacity-40'}`}
                        aria-label={['Home', 'Search', 'Notifications', 'Saved', 'Profile'][i]}
                      >
                        <Icon className="w-4 h-4" strokeWidth={i === 0 ? 2.5 : 2} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map(({ icon: Icon, label, color, pos }, i) => (
                <div
                  key={i}
                  className={`hero-scale-in absolute ${pos} flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-[#0F1A2E] border border-slate-200 dark:border-white/10 shadow-xl`}
                  style={{ animationDelay: `${800 + i * 200}ms` }}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${color === 'blue' ? 'bg-[#5CA3E0]/15' : 'bg-[#14754E]/15'}`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${color === 'blue' ? 'text-[#5CA3E0]' : 'text-[#2E9D6A]'}`} />
                  </div>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}

              {/* Glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 bg-[#14754E]/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
