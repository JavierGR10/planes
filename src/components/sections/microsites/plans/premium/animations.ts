import { animateSplitText, setupPlanGsap, prefersReducedMotion } from '../gsap';
import { clearPremiumProductAnimationProps, initPremiumProductAnimations } from './product-animations.ts';

const { gsap } = setupPlanGsap();

if (prefersReducedMotion()) {
  gsap.set(
    [
      '.premium-event-card',
      '.section-title',
      '.events-description',
      '.item-stagger',
      '.catalogue-text',
      '.catalogue-image',
      '.banner-content',
      '.banner-product',
      '.scrolling-section',
    ],
    {
      clearProps: 'all',
    }
  );

  clearPremiumProductAnimationProps(gsap);
} else {
  animateSplitText('.section-title', {
    split: 'chars',
    yPercent: 135,
    rotateX: -85,
    skewY: 6,
    stagger: 0.012,
    duration: 0.9,
    ease: 'expo.out',
    start: 'top 82%',
  });

  animateSplitText('.catalogue-text', {
    trigger: '.catalogue-section',
    split: 'words',
    yPercent: 115,
    xPercent: 10,
    rotateY: -18,
    stagger: 0.018,
    duration: 0.9,
    ease: 'expo.out',
    start: 'top 76%',
  });

  const defaultScrollTrigger = {
    start: 'top 74%',
    once: true,
  };

  initPremiumProductAnimations(gsap);

  const catalogueTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.catalogue-section',
      ...defaultScrollTrigger,
    },
  });

  catalogueTimeline.from('.catalogue-image', {
    autoAlpha: 0,
    x: 110,
    y: 28,
    rotateY: 20,
    scale: 0.89,
    transformOrigin: 'right center',
    duration: 1.15,
    ease: 'expo.out',
    clearProps: 'transform,opacity,visibility',
  });

  const eventsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.events-section',
      ...defaultScrollTrigger,
    },
  });

  eventsTimeline
    .from('.event-item', {
      autoAlpha: 0,
      y: 58,
      rotateX: -24,
      scale: 0.9,
      transformOrigin: '50% 100%',
      duration: 0.92,
      ease: 'expo.out',
      stagger: 0.18,
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.premium-event-card__title',
      {
        autoAlpha: 0,
        x: -18,
        duration: 0.62,
        ease: 'power3.out',
        stagger: 0.12,
        clearProps: 'transform,opacity,visibility',
      },
      '<0.16'
    )
    .from(
      '.premium-event-card__icon',
      {
        autoAlpha: 0,
        x: -14,
        scale: 0.88,
        duration: 0.56,
        ease: 'power3.out',
        stagger: 0.12,
        clearProps: 'transform,opacity,visibility',
      },
      '<0.05'
    )
    .from(
      '.events-description',
      {
        autoAlpha: 0,
        y: 28,
        duration: 0.72,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.2'
    );

  const bannerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.banner-section',
      ...defaultScrollTrigger,
    },
  });

  bannerTimeline
    .from('.banner-content', {
      autoAlpha: 0,
      x: -96,
      y: 18,
      rotateY: -14,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'expo.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.banner-product',
      {
        autoAlpha: 0,
        x: 110,
        y: 10,
        scale: 0.84,
        rotate: -8,
        rotateY: 18,
        duration: 1.2,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.08'
    );

  gsap.utils.toArray<HTMLElement>('.section-container').forEach((section) => {
    if (section.dataset.animated === 'true') {
      return;
    }

    section.dataset.animated = 'true';

    const items = section.querySelectorAll('.item-stagger:not(.premium-product-card)');

    if (!items.length) {
      return;
    }

    gsap.from(items, {
      autoAlpha: 0,
      y: 64,
      rotateY: 12,
      scale: 0.92,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.14,
      clearProps: 'transform,opacity,visibility',
      scrollTrigger: {
        trigger: section,
        ...defaultScrollTrigger,
      },
    });
  });

  const scrollingSection = document.querySelector('.scrolling-section');

  if (scrollingSection) {
    gsap.from(scrollingSection, {
      autoAlpha: 0,
      y: 36,
      scale: 0.96,
      duration: 1,
      ease: 'expo.out',
      clearProps: 'transform,opacity,visibility',
      scrollTrigger: {
        trigger: scrollingSection,
        ...defaultScrollTrigger,
      },
    });
  }
}
