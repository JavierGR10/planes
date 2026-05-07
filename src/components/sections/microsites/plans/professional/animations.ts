import { animateSplitText, prefersReducedMotion, setupPlanGsap } from '../gsap';

const { gsap } = setupPlanGsap();
const editorialRevealEase = 'expo.out';
const editorialHoverEase = 'power3.out';
const editorialReturnEase = 'power2.out';

if (prefersReducedMotion()) {
  gsap.set(['.product', '.professional-event-card', '.carousel'], { clearProps: 'all' });
} else {
  animateSplitText('.split-title');

  animateSplitText('.professional-event-card-title', {
    trigger: '#events',
    split: 'words',
    yPercent: 105,
    stagger: 0.02,
    duration: 0.55,
    ease: 'power2.out',
    start: 'top 78%',
  });

  gsap.from('.carousel', {
    autoAlpha: 0,
    y: 18,
    scale: 0.99,
    duration: 0.8,
    ease: 'power2.out',
    clearProps: 'transform,opacity,visibility',
  });

  gsap.from('.product', {
    autoAlpha: 0,
    y: 24,
    scale: 0.985,
    duration: 1.05,
    ease: editorialRevealEase,
    stagger: 0.1,
    force3D: true,
    clearProps: 'transform,opacity,visibility',
    scrollTrigger: {
      trigger: '.products-wrapper',
      start: 'top 72%',
      once: true,
    },
  });

  gsap.from('.professional-event-card', {
    autoAlpha: 0,
    y: 34,
    scale: 0.96,
    duration: 0.72,
    ease: 'power2.out',
    stagger: 0.08,
    clearProps: 'transform,opacity,visibility',
    scrollTrigger: {
      trigger: '#events',
      start: 'top 74%',
      once: true,
    },
  });

  gsap.utils.toArray<HTMLElement>('.product').forEach((card) => {
    if (card.dataset.gsapHoverReady === 'true') {
      return;
    }

    card.dataset.gsapHoverReady = 'true';
    gsap.set(card, { boxShadow: '0 2px 16px 0 rgba(36,39,42,0.10)' });

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.012,
        boxShadow: '0 18px 38px 0 rgba(36,39,42,0.14)',
        duration: 0.55,
        ease: editorialHoverEase,
        overwrite: 'auto',
        force3D: true,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: '0 2px 16px 0 rgba(36,39,42,0.10)',
        duration: 0.42,
        ease: editorialReturnEase,
        overwrite: 'auto',
        force3D: true,
      });
    });
  });
}
