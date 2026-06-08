import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import '../index.css'
import Header from '@/components/header'
import Providers from '@/components/providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Casa Rural Fontecha | Alojamientos en Pino del Río, Palencia',
  description:
    'Descubre Casa Lía y Casa Julio junto al río Carrión. Una landing clara para presentar Casa Rural Fontecha y su entorno en Pino del Río.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="grid min-h-svh grid-rows-[auto_1fr]">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
