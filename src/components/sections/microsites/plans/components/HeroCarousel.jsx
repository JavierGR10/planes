import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css';

function HeroCarousel({ heroes, theme, rounded = true, BannerComponent, bannerProps = {}, carouselStyle }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
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
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {heroes.map((hero, index) => (
        <SwiperSlide key={index}>
          <BannerComponent
            hero={hero}
            theme={theme}
            rounded={rounded}
            isActive={index === activeIndex}
            {...bannerProps}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroCarousel;
