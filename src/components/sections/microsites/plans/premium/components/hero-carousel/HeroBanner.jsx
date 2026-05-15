import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef } from 'react';
import HtmlContent from './HtmlContent';
import HeroBackgroundMedia from './HeroBackgroundMedia';
import Slider from './Slider';
import { getMotionState, heroVariants } from './heroMotion';
import HeroBannerContent from '../../../components/HeroBannerContent';
import ResponsivePicture from '../../../components/ResponsivePicture';
import './HeroBanner.css';

function HeroBanner({ hero, theme, rounded, isActive }) {
  const reduceMotion = useReducedMotion();
  const animateState = getMotionState(isActive, reduceMotion);

  const hasPlayedSectionIntroRef = useRef(false);
  const shouldAnimateSectionIntro = !reduceMotion && !hasPlayedSectionIntroRef.current;

  useEffect(() => {
    if (reduceMotion || hasPlayedSectionIntroRef.current) return;

    hasPlayedSectionIntroRef.current = true;
  }, [reduceMotion]);

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
    'cursor-pointer w-1/2 sm:max-w-[280px] transition-colors duration-500 py-2 px-3 font-extrabold text-sm lg:text-base text-center border';
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

  const renderTitle = ({ content, html, className, style }) => (
    <HtmlContent
      as="h2"
      html={html}
      className={className}
      containerClassName={className}
      style={style}
      motionProps={{ variants: heroVariants.text }}
    >
      {content}
    </HtmlContent>
  );

  const renderSubtitle = ({ content, html, className, style }) => (
    <HtmlContent
      as="p"
      html={html}
      className={className}
      containerClassName={className}
      style={style}
      motionProps={{ variants: heroVariants.text }}
    >
      {content}
    </HtmlContent>
  );

  const renderDescription = ({ content, html, className, style }) => (
    <HtmlContent
      as="p"
      html={html}
      className={className}
      containerClassName={className}
      style={style}
      motionProps={{ variants: heroVariants.text }}
    >
      {content}
    </HtmlContent>
  );

  const renderButton = ({ href, className, style, children, onMouseOver, onMouseOut }) => (
    <motion.a
      href={href}
      className={className}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      variants={heroVariants.cta}
    >
      {children}
    </motion.a>
  );

  if (bannerType === 'with-slider') {
    return (
      <motion.section
        className={`hero-banner relative w-full ${roundedClass} py-6 md:py-0 min-h-75 md:min-h-100 xl:min-h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10`}
        style={heroBackgroundStyle}
        initial={shouldAnimateSectionIntro ? 'inactive' : false}
        animate={shouldAnimateSectionIntro ? 'active' : undefined}
        variants={heroVariants.section}
      >
        <motion.div
          className="hero-banner__content relative z-10 flex flex-col justify-between w-full md:w-1/2 lg:w-[40%] px-5 md:px-15"
          initial={reduceMotion ? false : 'inactive'}
          animate={animateState}
          variants={heroVariants.content}
        >
          <HeroBannerContent
            title={hero.title}
            titleHtml={hero.titleHtml}
            titleClassName={`hero-banner__title ${titleClass}`}
            titleStyle={titleStyle}
            renderTitle={renderTitle}
            subtitle={hero.subtitle}
            subtitleHtml={hero.subtitleHtml}
            subtitleClassName={`hero-banner__subtitle ${subtitleClass}`}
            subtitleStyle={subtitleStyle}
            renderSubtitle={renderSubtitle}
            afterSubtitle={
              hero.banners && hero.banners.length > 0 ? (
                <motion.div className="hero-banner__slider" variants={heroVariants.slider}>
                  <Slider banners={[...hero.banners, ...hero.banners]} theme={theme} />
                </motion.div>
              ) : null
            }
            buttonText={hero.buttonText}
            buttonHref={hero.buttonHref}
            buttonClassName={`hero-banner__cta ${buttonClass} mt-4 md:mt-0 `}
            buttonStyle={buttonBaseStyle}
            buttonProps={{ onMouseOver: handleButtonHover, onMouseOut: handleButtonLeave }}
            renderButton={renderButton}
          />
        </motion.div>
      </motion.section>
    );
  }

  if (bannerType === 'simple') {
    return (
      <motion.section
        className={`hero-banner relative w-full ${roundedClass} py-6 md:py-10 min-h-75 md:min-h-100 xl:min-h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 px-5 md:px-15`}
        style={heroBackgroundStyle}
        initial={shouldAnimateSectionIntro ? 'inactive' : false}
        animate={shouldAnimateSectionIntro ? 'active' : undefined}
        variants={heroVariants.section}
      >
        <motion.div
          className="hero-banner__content relative z-10 flex flex-col w-full md:w-1/2"
          initial={reduceMotion ? false : 'inactive'}
          animate={animateState}
          variants={heroVariants.content}
        >
          <HeroBannerContent
            title={hero.title}
            titleHtml={hero.titleHtml}
            titleClassName={`hero-banner__title ${titleClass}`}
            titleStyle={titleStyle}
            renderTitle={renderTitle}
            subtitle={hero.subtitle}
            subtitleHtml={hero.subtitleHtml}
            subtitleClassName={`hero-banner__subtitle ${subtitleClass}`}
            subtitleStyle={subtitleStyle}
            renderSubtitle={renderSubtitle}
            description={hero.description}
            descriptionHtml={hero.descriptionHtml}
            descriptionClassName="hero-banner__description text-sm lg:text-base mb-4"
            descriptionStyle={descriptionStyle}
            renderDescription={renderDescription}
            buttonText={hero.buttonText}
            buttonHref={hero.buttonHref}
            buttonClassName={`hero-banner__cta ${buttonClass}`}
            buttonStyle={buttonBaseStyle}
            buttonProps={{ onMouseOver: handleButtonHover, onMouseOut: handleButtonLeave }}
            renderButton={renderButton}
          />
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
        className={`hero-banner relative w-full ${roundedClass} min-h-75 md:min-h-100 xl:h-125 flex items-center overflow-hidden`}
        initial={shouldAnimateSectionIntro ? 'inactive' : false}
        animate={shouldAnimateSectionIntro ? 'active' : undefined}
        variants={heroVariants.section}
      >
        <motion.div className="hero-banner__media-frame absolute inset-0 z-0 overflow-hidden">
          <HeroBackgroundMedia hero={hero} title={hero.title} isActive={isActive} reduceMotion={reduceMotion} />
        </motion.div>
        <motion.div
          className="hero-banner__content relative z-10 flex flex-col justify-between w-full md:w-1/2 px-5 md:px-15 py-10"
          initial={reduceMotion ? false : 'inactive'}
          animate={animateState}
          variants={heroVariants.content}
        >
          <HeroBannerContent
            title={hero.title}
            titleHtml={hero.titleHtml}
            titleClassName={`hero-banner__title ${imageBackgroundTitleClass}`}
            titleStyle={titleStyle}
            renderTitle={renderTitle}
            subtitle={hero.subtitle}
            subtitleHtml={hero.subtitleHtml}
            subtitleClassName={`hero-banner__subtitle ${imageBackgroundSubtitleClass}`}
            subtitleStyle={subtitleStyle}
            renderSubtitle={renderSubtitle}
            description={hero.description}
            descriptionHtml={hero.descriptionHtml}
            descriptionClassName="hero-banner__description text-sm lg:text-base mb-4"
            descriptionStyle={descriptionStyle}
            renderDescription={renderDescription}
            buttonText={hero.buttonText}
            buttonHref={hero.buttonHref}
            buttonClassName={`hero-banner__cta ${buttonClass}`}
            buttonStyle={buttonBaseStyle}
            buttonProps={{ onMouseOver: handleButtonHover, onMouseOut: handleButtonLeave }}
            renderButton={renderButton}
          />
        </motion.div>
      </motion.section>
    );
  }

  return null;
}

export default HeroBanner;
