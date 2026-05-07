# Micrositios

## Estado de seguimiento

Leyenda:

- `[x]` completado
- `[-]` avanzado de forma parcial
- `[ ]` pendiente

## Estado actual del proyecto extraído

Este README ya no debe leerse solo como plan de extracción. Dado que el proyecto de micrositios ya fue separado, ahora funciona como documento de control para la consolidación del dominio, la normalización de configuraciones y la eliminación de deuda técnica heredada.

Cambios ya realizados en el proyecto:

- `[x]` Se creó una base de dominio unificada en `config/domain.ts` con planes oficiales, capacidades por plan, páginas y secciones soportadas.
- `[x]` Se enriqueció el registro de marcas con `status`, `configKey` y `enabledPages` en `config/brands.ts`.
- `[x]` Se eliminó `premier` del dominio técnico y visible; `premium` quedó como único identificador oficial del plan.
- `[x]` Se retiró la capa antigua de presentación comercial de planes que no era necesaria para la adaptación actual.
- `[x]` Se validó que estos cambios no rompen el build actual del proyecto.

Cambios detectados que siguen pendientes:

- `[-]` Huawei ya consume configuración declarativa para detalle, pero aún falta ampliar la cobertura de páginas derivadas si se quieren recuperar más slugs además de `ideahub`.
- `[-]` El registro central ya gobierna las rutas de detalle de las marcas activas, pero aún no genera todas las páginas derivadas ni actúa como fuente total de verdad del sistema.
- `[-]` El theming ya avanzó a tokens para cards y CTAs en `business` y `premium`, pero aún quedan superficies, textos, overlays y variantes visuales resolviéndose desde componentes.
- `[-]` `professional` y Huawei ya migraron a un contrato por plan, y `config/types.ts` ya no expone un micrositio legacy completo; todavía quedan tipos genéricos compartidos fuera del núcleo más nuevo.
- `[ ]` No existe todavía validación automática de esquema para configs por marca.

## Objetivo

Este documento define las tareas y acciones de mejora necesarias para consolidar el módulo de micrositios ya extraído a un proyecto Astro independiente, manteniendo la capacidad de crear sitios por marca a partir de una configuración declarativa, escalable y comprensible para otros desarrolladores.

## Alcance del proyecto consolidado

El proyecto externo de micrositios debe absorber estas responsabilidades:

- Renderizar micrositios por marca y por plan.
- Resolver navegación, metadatos SEO, theming y contenido desde configuración.
- Soportar páginas derivadas como detalle de producto, catálogo, nosotros y páginas adicionales por plan.
- Permitir alta de nuevas marcas sin duplicar rutas, layouts o páginas manuales.
- Mantener assets, contenido y reglas de presentación desacoplados del sitio corporativo principal.

## Diagnóstico actual

### Fortalezas

- Ya existe una dirección correcta hacia un modelo config-driven.
- Lenovo y Dell ya usan contratos más ricos por plan.
- Dell ya cuenta con un sistema de theme tokens más maduro para el plan premium.
- Parte del contenido de detalle ya vive en configuración y no en páginas hardcodeadas.

### Problemas detectados

- Conviven dos arquitecturas de datos: una legacy y otra por plan.
- El naming entre `premier` y `premium` ya fue unificado; quedan por retirar solo estructuras legacy no relacionadas al nombre del plan.
- Parte de la capa histórica de presentación de planes ya fue eliminada por no aportar al dominio actual de micrositios.
- El registro global de marcas ya participa en detalle y habilitación de páginas, pero todavía no es la fuente total de verdad para todas las rutas y superficies del sistema.
- Huawei ya migró su detalle a configuración, pero el patrón de páginas derivadas aún no está normalizado para todo el sistema.
- Parte del theming ya se resolvió con tokens semánticos, pero siguen existiendo componentes con estilos visuales fijos fuera de la capa de theme.
- Existen valores placeholder o reutilizados entre marcas, lo que indica que la data aún no está completamente normalizada.

