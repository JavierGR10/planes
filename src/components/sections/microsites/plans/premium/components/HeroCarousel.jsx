import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from './Slider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css';

function HtmlContent({ as = 'div', html, children, className, containerClassName, style }) {
  const Tag = as;
  const mergedClassName = [containerClassName, className].filter(Boolean).join(' ');

  if (html) {
    return <div className={containerClassName} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <Tag className={mergedClassName} style={style}>
      {children}
    </Tag>
  );
}

function HeroCarousel({ heroes, theme, rounded = true }) {
  const carouselStyle = {
    '--premium-hero-navigation-color': theme.navigationColor,
    '--premium-hero-navigation-background': theme.navigationBackground,
    '--premium-hero-navigation-hover-background': theme.navigationHoverBackground,
    '--premium-hero-pagination-color': theme.paginationColor,
    '--premium-hero-pagination-active-color': theme.paginationActiveColor,
  };

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
      style={carouselStyle}
    >
      {heroes.map((hero, index) => (
        <SwiperSlide key={index}>
          <HeroBanner hero={hero} theme={theme} rounded={rounded} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function HeroBanner({ hero, theme, rounded }) {
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
      <section
        className={`relative w-full ${roundedClass} py-6 md:py-0 md:h-[400px] lg:h-[500px] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10`}
        style={heroBackgroundStyle}
      >
        <div className="flex flex-col justify-between w-full md:w-1/2 lg:w-[40%] px-5 md:px-15">
          <HtmlContent
            as="h2"
            html={hero.titleHtml}
            className={titleClass}
            containerClassName={titleClass}
            style={titleStyle}
          >
            {hero.title}
          </HtmlContent>
          <HtmlContent
            as="p"
            html={hero.subtitleHtml}
            className={subtitleClass}
            containerClassName={subtitleClass}
            style={subtitleStyle}
          >
            {hero.subtitle}
          </HtmlContent>

          {hero.banners && hero.banners.length > 0 && (
            <Slider banners={[...hero.banners, ...hero.banners]} theme={theme} />
          )}

          {hero.buttonText && (
            <a
              href={hero.buttonHref ?? '#'}
              className={`${buttonClass} mt-4 md:mt-0`}
              style={buttonBaseStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
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
        className={`relative w-full ${roundedClass} py-6 md:py-10 h-[400px] lg:h-[500px] flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 px-5 md:px-15`}
        style={heroBackgroundStyle}
      >
        <div className="flex flex-col w-full md:w-1/2">
          <HtmlContent
            as="h2"
            html={hero.titleHtml}
            className={titleClass}
            containerClassName={titleClass}
            style={titleStyle}
          >
            {hero.title}
          </HtmlContent>
          <HtmlContent
            as="p"
            html={hero.subtitleHtml}
            className={subtitleClass}
            containerClassName={subtitleClass}
            style={subtitleStyle}
          >
            {hero.subtitle}
          </HtmlContent>
          {hero.description && (
            <HtmlContent
              as="p"
              html={hero.descriptionHtml}
              className="text-sm lg:text-base mb-4"
              containerClassName="text-sm lg:text-base mb-4"
              style={descriptionStyle}
            >
              {hero.description}
            </HtmlContent>
          )}
          {hero.buttonText && (
            <a
              href={hero.buttonHref ?? '#'}
              className={buttonClass}
              style={buttonBaseStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
            >
              {hero.buttonText}
            </a>
          )}
        </div>

        {hero.image && (
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src={hero.image} alt={hero.title} className="max-h-[300px] lg:max-h-[400px] object-contain" />
          </div>
        )}
      </section>
    );
  }

  if (bannerType === 'image-background') {
    return (
      <section className={`relative w-full ${roundedClass} h-[400px] lg:h-[500px] flex items-center overflow-hidden`}>
        <img src={hero.backgroundImage} alt={hero.title} className="absolute inset-0 w-full h-full object-contain" />
        <div className="relative z-10 flex flex-col justify-between w-full md:w-1/2 px-5 md:px-15 py-10">
          <HtmlContent
            as="h2"
            html={hero.titleHtml}
            className={imageBackgroundTitleClass}
            containerClassName={imageBackgroundTitleClass}
            style={titleStyle}
          >
            {hero.title}
          </HtmlContent>
          <HtmlContent
            as="p"
            html={hero.subtitleHtml}
            className={imageBackgroundSubtitleClass}
            containerClassName={imageBackgroundSubtitleClass}
            style={subtitleStyle}
          >
            {hero.subtitle}
          </HtmlContent>

          {hero.description && (
            <HtmlContent
              as="p"
              html={hero.descriptionHtml}
              className="text-sm lg:text-base mb-4"
              containerClassName="text-sm lg:text-base mb-4"
              style={descriptionStyle}
            >
              {hero.description}
            </HtmlContent>
          )}
          {hero.buttonText && (
            <a
              href={hero.buttonHref ?? '#'}
              className={buttonClass}
              style={buttonBaseStyle}
              onMouseOver={handleButtonHover}
              onMouseOut={handleButtonLeave}
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
