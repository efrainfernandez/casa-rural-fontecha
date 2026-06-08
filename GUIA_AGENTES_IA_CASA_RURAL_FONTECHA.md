# Guía de Desarrollo para Agentes de IA — Casa Rural Fontecha

> Proyecto generado con:
>
> ```bash
> bun create better-t-stack@latest casa-rural-fontecha \
>   --frontend next \
>   --backend elysia \
>   --runtime bun \
>   --api orpc \
>   --auth better-auth \
>   --payments none \
>   --database postgres \
>   --orm drizzle \
>   --db-setup none \
>   --package-manager bun \
>   --git \
>   --web-deploy none \
>   --server-deploy none \
>   --install \
>   --addons turborepo \
>   --examples none
> ```

## 1. Objetivo del documento

Este archivo es una guía operativa para agentes de IA que tengan que desarrollar, mantener o ampliar la aplicación web de **Casa Rural Fontecha**, formada por dos alojamientos independientes:

- **Casa Lía**: 6 plazas, 3 dormitorios, chimenea, balcón y vistas al río.
- **Casa Julio**: 8 plazas, 4 dormitorios, terraza, jardín, barbacoa y orientación a familias o grupos.

La aplicación no debe ser solo una web informativa. Debe funcionar como herramienta comercial para captar reservas, mostrar disponibilidad, enseñar las casas de forma inmersiva, destacar el entorno natural de Pino del Río y permitir una gestión básica desde un panel privado.

El stack elegido es:

- **Frontend**: Next.js.
- **Backend**: Elysia sobre Bun.
- **API**: oRPC.
- **Autenticación**: better-auth.
- **Base de datos**: PostgreSQL.
- **ORM**: Drizzle.
- **Monorepo**: Turborepo.
- **Package manager**: Bun.
- **Pagos**: no incluidos en esta fase.
- **Deploy**: no configurado en el comando inicial.

---

## 2. Principios generales para agentes de IA

Antes de modificar código, cualquier agente debe respetar estas reglas:

1. **No inventar requisitos**. Si falta información, dejar la implementación preparada con placeholders, comentarios `TODO` y estructuras extensibles.
2. **Mantener tipado extremo a extremo** entre Next.js, oRPC, Elysia y Drizzle.
3. **Priorizar SEO, rendimiento y accesibilidad**. La web representa un alojamiento turístico; debe cargar rápido, posicionar bien y ser fácil de usar en móvil.
4. **Separar contenido editable de lógica de aplicación**. Textos, alojamientos, puntos de interés, tarifas y reglas deben vivir en base de datos o módulos de configuración claros.
5. **No implementar pagos**. El comando genera el proyecto sin pasarela de pago. El flujo será de pre-reserva o solicitud de reserva.
6. **Diseñar primero para móvil**. La mayoría de usuarios buscarán alojamiento desde móvil.
7. **No acoplarse a un único canal externo**. Airbnb, Booking, Google Reviews, WhatsApp o calendarios iCal deben integrarse como adaptadores.
8. **Proteger el backoffice** con better-auth y roles.
9. **Registrar errores de integraciones externas** sin romper la experiencia del usuario.
10. **Mantener este documento actualizado** cuando cambien decisiones de arquitectura o alcance.

---

## 3. Estructura esperada del monorepo

La estructura exacta puede variar según la versión de `better-t-stack`, pero los agentes deben trabajar con una separación similar:

```txt
casa-rural-fontecha/
├─ apps/
│  ├─ web/                 # Next.js
│  └─ server/              # Elysia + oRPC
├─ packages/
│  ├─ db/                  # Drizzle schema, migrations, conexión PostgreSQL
│  ├─ auth/                # Configuración better-auth si el template la separa
│  ├─ shared/              # Tipos, constantes, schemas Zod, utilidades compartidas
│  └─ ui/                  # Componentes reutilizables si existe paquete UI
├─ turbo.json
├─ package.json
├─ bun.lock
└─ README.md
```

Si la estructura generada no coincide exactamente, adaptar las rutas manteniendo la misma intención:

- Código visual en `apps/web`.
- API y lógica de servidor en `apps/server`.
- Modelos Drizzle y migraciones en `packages/db`.
- Validaciones compartidas en `packages/shared`.
- Componentes reutilizables en `packages/ui` si existe.

---

## 4. Variables de entorno necesarias

Crear un archivo `.env.example` en la raíz y, si el template lo requiere, también archivos específicos por app.