## Objetivo de arquitectura

La extracción debe terminar en una arquitectura con cuatro capas claras:

1. `plan capabilities`
   Cada plan define qué secciones, páginas y features soporta.
2. `brand content`
   Cada marca define contenido, assets, enlaces, textos, productos y metadatos.
3. `theme tokens`
   Cada marca define tokens visuales semánticos, no clases de layout.
4. `route generation`
   Las rutas deben generarse desde un registro único de marcas activas y sus páginas disponibles.

## Resultado esperado

Al terminar la extracción, agregar una nueva marca debe requerir como máximo:

- Crear un archivo de configuración de marca.
- Registrar la marca en un índice central.
- Cargar sus assets.
- Ejecutar validaciones.

No debe ser necesario crear manualmente nuevas páginas Astro por marca, salvo que un plan realmente introduzca una feature nueva.

## Plan de trabajo

## Fase 0. Alineación funcional

Estado general: `[x]` completada

### Tarea 0.1. Definir el dominio oficial de planes

Estado: `[x]` completada

Acciones:

- `[x]` Unificar el naming comercial y técnico de planes.
- `[x]` Elegir un solo identificador para el plan premium y eliminar `premier` del dominio técnico.
- `[x]` Confirmar que el nombre comercial visible será `Premium`, manteniendo un único id técnico.

Avance actual:

- `premium` quedó definido como único id oficial del plan.
- Se eliminaron las referencias visibles y técnicas a `premier` en catálogos, tablas y configuración.

Entregable:

- Catálogo oficial de planes y naming aprobado.

### Tarea 0.2. Definir qué incluye cada plan

Estado: `[-]` parcial

Acciones:

- `[-]` Documentar qué secciones son obligatorias, opcionales o no soportadas por `professional`, `business` y `premium`.
- `[ ]` Separar claramente features de negocio de variaciones visuales.
- `[-]` Determinar qué páginas derivadas puede tener cada plan: `home`, `detalle`, `productos`, `nosotros`, `catalogo`, `landing secundaria`, etc.

Avance actual:

- `config/domain.ts` ya define `PLAN_CAPABILITIES` con páginas y secciones requeridas u opcionales por plan.
- Esa matriz todavía debe validarse contra los renderers reales y documentarse como contrato oficial de producto.

Entregable:

- Matriz de capacidades por plan.

## Fase 1. Normalización del modelo de datos

Estado general: `[-]` iniciada

### Tarea 1.1. Diseñar un contrato base unificado

Estado: `[-]` parcial

Acciones:

- `[-]` Crear un contrato base de micrositio compartido para metadatos, branding, navegación y registro de páginas.
- `[-]` Mantener extensiones por plan solo donde cambien las capacidades reales.
- `[x]` Evitar tener un contrato legacy paralelo.

Avance actual:

- Ya existe un núcleo común en `config/domain.ts` y `plans/shared.types.ts`.
- Huawei y `professional` ya consumen `ProfessionalMicrositeConfig`, alineados con el enfoque por plan que ya seguían `business` y `premium`.
- `config/types.ts` quedó reducido a tipos genéricos compartidos y ya no mantiene un `MicrositeConfig` paralelo exportado desde el barrel principal.

Entregable:

- Tipos base compartidos y tipos por plan derivados del mismo núcleo.

### Tarea 1.2. Separar contenido, theme y layout decisions

Estado: `[x]` completada

Acciones:

- `[x]` Mover colores, superficies, estados y variantes a tokens semánticos.
- `[x]` Reducir al mínimo clases utilitarias dentro de la configuración de marca.
- `[x]` Extraer decisiones de layout que hoy están embebidas en datos, como `bgColor`, `colSpan` o gradientes específicos, cuando correspondan a la implementación del componente y no al contenido.

Observación:

