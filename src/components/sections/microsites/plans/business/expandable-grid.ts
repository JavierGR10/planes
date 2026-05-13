type GSAPStatic = typeof import('gsap').gsap;
type TweenVars = Record<string, unknown>;

interface ExpandableGridOptions {
  toggleSelector: string;
  extraShellSelector: string;
  extraItemSelector: string;
  anchorSelector: string;
  collapsedShellVars?: TweenVars;
  expandedShellVars?: TweenVars;
  collapseShellVars?: TweenVars;
  collapsedItemVars?: TweenVars;
  expandedItemVars?: TweenVars;
  collapseItemVars?: TweenVars;
}

const DEFAULT_COLLAPSED_SHELL_VARS: TweenVars = {
  autoAlpha: 0,
  clipPath: 'inset(0 0 100% 0 round 12px)',
  height: 0,
  overflow: 'hidden',
};

const DEFAULT_EXPANDED_SHELL_VARS: TweenVars = {
  autoAlpha: 1,
  clipPath: 'inset(0 0 0% 0 round 12px)',
  height: 'auto',
  duration: 0.84,
  ease: 'power3.inOut',
};

const DEFAULT_COLLAPSE_SHELL_VARS: TweenVars = {
  autoAlpha: 0,
  clipPath: 'inset(0 0 100% 0 round 12px)',
  height: 0,
  overflow: 'hidden',
  duration: 0.72,
  ease: 'power2.inOut',
};

const DEFAULT_COLLAPSED_ITEM_VARS: TweenVars = {
  autoAlpha: 0,
  y: 28,
  scale: 0.965,
  filter: 'blur(10px)',
};

const DEFAULT_EXPANDED_ITEM_VARS: TweenVars = {
  autoAlpha: 1,
  y: 0,
  scale: 1,
  filter: 'blur(0px)',
  duration: 0.62,
  ease: 'power3.out',
  stagger: 0.08,
  clearProps: 'transform,opacity,visibility,filter',
};

const DEFAULT_COLLAPSE_ITEM_VARS: TweenVars = {
  autoAlpha: 0,
  y: 12,
  scale: 0.992,
  filter: 'blur(4px)',
  duration: 0.4,
  ease: 'power2.out',
  stagger: {
    each: 0.04,
    from: 'end',
  },
};

export const scrollToGridAnchor = (anchorSelector: string) => {
  const target = document.querySelector<HTMLElement>(anchorSelector);

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

  if (window.location.hash !== anchorSelector) {
    window.history.replaceState(window.history.state, '', anchorSelector);
  }
};

const setCollapsedExtraItems = (
  gsap: GSAPStatic,
  extraShell: HTMLElement,
  extraItems: HTMLElement[],
  collapsedShellVars: TweenVars,
  collapsedItemVars: TweenVars
) => {
  gsap.set(extraShell, collapsedShellVars);
  gsap.set(extraItems, collapsedItemVars);
};

export const initExpandableGridSection = (gsap: GSAPStatic, options: ExpandableGridOptions) => {
  const toggle = document.querySelector<HTMLButtonElement>(options.toggleSelector);
  const extraShell = document.querySelector<HTMLElement>(options.extraShellSelector);
  const extraItems = gsap.utils.toArray<HTMLElement>(options.extraItemSelector);

  if (!toggle || !extraShell || !extraItems.length) {
    return;
  }

  if (toggle.dataset.gsapExpandReady === 'true') {
    return;
  }

  toggle.dataset.gsapExpandReady = 'true';

  const collapsedShellVars = options.collapsedShellVars ?? DEFAULT_COLLAPSED_SHELL_VARS;
  const expandedShellVars = options.expandedShellVars ?? DEFAULT_EXPANDED_SHELL_VARS;
  const collapseShellVars = options.collapseShellVars ?? DEFAULT_COLLAPSE_SHELL_VARS;
  const collapsedItemVars = options.collapsedItemVars ?? DEFAULT_COLLAPSED_ITEM_VARS;
  const expandedItemVars = options.expandedItemVars ?? DEFAULT_EXPANDED_ITEM_VARS;
  const collapseItemVars = options.collapseItemVars ?? DEFAULT_COLLAPSE_ITEM_VARS;

  let isExpanded = false;

  const updateToggleLabel = () => {
    toggle.textContent = isExpanded
      ? (toggle.dataset.collapseLabel ?? 'Ver menos')
      : (toggle.dataset.expandLabel ?? 'Ver más');
    toggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  };

  setCollapsedExtraItems(gsap, extraShell, extraItems, collapsedShellVars, collapsedItemVars);
  updateToggleLabel();

  toggle.addEventListener('click', () => {
    gsap.killTweensOf(extraShell);
    gsap.killTweensOf(extraItems);

    if (!isExpanded) {
      extraShell.hidden = false;
      setCollapsedExtraItems(gsap, extraShell, extraItems, collapsedShellVars, collapsedItemVars);

      gsap
        .timeline({
          defaults: { overwrite: 'auto' },
          onComplete: () => {
            gsap.set(extraShell, {
              clearProps: 'height,overflow,clipPath,opacity,visibility',
            });
            gsap.set(extraItems, {
              clearProps: 'transform,opacity,visibility,filter',
            });
          },
        })
        .to(extraShell, expandedShellVars)
        .to(extraItems, expandedItemVars, '>-0.16');

      isExpanded = true;
      updateToggleLabel();
      return;
    }

    gsap
      .timeline({
        defaults: { overwrite: 'auto' },
        onComplete: () => {
          extraShell.hidden = true;
          setCollapsedExtraItems(gsap, extraShell, extraItems, collapsedShellVars, collapsedItemVars);
          scrollToGridAnchor(options.anchorSelector);
        },
      })
      .to(extraItems, collapseItemVars)
      .to(extraShell, collapseShellVars, '>-0.08');

    isExpanded = false;
    updateToggleLabel();
  });
};

export const clearExpandableGridProps = (gsap: GSAPStatic, selectors: string[]) => {
  gsap.set(selectors, {
    clearProps: 'all',
  });
};
