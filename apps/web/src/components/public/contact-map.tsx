'use client'

import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useRef, useState } from 'react'
import type { Map, Marker, Popup } from 'maplibre-gl'

type ContactMapProps = {
  ariaLabel: string
  latitude: number
  longitude: number
  popupLabel: string
}

const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty'
const BUILDINGS_LAYER_ID = 'fontecha-3d-buildings'

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl2') ??
        canvas.getContext('webgl') ??
        canvas.getContext('experimental-webgl'),
    )
  } catch {
    return false
  }
}

export default function ContactMap({
  ariaLabel,
  latitude,
  longitude,
  popupLabel,
}: ContactMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)
  const [mapUnavailable, setMapUnavailable] = useState(false)

  useEffect(() => {
    if (containerRef.current == null || mapRef.current != null || mapUnavailable) return

    if (!supportsWebGL()) {
      const timeoutId = window.setTimeout(() => setMapUnavailable(true), 0)
      return () => window.clearTimeout(timeoutId)
    }

    let map: Map
    let marker: Marker | null = null
    let popup: Popup | null = null

    try {
      map = new maplibregl.Map({
        container: containerRef.current,
        style: MAP_STYLE,
        center: [longitude, latitude],
        zoom: 17.5,
        pitch: 55,
        bearing: -18,
        attributionControl: { compact: true },
        canvasContextAttributes: { antialias: true },
      })
    } catch {
      const timeoutId = window.setTimeout(() => setMapUnavailable(true), 0)
      return () => window.clearTimeout(timeoutId)
    }

    mapRef.current = map
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right')

    popup = new maplibregl.Popup({ offset: 28, closeButton: false }).setText(popupLabel)
    marker = new maplibregl.Marker({ color: '#8b5e3c' })
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map)

    map.on('load', () => {
      const firstLabelLayer = map
        .getStyle()
        .layers?.find((layer) => layer.type === 'symbol' && layer.layout?.['text-field'])

      map.addLayer(
        {
          id: BUILDINGS_LAYER_ID,
          source: 'openmaptiles',
          'source-layer': 'building',
          type: 'fill-extrusion',
          minzoom: 14,
          paint: {
            'fill-extrusion-color': '#d5c0a4',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              14,
              0,
              15.5,
              ['coalesce', ['get', 'render_height'], ['get', 'height'], 4],
            ],
            'fill-extrusion-base': [
              'coalesce',
              ['get', 'render_min_height'],
              ['get', 'min_height'],
              0,
            ],
            'fill-extrusion-opacity': 0.85,
          },
        },
        firstLabelLayer?.id,
      )
    })

    const handleError = (event: ErrorEvent) => {
      const message = event.error?.message?.toLowerCase() ?? ''
      if (!message.includes('webgl') && !message.includes('context')) return

      map.remove()
      mapRef.current = null
      setMapUnavailable(true)
    }

    map.on('error', handleError)

    return () => {
      marker?.remove()
      popup?.remove()
      map.off('error', handleError)
      map.remove()
      mapRef.current = null
    }
  }, [latitude, longitude, mapUnavailable, popupLabel])

  if (mapUnavailable) {
    return (
      <div
        role="status"
        className="flex h-[28rem] w-full items-center justify-center bg-surface-container md:h-[36rem]"
      >
        <p className="font-body-lg text-on-surface-variant">{ariaLabel}: mapa no disponible</p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={`${ariaLabel}: ${popupLabel}`}
      className="h-[28rem] w-full border-0 md:h-[36rem]"
    />
  )
}
