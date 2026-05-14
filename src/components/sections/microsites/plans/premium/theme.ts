import type { PremiumBrandTheme, PremiumNavbarTone } from './types';

const isHexColor = (value: string) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);

const expandHex = (value: string) => {
  if (value.length === 4) {
    return `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
  }

  return value;
};

const withAlpha = (value: string, alpha: number) => {
  if (!isHexColor(value)) {
    return value;
  }

  const normalized = expandHex(value).slice(1);
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const serializeCssVars = (vars: Record<string, string>) =>
  Object.entries(vars)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ');

export interface PremiumHeroThemeTokens {
  buttonColor: string;
  buttonHoverColor: string;
  buttonTextColor: string;
  titleColor: string;
  subtitleColor: string;
  descriptionColor: string;
  sliderTitleColor: string;
  sliderSubtitleColor: string;
  sliderActiveBorderColor: string;
  buttonBorderColor: string;
  buttonHoverBorderColor: string;
  buttonBorderRadius: string;
  buttonShadow: string;
  navigationColor: string;
  navigationBackground: string;
  navigationHoverBackground: string;
  paginationColor: string;
  paginationActiveColor: string;
}

export interface PremiumNavbarThemeTokens {
  initialTheme: PremiumNavbarTone;
  scrollTheme: PremiumNavbarTone;
  scrollBackground: string;
}

export interface PremiumFooterThemeTokens {
  background: string;
  dividerGradient: string;
}

export interface ResolvedPremiumTheme {
  cssVars: string;
  hero: PremiumHeroThemeTokens;
  navbar: PremiumNavbarThemeTokens;
  footer: PremiumFooterThemeTokens;
}

export const resolvePremiumTheme = (theme: PremiumBrandTheme): ResolvedPremiumTheme => {
  const pageBackground = theme.pageBackground ?? theme.secondaryColor;
  const textColor = theme.textColor ?? '#FFFFFF';
  const titleColor = theme.titleColor ?? textColor;
  const mutedTextColor = theme.mutedTextColor ?? '#92939E';
  const headingFontFamily = theme.typography?.headingFontFamily ?? 'inherit';
  const bodyFontFamily = theme.typography?.bodyFontFamily ?? 'inherit';
  const ctaFontFamily = theme.typography?.ctaFontFamily ?? 'inherit';
  const panelBorderColor = theme.surfaces?.cardBorderColor ?? 'rgba(255, 255, 255, 0.92)';
  const productCardFeaturedBackground = theme.surfaces?.productCardFeaturedBackground ?? '#20252e';
  const productCardDefaultBackground = theme.surfaces?.productCardDefaultBackground ?? '#303640';
  const productCardTextColor = theme.surfaces?.productCardTextColor ?? textColor;
  const productCardGradient =
    theme.surfaces?.productCardGradient ??
    `linear-gradient(to bottom, transparent 0%, ${withAlpha(pageBackground, 0.2)} 20%, ${withAlpha(pageBackground, 0.4)} 40%, ${withAlpha(pageBackground, 0.6)} 60%, rgba(17, 17, 17, 0.8) 80%, #010101 100%)`;
  const servicesPanelGradient =
    theme.surfaces?.servicesPanelGradient ??
    `linear-gradient(to bottom, transparent 0%, ${withAlpha(theme.accentColor, 0.1)} 10%, ${withAlpha(theme.accentColor, 0.65)} 20%)`;
  const serviceCardOverlay =
    theme.surfaces?.serviceCardOverlay ??
    `linear-gradient(to bottom, transparent 0%, ${withAlpha(pageBackground, 0.18)} 45%, ${withAlpha(pageBackground, 0.7)} 100%)`;
  const cataloguePanelGradient =
    theme.surfaces?.cataloguePanelGradient ??
    `linear-gradient(to bottom, transparent 0%, rgba(32, 32, 32, 0.1) 10%, rgba(1, 1, 1, 0.4) 40%, rgba(31, 36, 45, 0) 50%, ${withAlpha(pageBackground, 0.6)} 60%, ${withAlpha(pageBackground, 0.7)} 70%)`;
  const eventsPanelGradient =
    theme.surfaces?.eventsPanelGradient ??
    `linear-gradient(to bottom, transparent 0%, ${withAlpha(pageBackground, 0.9)} 45%, ${withAlpha(pageBackground, 1)} 100%)`;
  const cardHoverShadow = theme.surfaces?.productCardHoverShadow ?? withAlpha(theme.primaryColor, 0.35);
  const waveBorderColor = theme.buttons?.waveBorderColor ?? '#FFFFFF';
  const waveTextColor = theme.buttons?.waveTextColor ?? textColor;
  const waveHoverTextColor = theme.buttons?.waveHoverTextColor ?? theme.secondaryColor;
  const waveFillColor = theme.buttons?.waveFillColor ?? '#FFFFFF';
  const waveFilledBackground = theme.buttons?.waveFilledBackground ?? theme.buttonColor;
  const productCardCtaBorderColor = theme.buttons?.productCardCta?.borderColor ?? waveBorderColor;
  const productCardCtaTextColor = theme.buttons?.productCardCta?.textColor ?? waveTextColor;
  const productCardCtaHoverTextColor = theme.buttons?.productCardCta?.hoverTextColor ?? waveHoverTextColor;
  const productCardCtaFillColor = theme.buttons?.productCardCta?.fillColor ?? waveFillColor;
  const productCardCtaFilledBackground = theme.buttons?.productCardCta?.filledBackground ?? waveFilledBackground;
  const glowBorderColor = theme.buttons?.glowBorderColor ?? '#FFFFFF';
  const glowTextColor = theme.buttons?.glowTextColor ?? textColor;
  const glowHoverBackground = theme.buttons?.glowHoverBackground ?? theme.accentColor;
  const glowHoverBorderColor = theme.buttons?.glowHoverBorderColor ?? glowHoverBackground;
  const glowShadowColor = theme.buttons?.glowShadowColor ?? withAlpha(theme.accentColor, 0.65);
  const eventCardBackground = theme.eventCards?.background ?? '#FFFFFF';
  const eventCardTextColor = theme.eventCards?.textColor ?? '#161C2D';
  const eventCardHoverBackground = theme.eventCards?.hoverBackground ?? theme.buttonColor;
  const eventCardHoverTextColor = theme.eventCards?.hoverTextColor ?? '#FFFFFF';
  const eventCardIconBackground = theme.eventCards?.iconBackground ?? withAlpha(theme.primaryColor, 0.22);
  const eventCardIconColor = theme.eventCards?.iconColor ?? '#161C2D';
  const footerTextColor = theme.footer?.textColor ?? textColor;
  const footerMutedTextColor = theme.footer?.mutedTextColor ?? mutedTextColor;
  const footerLinkColor = theme.footer?.linkColor ?? textColor;
  const footerLinkHoverColor = theme.footer?.linkHoverColor ?? '#9CA3AF';
  const footerSocialColor = theme.footer?.socialColor ?? '#7D818D';
  const footerSocialHoverColor = theme.footer?.socialHoverColor ?? textColor;
  const footerBackground = theme.footer?.backgroundGradient ?? theme.footer?.backgroundColor ?? 'transparent';
  const footerDividerGradient =
    theme.footer?.dividerGradient ??
    'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)';
  const popupOverlay = theme.popup?.overlay ?? 'rgba(0, 0, 0, 0.7)';
  const popupCloseBackground = theme.popup?.closeBackground ?? 'rgba(0, 0, 0, 0.5)';
  const popupCloseHoverBackground = theme.popup?.closeHoverBackground ?? 'rgba(0, 0, 0, 0.7)';

  return {
    cssVars: serializeCssVars({
      '--premium-page-background': pageBackground,
      '--premium-text-color': textColor,
      '--premium-title-color': titleColor,
      '--premium-muted-text-color': mutedTextColor,
      '--microsite-heading-font-family': headingFontFamily,
      '--microsite-body-font-family': bodyFontFamily,
      '--microsite-cta-font-family': ctaFontFamily,
      '--premium-panel-border-color': panelBorderColor,
      '--premium-product-card-featured-background': productCardFeaturedBackground,
      '--premium-product-card-default-background': productCardDefaultBackground,
      '--premium-product-card-text-color': productCardTextColor,
      '--premium-product-card-gradient': productCardGradient,
      '--premium-services-panel-gradient': servicesPanelGradient,
      '--premium-service-card-overlay': serviceCardOverlay,
      '--premium-catalogue-panel-gradient': cataloguePanelGradient,
      '--premium-events-panel-gradient': eventsPanelGradient,
      '--premium-card-hover-shadow': cardHoverShadow,
      '--premium-button-wave-border-color': waveBorderColor,
      '--premium-button-wave-text-color': waveTextColor,
      '--premium-button-wave-hover-text-color': waveHoverTextColor,
      '--premium-button-wave-fill-color': waveFillColor,
      '--premium-button-wave-filled-background': waveFilledBackground,
      '--premium-product-card-cta-border-color': productCardCtaBorderColor,
      '--premium-product-card-cta-text-color': productCardCtaTextColor,
      '--premium-product-card-cta-hover-text-color': productCardCtaHoverTextColor,
      '--premium-product-card-cta-fill-color': productCardCtaFillColor,
      '--premium-product-card-cta-filled-background': productCardCtaFilledBackground,
      '--premium-button-glow-border-color': glowBorderColor,
      '--premium-button-glow-text-color': glowTextColor,
      '--premium-button-glow-hover-background': glowHoverBackground,
      '--premium-button-glow-hover-border-color': glowHoverBorderColor,
      '--premium-button-glow-shadow-color': glowShadowColor,
      '--premium-event-card-background': eventCardBackground,
      '--premium-event-card-text-color': eventCardTextColor,
      '--premium-event-card-hover-background': eventCardHoverBackground,
      '--premium-event-card-hover-text-color': eventCardHoverTextColor,
      '--premium-event-card-icon-background': eventCardIconBackground,
      '--premium-event-card-icon-color': eventCardIconColor,
      '--premium-footer-text-color': footerTextColor,
      '--premium-footer-muted-text-color': footerMutedTextColor,
      '--premium-footer-link-color': footerLinkColor,
      '--premium-footer-link-hover-color': footerLinkHoverColor,
      '--premium-footer-social-color': footerSocialColor,
      '--premium-footer-social-hover-color': footerSocialHoverColor,
      '--premium-popup-overlay': popupOverlay,
      '--premium-popup-close-background': popupCloseBackground,
      '--premium-popup-close-hover-background': popupCloseHoverBackground,
    }),
    hero: {
      buttonColor: theme.buttonColor,
      buttonHoverColor: theme.buttonHoverColor,
      buttonTextColor: theme.heroControls?.buttonTextColor ?? textColor,
      titleColor: theme.heroControls?.titleColor ?? titleColor,
      subtitleColor: theme.heroControls?.subtitleColor ?? textColor,
      descriptionColor: theme.heroControls?.descriptionColor ?? withAlpha(textColor, 0.9),
      sliderTitleColor: theme.heroControls?.sliderTitleColor ?? theme.heroControls?.titleColor ?? titleColor,
      sliderSubtitleColor: theme.heroControls?.sliderSubtitleColor ?? theme.heroControls?.subtitleColor ?? textColor,
      sliderActiveBorderColor: theme.heroControls?.sliderActiveBorderColor ?? '#FFFFFF',
      buttonBorderColor: theme.heroControls?.buttonBorderColor ?? '#FFFFFF',
      buttonHoverBorderColor:
        theme.heroControls?.buttonHoverBorderColor ?? theme.heroControls?.buttonBorderColor ?? '#FFFFFF',
      buttonBorderRadius: theme.heroControls?.buttonBorderRadius ?? '10px',
      buttonShadow: theme.heroControls?.buttonShadow ?? 'none',
      navigationColor: theme.heroControls?.navigationColor ?? '#FFFFFF',
      navigationBackground: theme.heroControls?.navigationBackground ?? 'rgba(0, 0, 0, 0.3)',
      navigationHoverBackground: theme.heroControls?.navigationHoverBackground ?? 'rgba(0, 0, 0, 0.5)',
      paginationColor: theme.heroControls?.paginationColor ?? 'rgba(255, 255, 255, 0.5)',
      paginationActiveColor: theme.heroControls?.paginationActiveColor ?? '#FFFFFF',
    },
    navbar: {
      initialTheme: theme.navbar?.initialTheme ?? 'dark',
      scrollTheme: theme.navbar?.scrollTheme ?? 'dark',
      scrollBackground: theme.navbar?.scrollBackground ?? pageBackground,
    },
    footer: {
      background: footerBackground,
      dividerGradient: footerDividerGradient,
    },
  };
};
