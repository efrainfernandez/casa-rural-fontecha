import Image from 'next/image'
import Link from 'next/link'

import HeroScrollCue from '@/components/public/hero-scroll-cue'
import RevealOnScroll from '@/components/public/reveal-on-scroll'
import SparkSection from '@/components/public/spark-section'
import { ACCOMMODATIONS, SITE_IMAGES } from '@/content/public-content'
import { getDictionary, getLocale } from '@/i18n/get-locale'

function StarRating() {
  return (
    <div className="mb-6 flex gap-1 text-secondary">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <span key={index} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
        )
      })}
    </div>
  )
}

export default async function HomePage() {
  const locale = await getLocale()
  const t = getDictionary(locale)
  const home = t.home

  return (
    <main className="overflow-x-hidden bg-background text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed-variant">
      <section className="relative flex min-h-[921px] items-center justify-center overflow-hidden px-gutter pt-20">
        <div className="absolute inset-0 z-0 scale-105 transition-transform duration-1000 ease-out hover:scale-100">
          <Image
            src={SITE_IMAGES.homeHero}
            alt={home.heroImageAlt}
            fill
            priority
            className="object-cover brightness-[0.7] saturate-[0.8]"
            sizes="100vw"
          />
        </div>

        <RevealOnScroll className="relative z-10 max-w-3xl text-center text-hero-fg is-visible">
          <span className="font-label-md mb-6 inline-block text-label-md tracking-[0.2em] uppercase opacity-80">
            {home.heroEyebrow}
          </span>
          <h1 className="font-display mb-8 text-display leading-tight md:text-6xl">{home.heroTitle}</h1>
          <div className="mx-auto mb-8 h-[2px] w-16 rounded-full bg-secondary-container" />
          <p className="font-body-lg text-body-lg italic opacity-90">{home.heroSubtitle}</p>
          <div className="mt-12">
            <HeroScrollCue label={home.scrollToHouses} />
          </div>
        </RevealOnScroll>
      </section>

      <div className="reveal is-visible wavy-divider mx-auto my-12 max-w-md opacity-30 md:my-16" />

      <section className="mx-auto scroll-mt-20 max-w-7xl px-gutter py-12 md:py-16" id="houses">
        <RevealOnScroll className="mb-8 text-center is-visible">
          <h2 className="font-headline-lg mb-4 text-headline-lg">{home.housesTitle}</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-secondary opacity-20" />
        </RevealOnScroll>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {ACCOMMODATIONS.map((house) => {
            const houseCopy = house.slug === 'casa-lia' ? t.houses.casaLia : t.houses.casaJulio

            return (
              <RevealOnScroll key={house.slug} className="group block is-visible">
                <Link href={`/casas/${house.slug}`} className="block">
                  <div className="sketch-frame mb-5 aspect-[16/9] max-h-[280px] overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                    <Image
                      src={house.cardImage}
                      alt={house.name}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-headline-md mb-2 text-headline-md">{house.name}</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant italic">{houseCopy.tagline}</p>
                    </div>
                    <span className="material-symbols-outlined text-3xl text-secondary transition-transform group-hover:translate-x-2">
                      arrow_forward
                    </span>
                  </div>
                  <div className="mt-4 border-b border-outline-variant opacity-40 transition-opacity group-hover:opacity-100" />
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </section>

      <section className="overflow-hidden bg-surface-container-low px-gutter py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-16 md:flex-row">
          <RevealOnScroll className="relative md:w-1/2 is-visible">
            <div className="absolute -top-8 -left-8 text-secondary-container opacity-40">
              <span className="material-symbols-outlined text-8xl">cottage</span>
            </div>
            <h2 className="font-display mb-8 text-4xl leading-tight md:text-5xl">
              {home.comingHomeTitle} <span className="text-secondary italic">{home.comingHomeHighlight}</span>{' '}
              {home.comingHomeTitleEnd}
            </h2>
            <p className="font-body-lg mb-8 max-w-sm text-body-lg text-on-surface-variant">{home.comingHomeBody}</p>
            <span className="inline-flex items-center gap-4 font-label-md text-label-md tracking-widest text-secondary uppercase">
              {home.comingHomeLink}
              <span className="h-px w-12 bg-secondary" />
            </span>
          </RevealOnScroll>

          <RevealOnScroll className="relative md:w-1/2 is-visible">
            <div className="hand-drawn-border bg-background p-4">
              <Image
                src={SITE_IMAGES.morningLight}
                alt={home.morningImageAlt}
                width={600}
                height={450}
                className="h-auto w-full grayscale-[0.2]"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <SparkSection copy={home} />

      <section className="px-gutter py-section-gap text-center">
        <RevealOnScroll className="mx-auto max-w-2xl is-visible">
          <h3 className="font-headline-lg mb-12 text-headline-lg italic opacity-60">{home.essenceTitle}</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {home.essence.map((item) => {
              return (
                <div key={item.label}>
                  <span className="font-label-md mb-2 block text-label-md tracking-tighter text-on-surface-variant uppercase">
                    {item.label}
                  </span>
                  <span className="font-headline-md text-headline-md text-secondary">{item.value}</span>
                </div>
              )
            })}
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-background px-gutter py-section-gap">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-16 text-center is-visible">
            <h2 className="font-display mb-4 text-4xl md:text-5xl">{home.trailsTitle}</h2>
            <p className="font-body-lg mx-auto max-w-2xl text-body-lg text-on-surface-variant italic">
              {home.trailsSubtitle}
            </p>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {home.trails.map((trail, index) => {
              return (
                <RevealOnScroll
                  key={trail.title}
                  className="group hand-drawn-border flex h-full flex-col bg-surface-container-low p-8 is-visible"
                  delay={index * 100}
                >
                  <span className="material-symbols-outlined mb-6 text-4xl text-secondary">hiking</span>
                  <h4 className="font-headline-md mb-3 text-headline-md text-primary">{trail.title}</h4>
                  <p className="font-body-md flex-1 text-body-md text-on-surface-variant">{trail.description}</p>
                  <div className="mt-6 h-px w-12 bg-secondary opacity-30 transition-all duration-500 group-hover:w-full" />
                </RevealOnScroll>
              )
            })}
          </div>

          <RevealOnScroll className="mt-10 text-center is-visible">
            <Link
              href="/entorno"
              className="inline-flex items-center gap-4 font-label-md text-label-md tracking-widest text-secondary uppercase transition-all duration-300 hover:gap-6"
            >
              {home.trailsLink}
              <span className="h-px w-12 bg-secondary" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-surface-container-low px-gutter py-section-gap">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll className="mb-16 text-center is-visible">
            <h2 className="font-display mb-4 text-4xl md:text-5xl">{home.reviewsTitle}</h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-secondary opacity-20" />
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {home.reviews.map((review, index) => {
              return (
                <RevealOnScroll
                  key={review.author}
                  className="hand-drawn-border flex h-full flex-col bg-background p-8 is-visible"
                  delay={index * 100}
                >
                  <StarRating />
                  <p className="font-body-lg mb-8 flex-grow text-body-lg text-on-surface-variant italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <span className="font-label-md text-label-md tracking-widest uppercase opacity-60">
                    {review.author}
                  </span>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
