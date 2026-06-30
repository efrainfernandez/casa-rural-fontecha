import type { Metadata } from 'next'

import HouseDetail from '@/components/public/house-detail'
import { ACCOMMODATIONS } from '@/content/public-content'
import { getDictionary, getLocale } from '@/i18n/get-locale'

const house = ACCOMMODATIONS[0]

export const metadata: Metadata = {
  title: 'Casa Lía | Casa Rural Fontecha',
  description: 'Casa rural para 6 personas con chimenea, balcón y vistas al río Carrión en Pino del Río.',
}

export default async function CasaLiaPage() {
  const locale = await getLocale()
  const t = getDictionary(locale)

  return (
    <HouseDetail
      house={house}
      houseCopy={t.houses.casaLia}
      labels={t.houses}
      bookingLabel={t.booking}
    />
  )
}
