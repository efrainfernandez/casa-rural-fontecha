export const ACCOMMODATIONS = [
  {
    slug: 'casa-lia',
    name: 'Casa Lía',
    shortTitle: 'Casa rural para 6 personas junto al río Carrión',
    capacity: 6,
    bedrooms: 3,
    summary: 'Casa rural para 6 personas con chimenea y balcón con vistas al río Carrión.',
    audience: 'Ideal para escapadas familiares y estancias tranquilas en pareja o con amigos.',
    features: ['Chimenea', 'Balcón', 'Vistas al río', 'Zona de estar amplia'],
    quickFacts: [
      'Ambiente acogedor para desconectar con calma.',
      'Configuración cómoda para estancias familiares.',
      'Relación directa con el paisaje de la ribera.',
    ],
    spaces: [
      'Salón principal con zona de convivencia.',
      'Dormitorios pensados para un descanso cómodo.',
      'Balcón con protagonismo de las vistas y la luz natural.',
      'Espacios interiores centrados en una experiencia cálida y doméstica.',
    ],
    gallery: [
      {
        title: 'Vista principal',
        description: 'Bloque principal para la futura foto exterior o de acceso.',
      },
      {
        title: 'Salón y chimenea',
        description: 'Espacio pensado para reflejar calidez, reunión y descanso.',
      },
      {
        title: 'Dormitorios',
        description: 'Galería preparada para mostrar distribución y confort.',
      },
      {
        title: 'Balcón y entorno',
        description: 'Área visual para destacar la cercanía al río Carrión.',
      },
    ],
  },
  {
    slug: 'casa-julio',
    name: 'Casa Julio',
    shortTitle: 'Casa rural para 8 personas con jardín y barbacoa',
    capacity: 8,
    bedrooms: 4,
    summary: 'Casa rural para 8 personas con amplia terraza, jardín y barbacoa.',
    audience: 'Pensada para familias numerosas o grupos que quieran convivir con comodidad.',
    features: ['Terraza', 'Jardín', 'Barbacoa', 'Espacios para grupos'],
    quickFacts: [
      'Distribución orientada a reuniones amplias.',
      'Espacios exteriores con mucho peso en la experiencia.',
      'Buena encaje para familias y grupos que priorizan convivencia.',
    ],
    spaces: [
      'Zona de día amplia para compartir tiempo en grupo.',
      'Dormitorios suficientes para estancias de mayor capacidad.',
      'Terraza y jardín como extensión natural de la vivienda.',
      'Barbacoa y exterior pensados para comidas y sobremesas al aire libre.',
    ],
    gallery: [
      {
        title: 'Vista exterior',
        description: 'Bloque reservado para una foto principal con más presencia de exterior.',
      },
      {
        title: 'Zona común',
        description: 'Espacio visual para enseñar amplitud y vida en grupo.',
      },
      {
        title: 'Dormitorios',
        description: 'Área preparada para mostrar orden, capacidad y descanso.',
      },
      {
        title: 'Terraza y jardín',
        description: 'Galería para reforzar el valor del exterior y la barbacoa.',
      },
    ],
  },
] as const

export const ENVIRONMENT_HIGHLIGHTS = [
  {
    title: 'Río Carrión',
    description: 'Un entorno sereno para pasear, descansar y disfrutar de la ribera a pocos minutos.',
  },
  {
    title: 'Pesca',
    description: 'La zona destaca por su vínculo con el río y por planes pausados ligados a la naturaleza.',
  },
  {
    title: 'Senderismo',
    description: 'Rutas y caminos del entorno rural palentino para desconectar sin alejarse del alojamiento.',
  },
  {
    title: 'Villa Romana La Olmeda',
    description: 'Uno de los grandes reclamos culturales de la zona, perfecto para completar la estancia.',
  },
] as const

