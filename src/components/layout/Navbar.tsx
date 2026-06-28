'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, TrendingUp } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#ai', label: 'AI Analysis' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-[#5CA3E0] to-[#14754E] flex items-center justify-center shadow-lg shadow-[#5CA3E0]/25">
              <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              Mlue<span className="text-gradient">Tenders</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/#download"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#5CA3E0] to-[#3D8DD4] hover:from-[#7BB8E8] hover:to-[#5CA3E0] text-white shadow-lg shadow-[#5CA3E0]/25 transition-all duration-200 hover:shadow-[#5CA3E0]/40 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute inset-x-0 top-16 transition-all duration-300 origin-top',
          mobileOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        )}
      >
        <div className="mx-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0F1A2E]/95 backdrop-blur-xl shadow-xl overflow-hidden">
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 pt-0">
            <Link
              href="/#download"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#5CA3E0] to-[#3D8DD4] text-white shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
