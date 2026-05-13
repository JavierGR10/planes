import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ResponsivePicture from '../../components/ResponsivePicture';

// Variantes de animación para la imagen principal
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
      ease: [0.22, 1, 0.36, 1], // ease-out-expo
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: [0.55, 0, 1, 0.45], // ease-in-expo
    },
  },
};

function Slider({ banners, theme }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const titleStyle = { color: theme?.sliderTitleColor ?? theme?.titleColor ?? '#FFFFFF' };
  const subtitleStyle = { color: theme?.sliderSubtitleColor ?? theme?.subtitleColor ?? '#FFFFFF' };
  const activeBorderStyle = { borderColor: theme?.sliderActiveBorderColor ?? '#FFFFFF' };

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        grabCursor
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={1500}
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
                className={`cursor-pointer banner-item rounded-[10px] p-4 h-25 lg:h-[119px] w-[100px] lg:w-[132px] flex items-center justify-center transition-colors duration-500  ease-in-out
                  ${isActive ? 'border scale-105' : ''}`}
                style={isActive ? activeBorderStyle : undefined}
              >
                <ResponsivePicture
                  responsiveImage={banner.responsiveImage}
                  src={banner.image}
                  alt={banner.name}
                  imgClassName="max-w-[70px] lg:max-w-[89px] max-h-[60px] lg:max-h-[89px] select-none"
                />
              </article>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Versión móvil - flujo normal, centrado */}
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
            key={`mobile-${banners[activeIndex]?.name}`}
            className="text-center"
          >
            <h4 className="font-extrabold text-lg sm:text-xl" style={titleStyle}>
              {banners[activeIndex]?.name}
            </h4>
            <p className="text-sm" style={subtitleStyle}>
              {banners[activeIndex]?.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* <AnimatePresence mode="wait">
          <motion.img
            key={`mobile-img-${activeIndex}`}
            src={banners[activeIndex]?.image}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            alt={`Imagen del banner ${banners[activeIndex]?.name}`}
            className="max-w-[180px] sm:max-w-[220px] max-h-[180px] sm:max-h-[220px] select-none"
          />
        </AnimatePresence> */}
      </div>

      {/* Versión tablet/desktop - posición absoluta */}
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
              transition: { duration: 0.3, ease: [0.55, 0, 1, 0.45] }, // ease-in-expo
            }}
            key={banners[activeIndex]?.name}
            className="mb-5 mr-30"
          >
            <h4 className="font-extrabold text-2xl lg:text-3xl" style={titleStyle}>
              {banners[activeIndex]?.name}
            </h4>
            <p className="text-base lg:text-lg" style={subtitleStyle}>
              {banners[activeIndex]?.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hidden md:block absolute top-30 md:top-40 xl:top-40 right-[8%] lg:right-[15%] z-10">
        <AnimatePresence mode="wait">
          <ResponsivePicture
            key={activeIndex}
            responsiveImage={banners[activeIndex]?.responsiveImage}
            src={banners[activeIndex]?.image}
            alt={`Imagen del banner ${banners[activeIndex]?.name}`}
            imgClassName="max-h-[331px] select-none"
            motionProps={{
              variants: imageVariants,
              initial: 'initial',
              animate: 'animate',
              exit: 'exit',
            }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}

export default Slider;
