import type {
  MicrositeBrand,
  MicrositeBrandingConfig as SharedMicrositeBrandingConfig,
  MicrositeContactConfig,
  MicrositeDetailBanner,
  MicrositeDetailHero,
  MicrositeDetailTextBlock,
  MicrositeDetailTextWithMedia,
  MicrositeFooterContact,
  MicrositeEventMetadata,
  MicrositeMetaConfig,
  MicrositeNavigationConfig,
  MicrositePlanTheme,
  MicrositeResponsiveImage,
  MicrositeVideoSectionConfig,
} from '../../shared.types';

export type PremiumNavbarTone = 'light' | 'dark';

export interface PremiumNavbarTheme {
  initialTheme?: PremiumNavbarTone;
  scrollTheme?: PremiumNavbarTone;
  scrollBackground?: string;
}

export interface PremiumHeroControlsTheme {
  buttonTextColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  sliderTitleColor?: string;
  sliderSubtitleColor?: string;
  sliderActiveBorderColor?: string;
  navigationColor?: string;
  navigationBackground?: string;
  navigationHoverBackground?: string;
  paginationColor?: string;
  paginationActiveColor?: string;
  buttonBorderColor?: string;
  buttonHoverBorderColor?: string;
  buttonBorderRadius?: string;
  buttonShadow?: string;
}

export interface PremiumButtonsTheme {
  waveBorderColor?: string;
  waveTextColor?: string;
  waveHoverTextColor?: string;
  waveFillColor?: string;
  waveFilledBackground?: string;
  glowBorderColor?: string;
  glowTextColor?: string;
  glowHoverBackground?: string;
  glowHoverBorderColor?: string;
  glowShadowColor?: string;
  productCardCta?: {
    borderColor?: string;
    textColor?: string;
    hoverTextColor?: string;
    fillColor?: string;
    filledBackground?: string;
  };
}

export interface PremiumSurfacesTheme {
  cardBorderColor?: string;
  productCardFeaturedBackground?: string;
  productCardDefaultBackground?: string;
  productCardTextColor?: string;
  productCardGradient?: string;
  productCardHoverShadow?: string;
  servicesPanelGradient?: string;
  serviceCardOverlay?: string;
  cataloguePanelGradient?: string;
  eventsPanelGradient?: string;
}

export interface PremiumEventCardsTheme {
  background?: string;
  textColor?: string;
  hoverBackground?: string;
  hoverTextColor?: string;
  iconBackground?: string;
  iconColor?: string;
}

export interface PremiumFooterTheme {
  backgroundColor?: string;
  backgroundGradient?: string;
  dividerGradient?: string;
  textColor?: string;
  mutedTextColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
  socialColor?: string;
  socialHoverColor?: string;
}

export interface PremiumPopupTheme {
  overlay?: string;
  closeBackground?: string;
  closeHoverBackground?: string;
}

export interface PremiumHeroSliderImageBanner {
  name: string;
  subtitle: string;
  image: string;
  responsiveImage?: MicrositeResponsiveImage;
}

export interface PremiumHeroSliderVideoBanner {
  name: string;
  subtitle: string;
  mediaType: 'video';
  video: string;
  posterImage?: string;
  responsivePosterImage?: MicrositeResponsiveImage;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
}

export type PremiumHeroSliderBanner = PremiumHeroSliderImageBanner | PremiumHeroSliderVideoBanner;

export interface PremiumHeroWithSlider {
  type: 'with-slider';
  gradient: string;
  title: string;
  titleHtml?: string;
  subtitle: string;
  subtitleHtml?: string;
  banners: PremiumHeroSliderBanner[];
  buttonText?: string;
  buttonHref?: string;
}

export interface PremiumHeroSimple {
  type: 'simple';
  gradient: string;
  title: string;
  titleHtml?: string;
  subtitle: string;
  subtitleHtml?: string;
  description?: string;
  descriptionHtml?: string;
  image?: string;
  responsiveImage?: MicrositeResponsiveImage;
  buttonText?: string;
  buttonHref?: string;
}

export interface PremiumHeroImageBackground {
  type: 'image-background';
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundVideoPoster?: string;
  responsiveBackgroundVideoPoster?: MicrositeResponsiveImage;
  responsiveBackgroundImage?: MicrositeResponsiveImage;
  title?: string;
  titleHtml?: string;
  subtitle?: string;
  subtitleHtml?: string;
  description?: string;
  descriptionHtml?: string;
  buttonText?: string;
  buttonHref?: string;
}

export type PremiumHeroItem = PremiumHeroWithSlider | PremiumHeroSimple | PremiumHeroImageBackground;