```env
# General
NODE_ENV=development
APP_NAME="Casa Rural Fontecha"
APP_URL=http://localhost:3000
API_URL=http://localhost:3001

# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/casa_rural_fontecha

# Auth
BETTER_AUTH_SECRET=change-me
BETTER_AUTH_URL=http://localhost:3000

# Email
EMAIL_PROVIDER=resend
RESEND_API_KEY=
EMAIL_FROM="Casa Rural Fontecha <reservas@casaruralfontecha.com>"
EMAIL_TO_OWNER=

# WhatsApp / contacto externo
WHATSAPP_PHONE=
WHATSAPP_RESERVATION_MESSAGE_TEMPLATE="Hola, quiero consultar disponibilidad para Casa Rural Fontecha"

# iCal
ICAL_SYNC_ENABLED=false
ICAL_SYNC_CRON_SECRET=
AIRBNB_CASA_LIA_ICAL_URL=
BOOKING_CASA_LIA_ICAL_URL=
AIRBNB_CASA_JULIO_ICAL_URL=
BOOKING_CASA_JULIO_ICAL_URL=

# Google
GOOGLE_MAPS_API_KEY=
GOOGLE_REVIEWS_PLACE_ID=

# Analytics
NEXT_PUBLIC_ANALYTICS_ENABLED=false
```

Reglas:

- Nunca subir `.env`.
- Usar `.env.example` como contrato de configuración.
- Validar variables obligatorias al arrancar servidor.
- No exponer claves privadas con prefijo `NEXT_PUBLIC_`.

---

## 5. Módulos funcionales de la aplicación

La aplicación debe dividirse en los siguientes módulos.

### 5.1. Sitio público

Rutas recomendadas:

```txt
/
 /casas
 /casas/casa-lia
 /casas/casa-julio
 /disponibilidad
 /entorno
 /contacto
 /aviso-legal
 /privacidad
 /cookies
```

Objetivos:

- Presentar Casa Rural Fontecha.
- Mostrar Casa Lía y Casa Julio.
- Permitir consultar disponibilidad.
- Permitir solicitar una pre-reserva.
- Mostrar visor 360º.
- Mostrar entorno, actividades y puntos cercanos.
- Mejorar SEO local para búsquedas relacionadas con casas rurales en Pino del Río, Palencia, río Carrión y Villa Romana La Olmeda.

### 5.2. Backoffice privado

Rutas recomendadas:

```txt
/admin
/admin/login
/admin/dashboard
/admin/alojamientos
/admin/calendario
/admin/tarifas
/admin/pre-reservas
/admin/contactos
/admin/resenas
/admin/entorno
/admin/configuracion
```

Objetivos:

- Gestionar alojamientos.
- Bloquear fechas manualmente.
- Configurar temporadas y tarifas.
- Revisar solicitudes de reserva.
- Gestionar formularios de contacto.
- Moderar reseñas si se implementa libro de visitas propio.
- Gestionar puntos de interés del entorno.
- Configurar URLs iCal externas.

### 5.3. API

Agrupar procedimientos oRPC por dominio:

```txt
accommodation.*
availability.*
bookingRequest.*
contact.*
review.*
pointOfInterest.*
admin.*
ical.*
pricing.*
```

Ejemplos:

```txt
accommodation.list
accommodation.getBySlug

availability.getCalendar
availability.check
availability.blockDates
availability.unblockDates

bookingRequest.create
bookingRequest.list
bookingRequest.updateStatus

contact.create
contact.list

pricing.getEstimate
pricing.upsertSeason
pricing.upsertRateRule

ical.importCalendar
ical.syncAll
ical.listSources

review.create
review.listPublic
review.moderate

pointOfInterest.list
pointOfInterest.upsert
pointOfInterest.delete
```

---

## 6. Modelo de datos con Drizzle

Crear tablas con nombres claros y relaciones explícitas.

### 6.1. `accommodations`

Representa cada casa.

Campos recomendados:

```ts
id: uuid primary key
slug: text unique not null
name: text not null
shortDescription: text
description: text
capacity: integer not null
bedrooms: integer
bathrooms: integer
hasFireplace: boolean default false
hasGarden: boolean default false
hasBarbecue: boolean default false
hasRiverViews: boolean default false
isActive: boolean default true
sortOrder: integer default 0
createdAt: timestamp
updatedAt: timestamp
```

Datos iniciales:

- `casa-lia`
- `casa-julio`

### 6.2. `accommodation_images`

Para imágenes normales y panorámicas 360º.

```ts
id: uuid primary key
accommodationId: uuid references accommodations.id
type: enum('gallery', 'hero', '360')
url: text not null
alt: text not null
roomName: text
sortOrder: integer default 0
isActive: boolean default true
createdAt: timestamp
updatedAt: timestamp
```

### 6.3. `availability_blocks`

Bloqueos manuales, reservas externas importadas y reservas confirmadas.

```ts
id: uuid primary key
accommodationId: uuid references accommodations.id
source: enum('manual', 'airbnb', 'booking', 'direct', 'maintenance', 'owner_use')
externalUid: text
startDate: date not null
endDate: date not null
status: enum('blocked', 'confirmed', 'tentative', 'cancelled')
notes: text
createdAt: timestamp
updatedAt: timestamp
```

