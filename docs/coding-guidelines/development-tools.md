# Herramientas de Desarrollo — Casa Rural Fontecha

Resumen de las herramientas, convenciones y flujo de trabajo para desarrollar en este proyecto. Para reglas de estilo de código (indentación, nombres, patrones TypeScript, etc.), ver [coding-style.md](./coding-style.md). Para contexto de dominio y arquitectura, ver [GUIA_AGENTES_IA_CASA_RURAL_FONTECHA.md](../../GUIA_AGENTES_IA_CASA_RURAL_FONTECHA.md).

---

## Stack y entorno

| Herramienta | Uso |
|---|---|
| **Bun** (`1.3.x`) | Runtime y gestor de paquetes (`packageManager` en `package.json`) |
| **Turborepo** | Orquestación del monorepo: builds, dev, tareas en caché |
| **TypeScript** (`^6`) | Tipado en todo el repositorio |
| **Workspaces** | `apps/*` y `packages/*` con catálogo de dependencias compartidas |

### Estructura del monorepo

```txt
casa-rural-fontecha/
├── apps/
│   ├── web/          # Frontend Next.js (puerto 3001)
│   └── server/       # Backend Elysia + oRPC (puerto 3000)
├── packages/
│   ├── api/          # Lógica de API / procedimientos oRPC
│   ├── auth/         # Configuración better-auth
│   ├── config/       # tsconfig base compartido
│   ├── db/           # Drizzle ORM, schema y migraciones
│   ├── env/          # Variables de entorno validadas con Zod
│   └── ui/           # Componentes shadcn/ui compartidos
├── docs/             # Documentación del proyecto
├── eslint.config.js  # Configuración ESLint (flat config)
├── .prettierrc       # Configuración Prettier
├── turbo.json        # Tareas Turborepo
└── package.json      # Scripts raíz
```

---

## Comandos principales

Todos los comandos se ejecutan desde la raíz con **Bun**:

```bash
# Desarrollo
bun run dev              # Arranca web + server
bun run dev:web          # Solo Next.js
bun run dev:server       # Solo Elysia

# Calidad de código
bun run format           # Aplicar Prettier a todo el repo
bun run format:check     # Verificar formato sin modificar (CI)
bun run lint             # Ejecutar ESLint
bun run lint:fix         # ESLint con corrección automática
bun run check-types      # Verificar tipos TypeScript (Turbo)

# Build
bun run build            # Compilar todos los paquetes

# Base de datos (Drizzle)
bun run db:push          # Push de schema (solo desarrollo)
bun run db:generate      # Generar migración
bun run db:migrate       # Aplicar migraciones
bun run db:studio        # Abrir Drizzle Studio
```

---

## Prettier — formato de código

Prettier unifica el estilo visual del código. La configuración está en `.prettierrc` en la raíz:

| Opción | Valor |
|---|---|
| `semi` | `false` — sin punto y coma |
| `singleQuote` | `true` — comillas simples |
| `printWidth` | `120` — ancho máximo de línea |
| `tabWidth` | `2` — indentación de 2 espacios |
| `useTabs` | `false` |
| `trailingComma` | `"all"` |
| `arrowParens` | `"always"` |

### Archivos ignorados

`.prettierignore` excluye directorios generados (`node_modules`, `.next`, `dist`, `.turbo`), archivos de entorno (`.env*`), migraciones SQL y **archivos Markdown** (`*.md`).

### Editor (VS Code / Cursor)

Configurar formato al guardar:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## ESLint — linter

ESLint analiza el código en busca de errores, malas prácticas y problemas específicos de React/Next.js. La configuración usa el **flat config** de ESLint 10 en `eslint.config.js`.

### Qué incluye

- **`@eslint/js` recommended** — reglas base de JavaScript
- **`typescript-eslint` recommended** — reglas para TypeScript con `projectService` (type-aware)
- **`eslint-config-prettier`** — desactiva reglas de ESLint que chocan con Prettier
- **`eslint-config-next` (core-web-vitals)** — reglas de Next.js solo en `apps/web/**`

### Reglas personalizadas

- `@typescript-eslint/no-unused-vars`: error, ignorando variables y argumentos que empiecen por `_`

### Archivos ignorados

`node_modules`, `.next`, `dist`, `.turbo`, `out`, `build`, `apps/web/next-env.d.ts` y `bun.lock`.

### Relación Prettier ↔ ESLint

Prettier se encarga del **formato** (espacios, comillas, saltos de línea). ESLint se encarga de la **calidad y corrección** del código. `eslint-config-prettier` evita solapamientos entre ambos.

