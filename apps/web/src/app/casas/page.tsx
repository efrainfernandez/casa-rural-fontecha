import type { Metadata } from 'next'
import Link from 'next/link'
import { BedDouble, Users } from 'lucide-react'

import { Button } from '@casa-rural-fontecha/ui/components/button'
import { Card, CardContent, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import PageHero from '@/components/public/page-hero'
import { HoverLift, StaggerGroup, StaggerItem } from '@/components/public/reveal'
import SectionTitle from '@/components/public/section-title'
import { ACCOMMODATIONS } from '@/content/public-content'

export const metadata: Metadata = {
  title: 'Casas | Casa Rural Fontecha',
  description: 'Comparativa de Casa Lía y Casa Julio con información básica de capacidad, dormitorios y enfoque de estancia.',
}

export default function HousesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casas"
        title="Dos alojamientos con personalidad propia dentro de Casa Rural Fontecha."
        description="Esta página reúne la información básica de Casa Lía y Casa Julio para facilitar una comparación rápida antes de entrar en el detalle de cada una."
        actions={[
          { href: '/casas/casa-lia', label: 'Ver Casa Lía' },
          { href: '/casas/casa-julio', label: 'Ver Casa Julio', variant: 'outline' },
        ]}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionTitle
          eyebrow="Comparativa"
          title="Resumen rápido de las dos casas."
          description="La decisión se simplifica mostrando capacidad, dormitorios, carácter y algunos rasgos clave de cada alojamiento."
        />

        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          {ACCOMMODATIONS.map((accommodation) => {
            return (
              <StaggerItem key={accommodation.slug}>
                <HoverLift>
                  <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                    <CardHeader className="border-b border-black/6 bg-[linear-gradient(135deg,rgba(14,116,89,0.12),rgba(120,53,15,0.12))] py-5 dark:border-white/10">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800 dark:text-emerald-300">
                        {accommodation.slug}
                      </p>
                      <CardTitle className="text-2xl font-semibold">{accommodation.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6 px-4 py-5">
                      <p className="text-base leading-7 text-muted-foreground">{accommodation.summary}</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-center gap-3 border border-black/6 p-3 dark:border-white/10">
                          <Users className="size-4 text-emerald-700 dark:text-emerald-300" />
                          <span>{accommodation.capacity} plazas</span>
                        </div>
                        <div className="flex items-center gap-3 border border-black/6 p-3 dark:border-white/10">
                          <BedDouble className="size-4 text-emerald-700 dark:text-emerald-300" />
                          <span>{accommodation.bedrooms} dormitorios</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {accommodation.features.map((feature) => {
                          return (
                            <span
                              key={feature}
                              className="border border-emerald-800/15 bg-emerald-700/8 px-3 py-1 text-xs font-medium text-emerald-900 dark:border-emerald-200/15 dark:bg-emerald-300/10 dark:text-emerald-100"
                            >
                              {feature}
                            </span>
                          )
                        })}
                      </div>
                      <Link href={`/casas/${accommodation.slug}`}>
                        <Button variant="outline">Ver ficha completa</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </section>
    </main>
  )
}