Regla importante:

- `startDate` es la fecha de entrada.
- `endDate` es la fecha de salida.
- La noche ocupada es desde `startDate` hasta el día anterior a `endDate`.

### 6.4. `booking_requests`

Solicitudes de pre-reserva enviadas desde la web.

```ts
id: uuid primary key
accommodationId: uuid references accommodations.id
guestName: text not null
guestEmail: text not null
guestPhone: text
startDate: date not null
endDate: date not null
guests: integer not null
estimatedPriceCents: integer
message: text
status: enum('new', 'contacted', 'accepted', 'rejected', 'cancelled')
createdAt: timestamp
updatedAt: timestamp
```

### 6.5. `contact_messages`

```ts
id: uuid primary key
name: text not null
email: text not null
phone: text
subject: text
message: text not null
status: enum('new', 'read', 'answered', 'archived')
createdAt: timestamp
updatedAt: timestamp
```

### 6.6. `pricing_seasons`

```ts
id: uuid primary key
name: text not null
startDate: date not null
endDate: date not null
priority: integer default 0
createdAt: timestamp
updatedAt: timestamp
```

Ejemplos:

- Temporada baja.
- Temporada media.
- Temporada alta.
- Semana Santa.
- Puentes.
- Navidad.
- Fines de semana.

### 6.7. `pricing_rules`

```ts
id: uuid primary key
accommodationId: uuid references accommodations.id
seasonId: uuid references pricing_seasons.id
pricePerNightCents: integer not null
weekendPricePerNightCents: integer
minNights: integer default 1
extraGuestPriceCents: integer default 0
createdAt: timestamp
updatedAt: timestamp
```

### 6.8. `ical_sources`

```ts
id: uuid primary key
accommodationId: uuid references accommodations.id
provider: enum('airbnb', 'booking', 'other')
name: text not null
url: text not null
syncDirection: enum('import_only', 'export_only', 'bidirectional')
isActive: boolean default true
lastSyncedAt: timestamp
lastSyncStatus: enum('never', 'success', 'error')
lastSyncError: text
createdAt: timestamp
updatedAt: timestamp
```

En la primera fase, implementar como mínimo `import_only`.

### 6.9. `reviews`

```ts
id: uuid primary key
accommodationId: uuid references accommodations.id
guestName: text not null
rating: integer not null
comment: text not null
photoUrl: text
source: enum('internal', 'google')
status: enum('pending', 'published', 'rejected')
createdAt: timestamp
updatedAt: timestamp
```

### 6.10. `points_of_interest`

```ts
id: uuid primary key
name: text not null
slug: text unique not null
category: enum('culture', 'nature', 'food', 'activity', 'river', 'fishing', 'family')
description: text
distanceKm: numeric
latitude: numeric
longitude: numeric
externalUrl: text
imageUrl: text
isFeatured: boolean default false
sortOrder: integer default 0
createdAt: timestamp
updatedAt: timestamp
```

Puntos iniciales:

- Villa Romana de La Olmeda.
- Río Carrión.
- Coto de pesca.
- Rutas de senderismo.
- Ruta del Románico palentino.
- Zonas de baño naturales.
- Áreas recreativas.
- Actividades de piragüismo.
- Micología de temporada.

---

## 7. Seed inicial de contenido

Crear un script de seed para desarrollo.

Contenido mínimo:

```ts
const accommodations = [
  {
    slug: "casa-lia",
    name: "Casa Lía",
    capacity: 6,
    bedrooms: 3,
    hasFireplace: true,
    hasRiverViews: true,
    shortDescription: "Casa rural para 6 personas con chimenea y balcón con vistas al río Carrión.",
  },
  {
    slug: "casa-julio",
    name: "Casa Julio",
    capacity: 8,
    bedrooms: 4,
    hasGarden: true,
    hasBarbecue: true,
    shortDescription: "Casa rural para 8 personas con amplia terraza, jardín y barbacoa.",
  },
];
```

Crear también puntos de interés y temporadas ficticias para que la interfaz pueda probarse sin depender de producción.

---

## 8. Diseño visual y UI

La propuesta visual preferente debe partir de un estilo **rústico, cálido y natural**, salvo que el cliente indique lo contrario.

### 8.1. Dirección visual

Usar:

- Tonos madera.
- Verdes bosque.
- Cremas y blancos cálidos.
- Marrones suaves.
- Fotografías grandes.
- Bordes redondeados moderados.
- Sombras suaves.
- Iconografía simple relacionada con naturaleza, descanso, chimenea, río y familia.

Evitar:

- Estética excesivamente corporativa.
- Colores saturados.
- Efectos pesados.
- Animaciones que perjudiquen rendimiento.

### 8.2. Componentes públicos

Crear componentes reutilizables:

