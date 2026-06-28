'use client'

import { useEffect, useRef } from 'react'
import { analytics } from '@/lib/analytics'

export function useScrollDepth(): void {
  const fired = useRef({ d50: false, d90: false })

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total <= 0) return
      const pct = (window.scrollY / total) * 100

      if (!fired.current.d50 && pct >= 50) {
        fired.current.d50 = true
        analytics.scroll50()
      }
      if (!fired.current.d90 && pct >= 90) {
        fired.current.d90 = true
        analytics.scroll90()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