---

## TypeScript — verificación de tipos

La configuración base compartida está en `packages/config/tsconfig.base.json` con opciones estrictas:

- `strict: true`
- `noUncheckedIndexedAccess`
- `noUnusedLocals` / `noUnusedParameters`
- `verbatimModuleSyntax`
- `isolatedModules`

El script `bun run check-types` ejecuta Turborepo sobre los paquetes que definen la tarea (`apps/server`, `packages/ui`, etc.).

### Variables de entorno tipadas

El paquete `@casa-rural-fontecha/env` valida las variables con **Zod** y `@t3-oss/env-core` / `@t3-oss/env-nextjs`. Los esquemas están en `packages/env/src/`. Si falta o es inválida una variable requerida, la aplicación falla al arrancar en lugar de propagar `undefined`.

---

## CodeGraph — grafo de conocimiento del código

El proyecto incluye la carpeta `.codegraph/` para indexar el repositorio y ofrecer **contexto estructural** a agentes de IA (Cursor, Claude Code, etc.) mediante MCP.

### Qué hace

CodeGraph analiza el código (símbolos, imports, cadenas de llamadas, relaciones entre archivos) y almacena un índice local. Los agentes pueden consultarlo para navegar el código con más precisión que con búsquedas de texto plano.

### Carpeta `.codegraph/`

Contiene datos locales generados por la herramienta (base de datos, caché, logs). El `.gitignore` interno excluye:

- `*.db`, `*.db-wal`, `*.db-shm` — base de datos del índice
- `cache/` — caché de indexación
- `*.log` — logs
- `.dirty` — marcador de reindexación pendiente

Estos archivos son **locales a cada máquina** y no deben versionarse.

### Uso típico

1. Instalar CodeGraph en el sistema (CLI o extensión según la variante utilizada).
2. Indexar el proyecto: `codegraph init` o `codegraph index .` (según la herramienta).
3. Configurar el servidor MCP en Cursor (`~/.cursor/mcp.json`) para que los agentes accedan al grafo.

Si el índice está desactualizado tras cambios grandes, reindexar el proyecto.

---

## Turborepo — orquestación

`turbo.json` define las tareas del monorepo:

| Tarea | Descripción |
|---|---|
| `build` | Depende de `^build` (paquetes upstream primero). Outputs: `dist/**`, `.next/**` |
| `lint` | Depende de `^lint` |
| `check-types` | Depende de `^check-types` |
| `dev` | Sin caché, persistente |
| `db:*` | Tareas de base de datos sin caché |

Turborepo paraleliza tareas y reutiliza caché entre ejecuciones.

---

## Base de datos (Drizzle)

- **ORM**: Drizzle con PostgreSQL
- **Schema y migraciones**: `packages/db/`
- **CLI**: `drizzle-kit` (scripts `db:push`, `db:generate`, `db:migrate`, `db:studio`)
- En desarrollo se puede usar `db:push` para sincronizar el schema sin migración formal; en producción, preferir `db:generate` + `db:migrate`

---

## Flujo de trabajo recomendado

Antes de abrir un PR o terminar una tarea:

```bash
bun run format          # o format:check en CI
bun run lint
bun run check-types
bun run build           # opcional, para verificar compilación completa
```

### Commits

Ver la sección de mensajes de commit en [coding-style.md](./coding-style.md): asunto en inglés, imperativo, sin prefijos `feat:`/`fix:`.

### Hooks de Git

Actualmente **no hay** husky, lint-staged ni pre-commit hooks configurados. La verificación de calidad es manual o vía CI.

---

## Documentación relacionada

| Documento | Contenido |
|---|---|
| [coding-style.md](./coding-style.md) | Convenciones de estilo, nombres, patrones TypeScript/React |
| [GUIA_AGENTES_IA_CASA_RURAL_FONTECHA.md](../../GUIA_AGENTES_IA_CASA_RURAL_FONTECHA.md) | Dominio del negocio, arquitectura y guía para agentes IA |
| [README.md](../../README.md) | Instalación, primeros pasos y scripts básicos |

---

## Resumen rápido

| Necesidad | Herramienta | Comando |
|---|---|---|
| Formatear código | Prettier | `bun run format` |
| Detectar errores y malas prácticas | ESLint | `bun run lint` |
| Verificar tipos | TypeScript | `bun run check-types` |
| Contexto para IA | CodeGraph | Indexar con CLI + MCP en Cursor |
| Arrancar en local | Turborepo + Bun | `bun run dev` |
| Validar env | Zod + t3-env | Automático al importar `@casa-rural-fontecha/env` |
