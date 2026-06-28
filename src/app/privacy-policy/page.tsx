import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Mlue Tenders Privacy Policy — how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://www.mluetenders.com/privacy-policy' },
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly when you create an account, including your name, email address, company name, and business sector. We also collect usage data to improve our services, such as tenders you view, save, or mark as favorites, and notification preferences.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use your information to: provide and improve the Mlue Tenders service; personalize tender recommendations based on your profile and activity; send relevant notifications about matching tenders and deadlines; communicate with you about your account or support requests; and analyze usage patterns to improve app performance.`,
  },
  {
    title: '3. Data Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for analytics purposes. We may disclose your information if required by law or in response to valid legal processes.`,
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal data, including encryption in transit and at rest. While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet is 100% secure.`,
  },
  {
    title: '5. Your Rights',
    content: `You have the right to access, correct, or delete your personal data at any time. You can manage your preferences and data through your account settings in the app, or by contacting us at support@mluetenders.com.`,
  },
  {
    title: '6. Cookies',
    content: `Our website uses cookies to enhance your browsing experience and analyze traffic. You can control cookie settings through your browser. Disabling cookies may affect certain features of our website.`,
  },
  {
    title: '7. Data Retention',
    content: `We retain your personal data for as long as your account is active or as needed to provide services. If you delete your account, we will remove your personal data within 30 days, except where we are required to retain it for legal obligations.`,
  },
  {
    title: '8. Contact Us',
    content: `For any privacy-related questions or requests, please contact us at support@mluetenders.com. We will respond within 30 days.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Last updated: June 28, 2026
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            At Mlue Tenders, we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website.
          </p>

          {sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
