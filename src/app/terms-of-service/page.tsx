import type { Metadata } from 'next'
import LegalPage from '@/components/sections/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Mlue Tenders Terms of Service — the rules and conditions governing your use of our platform.',
  alternates: { canonical: 'https://www.mluetenders.com/terms-of-service' },
}

export default function TermsOfServicePage() {
  return <LegalPage doc="terms" />
}
