import { animateSplitText, prefersReducedMotion, setupPlanGsap } from '../gsap';

const { gsap } = setupPlanGsap();
const root = document.documentElement;

if (prefersReducedMotion()) {
  root.removeAttribute('data-professional-detail-motion');
  gsap.set(
    [
      '.professional-detail-hero-image',
      '.professional-detail-hero-copy',
      '.professional-detail-intro',
      '.professional-detail-product-copy',
      '.professional-detail-product-image',
      '.professional-detail-spec-card',
    ],
    { clearProps: 'all' }
  );
} else {
  animateSplitText('.professional-detail-hero-title', {
    trigger: '.professional-detail-hero',
    split: 'lines,words',
    mask: 'lines',
    yPercent: 105,
    stagger: 0.035,
    duration: 0.82,
    ease: 'power3.out',
    start: 'top 86%',
  });

  animateSplitText('.professional-detail-product-title', {
    trigger: '.professional-detail-product-section',
    split: 'lines,words',
    mask: 'lines',
    yPercent: 110,
    stagger: 0.03,
    duration: 0.76,
    ease: 'power3.out',
    start: 'top 78%',
  });

  gsap.set('.professional-detail-hero-image', {
    scale: 0.9,
    filter: 'blur(12px)',
  });
  gsap.set('.professional-detail-hero-copy', {
    autoAlpha: 0,
    y: 20,
  });
  gsap.set('.professional-detail-hero-subtitle', {
    autoAlpha: 0,
    y: 14,
  });

  root.removeAttribute('data-professional-detail-motion');

  const heroTimeline = gsap.timeline();

  heroTimeline
    .to('.professional-detail-hero-image', {
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.35,
      ease: 'power2.out',
      clearProps: 'transform,filter',
    })
    .to(
      '.professional-detail-hero-copy',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.82,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.18'
    )
    .to(
      '.professional-detail-hero-subtitle',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.68,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.22'
    );

  gsap.from('.professional-detail-intro', {
    autoAlpha: 0,
    y: 18,
    duration: 0.72,
    ease: 'power2.out',
    clearProps: 'transform,opacity,visibility',
    scrollTrigger: {
      trigger: '.professional-detail-intro',
      start: 'top 84%',
      once: true,
    },
  });

  const productTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.professional-detail-product-section',
      start: 'top 76%',
      once: true,
    },
  });

  productTimeline
    .from('.professional-detail-product-copy', {
      autoAlpha: 0,
      y: 24,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.professional-detail-product-description > *',
      {
        autoAlpha: 0,
        y: 14,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.08,
        clearProps: 'transform,opacity,visibility',
      },
      '<0.12'
    )
    .from(
      '.professional-detail-product-image',
      {
        autoAlpha: 0,
        x: 24,
        scale: 0.985,
        duration: 0.9,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.08'
    );

  gsap.from('.professional-detail-spec-card', {
    autoAlpha: 0,
    y: 22,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.08,
    clearProps: 'transform,opacity,visibility',
    scrollTrigger: {
      trigger: '.professional-detail-specs',
      start: 'top 80%',
      once: true,
    },
  });

  gsap.utils.toArray<HTMLElement>('.professional-detail-spec-card').forEach((card) => {
    if (card.dataset.gsapHoverReady === 'true') {
      return;
    }

    card.dataset.gsapHoverReady = 'true';
    gsap.set(card, { boxShadow: '0 1px 10px 0 rgba(15, 23, 42, 0.05)' });

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -4,
        boxShadow: '0 12px 24px 0 rgba(15, 23, 42, 0.08)',
        duration: 0.42,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        boxShadow: '0 1px 10px 0 rgba(15, 23, 42, 0.05)',
        duration: 0.34,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  });
}
