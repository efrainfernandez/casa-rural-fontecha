'use client'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@casa-rural-fontecha/ui/lib/utils'

import { ModeToggle } from './mode-toggle'

export default function Header() {
  const pathname = usePathname()
  const [isHousesOpen, setIsHousesOpen] = useState(false)
  const housesMenuRef = useRef<HTMLDivElement | null>(null)

  const primaryLinks = [
    { to: '/', label: 'Inicio' },
  ] as const

  const secondaryLinks = [
    { to: '/entorno', label: 'Entorno' },
    { to: '/confianza', label: 'Confianza' },
    { to: '/contacto', label: 'Contacto' },
  ] as const

  const houseLinks = [
    { to: '/casas', label: 'Comparativa de casas' },
    { to: '/casas/casa-lia', label: 'Casa Lía' },
    { to: '/casas/casa-julio', label: 'Casa Julio' },
  ] as const

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (housesMenuRef.current == null) {
        return
      }

      if (housesMenuRef.current.contains(event.target as Node)) {
        return
      }

      setIsHousesOpen(false)
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return
      }

      setIsHousesOpen(false)
    }

    window.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  useEffect(() => {
    setIsHousesOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-background/85 backdrop-blur dark:border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <Link href="/" className="block text-lg font-semibold tracking-tight">
            Casa Rural Fontecha
          </Link>
          <p className="text-sm text-muted-foreground">Casa Lía y Casa Julio en Pino del Río</p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
          {primaryLinks.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className="transition-colors hover:text-foreground">
                {label}
              </Link>
            )
          })}

          <div
            ref={housesMenuRef}
            className="relative"
            onMouseEnter={() => setIsHousesOpen(true)}
            onMouseLeave={() => setIsHousesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              aria-expanded={isHousesOpen}
              aria-haspopup="menu"
              onClick={() => setIsHousesOpen((currentValue) => !currentValue)}
            >
              Casas
              <ChevronDown className={cn('size-4 transition-transform', isHousesOpen && 'rotate-180')} />
            </button>

            <div
              className={cn(
                'absolute left-0 top-full z-50 min-w-56 pt-3 transition duration-150',
                isHousesOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-1 opacity-0',
              )}
            >
              <div className="grid gap-1 border border-black/8 bg-background/95 p-2 shadow-lg backdrop-blur dark:border-white/10">
                {houseLinks.map((houseLink) => {
                  return (
                    <Link
                      key={houseLink.to}
                      href={houseLink.to}
                      className="block px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-emerald-700/8 hover:text-foreground"
                      onClick={() => setIsHousesOpen(false)}
                    >
                      {houseLink.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {secondaryLinks.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className="transition-colors hover:text-foreground">
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Link href="/login" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Acceso
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