- Dell muestra un avance más maduro en tokens para premium, pero Lenovo y otras configuraciones aún mezclan contenido con clases de implementación.
- Lenovo y Dell ya no dependen de `bgColor`, `colSpan`, `titleClassName` ni `subtitleClassName` en sus configs activas; esas decisiones pasaron a defaults de componente según el renderer actual.
- Las product cards de `business` y `premium` ya toman fondo y color de texto desde tokens de theme por plan/marca, en vez de fijarlos dentro del componente con clases hardcodeadas.
- Los CTAs de product card en `business` y `premium` ya resuelven sus colores y estados hover desde tokens del theme por plan/marca, en vez de depender de clases utilitarias embebidas en el componente.
- El CTA principal del hero en `business` ya resuelve fondo, texto, borde y hover desde tokens del theme por plan/marca, en vez de fijarlos dentro de `HeroCarousel`.
- Los sliders de `business` y `premium` ya resuelven color de texto y borde activo desde tokens, en vez de fijarlos en el componente.
- `professional` ya tokenizó también `Title`, `Services`, `Events`, `Carousel` y `Footer`, manteniendo la escala tipográfica fija y dejando solo `font-family` como override opcional.
- Los componentes compartidos `Navbar` y `MicrositeFooter` ya dejaron de depender de props basadas en clases para sus estados visuales principales.
- `premium` ya retiró `buttonExtraClasses` del hero y `backgroundClass` / `dividerClass` del footer a favor de tokens semánticos resueltos desde theme.
- Los banners destacados de `business` y `premium` ya toman color y overlay desde tokens semánticos.
- Huawei ya dejó de depender de clases visuales embebidas dentro de `productTitleHtml`; el énfasis visual ahora se resuelve desde el render del detalle.

Entregable:

- Configs más declarativas y menos acopladas al render actual.

### Tarea 1.3. Estandarizar IDs, slugs y links

Estado: `[-]` parcial

Acciones:

- `[-]` Definir reglas para `slug`, `href`, ids de sección y nombres de páginas.
- `[ ]` Validar que no existan links heredados de otras marcas.
- `[ ]` Asegurar consistencia entre la navegación y las páginas realmente disponibles.

Avance actual:

- El dominio nuevo ya define `BrandPageId` y `BrandSectionId`.
- Dell y Lenovo ya quedaron alineadas entre navegación declarada, slugs de detalle existentes, rutas publicadas y `enabledPages` actuales.
- Huawei ya alineó sus anchors internos con ids reales del renderer `professional` y dejó de enlazar a un detalle no publicado (`storage`).
- Aún falta llevar esa convención al resto de configs y usarla para validar navegación y rutas reales de forma sistemática.

Reglas ya definidas para este punto:

- El `slug` de marca debe coincidir entre `brands.ts`, `brand.slug`, `navigation.basePath` y la carpeta de rutas publicada bajo `src/pages/micrositios/<slug>`.
- Cada entrada de `enabledPages` debe corresponder a una página realmente publicada para esa marca, ya sea por archivo Astro dedicado o por ruta generada desde helper común.
- Ningún `href` interno de config debe apuntar a una página derivada que no exista o no esté habilitada en `enabledPages`.
- Todo `slug` de detalle debe existir en `productDetails` y, si se referencia desde navegación, hero, eventos o cards, debe resolver a una ruta publicada real.
- Los anchors internos como `#hero`, `#products`, `#events` o `#contact` solo son válidos si el renderer del plan realmente expone esos `id` en el DOM.
- Cuando una marca no publique una página derivada, la navegación debe degradar a una superficie existente de la misma marca o eliminar el enlace; no debe inventar rutas placeholder.

Entregable:

- Convención de slugs y enlaces documentada.

## Fase 2. Migración del contenido actual

Estado general: `[-]` iniciada

### Tarea 2.1. Migrar Huawei al modelo config-driven actual

Estado: `[x]` completada

Acciones:

- Extraer la data embebida en `src/pages/micrositios/huawei/[details].astro` hacia configuración.
- Crear `productDetails` o la estructura equivalente para Huawei.
- Hacer que la ruta dinámica lea desde config igual que Lenovo y Dell.

