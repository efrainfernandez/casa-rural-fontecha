import BookingButton from '@/components/public/booking-button'
import HouseImageSlider from '@/components/public/house-image-slider'
import RevealOnScroll from '@/components/public/reveal-on-scroll'
import type { ACCOMMODATIONS } from '@/content/public-content'
import type { Dictionary } from '@/i18n'

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
      <section className="mx-auto max-w-6xl px-gutter pt-10 md:px-margin-desktop md:pt-12">
        <div className="mb-8 text-center">
          <h1 className="font-display mb-3 text-5xl md:text-6xl">{house.name}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant italic">{houseCopy.heroTagline}</p>
        </div>
        <HouseImageSlider
          images={house.sliderImages}
          houseName={house.name}
          imageLabel={labels.sliderImage}
          previousLabel={labels.previousImage}
          nextLabel={labels.nextImage}
        />
      </section>

      <section className="mx-auto max-w-7xl px-gutter py-16 md:px-margin-desktop md:py-20">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12">
          <div className="space-y-16 md:col-span-7">
            <RevealOnScroll className="is-visible">
              <h2 className="font-headline-lg sketch-underline mb-6 inline-block text-headline-lg text-primary">
                {labels.architectureTitle}
              </h2>
              <p className="font-body-lg max-w-xl text-body-lg text-on-surface-variant">{houseCopy.summary}</p>
            </RevealOnScroll>

            <RevealOnScroll className="is-visible">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
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
              <p className="font-body-lg mb-4 text-body-lg leading-relaxed text-primary">
                &ldquo;{houseCopy.quote}&rdquo;
              </p>
              <span className="font-label-md text-label-md text-secondary">— {houseCopy.quoteAuthor}</span>
            </RevealOnScroll>
          </div>

          <RevealOnScroll className="flex justify-center md:col-span-5 md:justify-end is-visible">
            <div className="postcard-border w-full max-w-sm rotate-1 bg-surface-container-low p-8 md:rotate-2 hover:rotate-0">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-20 w-16 items-center justify-center rounded-sm border border-outline-variant bg-surface-container-high/50">
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
    </main>
  )
}
