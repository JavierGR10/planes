import SharedHeroCarousel from '../../components/HeroCarousel';
import HeroBanner from './HeroBanner';

function HeroCarousel({ heroes, theme, rounded = true, buttonBorder }) {
  const carouselStyle = {
    '--hero-carousel-pagination-color': '#FFFFFF',
    '--hero-carousel-pagination-active-color': '#FFFFFF',
    '--hero-carousel-navigation-color': '#FFFFFF',
    '--hero-carousel-navigation-background': 'color-mix(in srgb, #0f172a 42%, transparent 58%)',
    '--hero-carousel-navigation-hover-background': 'color-mix(in srgb, #0f172a 64%, transparent 36%)',
    '--hero-carousel-navigation-border': 'rgba(255, 255, 255, 0.2)',
    '--hero-carousel-navigation-hover-border': 'rgba(255, 255, 255, 0.38)',
    '--hero-carousel-navigation-backdrop': 'blur(14px)',
  };

  return (
    <SharedHeroCarousel
      heroes={heroes}
      theme={theme}
      rounded={rounded}
      BannerComponent={HeroBanner}
      bannerProps={{ buttonBorder }}
      carouselStyle={carouselStyle}
    />
  );
}

export default HeroCarousel;