Avance actual:

- La data de detalle de Huawei ya vive en `config/config-by-plan/huawei.config.ts` dentro de `productDetails`.
- `src/pages/micrositios/huawei/[details].astro` ya no contiene contenido hardcodeado y genera rutas desde la config.
- El build ya no publica slugs vacíos de Huawei; solo se genera el detalle realmente configurado.

Entregable:

- Huawei sin contenido hardcodeado en rutas.

### Tarea 2.2. Auditar Lenovo y Dell

Estado: `[-]` parcial

Acciones:

- Revisar contenido placeholder, links de eventos y textos copiados entre marcas.
- Verificar si cada campo del config responde a una necesidad real del plan.
- Eliminar campos que solo existen para resolver hacks visuales temporales.

Avance actual:

- Lenovo ya quedó alineado en los enlaces que sí tenían un detalle real existente: `Legion`, `ThinkPad` e `IdeaPad`.
- Dell ya enlaza correctamente al único detalle real disponible desde navegación y hero principal: `laptop-dell`.
- Dell también ya reutiliza un contacto real en footer y el popup promocional apunta a una página existente en lugar de `'#'`.
- Dell ya no conserva `href: '#'`, nombres genéricos, `Lorem ipsum` ni enlaces heredados de Huawei en navegación, productos, eventos, CTAs y footer.
- Lenovo ya sustituyó el CTA placeholder del hero, los enlaces heredados de Huawei en eventos, el correo placeholder del footer y el texto copiado de `IdeaPad` dentro de la tarjeta principal de `Legion`.
- La deuda restante de 2.2 ya no está en esos campos visuales de Dell/Lenovo, sino en seguir moviendo otras decisiones de presentación y variantes al sistema semántico de theme tokens.

Entregable:

- Configuración limpia y consistente para las marcas existentes.

### Tarea 2.3. Definir páginas derivadas como data, no como excepción

Estado: `[-]` parcial

Acciones:

- Modelar páginas adicionales como parte de `pages` o `sections`, según corresponda.
- Evitar que cada nueva página de marca implique un archivo Astro nuevo.
- Decidir qué páginas son genéricas del plan y cuáles son extensiones puntuales de una marca.

Entregable:

- Modelo de páginas derivadas desacoplado de rutas manuales.

## Fase 3. Registro y generación de rutas

Estado general: `[-]` iniciada

### Tarea 3.1. Crear un registro único de marcas

Estado: `[-]` parcial

Acciones:

- `[ ]` Convertir el registro de marcas en la única fuente de verdad para el sistema.
- `[x]` Incluir plan, slug, estado, páginas habilitadas y origen de la configuración.
- `[x]` Hacer que todas las marcas activas queden registradas en un solo punto.

Avance actual:

- `config/brands.ts` ya contiene `status`, `configKey` y `enabledPages`.
- Dell, Huawei y Lenovo ya quedaron registradas como marcas activas dentro del índice central.
- Todavía falta que más superficies del sistema consuman ese registro como única fuente de verdad.

Entregable:

- Índice central de marcas listo para build y validación.

### Tarea 3.2. Generar rutas desde configuración

Estado: `[-]` parcial

Acciones:

- Reemplazar rutas manuales por generación basada en registro y capacidades del plan.
- Resolver `getStaticPaths` desde el índice de marcas y la data de páginas disponibles.
- Evitar duplicar la lógica de enrutado por cada marca.

Avance actual:

- Huawei, Lenovo y Dell ya generan sus rutas de detalle desde un helper común basado en el registro central y el mapa de configs.
- Dell `nosotros` y `productos` ya consumen la configuración central y la habilitación de página desde el registro.
- Aún falta llevar ese patrón al resto de páginas derivadas del sistema y reducir más lógica manual por archivo.

Entregable:

- Sistema de rutas declarativo y extensible.

### Tarea 3.3. Definir fallbacks y reglas de publicación

Estado: `[-]` parcial

