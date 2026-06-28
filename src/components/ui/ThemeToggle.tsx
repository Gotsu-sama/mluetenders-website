'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 animate-pulse',
          className
        )}
      />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200',
        'bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10',
        'border border-slate-200 dark:border-white/10',
        'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white',
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 transition-transform duration-200" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-200" />
      )}
    </button>
  )
}