```txt
Header
Footer
HeroSection
AccommodationCard
AccommodationFeatureList
AvailabilityWidget
BookingRequestForm
ContactForm
ReviewCard
MapSection
PointOfInterestCard
PanoramaViewer
SeoJsonLd
ImageGallery
MobileMenu
CallToAction
```

### 8.3. Componentes de admin

```txt
AdminLayout
AdminSidebar
AdminHeader
AccommodationForm
AvailabilityCalendar
ManualBlockForm
PricingSeasonForm
PricingRuleForm
BookingRequestTable
ContactMessageTable
ReviewModerationTable
IcalSourceForm
PointOfInterestForm
```

---

## 9. Páginas públicas detalladas

### 9.1. Home `/`

Debe incluir:

1. Header con navegación.
2. Hero principal:
   - Título: “Casa Rural Fontecha, junto al río Carrión”.
   - Subtítulo: “Descubre Casa Lía y Casa Julio en Pino del Río, Palencia”.
   - CTA principal: “Ver disponibilidad”.
   - CTA secundario: “Ver las casas”.
3. Tarjetas de Casa Lía y Casa Julio.
4. Bloque de visor 360º o acceso destacado.
5. Bloque de entorno:
   - Río Carrión.
   - Pesca.
   - Senderismo.
   - Villa Romana La Olmeda.
6. Reseñas o confianza.
7. CTA final de contacto.
8. Footer con datos legales y contacto.

### 9.2. Listado de casas `/casas`

Debe mostrar:

- Comparativa entre Casa Lía y Casa Julio.
- Capacidad.
- Dormitorios.
- Servicios.
- Fotos.
- Botón de detalle.
- Botón de disponibilidad.

### 9.3. Ficha `/casas/casa-lia`

Debe incluir:

- Hero con imagen.
- Galería.
- Visor 360º.
- Descripción.
- Servicios.
- Capacidad.
- Calendario de disponibilidad.
- Estimador de precio.
- Formulario de pre-reserva.
- Actividades cercanas.
- Preguntas frecuentes.

### 9.4. Ficha `/casas/casa-julio`

Igual que Casa Lía, adaptando contenido a:

- 8 plazas.
- 4 dormitorios.
- Terraza.
- Jardín.
- Barbacoa.
- Familias numerosas o grupos.

### 9.5. Disponibilidad `/disponibilidad`

Debe permitir:

- Elegir casa.
- Elegir fecha de entrada.
- Elegir fecha de salida.
- Número de huéspedes.
- Ver si está libre.
- Ver precio estimado.
- Enviar solicitud de reserva.

### 9.6. Entorno `/entorno`

Debe incluir:

- Mapa interactivo.
- Puntos de interés filtrables.
- Actividades por categoría:
  - Naturaleza.
  - Cultura.
  - Pesca.
  - Familias.
  - Gastronomía.
  - Temporada.
- Distancias aproximadas.
- Recomendaciones.

### 9.7. Contacto `/contacto`

Debe incluir:

- Formulario.
- Teléfono.
- WhatsApp.
- Email.
- Ubicación aproximada.
- Texto de privacidad.
- CTA para consultar disponibilidad.

---

## 10. Backoffice detallado

### 10.1. Autenticación

Usar better-auth.

Requisitos:

- Login para administradores.
- Protección de rutas `/admin/*`.
- Middleware en Next.js si procede.
- Validación de sesión en procedimientos oRPC privados.
- Roles:
  - `admin`
  - `owner`

Si el template no trae roles, añadir campo o tabla necesaria.

### 10.2. Dashboard `/admin/dashboard`

Mostrar:

- Solicitudes nuevas.
- Fechas próximas ocupadas.
- Errores de sincronización iCal.
- Mensajes sin leer.
- Reseñas pendientes.
- Accesos rápidos.

### 10.3. Calendario `/admin/calendario`

Permitir:

- Ver disponibilidad por casa.
- Crear bloqueo manual.
- Eliminar bloqueo manual.
- Ver origen del bloqueo:
  - manual
  - Airbnb
  - Booking
  - directo
  - mantenimiento
  - uso propio
- Lanzar sincronización iCal manual.

### 10.4. Tarifas `/admin/tarifas`

Permitir:

- Crear temporadas.
- Editar fechas de temporada.
- Configurar precio por noche por casa.
- Configurar precio especial de fin de semana.
- Configurar estancia mínima.

### 10.5. Pre-reservas `/admin/pre-reservas`

Permitir:

- Listar solicitudes.
- Filtrar por estado.
- Ver detalle.
- Cambiar estado.
- Contactar manualmente al huésped.
- Convertir una solicitud aceptada en bloqueo directo.

### 10.6. Contactos `/admin/contactos`

Permitir:

- Ver mensajes.
- Marcar como leído.
- Marcar como respondido.
- Archivar.

### 10.7. Reseñas `/admin/resenas`

