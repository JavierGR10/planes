import { motion } from 'motion/react';
import { resolveResponsiveImageSources } from '../utils/responsive-images';

function ResponsivePicture({ responsiveImage, src, alt, className, imgClassName, motionProps }) {
  const resolvedImage = resolveResponsiveImageSources(src, alt, responsiveImage);

  if (!resolvedImage) {
    return null;
  }

  const imageProps = {
    src: resolvedImage.mobileSrc,
    alt: resolvedImage.alt,
    className: imgClassName,
    ...motionProps,
  };

  return (
    <picture className={className}>
      {resolvedImage.desktopSrc && <source media="(min-width: 1200px)" srcSet={resolvedImage.desktopSrc} />}
      {resolvedImage.tabletSrc && <source media="(min-width: 775px)" srcSet={resolvedImage.tabletSrc} />}
      {motionProps ? <motion.img {...imageProps} /> : <img {...imageProps} />}
    </picture>
  );
}

export default ResponsivePicture;