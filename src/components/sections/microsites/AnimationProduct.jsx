import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const clipPathAnimation = {
  initial: {
    clipPath: 'inset(50% 35% 50% 35% round 4px)',
    x: '-50%',
  },
  enter: {
    clipPath: 'inset(0% 0% 0% 0% round 4px)',
    x: '-50%',
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    clipPath: 'inset(50% 50% 50% 50% round 4px)',
    x: '-50%',
    transition: {
      duration: 0.5,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const imageZoomAnimation = {
  initial: { scale: 1.2 },
  enter: {
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  closed: {
    scale: 1.2,
    transition: {
      duration: 0.7,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const shinyAnimation = {
  initial: { left: '-100%' },
  enter: {
    left: '150%',
    transition: {
      duration: 1,
      delay: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  closed: {
    left: '-100%',
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15, duration: 0.8 },
  },
};

function Product({ index, titleProduct, description, subtitleProduct, href, image, onHover }) {
  const detailHref = href && href !== '#' ? href : undefined;

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => onHover(index)}
      className="relative flex w-full cursor-pointer flex-col gap-3 overflow-hidden rounded-3xl backdrop-blur-xs
        border bg-[linear-gradient(to_bottom,transparent_0%,#1f242d33_20%,#1f242d66_40%,#1f242d99_60%,#111111cc_80%,#010101_100%)]
        px-5 py-6 text-white/85
        md:flex-row md:items-center md:justify-between md:gap-0
        before:absolute before:inset-0 before:-z-1 before:origin-top before:scale-y-0 before:bg-[#007EBB]
        before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.25,0.46,0.45,0.94)] before:content-['']
        hover:before:scale-y-100"
    >
      <div className="relative z-1 flex flex-col min-[480px]:flex-row min-[480px]:items-center gap-2 flex-1">
        {image && (
          <div className="relative z-1 h-24 w-24 shrink-0 overflow-hidden md:hidden">
            <img src={image} alt={titleProduct} className="h-full w-full object-contain" />
          </div>
        )}
        <div className="flex flex-col">
          <h2 className="m-0 text-xl font-bold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:text-2xl">
            {titleProduct}
          </h2>
          <p className="text-sm text-white/70 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
            {subtitleProduct}
          </p>
          <p className="max-w-xs text-sm text-white/60 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
            {description}
          </p>
        </div>
      </div>

      {detailHref && (
        <a
          href={detailHref}
          className="group relative z-1 shrink-0 self-start overflow-hidden rounded-full border border-white
            px-6 py-2 text-center text-sm font-extrabold
            before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-white before:content-['']
            before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            hover:before:scale-x-100 md:self-auto"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-900">Ver más</span>
        </a>
      )}
    </motion.div>
  );
}

function Modal({ modal, items, springY, modalSize }) {
  const { active, index } = modal;

  return (
    <motion.div
      variants={clipPathAnimation}
      initial="initial"
      animate={active ? 'enter' : 'closed'}
      className="pointer-events-none fixed left-1/2 z-100 overflow-hidden rounded-[30px] border border-white backdrop-blur-xs"
      style={{ top: springY, width: modalSize, height: modalSize, willChange: 'clip-path' }}
    >
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_bottom,transparent_0%,#1f242d33_20%,#1f242d66_40%,#1f242d99_60%,#111111cc_80%,#010101_100%)] " />
      <div
        style={{ top: `${index * -100}%`, height: `${items.length * 100}%` }}
        className="absolute w-full transition-[top] duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]"
      >
        {items.map((item, idx) => (
          <div
            key={`modal_${idx}`}
            style={{ height: `${100 / items.length}%` }}
            className="relative w-full overflow-hidden grid place-items-center z-2"
          >
            <motion.img
              src={item.image}
              alt={item.titleProduct}
              variants={imageZoomAnimation}
              initial="initial"
              animate={active ? 'enter' : 'closed'}
              className="h-[251px] w-full object-contain p-5"
              style={{ willChange: 'transform' }}
            />
            <motion.div
              variants={shinyAnimation}
              initial="initial"
              animate={active ? 'enter' : 'closed'}
              className="pointer-events-none absolute top-0 h-full w-1/2 -skew-x-25"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AnimationProduct({ items, headerOffset = 80 }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [mouseReady, setMouseReady] = useState(false);
  const [modalSize, setModalSize] = useState(350);
  const [portalContainer, setPortalContainer] = useState(null);
  const containerRef = useRef(null);
  const mouseY = useMotionValue(0);
  const springY = useSpring(mouseY, { stiffness: 250, damping: 32 });

  // Crear portal container solo en cliente
  useEffect(() => {
    setPortalContainer(document.body);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    // Área visible real considerando header
    const visibleTop = Math.max(rect.top, headerOffset);
    const visibleBottom = Math.min(rect.bottom, vh);

    // Tamaño fijo según breakpoint (no recalcular en cada movimiento)
    const isXL = window.innerWidth >= 1280;
    const currentSize = isXL ? 450 : 350;

    // Calcular el TOP del modal
    const minTop = visibleTop;
    const maxTop = visibleBottom - currentSize;
    const idealTop = e.clientY - currentSize / 2;
    const clampedTop = Math.min(Math.max(idealTop, minTop), maxTop);

    if (modalSize !== currentSize) setModalSize(currentSize);

    if (!mouseReady) {
      mouseY.jump(clampedTop);
      setMouseReady(true);
    } else {
      mouseY.set(clampedTop);
    }
  };

  return (
    <main className="relative w-full">
      <motion.div
        ref={containerRef}
        initial="initial"
        animate="show"
        variants={containerVariants}
        className="flex flex-col items-center justify-center gap-4"
        onMouseLeave={() => setModal((prev) => ({ ...prev, active: false }))}
        onMouseMove={handleMouseMove}
      >
        {items.map((item, index) => (
          <Product key={index} index={index} {...item} onHover={(idx) => setModal({ active: true, index: idx })} />
        ))}
      </motion.div>

      {portalContainer &&
        createPortal(
          <div className="hidden md:block">
            <Modal
              modal={{ ...modal, active: modal.active && mouseReady }}
              items={items}
              springY={springY}
              modalSize={modalSize}
            />
          </div>,
          portalContainer
        )}
    </main>
  );
}

export default AnimationProduct;
