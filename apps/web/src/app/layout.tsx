import type { Metadata } from 'next'
import { Libre_Caslon_Text, Source_Sans_3 } from 'next/font/google'

import '../index.css'
import GrainOverlay from '@/components/public/grain-overlay'
import SiteFooter from '@/components/public/site-footer'
import SiteHeader from '@/components/public/site-header'
import Providers from '@/components/providers'
import { getDictionary, getLocale } from '@/i18n/get-locale'

const libreCaslon = Libre_Caslon_Text({
  variable: '--font-libre-caslon',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Casa Rural Fontecha | Alojamientos en Pino del Río, Palencia',
  description:
    'Descubre Casa Lía y Casa Julio en la Montaña Palentina. Chimenea, río Carrión y calma castellana en Pino del Río.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const dictionary = getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${libreCaslon.variable} ${sourceSans.variable} overflow-x-hidden bg-background font-body-md text-on-surface antialiased`}
      >
        <Providers>
          <GrainOverlay />
          <SiteHeader
            locale={locale}
            labels={dictionary.nav}
            themeLabels={dictionary.theme}
            bookingLabel={dictionary.booking}
          />
          {children}
          <SiteFooter labels={dictionary.footer} />
        </Providers>
      </body>
    </html>
  )
}
