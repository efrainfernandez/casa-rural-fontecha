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
    <main className="bg-[linear-gradient(180deg,rgba(7,11,10,0.03)_0%,rgba(7,11,10,0.1)_38%,rgba(7,11,10,0.16)_100%)] text-white">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-center">
          <StaggerGroup className="space-y-7">
            <StaggerItem>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-white/82">
                <span className="rounded-full border border-white/12 bg-black/10 px-3 py-1.5 backdrop-blur-sm">
                  Pino del Río
                </span>
                <span className="rounded-full border border-white/12 bg-black/10 px-3 py-1.5 backdrop-blur-sm">
                  Río Carrión
                </span>
                <span className="rounded-full border border-white/12 bg-black/10 px-3 py-1.5 backdrop-blur-sm">
                  Escapada rural
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.42)] sm:text-5xl lg:text-7xl">
                  Menos ruido. Más calma.
                </h1>
                <p className="max-w-xl text-base leading-7 text-white/76 sm:text-lg">
                  Dos casas rurales con mucho aire, luz y río cerca.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/12 bg-black/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                  <p className="text-2xl font-semibold">2</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Casas</p>
                </div>
                <div className="rounded-3xl border border-white/12 bg-black/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                  <p className="text-2xl font-semibold">{totalCapacity}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Plazas</p>
                </div>
                <div className="rounded-3xl border border-white/12 bg-black/10 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                  <p className="text-2xl font-semibold">{totalBedrooms}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Dormitorios</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/casas">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-white px-6 text-black hover:bg-white/90 sm:w-auto"
                  >
                    Ver las casas
                  </Button>
                </Link>
                <Link href="/entorno">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-white/16 bg-black/10 text-white hover:bg-white/10 sm:w-auto"
                  >
                    Ver entorno
                  </Button>
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <FadeIn>
            <HoverLift>
              <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/16 text-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-lg">
                <CardHeader className="space-y-5 border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">Vista rápida</p>
                  <CardTitle className="max-w-sm text-3xl font-semibold text-balance text-white">
                    Campo, agua y casas con personalidad.
                  </CardTitle>
                  <CardDescription className="max-w-sm text-sm leading-7 text-white/68">
                    Una home más limpia, visual y directa.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
                    <Waves className="mb-4 size-5 text-emerald-300" />
                    <p className="text-lg font-medium">Río y paseos</p>
                    <p className="mt-2 text-sm text-white/68">Entorno sereno a pocos minutos.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
                    <Sparkles className="mb-4 size-5 text-amber-300" />
                    <p className="text-lg font-medium">Interiores cálidos</p>
                    <p className="mt-2 text-sm text-white/68">Espacios pensados para descansar.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm sm:col-span-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold">{totalCapacity} plazas</p>
                        <p className="mt-1 text-sm text-white/68">Repartidas entre Casa Lía y Casa Julio.</p>
                      </div>
                      <ArrowRight className="size-5 shrink-0 text-white/48" />
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
                  <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/14 py-0 text-white shadow-[0_24px_60px_rgba(15,23,42,0.1)] backdrop-blur-lg">
                    <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-5 py-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/62">
                        {accommodation.slug}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold">{accommodation.name}</h3>
                    </div>

                    <CardContent className="grid gap-6 px-5 py-6">
                      <p className="max-w-md text-base leading-7 text-white/74">{accommodation.summary}</p>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-3.5">
                          <Users className="size-4 text-emerald-300" />
                          <span>{accommodation.capacity} plazas</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-3.5">
                          <BedDouble className="size-4 text-emerald-300" />
                          <span>{accommodation.bedrooms} dormitorios</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-3.5">
                          {hasFireplace ? (
                            <Flame className="size-4 text-emerald-300" />
                          ) : (
                            <Trees className="size-4 text-emerald-300" />
                          )}
                          <span>{accommodation.features[0]}</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-3.5">
                          <MapPin className="size-4 text-emerald-300" />
                          <span>{CONTACT_DETAILS.location}</span>
                        </div>
                      </div>

                      <p className="text-sm leading-7 text-white/68">{accommodation.audience}</p>

                      <div className="flex flex-wrap gap-2">
                        {accommodation.features.map((feature) => {
                          return (
                            <span
                              key={feature}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/84"
                            >
                              {feature}
                            </span>
                          )
                        })}
                      </div>

                      <Link href={`/casas/${accommodation.slug}`}>
                        <Button
                          variant="outline"
                          className="rounded-full border-white/16 bg-black/10 text-white hover:bg-white/10"
                        >
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
            <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/14 py-0 text-white backdrop-blur-lg">
              <CardContent className="grid gap-8 px-5 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-6 lg:py-8">
                <div className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/6">
                    <Camera className="size-5 text-emerald-300" />
                  </div>
                  <h3 className="text-3xl font-semibold text-balance">Recorridos más fluidos.</h3>
                  <p className="max-w-sm text-sm leading-7 text-white/68">
                    Tarjetas grandes, aire visual y animaciones más suaves.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Casa Lía</p>
                    <p className="mt-3 text-sm leading-7 text-white">Chimenea, balcón y calma.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Casa Julio</p>
                    <p className="mt-3 text-sm leading-7 text-white">Terraza, jardín y reunión.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Entorno</p>
                    <p className="mt-3 text-sm leading-7 text-white">Ribera, senderos y aire libre.</p>
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
                  <Card className="rounded-[1.75rem] border border-white/12 bg-black/20 py-0 text-white backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-5">
                      <p className="text-sm leading-7 text-white/68">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <Link href="/entorno">
          <Button variant="outline" className="rounded-full border-white/18 bg-black/14 text-white hover:bg-white/10">
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
              <Card className="overflow-hidden rounded-[2rem] border border-white/12 bg-black/24 py-0 text-emerald-50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-balance">
                    Una primera impresión mucho más limpia.
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pb-6">
                  {TRUST_POINTS.map((point) => {
                    return (
                      <div key={point} className="flex gap-3 rounded-3xl border border-white/10 bg-white/6 p-4">
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
                    <Card className="rounded-[1.75rem] border border-white/12 bg-black/20 py-0 text-white backdrop-blur-xl">
                      <CardContent className="space-y-4 px-4 py-5">
                        <p className="text-lg leading-8 text-white">“{review.quote}”</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/52">
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
          <Button variant="outline" className="rounded-full border-white/18 bg-black/14 text-white hover:bg-white/10">
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
            <Card className="overflow-hidden rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,rgba(0,0,0,0.2),rgba(255,255,255,0.04))] py-0 text-white backdrop-blur-xl">
              <CardContent className="grid gap-8 px-5 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
                <div className="space-y-4">
                  <p className="inline-flex w-fit rounded-full border border-white/14 bg-black/16 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/88 backdrop-blur-md">
                    Contacto
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Reserva el silencio. El resto ya lo pone el lugar.
                  </h2>
                  <p className="max-w-md text-sm leading-7 text-white/72 sm:text-base">
                    Contacto simple y visible, sin bloques pesados.
                  </p>
                </div>

                <div className="grid gap-4 self-start">
                  <div className="rounded-3xl border border-white/12 bg-white/6 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Email</p>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="mt-2 block text-lg font-medium hover:underline"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                  <div className="rounded-3xl border border-white/12 bg-white/6 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Ubicación</p>
                    <p className="mt-2 text-lg font-medium">{CONTACT_DETAILS.location}</p>
                  </div>

                  <Link href="/contacto">
                    <Button
                      variant="outline"
                      className="rounded-full border-white/18 bg-black/14 text-white hover:bg-white/10"
                    >
                      Ver contacto
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </HoverLift>
        </FadeIn>
      </section>

      <footer className="border-t border-white/10 bg-black/18 px-4 py-6 text-sm text-white/62 backdrop-blur-md sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Casa Rural Fontecha | Pino del Río</p>
          <p>{CONTACT_DETAILS.email}</p>
        </div>
      </footer>
    </main>
  )
}
