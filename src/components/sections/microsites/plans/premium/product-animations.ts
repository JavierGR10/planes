type GSAPStatic = typeof import('gsap').gsap;

import { animateSplitText, createSplitTextHoverAnimation } from '../gsap';

const PRODUCT_CARD_SELECTOR = '.premium-product-card';
const PRODUCT_SECTION_SELECTOR = '.premium-products-section';

const getOrderedCards = (cards: HTMLElement[]) => {
  return [...cards].sort((left, right) => {
    const leftRect = left.getBoundingClientRect();
    const rightRect = right.getBoundingClientRect();

    if (Math.abs(leftRect.top - rightRect.top) > 12) {
      return leftRect.top - rightRect.top;
    }

    const viewportCenter = window.innerWidth / 2;
    const leftDistance = Math.abs(leftRect.left + leftRect.width / 2 - viewportCenter);
    const rightDistance = Math.abs(rightRect.left + rightRect.width / 2 - viewportCenter);

    return leftDistance - rightDistance;
  });
};

const initProductReveal = (gsap: GSAPStatic, cards: HTMLElement[]) => {
  if (!cards.length) {
    return;
  }

  const orderedCards = getOrderedCards(cards);

  orderedCards.forEach((card, index) => {
    const descriptionStart = 'top 88%';
    const cardTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: 'top 94%',
        end: 'top 62%',
        scrub: 0.9,
      },
    });

    cardTimeline
      .fromTo(
        card,
        {
          autoAlpha: 0,
          y: 96,
          filter: 'blur(12px)',
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'none',
          clearProps: 'transform,opacity,visibility,filter',
        },
        0
      )
      .fromTo(
        card.querySelectorAll(
          '.premium-product-card__eyebrow, .premium-product-card__title-stack, .premium-product-card__description-title'
        ),
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          ease: 'none',
          stagger: 0.045,
          clearProps: 'transform,opacity,visibility',
        },
        0.12 + index * 0.015
      )
      .fromTo(
        card.querySelector('.premium-product-card__image-wrap'),
        {
          autoAlpha: 0,
          y: 28,
          scale: 0.975,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          ease: 'none',
          clearProps: 'transform,opacity,visibility',
        },
        0.22 + index * 0.015
      );

    const description = card.querySelector<HTMLElement>('.premium-product-card__description');
    const cta = card.querySelector<HTMLElement>('.premium-product-card__cta');

    if (description) {
      animateSplitText(description, {
        trigger: description,
        start: descriptionStart,
        split: 'lines',
        mask: 'lines',
        yPercent: 118,
        stagger: 0.045,
        duration: 0.72,
        ease: 'power2.inOut',
      });
    }

    if (cta) {
      if (description) {
        gsap.fromTo(
          cta,
          {
            autoAlpha: 0,
            scale: 0.85,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.72,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: description,
              start: descriptionStart,
              once: true,
            },
          }
        );
      } else {
        cardTimeline.fromTo(
          cta,
          {
            autoAlpha: 0,
            scale: 0.85,
          },
          {
            autoAlpha: 1,
            scale: 1,
            ease: 'none',
            clearProps: 'transform,opacity,visibility',
          },
          0.28 + index * 0.015
        );
      }
    }
  });
};

const initProductHover = (gsap: GSAPStatic, cards: HTMLElement[]) => {
  cards.forEach((card) => {
    if (card.dataset.gsapHoverReady === 'true') {
      return;
    }

    card.dataset.gsapHoverReady = 'true';

    const imageWrap = card.querySelector<HTMLElement>('.premium-product-card__image-wrap');
    const image = card.querySelector<HTMLElement>('.premium-product-card__image');
    const cta = card.querySelector<HTMLElement>('.premium-product-card__cta');
    const titlePrimary = card.querySelector<HTMLElement>('.premium-product-card__title-line--primary');
    const titleSecondary = card.querySelector<HTMLElement>('.premium-product-card__title-line--secondary');
    const titleSwap =
      titlePrimary && titleSecondary
        ? createSplitTextHoverAnimation(titlePrimary, titleSecondary, {
            enterDuration: 0.38,
            exitDuration: 0.34,
            exitStagger: 0.02,
            enterEase: 'power2.out',
            exitEase: 'power2.in',
          })
        : null;

    card.addEventListener('mouseenter', () => {
      if (image) {
        gsap.to(image, {
          y: -4,
          scale: 1.05,
          duration: 0.55,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
      titleSwap?.onEnter();
    });

    card.addEventListener('mouseleave', () => {
      const imageTargets = [imageWrap, image].filter((target): target is HTMLElement => Boolean(target));

      if (imageTargets.length) {
        gsap.to(imageTargets, {
          y: 0,
          scale: 1,
          duration: 0.42,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
      titleSwap?.onLeave();
    });
  });
};

export const clearPremiumProductAnimationProps = (gsap: GSAPStatic) => {
  gsap.set(
    [
      PRODUCT_CARD_SELECTOR,
      '.premium-product-card__image-wrap',
      '.premium-product-card__image',
      '.premium-product-card__cta',
      '.premium-product-card__title-line--primary',
      '.premium-product-card__title-line--secondary',
      '.premium-product-card__eyebrow',
      '.premium-product-card__title-stack',
      '.premium-product-card__description-title',
      '.premium-product-card__description',
    ],
    { clearProps: 'all' }
  );
};

export const initPremiumProductAnimations = (gsap: GSAPStatic) => {
  const cards = gsap.utils.toArray<HTMLElement>(PRODUCT_CARD_SELECTOR);

  initProductReveal(gsap, cards);
  initProductHover(gsap, cards);
};
