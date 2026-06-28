'use client'

import Link from 'next/link'
import { TrendingUp, Mail, MapPin } from 'lucide-react'
import { useI18n } from '@/i18n/I18nContext'

export default function Footer() {
  const { t } = useI18n()

  const footerLinks = {
    [t.footer.product]: [
      { label: t.footer.features, href: '/#features' },
      { label: t.footer.howItWorks, href: '/#how-it-works' },
      { label: t.footer.pricing, href: '/pricing' },
      { label: t.footer.downloadApp, href: '/#download' },
    ],
    [t.footer.company]: [
      { label: t.footer.about, href: '/#about' },
      { label: t.footer.contact, href: '/contact' },
      { label: t.footer.faqLink, href: '/faq' },
      { label: t.footer.support, href: 'mailto:support@mluetenders.com' },
    ],
    [t.footer.legal]: [
      { label: t.footer.privacy, href: '/privacy-policy' },
      { label: t.footer.terms, href: '/terms-of-service' },
    ],
  }

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#080E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#14754E] to-[#2E9D6A] flex items-center justify-center shadow-lg shadow-[#14754E]/20">
                <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                Mlue<span className="text-gradient">Tenders</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mb-6">
              {t.footer.description}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:support@mluetenders.com"
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-[#5CA3E0] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                support@mluetenders.com
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Casablanca, Morocco
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Mlue Tenders. {t.footer.rights}
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Crafted by{' '}
            <span className="font-semibold tracking-wide text-slate-600 dark:text-slate-300">
              Mlue <span className="text-gradient">Studio</span>&#174;
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
