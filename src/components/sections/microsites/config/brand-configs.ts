import { dellConfig } from './config-by-plan/dell.config';
import { huaweiConfig } from './config-by-plan/huawei.config';
import { lenovoConfig } from './config-by-plan/lenovo.config';
import { getBrandBySlug } from './brands';
import type { BrandPageId } from './domain';

type DetailSlugEntry = {
  slug: string;
};

export const BRAND_CONFIGS = {
  dell: dellConfig,
  huawei: huaweiConfig,
  lenovo: lenovoConfig,
} as const;

export type BrandConfigKey = keyof typeof BRAND_CONFIGS;

export const getBrandConfig = <K extends BrandConfigKey>(slug: K): (typeof BRAND_CONFIGS)[K] => BRAND_CONFIGS[slug];

export const isBrandPageEnabled = (slug: BrandConfigKey, pageId: BrandPageId): boolean => {
  const brand = getBrandBySlug(slug);

  return Boolean(brand && brand.status === 'active' && brand.enabledPages.includes(pageId));
};

const hasRootProductDetails = (config: unknown): config is { productDetails: DetailSlugEntry[] } =>
  Boolean(config && typeof config === 'object' && 'productDetails' in config && Array.isArray(config.productDetails));

const hasSectionProductDetails = (config: unknown): config is { sections: { productDetails: DetailSlugEntry[] } } =>
  Boolean(
    config &&
    typeof config === 'object' &&
    'sections' in config &&
    config.sections &&
    typeof config.sections === 'object' &&
    'productDetails' in config.sections &&
    Array.isArray(config.sections.productDetails)
  );

export const getBrandDetailEntries = (slug: BrandConfigKey): DetailSlugEntry[] => {
  if (!isBrandPageEnabled(slug, 'detail')) {
    return [];
  }

  const config = BRAND_CONFIGS[slug];

  if (hasRootProductDetails(config)) {
    return config.productDetails;
  }

  if (hasSectionProductDetails(config)) {
    return config.sections.productDetails;
  }

  return [];
};

export const getBrandDetailStaticPaths = (slug: BrandConfigKey) =>
  getBrandDetailEntries(slug).map((detail) => ({
    params: { details: detail.slug },
  }));
