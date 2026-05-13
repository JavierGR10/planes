import { motion, useReducedMotion } from 'motion/react';
import HtmlContent from './HtmlContent';
import HeroBackgroundMedia from './HeroBackgroundMedia';
import HeroRevealVeil from './HeroRevealVeil';
import Slider from './Slider';
import { getMotionState, heroVariants } from './heroMotion';
import ResponsivePicture from '../../../components/ResponsivePicture';

function HeroBanner({ hero, theme, rounded, isActive }) {
  const reduceMotion = useReducedMotion();
  const animateState = getMotionState(isActive, reduceMotion);
  const {
    buttonColor,
    buttonHoverColor,
    buttonTextColor,
    titleColor,
    subtitleColor,
    descriptionColor,
    buttonBorderColor,
    buttonHoverBorderColor,
    buttonBorderRadius,
    buttonShadow,
  } = theme;
  const bannerType = hero.type || 'with-slider';
  const roundedClass = rounded ? 'rounded-2xl md:rounded-3xl' : '';
  const buttonClass =
    'cursor-pointer w-full sm:max-w-[280px] transition-colors duration-500 py-2 px-3 font-extrabold text-sm lg:text-base text-center border';
  const titleClass = 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold';
  const subtitleClass = 'mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base';
  const imageBackgroundTitleClass = 'max-w-xl text-xl md:text-2xl lg:text-3xl font-extrabold';
  const imageBackgroundSubtitleClass = 'text-base sm:text-lg lg:text-xl mb-20 lg:mb-30';
  const titleStyle = { color: titleColor };
  const subtitleStyle = { color: subtitleColor };
  const descriptionStyle = { color: descriptionColor };
  const heroBackgroundStyle = hero.gradient ? { background: hero.gradient } : undefined;
  const buttonBaseStyle = {
    backgroundColor: buttonColor,
    color: buttonTextColor,
    borderColor: buttonBorderColor,
    borderRadius: buttonBorderRadius,
    boxShadow: buttonShadow,
  };

  const handleButtonHover = (event) => {
    event.currentTarget.style.backgroundColor = buttonHoverColor;
    event.currentTarget.style.color = buttonTextColor;
    event.currentTarget.style.borderColor = buttonHoverBorderColor;
  };

  const handleButtonLeave = (event) => {
    event.currentTarget.style.backgroundColor = buttonColor;
    event.currentTarget.style.color = buttonTextColor;
    event.currentTarget.style.borderColor = buttonBorderColor;
  };

  if (bannerType === 'with-slider') {
    return (
      <motion.section
        className={`hero-banner relative w-full ${roundedClass} py-6 md:py-0 md:h-100 lg:h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10`}
        style={heroBackgroundStyle}
        initial={reduceMotion ? false : 'inactive'}
        animate={animateState}
        variants={heroVariants.section}
      >
        <HeroRevealVeil reduceMotion={reduceMotion} animateState={animateState} />
        <motion.div
          className="hero-banner__content relative z-10 flex flex-col justify-between w-full md:w-1/2 lg:w-[40%] px-5 md:px-15"
          variants={heroVariants.content}
        >
          <HtmlContent
            as="h2"
            html={hero.titleHtml}
            className={`hero-banner__title ${titleClass}`}
            containerClassName={`hero-banner__title ${titleClass}`}
            style={titleStyle}
            motionProps={{ variants: heroVariants.text }}
          >
            {hero.title}
          </HtmlContent>
          <HtmlContent
            as="p"
            html={hero.subtitleHtml}
            className={`hero-banner__subtitle ${subtitleClass}`}
            containerClassName={`hero-banner__subtitle ${subtitleClass}`}
            style={subtitleStyle}
            motionProps={{ variants: heroVariants.text }}
          >
            {hero.subtitle}
          </HtmlContent>

          {hero.banners && hero.banners.length > 0 && (
            <motion.div className="hero-banner__slider" variants={heroVariants.slider}>
              <Slider banners={[...hero.banners, ...hero.banners]} theme={theme} />
            </motion.div>
          )}

          {hero.buttonText && (
            <motion.a
              href={hero.buttonHref ?? '#'}
              className={`hero-banner__cta ${buttonClass} mt-4 md:mt-0`}
              style={buttonBaseStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
              variants={heroVariants.cta}
            >
              {hero.buttonText}
            </motion.a>
          )}
        </motion.div>
      </motion.section>
    );
  }

  if (bannerType === 'simple') {
    return (
      <motion.section
        className={`hero-banner relative w-full ${roundedClass} py-6 md:py-10 h-100 lg:h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 px-5 md:px-15`}
        style={heroBackgroundStyle}
        initial={reduceMotion ? false : 'inactive'}
        animate={animateState}
        variants={heroVariants.section}
      >
        <HeroRevealVeil reduceMotion={reduceMotion} animateState={animateState} />
        <motion.div
          className="hero-banner__content relative z-10 flex flex-col w-full md:w-1/2"
          variants={heroVariants.content}
        >
          <HtmlContent
            as="h2"
            html={hero.titleHtml}
            className={`hero-banner__title ${titleClass}`}
            containerClassName={`hero-banner__title ${titleClass}`}
            style={titleStyle}
            motionProps={{ variants: heroVariants.text }}
          >
            {hero.title}
          </HtmlContent>
          <HtmlContent
            as="p"
            html={hero.subtitleHtml}
            className={`hero-banner__subtitle ${subtitleClass}`}
            containerClassName={`hero-banner__subtitle ${subtitleClass}`}
            style={subtitleStyle}
            motionProps={{ variants: heroVariants.text }}
          >
            {hero.subtitle}
          </HtmlContent>
          {hero.description && (
            <HtmlContent
              as="p"
              html={hero.descriptionHtml}
              className="hero-banner__description text-sm lg:text-base mb-4"
              containerClassName="hero-banner__description text-sm lg:text-base mb-4"
              style={descriptionStyle}
              motionProps={{ variants: heroVariants.text }}
            >
              {hero.description}
            </HtmlContent>
          )}
          {hero.buttonText && (
            <motion.a
              href={hero.buttonHref ?? '#'}
              className={`hero-banner__cta ${buttonClass}`}
              style={buttonBaseStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
              variants={heroVariants.cta}
            >
              {hero.buttonText}
            </motion.a>
          )}
        </motion.div>

        {hero.image && (
          <motion.div className="hero-banner__media-frame relative z-0 w-full md:w-1/2 overflow-hidden flex items-center justify-center">
            <ResponsivePicture
              responsiveImage={hero.responsiveImage}
              src={hero.image}
              alt={hero.title}
              imgClassName="max-h-75 lg:max-h-100 object-contain"
              motionProps={{
                variants: heroVariants.media,
                initial: reduceMotion ? false : 'inactive',
                animate: animateState,
              }}
            />
          </motion.div>
        )}
      </motion.section>
    );
  }

  if (bannerType === 'image-background') {
    return (
      <motion.section
        className={`hero-banner relative w-full ${roundedClass} h-100 lg:h-125 flex items-center overflow-hidden`}
        initial={reduceMotion ? false : 'inactive'}
        animate={animateState}
        variants={heroVariants.section}
      >
        <motion.div className="hero-banner__media-frame absolute inset-0 z-0 overflow-hidden">
          <HeroBackgroundMedia hero={hero} title={hero.title} isActive={isActive} reduceMotion={reduceMotion} />
        </motion.div>
        <HeroRevealVeil reduceMotion={reduceMotion} animateState={animateState} />
        <motion.div
          className="hero-banner__content relative z-10 flex flex-col justify-between w-full md:w-1/2 px-5 md:px-15 py-10"
          variants={heroVariants.content}
        >
          <HtmlContent
            as="h2"
            html={hero.titleHtml}
            className={`hero-banner__title ${imageBackgroundTitleClass}`}
            containerClassName={`hero-banner__title ${imageBackgroundTitleClass}`}
            style={titleStyle}
            motionProps={{ variants: heroVariants.text }}
          >
            {hero.title}
          </HtmlContent>
          <HtmlContent
            as="p"
            html={hero.subtitleHtml}
            className={`hero-banner__subtitle ${imageBackgroundSubtitleClass}`}
            containerClassName={`hero-banner__subtitle ${imageBackgroundSubtitleClass}`}
            style={subtitleStyle}
            motionProps={{ variants: heroVariants.text }}
          >
            {hero.subtitle}
          </HtmlContent>

          {hero.description && (
            <HtmlContent
              as="p"
              html={hero.descriptionHtml}
              className="hero-banner__description text-sm lg:text-base mb-4"
              containerClassName="hero-banner__description text-sm lg:text-base mb-4"
              style={descriptionStyle}
              motionProps={{ variants: heroVariants.text }}
            >
              {hero.description}
            </HtmlContent>
          )}
          {hero.buttonText && (
            <motion.a
              href={hero.buttonHref ?? '#'}
              className={`hero-banner__cta ${buttonClass}`}
              style={buttonBaseStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
              variants={heroVariants.cta}
            >
              {hero.buttonText}
            </motion.a>
          )}
        </motion.div>
      </motion.section>
    );
  }

  return null;
}

export default HeroBanner;
