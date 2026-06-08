import type { Route } from 'next'
import Link from 'next/link'

import { Button } from '@casa-rural-fontecha/ui/components/button'

type Action = {
  href: Route
  label: string
  variant?: 'default' | 'outline'
}

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string
  title: string
  description: string
  actions?: readonly Action[]
}) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
        {eyebrow}
      </p>
      <div className="max-w-4xl space-y-5">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="text-lg leading-8 text-muted-foreground sm:text-xl">{description}</p>
      </div>
      {actions != null ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          {actions.map((action) => {
            const variant = action.variant ?? 'default'
            const className = variant === 'default' ? 'bg-emerald-800 text-white hover:bg-emerald-700' : ''

            return (
              <Link key={action.href} href={action.href}>
                <Button size="lg" variant={variant} className={className}>
                  {action.label}
                </Button>
              </Link>
            )
          })}
        </div>
      ) : null}
    </section>
  )
}
