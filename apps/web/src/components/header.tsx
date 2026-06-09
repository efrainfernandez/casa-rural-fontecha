'use client'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
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
        <motion.div
          className="space-y-1"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="block text-lg font-semibold tracking-tight">
            Casa Rural Fontecha
          </Link>
          <p className="text-sm text-muted-foreground">Casa Lía y Casa Julio en Pino del Río</p>
        </motion.div>

        <motion.nav
          className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
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
              <motion.span animate={{ rotate: isHousesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="size-4" />
              </motion.span>
            </button>

            <AnimatePresence>
              {isHousesOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="absolute left-0 top-full z-50 min-w-56 pt-3"
                >
                  <div className="grid gap-1 border border-black/8 bg-background/95 p-2 shadow-lg backdrop-blur dark:border-white/10">
                    {houseLinks.map((houseLink, index) => {
                      return (
                        <motion.div
                          key={houseLink.to}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.03 }}
                        >
                          <Link
                            href={houseLink.to}
                            className="block px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-emerald-700/8 hover:text-foreground"
                            onClick={() => setIsHousesOpen(false)}
                          >
                            {houseLink.label}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {secondaryLinks.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className="transition-colors hover:text-foreground">
                {label}
              </Link>
            )
          })}
        </motion.nav>

        <motion.div
          className="flex items-center gap-2 self-start sm:self-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/login" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Acceso
          </Link>
          <ModeToggle />
        </motion.div>
      </div>
    </header>
  )
}
