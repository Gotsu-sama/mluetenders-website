'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Rocket, Flame } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import type { LaunchOfferState } from '@/lib/launchOfferConfig'

const POLL_INTERVAL_MS = 60_000

export default function LaunchOfferBanner() {
  const { t } = useI18n()
  const [data, setData] = useState<LaunchOfferState | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fetchState = async () => {
    try {
      const res = await fetch('/api/launch-offer', { cache: 'no-store' })
      if (res.ok) setData(await res.json())
    } catch {
      // silent — never interrupt the pricing section
    }
  }

  useEffect(() => {
    fetchState()
    intervalRef.current = setInterval(fetchState, POLL_INTERVAL_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Hide when loading, sold out, or inactive
  if (!data || !data.active || data.remaining <= 0) return null

  const { remaining, total, claimed, launchPrice, regularPrice } = data
  const isHot     = remaining <= 10
  const isPulse   = remaining <= 5
  const filledPct = Math.max(2, Math.round((claimed / total) * 100))
  const lo        = t.launchOffer

  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div
        className="relative rounded-2xl overflow-hidden border border-[#14754E]/20 dark:border-[#14754E]/25 bg-white dark:bg-[#0F1A2E]"
        style={{ boxShadow: '0 1px 16px rgba(20,117,78,0.10), 0 1px 3px rgba(0,0,0,0.04)' }}
      >
        {/* Content row */}
        <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3">

          {/* Left: badge + pricing + spots */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 flex-1 min-w-0">

            {/* Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shrink-0 ${
                isPulse
                  ? 'animate-pulse bg-red-500/10 border border-red-400/25 text-red-600 dark:text-red-400'
                  : isHot
                    ? 'bg-amber-500/10 border border-amber-400/25 text-amber-600 dark:text-amber-400'
                    : 'bg-[#14754E]/10 border border-[#14754E]/20 text-[#14754E] dark:text-[#2E9D6A]'
              }`}
            >
              {isHot ? (
                <><Flame className="w-3 h-3 flex-shrink-0" aria-hidden="true" />{lo.badgeHot}</>
              ) : (
                <><Rocket className="w-3 h-3 flex-shrink-0" aria-hidden="true" />{lo.badge}</>
              )}
            </span>

            {/* Price */}
            <span className="flex items-center gap-1.5 text-sm">
              <span className="font-bold text-slate-900 dark:text-white">
                {launchPrice}&nbsp;DH
              </span>
              <span className="text-slate-400 dark:text-slate-500">{lo.insteadOf}</span>
              <span className="text-slate-400 dark:text-slate-500 line-through">
                {regularPrice}&nbsp;DH
              </span>
            </span>

            {/* Dot separator — visible only on sm+ */}
            <span className="text-slate-200 dark:text-slate-700 hidden sm:inline select-none" aria-hidden="true">
              ·
            </span>

            {/* Remaining spots */}
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {lo.onlyLabel}{' '}
              <strong className={`font-semibold ${isHot ? 'text-amber-600 dark:text-amber-400' : 'text-slate-800 dark:text-white'}`}>
                {remaining}
              </strong>
              {' '}{lo.spotsOf} {total} {lo.spotsRemaining}
            </span>
          </div>

          {/* CTA */}
          <a
            href="#download"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px active:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #14754E 0%, #2E9D6A 100%)',
              boxShadow: '0 3px 12px rgba(20,117,78,0.35)',
            }}
          >
            {lo.claimCta}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Progress bar — flush to the bottom of the card */}
        <div className="h-1.5 bg-slate-100 dark:bg-white/[0.05]">
          <div
            className="h-full transition-[width] duration-700 ease-out"
            style={{
              width: `${filledPct}%`,
              background: 'linear-gradient(90deg, #14754E 0%, #2E9D6A 100%)',
            }}
            role="progressbar"
            aria-valuenow={claimed}
            aria-valuemin={0}
            aria-valuemax={total}
            aria-label={`${claimed} of ${total} spots claimed`}
          />
        </div>
      </div>
    </div>
  )
}
