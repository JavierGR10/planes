type GSAPStatic = typeof import('gsap').gsap;

const PRODUCT_CARD_SELECTOR = '.product-card';
const VISIBLE_PRODUCT_SELECTOR = '.product-card[data-product-extra="false"]';
const EXTRA_PRODUCT_SELECTOR = '.product-card[data-product-extra="true"]';
const PRODUCTS_GRID_SELECTOR = '.products-grid';
const PRODUCTS_TOGGLE_SELECTOR = '[data-products-toggle]';
const PRODUCTS_EXTRA_SHELL_SELECTOR = '[data-products-extra-shell]';
const PRODUCTS_ANCHOR_SELECTOR = '#products';

const scrollToProductsAnchor = () => {
  const target = document.querySelector<HTMLElement>(PRODUCTS_ANCHOR_SELECTOR);

  if (!target) {
    return;
  }

  const lenis = (
    window as Window & {
      lenis?: { scrollTo?: (scrollTarget: Element | string, options?: { offset?: number }) => void };
    }
  ).lenis;

  if (lenis?.scrollTo) {
    lenis.scrollTo(target, { offset: -24 });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  if (window.location.hash !== '#products') {
    window.history.replaceState(window.history.state, '', '#products');
  }
};

const animateProductCardContent = (gsap: GSAPStatic, timeline: GSAPTimeline, card: HTMLElement, index: number) => {
  timeline
    .from(
      card.querySelectorAll('.product-card-copy > *'),
      {
        autoAlpha: 0,
        filter: 'blur(10px)',
        x: -20,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.04,
        clearProps: 'transform,opacity,visibility,filter',
      },
      index === 0 ? '<0.18' : '<0.24'
    )
    .from(
      card.querySelector('.product-card-image'),
      {
        autoAlpha: 0,
        y: 18,
        scale: 0.95,
        rotate: index % 2 === 0 ? -5 : 5,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform,opacity,visibility',
      },
      '<0.3'
    )
    .from(
      card.querySelectorAll('.product-card-meta > *'),
      {
        autoAlpha: 0,
        y: 12,
        duration: 0.8,
        ease: 'power2.inOut',
        stagger: 0.35,
        clearProps: 'transform,opacity,visibility',
      },
      '<0.3'
    );
};

const setCollapsedExtraProducts = (
  gsap: GSAPStatic,
  productsExtraShell: HTMLElement,
  extraProductCards: HTMLElement[]
) => {
  gsap.set(productsExtraShell, {
    autoAlpha: 0,
    clipPath: 'inset(0 0 100% 0 round 12px)',
    height: 0,
    overflow: 'hidden',
  });

  gsap.set(extraProductCards, {
    autoAlpha: 0,
    y: 28,
    scale: 0.965,
    filter: 'blur(10px)',
  });
};

const initBaseProductReveal = (gsap: GSAPStatic, visibleProductCards: HTMLElement[]) => {
  if (!visibleProductCards.length) {
    return;
  }

  const productTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: PRODUCTS_GRID_SELECTOR,
      start: 'top 75%',
      once: true,
    },
  });

  productTimeline.fromTo(
    visibleProductCards,
    {
      autoAlpha: 0,
      y: 38,
      x: (_index: number) => (_index % 2 === 0 ? -10 : 10),
      scale: 0.97,
      rotateX: 3,
    },
    {
      autoAlpha: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      clearProps: 'transform,opacity,visibility',
    }
  );

  visibleProductCards.forEach((card, index) => {
    animateProductCardContent(gsap, productTimeline, card, index);
  });
};

