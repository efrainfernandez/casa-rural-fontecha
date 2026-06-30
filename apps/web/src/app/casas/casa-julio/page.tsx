import type { Metadata } from 'next'

import HouseDetail from '@/components/public/house-detail'
import { ACCOMMODATIONS } from '@/content/public-content'
import { getDictionary, getLocale } from '@/i18n/get-locale'

const house = ACCOMMODATIONS[1]

export const metadata: Metadata = {
  title: 'Casa Julio | Casa Rural Fontecha',
  description: 'Casa rural para 8 personas con terraza, jardín y barbacoa en Pino del Río.',
}

export default async function CasaJulioPage() {
  const locale = await getLocale()
  const t = getDictionary(locale)

  return (
    <HouseDetail
      house={house}
      houseCopy={t.houses.casaJulio}
      labels={t.houses}
      bookingLabel={t.booking}
    />
  )
}