export const ENVIRONMENT_DETAILS = {
  intro:
    'Pino del Río permite construir un discurso turístico muy claro: pueblo pequeño, paisaje de ribera, tradición rural y actividades ligadas al descanso y al aire libre.',
  facts: [
    'Municipio de la provincia de Palencia, en Castilla y León.',
    'Situado en la comarca de Vega-Valdavia y vinculado al río Carrión.',
    'Entorno de baja densidad, pensado para ritmos tranquilos y escapadas de desconexión.',
    'La localidad incluye también el núcleo de Celadilla del Río.',
  ],
  places: [
    {
      title: 'Casco urbano y ribera',
      description: 'La cercanía entre pueblo y río permite una relación muy directa con el paisaje y los paseos cortos.',
    },
    {
      title: 'Área recreativa',
      description: 'Zona valorada en verano para ocio al aire libre, sombra, descanso y planes familiares.',
    },
    {
      title: 'Zonas de pesca',
      description: 'El entorno del Carrión es uno de los elementos diferenciales del municipio para turismo pausado.',
    },
    {
      title: 'Laguna de Valdeperal',
      description: 'Paraje natural interesante para rutas cortas, observación y fotografía de paisaje.',
    },
    {
      title: 'Ermita del Nido',
      description: 'Punto de interés tradicional ligado a romerías y a la identidad local.',
    },
    {
      title: 'Iglesia de San Pedro',
      description: 'Referencia patrimonial del municipio y parte de su relato cultural.',
    },
  ],
  plans: [
    'Paseos junto al río y por caminos agrícolas del entorno.',
    'Pesca deportiva en el área del Carrión.',
    'Rutas en bicicleta por pista y caminos rurales.',
    'Visitas culturales complementarias, incluida Villa Romana La Olmeda.',
    'Escapadas centradas en gastronomía local y descanso sin prisa.',
  ],
  sources: [
    {
      label: 'Wikipedia: Pino del Río',
      href: 'https://es.wikipedia.org/wiki/Pino_del_R%C3%ADo',
    },
    {
      label: 'Web oficial del Ayuntamiento de Pino del Río',
      href: 'https://pinodelrio.es/',
    },
  ],
} as const

export const TRUST_POINTS = [
  'Dos alojamientos con perfiles distintos para adaptarse a cada tipo de escapada.',
  'Ubicación en Pino del Río, con foco en descanso, naturaleza y planes tranquilos.',
  'Presentación clara del entorno para reforzar la decisión antes del contacto directo.',
  'Arquitectura de contenidos preparada para crecer después con reservas y disponibilidad.',
] as const

export const REVIEW_SNIPPETS = [
  {
    quote: 'La propuesta transmite una escapada tranquila, muy conectada con el paisaje y el ritmo del pueblo.',
    author: 'Resumen editorial de experiencia',
  },
  {
    quote: 'Casa Lía funciona muy bien para una estancia acogedora, mientras que Casa Julio invita a convivir más en grupo.',
    author: 'Resumen editorial de producto',
  },
  {
    quote: 'El valor diferencial está en combinar alojamiento, río, pesca, senderismo y planes culturales cercanos.',
    author: 'Resumen editorial de destino',
  },
  {
    quote: 'La ubicación en Pino del Río ayuda a vender descanso real, no solo una casa bonita.',
    author: 'Resumen editorial de entorno',
  },
  {
    quote: 'La futura carga de imágenes reales puede convertir esta base pública en una web comercial muy sólida.',
    author: 'Resumen editorial de crecimiento',
  },
  {
    quote: 'La combinación de 6 y 8 plazas cubre tanto escapadas familiares como grupos con necesidades distintas.',
    author: 'Resumen editorial de capacidad',
  },
] as const

export const TRUST_SECTIONS = [
  {
    title: 'Claridad desde el primer vistazo',
    description: 'La home y las páginas interiores están planteadas para enseñar rápido qué ofrece cada casa y para quién es.',
  },
  {
    title: 'Enfoque en destino, no solo en inmueble',
    description: 'La marca se apoya en Pino del Río, el Carrión y los planes del entorno para elevar la percepción del alojamiento.',
  },
  {
    title: 'Base lista para evolucionar',
    description: 'La estructura pública ya deja preparado el terreno para meter fotos reales, disponibilidad y conversiones más adelante.',
  },
] as const

export const REVIEW_SOURCE_NOTE =
  'No he podido extraer reseñas reales de Google Maps desde este entorno porque la ficha pública no permite scraping automatizado fiable aquí. La sección queda preparada para sustituir estos textos editoriales por reseñas verificadas cuando tengamos acceso a una fuente estable o a la API correspondiente.'

export const CONTACT_DETAILS = {
  email: 'reservas@casaruralfontecha.com',
  location: 'Pino del Río, Palencia',
  townHallPhone: '979 180192',
  townHallEmail: 'secretario@pinodelrio.es',
} as const
