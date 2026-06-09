import Link from 'next/link'
import { ArrowRight, BedDouble, Camera, Flame, MapPin, Trees, Users } from 'lucide-react'

import { Button } from '@casa-rural-fontecha/ui/components/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import { FadeIn, HoverLift, StaggerGroup, StaggerItem } from '@/components/public/reveal'
import SectionTitle from '@/components/public/section-title'
import { ACCOMMODATIONS, CONTACT_DETAILS, ENVIRONMENT_HIGHLIGHTS, REVIEW_SNIPPETS, TRUST_POINTS } from '@/content/public-content'

export default function Home() {
  const totalCapacity = ACCOMMODATIONS.reduce((sum, accommodation) => {
    return sum + accommodation.capacity
  }, 0)

  const totalBedrooms = ACCOMMODATIONS.reduce((sum, accommodation) => {
    return sum + accommodation.bedrooms
  }, 0)

  return (
    <main className="bg-[linear-gradient(180deg,rgba(247,244,236,0.95)_0%,rgba(255,255,255,1)_38%,rgba(242,247,243,0.9)_100%)] dark:bg-[linear-gradient(180deg,rgba(21,24,22,1)_0%,rgba(17,17,17,1)_100%)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
          <StaggerGroup className="space-y-8">
            <StaggerItem>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-emerald-800 dark:text-emerald-200">
                <span className="border border-emerald-800/20 bg-white/80 px-3 py-1 dark:border-emerald-200/20 dark:bg-white/5">
                  Pino del Río
                </span>
                <span className="border border-emerald-800/20 bg-white/80 px-3 py-1 dark:border-emerald-200/20 dark:bg-white/5">
                  Ribera del Carrión
                </span>
                <span className="border border-emerald-800/20 bg-white/80 px-3 py-1 dark:border-emerald-200/20 dark:bg-white/5">
                  Turismo rural en Palencia
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Casa Rural Fontecha, junto al río Carrión.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Descubre Casa Lía y Casa Julio en Pino del Río, dos alojamientos pensados para descansar,
                  disfrutar del entorno y vivir una escapada rural con identidad propia.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/casas">
                  <Button size="lg" className="w-full bg-emerald-800 text-white hover:bg-emerald-700 sm:w-auto">
                    Ver las casas
                  </Button>
                </Link>
                <Link href="/entorno">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Descubrir el entorno
                  </Button>
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <FadeIn>
            <HoverLift>
              <Card className="border-0 bg-stone-950 text-stone-50 ring-stone-900/30">
                <CardHeader className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">Resumen</p>
                  <CardTitle className="text-2xl font-semibold text-balance text-stone-50">
                    Dos casas rurales, dos formas de vivir el mismo entorno.
                  </CardTitle>
                  <CardDescription className="text-sm leading-7 text-stone-300">
                    La propuesta inicial se centra en enseñar bien el producto: las casas, su capacidad, su estilo y
                    los planes alrededor de Pino del Río.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2 border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold">2</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Alojamientos</p>
                  </div>
                  <div className="space-y-2 border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold">{totalCapacity}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Plazas totales</p>
                  </div>
                  <div className="space-y-2 border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold">{totalBedrooms}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Dormitorios</p>
                  </div>
                </CardContent>
              </Card>
            </HoverLift>
          </FadeIn>
        </div>
      </section>

      <section id="casas" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Las casas"
          title="Casa Lía y Casa Julio, presentadas con claridad desde la primera visita."
          description="Cada alojamiento tiene un perfil propio. La home los compara de forma directa para que el usuario entienda rápido cuál encaja mejor con su estancia."
        />

        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          {ACCOMMODATIONS.map((accommodation) => {
            const hasFireplace = accommodation.slug === 'casa-lia'

            return (
              <StaggerItem key={accommodation.slug}>
                <HoverLift>
                  <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                    <div className="border-b border-black/6 bg-[linear-gradient(135deg,rgba(14,116,89,0.12),rgba(120,53,15,0.12))] px-4 py-5 dark:border-white/10 dark:bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(180,83,9,0.12))]">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-800 dark:text-emerald-300">
                        {accommodation.slug}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold">{accommodation.name}</h3>
                    </div>

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
                        <div className="flex items-center gap-3 border border-black/6 p-3 dark:border-white/10">
                          {hasFireplace ? (
                            <Flame className="size-4 text-emerald-700 dark:text-emerald-300" />
                          ) : (
                            <Trees className="size-4 text-emerald-700 dark:text-emerald-300" />
                          )}
                          <span>{accommodation.features[0]}</span>
                        </div>
                        <div className="flex items-center gap-3 border border-black/6 p-3 dark:border-white/10">
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

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experiencia visual"
          title="Un bloque destacado para enseñar las casas de forma inmersiva."
          description="Todavía no desarrollo reservas, pero sí dejo preparada una sección visible para reforzar el valor de los recorridos visuales y la presentación del alojamiento. Las páginas individuales de cada casa amplían este punto con una galería preparada para fotos reales."
        />

        <FadeIn>
          <HoverLift>
            <Card className="border-0 bg-stone-900 py-0 text-stone-50 ring-stone-900/30">
              <CardContent className="grid gap-8 px-4 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-6 lg:py-8">
                <div className="space-y-4">
                  <div className="flex size-12 items-center justify-center border border-white/15 bg-white/5">
                    <Camera className="size-5 text-emerald-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-balance">Explora espacios, luz natural y entorno antes de decidir.</h3>
                  <p className="leading-7 text-stone-300">
                    Esta primera versión destaca el recorrido visual como pieza comercial clave: salón, zonas comunes,
                    exteriores y relación directa con el paisaje de Pino del Río.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">Casa Lía</p>
                    <p className="mt-3 text-sm leading-7 text-stone-100">Chimenea, zona de estar y balcón con vistas al río.</p>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">Casa Julio</p>
                    <p className="mt-3 text-sm leading-7 text-stone-100">Terraza, jardín y espacios preparados para grupos.</p>
                  </div>
                  <div className="border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">Entorno</p>
                    <p className="mt-3 text-sm leading-7 text-stone-100">Ribera del Carrión y planes rurales alrededor del alojamiento.</p>
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
          title="Todo lo relacionado con Pino del Río y la experiencia alrededor de la estancia."
          description="La landing no se limita a mostrar interiores. También posiciona el alojamiento dentro de un contexto turístico claro, útil para SEO local y para ayudar a elegir destino."
        />

        <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ENVIRONMENT_HIGHLIGHTS.map((highlight) => {
            return (
              <StaggerItem key={highlight.title}>
                <HoverLift>
                  <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
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
          <Button variant="outline">Ver página completa del entorno</Button>
        </Link>
      </section>

      <section id="confianza" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Confianza"
          title="Mensajes que ayudan a convertir una visita en una consulta real."
          description="Incluyo prueba social y argumentos de confianza para que la home no sea solo informativa, sino también una base comercial sólida para la siguiente fase del proyecto."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn>
            <HoverLift>
              <Card className="border-0 bg-emerald-950 py-0 text-emerald-50 ring-emerald-950/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-balance">Por qué esta home ya sirve como punto de entrada comercial.</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pb-6">
                  {TRUST_POINTS.map((point) => {
                    return (
                      <div key={point} className="flex gap-3 border border-white/10 bg-white/5 p-4">
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
                    <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
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
          <Button variant="outline">Ver página completa de confianza</Button>
        </Link>
      </section>

      <section id="contacto" className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:pb-20">
        <FadeIn>
          <HoverLift>
            <Card className="border-0 bg-[linear-gradient(135deg,rgba(120,53,15,0.12),rgba(5,150,105,0.12))] py-0 ring-1 ring-black/8 dark:ring-white/10">
              <CardContent className="grid gap-8 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 dark:text-emerald-300">
                    Contacto
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    La base pública ya está lista para presentar la marca y captar interés.
                  </h2>
                  <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                    En esta fase priorizo enseñar bien Casa Rural Fontecha, Casa Lía, Casa Julio y el entorno. La
                    parte de reservas queda fuera, tal y como pediste.
                  </p>
                </div>

                <div className="grid gap-4 self-start">
                  <div className="border border-black/8 bg-background/80 p-4 dark:border-white/10 dark:bg-background/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Email</p>
                    <a href={`mailto:${CONTACT_DETAILS.email}`} className="mt-2 block text-lg font-medium hover:underline">
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                  <div className="border border-black/8 bg-background/80 p-4 dark:border-white/10 dark:bg-background/40">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Ubicación</p>
                    <p className="mt-2 text-lg font-medium">{CONTACT_DETAILS.location}</p>
                  </div>

                  <Link href="/contacto">
                    <Button variant="outline">Ver página completa de contacto</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </HoverLift>
        </FadeIn>
      </section>

      <footer className="border-t border-black/8 bg-white/70 px-4 py-6 text-sm text-muted-foreground dark:border-white/10 dark:bg-black/20 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Casa Rural Fontecha | Alojamientos en Pino del Río, Palencia</p>
          <p>Contacto: {CONTACT_DETAILS.email} | Información legal pública en preparación</p>
        </div>
      </footer>
    </main>
  )
}
