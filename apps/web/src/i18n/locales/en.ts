export const en = {
  nav: {
    home: 'Home',
    houses: 'Houses',
    environment: 'Environment',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchToEnglish: 'EN',
    switchToSpanish: 'ES',
    englishMobile: 'EN - English',
    spanishMobile: 'ES - Español',
  },
  booking: 'Book on Booking.com',
  home: {
    heroEyebrow: 'Palencia Mountains',
    heroTitle: 'Your home in the Palencia Mountains.',
    heroSubtitle: 'Feel the warmth of the fireplace.',
    heroImageAlt: 'Palencia mountains at dusk',
    housesTitle: 'Our Houses',
    comingHomeTitle: 'Returning is the',
    comingHomeHighlight: 'true',
    comingHomeTitleEnd: 'journey.',
    comingHomeBody:
      'Some places are not visited, they are lived in. The crackle of wood is the only soundtrack you need.',
    comingHomeLink: 'Our story',
    morningImageAlt: 'Morning light in the rural house',
    sparkTitle: 'The spark that ignites rest.',
    sparkBody: 'Watch the fire. Forget the clock. The silence of the mountains takes care of you.',
    essenceTitle: 'Rural essence, modern soul.',
    essence: [
      { label: 'Air', value: 'Pure' },
      { label: 'Sleep', value: 'Deep' },
      { label: 'Fire', value: 'Alive' },
      { label: 'Life', value: 'Slow' },
    ],
    trailsTitle: 'Paths Between Peaks',
    trailsSubtitle: 'The Palencia Mountains await with trails that whisper stories of stone and wind.',
    trailsImageAlt: 'Mountain trail',
    trailsLink: 'Explore trails',
    trails: [
      {
        title: 'Senda del Oso',
        description: 'A walk among centuries-old oaks where time seems to stand still.',
      },
      {
        title: 'Pozo de las Lomas',
        description: 'The reflection of the peaks in glacial waters, a mirror for the soul.',
      },
      {
        title: 'Tejeda de Tosande',
        description: 'Living cathedrals of ancient wood that guard the silence of the forest.',
      },
    ],
    reviewsTitle: 'Your Stories',
    reviews: [
      {
        quote:
          'The crackle of the fireplace and the absolute silence of the night returned the peace we had forgotten.',
        author: 'Elena & Marc',
      },
      {
        quote: 'It is not just a house, it is a refuge where every detail of wood and stone embraces you. We will always return.',
        author: 'Javier R.',
      },
      {
        quote: 'Waking to golden light through the window and the smell of coffee in the mountains is the true luxury.',
        author: 'Sofía L.',
      },
    ],
  },
  houses: {
    architectureTitle: 'Architecture and comfort',
    destination: 'Destination',
    destinationName: 'Pino del Río',
    postcardFarewell: 'Safe travels, see you soon.',
    interiorAlt: 'Interior of',
    viewsAlt: 'Views from',
    exteriorAlt: 'exterior',
    casaLia: {
      tagline: 'For two restless souls.',
      heroTagline: 'A refuge among holm oaks and stone.',
      summary:
        'Carefully restored to preserve its rustic soul, Casa Lía blends traditional Castilian masonry with modern, airy interiors.',
      amenities: [
        { icon: 'bed', label: '3 Bedrooms' },
        { icon: 'group', label: '6 Guests' },
        { icon: 'fireplace', label: 'Fireplace' },
        { icon: 'landscape', label: 'Views' },
      ],
      quote:
        'The light that enters through the fireplace room at dawn is something I will never forget. It is not just a house; it is a pause in time.',
      quoteAuthor: 'Elena M., October 2023',
    },
    casaJulio: {
      tagline: 'A refuge of stone and time.',
      heroTagline: 'Spacious living for unhurried gatherings.',
      summary:
        'Casa Julio invites you to gather: terrace, garden and barbecue become the natural extension of a home designed for groups seeking calm and togetherness.',
      amenities: [
        { icon: 'bed', label: '4 Bedrooms' },
        { icon: 'group', label: '8 Guests' },
        { icon: 'deck', label: 'Terrace' },
        { icon: 'outdoor_grill', label: 'Barbecue' },
      ],
      quote:
        'It is not just a house, it is a refuge where every detail of wood and stone embraces you. We will always return.',
      quoteAuthor: 'Javier R.',
    },
  },
  environment: {
    title: 'A map of sensations',
    intro:
      'Discover the hidden soul of the Carrión region. Where water whispers Romanesque stories and time is measured by the cycle of seasons.',
    pillars: [
      { icon: 'nature', title: 'Nature', description: 'Riverside forests and endless horizons.' },
      { icon: 'museum', title: 'Culture', description: 'The eternal legacy of Palencia Romanesque art.' },
      { icon: 'phishing', title: 'Fishing', description: 'Crystal-clear waters of the Pino del Río fishing reserve.' },
    ],
    spots: [
      {
        eyebrow: 'Feel the water',
        title: 'Carrión River',
        description:
          'Our village breathes to the rhythm of the river. Its transparent waters are the perfect refuge for the patient angler and the walker seeking the cool shade of the riverside woods.',
        note: 'The Pino Reserve: world-famous among fly-fishing enthusiasts.',
        icon: 'water_drop',
      },
      {
        eyebrow: 'Footprints of time',
        title: 'Villa Romana La Olmeda',
        description:
          'Just a few kilometres away, history is unearthed at one of the most important Roman sites in the world. Perfect mosaics that tell stories from two millennia ago.',
        cta: 'Explore the site',
      },
      {
        eyebrow: 'Stone and silence',
        title: 'Romanesque Route',
        description:
          'The greatest concentration of Romanesque art in Europe is found in these lands. Golden stone churches emerging among wheat fields like guardians of a serene past.',
        items: ['San Juan de Baños', 'San Martín de Frómista', 'Monasterio de San Zoilo'],
      },
    ],
    ctaTitle: 'Want to feel it for yourself?',
    ctaBody: 'Pino del Río is the perfect starting point for your map of sensations.',
    ctaButton: 'Book your stay',
  },
  footer: {
    tagline: 'A Castilian escape.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    instagram: 'Instagram',
  },
} as const
