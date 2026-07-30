export const BOOKING_URL = 'https://www.booking.com'

export const SITE_IMAGES = {
  homeHero: '/images/entorno-casa-fontecha.jpg',
  casaLiaCard: '/images/casa-fontecha-fachada-jardin.jpg',
  casaJulioCard: '/images/casa-fontecha-entre-arboles.jpg',
  morningLight: '/images/casa-fontecha-fachada-detalle.jpg',
  mountainTrail: '/images/piscina-natural-casa-fontecha.jpg',
  casaLiaHero: '/images/casa-fontecha-vista-jardin.jpg',
  casaLiaFireplace: '/images/casa-fontecha-vista-exterior.jpg',
  casaLiaWindow: '/images/casa-fontecha-desde-piscina.jpg',
  rioCarrion: '/images/piscina-natural-casa-fontecha.jpg',
  villaRomana: '/images/casa-fontecha-fachada-detalle.jpg',
  romanico: '/images/casa-fontecha-fachada-jardin.jpg',
} as const

export const ACCOMMODATIONS = [
  {
    slug: 'casa-lia',
    name: 'Casa Lía',
    cardImage: SITE_IMAGES.casaLiaCard,
    sliderImages: [SITE_IMAGES.casaLiaHero, SITE_IMAGES.casaLiaFireplace, SITE_IMAGES.casaLiaWindow],
  },
  {
    slug: 'casa-julio',
    name: 'Casa Julio',
    cardImage: SITE_IMAGES.casaJulioCard,
    sliderImages: [SITE_IMAGES.casaJulioCard, SITE_IMAGES.morningLight],
  },
] as const

export const CONTACT_DETAILS = {
  email: 'reservas@casaruralfontecha.com',
  phone: '678 876 678',
  phoneHref: '+34678876678',
  address: 'Calle del Caño, 4, 34110 Pino del Río, Palencia, España',
  location: 'Pino del Río, Palencia',
  coordinates: {
    latitude: 42.64386,
    longitude: -4.808431,
  },
} as const
