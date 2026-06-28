'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'
import { Locale } from '@/i18n/translations'
import { cn } from '@/lib/utils'

const locales: { code: Locale; label: string; flagClass: string }[] = [
  { code: 'en', label: 'English',  flagClass: 'fi fi-gb' },
  { code: 'fr', label: 'Français', flagClass: 'fi fi-fr' },
  { code: 'ar', label: 'العربية', flagClass: 'fi fi-ma' },
]

function Flag({ className }: { className: string }) {
  return (
    <span
      className={cn(className, 'flex-shrink-0 rounded-sm')}
      style={{ width: '20px', height: '15px', display: 'inline-block' }}
      aria-hidden="true"
    />
  )
}

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
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-150"
        aria-label={`Language: ${current.label}`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <Flag className={current.flagClass} />
        <span>{current.label}</span>
        <ChevronDown
          className={cn('w-3 h-3 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Select language"
          className="absolute top-full mt-2 right-0 rtl:right-auto rtl:left-0 min-w-[150px] rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F1A2E] shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden z-50"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === locale}
              onClick={() => {
                setLocale(l.code)
                setOpen(false)
              }}
              className={cn(
                'w-full flex items-center gap-2.5 text-left rtl:text-right px-4 py-2.5 text-sm transition-colors duration-150',
                l.code === locale
                  ? 'bg-[#14754E]/10 text-[#14754E] dark:text-[#2E9D6A] font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5'
              )}
            >
              <Flag className={l.flagClass} />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
