import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let pluginsRegistered = false;
CustomEase.create('titleEase', '0.17,0.17,0.49,1.00');
CustomEase.create('titleEaseHide', '0.55,0.00,0.83,0.83');
CustomEase.create('headerEase', '0.17,0.17,0.52,1.00');

export const setupPlanGsap = () => {
  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    pluginsRegistered = true;
  }

  return { gsap, ScrollTrigger, SplitText };
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type SplitRevealOptions = {
  trigger?: string | Element;
  start?: string;
  split?: 'lines' | 'words' | 'chars' | 'words,lines' | 'lines,words,chars';
  mask?: 'lines' | 'words' | 'chars' | 'hidden';
  linesClass?: string;
  yPercent?: number;
  xPercent?: number;
  y?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  rotateX?: number;
  rotateY?: number;
  skewY?: number;
  transformOrigin?: string;
  once?: boolean;
};

type PrepareSplitTextOptions = Pick<
  SplitRevealOptions,
  'split' | 'mask' | 'yPercent' | 'xPercent' | 'rotateX' | 'rotateY' | 'skewY' | 'transformOrigin'
>;

type PreparedSplitText = {
  element: HTMLElement;
  splitText: SplitText;
  parts: Element[];
};

type SplitTextHoverAnimationOptions = {
  enterDuration?: number;
  exitDuration?: number;
  exitStagger?: number;
  enterEase?: string;
  exitEase?: string;
  splitType?: SplitRevealOptions['split'];
  linesClass?: string;
};

const resolveSplitTargets = (split: SplitText, type: SplitRevealOptions['split']) => {
  if (type?.includes('chars')) {
    return split.chars;
  }

  if (type?.includes('words')) {
    return split.words;
  }

  return split.lines;
};

export const prepareSplitText = (
  element: HTMLElement,
  {
    split = 'lines',
    mask = 'lines',
    yPercent = 110,
    xPercent = 0,
    rotateX = 0,
    rotateY = 0,
    skewY = 0,
    transformOrigin,
  }: PrepareSplitTextOptions = {}
): PreparedSplitText | null => {
  const { gsap, SplitText } = setupPlanGsap();

  if (element.dataset.gsapSplitReady === 'true') {
    return null;
  }

  element.dataset.gsapSplitReady = 'true';
  element.style.perspective = '1000px';

  const splitMask = mask === 'hidden' ? undefined : mask;
  const splitText = new SplitText(element, splitMask ? { type: split, mask: splitMask } : { type: split });
  const parts = resolveSplitTargets(splitText, split);

  gsap.set(parts, {
    autoAlpha: 0,
    yPercent,
    xPercent,
    rotateX,
    rotateY,
    skewY,
    transformOrigin,
    willChange: 'transform, opacity',
  });

  return {
    element,
    splitText,
    parts,
  };
};

export const animateSplitText = (
  target: string | Element | Element[],
  {
    trigger,
    start = 'top 84%',
    split = 'lines',
    mask = 'lines',
    linesClass = 'hidden',
    yPercent = 110,
    xPercent = 0,
    stagger = 0.08,
    duration = 1,
    ease = 'titleEase',
    rotateX = 0,
    rotateY = 0,
    skewY = 0,
    transformOrigin,
    once = true,
  }: SplitRevealOptions = {}
) => {
  const { gsap } = setupPlanGsap();

  gsap.utils.toArray<HTMLElement>(target).forEach((element) => {
    const preparedSplit = prepareSplitText(element, {
      split,
      mask,
      yPercent,
      xPercent,
      rotateX,
      rotateY,
      skewY,
      transformOrigin,
    });

    if (!preparedSplit) {
      return;
    }

    gsap.to(preparedSplit.parts, {
      autoAlpha: 1,
      yPercent: 0,
      xPercent: 0,
      linesClass,
      duration,
      stagger,
      ease,
      clearProps: 'transform,opacity,visibility,willChange',
      scrollTrigger: {
        trigger: trigger ?? element,
        start,
        once,
      },
    });
  });
};

export const createSplitTextHoverAnimation = (
  baseElement: HTMLElement,
  splitElement: HTMLElement,
  {
    enterDuration = 0.3,
    exitDuration = 0.35,
    exitStagger = 0.03,
    enterEase = 'power1.inOut',
    exitEase = 'sine.in',
    splitType = 'lines',
    linesClass = 'line',
  }: SplitTextHoverAnimationOptions = {}
) => {
  const { gsap, SplitText } = setupPlanGsap();

  let splitInstance: SplitText | null = null;
  let currentTimeline: gsap.core.Timeline | null = null;
  let isInitialized = false;

  const initializeSplit = () => {
    if (isInitialized) {
      return;
    }

    splitInstance = new SplitText(splitElement, {
      type: splitType,
      linesClass,
    });

    const splitTargets = resolveSplitTargets(splitInstance, splitType);

    gsap.set(splitTargets, {
      yPercent: 100,
      autoAlpha: 0,
      willChange: 'transform, opacity',
    });

    gsap.set(baseElement, {
      yPercent: 0,
      autoAlpha: 1,
      willChange: 'transform, opacity',
    });

    isInitialized = true;
  };

  const onEnter = () => {
    initializeSplit();

    currentTimeline?.kill();
    currentTimeline = gsap.timeline();

    currentTimeline
      .to(baseElement, {
        yPercent: -100,
        autoAlpha: 0,
        duration: enterDuration,
        ease: enterEase,
      })
      .to(
        splitInstance ? resolveSplitTargets(splitInstance, splitType) : splitElement,
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: enterDuration,
          ease: enterEase,
          stagger: 0.02,
        },
        '-=0.2'
      );
  };

  const onLeave = () => {
    if (!splitInstance) {
      return;
    }

    currentTimeline?.kill();
    currentTimeline = gsap.timeline();

    currentTimeline
      .to(resolveSplitTargets(splitInstance, splitType), {
        yPercent: 100,
        autoAlpha: 0,
        duration: exitDuration,
        stagger: exitStagger,
        ease: exitEase,
      })
      .to(
        baseElement,
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: exitDuration,
          ease: 'power2.out',
        },
        '-=0.15'
      );
  };

  const cleanup = () => {
    currentTimeline?.kill();
    splitInstance?.revert();
    splitInstance = null;
    isInitialized = false;
    gsap.set([baseElement, splitElement], { clearProps: 'all' });
  };

  return { onEnter, onLeave, cleanup };
};
