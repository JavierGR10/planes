# Convención de Nomenclatura para Assets de Micrositios

Este documento define el estándar para nombrar y organizar los recursos visuales de cada micrositio.

---

## Estructura de Carpetas

```
src/assets/microsites/{marca}/
├── logos/
│   ├── logo-header.png
│   └── logo-footer.png
├── index/
│   ├── hero-slide-{producto}.png
│   ├── banner-featured.png
│   ├── banner-featured-product.png
│   ├── catalogue-preview.png
│   └── event-{numero|nombre}.png
└── details/
    └── {producto}/
        ├── hero-banner.png
        ├── product-main.png
        ├── banner-secondary.png
        └── feature-{nombre}.png
```

---

## Patrón de Nomenclatura

```
{seccion}-{elemento}-{variante?}.{ext}
```

| Componente | Descripción              | Ejemplos                                     |
| ---------- | ------------------------ | -------------------------------------------- |
| `seccion`  | Dónde se usa el recurso  | `hero`, `banner`, `feature`, `event`, `logo` |
| `elemento` | Qué representa           | `slide`, `product`, `preview`, `main`        |
| `variante` | Diferenciador (opcional) | nombre del producto, número, descripción     |

---

## Reglas Generales

1. **Usar kebab-case**: `hero-slide-legion.png` ✅ | `heroSlideLegion.png` ❌
2. **Sin redundancia de marca**: La carpeta ya indica la marca
3. **Nombres descriptivos**: `banner-featured.png` ✅ | `banner1.png` ❌
4. **Evitar números genéricos**: Usar nombres cuando sea posible

---

## Ejemplos por Sección

### Logos (`/logos/`)

| Archivo           | Uso            |
| ----------------- | -------------- |
| `logo-header.png` | Logo en navbar |
| `logo-footer.png` | Logo en footer |

### Index (`/index/`)

| Archivo                       | Uso                                     |
| ----------------------------- | --------------------------------------- |
| `hero-slide-{producto}.png`   | Slides del carousel en hero             |
| `banner-featured.png`         | Banner destacado de producto            |
| `banner-featured-product.png` | Imagen del producto en banner destacado |
| `catalogue-preview.png`       | Preview del catálogo                    |
| `event-{1,2,3}.png`           | Imágenes de eventos                     |

### Details (`/details/{producto}/`)

| Archivo                | Uso                                       |
| ---------------------- | ----------------------------------------- |
| `hero-banner.png`      | Banner principal de la página de detalles |
| `product-main.png`     | Imagen principal del producto             |
| `banner-secondary.png` | Segundo banner de la página               |
| `feature-{nombre}.png` | Imágenes para el grid de características  |

---

## Imports en TypeScript

Nombrar los imports de forma que indiquen su ubicación y propósito:

```typescript
// ============================================
// ASSETS - {MARCA} MICROSITE
// ============================================

// Logos
import LogoHeader from '@/assets/microsites/{marca}/logos/logo-header.png';
import LogoFooter from '@/assets/microsites/{marca}/logos/logo-footer.png';

// Index - Hero Slides
import HeroSlide{Producto} from '@/assets/microsites/{marca}/index/hero-slide-{producto}.png';

// Index - Banners & Sections
import BannerFeatured from '@/assets/microsites/{marca}/index/banner-featured.png';
import BannerFeaturedProduct from '@/assets/microsites/{marca}/index/banner-featured-product.png';
import CataloguePreview from '@/assets/microsites/{marca}/index/catalogue-preview.png';

// Index - Events
import Event1 from '@/assets/microsites/{marca}/index/event-1.png';

// Details - {Producto}
import {Producto}HeroBanner from '@/assets/microsites/{marca}/details/{producto}/hero-banner.png';
import {Producto}ProductMain from '@/assets/microsites/{marca}/details/{producto}/product-main.png';
import {Producto}BannerSecondary from '@/assets/microsites/{marca}/details/{producto}/banner-secondary.png';
```

---

## Ejemplo Real: Lenovo

```
src/assets/microsites/lenovo/
├── logos/
│   └── logo-header.png
├── index/
│   ├── hero-slide-thinkpad.png
│   ├── hero-slide-ideapad.png
│   ├── hero-slide-legion.png
│   ├── banner-featured.png
│   ├── banner-featured-product.png
│   ├── catalogue-preview.png
│   ├── event-1.png
│   ├── event-2.png
│   └── event-3.png
└── details/
    ├── legion/
    │   ├── hero-banner.png
    │   ├── product-main.png
    │   └── banner-secondary.png
    ├── thinkpad/
    └── ideapad/
```

---

## Checklist para Nueva Marca

- [ ] Crear carpeta `src/assets/microsites/{marca}/`
- [ ] Crear subcarpetas: `logos/`, `index/`, `details/`
- [ ] Agregar logos con nombres estándar
- [ ] Agregar imágenes de index siguiendo convención
- [ ] Crear subcarpetas en `details/` para cada producto
- [ ] Actualizar `{marca}.data.ts` con imports correctos

---

_Última actualización: Marzo 2026_
