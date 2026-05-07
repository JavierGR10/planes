import { animateSplitText, setupPlanGsap, prefersReducedMotion } from '../gsap';

const { gsap } = setupPlanGsap();

if (prefersReducedMotion()) {
  gsap.set(['.catalogue-text', '.catalogue-image', '.events-title', '.event-image', '.events-description'], {
    clearProps: 'all',
  });
} else {
  animateSplitText('.events-title', {
    trigger: '.events-section',
    split: 'words',
    yPercent: 118,
    rotateX: -24,
    stagger: 0.03,
    duration: 0.8,
    ease: 'power3.out',
    start: 'top 78%',
  });

  const defaultScrollTrigger = {
    start: 'top 75%',
    once: true,
  };

  gsap.from('.product-card', {
    autoAlpha: 0,
    y: 48,
    x: -14,
    scale: 0.94,
    duration: 0.82,
    ease: 'power3.out',
    stagger: 0.1,
    clearProps: 'transform,opacity,visibility',
    scrollTrigger: {
      trigger: '.products-grid',
      ...defaultScrollTrigger,
    },
  });

  const catalogueTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.catalogue-section',
      ...defaultScrollTrigger,
    },
  });

  catalogueTimeline
    .from('.catalogue-text', {
      autoAlpha: 0,
      x: -60,
      y: 18,
      rotateY: -6,
      transformOrigin: 'left center',
      duration: 0.92,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.catalogue-image',
      {
        autoAlpha: 0,
        x: 64,
        y: 10,
        rotateY: 8,
        transformOrigin: 'right center',
        scale: 0.95,
        duration: 0.92,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.12'
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
      y: 42,
      scale: 0.94,
      duration: 0.78,
      ease: 'power3.out',
      stagger: 0.12,
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.events-description',
      {
        autoAlpha: 0,
        y: 24,
        duration: 0.68,
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
      x: -72,
      y: 18,
      rotateY: -8,
      duration: 0.9,
      ease: 'power3.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.banner-product',
      {
        autoAlpha: 0,
        x: 72,
        y: 16,
        scale: 0.93,
        rotate: -3,
        duration: 0.94,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.1'
    );

  const videoSection = document.querySelector('.scrolling-section iframe')?.parentElement;

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
