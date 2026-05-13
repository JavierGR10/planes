import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ResponsivePicture from '../../../components/ResponsivePicture';

const imageVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: [0.55, 0, 1, 0.45],
    },
  },
};

function isVideoBanner(banner) {
  return banner?.mediaType === 'video';
}

function SliderBannerThumbnail({ banner }) {
  if (isVideoBanner(banner)) {
    if (banner.posterImage) {
      return (
        <ResponsivePicture
          responsiveImage={banner.responsivePosterImage}
          src={banner.posterImage}
          alt={banner.name}
          imgClassName="max-w-17.5 lg:max-w-22.25 max-h-15 lg:max-h-22.25 select-none object-contain"
        />
      );
    }

    return (
      <video
        className="max-w-17.5 lg:max-w-22.25 max-h-15 lg:max-h-22.25 select-none object-contain"
        src={banner.video}
        autoPlay={banner.autoplay ?? true}
        muted={banner.muted ?? true}
        loop={banner.loop ?? true}
        playsInline={banner.playsInline ?? true}
        preload="metadata"
      />
    );
  }

  return (
    <ResponsivePicture
      responsiveImage={banner.responsiveImage}
      src={banner.image}
      alt={banner.name}
      imgClassName="max-w-17.5 lg:max-w-22.25 max-h-15 lg:max-h-22.25 select-none"
    />
  );
}

function ActiveSliderMedia({ banner }) {
  if (!banner) {
    return null;
  }

  if (isVideoBanner(banner)) {
    return (
      <motion.video
        key={banner.video}
        src={banner.video}
        poster={banner.posterImage}
        className="max-h-82.75 select-none"
        autoPlay={banner.autoplay ?? true}
        muted={banner.muted ?? true}
        loop={banner.loop ?? true}
        playsInline={banner.playsInline ?? true}
        preload="metadata"
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    );
  }

  return (
    <ResponsivePicture
      key={banner.image}
      responsiveImage={banner.responsiveImage}
      src={banner.image}
      alt={`Imagen del banner ${banner.name}`}
      imgClassName="max-h-[331px] select-none"
      motionProps={{
        variants: imageVariants,
        initial: 'initial',
        animate: 'animate',
        exit: 'exit',
      }}
    />
  );
}

function Slider({ banners, theme }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleStyle = { color: theme?.sliderTitleColor ?? theme?.titleColor ?? '#FFFFFF' };
  const subtitleStyle = { color: theme?.sliderSubtitleColor ?? theme?.subtitleColor ?? '#FFFFFF' };
  const activeBorderStyle = { borderColor: theme?.sliderActiveBorderColor ?? '#FFFFFF' };
  const activeBanner = banners[activeIndex];

  return (
    <>
      <Swiper
        grabCursor
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 2 },
          620: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        className="w-full h-full relative"
      >
        {banners.map((banner, index) => (
          <SwiperSlide className="pb-10 pl-1 pt-1 flex items-center justify-center" key={index}>
            {({ isActive }) => (
              <article
                className={`cursor-pointer banner-item rounded-[10px] p-4 h-25 lg:h-29.75 w-25 lg:w-33 flex items-center justify-center transition-colors duration-500  ease-in-out
                  ${isActive ? 'border scale-105' : ''}`}
                style={isActive ? activeBorderStyle : undefined}
              >
                <SliderBannerThumbnail banner={banner} />
              </article>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="md:hidden flex flex-col items-center py-4">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{
              opacity: 0,
              filter: 'blur(10px)',
              transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
            }}
            key={`mobile-${activeBanner?.name}`}
            className="text-center"
          >
            <h4 className="font-extrabold text-lg sm:text-xl" style={titleStyle}>
              {activeBanner?.name}
            </h4>
            <p className="text-sm" style={subtitleStyle}>
              {activeBanner?.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="hidden md:block absolute top-30 md:top-40 xl:top-20 right-[8%] lg:right-[15%]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 0,
              filter: 'blur(10px)',
            }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{
              opacity: 0,
              filter: 'blur(10px)',
              transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] },
            }}
            key={activeBanner?.name}
            className="mb-5 mr-30"
          >
            <h4 className="font-extrabold text-2xl lg:text-3xl" style={titleStyle}>
              {activeBanner?.name}
            </h4>
            <p className="text-base lg:text-lg" style={subtitleStyle}>
              {activeBanner?.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hidden md:block absolute top-30 md:top-40 xl:top-40 right-[8%] lg:right-[15%] z-10">
        <AnimatePresence mode="wait">
          <ActiveSliderMedia banner={activeBanner} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default Slider;
