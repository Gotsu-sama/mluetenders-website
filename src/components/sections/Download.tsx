'use client'

import { Smartphone, Download as DownloadIcon } from 'lucide-react'
import Image from 'next/image'
import { useI18n } from '@/i18n/I18nContext'
import { useInView } from '@/hooks/useInView'
import { analytics } from '@/lib/analytics'

export default function Download() {
  const { t } = useI18n()
  const { ref, visible } = useInView()

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
        <div ref={ref} className={visible ? 'in-view' : ''}>
          <div className="fade-up inline-flex mb-6" style={{ animationDelay: '0ms' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14754E] to-[#2E9D6A] flex items-center justify-center shadow-2xl shadow-[#14754E]/30 mx-auto">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2
            className="fade-up text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]"
            style={{ animationDelay: '80ms' }}
          >
            {t.download.heading1}{' '}
            <span className="text-gradient">{t.download.headingHighlight}</span>
          </h2>

          <p
            className="fade-up text-lg text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ animationDelay: '160ms' }}
          >
            {t.download.description}
          </p>

          <div className="fade-up flex items-center justify-center" style={{ animationDelay: '240ms' }}>
            <button
              type="button"
              onClick={() => {
                analytics.downloadApp('android')
                analytics.outboundClick('google_play')
              }}
              className="group inline-flex items-center gap-5 pl-5 pr-7 py-4 rounded-2xl bg-white shadow-2xl shadow-black/30 hover:shadow-[0_20px_60px_rgba(20,117,78,0.35)] hover:-translate-y-1 transition-all duration-300 border border-white/10"
            >
              <Image
                src="/playStore.png"
                alt="Google Play"
                width={48}
                height={48}
                className="w-12 h-12 object-contain flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                  Download
                </p>
                <p className="text-slate-900 font-bold text-xl leading-tight">Google Play</p>
              </div>
              <DownloadIcon className="w-5 h-5 text-[#14754E] ml-2 group-hover:translate-y-0.5 transition-transform flex-shrink-0" />
            </button>
          </div>

          <p
            className="fade-up mt-8 text-sm text-slate-500"
            style={{ animationDelay: '320ms' }}
          >
            {t.download.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}
