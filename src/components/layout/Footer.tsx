import Link from 'next/link'
import { TrendingUp, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'AI Analysis', href: '/#ai' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Download App', href: '/#download' },
  ],
  Company: [
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Support', href: 'mailto:support@mluetenders.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#080E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#5CA3E0] to-[#14754E] flex items-center justify-center shadow-lg shadow-[#5CA3E0]/20">
                <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                Mlue<span className="text-gradient">Tenders</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mb-6">
              The smart platform for discovering Moroccan public tenders. AI-powered analysis, personalized notifications, and real-time updates — so you never miss a business opportunity.
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
            © {new Date().getFullYear()} Mlue Tenders. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span>for Moroccan businesses</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