const initExpandableProducts = (gsap: GSAPStatic, allProductCards: HTMLElement[]) => {
  const productsToggle = document.querySelector<HTMLButtonElement>(PRODUCTS_TOGGLE_SELECTOR);
  const productsExtraShell = document.querySelector<HTMLElement>(PRODUCTS_EXTRA_SHELL_SELECTOR);
  const extraProductCards = allProductCards.filter((card) => card.dataset.productExtra === 'true');

  if (!productsToggle || !productsExtraShell || !extraProductCards.length) {
    return;
  }

  if (productsToggle.dataset.gsapExpandReady === 'true') {
    return;
  }

  productsToggle.dataset.gsapExpandReady = 'true';

  let isExpanded = false;

  const updateToggleLabel = () => {
    productsToggle.textContent = isExpanded
      ? (productsToggle.dataset.collapseLabel ?? 'Ver menos productos')
      : (productsToggle.dataset.expandLabel ?? 'Ver todos los productos');
    productsToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  };

  setCollapsedExtraProducts(gsap, productsExtraShell, extraProductCards);
  updateToggleLabel();

  productsToggle.addEventListener('click', () => {
    gsap.killTweensOf(productsExtraShell);
    gsap.killTweensOf(extraProductCards);

    if (!isExpanded) {
      productsExtraShell.hidden = false;
      setCollapsedExtraProducts(gsap, productsExtraShell, extraProductCards);

      gsap
        .timeline({
          defaults: { overwrite: 'auto' },
          onComplete: () => {
            gsap.set(productsExtraShell, {
              clearProps: 'height,overflow,clipPath,opacity,visibility',
            });
            gsap.set(extraProductCards, {
              clearProps: 'transform,opacity,visibility,filter',
            });
          },
        })
        .to(productsExtraShell, {
          autoAlpha: 1,
          clipPath: 'inset(0 0 0% 0 round 12px)',
          height: 'auto',
          duration: 0.84,
          ease: 'power3.inOut',
        })
        .to(
          extraProductCards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.62,
            ease: 'power3.out',
            stagger: 0.08,
            clearProps: 'transform,opacity,visibility,filter',
          },
          '>-0.16'
        );

      isExpanded = true;
      updateToggleLabel();
      return;
    }

    gsap
      .timeline({
        defaults: { overwrite: 'auto' },
        onComplete: () => {
          productsExtraShell.hidden = true;
          setCollapsedExtraProducts(gsap, productsExtraShell, extraProductCards);
          scrollToProductsAnchor();
        },
      })
      .to(extraProductCards, {
        autoAlpha: 0,
        y: 18,
        scale: 0.98,
        filter: 'blur(8px)',
        duration: 0.28,
        ease: 'power2.in',
        stagger: {
          each: 0.03,
          from: 'end',
        },
      })
      .to(
        productsExtraShell,
        {
          autoAlpha: 0,
          clipPath: 'inset(0 0 100% 0 round 12px)',
          height: 0,
          overflow: 'hidden',
          duration: 0.6,
          ease: 'power3.inOut',
        },
        '<0.04'
      );

    isExpanded = false;
    updateToggleLabel();
  });
};

const initProductHover = (gsap: GSAPStatic, allProductCards: HTMLElement[]) => {
  allProductCards.forEach((card) => {
    if (card.dataset.gsapHoverReady === 'true') {
      return;
    }

    card.dataset.gsapHoverReady = 'true';

    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('.product-card-image'), {
        y: -4,
        scale: 1.04,
        duration: 0.5,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('.product-card-image'), {
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  });
};

export const clearBusinessProductAnimationProps = (gsap: GSAPStatic) => {
  gsap.set([PRODUCT_CARD_SELECTOR, PRODUCTS_EXTRA_SHELL_SELECTOR], {
    clearProps: 'all',
  });
};

export const initBusinessProductAnimations = (gsap: GSAPStatic) => {
  const visibleProductCards = gsap.utils.toArray<HTMLElement>(VISIBLE_PRODUCT_SELECTOR);
  const allProductCards = gsap.utils.toArray<HTMLElement>(PRODUCT_CARD_SELECTOR);

  initBaseProductReveal(gsap, visibleProductCards);
  initExpandableProducts(gsap, allProductCards);
  initProductHover(gsap, allProductCards);
};
