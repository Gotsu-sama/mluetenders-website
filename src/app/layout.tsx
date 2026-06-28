import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { I18nProvider } from '@/i18n/I18nContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollTracker from '@/components/analytics/ScrollTracker'
import './globals.css'
import Script from "next/script";

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://mluetenders.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Mlue Tenders",

  category: "Business",

  classification: "Business, Government Procurement, Tender Platform",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  title: {
    default: 'Mlue Tenders — Discover Moroccan Public Tenders Before Everyone Else',
    template: '%s | Mlue Tenders',
  },
  description:
    'Mlue Tenders helps companies, SMEs, freelancers, and contractors discover Moroccan public tenders, receive personalized notifications, and track opportunities — so you never miss a business opportunity.',
  keywords: [
    'Morocco tenders',
    "appels d'offres Maroc",
    'marchés publics',
    'tender discovery',
    'government procurement Morocco',
    'Mlue Tenders',
    'mluetenders',
    'مناقصات المغرب',
  ],
  authors: [{ name: 'Mlue Tenders', url: siteUrl }],
  creator: 'Mlue Tenders',
  publisher: 'Mlue Tenders',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Mlue Tenders',
    title: 'Mlue Tenders — Discover Moroccan Public Tenders Before Everyone Else',
    description:
      'Discover, track, and get notified about Moroccan public tenders. Never miss a business opportunity again.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Mlue Tenders — Moroccan public tender discovery platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mlue Tenders — Discover Moroccan Public Tenders Before Everyone Else',
    description:
      'Discover, track, and get notified about Moroccan public tenders. Never miss a business opportunity again.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@mluetenders',
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

const appSchema  = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mlue Tenders',
  url: siteUrl,
  description:
    'Mobile platform to discover Moroccan public tenders, receive personalized notifications, and track opportunities.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mlue Tenders',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mlue Tenders',
  url: siteUrl,
  inLanguage: 'en',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema, appSchema]),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <I18nProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ScrollTracker />
          </I18nProvider>
        </ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6PGJMKBZSW"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6PGJMKBZSW');
          `}
        </Script>
      </body>
    </html>
  )
}
