import { animateSplitText, prefersReducedMotion, setupPlanGsap } from '../gsap';

const { gsap } = setupPlanGsap();

if (prefersReducedMotion()) {
  gsap.set(['.professional-event-card', '.carousel'], { clearProps: 'all' });
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
}
