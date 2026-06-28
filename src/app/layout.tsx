import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://www.mluetenders.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mlue Tenders — Discover Moroccan Public Tenders Before Everyone Else',
    template: '%s | Mlue Tenders',
  },
  description:
    'Mlue Tenders helps companies, SMEs, freelancers, and contractors discover Moroccan public tenders, receive personalized notifications, and analyze tenders using AI — so you never miss a business opportunity.',
  keywords: [
    'Morocco tenders',
    'appels d\'offres Maroc',
    'marchés publics',
    'tender discovery',
    'AI tender analysis',
    'government procurement Morocco',
    'Mlue Tenders',
    'mluetenders',
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
      'AI-powered platform to discover, analyze, and track Moroccan public tenders. Get personalized notifications and never miss a business opportunity.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Mlue Tenders — AI-powered tender discovery platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mlue Tenders — Discover Moroccan Public Tenders Before Everyone Else',
    description:
      'AI-powered platform to discover, analyze, and track Moroccan public tenders. Get personalized notifications and never miss a business opportunity.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mlue Tenders',
  url: siteUrl,
  description:
    'AI-powered platform to discover Moroccan public tenders, receive personalized notifications, and analyze tenders with AI.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android',
  offers: [
    {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MAD',
      name: 'Free Plan',
    },
    {
      '@type': 'Offer',
      price: '149',
      priceCurrency: 'MAD',
      name: 'Premium Plan',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '512',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
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
