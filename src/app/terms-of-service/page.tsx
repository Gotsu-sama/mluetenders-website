import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Mlue Tenders Terms of Service — the rules and conditions governing your use of our platform.',
  alternates: { canonical: 'https://www.mluetenders.com/terms-of-service' },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By downloading, installing, or using the Mlue Tenders application or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: '2. Description of Service',
    content: `Mlue Tenders provides an AI-powered platform for discovering Moroccan public tenders, receiving notifications, and analyzing tender documents. Our service aggregates publicly available tender information from official government sources.`,
  },
  {
    title: '3. User Accounts',
    content: `You must create an account to access most features of Mlue Tenders. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate, current, and complete information during registration.`,
  },
  {
    title: '4. Acceptable Use',
    content: `You agree not to: use the service for any unlawful purpose; attempt to gain unauthorized access to any part of the service; scrape, copy, or redistribute tender data without authorization; use automated tools to access the service at a rate exceeding normal usage; or interfere with the proper functioning of the service.`,
  },
  {
    title: '5. Subscription and Payments',
    content: `The Free plan is available at no cost with limited features. The Premium plan is billed monthly at the stated price. Subscriptions renew automatically unless cancelled before the next billing date. Refunds are not available for partial billing periods.`,
  },
  {
    title: '6. Intellectual Property',
    content: `All content, features, and functionality of Mlue Tenders — including but not limited to software, AI models, design, text, and graphics — are owned by Mlue Tenders and protected by applicable intellectual property laws.`,
  },
  {
    title: '7. Disclaimer of Warranties',
    content: `Mlue Tenders provides tender information aggregated from public sources for informational purposes only. We do not guarantee the accuracy, completeness, or timeliness of tender information. Always verify tender details directly with the issuing authority before taking action.`,
  },
  {
    title: '8. Limitation of Liability',
    content: `To the maximum extent permitted by law, Mlue Tenders shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our services.`,
  },
  {
    title: '9. Termination',
    content: `We reserve the right to suspend or terminate your account at any time if you violate these Terms of Service. You may also delete your account at any time through the app settings.`,
  },
  {
    title: '10. Governing Law',
    content: `These Terms of Service are governed by the laws of the Kingdom of Morocco. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of Moroccan courts.`,
  },
  {
    title: '11. Changes to Terms',
    content: `We may update these Terms of Service from time to time. We will notify you of significant changes via email or in-app notification. Continued use of the service after changes constitutes acceptance of the updated terms.`,
  },
  {
    title: '12. Contact',
    content: `For questions about these Terms of Service, please contact us at support@mluetenders.com.`,
  },
]

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B1220]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="mb-12">
          <span className="inline-flex px-3 py-1 rounded-full border border-[#5CA3E0]/25 bg-[#5CA3E0]/8 dark:bg-[#5CA3E0]/10 text-[#5CA3E0] text-sm font-medium mb-6">
            Legal
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Last updated: June 28, 2026
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Please read these Terms of Service carefully before using Mlue Tenders. These terms govern your access to and use of our mobile application and website.
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