Acciones:

- `[ ]` Definir el comportamiento cuando una marca no tenga una sección opcional o una página derivada.
- `[x]` Diferenciar entre `draft`, `active`, `archived` o estados equivalentes.
- `[ ]` Evitar que una marca incompleta rompa el build completo.

Entregable:

- Reglas de publicación y degradación controlada.

## Fase 4. Extracción del sistema visual

Estado general: `[-]` iniciada

### Tarea 4.1. Crear theme tokens compartidos

Estado: `[-]` parcial

Acciones:

- Definir tokens base para color, tipografía, superficies, bordes, spacing y estados interactivos.
- Mantener adaptadores por plan cuando un plan necesite más granularidad visual.
- Evitar que los componentes dependan de valores hardcodeados de marca.

Avance actual:

- `premium` ya resuelve parte importante del sistema visual mediante `resolvePremiumTheme` y variables CSS.
- `business` ya comenzó a mover superficies y CTAs críticos a tokens de marca/plan para hero y product cards.
- Aún falta extender este enfoque a textos, overlays, slider, componentes base y otras superficies compartidas.

Entregable:

- Sistema de theming reutilizable para cualquier marca.

### Tarea 4.2. Separar componentes genéricos de componentes por plan

Acciones:

- Identificar qué componentes ya son compartibles: navbar, footer, layouts, wrappers, renderers de secciones.
- Mantener por plan solo los componentes que cambian de comportamiento, no los que solo cambian de estilo.
- Evaluar si el componente del plan puede ser un compositor de features en vez de una vista completamente distinta.

Entregable:

- Librería de componentes base y capa de composición por plan.

### Tarea 4.3. Aislar assets y fonts del proyecto principal

Acciones:

- Mover assets exclusivos de micrositios a una estructura propia del nuevo proyecto.
- Revisar dependencias a fuentes, CDN y estilos globales del sitio principal.
- Eliminar acoplamientos con layouts o estilos corporativos que no formen parte del módulo extraído.

Entregable:

- Micrositios ejecutables sin dependencia del proyecto corporativo.

## Fase 5. Consolidación del proyecto extraído

Estado general: `[ ]` pendiente

### Tarea 5.1. Eliminar deuda de compatibilidad temporal

Estado: `[-]` parcial

Acciones:

- `[x]` Retirar el uso residual de `premier` cuando el dominio y las vistas visibles ya estén alineados en `premium`.
- `[x]` Eliminar componentes y utilidades de presentación heredadas que ya no forman parte del alcance actual.
- `[x]` Eliminar contratos legacy o aliases transicionales una vez que todas las configuraciones consuman el modelo unificado.
- `[-]` Confirmar que no queden rutas o componentes apoyándose en estructuras anteriores.

Avance actual:

- Ya fueron retirados artefactos no esenciales como la presentación de planes y sus componentes asociados.
- El foco de la deuda remanente ya no está en un contrato legacy completo, sino en rutas manuales, theming duro en componentes y validación insuficiente de la configuración.

Entregable:

- Código sin compatibilidad transicional innecesaria.

### Tarea 5.2. Cerrar la adopción del registro central

Estado: `[-]` parcial

Acciones:

- Hacer que altas, publicación y generación de páginas dependan del registro central.
- Evitar que una marca pueda quedar “activa” fuera del índice oficial.
- Verificar que el registro funcione como punto único de entrada para build y mantenimiento.

Entregable:

- Flujo operativo unificado para marcas y páginas.

## Fase 6. Calidad y gobernanza

Estado general: `[ ]` pendiente

### Tarea 6.1. Validación automática de configuración

Acciones:

- Incorporar validaciones de esquema para cada config de marca.
- Detectar campos faltantes, slugs duplicados, links inválidos y páginas inconsistentes.
- Definir errores de build claros para autores de contenido.

Entregable:

- Validación de configuración previa al build.

### Tarea 6.2. Crear checklist de alta de marca

Acciones:

