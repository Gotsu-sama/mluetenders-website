'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { Locale } from '@/i18n/translations'
import { cn } from '@/lib/utils'

const locales: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'EN' },
  { code: 'fr', label: 'Français', native: 'FR' },
  { code: 'ar', label: 'العربية', native: 'AR' },
]

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-150"
        aria-label="Select language"
        aria-expanded={open}
      >
        <span className="font-semibold">{current.native}</span>
        <ChevronDown
          className={cn('w-3 h-3 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="absolute top-full mt-2 right-0 rtl:right-auto rtl:left-0 min-w-[130px] rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1A2E] shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden z-50">
          {locales.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code)
                setOpen(false)
              }}
              className={cn(
                'w-full text-left rtl:text-right px-4 py-2.5 text-sm transition-colors duration-150',
                l.code === locale
                  ? 'bg-[#5CA3E0]/10 text-[#5CA3E0] font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
              )}
            >
              <span className="font-semibold me-2">{l.native}</span>
              <span className="opacity-70">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
