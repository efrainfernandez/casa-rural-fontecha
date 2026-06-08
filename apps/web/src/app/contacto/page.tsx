import type { Metadata } from 'next'

import { Card, CardContent, CardHeader, CardTitle } from '@casa-rural-fontecha/ui/components/card'

import PageHero from '@/components/public/page-hero'
import SectionTitle from '@/components/public/section-title'
import { CONTACT_DETAILS } from '@/content/public-content'

export const metadata: Metadata = {
  title: 'Contacto | Casa Rural Fontecha',
  description: 'Página pública de contacto de Casa Rural Fontecha con email, ubicación y contexto de atención.',
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Una página propia para centralizar el contacto de Casa Rural Fontecha."
        description="El contacto ya no queda solo como bloque dentro de la landing. Esta ruta independiente reúne la información esencial para consultas sobre las casas y sobre la estancia en Pino del Río."
        actions={[
          { href: '/', label: 'Volver al inicio', variant: 'outline' },
          { href: '/casas', label: 'Ver las casas' },
        ]}
      />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Datos"
          title="Información de contacto principal."
          description="Dejo la estructura preparada para crecer más adelante con formulario, WhatsApp o canales adicionales, pero sin desarrollar todavía la parte de reservas."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Email</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-base font-medium hover:underline">
                {CONTACT_DETAILS.email}
              </a>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Ubicación</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-base font-medium">{CONTACT_DETAILS.location}</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Entorno municipal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pb-6 text-sm leading-7 text-muted-foreground">
              <p>Teléfono visible del ayuntamiento: {CONTACT_DETAILS.townHallPhone}</p>
              <p>Email visible del ayuntamiento: {CONTACT_DETAILS.townHallEmail}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <SectionTitle
          eyebrow="Contexto"
          title="Qué resuelve esta página en la fase actual del proyecto."
          description="Mientras no desarrollamos reservas, esta página actúa como cierre natural de la navegación pública y punto de entrada para consultas directas."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardContent className="px-4 py-5">
              <p className="text-sm leading-7 text-muted-foreground">
                Permite separar el contenido de contacto de la landing y tratarlo como una página más del sitio.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 bg-white/90 py-0 shadow-sm ring-1 ring-black/6 dark:bg-card">
            <CardContent className="px-4 py-5">
              <p className="text-sm leading-7 text-muted-foreground">
                Deja una base clara para añadir después formulario, teléfono directo, WhatsApp y políticas de respuesta.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
