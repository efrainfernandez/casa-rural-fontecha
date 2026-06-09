import type { Route } from 'next'
import Link from 'next/link'

import { Button } from '@casa-rural-fontecha/ui/components/button'

import { FadeIn, StaggerGroup, StaggerItem } from './reveal'

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
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <StaggerGroup className="flex flex-col gap-6">
        <StaggerItem>
          <p className="inline-flex w-fit rounded-full border border-white/14 bg-black/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur-md">
            {eyebrow}
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{description}</p>
          </div>
        </StaggerItem>
        {actions != null ? (
          <FadeIn>
            <div className="flex flex-col gap-3 sm:flex-row">
              {actions.map((action) => {
                const variant = action.variant ?? 'default'
                const className =
                  variant === 'default'
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'border-white/18 bg-black/14 text-white hover:bg-white/10'

                return (
                  <Link key={action.href} href={action.href}>
                    <Button size="lg" variant={variant} className={className}>
                      {action.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </FadeIn>
        ) : null}
      </StaggerGroup>
    </section>
  )
}
