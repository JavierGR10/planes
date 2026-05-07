# AGENTS

## Project Scope

- Astro 6 microsites project with brand-specific sites generated from centralized configuration.
- Runtime baseline: Node.js >= 22.12.0.
- Use the `@/` alias for imports from `src`.

## Runbook

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Build for validation: `npm run build`
- Preview production build: `npm run preview`

## Read First

- [README.md](./README.md) for project overview, scripts, and the high-level brand onboarding flow.
- [src/components/sections/microsites/README.md](./src/components/sections/microsites/README.md) for the current domain status, migration direction, and architectural debt.
- [src/assets/microsites/ASSETS_NAMING_CONVENTION.md](./src/assets/microsites/ASSETS_NAMING_CONVENTION.md) for asset structure and naming rules.

## Source Of Truth

- `src/components/sections/microsites/config/domain.ts` defines official plan IDs, page IDs, section IDs, and plan capabilities.
- `src/components/sections/microsites/config/brands.ts` is the central brand registry for `slug`, `plan`, `status`, `configKey`, and `enabledPages`.
- `src/components/sections/microsites/config/brand-configs.ts` maps registry entries to brand configs and generates detail routes.
- `src/components/sections/microsites/config/config-by-plan/*.config.ts` contains brand content, assets, navigation, theming, and detail data.
- `src/components/sections/microsites/plans/` contains renderers and components by plan. Shared building blocks live under `plans/components` and `templates`.

## Working Rules

- Prefer config and registry changes over duplicating route logic or adding brand-specific page variants.
- Keep route files under `src/pages/micrositios/*` thin. If behavior is repeated across brands, move it into config helpers, shared plan components, or layouts.
- Treat `professional`, `business`, and `premium` as the only valid plan IDs. Do not reintroduce `premier`.
- Keep the brand registry and `enabledPages` aligned with actual available config and routes.
- Put brand content and product detail data in config files, not hardcoded in Astro route files.
- Preserve existing Spanish content and documentation style unless the task explicitly requires a language change.

## Brand Changes

- For a new or updated brand, follow this order: assets, brand config, brand registry, enabled pages/detail slugs, then build validation.
- When modifying detail pages, check whether the data lives at the root config level or under `sections.productDetails`; `brand-configs.ts` supports both shapes.
- Use the asset naming convention document before adding new images or reorganizing brand folders.

## Validation Expectations

- Run `npm run build` after changes to routes, brand configs, registry entries, or plan components.
- Use `npm run dev` only when interactive UI verification is needed.
- If a change affects detail routing, verify the generated paths still come from `getBrandDetailStaticPaths` instead of custom per-page logic.# AGENTS

## Alcance

Estas instrucciones aplican a todo el workspace. Este repositorio es un proyecto Astro orientado a micrositios por marca y por plan. La mayor parte del comportamiento debe resolverse desde configuración, no desde rutas o componentes duplicados por marca.

## Comandos

- Requiere Node.js `>= 22.12.0`.
- Instalar dependencias: `npm install`
- Desarrollo: `npm run dev`
- Build de validación: `npm run build`
- Preview: `npm run preview`

Usa `npm run build` como validación por defecto después de cambios en configs, rutas, assets o componentes de micrositios. No hay scripts de lint o test definidos en `package.json`.

## Puntos de control

- Dominio y capacidades por plan: `src/components/sections/microsites/config/domain.ts`
- Registro central de marcas activas: `src/components/sections/microsites/config/brands.ts`
- Resolución de configs y `getStaticPaths` de detalle: `src/components/sections/microsites/config/brand-configs.ts`
- Configuración por marca: `src/components/sections/microsites/config/config-by-plan/*.config.ts`
- Renderers por plan: `src/components/sections/microsites/plans/*/*Plan.astro`
- Rutas de marca: `src/pages/micrositios/*`

Cuando una página de marca solo envuelve un renderer de plan, haz el cambio en la config, en el registro o en el renderer antes de tocar la ruta.

## Convenciones del proyecto

- Mantén el enfoque config-driven. Para nuevas marcas o cambios de contenido, prioriza `config-by-plan/*.config.ts` y `brands.ts`.
- El único identificador oficial del plan premium es `premium`. No reintroduzcas `premier`.
- Mantén sincronizados `PLAN_CAPABILITIES`, `enabledPages` del registro y las secciones realmente disponibles en la config de la marca.
- Las rutas de detalle dependen de `productDetails` y de `enabledPages`. Slugs faltantes o inconsistentes rompen el build.
- Usa imports con alias `@/` para código y assets bajo `src/`.
- Los assets de micrositios viven en `src/assets/microsites/<marca>/...` y deben seguir kebab-case. Consulta [src/assets/microsites/ASSETS_NAMING_CONVENTION.md](src/assets/microsites/ASSETS_NAMING_CONVENTION.md).
- Evita hardcodear contenido de marca en `src/pages/micrositios/**`; el contenido debe vivir en la config de la marca.
- Si un ajuste es visual, prefiere tokens semánticos de theme antes que clases utilitarias o colores hardcodeados en componentes/configs.

## Flujo recomendado

1. Identifica la marca y el plan en `brands.ts`.
2. Revisa la config de la marca en `config-by-plan/`.
3. Si el cambio afecta capacidades o páginas disponibles, ajusta también `domain.ts` y el registro.
4. Si el cambio es de render, modifica el renderer del plan o el componente compartido más cercano.
5. Ejecuta `npm run build`.

## Documentación existente

- Resumen del proyecto: [README.md](README.md)
- Estado técnico y deuda del módulo de micrositios: [src/components/sections/microsites/README.md](src/components/sections/microsites/README.md)

No dupliques estas guías dentro de nuevas instrucciones. Enlázalas cuando necesites más detalle.