Permitir:

- Ver reseñas internas pendientes.
- Publicar.
- Rechazar.
- Editar texto solo si se indica claramente que ha sido moderado.
- Preparar integración futura con Google Reviews.

### 10.8. Entorno `/admin/entorno`

Permitir:

- Crear puntos de interés.
- Editar descripción.
- Añadir distancia.
- Añadir coordenadas.
- Marcar como destacado.
- Ordenar.

---

## 11. Visor 360º

Implementar un componente `PanoramaViewer`.

Opciones recomendadas:

- Pannellum para implementación ligera.
- Three.js solo si se necesitan interacciones más avanzadas.

Requisitos:

- Carga diferida con `dynamic import` en Next.js.
- No renderizar en SSR si la librería depende de `window`.
- Mostrar placeholder mientras carga.
- Soportar varias escenas por casa:
  - Salón.
  - Habitación.
  - Galería.
  - Jardín.
  - Vistas al río.
- Soportar puntos clicables en el futuro.

Ejemplo conceptual:

```tsx
const PanoramaViewer = dynamic(() => import("./PanoramaViewer.client"), {
  ssr: false,
  loading: () => <PanoramaSkeleton />,
});
```

Validaciones:

- Si no hay imágenes 360º, mostrar galería normal.
- Cada imagen debe tener texto alternativo.
- No bloquear la carga inicial de la página.

---

## 12. Sistema de disponibilidad

### 12.1. Reglas base

Una casa está disponible si no existe ningún bloqueo que se solape con el rango solicitado.

Solape:

```ts
requestedStart < block.endDate && requestedEnd > block.startDate
```

No considerar como ocupada una reserva con estado `cancelled`.

### 12.2. Consulta de disponibilidad

Input:

```ts
{
  accommodationId: string;
  startDate: string;
  endDate: string;
  guests: number;
}
```

Validaciones:

- `startDate` debe ser anterior a `endDate`.
- `guests` debe ser mayor que 0.
- `guests` no puede superar la capacidad de la casa.
- No permitir fechas pasadas en el formulario público.
- En admin sí pueden consultarse fechas pasadas.

Output:

```ts
{
  available: boolean;
  conflicts: AvailabilityBlock[];
  estimatedPriceCents: number | null;
  minNights: number | null;
}
```

### 12.3. Calendario público

Debe mostrar:

- Días libres.
- Días ocupados.
- Rango seleccionado.
- Leyenda clara.
- Mensaje si no hay disponibilidad.

No mostrar datos sensibles del origen de cada bloqueo en público.

---

## 13. Sincronización iCal

### 13.1. Fase 1: importación

Implementar importación desde URLs externas.

Flujo:

1. Leer fuentes activas de `ical_sources`.
2. Descargar `.ics`.
3. Parsear eventos.
4. Convertir eventos a `availability_blocks`.
5. Guardar con `source` según proveedor.
6. Usar `externalUid` para evitar duplicados.
7. Marcar eventos antiguos de esa fuente que ya no aparezcan como cancelados o eliminarlos según estrategia elegida.
8. Guardar `lastSyncedAt`, `lastSyncStatus` y `lastSyncError`.

### 13.2. Seguridad

- No permitir que usuarios públicos llamen a sincronización.
- Proteger endpoint manual con sesión admin.
- Si existe cron externo, proteger con `ICAL_SYNC_CRON_SECRET`.

### 13.3. Fase futura: exportación

Preparar una ruta futura:

```txt
GET /ical/:accommodationSlug.ics
```

Debe generar un calendario iCal con reservas directas y bloqueos manuales.

---

## 14. Sistema de tarifas

### 14.1. Estimación de precio

El precio estimado debe calcularse por noche.

Reglas:

1. Dividir estancia en noches.
2. Buscar temporada aplicable por fecha.
3. Si hay varias temporadas, usar la de mayor prioridad.
4. Si es viernes o sábado, usar precio de fin de semana si existe.
5. Sumar importes.
6. Aplicar mínimo de noches si procede.
7. Devolver precio estimado.

### 14.2. Sin pagos

El precio es orientativo. El formulario debe mostrar:

> Precio estimado. La reserva quedará pendiente de confirmación por Casa Rural Fontecha.

---

## 15. Formularios

### 15.1. Formulario de pre-reserva

Campos:

- Casa.
- Fecha de entrada.
- Fecha de salida.
- Número de huéspedes.
- Nombre.
- Email.
- Teléfono.
- Mensaje.
- Consentimiento de privacidad.

Validaciones:

- Zod en frontend y backend.
- React Hook Form en frontend.
- Sanitizar textos.
- Rate limit por IP/email si es posible.
- Honeypot antispam.

Acciones al enviar:

1. Validar disponibilidad.
2. Crear `booking_request`.
3. Enviar email al propietario.
4. Opcional: generar enlace WhatsApp.
5. Mostrar confirmación al usuario.

