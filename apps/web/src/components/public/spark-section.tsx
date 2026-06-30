'use client'

import { useEffect, useRef } from 'react'

import RevealOnScroll from '@/components/public/reveal-on-scroll'
import type { Dictionary } from '@/i18n'

function createSpark(container: HTMLDivElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const spark = document.createElement('div')
  spark.className = 'spark-particle'

  const size = Math.random() * 4 + 2
  const startX = Math.random() * 100
  const duration = Math.random() * 4000 + 3000
  const drift = (Math.random() - 0.5) * 100

  spark.style.width = `${size}px`
  spark.style.height = `${size}px`
  spark.style.left = `${startX}%`
  spark.style.bottom = '-20px'

  container.appendChild(spark)

  const animation = spark.animate(
    [
      { transform: 'translateY(0) translateX(0)', opacity: 0 },
      { opacity: 0.8, offset: 0.2 },
      { opacity: 0.4, offset: 0.8 },
      { transform: `translateY(-300px) translateX(${drift}px)`, opacity: 0 },
    ],
    {
      duration,
      easing: 'linear',
      fill: 'forwards',
    },
  )

  animation.onfinish = () => {
    spark.remove()
  }
}

function seedSparks(container: HTMLDivElement, count: number) {
  for (let index = 0; index < count; index += 1) {
    createSpark(container)
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

    seedSparks(container, 30)

    const interval = window.setInterval(() => {
      createSpark(container)
    }, 150)

    return () => {
      window.clearInterval(interval)
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
        <p className="font-body-lg mx-auto max-w-xl text-body-lg text-[#eae8e3] italic opacity-80">
          {copy.sparkBody}
        </p>
      </RevealOnScroll>
    </section>
  )
}
