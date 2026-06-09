'use client'

import type { ReactNode } from 'react'

import { motion, useReducedMotion } from 'motion/react'

type WrapperProps = {
  children: ReactNode
  className?: string
}

export function FadeIn({ children, className }: WrapperProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduceMotion ? { duration: 0.28 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className }: WrapperProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion ? { staggerChildren: 0 } : { staggerChildren: 0.12, delayChildren: 0.08 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: WrapperProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: reduceMotion ? { duration: 0.24 } : { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function HoverLift({ children, className }: WrapperProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
      transition={reduceMotion ? { duration: 0.2 } : { type: 'spring', stiffness: 220, damping: 18 }}
    >
      {children}
    </motion.div>
  )
}
