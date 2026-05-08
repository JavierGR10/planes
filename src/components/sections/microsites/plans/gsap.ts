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
    split = 'lines',
    mask = 'lines',
    linesClass = 'hidden',
    yPercent = 110,
    xPercent = 0,
    stagger = 0.08,
    duration = 1,
    ease = 'titleEase',
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

    const splitMask = mask === 'hidden' ? undefined : mask;

    const splitText = new SplitText(element, splitMask ? { type: split, mask: splitMask } : { type: split });
    const parts = resolveSplitTargets(splitText, split);

    gsap.set(parts, {
      autoAlpha: 0,
      yPercent,
      xPercent,
      willChange: 'transform, opacity',
    });

    gsap.to(parts, {
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
