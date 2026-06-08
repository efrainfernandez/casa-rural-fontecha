'use client'
import Link from 'next/link'

import { ModeToggle } from './mode-toggle'

export default function Header() {
  const links = [
    { to: '/#casas', label: 'Casas' },
    { to: '/#entorno', label: 'Entorno' },
    { to: '/#confianza', label: 'Confianza' },
    { to: '/#contacto', label: 'Contacto' },
  ] as const

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
          {links.map(({ to, label }) => {
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
