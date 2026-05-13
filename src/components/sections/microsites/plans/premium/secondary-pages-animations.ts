import { prepareSplitText, prefersReducedMotion, setupPlanGsap } from '../gsap';

const { gsap } = setupPlanGsap();

const defaultScrollTrigger = {
  start: 'top 76%',
  once: true,
};

const mediaScrollTrigger = {
  start: 'top 92%',
  once: true,
};

const copyScrollTrigger = {
  start: 'top 90%',
  once: true,
};

const listScrollTrigger = {
  start: 'top 88%',
  once: true,
};

const softEase = 'power2.out';
const softEaseInOut = 'power2.inOut';

if (prefersReducedMotion()) {
  gsap.set(
    [
      '.premium-secondary-hero',
      '.premium-secondary-hero-media',
      '.premium-secondary-hero-copy',
      '.premium-about-image-block',
      '.premium-about-grid',
      '.premium-detail-banner',
      '.premium-detail-banner img',
      '.premium-detail-section',
      '.premium-detail-copy',
      '.premium-detail-media',
      '.premium-detail-feature-item',
      '.premium-detail-support-block',
      '.premium-detail-divider',
    ],
    { clearProps: 'all' }
  );
} else {
  const secondaryHero = document.querySelector('.premium-secondary-hero');

  if (secondaryHero) {
    const heroTitle = secondaryHero.querySelector('.premium-secondary-title');
    const heroSubtitle = secondaryHero.querySelector('.premium-secondary-subtitle');
    const preparedHeroTitle =
      heroTitle instanceof HTMLElement
        ? prepareSplitText(heroTitle, {
            split: 'lines',
            mask: 'lines',
            yPercent: 200,
          })
        : null;
    const preparedHeroSubtitle =
      heroSubtitle instanceof HTMLElement
        ? prepareSplitText(heroSubtitle, {
            split: 'lines',
            mask: 'lines',
            yPercent: 112,
          })
        : null;

    const heroTimeline = gsap.timeline({ defaults: { clearProps: 'transform,opacity,visibility,filter' } });

    heroTimeline
      .from(secondaryHero, {
        autoAlpha: 0,
        scale: 1.018,
        y: 18,
        clipPath: 'inset(0 0 14% 0 round 24px)',
        filter: 'blur(8px)',
        duration: 1.35,
        ease: softEaseInOut,
        clearProps: 'transform,opacity,visibility,filter,clipPath',
      })
      .from(
        '.premium-secondary-hero-copy',
        {
          autoAlpha: 0,
          y: 24,
          duration: 0.9,
          ease: softEase,
          clearProps: 'transform,opacity,visibility',
        },
        '<0.14'
      );

    if (preparedHeroTitle?.parts.length) {
      heroTimeline.to(
        preparedHeroTitle.parts,
        {
          autoAlpha: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.015,
          ease: 'titleEase',
          clearProps: 'transform,opacity,visibility,willChange',
        },
        '<0.08'
      );
    }

    if (preparedHeroSubtitle?.parts.length) {
      heroTimeline.to(
        preparedHeroSubtitle.parts,
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.95,
          stagger: 0.085,
          ease: 'titleEase',
          clearProps: 'transform,opacity,visibility,willChange',
        },
        '<0.7'
      );
    }
  }

  const aboutImageBlock = document.querySelector('.premium-about-image-block');

  if (aboutImageBlock) {
    const aboutImageTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutImageBlock,
        start: 'top 84%',
        once: true,
      },
    });

    aboutImageTimeline
      .from('.premium-about-image', {
        autoAlpha: 0,
        scale: 1.04,
        y: 26,
        clipPath: 'inset(10% 0 0 0 round 24px)',
        filter: 'blur(10px)',
        duration: 1.25,
        ease: softEaseInOut,
        clearProps: 'transform,opacity,visibility,filter,clipPath',
      })
      .from(
        '.premium-about-headline',
        {
          autoAlpha: 0,
          y: 34,
          duration: 1.05,
          ease: softEase,
          clearProps: 'transform,opacity,visibility',
        },
        '<0.22'
      );
  }

  const aboutGrid = document.querySelector('.premium-about-grid');

  if (aboutGrid) {
    const aboutGridTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutGrid,
        ...defaultScrollTrigger,
      },
    });

    aboutGridTimeline
      .from('.premium-detail-divider', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.85,
        ease: softEase,
        clearProps: 'transform',
      })
      .from(
        '.premium-about-grid-title',
        {
          autoAlpha: 0,
          x: -24,
          duration: 0.9,
          ease: softEase,
          clearProps: 'transform,opacity,visibility',
        },
        '<0.08'
      )
      .from(
        '.premium-about-grid-copy',
        {
          autoAlpha: 0,
          x: 18,
          duration: 0.9,
          ease: softEase,
          clearProps: 'transform,opacity,visibility',
        },
        '<0.1'
      );
  }

  const detailBanner = document.querySelector('.premium-detail-banner');

  if (detailBanner) {
    const detailBannerMedia = detailBanner.querySelector('img, video, picture') ?? detailBanner;

    gsap.from(detailBannerMedia, {
      autoAlpha: 0,
      clipPath: 'inset(0 100% 0 0 round 24px)',
      y: 18,
      scale: 0.985,
      duration: 1.2,
      ease: softEaseInOut,
      clearProps: 'transform,opacity,visibility,clipPath',
      scrollTrigger: {
        trigger: detailBanner,
        ...mediaScrollTrigger,
      },
    });
  }

  gsap.utils.toArray<HTMLElement>('.premium-detail-section').forEach((section, index) => {
    const media = gsap.utils.toArray<HTMLElement>('.premium-detail-media', section);
    const copies = gsap.utils.toArray<HTMLElement>('.premium-detail-copy', section);
    const features = gsap.utils.toArray<HTMLElement>('.premium-detail-feature-item', section);

    copies.forEach((copyBlock) => {
      const copyChildren = copyBlock.querySelectorAll(':scope > *');

      if (!copyChildren.length) {
        return;
      }

      gsap.from(copyChildren, {
        autoAlpha: 0,
        y: 20,
        duration: 0.96,
        stagger: 0.11,
        ease: softEase,
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: copyBlock,
          ...copyScrollTrigger,
        },
      });
    });

    media.forEach((mediaItem, mediaIndex) => {
      const mediaTarget = mediaItem.querySelector('img, video, picture') ?? mediaItem;
      const fromLeft = (index + mediaIndex) % 2 === 0;

      gsap.from(mediaTarget, {
        autoAlpha: 0,
        x: fromLeft ? -24 : 24,
        y: 14,
        scale: 0.985,
        clipPath: 'inset(0 0 100% 0 round 18px)',
        duration: 1.05,
        ease: softEase,
        clearProps: 'transform,opacity,visibility,clipPath',
        scrollTrigger: {
          trigger: mediaItem,
          ...mediaScrollTrigger,
        },
      });
    });

    if (features.length) {
      gsap.from(features, {
        autoAlpha: 0,
        x: -10,
        duration: 0.92,
        stagger: 0.14,
        ease: softEase,
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: features[0].parentElement ?? section,
          ...listScrollTrigger,
        },
      });
    }
  });
}
