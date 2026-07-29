'use client'

import { useEffect, useRef } from 'react'

import RevealOnScroll from '@/components/public/reveal-on-scroll'
import type { Dictionary } from '@/i18n'

function createSpark(container: HTMLDivElement, distributeAlongPath = false) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const spark = document.createElement('div')
  spark.className = 'spark-particle'

  const size = Math.random() * 4 + 2
  const startX = Math.random() * 100
  const duration = Math.random() * 5000 + 7000
  const drift = (Math.random() - 0.5) * 140
  const travel = container.offsetHeight + 60

  spark.style.width = `${size}px`
  spark.style.height = `${size}px`
  spark.style.left = `${startX}%`
  spark.style.bottom = '-30px'

  container.appendChild(spark)

  const animation = spark.animate(
    [
      { transform: 'translateY(0) translateX(0)', opacity: 0 },
      { opacity: 0.7, offset: 0.08 },
      { opacity: 0.45, offset: 0.86 },
      { transform: `translateY(-${travel}px) translateX(${drift}px)`, opacity: 0 },
    ],
    {
      duration,
      easing: 'linear',
      fill: 'forwards',
    },
  )

  if (distributeAlongPath) {
    animation.currentTime = Math.random() * duration
  }

  animation.onfinish = () => {
    spark.remove()
  }
}

function seedSparks(container: HTMLDivElement, count: number) {
  for (let index = 0; index < count; index += 1) {
    createSpark(container, true)
  }
}

type SparkSectionProps = {
  copy: Dictionary['home']
}

export default function SparkSection({ copy }: SparkSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current

    if (container == null) {
      return
    }

    seedSparks(container, 90)

    const interval = window.setInterval(() => {
      createSpark(container)
    }, 125)

    return () => {
      window.clearInterval(interval)
      container.replaceChildren()
    }
  }, [])

  return (
    <section
      className="relative flex h-[614px] items-center justify-center overflow-hidden bg-[#28351e] md:h-[819px]"
      id="fireplace-area"
    >
      <div
        className="absolute inset-0 z-[1] bg-[url('https://www.transparenttextures.com/patterns/charcoal.png')] opacity-10"
        aria-hidden="true"
      />

      <div ref={containerRef} className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" />

      <div
        className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_center,rgba(40,53,30,0.92)_0%,rgba(40,53,30,0.68)_32%,transparent_68%)]"
        aria-hidden="true"
      />

      <RevealOnScroll className="relative z-10 px-gutter text-center">
        <div className="mb-12">
          <span
            className="material-symbols-outlined text-6xl text-secondary-container"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
        </div>
        <h2 className="font-display mb-6 text-4xl text-[#fbf9f4] md:text-5xl">{copy.sparkTitle}</h2>
        <p className="font-body-lg mx-auto max-w-xl text-body-lg text-[#eae8e3] italic opacity-80">{copy.sparkBody}</p>
      </RevealOnScroll>
    </section>
  )
}
