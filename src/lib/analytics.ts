declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const GA_MEASUREMENT_ID = 'G-6PGJMKBZSW'

type EventParams = Record<string, string | number | boolean>

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

export const analytics = {
  downloadApp: (platform: 'android' | 'ios') =>
    trackEvent('download_app', { platform }),

  pricingClick: (plan: string) =>
    trackEvent('pricing_click', { plan }),

  contactClick: (method: string) =>
    trackEvent('contact_click', { method }),

  scroll50: () => trackEvent('scroll_50'),

  scroll90: () => trackEvent('scroll_90'),

  featureClick: (feature: string) =>
    trackEvent('feature_click', { feature }),

  faqOpen: (question: string) =>
    trackEvent('faq_open', { question }),

  outboundClick: (destination: string) =>
    trackEvent('outbound_click', { destination }),
}