### 15.2. Formulario de contacto

Campos:

- Nombre.
- Email.
- Teléfono opcional.
- Asunto.
- Mensaje.
- Consentimiento de privacidad.

Acciones:

1. Guardar en `contact_messages`.
2. Enviar email al propietario.
3. Mostrar confirmación.

---

## 16. Emails

Crear servicio de email desacoplado.

```txt
sendBookingRequestOwnerEmail
sendBookingRequestGuestConfirmationEmail
sendContactOwnerEmail
sendContactGuestConfirmationEmail
```

Proveedor inicial recomendado:

- Resend.

Alternativa:

- Nodemailer SMTP.

Los emails deben incluir:

- Datos del huésped.
- Casa solicitada.
- Fechas.
- Huéspedes.
- Precio estimado.
- Mensaje.
- Enlace al backoffice.

---

## 17. WhatsApp

No es necesario integrar API oficial en fase inicial.

Implementar enlaces tipo:

```txt
https://wa.me/{WHATSAPP_PHONE}?text={encodedMessage}
```

Usos:

- CTA general en header o footer.
- CTA tras comprobar disponibilidad.
- Botón en pre-reserva enviada.

---

## 18. Mapa interactivo

Opciones:

- Leaflet + OpenStreetMap.
- Google Maps si se prioriza integración con ficha de negocio.

Recomendación inicial:

- Leaflet para evitar dependencia de API key.
- Preparar abstracción para cambiar a Google Maps si el cliente lo pide.

Requisitos:

- Mostrar puntos de interés.
- Filtrar por categoría.
- Mostrar distancia aproximada.
- Mostrar enlace externo si existe.
- Funcionar correctamente en móvil.

---

## 19. SEO

### 19.1. Metadata por página

Cada página debe tener:

- `title`.
- `description`.
- Open Graph.
- Canonical.
- Imagen social si existe.

Ejemplos:

```txt
Casa Rural Fontecha | Alojamientos en Pino del Río, Palencia
Casa Lía | Casa rural para 6 personas junto al río Carrión
Casa Julio | Casa rural para 8 personas con jardín y barbacoa
Entorno | Río Carrión, La Olmeda y turismo rural en Palencia
```

### 19.2. Datos estructurados

Añadir JSON-LD:

- `LodgingBusiness`
- `Accommodation`
- `LocalBusiness`
- `FAQPage` cuando haya FAQs.

### 19.3. Contenido local

Incluir de forma natural:

- Casa rural en Pino del Río.
- Casa rural en Palencia.
- Alojamiento junto al río Carrión.
- Casa rural cerca de Villa Romana La Olmeda.
- Turismo rural en la vega del Carrión.
- Pesca en el río Carrión.
- Senderismo en Palencia.

No hacer keyword stuffing.

---

## 20. Accesibilidad

Requisitos mínimos:

- Navegación por teclado.
- Contraste suficiente.
- Texto alternativo en imágenes.
- Labels en formularios.
- Mensajes de error legibles.
- Estados `aria-invalid`.
- Botones con nombres accesibles.
- No depender solo del color para disponibilidad.
- Calendario usable en móvil.

---

## 21. Rendimiento

Requisitos:

- Usar `next/image`.
- Carga diferida de visor 360º y mapa.
- Minimizar JavaScript inicial.
- Server Components cuando tenga sentido.
- Cachear contenido público.
- Evitar librerías pesadas innecesarias.
- Optimizar imágenes antes de subirlas.
- Usar skeletons en componentes pesados.

Objetivos:

- Buen rendimiento en móvil.
- LCP optimizado en Home y fichas.
- No bloquear interacción por mapa o visor 360º.

---

## 22. Seguridad

Requisitos:

- Proteger endpoints privados.
- Validar todo input con Zod o schemas equivalentes.
- No confiar en validación del frontend.
- Rate limit en formularios públicos.
- Honeypot antispam.
- CSRF si aplica en acciones sensibles.
- Sanitizar contenido editable.
- No mostrar errores internos al usuario.
- Logs seguros sin datos sensibles innecesarios.
- Variables de entorno fuera del repositorio.

---

## 23. Testing

### 23.1. Tests unitarios

Cubrir:

- Cálculo de disponibilidad.
- Detección de solapes.
- Cálculo de precio.
- Validaciones de formularios.
- Parseo iCal.
- Conversión de eventos iCal a bloqueos.

### 23.2. Tests de integración

Cubrir:

- Crear pre-reserva.
- Consultar disponibilidad.
- Crear bloqueo manual.
- Sincronizar iCal.
- Login admin.
- Crear/editar tarifas.

### 23.3. Tests E2E recomendados

Flujos:

