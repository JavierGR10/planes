import { motion } from 'motion/react';
import { heroVariants } from './heroMotion';

function HeroRevealVeil({ reduceMotion, animateState }) {
  return (
    <motion.div
      aria-hidden="true"
      className="hero-banner__veil pointer-events-none absolute inset-0"
      style={{ zIndex: 1 }}
      variants={heroVariants.veil}
      initial={reduceMotion ? false : 'inactive'}
      animate={animateState}
    />
  );
}

export default HeroRevealVeil;
