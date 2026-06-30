'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { cn } from '@casa-rural-fontecha/ui/lib/utils'

import type { Dictionary } from '@/i18n'

type ThemeToggleProps = {
  labels: Dictionary['theme']
  className?: string
}

export default function ThemeToggle({ labels, className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className={cn('size-9', className)} aria-hidden="true" />
  }

  const isDark = resolvedTheme === 'dark'

  function toggleTheme() {
    if (isDark) {
      setTheme('light')
      return
    }

    setTheme('dark')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={labels.toggle}
      title={isDark ? labels.light : labels.dark}
      className={cn(
        'flex size-9 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary',
        className,
      )}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
