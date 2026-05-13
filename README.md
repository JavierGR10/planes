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

## Imágenes Responsive En Hero Y Carousel

Los planes ya soportan imágenes responsive para banners de hero y carousel sin romper la configuración actual. Si una entrada sigue declarando solo `image` o `backgroundImage`, el render mantiene el comportamiento existente. Si además se declara una variante responsive, el componente resuelve este orden:

1. `desktop` para `min-width: 1200px`
2. `tablet` para `min-width: 775px`
3. `mobile` como imagen base

El shape compartido vive en `src/components/sections/microsites/plans/shared.types.ts`.

```ts
responsiveImage: {
	mobile: {
		image: BannerMobile.src,
		alt: 'Banner mobile',
	},
	tablet: {
		image: BannerTablet.src,
		alt: 'Banner tablet',
	},
	desktop: {
		image: BannerDesktop.src,
		alt: 'Banner desktop',
	},
}
```

### Uso En `professional`

Dentro de `sections.hero.banners`:

```ts
hero: {
	banners: [
		{
			image: BannerHeroMobile.src,
			alt: 'Banner principal Dell',
			responsiveImage: {
				mobile: {
					image: BannerHeroMobile.src,
					alt: 'Banner principal Dell mobile',
				},
				tablet: {
					image: BannerHeroTablet.src,
					alt: 'Banner principal Dell tablet',
				},
				desktop: {
					image: BannerHeroDesktop.src,
					alt: 'Banner principal Dell desktop',
				},
			},
		},
	],
}
```

### Uso En `business` Y `premium` Con `with-slider`

Dentro de `sections.heroes` y luego en `banners`:

```ts
{
	type: 'with-slider',
	gradient: 'linear-gradient(90deg, #1F242D 0%, #313741 100%)',
	title: 'Tecnología que se adapta a ti',
	subtitle: 'Redefinición del rendimiento para flujos de trabajo exigentes.',
	banners: [
		{
			name: 'Latitude',
			subtitle: 'Portabilidad y rendimiento',
			image: LatitudeMobile.src,
			responsiveImage: {
				mobile: { image: LatitudeMobile.src, alt: 'Latitude mobile' },
				tablet: { image: LatitudeTablet.src, alt: 'Latitude tablet' },
				desktop: { image: LatitudeDesktop.src, alt: 'Latitude desktop' },
			},
		},
	],
	buttonText: 'Conoce nuestros modelos',
	buttonHref: '/micrositios/dell/laptop-dell',
}
```

### Uso En `business` Y `premium` Con Imagen Simple

Para heroes tipo `simple`, la imagen lateral usa `responsiveImage`:

```ts
{
	type: 'simple',
	gradient: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
	title: 'Productividad en movimiento',
	subtitle: 'Equipos listos para trabajo híbrido',
	description: 'Una línea pensada para rendimiento y autonomía.',
	image: LaptopMobile.src,
	responsiveImage: {
		mobile: { image: LaptopMobile.src, alt: 'Laptop mobile' },
		tablet: { image: LaptopTablet.src, alt: 'Laptop tablet' },
		desktop: { image: LaptopDesktop.src, alt: 'Laptop desktop' },
	},
	buttonText: 'Ver equipos',
	buttonHref: '/micrositios/dell/productos',
}
```

### Uso En `business` Y `premium` Con Fondo

Para heroes tipo `image-background`, la variante responsive se declara con `responsiveBackgroundImage`:

```ts
{
	type: 'image-background',
	backgroundImage: HeroBgMobile.src,
	responsiveBackgroundImage: {
		mobile: {
			image: HeroBgMobile.src,
			alt: 'Fondo promocional mobile',
		},
		tablet: {
			image: HeroBgTablet.src,
			alt: 'Fondo promocional tablet',
		},
		desktop: {
			image: HeroBgDesktop.src,
			alt: 'Fondo promocional desktop',
		},
	},
	title: 'Soluciones empresariales',
	subtitle: 'Infraestructura lista para crecer',
	buttonText: 'Explorar',
	buttonHref: '/micrositios/dell/nosotros',
}
```

### Reglas Prácticas

- Mantén `image` o `backgroundImage` aunque uses la variante responsive; hoy siguen siendo el fallback oficial.
- Si declaras `responsiveImage`, el nodo `mobile` es obligatorio.
- `tablet` y `desktop` son opcionales.
- El `alt` por variante es opcional; si no existe, el render cae al `alt` o texto base disponible.
- En `business` y `premium`, la miniatura del slider y la imagen principal reutilizan el mismo `responsiveImage`.

## Documentación interna

- El documento técnico y de seguimiento del módulo vive en `src/components/sections/microsites/README.md`.
- La convención de nombres de assets vive en `src/assets/microsites/ASSETS_NAMING_CONVENTION.md`.

## Estado actual

El proyecto ya opera como módulo extraído y funcional. El trabajo pendiente está centrado en consolidar el registro central como fuente única de verdad, seguir moviendo theming a tokens semánticos y añadir validación automática de configuración.
