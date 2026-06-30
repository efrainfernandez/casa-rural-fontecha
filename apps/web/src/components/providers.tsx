'use client'

import { Toaster } from '@casa-rural-fontecha/ui/components/sonner'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/utils/orpc'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      <Toaster richColors />
    </QueryClientProvider>
  )
}
