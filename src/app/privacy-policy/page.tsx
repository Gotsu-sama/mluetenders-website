import type { Metadata } from 'next'
import LegalPage from '@/components/sections/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Mlue Tenders Privacy Policy — how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://www.mluetenders.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return <LegalPage doc="privacy" />
}
