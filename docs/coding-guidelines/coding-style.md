# Guía de Estilo de Código — Casa Rural Fontecha

Convenciones de estilo y notación para este proyecto. El stack es **Next.js + Elysia + oRPC + Drizzle + better-auth**, monorepo gestionado con Turborepo y **Bun** como runtime y package manager.

---

## Formato General

- **Indentación**: 2 espacios (no tabs)
- **Ancho de línea**: máximo 120 caracteres
- **Puntos y comas**: solo cuando sean necesarios por la sintaxis
- **Comillas**: simples (`'`) para strings

```typescript
// ✅ Correcto
const name = 'Casa Lía'
const path = '/casas/casa-lia'

// ❌ Incorrecto
const name = "Casa Lía";
const path = "/casas/casa-lia";
```

---

## TypeScript

### Inferencia de tipos

No especificar tipos cuando TypeScript puede inferirlos. Sí especificarlos cuando no puede.

```typescript
// ✅ Correcto
const slug = 'casa-lia'
const capacity = 6
const accommodations = [casaLia, casaJulio]

// ❌ Incorrecto
const slug: string = 'casa-lia'
const capacity: number = 6
```

```typescript
// ✅ Necesario especificarlo
const data: unknown = await fetchData()
const result: string | null = getValue()
const items: Accommodation[] = []
function process(data: BookingRequest) { ... }
```

### `as const`, `type` y enums

```typescript
// Usar as const para literales que no cambian
const HOUSES = ['casa-lia', 'casa-julio'] as const

// Preferir type sobre interface para alias
export type AccommodationSlug = 'casa-lia' | 'casa-julio'

// Enums siempre con valor explícito
enum BookingStatus {
  Pending = 'pending',
  Confirmed = 'confirmed',
  Cancelled = 'cancelled',
}
```

### Parámetros de función

- Parámetros con valor por defecto siempre al final
- No reasignar parámetros directamente

```typescript
// ✅ Correcto
function getPrice(nights: number, discount = 0) {
  return nights * 100 * (1 - discount)
}

// ❌ Incorrecto
function getPrice(discount = 0, nights: number) { ... }
```

---

## Nomenclatura

| Elemento | Convención |
|---|---|
| Variables y funciones | `camelCase` |
| Tipos, interfaces, clases | `PascalCase` |
| Constantes globales inmutables | `SCREAMING_SNAKE_CASE` |
| Archivos y carpetas | `kebab-case` |

```typescript
// ✅ Correcto
const bookingRequest = await getBooking(id)
type BookingRequest = { id: string; guestName: string }
const MAX_GUESTS = 8

// Archivos: casa-lia-card.tsx, booking-form.tsx, use-availability.ts
```

---

## React / Next.js

### Estructura de componentes

- `export default` para el componente principal del archivo
- `'use client'` al inicio cuando el componente necesita interactividad
- Elementos JSX auto-cerrados siempre que sea posible

```typescript
'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [guests, setGuests] = useState(2)

  return (
    <form>
      <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
    </form>
  )
}
```

### Componentes UI — shadcn/ui

El proyecto usa **shadcn/ui** (con Base UI + Tailwind) como librería de componentes. Antes de crear un componente personalizado, verificar si shadcn/ui ya proporciona uno equivalente.

```typescript
// ✅ Correcto — usar componentes de @casa-rural-fontecha/ui
import { Button } from '@casa-rural-fontecha/ui/components/button'
import { Input } from '@casa-rural-fontecha/ui/components/input'
import { Card, CardContent } from '@casa-rural-fontecha/ui/components/card'
```

**Componentes disponibles en shadcn/ui** (añadir con `bunx shadcn add <nombre>`):
- **Formularios**: `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Slider`, `Calendar`
- **Botones**: `Button`, `Toggle`
- **Datos**: `Table`, `Badge`
- **Paneles**: `Card`, `Accordion`, `Tabs`, `Sheet`, `Collapsible`
- **Overlay**: `Dialog`, `AlertDialog`, `Popover`, `Tooltip`, `DropdownMenu`
- **Feedback**: `Sonner` (toasts), `Progress`, `Skeleton`
- **Otros**: `Avatar`, `Separator`, `ScrollArea`, `Pagination`

**Cuándo crear componentes propios**:
- Cuando necesites combinar varios componentes de shadcn/ui en un bloque reutilizable del proyecto (ej: `AccommodationCard`, `CalendarPicker`)
- Cuando el componente sea específico del dominio (ej: `BookingStatusBadge`, `HouseGallery`)
- Cuando no exista equivalente en shadcn/ui

### Clases Tailwind

Mantener las clases ordenadas y legibles. Usar `cn()` (de `@casa-rural-fontecha/ui/lib/utils`) para combinarlas condicionalmente.

```typescript
import { cn } from '@casa-rural-fontecha/ui/lib/utils'

<div className={cn('flex items-center gap-2 px-4 py-2', isActive && 'bg-primary text-white')}>
```

---

## Imports

- Usar path aliases configurados (`@/` dentro de cada app)
- Agrupar imports sin separación forzada por tipo

