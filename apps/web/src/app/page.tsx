import Link from 'next/link'
import { ArrowRight, BedDouble, Camera, Flame, MapPin, Sparkles, Trees, Users, Waves } from 'lucide-react'

import { Button } from '@casa-rural-fontecha/ui/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import { FadeIn, HoverLift, StaggerGroup, StaggerItem } from '@/components/public/reveal'
import SectionTitle from '@/components/public/section-title'
import {
  ACCOMMODATIONS,
  CONTACT_DETAILS,
  ENVIRONMENT_HIGHLIGHTS,
  REVIEW_SNIPPETS,
  TRUST_POINTS,
} from '@/content/public-content'

export default function Home() {
  const totalCapacity = ACCOMMODATIONS.reduce((sum, accommodation) => {
    return sum + accommodation.capacity
  }, 0)

  const totalBedrooms = ACCOMMODATIONS.reduce((sum, accommodation) => {
    return sum + accommodation.bedrooms
  }, 0)

  return (
    <main className="bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_24%),linear-gradient(180deg,rgba(248,246,239,0.58)_0%,rgba(255,255,255,0.4)_34%,rgba(241,248,244,0.5)_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(14,18,16,0.42)_0%,rgba(12,14,13,0.56)_100%)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-center">
          <StaggerGroup className="space-y-7">
            <StaggerItem>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-emerald-800 dark:text-emerald-200">
                <span className="rounded-full border border-emerald-800/14 bg-white/80 px-3 py-1.5 dark:border-emerald-200/20 dark:bg-white/5">
                  Pino del Río
                </span>
                <span className="rounded-full border border-emerald-800/14 bg-white/80 px-3 py-1.5 dark:border-emerald-200/20 dark:bg-white/5">
                  Río Carrión
                </span>
                <span className="rounded-full border border-emerald-800/14 bg-white/80 px-3 py-1.5 dark:border-emerald-200/20 dark:bg-white/5">
                  Escapada rural
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                  Menos ruido. Más calma.
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Dos casas rurales con mucho aire, luz y río cerca.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-black/6 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">2</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Casas</p>
                </div>
                <div className="rounded-3xl border border-black/6 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">{totalCapacity}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Plazas</p>
                </div>
                <div className="rounded-3xl border border-black/6 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                  <p className="text-2xl font-semibold">{totalBedrooms}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Dormitorios</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/casas">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-emerald-800 px-6 text-white hover:bg-emerald-700 sm:w-auto"
                  >
                    Ver las casas
                  </Button>
                </Link>
                <Link href="/entorno">
                  <Button size="lg" variant="outline" className="w-full rounded-full sm:w-auto">
                    Ver entorno
                  </Button>
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <FadeIn>
            <HoverLift>
              <Card className="overflow-hidden rounded-[2rem] border-0 bg-stone-950 text-stone-50 shadow-[0_30px_80px_rgba(15,23,42,0.24)] ring-stone-900/30">
                <CardHeader className="space-y-5 border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.28),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">Vista rápida</p>
                  <CardTitle className="max-w-sm text-3xl font-semibold text-balance text-stone-50">
                    Campo, agua y casas con personalidad.
                  </CardTitle>
                  <CardDescription className="max-w-sm text-sm leading-7 text-stone-300">
                    Una home más limpia, visual y directa.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <Waves className="mb-4 size-5 text-emerald-300" />
                    <p className="text-lg font-medium">Río y paseos</p>
                    <p className="mt-2 text-sm text-stone-300">Entorno sereno a pocos minutos.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <Sparkles className="mb-4 size-5 text-amber-300" />
                    <p className="text-lg font-medium">Interiores cálidos</p>
                    <p className="mt-2 text-sm text-stone-300">Espacios pensados para descansar.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold">{totalCapacity} plazas</p>
                        <p className="mt-1 text-sm text-stone-300">Repartidas entre Casa Lía y Casa Julio.</p>
                      </div>
                      <ArrowRight className="size-5 shrink-0 text-stone-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </HoverLift>
          </FadeIn>
        </div>
      </section>

      <section id="casas" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Las casas" title="Elige tu ritmo." description="Dos estilos, misma calma." />

        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          {ACCOMMODATIONS.map((accommodation) => {
            const hasFireplace = accommodation.slug === 'casa-lia'

            return (
              <StaggerItem key={accommodation.slug}>
                <HoverLift>
                  <Card className="overflow-hidden rounded-[2rem] border-0 bg-white/88 py-0 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ring-1 ring-black/6 dark:bg-card">
                    <div className="border-b border-black/6 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.24),transparent_40%),linear-gradient(135deg,rgba(14,116,89,0.08),rgba(120,53,15,0.12))] px-5 py-6 dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_40%),linear-gradient(135deg,rgba(16,185,129,0.14),rgba(180,83,9,0.12))]">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-800 dark:text-emerald-300">
                        {accommodation.slug}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold">{accommodation.name}</h3>
                    </div>

                    <CardContent className="grid gap-6 px-5 py-6">
                      <p className="max-w-md text-base leading-7 text-muted-foreground">{accommodation.summary}</p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-2xl border border-black/6 p-3.5 dark:border-white/10">
                          <Users className="size-4 text-emerald-700 dark:text-emerald-300" />
                          <span>{accommodation.capacity} plazas</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-black/6 p-3.5 dark:border-white/10">
                          <BedDouble className="size-4 text-emerald-700 dark:text-emerald-300" />
                          <span>{accommodation.bedrooms} dormitorios</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-black/6 p-3.5 dark:border-white/10">
                          {hasFireplace ? (
                            <Flame className="size-4 text-emerald-700 dark:text-emerald-300" />
                          ) : (
                            <Trees className="size-4 text-emerald-700 dark:text-emerald-300" />
                          )}
                          <span>{accommodation.features[0]}</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-black/6 p-3.5 dark:border-white/10">
                          <MapPin className="size-4 text-emerald-700 dark:text-emerald-300" />
                          <span>{CONTACT_DETAILS.location}</span>
                        </div>
                      </div>

                      <p className="text-sm leading-7 text-muted-foreground">{accommodation.audience}</p>

                      <div className="flex flex-wrap gap-2">
                        {accommodation.features.map((feature) => {
                          return (
                            <span
                              key={feature}
                              className="rounded-full border border-emerald-800/15 bg-emerald-700/8 px-3 py-1.5 text-xs font-medium text-emerald-900 dark:border-emerald-200/15 dark:bg-emerald-300/10 dark:text-emerald-100"
                            >
                              {feature}
                            </span>
                          )
                        })}
                      </div>

                      <Link href={`/casas/${accommodation.slug}`}>
                        <Button variant="outline" className="rounded-full">
                          Ver ficha
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experiencia visual"
          title="Más imagen, menos explicación."
          description="La web deja respirar cada bloque y prioriza sensaciones."
        />

        <FadeIn>
          <HoverLift>
            <Card className="overflow-hidden rounded-[2rem] border-0 bg-stone-900 py-0 text-stone-50 ring-stone-900/30">
              <CardContent className="grid gap-8 px-5 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-6 lg:py-8">
                <div className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5">
                    <Camera className="size-5 text-emerald-300" />
                  </div>
                  <h3 className="text-3xl font-semibold text-balance">Recorridos más fluidos.</h3>
                  <p className="max-w-sm text-sm leading-7 text-stone-300">
                    Tarjetas grandes, aire visual y animaciones más suaves.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">Casa Lía</p>
                    <p className="mt-3 text-sm leading-7 text-stone-100">Chimenea, balcón y calma.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">Casa Julio</p>
                    <p className="mt-3 text-sm leading-7 text-stone-100">Terraza, jardín y reunión.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">Entorno</p>
                    <p className="mt-3 text-sm leading-7 text-stone-100">Ribera, senderos y aire libre.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </HoverLift>
        </FadeIn>
      </section>

      <section id="entorno" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Entorno"
          title="El plan está fuera de la casa."
          description="Río, pesca, senderos y visitas cercanas."
        />

        <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ENVIRONMENT_HIGHLIGHTS.map((highlight) => {
            return (
              <StaggerItem key={highlight.title}>
                <HoverLift>
                  <Card className="rounded-[1.75rem] border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-5">
                      <p className="text-sm leading-7 text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <Link href="/entorno">
          <Button variant="outline" className="rounded-full">
            Ver entorno
          </Button>
        </Link>
      </section>

      <section id="confianza" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Confianza"
          title="Claro, directo y fácil de recordar."
          description="Lo esencial queda visible sin saturar la pantalla."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <HoverLift>
              <Card className="overflow-hidden rounded-[2rem] border-0 bg-emerald-950 py-0 text-emerald-50 ring-emerald-950/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-balance">
                    Una primera impresión mucho más limpia.
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pb-6">
                  {TRUST_POINTS.map((point) => {
                    return (
                      <div key={point} className="flex gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                        <ArrowRight className="mt-1 size-4 shrink-0 text-emerald-300" />
                        <p className="text-sm leading-7 text-emerald-50">{point}</p>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </HoverLift>
          </FadeIn>

          <StaggerGroup className="grid gap-4">
            {REVIEW_SNIPPETS.map((review) => {
              return (
                <StaggerItem key={review.quote}>
                  <HoverLift>
                    <Card className="rounded-[1.75rem] border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                      <CardContent className="space-y-4 px-4 py-5">
                        <p className="text-lg leading-8 text-foreground">“{review.quote}”</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                          {review.author}
                        </p>
                      </CardContent>
                    </Card>
                  </HoverLift>
                </StaggerItem>
              )
            })}
          </StaggerGroup>
        </div>

        <Link href="/confianza">
          <Button variant="outline" className="rounded-full">
            Ver confianza
          </Button>
        </Link>
      </section>

      <section
        id="contacto"
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:pb-20"
      >
        <FadeIn>
          <HoverLift>
            <Card className="overflow-hidden rounded-[2rem] border-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_34%),linear-gradient(135deg,rgba(120,53,15,0.12),rgba(5,150,105,0.12))] py-0 ring-1 ring-black/8 dark:ring-white/10">
              <CardContent className="grid gap-8 px-5 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
                <div className="space-y-4">
                  <p className="inline-flex w-fit rounded-full border border-emerald-800/12 bg-white/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-800 dark:border-emerald-300/15 dark:bg-white/8 dark:text-emerald-300">
                    Contacto
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Reserva el silencio. El resto ya lo pone el lugar.
                  </h2>
                  <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                    Contacto simple y visible, sin bloques pesados.
                  </p>
                </div>

                <div className="grid gap-4 self-start">
                  <div className="rounded-3xl border border-black/8 bg-background/80 p-4 dark:border-white/10 dark:bg-background/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="mt-2 block text-lg font-medium hover:underline"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                  <div className="rounded-3xl border border-black/8 bg-background/80 p-4 dark:border-white/10 dark:bg-background/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Ubicación</p>
                    <p className="mt-2 text-lg font-medium">{CONTACT_DETAILS.location}</p>
                  </div>

                  <Link href="/contacto">
                    <Button variant="outline" className="rounded-full">
                      Ver contacto
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </HoverLift>
        </FadeIn>
      </section>

      <footer className="border-t border-black/8 bg-white/70 px-4 py-6 text-sm text-muted-foreground dark:border-white/10 dark:bg-black/20 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Casa Rural Fontecha | Pino del Río</p>
          <p>{CONTACT_DETAILS.email}</p>
        </div>
      </footer>
    </main>
  )
}
