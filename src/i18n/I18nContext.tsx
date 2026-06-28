'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, Translations, translations } from './translations'

type I18nContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType>({
  locale: 'ar',
  setLocale: () => {},
  t: translations.ar,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ar')

  useEffect(() => {
    const saved = localStorage.getItem('mlue-locale') as Locale
    if (saved && ['en', 'fr', 'ar'].includes(saved)) {
      setLocaleState(saved)
      applyLocale(saved)
    } else {
      applyLocale('ar')
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('mlue-locale', newLocale)
    applyLocale(newLocale)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

export const useI18n = () => useContext(I18nContext)
