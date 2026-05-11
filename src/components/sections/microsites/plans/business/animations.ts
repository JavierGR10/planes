import { animateSplitText, setupPlanGsap, prefersReducedMotion } from '../gsap';
import { clearBusinessProductAnimationProps, initBusinessProductAnimations } from './product-animations';

const { gsap } = setupPlanGsap();

if (prefersReducedMotion()) {
  gsap.set(
    [
      '.business-products-title',
      '.catalogue-text',
      '.catalogue-image',
      '.events-title',
      '.event-image',
      '.events-description',
      '.banner-content',
      '.banner-product',
    ],
    {
      clearProps: 'all',
    }
  );

  clearBusinessProductAnimationProps(gsap);
} else {
  animateSplitText('.business-products-title');

  animateSplitText('.events-title', {
    trigger: '.events-section',
    split: 'words,lines',
    mask: 'lines',
    yPercent: 122,
    rotateX: -24,
    stagger: 0.03,
    duration: 0.8,
    ease: 'power3.out',
    start: 'top 78%',
  });

  animateSplitText('.banner-description', {
    trigger: '.banner-section',
    split: 'words,lines',
    linesClass: 'hidden',
    mask: 'lines',
    yPercent: 110,
    ease: 'expo.out',
    stagger: 0.015,
  });

  const defaultScrollTrigger = {
    start: 'top 85%',
    once: true,
  };

  initBusinessProductAnimations(gsap);

  const catalogueTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.catalogue-section',
      ...defaultScrollTrigger,
    },
  });

  catalogueTimeline
    .from('.catalogue-text', {
      autoAlpha: 0,
      x: -72,
      y: 22,
      rotateY: -8,
      transformOrigin: 'left center',
      duration: 1,
      ease: 'expo.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.catalogue-image',
      {
        autoAlpha: 0,
        x: 86,
        y: 12,
        rotateY: 10,
        transformOrigin: 'right center',
        scale: 0.92,
        duration: 1.02,
        ease: 'expo.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.08'
    );

  const eventsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.events-section',
      ...defaultScrollTrigger,
    },
  });

  eventsTimeline
    .from('.event-image', {
      autoAlpha: 0,
      y: 48,
      scale: 0.92,
      rotate: -1.5,
      duration: 0.84,
      ease: 'expo.out',
      stagger: 0.12,
      clearProps: 'transform,opacity,visibility',
    })
    .from('.events-description', {
      autoAlpha: 0,
      filter: 'blur(12px)',
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
    });

  const bannerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.banner-section',
      ...defaultScrollTrigger,
    },
  });

  bannerTimeline
    .from('.banner-title', {
      autoAlpha: 0,
      filter: 'blur(10px)',
      y: 26,
      scale: 0.985,
      duration: 0.72,
      ease: 'power2.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.banner-content',
      {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<'
    )
    .from(
      '.banner-product',
      {
        autoAlpha: 0,
        clipPath: 'inset(0 0 100% 0 round 24px)',
        y: 44,
        scale: 0.94,
        duration: 1.5,
        ease: 'power3.inOut',
        clearProps: 'transform,opacity,visibility,clipPath',
      },
      '<0.12'
    );

  const videoSection = document.querySelector('section iframe')?.parentElement;

  if (videoSection) {
    gsap.from(videoSection, {
      autoAlpha: 0,
      y: 28,
      scale: 0.975,
      duration: 0.9,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
      scrollTrigger: {
        trigger: videoSection,
        ...defaultScrollTrigger,
      },
    });
  }
}
