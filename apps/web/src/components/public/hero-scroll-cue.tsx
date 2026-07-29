'use client'

type HeroScrollCueProps = {
  label: string
}

export default function HeroScrollCue({ label }: HeroScrollCueProps) {
  function scrollToHouses() {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

    document.getElementById('houses')?.scrollIntoView({ behavior, block: 'start' })
  }

  return (
    <button
      type="button"
      onClick={scrollToHouses}
      className="inline-flex cursor-pointer rounded-full p-2 text-hero-fg transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      aria-label={label}
    >
      <span className="material-symbols-outlined animate-bounce text-4xl" aria-hidden="true">
        expand_more
      </span>
    </button>
  )
}
