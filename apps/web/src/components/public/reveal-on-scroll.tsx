'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@casa-rural-fontecha/ui/lib/utils'

type RevealOnScrollProps = {
  children: React.ReactNode
  className?: string
  variant?: 'reveal' | 'reveal-on-scroll'
  delay?: number
}

export default function RevealOnScroll({
  children,
  className,
  variant = 'reveal',
  delay,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = ref.current

    if (element == null) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(variant, className)}
      style={delay != null ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
