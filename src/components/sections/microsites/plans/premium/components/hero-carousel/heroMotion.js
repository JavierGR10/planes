import { motion } from 'motion/react';

export const heroVariants = {
  section: {
    inactive: {
      clipPath: 'inset(0 0 0 100%)',
    },
    active: {
      clipPath: 'inset(0 0 0 0%)',
      transition: {
        duration: 1.7,
        ease: [0.17, 0.17, 0.49, 1],
      },
    },
  },
  media: {
    inactive: {
      opacity: 0.72,
      scale: 1.04,
      y: 8,
      filter: 'blur(8px)',
    },
    active: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  content: {
    inactive: {
      opacity: 0,
      x: -14,
      y: 6,
      clipPath: 'inset(0 10% 0 0)',
    },
    active: {
      opacity: 1,
      x: 0,
      y: 0,
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1.2,
        ease: [0.17, 0.17, 0.49, 1],
        when: 'beforeChildren',
        staggerChildren: 0.07,
        delayChildren: 0.22,
      },
    },
  },
  veil: {
    inactive: {
      opacity: 0.18,
      x: '-0.5%',
      clipPath: 'inset(0 35% 0 0)',
    },
    active: {
      opacity: 0,
      x: '1%',
      clipPath: 'inset(0 0% 0 0)',
      transition: {
        duration: 1.15,
        ease: [0.17, 0.17, 0.49, 1],
      },
    },
  },
  text: {
    inactive: {
      opacity: 0,
      y: 14,
      filter: 'blur(4px)',
    },
    active: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.92,
        ease: [0.17, 0.17, 0.49, 1],
      },
    },
  },
  slider: {
    inactive: {
      opacity: 0,
      y: 10,
    },
    active: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.95,
        ease: [0.17, 0.17, 0.49, 1],
      },
    },
  },
  cta: {
    inactive: {
      opacity: 0,
      y: 10,
      scale: 0.97,
      clipPath: 'inset(0 100% 0 0 round 999px)',
    },
    active: {
      opacity: 1,
      y: 0,
      scale: 1,
      clipPath: 'inset(0 0% 0 0 round 999px)',
      transition: {
        duration: 0.98,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};

export const motionTags = {
  div: motion.div,
  h2: motion.h2,
  p: motion.p,
};

export function getMotionState(isActive, reduceMotion) {
  if (reduceMotion) {
    return 'active';
  }

  return isActive ? 'active' : 'inactive';
}
