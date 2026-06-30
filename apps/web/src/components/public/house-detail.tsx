import Image from 'next/image'

import BookingButton from '@/components/public/booking-button'
import RevealOnScroll from '@/components/public/reveal-on-scroll'
import type { Dictionary } from '@/i18n'
import type { ACCOMMODATIONS } from '@/content/public-content'

type Accommodation = (typeof ACCOMMODATIONS)[number]

type HouseCopy = Dictionary['houses']['casaLia'] | Dictionary['houses']['casaJulio']

type HouseDetailProps = {
  house: Accommodation
  houseCopy: HouseCopy
  labels: Dictionary['houses']
  bookingLabel: string
}

export default function HouseDetail({ house, houseCopy, labels, bookingLabel }: HouseDetailProps) {
  return (
    <main className="bg-background pt-20 text-on-background">
      <section className="relative h-[819px] w-full overflow-hidden px-gutter py-8 md:px-margin-desktop">
        <div className="group relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={house.heroImage}
            alt={`${house.name} ${labels.exteriorAlt}`}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12 text-white">
            <h1 className="font-display mb-2 text-display md:text-6xl">{house.name}</h1>
            <p className="font-body-lg text-body-lg italic opacity-90">{houseCopy.heroTagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-gutter py-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
          <div className="space-y-16 md:col-span-7">
            <RevealOnScroll className="is-visible">
              <h2 className="font-headline-lg sketch-underline mb-6 inline-block text-headline-lg text-primary">
                {labels.architectureTitle}
              </h2>
              <p className="font-body-lg max-w-xl text-body-lg text-on-surface-variant">{houseCopy.summary}</p>
            </RevealOnScroll>

            <RevealOnScroll className="is-visible">
              <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                {houseCopy.amenities.map((amenity) => {
                  return (
                    <div key={amenity.label} className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-3xl text-secondary">{amenity.icon}</span>
                      <span className="font-label-md text-label-md tracking-widest text-on-surface uppercase">
                        {amenity.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="border-l-2 border-outline-variant pt-8 pl-8 italic is-visible">
              <p className="font-body-lg mb-4 text-body-lg leading-relaxed text-primary">&ldquo;{houseCopy.quote}&rdquo;</p>
              <span className="font-label-md text-label-md text-secondary">— {houseCopy.quoteAuthor}</span>
            </RevealOnScroll>
          </div>

          <RevealOnScroll className="flex justify-center md:col-span-5 md:justify-end is-visible">
            <div className="postcard-border w-full max-w-sm rotate-1 bg-surface-container-low p-8 md:rotate-2 hover:rotate-0">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-20 w-16 items-center justify-center rounded-sm border border-outline-variant bg-white/50">
                  <span className="material-symbols-outlined text-outline">local_post_office</span>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-xs text-outline-variant uppercase">{labels.destination}</p>
                  <p className="font-headline-md text-primary">{labels.destinationName}</p>
                </div>
              </div>

              <div className="mb-10 space-y-4">
                <div className="h-px w-full bg-outline-variant/30" />
                <div className="h-px w-full bg-outline-variant/30" />
                <div className="h-px w-full bg-outline-variant/30" />
              </div>

              <div className="text-center">
                <BookingButton className="w-full rounded py-4 shadow-sm hover:bg-primary-container hover:text-on-primary-container">
                  {bookingLabel}
                </BookingButton>
                <p className="font-body-md mt-4 text-sm text-on-surface-variant italic">{labels.postcardFarewell}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="w-full px-gutter pb-section-gap md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          <RevealOnScroll className="aspect-[4/5] overflow-hidden rounded-xl is-visible">
            <Image
              src={house.galleryImages[0]}
              alt={`${labels.interiorAlt} ${house.name}`}
              width={600}
              height={750}
              className="h-full w-full object-cover"
            />
          </RevealOnScroll>
          <RevealOnScroll className="mt-12 aspect-[4/5] overflow-hidden rounded-xl md:mt-24 is-visible">
            <Image
              src={house.galleryImages[1]}
              alt={`${labels.viewsAlt} ${house.name}`}
              width={600}
              height={750}
              className="h-full w-full object-cover"
            />
          </RevealOnScroll>
        </div>
      </section>
    </main>
  )
}
