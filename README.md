# Micrositios CVA

Repositorio Astro para micrositios por marca y por plan, con renderizado orientado a configuración. El proyecto concentra contenido, rutas, theming y assets de marcas como Dell, Huawei y Lenovo dentro de una sola base mantenible.

## Resumen

- Micrositios generados por marca desde configuración central.
- Soporte para planes `professional`, `business` y `premium`.
- Rutas de detalle por producto con `getStaticPaths` basadas en registro/config.
- Componentes y layouts compartidos con variantes por plan.

## Requisitos

- Node.js `>= 22.12.0`
- npm

## Scripts

Ejecuta los comandos desde la raíz del proyecto.

| Comando                   | Descripción                    |
| :------------------------ | :----------------------------- |
| `npm install`             | Instala dependencias           |
| `npm run dev`             | Levanta el entorno local       |
| `npm run build`           | Genera el build de producción  |
| `npm run preview`         | Sirve el build generado        |
| `npm run astro -- --help` | Muestra ayuda del CLI de Astro |

## Estructura relevante

```text
src/
	assets/microsites/
		<brand>/                Assets por marca
	components/sections/microsites/
		config/                 Dominio, registro de marcas y configs
		plans/                  Renderers y componentes por plan
		templates/              Plantillas compartidas
	layouts/
		MicrositeLayout.astro   Layout base de micrositios
	pages/micrositios/
		<brand>/                Entradas de rutas por marca
```

## Arquitectura

La implementación actual se apoya en cuatro piezas:

1. `config/domain.ts`: define planes oficiales, capacidades por plan, páginas y secciones soportadas.
2. `config/brands.ts`: registra marcas activas, estado de publicación, plan, páginas habilitadas y clave de configuración.
3. `config/config-by-plan/*.config.ts`: declara el contenido y la personalización por marca según el plan.
4. `plans/`: resuelve la renderización por plan usando componentes compartidos y especializados.

## Flujo de trabajo

Para añadir o mantener una marca, el flujo esperado es:

1. Cargar assets en `src/assets/microsites/<marca>/`.
2. Crear o actualizar la configuración en `src/components/sections/microsites/config/config-by-plan/`.
3. Registrar la marca en `src/components/sections/microsites/config/brands.ts`.
4. Verificar páginas habilitadas, slugs de detalle y navegación.
5. Ejecutar `npm run build` para validar rutas y render.

## Documentación interna

- El documento técnico y de seguimiento del módulo vive en `src/components/sections/microsites/README.md`.
- La convención de nombres de assets vive en `src/assets/microsites/ASSETS_NAMING_CONVENTION.md`.

## Estado actual

El proyecto ya opera como módulo extraído y funcional. El trabajo pendiente está centrado en consolidar el registro central como fuente única de verdad, seguir moviendo theming a tokens semánticos y añadir validación automática de configuración.
