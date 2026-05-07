import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
    // CLAVE: Prevenir en elementos específicos
    prevent: (node) => {
      return node.hasAttribute('data-lenis-prevent') || node.closest('[data-lenis-prevent]') !== null;
    },
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Hacer disponible globalmente para React
  if (typeof window !== 'undefined') {
    window.lenis = lenis;
  }
}
