import type { BrandRegistryEntry, BrandStatus, PlanId } from './domain';

// REGISTRO DE MARCAS CON MICROSITIOS
// Este archivo contiene el registro de marcas activas.
// La configuración completa de cada marca se define en su
// archivo de datos correspondiente (ej: huawei.data.ts)

const isPublishedStatus = (status: BrandStatus): boolean => status === 'active';

// Registro de marcas disponibles
export const BRAND_REGISTRY: Record<string, BrandRegistryEntry> = {
  dell: {
    slug: 'dell',
    name: 'Dell',
    plan: 'premium',
    basePath: '/micrositios/dell',
    status: 'active',
    configKey: 'dell',
    enabledPages: ['home', 'detail', 'products', 'about'],
  },
  huawei: {
    slug: 'huawei',
    name: 'Huawei',
    plan: 'professional',
    basePath: '/micrositios/huawei',
    status: 'active',
    configKey: 'huawei',
    enabledPages: ['home', 'detail'],
  },
  lenovo: {
    slug: 'lenovo',
    name: 'Lenovo',
    plan: 'business',
    basePath: '/micrositios/lenovo',
    status: 'active',
    configKey: 'lenovo',
    enabledPages: ['home', 'detail'],
  },
};

// HELPERS

// Obtener todas las marcas activas
export const getActiveBrands = (): BrandRegistryEntry[] =>
  Object.values(BRAND_REGISTRY).filter((brand) => isPublishedStatus(brand.status));

// Obtener marca por slug
export const getBrandBySlug = (slug: string): BrandRegistryEntry | undefined => BRAND_REGISTRY[slug];

// Obtener marcas por plan
export const getBrandsByPlan = (plan: PlanId): BrandRegistryEntry[] =>
  Object.values(BRAND_REGISTRY).filter((brand) => brand.plan === plan && isPublishedStatus(brand.status));

export const getBrandsByStatus = (status: BrandStatus): BrandRegistryEntry[] =>
  Object.values(BRAND_REGISTRY).filter((brand) => brand.status === status);

// Verificar si una marca existe y está activa
export const isBrandActive = (slug: string): boolean => {
  const brand = BRAND_REGISTRY[slug];
  return brand ? isPublishedStatus(brand.status) : false;
};

// Generar paths estáticos para getStaticPaths()
export const getBrandStaticPaths = () =>
  getActiveBrands().map((brand) => ({
    params: { brand: brand.slug },
  }));
