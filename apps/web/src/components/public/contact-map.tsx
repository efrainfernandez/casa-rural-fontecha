import { CONTACT_DETAILS } from '@/content/public-content'

type ContactMapProps = {
  ariaLabel: string
  popupLabel: string
}

export default function ContactMap({ ariaLabel, popupLabel }: ContactMapProps) {
  const { latitude, longitude } = CONTACT_DETAILS.coordinates
  const margin = 0.012
  const boundingBox = [longitude - margin, latitude - margin, longitude + margin, latitude + margin].join(',')
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(boundingBox)}&layer=mapnik&marker=${latitude}%2C${longitude}`

  return (
    <iframe
      src={mapUrl}
      title={`${ariaLabel}: ${popupLabel}`}
      className="h-[28rem] w-full border-0 md:h-[36rem]"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}