- Documentar el proceso para integrar una nueva marca.
- Definir campos obligatorios, assets mínimos y pruebas obligatorias.
- Incluir ejemplos por plan.

Entregable:

- Guía de onboarding de nuevas marcas.

### Tarea 6.3. Definir estrategia de pruebas

Acciones:

- Agregar pruebas de render mínimo por plan.
- Probar generación de rutas por marca.
- Validar páginas derivadas y casos sin contenido opcional.
- Añadir pruebas visuales o snapshots para componentes críticos.

Entregable:

- Base de calidad para evitar regresiones estructurales.

## Backlog priorizado

### Prioridad alta

- Unificar `premier` y `premium`.
- Definir capacidades oficiales por plan.
- Diseñar contrato base único.
- Migrar Huawei al modelo config-driven.
- Convertir el registro de marcas en la fuente real de verdad.

Estado sugerido del backlog alto:

- `1.` Completar la unificación de contratos y retirar el modelo legacy.
- `2.` Hacer que las rutas y páginas dependan del registro central.
- `3.` Terminar de normalizar páginas derivadas como data y no como excepción por archivo.
- `4.` Extender el theming semántico a las superficies que siguen hardcodeadas.
- `5.` Agregar validación automática de configuración.

### Prioridad media

- Separar theme tokens de clases utilitarias.
- Normalizar páginas derivadas.
- Limpiar placeholders y contenido heredado entre marcas.
- Reorganizar assets exclusivos del módulo.

### Prioridad baja

- Optimizar DX para alta de nuevas marcas.
- Automatizar generación de ejemplos por plan.
- Añadir tooling de scaffolding para nuevas marcas.

## Riesgos a controlar durante la extracción

- Extraer rutas manuales por marca en lugar de resolverlas desde registro.
- Mantener contenido de negocio dentro de páginas Astro en vez de config.
- Seguir mezclando responsabilidades del plan con personalizaciones de marca.

## Criterios de salida

La extracción puede considerarse lista cuando se cumplan estos puntos:

- Existe un único modelo mental para crear micrositios.
- Todas las marcas activas usan contratos compatibles.
- No hay contenido de negocio embebido en rutas de página.
- El registro de marcas genera navegación y rutas.
- El theming se resuelve por tokens y no por hacks específicos.
- Crear una nueva marca no requiere copiar una marca existente y editarla manualmente.

## Recomendación de implementación

El orden recomendado para ejecutar este trabajo es:

1. Alinear naming y capacidades de planes.
2. Cerrar el contrato base unificado y retirar el modelo legacy.
3. Terminar de centralizar registro de marcas y rutas.
4. Normalizar páginas derivadas como data.
5. Extender theme tokens y componentes base.
6. Agregar validaciones, checklist y pruebas.
7. Seguir ampliando marcas o features nuevas.

## Próximo paso sugerido

El siguiente paso con más impacto hoy es continuar con la Tarea `1.3`:

- Normalizar `slug`, `href` e ids de sección para que navegación, rutas derivadas y `enabledPages` describan exactamente las superficies reales de cada marca.
- Revisar navegación interna y enlaces declarados en las configs activas para retirar anchors inexistentes, slugs no publicados o páginas no habilitadas.
- Dejar documentadas reglas simples de naming para `slug`, `basePath`, páginas derivadas e ids de sección, de modo que luego puedan validarse automáticamente.

Motivo:

- El theming ya no es el cuello de botella principal. El siguiente riesgo real está en la consistencia del dominio navegable: mientras `enabledPages`, navegación y rutas sigan pudiendo divergir, el registro central no termina de actuar como fuente única de verdad.

## Nota final

La extracción ya se realizó, por lo que el objetivo inmediato ya no es decidir si conviene mover el módulo o no, sino evitar que el proyecto extraído consolide la misma duplicación arquitectónica que existía antes. El criterio de trabajo actual debe ser normalizar el dominio dentro de este repositorio antes de seguir ampliando marcas, rutas o features.
