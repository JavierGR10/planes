import type { EventItem, ImageAsset } from '@/components/sections/microsites/config';
import type {
  MicrositeBrand,
  MicrositeBrandingConfig as SharedMicrositeBrandingConfig,
  MicrositeContactConfig,
  MicrositeMetaConfig as SharedMicrositeMetaConfig,
  MicrositeNavigationConfig as SharedMicrositeNavigationConfig,
  MicrositeResponsiveImage,
} from '../../shared.types';

export interface ProfessionalBanner {
  image: string;
  alt: string;
  responsiveImage?: MicrositeResponsiveImage;
}

export interface ProfessionalServiceItem {
  image: string;
  title: string;
  description: ProfessionalRichTextContent;
  href?: string;
}

export type ProfessionalRichTextSpacing = 'none' | 'sm' | 'md' | 'lg';

export interface ProfessionalRichText {
  paragraphs: string[];
  spacing?: ProfessionalRichTextSpacing;
}

export type ProfessionalRichTextContent = string | ProfessionalRichText;

export interface ProfessionalEventItem extends EventItem {}

export interface ProfessionalProductDetailSpecItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProfessionalProductDetailProduct {
  image: string;
  title: string;
  description?: string;
  belowImageDescription?: string;
}

export interface ProfessionalProductDetailConfig {
  slug: string;
  banner: string;
  bannerAlt: string;
  title: string;
  subtitle: string;
  intro: string;
  productTitleHtml: string;
  productDescription: string[];
  specs: ProfessionalProductDetailSpecItem[];
  product: ProfessionalProductDetailProduct;
}

export interface ProfessionalHeroSectionConfig {
  banners: ProfessionalBanner[];
}

export interface ProfessionalProductsSectionConfig {
  title: string;
  subtitle: string;
  items: ProfessionalServiceItem[];
}

export interface ProfessionalServicesSectionConfig {
  title: string;
  subtitle: string;
  items: ProfessionalServiceItem[];
}

export interface ProfessionalEventsSectionConfig {
  title: string;
  subtitle: string;
  items: ProfessionalEventItem[];
}

export interface ProfessionalSectionsConfig {
  hero: ProfessionalHeroSectionConfig;
  products: ProfessionalProductsSectionConfig;
  services?: ProfessionalServicesSectionConfig;
  events: ProfessionalEventsSectionConfig;
}

export interface ProfessionalTypographyTheme {
  headingFontFamily?: string;
  bodyFontFamily?: string;
  ctaFontFamily?: string;
}

export interface ProfessionalServiceCardTheme {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export interface ProfessionalEventModalTheme {
  backdropColor?: string;
  imageBackgroundColor?: string;
  titleBackgroundColor?: string;
  titleTextColor?: string;
  closeButtonBackgroundColor?: string;
  closeButtonHoverBackgroundColor?: string;
  closeButtonTextColor?: string;
}

export interface ProfessionalSurfacesTheme {
  servicesSectionBackgroundColor?: string;
  servicesCard?: ProfessionalServiceCardTheme;
  eventsSectionBackgroundColor?: string;
  eventCardBaseColor?: string;
  eventCardOverlayColor?: string;
  eventCardOverlayHoverColor?: string;
  eventCardTitleTextColor?: string;
  emptyStateTextColor?: string;
  eventModal?: ProfessionalEventModalTheme;
  heroSlideBackgroundColor?: string;
  footerBackgroundColor?: string;
}

export interface ProfessionalButtonTheme {
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
}

export interface ProfessionalCatalogSwitchTheme {
  activeBackgroundColor?: string;
  activeTextColor?: string;
  inactiveBackgroundColor?: string;
  inactiveBorderColor?: string;
  inactiveTextColor?: string;
  focusOutlineColor?: string;
}

export interface ProfessionalButtonsTheme {
  serviceCardCta?: ProfessionalButtonTheme;
  heroCarouselControl?: ProfessionalButtonTheme;
  catalogSwitch?: ProfessionalCatalogSwitchTheme;
}

export interface ProfessionalBrandTheme {
  primaryColor?: string;
  secondaryColor?: string;
  detailAccentColor?: string;
  backgroundColor?: string;
  typography?: ProfessionalTypographyTheme;
  surfaces?: ProfessionalSurfacesTheme;
  buttons?: ProfessionalButtonsTheme;
}

export interface ProfessionalBrandingConfig extends SharedMicrositeBrandingConfig<ProfessionalBrandTheme> {}

export interface ProfessionalNavigationConfig extends SharedMicrositeNavigationConfig {}

export interface ProfessionalMetaConfig extends SharedMicrositeMetaConfig {}

export interface ProfessionalMicrositeConfig {
  brand: MicrositeBrand<'professional'>;
  meta: ProfessionalMetaConfig;
  branding: ProfessionalBrandingConfig;
  navigation: ProfessionalNavigationConfig;
  contact?: MicrositeContactConfig;
  sections: ProfessionalSectionsConfig;
  productDetails?: ProfessionalProductDetailConfig[];
}

export interface ProfessionalFooterProps {
  logo: ImageAsset;
  brandName: string;
  theme?: ProfessionalBrandTheme;
}
