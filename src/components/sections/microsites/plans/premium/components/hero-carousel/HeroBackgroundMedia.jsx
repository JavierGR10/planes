import { motion } from 'motion/react';
import ResponsivePicture from '../../../components/ResponsivePicture';
import { getMotionState, heroVariants } from './heroMotion';

function HeroBackgroundMedia({ hero, title, isActive, reduceMotion }) {
  const animateState = getMotionState(isActive, reduceMotion);

  if (hero.backgroundVideo) {
    return (
      <motion.video
        className="hero-banner__media absolute inset-0 h-full w-full object-cover"
        src={hero.backgroundVideo}
        poster={hero.backgroundVideoPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        variants={heroVariants.media}
        initial={reduceMotion ? false : 'inactive'}
        animate={animateState}
      />
    );
  }

  if (!hero.backgroundImage) {
    return null;
  }

  return (
    <ResponsivePicture
      responsiveImage={hero.responsiveBackgroundImage}
      src={hero.backgroundImage}
      alt={title ?? 'Hero banner'}
      className="hero-banner__media absolute inset-0 w-full h-full"
      imgClassName="absolute inset-0 w-full h-full object-cover"
      motionProps={{
        variants: heroVariants.media,
        initial: reduceMotion ? false : 'inactive',
        animate: animateState,
      }}
    />
  );
}

export default HeroBackgroundMedia;
