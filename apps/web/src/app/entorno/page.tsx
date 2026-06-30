import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import RevealOnScroll from '@/components/public/reveal-on-scroll'
import { SITE_IMAGES } from '@/content/public-content'
import { getDictionary, getLocale } from '@/i18n/get-locale'

export const metadata: Metadata = {
  title: 'Entorno | Casa Rural Fontecha',
  description: 'Descubre Pino del Río, el río Carrión y los puntos de interés de la Montaña Palentina.',
}

const SPOT_IMAGES = [SITE_IMAGES.rioCarrion, SITE_IMAGES.villaRomana, SITE_IMAGES.romanico] as const

export default async function EnvironmentPage() {
  const locale = await getLocale()
  const t = getDictionary(locale)
  const env = t.environment

  return (
    <main className="overflow-x-hidden bg-background pt-32 pb-section-gap text-on-background">
      <section className="mx-auto mb-section-gap max-w-7xl px-gutter">
        <div className="mb-16 text-center">
          <h1 className="font-display mb-4 text-display text-primary">{env.title}</h1>
          <p className="font-body-lg mx-auto max-w-2xl text-body-lg text-on-surface-variant italic">{env.intro}</p>
        </div>

        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-3">
          {env.pillars.map((pillar) => {
            return (
              <RevealOnScroll
                key={pillar.title}
                className="group flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center is-visible"
              >
                <span className="material-symbols-outlined mb-4 text-4xl text-primary opacity-60 transition-opacity group-hover:opacity-100">
                  {pillar.icon}
                </span>
                <h3 className="font-headline-md mb-2 text-headline-md">{pillar.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{pillar.description}</p>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      <section className="space-y-32">
        {env.spots.map((spot, index) => {
          const reverse = index === 1
          const image = SPOT_IMAGES[index]

          return (
            <div key={spot.title}>
              <RevealOnScroll className="mx-auto grid max-w-7xl items-center gap-16 px-gutter md:grid-cols-2 is-visible">
                <div className={reverse ? 'relative md:order-2' : 'relative'}>
                  <div className="sketch-border overflow-hidden bg-surface-container shadow-sm">
                    <Image
                      src={image}
                      alt={spot.title}
                      width={800}
                      height={500}
                      className="h-[500px] w-full object-cover opacity-90 mix-blend-multiply transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {'icon' in spot && spot.icon != null ? (
                    <div className="absolute -right-6 -bottom-6 h-32 w-32 opacity-10">
                      <span className="material-symbols-outlined text-[120px]">{spot.icon}</span>
                    </div>
                  ) : null}
                </div>

                <div className={reverse ? 'md:order-1' : ''}>
                  <span className="font-label-md mb-4 block text-label-md tracking-widest text-secondary uppercase">
                    {spot.eyebrow}
                  </span>
                  <h2 className="font-headline-lg mb-6 text-headline-lg text-primary">{spot.title}</h2>
                  <p className="font-body-lg mb-8 text-body-lg leading-relaxed text-on-surface-variant">{spot.description}</p>

                  {'note' in spot && spot.note != null ? (
                    <>
                      <div className="mb-8 h-px w-16 bg-outline-variant" />
                      <p className="font-body-md text-body-md text-on-tertiary-fixed-variant italic">{spot.note}</p>
                    </>
                  ) : null}

                  {'items' in spot && spot.items != null ? (
                    <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                      {spot.items.map((item) => {
                        return (
                          <li key={item} className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            {item}
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}

                  {'cta' in spot && spot.cta != null ? (
                    <div className="mt-8 flex gap-4">
                      <button
                        type="button"
                        className="rounded-full border border-outline px-6 py-2 font-label-md transition-all hover:bg-primary-container hover:text-on-primary-container"
                      >
                        {spot.cta}
                      </button>
                    </div>
                  ) : null}
                </div>
              </RevealOnScroll>

              <div className="wavy-divider mx-auto mt-32 max-w-4xl opacity-40" />
            </div>
          )
        })}
      </section>

      <section className="mx-auto mt-section-gap max-w-5xl px-gutter text-center">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-12 text-on-primary">
          <div className="relative z-10">
            <h2 className="font-headline-lg mb-6 text-headline-lg">{env.ctaTitle}</h2>
            <p className="font-body-lg mb-8 text-body-lg opacity-90">{env.ctaBody}</p>
            <Link
              href="/"
              className="inline-block rounded-full bg-secondary-fixed px-10 py-4 font-label-md text-on-secondary-fixed transition-transform hover:scale-105 active:scale-95"
            >
              {env.ctaButton}
            </Link>
          </div>
          <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary opacity-10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-container opacity-20 blur-2xl" />
        </div>
      </section>
    </main>
  )
}
