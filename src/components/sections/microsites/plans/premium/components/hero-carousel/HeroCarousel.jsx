import SharedHeroCarousel from '../../../components/HeroCarousel';
import HeroBanner from './HeroBanner';

function HeroCarousel({ heroes, theme, rounded = true }) {
  const carouselStyle = {
    '--hero-carousel-pagination-color': theme.paginationColor,
    '--hero-carousel-pagination-active-color': theme.paginationActiveColor,
    '--hero-carousel-navigation-color': theme.navigationColor,
    '--hero-carousel-navigation-background': theme.navigationBackground,
    '--hero-carousel-navigation-hover-background': theme.navigationHoverBackground,
  };

  return (
    <SharedHeroCarousel
      heroes={heroes}
      theme={theme}
      rounded={rounded}
      BannerComponent={HeroBanner}
      carouselStyle={carouselStyle}
    />
  );
}

export default HeroCarousel;
