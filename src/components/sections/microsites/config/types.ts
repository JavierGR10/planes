import type { AnyPlanId } from './domain';

// TIPOS BASE PARA MICROSITIOS

// Planes disponibles
export type PlanType = AnyPlanId;

// ASSETS
export interface ImageAsset {
  src: string;
  alt: string;
}

// NAVEGACIÓN
export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  type: 'link' | 'dropdown' | 'scroll';
  items?: NavDropdownItem[];
}

export interface NavigationConfig {
  basePath: string;
  items: NavItem[];
}

// CONTENIDO DE SECCIONES
export interface Banner {
  image: string;
  alt: string;
}

export interface ServiceItem {
  image: string;
  title: string;
  description: string;
  href?: string;
}

export interface EventItem {
  image: string;
  flyer?: string;
  title: string;
  href: string;
  eventDate: string;
  location?: string;
  eventType?: string;
}

export interface ProductDetailSpecItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProductDetailProduct {
  image: string;
  title: string;
  description: string;
}

export interface ProductDetailConfig {
  slug: string;
  banner: string;
  bannerAlt: string;
  title: string;
  subtitle: string;
  intro: string;
  productTitleHtml: string;
  productDescription: string[];
  specs: ProductDetailSpecItem[];
  product: ProductDetailProduct;
}
