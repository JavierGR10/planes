import type { MicrositeResponsiveImage } from '../shared.types';

export interface ResolvedResponsiveImageSources {
  alt: string;
  desktopSrc?: string;
  tabletSrc?: string;
  mobileSrc: string;
}

export const resolveResponsiveImageSources = (
  fallbackSrc: string | undefined,
  fallbackAlt: string,
  responsiveImage?: MicrositeResponsiveImage,
): ResolvedResponsiveImageSources | null => {
  const mobileSrc = responsiveImage?.mobile?.image ?? fallbackSrc;

  if (!mobileSrc) {
    return null;
  }

  return {
    alt: responsiveImage?.mobile?.alt ?? responsiveImage?.tablet?.alt ?? responsiveImage?.desktop?.alt ?? fallbackAlt,
    desktopSrc: responsiveImage?.desktop?.image,
    tabletSrc: responsiveImage?.tablet?.image,
    mobileSrc,
  };
};