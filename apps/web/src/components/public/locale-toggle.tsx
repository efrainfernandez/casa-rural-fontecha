'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { cn } from '@casa-rural-fontecha/ui/lib/utils'

import { LOCALE_COOKIE, type Locale } from '@/i18n'

type LocaleToggleProps = {
  locale: Locale
  className?: string
  mobile?: boolean
}

export default function LocaleToggle({ locale, className, mobile = false }: LocaleToggleProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function switchLocale() {
    const nextLocale: Locale = locale === 'es' ? 'en' : 'es'

    document.cookie = `${LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;samesite=lax`

    startTransition(() => {
      router.refresh()
    })
  }

  const label = locale === 'es' ? 'EN' : 'ES'
  const ariaLabel = locale === 'es' ? 'Switch to English' : 'Cambiar a español'

  if (mobile) {
    return (
      <button
        type="button"
        onClick={switchLocale}
        disabled={isPending}
        className={cn(
          'font-label-md text-label-md tracking-widest text-secondary uppercase transition-opacity',
          isPending && 'opacity-60',
          className,
        )}
      >
        {locale === 'es' ? 'EN - English' : 'ES - Español'}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      disabled={isPending}
      aria-label={ariaLabel}
      className={cn(
        'font-label-md text-label-md tracking-widest uppercase transition-colors',
        locale === 'es'
          ? 'text-on-surface-variant hover:text-secondary'
          : 'border-b-2 border-primary pb-1 font-bold text-primary',
        isPending && 'opacity-60',
        className,
      )}
    >
      {label}
    </button>
  )
}
