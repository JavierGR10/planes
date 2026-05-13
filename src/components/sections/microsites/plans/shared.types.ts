import type { ImageAsset, NavItem } from '@/components/sections/microsites/config';

export interface MicrositeBrand<TPlan extends string> {
  slug: string;
  name: string;
  plan: TPlan;
}

export interface MicrositeMetaConfig {
  title: string;
  description: string;
  favicon: string;
}

export interface MicrositeNavigationConfig {
  basePath: string;
  items: NavItem[];
}

export interface MicrositeContactConfig {
  whatsapp?: string;
}

export interface MicrositePlanTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  heroGradient: string;
  footerGradient: string;
  detailSubtitleColor?: string;
}

export interface MicrositeBrandingConfig<TTheme extends object> {
  logos: {
    header: ImageAsset;
    footer: ImageAsset;
  };
  theme: TTheme;
}

export interface MicrositeFooterContact {
  email: string;
  phone: string;
  address: string;
}

export interface MicrositeDetailHero {
  image?: string;
  title: string;
  subtitle: string;
}

export interface MicrositeDetailBanner {
  image?: string;
}

export interface MicrositeDetailMedia {
  src: string;
  alt?: string;
}

export interface MicrositeResponsiveImageSource {
  image: string;
  alt?: string;
}

export interface MicrositeResponsiveImage {
  mobile: MicrositeResponsiveImageSource;
  tablet?: MicrositeResponsiveImageSource;
  desktop?: MicrositeResponsiveImageSource;
}

export interface MicrositeDetailTextBlock {
  title: string;
  subtitle?: string;
  paragraphs: string[];
}

export interface MicrositeDetailTextWithMedia extends MicrositeDetailTextBlock {
  media?: MicrositeDetailMedia[];
  bottomMedia?: MicrositeDetailMedia[];
}

export interface MicrositeEventMetadata {
  eventDate: string;
  location?: string;
  eventType?: string;
}

export interface MicrositeVideoSectionConfig {
  enabled: boolean;
  url: string;
  title: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}
