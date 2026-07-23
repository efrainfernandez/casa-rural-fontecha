'use client'

import { useEffect, useRef } from 'react'

import { CONTACT_DETAILS } from '@/content/public-content'

type ContactMapProps = {
  ariaLabel: string
  popupLabel: string
}

export default function ContactMap({ ariaLabel, popupLabel }: ContactMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: import('maplibre-gl').Map | undefined
    let isCancelled = false

    async function initializeMap() {
      const maplibregl = await import('maplibre-gl')

      if (isCancelled || containerRef.current == null) {
        return
      }

      const { latitude, longitude } = CONTACT_DETAILS.coordinates

      map = new maplibregl.Map({
        container: containerRef.current,
        style: {
          version: 8,
          sources: {
            openStreetMap: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap contributors',
            },
          },
          layers: [
            {
              id: 'openStreetMap',
              type: 'raster',
              source: 'openStreetMap',
            },
          ],
        },
        center: [longitude, latitude],
        zoom: 15,
      })

      map.addControl(new maplibregl.NavigationControl(), 'top-right')

      const popup = new maplibregl.Popup({ offset: 24 }).setHTML(
        `<strong>${popupLabel}</strong><br>${CONTACT_DETAILS.address}`,
      )

      new maplibregl.Marker({ color: '#904d00' }).setLngLat([longitude, latitude]).setPopup(popup).addTo(map)
    }

    void initializeMap()

    return () => {
      isCancelled = true
      map?.remove()
    }
  }, [popupLabel])

  return <div ref={containerRef} role="region" aria-label={ariaLabel} className="h-[28rem] w-full md:h-[36rem]" />
}
