import type { Metadata } from 'next'

import ContactMap from '@/components/public/contact-map'
import { CONTACT_DETAILS } from '@/content/public-content'
import { getDictionary, getLocale } from '@/i18n/get-locale'

export const metadata: Metadata = {
  title: 'Contacto | Casa Rural Fontecha',
  description: 'Contacta con Casa Rural Fontecha y consulta cómo llegar a Pino del Río, Palencia.',
}

const DESTINATION = `${CONTACT_DETAILS.coordinates.latitude},${CONTACT_DETAILS.coordinates.longitude}`
const GOOGLE_MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${DESTINATION}`
const APPLE_MAPS_URL = `https://maps.apple.com/?daddr=${DESTINATION}&dirflg=d`

export default async function ContactPage() {
  const locale = await getLocale()
  const contact = getDictionary(locale).contact

  const contactItems = [
    {
      icon: 'call',
      label: contact.phone,
      value: CONTACT_DETAILS.phone,
      href: `tel:${CONTACT_DETAILS.phoneHref}`,
    },
    {
      icon: 'mail',
      label: contact.email,
      value: CONTACT_DETAILS.email,
      href: `mailto:${CONTACT_DETAILS.email}`,
    },
  ] as const

  return (
    <main className="overflow-hidden bg-background pt-32 pb-section-gap text-on-background">
      <section className="mx-auto max-w-7xl px-gutter">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-label-md mb-4 block text-label-md tracking-widest text-secondary uppercase">
            {contact.eyebrow}
          </span>
          <h1 className="font-display mb-5 text-display text-primary">{contact.title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{contact.intro}</p>
        </div>

        <div className="mb-24 grid gap-6 md:grid-cols-2">
          {contactItems.map((item) => {
            return (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-5 rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-md"
              >
                <span className="material-symbols-outlined flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container text-primary">
                  {item.icon}
                </span>
                <span>
                  <span className="font-label-md mb-1 block text-label-md tracking-wider text-on-surface-variant uppercase">
                    {item.label}
                  </span>
                  <span className="font-headline-md text-headline-md text-primary transition-colors group-hover:text-secondary">
                    {item.value}
                  </span>
                </span>
              </a>
            )
          })}
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-sm lg:grid-cols-[minmax(18rem,0.7fr)_1.3fr]">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="material-symbols-outlined mb-6 text-5xl text-secondary">location_on</span>
            <h2 className="font-headline-lg mb-4 text-headline-lg text-primary">{contact.mapTitle}</h2>
            <p className="font-body-lg mb-6 text-body-lg text-on-surface-variant">{contact.mapIntro}</p>

            <div className="mb-8">
              <span className="font-label-md mb-2 block text-label-md tracking-wider text-on-surface-variant uppercase">
                {contact.address}
              </span>
              <address className="font-body-lg text-body-lg text-on-background not-italic">
                {CONTACT_DETAILS.address}
              </address>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-label-md text-on-primary transition-transform hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">map</span>
                {contact.googleMaps}
              </a>
              <a
                href={APPLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 font-label-md text-primary transition-all hover:scale-105 hover:bg-primary-container active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">directions</span>
                {contact.appleMaps}
              </a>
            </div>
          </div>

          <ContactMap ariaLabel={contact.mapTitle} popupLabel={contact.mapPopup} />
        </div>
      </section>
    </main>
  )
}
