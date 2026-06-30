import { cookies } from 'next/headers'

import { LOCALE_COOKIE } from './constants'
import { en } from './locales/en'
import { es } from './locales/es'
import type { Dictionary, Locale } from './types'

const dictionaries = {
  es,
  en,
} as const

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary
}

export function isLocale(value: string | undefined): value is Locale {
  return value === 'es' || value === 'en'
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value

  if (isLocale(value)) {
    return value
  }

  return 'es'
}
