import type { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import PageHero from '@/components/public/page-hero'
import PhotoGrid from '@/components/public/photo-grid'
import SectionTitle from '@/components/public/section-title'
import { ACCOMMODATIONS } from '@/content/public-content'

const house = ACCOMMODATIONS[0]

export const metadata: Metadata = {
  title: 'Casa Lía | Casa Rural Fontecha',
  description: 'Casa rural para 6 personas con chimenea, balcón y vistas al río Carrión en Pino del Río.',
}

export default function CasaLiaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casa Lía"
        title={house.shortTitle}
        description={`${house.summary} ${house.audience}`}
        actions={[
          { href: '/casas', label: 'Volver a las casas', variant: 'outline' },
          { href: '/contacto', label: 'Ir al contacto' },
        ]}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Galería"
          title="Bloques visuales preparados para las fotos reales de Casa Lía."
          description="No hay imágenes cargadas todavía en el repositorio, así que dejo una galería estructurada para incorporar la sesión fotográfica en cuanto esté disponible."
        />
        <PhotoGrid items={house.gallery} accent="emerald" />
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Información básica</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 pb-6">
            <div className="border border-black/6 p-4 dark:border-white/10">6 plazas</div>
            <div className="border border-black/6 p-4 dark:border-white/10">3 dormitorios</div>
            {house.features.map((feature) => {
              return (
                <div key={feature} className="border border-black/6 p-4 dark:border-white/10">
                  {feature}
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Qué transmite esta casa</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 pb-6">
            {house.quickFacts.map((fact) => {
              return (
                <p key={fact} className="border border-black/6 p-4 leading-7 text-muted-foreground dark:border-white/10">
                  {fact}
                </p>
              )
            })}
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionTitle
          eyebrow="Espacios"
          title="Cómo se cuenta Casa Lía en una ficha más completa."
          description="La página individual amplía la información para que el visitante entienda mejor el ambiente, el uso previsto y el tipo de estancia que favorece la vivienda."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {house.spaces.map((space) => {
            return (
              <Card key={space} className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                <CardContent className="px-4 py-5">
                  <p className="text-sm leading-7 text-muted-foreground">{space}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}