```typescript
// ✅ Correcto
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { Button } from '@casa-rural-fontecha/ui/components/button'
import { orpcClient } from '@/lib/orpc'
import type { Accommodation } from '@casa-rural-fontecha/db'
```

---

## Control de Flujo

- Siempre usar llaves `{}` en bloques de control, nunca inline
- Separar bloques consecutivos con una línea en blanco
- Evitar `else` cuando el `if` termina con `return`

```typescript
// ✅ Correcto
if (isAvailable) {
  return showBookingForm()
}

return showUnavailableMessage()

// ❌ Incorrecto
if (isAvailable) return showBookingForm()
else return showUnavailableMessage()
```

### Condiciones explícitas

No usar valores no booleanos directamente como condición.

```typescript
// ✅ Correcto
if (name !== '') { ... }
if (count > 0) { ... }
if (user != null) { ... }

// ❌ Incorrecto
if (name) { ... }
if (count) { ... }
if (user) { ... }
```

No usar `?.` ni `??` innecesarios cuando TypeScript sabe que el valor no puede ser `null`/`undefined`.

---

## Declaraciones de Variables

Una variable por declaración.

```typescript
// ✅ Correcto
const name = 'Casa Lía'
const capacity = 6

// ❌ Incorrecto
const name = 'Casa Lía', capacity = 6
```

---

## Base de Datos (Drizzle ORM)

- Nombres de tablas en `snake_case` en la BD, en `camelCase` como variable en código
- Columnas en `snake_case` en la BD, en `camelCase` en el schema

```typescript
export const accommodations = pgTable('accommodations', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  capacity: integer('capacity').notNull(),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
```

---

## API (oRPC + Elysia)

### Routers

Organizar procedimientos por dominio. Exportar siempre el router y su tipo.

```typescript
// packages/api/src/routers/accommodation.ts
export const accommodationRouter = {
  list: publicProcedure.handler(async () => {
    return db.select().from(accommodations).where(eq(accommodations.isActive, true))
  }),
  getBySlug: publicProcedure.input(z.object({ slug: z.string() })).handler(async ({ input }) => {
    return db.query.accommodations.findFirst({ where: eq(accommodations.slug, input.slug) })
  }),
}

export type AccommodationRouter = typeof accommodationRouter
```

### Contexto

```typescript
export type Context = Awaited<ReturnType<typeof createContext>>

export async function createContext({ context }: CreateContextOptions) {
  const session = await auth.api.getSession({ headers: context.request.headers })
  return { session }
}
```

---

## Comentarios

- Solo comentar lógica no obvia, decisiones de diseño o advertencias
- Nunca comentar lo que el código ya dice claramente
- Idioma: español para este proyecto

```typescript
// ✅ Correcto
// iCal de Airbnb marca ocupaciones con VEVENT status=CONFIRMED; ignorar TENTATIVE
if (event.status !== 'CONFIRMED') {
  continue
}

// ❌ Incorrecto
// Comprobamos si el status es CONFIRMED
if (event.status !== 'CONFIRMED') { ... }
```

---

## Comandos del proyecto

```bash
# Arrancar todo en desarrollo
bun run dev

# Solo frontend / solo servidor
bun run dev:web
bun run dev:server

# Formato de código (Prettier)
bun run format          # aplicar formato a todos los archivos
bun run format:check    # verificar sin modificar (útil en CI)

# Verificar tipos (en toda la monorepo)
bun run check-types

# Base de datos
bun run db:generate   # generar migración
bun run db:migrate    # aplicar migración
bun run db:push       # push directo (solo desarrollo)
bun run db:studio     # abrir Drizzle Studio
```

### Configuración de Prettier

El proyecto incluye `.prettierrc` en la raíz con estas opciones:

| Opción | Valor | Motivo |
|---|---|---|
| `semi` | `false` | Sin punto y coma |
| `singleQuote` | `true` | Comillas simples |
| `printWidth` | `120` | Ancho de línea máximo |
| `tabWidth` | `2` | 2 espacios |
| `trailingComma` | `"all"` | Coma final en multilínea |

Configurar el editor para que ejecute Prettier al guardar (`formatOnSave`). En VS Code / Cursor añadir en `settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## Mensajes de Commit

- Asunto en inglés, máximo ~50 caracteres, imperativo sin punto final
- Sin prefijo de tipo (`feat:`, `fix:`, etc.) — el tipo lo da el nombre de la rama
- Cuerpo opcional: explicar qué y por qué, no el cómo

```text
✅ Correcto
Add availability calendar to booking form
Fix iCal sync when Airbnb returns empty feed
Update accommodation schema to include bedrooms count

❌ Incorrecto
feat: add availability calendar
Fixed iCal sync.
chore: update schema
```

---

## Notas

- Mantener consistencia con el código existente
- Esta guía se actualiza cuando cambian decisiones de arquitectura
- Ante la duda, leer la [Guía de Agentes IA](../../GUIA_AGENTES_IA_CASA_RURAL_FONTECHA.md) para contexto del dominio
