import ResponsivePicture from '../../components/ResponsivePicture';
import HeroBannerContent from '../../components/HeroBannerContent';
import Slider from './Slider';

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

  const renderTitle = ({ content, className, style }) => (
    <h2 className={className} style={style}>
      {content}
    </h2>
  );

  const renderSubtitle = ({ content, className, style }) => (
    <p className={className} style={style}>
      {content}
    </p>
  );

  const renderDescription = ({ content, className, style }) => (
    <p className={className} style={style}>
      {content}
    </p>
  );

  const renderButton = ({ href, className, style, children, onMouseOver, onMouseOut }) => (
    <a href={href} className={className} style={style} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {children}
    </a>
  );

  if (bannerType === 'with-slider') {
    return (
      <section
        className={`relative w-full ${roundedClass} py-6 md:py-0 min-h-75 md:min-h-100 xl:min-h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10`}
        style={heroBackgroundStyle}
      >
        <div className="flex flex-col w-full md:w-1/2 lg:w-[40%] px-5 md:px-15">
          <HeroBannerContent
            title={hero.title}
            titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
            titleStyle={titleStyle}
            renderTitle={renderTitle}
            subtitle={hero.subtitle}
            subtitleClassName="mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base"
            subtitleStyle={subtitleStyle}
            renderSubtitle={renderSubtitle}
            afterSubtitle={
              hero.banners && hero.banners.length > 0 ? (
                <Slider banners={[...hero.banners, ...hero.banners]} theme={heroText} />
              ) : null
            }
            buttonText={hero.buttonText}
            buttonHref={hero.buttonHref}
            buttonClassName={`${buttonClass} my-4 md:mt-0 max-md:hidden`}
            buttonStyle={buttonStyle}
            buttonProps={{
              onMouseOver: (event) => applyHoverState(event.currentTarget),
              onMouseOut: (event) => resetHoverState(event.currentTarget),
            }}
            renderButton={renderButton}
          />
        </div>
      </section>
    );
  }

  // if (bannerType === 'simple') {
  //   return (
  //     <section
  //       className={`relative w-full ${roundedClass} py-6 md:py-10 min-h-75 md:min-h-100 xl:min-h-125 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 px-5 md:px-15`}
  //       style={heroBackgroundStyle}
  //     >
  //       <div className="flex flex-col w-full md:w-1/2">
  //         <HeroBannerContent
  //           title={hero.title}
  //           titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
  //           titleStyle={titleStyle}
  //           renderTitle={renderTitle}
  //           subtitle={hero.subtitle}
  //           subtitleClassName="mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base"
  //           subtitleStyle={subtitleStyle}
  //           renderSubtitle={renderSubtitle}
  //           description={hero.description}
  //           descriptionClassName="text-sm lg:text-base mb-4"
  //           descriptionStyle={descriptionStyle}
  //           renderDescription={renderDescription}
  //           buttonText={hero.buttonText}
  //           buttonHref={hero.buttonHref}
  //           buttonClassName={buttonClass}
  //           buttonStyle={buttonStyle}
  //           buttonProps={{
  //             onMouseOver: (event) => applyHoverState(event.currentTarget),
  //             onMouseOut: (event) => resetHoverState(event.currentTarget),
  //           }}
  //           renderButton={renderButton}
  //         />
  //       </div>

  //       {hero.image && (
  //         <div className="w-full md:w-1/2 flex items-center justify-center">
  //           <ResponsivePicture
  //             responsiveImage={hero.responsiveImage}
  //             src={hero.image}
  //             alt={hero.title}
  //             imgClassName="max-h-75 lg:max-h-100 object-contain"
  //           />
  //         </div>
  //       )}
  //     </section>
  //   );
  // }

  if (bannerType === 'image-background') {
    return (
      <section
        className={`relative w-full ${roundedClass} min-h-75 md:min-h-100 xl:min-h-125 flex items-center overflow-hidden`}
        style={heroBackgroundStyle}
      >
        <ResponsivePicture
          responsiveImage={hero.responsiveBackgroundImage}
          src={hero.backgroundImage}
          alt={hero.title ?? 'Hero banner'}
          className="absolute inset-0 w-full h-full"
          imgClassName="absolute inset-0 w-full h-full object-contain"
        />
        <div className="relative z-10 flex flex-col w-full md:w-1/2 px-5 md:px-15 py-10">
          <HeroBannerContent
            title={hero.title}
            titleClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold"
            titleStyle={titleStyle}
            renderTitle={renderTitle}
            subtitle={hero.subtitle}
            subtitleClassName="mb-4 md:mb-5 font-bold text-xs sm:text-sm lg:text-base"
            subtitleStyle={subtitleStyle}
            renderSubtitle={renderSubtitle}
            buttonText={hero.buttonText}
            buttonHref={hero.buttonHref}
            buttonClassName={buttonClass}
            buttonStyle={buttonStyle}
            buttonProps={{
              onMouseOver: (event) => applyHoverState(event.currentTarget),
              onMouseOut: (event) => resetHoverState(event.currentTarget),
            }}
            renderButton={renderButton}
          />
        </div>
      </section>
    );
  }

  return null;
}

export default HeroBanner;
