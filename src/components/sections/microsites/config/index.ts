// CONFIGURACIÓN CENTRAL DE MICROSITIOS

export {
  PLAN_IDS,
  BRAND_STATUSES,
  BRAND_PAGE_IDS,
  BRAND_SECTION_IDS,
  PLAN_CAPABILITIES,
  normalizePlanId,
  isPlanId,
} from './domain';

export type {
  PlanId,
  AnyPlanId,
  BrandStatus,
  BrandPageId,
  BrandSectionId,
  PlanCapabilities,
  MicrositeMeta,
  MicrositeBrandIdentity,
  BrandRegistryEntry,
} from './domain';

// Tipos
export type {
  PlanType,
  ImageAsset,
  NavDropdownItem,
  NavItem,
  Banner,
  ServiceItem,
  EventItem,
  ProductDetailSpecItem,
  ProductDetailProduct,
  ProductDetailConfig,
} from './types';

// Planes
// export { PLANS, getAllPlans, getPlanById } from './plans';

// Marcas
export {
  BRAND_REGISTRY,
  getActiveBrands,
  getBrandBySlug,
  getBrandsByPlan,
  getBrandsByStatus,
  isBrandActive,
  getBrandStaticPaths,
} from './brands';
