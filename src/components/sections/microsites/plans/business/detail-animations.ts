import { animateSplitText, prefersReducedMotion, setupPlanGsap } from '../gsap';

const { gsap } = setupPlanGsap();
const root = document.documentElement;

if (prefersReducedMotion()) {
  root.removeAttribute('data-business-detail-motion');
  gsap.set(
    [
      '.business-detail-hero-surface',
      '.business-detail-hero-veil',
      '.business-detail-hero-copy',
      '.business-detail-product-copy',
      '.business-detail-product-image',
      '.business-detail-banner-image',
      '.business-detail-feature-card',
      '.business-detail-feature-media',
      '.business-detail-feature-copy',
    ],
    { clearProps: 'all' }
  );
} else {
  animateSplitText('.business-detail-hero-title', {
    trigger: '.business-detail-hero',
    split: 'words,lines',
    mask: 'lines',
    yPercent: 108,
    stagger: 0.035,
    duration: 0.82,
    ease: 'power3.out',
    start: 'top 86%',
  });

  animateSplitText('.business-detail-product-title', {
    trigger: '.business-detail-product-section',
    split: 'words,lines',
    mask: 'lines',
    yPercent: 110,
    stagger: 0.03,
    duration: 0.78,
    ease: 'power3.out',
    start: 'top 78%',
  });

  gsap.set('.business-detail-hero-veil', {
    autoAlpha: 1,
    display: 'block',
    scaleX: 1,
    transformOrigin: 'left center',
  });
  gsap.set('.business-detail-hero-copy', {
    autoAlpha: 0,
    y: 28,
  });
  gsap.set('.business-detail-hero-subtitle', {
    autoAlpha: 0,
    y: 18,
  });

  root.removeAttribute('data-business-detail-motion');

  gsap
    .timeline()
    .to('.business-detail-hero-veil', {
      scaleX: 0,
      autoAlpha: 0,
      duration: 1.05,
      ease: 'power4.inOut',
      onComplete: () => {
        gsap.set('.business-detail-hero-veil', {
          display: 'none',
          pointerEvents: 'none',
        });
      },
    })
    .to(
      '.business-detail-hero-copy',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.76,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.14'
    )
    .to(
      '.business-detail-hero-subtitle',
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.62,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.18'
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.business-detail-product-section',
        start: 'top 76%',
        once: true,
      },
    })
    .from('.business-detail-product-copy', {
      autoAlpha: 0,
      y: 28,
      duration: 0.78,
      ease: 'power2.out',
      clearProps: 'transform,opacity,visibility',
    })
    .from(
      '.business-detail-product-description > *',
      {
        autoAlpha: 0,
        y: 14,
        duration: 0.58,
        ease: 'power2.out',
        stagger: 0.08,
        clearProps: 'transform,opacity,visibility',
      },
      '<0.12'
    )
    .from(
      '.business-detail-product-image',
      {
        autoAlpha: 0,
        x: 28,
        scale: 0.98,
        duration: 0.9,
        ease: 'power2.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.08'
    );

  gsap.from('.business-detail-banner-image', {
    autoAlpha: 0,
    clipPath: 'inset(0 100% 0 0 round 24px)',
    y: 28,
    scale: 0.97,
    duration: 1,
    ease: 'power3.inOut',
    clearProps: 'transform,opacity,visibility,clipPath',
    scrollTrigger: {
      trigger: '.business-detail-banner-section',
      start: 'top 95%',
      once: true,
    },
  });

  const featureCards = gsap.utils.toArray<HTMLElement>('.business-detail-feature-card');

  featureCards.forEach((card, index) => {
    const media = card.querySelector('.business-detail-feature-media');
    const copy = card.querySelector('.business-detail-feature-copy');
    const fromLeft = index % 2 === 0;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 82%',
          once: true,
        },
      })
      .from(media, {
        autoAlpha: 0,
        x: fromLeft ? -36 : 36,
        clipPath: 'inset(0 0 100% 0)',
        duration: 0.88,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility,clipPath',
      })
      .from(
        copy,
        {
          autoAlpha: 0,
          x: fromLeft ? 40 : -40,
          duration: 1,
          ease: 'power4.inOut',
          clearProps: 'transform,opacity,visibility',
        },
        '<0.12'
      );
  });
}