export interface PremiumProductItem {
  image: string;
  titleProduct: string;
  subtitleProduct?: string;
  descriptionTitle?: string;
  description: string;
  href?: string;
}

export interface PremiumProductBanner {
  banner: string;
  image?: string;
  title?: string;
  description?: string;
}

export interface PremiumBannerTheme {
  titleColor?: string;
  descriptionColor?: string;
  overlayBackground?: string;
}

export interface PremiumProductsSectionConfig {
  sectionTitle: string;
  buttonText: string;
  allProducts: string;
  allProductsHref: string;
  items: PremiumProductItem[];
  bannerProduct: PremiumProductBanner;
}

export interface PremiumServiceItem {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface PremiumServicesSectionConfig {
  sectionTitle: string;
  description: string;
  cta: string;
  ctaLink: string;
  items: PremiumServiceItem[];
}

export interface PremiumCatalogueSectionConfig {
  sectionTitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  cta: string;
  ctaLink: string;
}

export interface PremiumEventItem extends MicrositeEventMetadata {
  title: string;
  href: string;
  image?: string;
  flyer?: string;
}

export interface PremiumEventsSectionConfig {
  sectionTitle: string;
  items: PremiumEventItem[];
}

export interface PremiumProductFeature {
  title: string;
  description: string;
  image?: string;
}

export interface PremiumProductDetailSplitSection extends MicrositeDetailTextWithMedia {
  id: string;
  variant: 'split';
}

export interface PremiumProductDetailFeatureListSection extends MicrositeDetailTextBlock {
  id: string;
  variant: 'feature-list';
  bottomMedia?: MicrositeDetailTextWithMedia['bottomMedia'];
  media?: MicrositeDetailTextWithMedia['media'];
  aside?: MicrositeDetailTextBlock;
}

export interface PremiumProductDetailClosingSection extends MicrositeDetailTextBlock {
  id: string;
  variant: 'closing';
  supportingBlocks?: MicrositeDetailTextWithMedia[];
}

export type PremiumProductDetailSection =
  | PremiumProductDetailSplitSection
  | PremiumProductDetailFeatureListSection
  | PremiumProductDetailClosingSection;

export interface PremiumProductDetailConfig {
  slug: string;
  hero: MicrositeDetailHero;
  secondBanner?: MicrositeDetailBanner;
  detailSections: PremiumProductDetailSection[];
  features: PremiumProductFeature[];
}

export type PremiumBrandTheme = Omit<MicrositePlanTheme, 'footerGradient'> & {
  pageBackground?: string;
  textColor?: string;
  titleColor?: string;
  mutedTextColor?: string;
  navbar?: PremiumNavbarTheme;
  heroControls?: PremiumHeroControlsTheme;
  banner?: PremiumBannerTheme;
  buttons?: PremiumButtonsTheme;
  surfaces?: PremiumSurfacesTheme;
  eventCards?: PremiumEventCardsTheme;
  footer?: PremiumFooterTheme;
  popup?: PremiumPopupTheme;
};

export interface PremiumBrandingConfig extends SharedMicrositeBrandingConfig<PremiumBrandTheme> {}

export interface PremiumFooterSocialLink {
  alt: string;
  href: string;
  class: string;
}

export interface PremiumFooterLink {
  label: string;
  href: string;
}

export interface PremiumFooterConfig {
  logo: string;
  alt: string;
  description: string;
  socialNetworks: PremiumFooterSocialLink[];
  links: PremiumFooterLink[];
  contact: MicrositeFooterContact;
}

export interface PremiumPopupModalConfig {
  enabled: boolean;
  image: string;
  alt: string;
  href: string;
}

export interface PremiumAboutPageConfig {
  metaTitle?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageHeadline: string;
  gridTitle: string;
  gridDescription: string;
  video?: MicrositeVideoSectionConfig;
}

export interface PremiumSectionsConfig {
  heroes: PremiumHeroItem[];
  products: PremiumProductsSectionConfig;
  services: PremiumServicesSectionConfig;
  video?: MicrositeVideoSectionConfig;
  catalogue: PremiumCatalogueSectionConfig;
  events: PremiumEventsSectionConfig;
  productDetails?: PremiumProductDetailConfig[];
}

export interface MicrositeMetaConfigPremium extends MicrositeMetaConfig {
  productsTitle: string;
}

export interface PremiumMicrositeConfig {
  brand: MicrositeBrand<'premium'>;
  meta: MicrositeMetaConfigPremium;
  branding: PremiumBrandingConfig;
  navigation: MicrositeNavigationConfig;
  contact?: MicrositeContactConfig;
  sections: PremiumSectionsConfig;
  aboutPage?: PremiumAboutPageConfig;
  footer: PremiumFooterConfig;
  popupModal?: PremiumPopupModalConfig;
}