1. Usuario entra en Home.
2. Abre Casa Lía.
3. Consulta disponibilidad.
4. Envía pre-reserva.
5. Admin ve la solicitud.
6. Admin bloquea fechas.
7. Usuario ya no puede reservar esas fechas.

---

## 24. Comandos habituales

Ajustar según scripts generados por el template.

```bash
bun install
bun dev
bun build
bun lint
bun test
bun db:generate
bun db:migrate
bun db:studio
bun db:seed
```

Si los scripts no existen, crearlos en el `package.json` raíz o en los paquetes correspondientes.

---

## 25. Migraciones y base de datos

Como el comando usa `--db-setup none`, el agente debe preparar manualmente PostgreSQL.

Pasos esperados:

1. Crear base de datos local.
2. Configurar `DATABASE_URL`.
3. Definir schemas Drizzle.
4. Generar migraciones.
5. Ejecutar migraciones.
6. Ejecutar seed.
7. Verificar que el servidor arranca.

Ejemplo con Docker opcional:

```yaml
services:
  postgres:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: casa_rural_fontecha
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

## 26. Roadmap por fases

### Fase 1 — Base pública y contenido

- Crear páginas públicas.
- Crear modelo de alojamientos.
- Crear seed inicial.
- Crear diseño responsive.
- Crear Home.
- Crear fichas de Casa Lía y Casa Julio.
- Crear página de entorno.
- Crear contacto básico.

Criterio de aceptación:

- La web se puede navegar completa.
- El contenido principal existe.
- Mobile funciona correctamente.
- SEO básico configurado.

### Fase 2 — Disponibilidad y pre-reservas

- Crear tablas de disponibilidad.
- Crear calendario público.
- Crear comprobación de fechas.
- Crear formulario de pre-reserva.
- Crear emails.
- Crear backoffice mínimo para ver solicitudes.

Criterio de aceptación:

- Un usuario puede consultar fechas.
- Si hay conflicto, la app lo indica.
- Si no hay conflicto, puede enviar solicitud.
- El propietario recibe aviso.

### Fase 3 — Backoffice completo

- Gestión de alojamientos.
- Bloqueos manuales.
- Tarifas.
- Contactos.
- Pre-reservas.
- Puntos de interés.
- Reseñas.

Criterio de aceptación:

- El propietario puede gestionar la web sin tocar código.

### Fase 4 — iCal

- Tabla de fuentes iCal.
- Importador.
- Sincronización manual.
- Sincronización por cron protegido.
- Gestión de errores.

Criterio de aceptación:

- Fechas ocupadas de Airbnb/Booking se reflejan en la web.

### Fase 5 — Visor 360º y mapa avanzado

- Integrar Pannellum o Three.js.
- Añadir escenas por casa.
- Añadir mapa interactivo.
- Añadir filtros de puntos de interés.

Criterio de aceptación:

- El usuario puede explorar visualmente las casas y el entorno.

### Fase 6 — Optimización y salida a producción

- Revisión SEO.
- Revisión accesibilidad.
- Revisión seguridad.
- Optimización de imágenes.
- Logs.
- Backups.
- Deploy elegido.
- Dominio.
- Analítica.

Criterio de aceptación:

- Aplicación lista para uso real.

---

## 27. Tareas concretas para agentes de IA

### 27.1. Primer agente: auditoría del proyecto generado

Debe:

- Revisar estructura real del monorepo.
- Identificar scripts existentes.
- Confirmar ubicación de Next.js, Elysia, oRPC, Drizzle y better-auth.
- Crear o actualizar `.env.example`.
- Documentar diferencias respecto a esta guía.

Resultado esperado:

- PR o commit con documentación inicial y ajustes mínimos.

### 27.2. Agente de base de datos

Debe:

- Crear schemas Drizzle.
- Crear enums.
- Crear relaciones.
- Crear migraciones.
- Crear seed inicial.
- Crear utilidades de conexión.
- Añadir scripts de DB.

Resultado esperado:

- Base de datos funcional con alojamientos y contenido inicial.

### 27.3. Agente de API

Debe:

- Crear routers oRPC.
- Implementar procedimientos públicos.
- Implementar procedimientos privados.
- Añadir validación.
- Añadir manejo de errores.
- Añadir tests de disponibilidad y precios.

Resultado esperado:

- API tipada y usable desde frontend.

### 27.4. Agente de frontend público

Debe:

- Crear layout.
- Crear Home.
- Crear páginas de casas.
- Crear componentes visuales.
- Crear formulario de contacto.
- Crear formulario de pre-reserva.
- Crear calendario público.
- Configurar SEO.

Resultado esperado:

- Web pública navegable y responsive.

### 27.5. Agente de backoffice

Debe:

- Proteger rutas admin.
- Crear dashboard.
- Crear CRUDs básicos.
- Crear calendario admin.
- Crear tablas de pre-reservas y contactos.
- Añadir estados y acciones.

Resultado esperado:

- Panel privado funcional.

### 27.6. Agente de integraciones

Debe:

- Implementar email.
- Implementar iCal import.
- Implementar WhatsApp links.
- Preparar Google Reviews o integración futura.
- Registrar errores de integración.

Resultado esperado:

- Comunicaciones e importaciones externas funcionando.

### 27.7. Agente de calidad

Debe:

- Añadir tests.
- Revisar accesibilidad.
- Revisar rendimiento.
- Revisar SEO.
- Revisar errores.
- Revisar seguridad.
- Preparar checklist de producción.

Resultado esperado:

- Aplicación robusta y lista para entrega.

---

## 28. Criterios globales de aceptación

La aplicación se considera lista cuando:

- La Home presenta claramente Casa Rural Fontecha.
- Casa Lía y Casa Julio tienen ficha propia.
- El usuario puede consultar disponibilidad.
- El usuario puede enviar pre-reserva.
- El propietario recibe notificación.
- El admin puede gestionar solicitudes.
- El admin puede bloquear fechas.
- El admin puede cambiar tarifas.
- La web muestra el entorno y puntos de interés.
- La aplicación tiene SEO básico correcto.
- La aplicación funciona bien en móvil.
- El backoffice está protegido.
- La base de datos tiene migraciones y seed.
- Las integraciones fallan de forma controlada.
- Hay documentación suficiente para continuar el desarrollo.

---

## 29. Pendientes que requieren respuesta del cliente

Estos puntos no deben bloquear el desarrollo base, pero sí deben resolverse antes de producción:

1. Formato real de fotografías 360º.
2. Estilo visual definitivo:
   - Rústico y cálido.
   - Moderno y minimalista.
   - Mixto.
3. Método actual de reservas:
   - WhatsApp/teléfono.
   - Airbnb.
   - Booking.
   - AvaiBook.
   - PMS.
   - Otro.
4. Existencia de logotipo.
5. Colores corporativos.
6. Teléfono y email oficiales.
7. Enlaces a Instagram, Facebook, Google Reviews u otros.
8. Política exacta de cancelación.
9. Normas de la casa.
10. Horarios de entrada y salida.
11. Precios reales por temporada.
12. Estancia mínima.
13. Mascotas permitidas o no.
14. Servicios incluidos.
15. Textos legales definitivos.

---

## 30. Notas de implementación recomendadas

### 30.1. Tipos compartidos

No duplicar tipos manualmente entre frontend y backend.

Crear schemas compartidos:

```txt
packages/shared/src/schemas/
├─ accommodation.schema.ts
├─ availability.schema.ts
├─ booking-request.schema.ts
├─ contact.schema.ts
├─ pricing.schema.ts
└─ point-of-interest.schema.ts
```

### 30.2. Errores de dominio

Crear errores controlados:

```ts
AvailabilityConflictError
InvalidDateRangeError
CapacityExceededError
UnauthorizedAdminError
IcalSyncError
PricingRuleNotFoundError
```

### 30.3. Fechas

Usar una estrategia consistente:

- Guardar fechas de reservas como `date`.
- Evitar problemas de zona horaria en noches.
- Tratar entrada y salida como fechas locales.
- No convertir noches a timestamps UTC salvo que sea imprescindible.

### 30.4. Estado de pre-reserva

Flujo recomendado:

```txt
new -> contacted -> accepted
new -> contacted -> rejected
accepted -> cancelled
```

Cuando una pre-reserva pase a `accepted`, crear bloqueo `direct`.

---

## 31. Checklist para cada PR

Antes de terminar una tarea, el agente debe comprobar:

- [ ] El proyecto compila.
- [ ] No hay errores de tipos.
- [ ] No se han expuesto secretos.
- [ ] Los formularios validan en cliente y servidor.
- [ ] La UI funciona en móvil.
- [ ] Los textos visibles están en español.
- [ ] Los componentes tienen nombres claros.
- [ ] La lógica de negocio está testeada si procede.
- [ ] Las rutas admin están protegidas.
- [ ] Las consultas de DB están tipadas.
- [ ] Los estados de carga y error existen.
- [ ] La documentación se actualizó si cambió algo importante.

---

## 32. Resumen ejecutivo para agentes

Construir una web turística moderna para Casa Rural Fontecha con Next.js, Elysia, Bun, oRPC, better-auth, PostgreSQL y Drizzle.

La prioridad no es solo mostrar información, sino convertir visitas en solicitudes de reserva.

Orden recomendado:

1. Base de datos.
2. Contenido inicial.
3. Web pública.
4. Disponibilidad.
5. Pre-reservas.
6. Backoffice.
7. iCal.
8. Visor 360º.
9. Mapa.
10. Optimización final.

Todo debe quedar preparado para que el propietario pueda gestionar fechas, precios, solicitudes y contenido sin depender de cambios en código.
