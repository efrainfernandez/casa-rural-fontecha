import type { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import PageHero from '@/components/public/page-hero'
import PhotoGrid from '@/components/public/photo-grid'
import { HoverLift, StaggerGroup, StaggerItem } from '@/components/public/reveal'
import SectionTitle from '@/components/public/section-title'
import { ACCOMMODATIONS } from '@/content/public-content'

const house = ACCOMMODATIONS[1]

export const metadata: Metadata = {
  title: 'Casa Julio | Casa Rural Fontecha',
  description: 'Casa rural para 8 personas con terraza, jardín y barbacoa en Pino del Río.',
}

export default function CasaJulioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Casa Julio"
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
          title="Estructura visual preparada para las fotos reales de Casa Julio."
          description="La ficha ya reserva una galería clara para exterior, espacios comunes, dormitorios y jardín, aunque el repositorio todavía no contiene imágenes finales."
        />
        <PhotoGrid items={house.gallery} accent="amber" />
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <HoverLift>
          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Información básica</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 pb-6">
              <div className="border border-black/6 p-4 dark:border-white/10">8 plazas</div>
              <div className="border border-black/6 p-4 dark:border-white/10">4 dormitorios</div>
              {house.features.map((feature) => {
                return (
                  <div key={feature} className="border border-black/6 p-4 dark:border-white/10">
                    {feature}
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </HoverLift>

        <HoverLift>
          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Qué aporta esta casa</CardTitle>
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
        </HoverLift>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionTitle
          eyebrow="Espacios"
          title="Una ficha pensada para explicar mejor la estancia en grupo."
          description="Casa Julio se cuenta mejor cuando se enseña su exterior, la amplitud y el perfil de uso para familias o grupos con más necesidad de convivencia."
        />
        <StaggerGroup className="grid gap-4 md:grid-cols-2">
          {house.spaces.map((space) => {
            return (
              <StaggerItem key={space}>
                <HoverLift>
                  <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
                    <CardContent className="px-4 py-5">
                      <p className="text-sm leading-7 text-muted-foreground">{space}</p>
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
