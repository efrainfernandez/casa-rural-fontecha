import type { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import PageHero from '@/components/public/page-hero'
import SectionTitle from '@/components/public/section-title'
import { CONTACT_DETAILS, ENVIRONMENT_DETAILS, ENVIRONMENT_HIGHLIGHTS } from '@/content/public-content'

export const metadata: Metadata = {
  title: 'Entorno | Casa Rural Fontecha',
  description: 'Información ampliada de Pino del Río, el río Carrión y los puntos de interés del entorno.',
}

export default function EnvironmentPage() {
  return (
    <main>
      <PageHero
        eyebrow="Entorno"
        title="Pino del Río como parte esencial de la experiencia de Casa Rural Fontecha."
        description={ENVIRONMENT_DETAILS.intro}
        actions={[
          { href: '/#entorno', label: 'Ver resumen en portada', variant: 'outline' },
          { href: '/contacto', label: 'Ir al contacto' },
        ]}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Pino del Río"
          title="Información general del municipio."
          description="La página de entorno amplía el contexto de destino con datos útiles para explicar por qué alojarse aquí tiene sentido más allá de la propia casa."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {ENVIRONMENT_DETAILS.facts.map((fact) => {
            return (
              <Card key={fact} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardContent className="px-4 py-5">
                  <p className="text-sm leading-7 text-muted-foreground">{fact}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Planes"
          title="Qué puede hacer el visitante alrededor del alojamiento."
          description="La idea es vender estancia y destino a la vez: naturaleza, descanso, rutas suaves, pesca y pequeñas visitas culturales."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ENVIRONMENT_DETAILS.places.map((place) => {
            return (
              <Card key={place.title} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{place.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-5">
                  <p className="text-sm leading-7 text-muted-foreground">{place.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Experiencias"
          title="Líneas de contenido para reforzar la página de entorno."
          description="Estas piezas ayudan tanto a la conversión como al SEO local, porque conectan la estancia con búsquedas reales del usuario."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ENVIRONMENT_DETAILS.plans.map((plan) => {
            return (
              <Card key={plan} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardContent className="px-4 py-5">
                  <p className="text-sm leading-7 text-muted-foreground">{plan}</p>
                </CardContent>
              </Card>
            )
          })}
          {ENVIRONMENT_HIGHLIGHTS.map((highlight) => {
            return (
              <Card key={highlight.title} className="border-0 bg-emerald-950 py-0 text-emerald-50 ring-emerald-950/30">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-emerald-50">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-5">
                  <p className="text-sm leading-7 text-emerald-100">{highlight.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionTitle
          eyebrow="Fuentes"
          title="Origen de la información de entorno usada en esta fase."
          description={`He tomado como base información pública de Pino del Río para reforzar esta página mientras la marca todavía no tiene contenido propio más desarrollado. Contacto municipal visible: ${CONTACT_DETAILS.townHallPhone} y ${CONTACT_DETAILS.townHallEmail}.`}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {ENVIRONMENT_DETAILS.sources.map((source) => {
            return (
              <Card key={source.href} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardContent className="px-4 py-5">
                  <a href={source.href} target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">
                    {source.label}
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
