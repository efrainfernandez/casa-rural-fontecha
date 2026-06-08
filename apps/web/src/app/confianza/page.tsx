import type { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import PageHero from '@/components/public/page-hero'
import SectionTitle from '@/components/public/section-title'
import { REVIEW_SNIPPETS, REVIEW_SOURCE_NOTE, TRUST_POINTS, TRUST_SECTIONS } from '@/content/public-content'

export const metadata: Metadata = {
  title: 'Confianza | Casa Rural Fontecha',
  description: 'Página pública de confianza con más contexto de marca, argumentos de decisión y reseñas editoriales preparadas para sustitución por reseñas verificadas.',
}

export default function TrustPage() {
  return (
    <main>
      <PageHero
        eyebrow="Confianza"
        title="Argumentos de confianza y reseñas preparadas para una fase pública más sólida."
        description="Esta página amplía la parte de prueba social, estructura de mensaje y percepción de marca, incluso antes de desplegar reservas o disponibilidad."
        actions={[
          { href: '/#confianza', label: 'Ver resumen en portada', variant: 'outline' },
          { href: '/contacto', label: 'Ir al contacto' },
        ]}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Motivos"
          title="Qué aporta confianza en esta primera versión."
          description="La confianza no depende solo de reseñas. También la generan la claridad del producto, la coherencia del contenido y la sensación de destino bien explicado."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {TRUST_POINTS.map((point) => {
            return (
              <Card key={point} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardContent className="px-4 py-5">
                  <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Reseñas"
          title="Más reseñas para enriquecer la percepción de estancia."
          description="He ampliado la sección para que tenga más peso en la web pública, aunque por ahora los textos son editoriales y no reviews verificadas automatizadas."
        />
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {REVIEW_SNIPPETS.map((review) => {
            return (
              <Card key={review.quote} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardContent className="space-y-4 px-4 py-5">
                  <p className="text-lg leading-8 text-foreground">“{review.quote}”</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                    {review.author}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:pb-20">
        <Card className="border-0 bg-emerald-950 py-0 text-emerald-50 ring-emerald-950/30">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-emerald-50">Estado de las reseñas</CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            <p className="text-sm leading-7 text-emerald-100">{REVIEW_SOURCE_NOTE}</p>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {TRUST_SECTIONS.map((section) => {
            return (
              <Card key={section.title} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-5">
                  <p className="text-sm leading-7 text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
