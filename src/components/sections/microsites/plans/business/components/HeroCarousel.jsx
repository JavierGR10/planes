import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ResponsivePicture from '../../components/ResponsivePicture';
import Slider from './Slider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css';

function HeroCarousel({ heroes, theme, rounded = true, buttonBorder }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true, dynamicBullets: true }}
      navigation
      allowTouchMove={false}
      simulateTouch={false}
      speed={1500}
      slidesPerView={1}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      className="hero-carousel w-full"
    >
      {heroes.map((hero, index) => (
        <SwiperSlide key={index}>
          <HeroBanner hero={hero} theme={theme} rounded={rounded} buttonBorder={buttonBorder} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function HeroBanner({ hero, theme, rounded, buttonBorder }) {
  const { buttonColor, buttonHoverColor, heroCta, heroText } = theme;
  const bannerType = hero.type || 'with-slider';
  const roundedClass = rounded ? 'rounded-2xl md:rounded-3xl' : '';
  const buttonClass =
    'cursor-pointer w-full sm:max-w-[280px] transition-colors duration-500 py-2 px-3 font-extrabold rounded-[10px] text-sm lg:text-base text-center border-2';
  const heroBackgroundStyle = hero.gradient ? { background: hero.gradient } : undefined;
  const titleStyle = { color: heroText?.titleColor ?? '#FFFFFF' };
  const subtitleStyle = { color: heroText?.subtitleColor ?? '#FFFFFF' };
  const descriptionStyle = { color: heroText?.descriptionColor ?? 'rgba(255, 255, 255, 0.9)' };
  const buttonStyle = {
    backgroundColor: heroCta?.background ?? buttonColor,
    color: heroCta?.textColor ?? '#FFFFFF',
    borderColor: heroCta?.borderColor ?? (buttonBorder || 'transparent'),
  };
  const defaultBorderColor = buttonBorder || 'transparent';

  const applyHoverState = (element) => {
    element.style.backgroundColor = heroCta?.hoverBackground ?? buttonHoverColor;
    element.style.color = heroCta?.hoverTextColor ?? heroCta?.textColor ?? '#FFFFFF';
    element.style.borderColor = heroCta?.hoverBorderColor ?? heroCta?.borderColor ?? defaultBorderColor;
  };

  const resetHoverState = (element) => {
    element.style.backgroundColor = heroCta?.background ?? buttonColor;
    element.style.color = heroCta?.textColor ?? '#FFFFFF';
    element.style.borderColor = heroCta?.borderColor ?? defaultBorderColor;
  };

  if (bannerType === 'with-slider') {
    return (
      <section
        className={`relative w-full ${roundedClass} py-6 md:py-0 md:h-100 lg:h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10`}
        style={heroBackgroundStyle}
      >
        <div className="flex flex-col w-full md:w-1/2 lg:w-[40%] px-5 md:px-15">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold" style={titleStyle}>
            {hero.title}
          </h2>
          <p className="mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base" style={subtitleStyle}>
            {hero.subtitle}
          </p>

          {hero.banners && hero.banners.length > 0 && (
            <Slider banners={[...hero.banners, ...hero.banners]} theme={heroText} />
          )}

          {hero.buttonText && (
            <a
              href={hero.buttonHref ?? '#'}
              className={`${buttonClass} mt-4 md:mt-0`}
              style={buttonStyle}
              onMouseOver={(e) => applyHoverState(e.currentTarget)}
              onMouseOut={(e) => resetHoverState(e.currentTarget)}
            >
              {hero.buttonText}
            </a>
          )}
        </div>
      </section>
    );
  }

  if (bannerType === 'simple') {
    return (
      <section
        className={`relative w-full ${roundedClass} py-6 md:py-10 h-100 lg:h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 px-5 md:px-15`}
        style={heroBackgroundStyle}
      >
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold" style={titleStyle}>
            {hero.title}
          </h2>
          <p className="mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base" style={subtitleStyle}>
            {hero.subtitle}
          </p>
          {hero.description && (
            <p className="text-sm lg:text-base mb-4" style={descriptionStyle}>
              {hero.description}
            </p>
          )}
          {hero.buttonText && (
            <a
              href={hero.buttonHref ?? '#'}
              className={buttonClass}
              style={buttonStyle}
              onMouseOver={(e) => applyHoverState(e.currentTarget)}
              onMouseOut={(e) => resetHoverState(e.currentTarget)}
            >
              {hero.buttonText}
            </a>
          )}
        </div>

        {hero.image && (
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <ResponsivePicture
              responsiveImage={hero.responsiveImage}
              src={hero.image}
              alt={hero.title}
              imgClassName="max-h-75 lg:max-h-100 object-contain"
            />
          </div>
        )}
      </section>
    );
  }

  if (bannerType === 'image-background') {
    return (
      <section className={`relative w-full ${roundedClass} h-100 lg:h-125 flex items-center overflow-hidden`}>
        <ResponsivePicture
          responsiveImage={hero.responsiveBackgroundImage}
          src={hero.backgroundImage}
          alt={hero.title ?? 'Hero banner'}
          className="absolute inset-0 w-full h-full"
          imgClassName="absolute inset-0 w-full h-full object-contain"
        />
        <div className="relative z-10 flex flex-col w-full md:w-1/2 px-5 md:px-15 py-10">
          {hero.title && (
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold" style={titleStyle}>
              {hero.title}
            </h2>
          )}
          {hero.subtitle && (
            <p className="mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base" style={subtitleStyle}>
              {hero.subtitle}
            </p>
          )}
          {hero.buttonText && (
            <a
              href={hero.buttonHref ?? '#'}
              className={buttonClass}
              style={buttonStyle}
              onMouseOver={(e) => applyHoverState(e.currentTarget)}
              onMouseOut={(e) => resetHoverState(e.currentTarget)}
            >
              {hero.buttonText}
            </a>
          )}
        </div>
      </section>
    );
  }

  return null;
}

export default HeroCarousel;
