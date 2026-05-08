import type { EventItem, ImageAsset, PlanType } from '@/components/sections/microsites/config';
import type {
  MicrositeBrand,
  MicrositeBrandingConfig as SharedMicrositeBrandingConfig,
  MicrositeContactConfig as SharedMicrositeContactConfig,
  MicrositeDetailHero as SharedMicrositeDetailHero,
  MicrositeFooterContact as SharedMicrositeFooterContact,
  MicrositeMetaConfig as SharedMicrositeMetaConfig,
  MicrositeNavigationConfig as SharedMicrositeNavigationConfig,
  MicrositePlanTheme,
} from '../../shared.types';

export interface HeroWithSlider {
  type: 'with-slider';
  gradient: string;
  title: string;
  subtitle: string;
  banners: HeroSliderBanner[];
  buttonText: string;
  buttonHref: string;
}

export interface HeroSliderBanner {
  name: string;
  subtitle: string;
  image: string;
}

export interface HeroImageBackground {
  type: 'image-background';
  backgroundImage: string;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export type HeroItem = HeroWithSlider | HeroImageBackground;

export interface ProductItem {
  image: string;
  titleProduct: string;
  /** Soporta \n para saltos de línea */
  subtitleProduct: string;
  descriptionTitle: string;
  description: string;
  href?: string;
}

export interface ProductBanner {
  banner: string;
  image: string;
  title: string;
  description: string;
}

export interface BusinessBannerTheme {
  titleColor?: string;
  descriptionColor?: string;
  overlayBackground?: string;
}

export interface ProductsSectionConfig {
  sectionTitle: string;
  buttonText: string;
  allProductsLabel?: string;
  collapseProductsLabel?: string;
  items: ProductItem[];
  bannerProduct: ProductBanner;
}

export interface VideoSectionConfig {
  enabled: boolean;
  url: string;
  title: string;
}

export interface CatalogueSectionConfig {
  sectionTitle: string;
  /** Acepta HTML */
  description: string;
  image: string;
  imageAlt?: string;
}

export interface BusinessEventItem extends EventItem {}

export interface BusinessEventsSectionConfig {
  sectionTitle: string;
  title: string;
  subtitle: string;
  description: string;
  items: BusinessEventItem[];
}

export type ProductDetailHero = SharedMicrositeDetailHero;

export interface ProductDetailInfo {
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

export interface ProductDetailFeature {
  image: string;
  title: string;
  description: string;
}

export interface ProductDetailConfig {
  slug: string;
  hero: ProductDetailHero;
  productInfo: ProductDetailInfo;
  secondBanner: {
    image: string;
  };
  features: ProductDetailFeature[];
}

export interface BusinessFooterTheme {
  backgroundColor?: string;
  backgroundGradient?: string;
  titleColor?: string;
  itemColor?: string;
  mutedColor?: string;
  dividerGradient?: string;
  linkHoverColor?: string;
}

export interface BusinessProductCardTheme {
  featuredBackground?: string;
  defaultBackground?: string;
  textColor?: string;
}

export interface BusinessProductCardCtaTheme {
  background?: string;
  textColor?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
}

export interface BusinessHeroCtaTheme {
  background?: string;
  textColor?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
}

export interface BusinessHeroTextTheme {
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  sliderTitleColor?: string;
  sliderSubtitleColor?: string;
  sliderActiveBorderColor?: string;
}

export interface BusinessButtonsTheme {
  productCardCta?: BusinessProductCardCtaTheme;
  heroCta?: BusinessHeroCtaTheme;
}

export interface BusinessHeroTheme {
  text?: BusinessHeroTextTheme;
}

export interface BusinessSurfacesTheme {
  productCard?: BusinessProductCardTheme;
}

export type BusinessBrandTheme = Omit<MicrositePlanTheme, 'footerGradient'> & {
  hero?: BusinessHeroTheme;
  banner?: BusinessBannerTheme;
  buttons?: BusinessButtonsTheme;
  surfaces?: BusinessSurfacesTheme;
  footer?: BusinessFooterTheme;
};
export interface BusinessBrandingConfig extends SharedMicrositeBrandingConfig<BusinessBrandTheme> {}

export type FooterContact = SharedMicrositeFooterContact;

export interface FooterConfig {
  contact: FooterContact;
}

export interface BusinessSectionsConfig {
  heroes: HeroItem[];
  video?: VideoSectionConfig;
  products: ProductsSectionConfig;
  catalogue: CatalogueSectionConfig;
  events: BusinessEventsSectionConfig;
  productDetails?: ProductDetailConfig[];
}

export interface BusinessNavigationConfig extends SharedMicrositeNavigationConfig {}

export interface BusinessMetaConfig extends SharedMicrositeMetaConfig {}

export interface BusinessMicrositeConfig {
  brand: MicrositeBrand<Extract<PlanType, 'business'>>;
  meta: BusinessMetaConfig;
  branding: BusinessBrandingConfig;
  navigation: BusinessNavigationConfig;
  contact?: SharedMicrositeContactConfig;
  sections: BusinessSectionsConfig;
  footer: FooterConfig;
}

export interface SectionTitleProps {
  color: string;
  children: string;
}

export interface ProductCardProps extends ProductItem {
  accentColor: string;
  buttonText: string;
  index: number;
  featured?: boolean;
  isExtra?: boolean;
  productCardTheme?: BusinessProductCardTheme;
  productCardCtaTheme?: BusinessProductCardCtaTheme;
}

export interface BannerSectionProps extends ProductBanner {
  brandName: string;
  bannerTheme?: BusinessBannerTheme;
}

export interface MicrositeFooterProps {
  logo: ImageAsset;
  brandName: string;
  contact: FooterContact;
  footerTheme?: BusinessFooterTheme;
}

export interface EventsGalleryProps {
  primaryColor: string;
  config: BusinessEventsSectionConfig;
}

export interface CatalogueSectionProps {
  primaryColor: string;
  config: CatalogueSectionConfig;
  brandName: string;
}
