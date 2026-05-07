export const PLAN_IDS = ['professional', 'business', 'premium'] as const;

export type PlanId = (typeof PLAN_IDS)[number];
export type AnyPlanId = PlanId;

export const BRAND_STATUSES = ['draft', 'active', 'archived'] as const;
export type BrandStatus = (typeof BRAND_STATUSES)[number];

export const BRAND_PAGE_IDS = ['home', 'detail', 'products', 'about', 'catalogue', 'landing'] as const;
export type BrandPageId = (typeof BRAND_PAGE_IDS)[number];

export const BRAND_SECTION_IDS = [
  'hero',
  'video',
  'services',
  'products',
  'events',
  'catalogue',
  'social',
  'cta',
  'popup',
  'about',
  'footer',
] as const;
export type BrandSectionId = (typeof BRAND_SECTION_IDS)[number];

export interface PlanCapabilities {
  plan: PlanId;
  requiredPages: BrandPageId[];
  optionalPages: BrandPageId[];
  requiredSections: BrandSectionId[];
  optionalSections: BrandSectionId[];
  supportsProductDetails: boolean;
  supportsStandaloneCataloguePage: boolean;
  supportsStandaloneAboutPage: boolean;
  supportsPopupModal: boolean;
}

export const PLAN_CAPABILITIES: Record<PlanId, PlanCapabilities> = {
  professional: {
    plan: 'professional',
    requiredPages: ['home'],
    optionalPages: ['detail'],
    requiredSections: ['hero', 'services', 'events', 'footer'],
    optionalSections: [],
    supportsProductDetails: true,
    supportsStandaloneCataloguePage: false,
    supportsStandaloneAboutPage: false,
    supportsPopupModal: false,
  },
  business: {
    plan: 'business',
    requiredPages: ['home'],
    optionalPages: ['detail', 'catalogue'],
    requiredSections: ['hero', 'products', 'catalogue', 'events', 'footer'],
    optionalSections: ['video', 'cta', 'social'],
    supportsProductDetails: true,
    supportsStandaloneCataloguePage: false,
    supportsStandaloneAboutPage: false,
    supportsPopupModal: false,
  },
  premium: {
    plan: 'premium',
    requiredPages: ['home'],
    optionalPages: ['detail', 'products', 'about', 'catalogue', 'landing'],
    requiredSections: ['hero', 'products', 'services', 'catalogue', 'events', 'footer'],
    optionalSections: ['popup', 'video', 'cta', 'social', 'about'],
    supportsProductDetails: true,
    supportsStandaloneCataloguePage: true,
    supportsStandaloneAboutPage: true,
    supportsPopupModal: true,
  },
};

export interface MicrositeMeta {
  title: string;
  description: string;
  favicon: string;
}

export interface MicrositeBrandIdentity {
  slug: string;
  name: string;
  plan: PlanId;
}

export interface BrandRegistryEntry extends MicrositeBrandIdentity {
  basePath: string;
  status: BrandStatus;
  configKey: string;
  enabledPages: BrandPageId[];
}

export const normalizePlanId = (plan: AnyPlanId): PlanId => plan;

export const isPlanId = (value: string): value is PlanId => PLAN_IDS.includes(value as PlanId);
