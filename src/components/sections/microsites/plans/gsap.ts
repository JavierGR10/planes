import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let pluginsRegistered = false;

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
  split?: 'lines' | 'words' | 'chars' | 'lines,words' | 'lines,words,chars';
  mask?: 'lines' | 'words' | 'chars';
  yPercent?: number;
  xPercent?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  rotateX?: number;
  rotateY?: number;
  skewY?: number;
  transformOrigin?: string;
  once?: boolean;
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

export const animateSplitText = (
  target: string | Element | Element[],
  {
    trigger,
    start = 'top 84%',
    split = 'lines,words',
    mask = 'lines',
    yPercent = 110,
    xPercent = 0,
    stagger = 0.08,
    duration = 1,
    ease = 'power3.inOut',
    rotateX = 0,
    rotateY = 0,
    skewY = 0,
    transformOrigin = '50% 100%',
    once = true,
  }: SplitRevealOptions = {}
) => {
  const { gsap, SplitText } = setupPlanGsap();

  gsap.utils.toArray<HTMLElement>(target).forEach((element) => {
    if (element.dataset.gsapSplitReady === 'true') {
      return;
    }

    element.dataset.gsapSplitReady = 'true';
    element.style.perspective = '1000px';

    const splitText = new SplitText(element, {
      type: split,
      ...(mask ? { mask } : {}),
    });
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

    gsap.to(parts, {
      autoAlpha: 1,
      yPercent: 0,
      xPercent: 0,
      rotateX: 0,
      rotateY: 0,
      skewY: 0,
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
