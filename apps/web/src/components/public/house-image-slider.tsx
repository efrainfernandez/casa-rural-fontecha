'use client'

import Image from 'next/image'
import { useState } from 'react'

type HouseImageSliderProps = {
  images: readonly string[]
  houseName: string
  imageLabel: string
  previousLabel: string
  nextLabel: string
}

export default function HouseImageSlider({
  images,
  houseName,
  imageLabel,
  previousLabel,
  nextLabel,
}: HouseImageSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  function showNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-surface-container-low">
      <div
        className="flex h-[240px] transition-transform duration-500 ease-out sm:h-[300px] md:h-[360px]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => {
          return (
            <div key={`${image}-${index}`} className="relative h-full min-w-full">
              <Image
                src={image}
                alt={`${imageLabel} ${index + 1} — ${houseName}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )
        })}
      </div>

      <button
        type="button"
        onClick={showPrevious}
        className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/90 text-primary shadow-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:outline-none"
        aria-label={previousLabel}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          chevron_left
        </span>
      </button>
      <button
        type="button"
        onClick={showNext}
        className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/90 text-primary shadow-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:outline-none"
        aria-label={nextLabel}
      >
        <span className="material-symbols-outlined" aria-hidden="true">
          chevron_right
        </span>
      </button>

      <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
        {images.map((image, index) => {
          return (
            <button
              key={`${image}-dot-${index}`}
              type="button"
              onClick={() => {
                setActiveIndex(index)
              }}
              className={`size-2.5 cursor-pointer rounded-full border border-white shadow-sm transition-colors ${
                activeIndex === index ? 'bg-white' : 'bg-white/35'
              }`}
              aria-label={`${imageLabel} ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
            />
          )
        })}
      </div>
    </div>
  )
}
