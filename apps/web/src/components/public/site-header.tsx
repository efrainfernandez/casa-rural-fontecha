'use client'

import Link from 'next/link'
import type { Route } from 'next'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { cn } from '@casa-rural-fontecha/ui/lib/utils'

import BookingButton from '@/components/public/booking-button'
import LocaleToggle from '@/components/public/locale-toggle'
import type { Dictionary, Locale } from '@/i18n'

const HOUSE_LINKS = [
  { href: '/casas/casa-lia' as const, label: 'Casa Lía' },
  { href: '/casas/casa-julio' as const, label: 'Casa Julio' },
] as const

type NavLinkProps = {
  href: Route
  label: string
  isActive: boolean
  className?: string
}

function NavLink({ href, label, isActive, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'header-nav-link pb-1 transition-colors',
        isActive
          ? 'border-b-2 border-primary font-bold text-primary'
          : 'font-normal text-on-surface-variant hover:text-primary',
        className,
      )}
    >
      {label}
    </Link>
  )
}

type SiteHeaderProps = {
  locale: Locale
  labels: Dictionary['nav']
  bookingLabel: string
}

export default function SiteHeader({ locale, labels, bookingLabel }: SiteHeaderProps) {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(false)

  const isHome = pathname === '/'
  const isEntorno = pathname === '/entorno'
  const isHouseRoute = pathname.startsWith('/casas')

  useEffect(() => {
    function handleScroll() {
      setIsCompact(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  function openMobileMenu() {
    setIsMobileOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeMobileMenu() {
    setIsMobileOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 z-40 w-full bg-background/80 backdrop-blur-md transition-all duration-300',
          isCompact ? 'h-16 shadow-sm' : 'h-20',
        )}
      >
        <nav className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-gutter">
          <Link href="/" className="shrink-0 font-headline-md text-headline-md tracking-tight text-primary">
            Casa Rural Fontecha
          </Link>

          <div className="hidden shrink-0 items-center gap-8 md:flex">
            <NavLink href="/" label={labels.home} isActive={isHome} />

            <div className="group relative shrink-0">
              <button
                type="button"
                className={cn(
                  'header-nav-link flex items-center gap-1 pb-1 transition-colors',
                  isHouseRoute
                    ? 'border-b-2 border-primary font-bold text-primary'
                    : 'font-normal text-on-surface-variant hover:text-primary',
                )}
              >
                {labels.houses}
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
              <div className="invisible absolute top-full left-0 z-50 mt-2 w-48 rounded-lg border border-outline-variant bg-background opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="py-2">
                  {HOUSE_LINKS.map((link) => {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 font-body-md text-body-md text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            <NavLink href="/entorno" label={labels.environment} isActive={isEntorno} />

            <LocaleToggle locale={locale} className="shrink-0" />

            <BookingButton className="header-booking-btn rounded-full">{bookingLabel}</BookingButton>
          </div>

          <button
            type="button"
            aria-label={labels.openMenu}
            className="flex items-center justify-center p-2 text-primary md:hidden"
            onClick={openMobileMenu}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-300 ease-out md:hidden',
          isMobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-20 items-center justify-between border-b border-outline-variant px-gutter">
          <span className="font-headline-md text-headline-md tracking-tight text-primary">Casa Rural Fontecha</span>
          <button type="button" aria-label={labels.closeMenu} className="p-2 text-primary" onClick={closeMobileMenu}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>

        <div className="flex flex-grow flex-col gap-8 overflow-y-auto px-gutter py-8">
          <Link href="/" className="font-display text-3xl text-primary" onClick={closeMobileMenu}>
            {labels.home}
          </Link>

          <div className="flex flex-col gap-4">
            <span className="font-display flex items-center justify-between text-3xl text-primary">{labels.houses}</span>
            <div className="flex flex-col gap-4 border-l border-outline-variant pl-4">
              {HOUSE_LINKS.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-body-lg text-on-surface-variant"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <Link href="/entorno" className="font-display text-3xl text-primary" onClick={closeMobileMenu}>
            {labels.environment}
          </Link>

          <LocaleToggle locale={locale} mobile />

          <div className="mt-auto pt-8">
            <BookingButton className="w-full rounded-full py-4 text-center">{bookingLabel}</BookingButton>
          </div>
        </div>
      </div>
    </>
  )
}
