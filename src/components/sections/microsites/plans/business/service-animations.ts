import { clearExpandableGridProps, initExpandableGridSection } from './expandable-grid';

type GSAPStatic = typeof import('gsap').gsap;

const SERVICE_CARD_SELECTOR = '.business-service-card';
const VISIBLE_SERVICE_SELECTOR = '.business-service-card[data-service-extra="false"]';
const EXTRA_SERVICE_SELECTOR = '.business-service-card[data-service-extra="true"]';
const SERVICES_GRID_SELECTOR = '[data-services-grid]';
const SERVICES_TOGGLE_SELECTOR = '[data-services-toggle]';
const SERVICES_EXTRA_SHELL_SELECTOR = '[data-services-extra-shell]';
const SERVICES_ANCHOR_SELECTOR = '#servicios';

const initBaseServiceReveal = (gsap: GSAPStatic, visibleServiceCards: HTMLElement[]) => {
  if (!visibleServiceCards.length) {
    return;
  }

  gsap.fromTo(
    visibleServiceCards,
    {
      autoAlpha: 0,
      y: 28,
      scale: 0.965,
      filter: 'blur(10px)',
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 0.62,
      ease: 'power3.out',
      stagger: 0.08,
      clearProps: 'transform,opacity,visibility,filter',
      scrollTrigger: {
        trigger: SERVICES_GRID_SELECTOR,
        start: 'top 78%',
        once: true,
      },
    }
  );
};

export const clearBusinessServiceAnimationProps = (gsap: GSAPStatic) => {
  clearExpandableGridProps(gsap, [SERVICE_CARD_SELECTOR, SERVICES_EXTRA_SHELL_SELECTOR]);
};

export const initBusinessServiceAnimations = (gsap: GSAPStatic) => {
  const visibleServiceCards = gsap.utils.toArray<HTMLElement>(VISIBLE_SERVICE_SELECTOR);
  const allServiceCards = gsap.utils.toArray<HTMLElement>(SERVICE_CARD_SELECTOR);

  initBaseServiceReveal(gsap, visibleServiceCards);
  initExpandableGridSection(gsap, {
    toggleSelector: SERVICES_TOGGLE_SELECTOR,
    extraShellSelector: SERVICES_EXTRA_SHELL_SELECTOR,
    extraItemSelector: EXTRA_SERVICE_SELECTOR,
    anchorSelector: SERVICES_ANCHOR_SELECTOR,
  });
};
