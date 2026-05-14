import type { BusinessMicrositeConfig } from '@/components/sections/microsites/plans/business/types/business.types';

import LogoHeader from '@/assets/microsites/lenovo/logos/logo-header.png';
import HeroSlideThinkpad from '@/assets/microsites/lenovo/index/hero-slide-thinkpad.webp';
import HeroSlideIdeapad from '@/assets/microsites/lenovo/index/hero-slide-ideapad.webp';
import HeroSlideLegion from '@/assets/microsites/lenovo/index/hero-slide-legion.webp';
import BannerFeatured from '@/assets/microsites/lenovo/index/banner-featured.png';
import BannerFeatured2 from '@/assets/microsites/lenovo/index/banner-featured-2.png';
import BannerFeatured3 from '@/assets/microsites/lenovo/index/banner-featured-3.png';
import BannerFeaturedProduct from '@/assets/microsites/lenovo/index/banner-featured-product.png';
import CataloguePreview from '@/assets/microsites/lenovo/index/catalogue-preview.png';
import LenovoVideo from '@/assets/microsites/lenovo/index/video.mp4';
import Event1 from '@/assets/microsites/lenovo/index/event-1.png';
import Event2 from '@/assets/microsites/lenovo/index/event-2.png';
import Event3 from '@/assets/microsites/lenovo/index/event-3.png';
import LegionHeroBanner from '@/assets/microsites/lenovo/details/legion/hero-banner.png';
import LegionBannerSecondary from '@/assets/microsites/lenovo/details/legion/banner-secondary.png';
import LegionProductMain from '@/assets/microsites/lenovo/details/legion/product-main.png';
import LegionFeatureDlss from '@/assets/microsites/lenovo/details/legion/feature-nvidia-dlss.png';
import LegionFeatureRayTracing from '@/assets/microsites/lenovo/details/legion/feature-ray-tracing.png';
import LegionFeatureReflex from '@/assets/microsites/lenovo/details/legion/feature-nvidia-reflex.png';
import LegionFeatureMaxQ from '@/assets/microsites/lenovo/details/legion/feature-max-q.png';

// Productos
import Product4 from '@/assets/microsites/lenovo/index/producto_04.webp';
import Product5 from '@/assets/microsites/lenovo/index/producto_05.webp';
import Product6 from '@/assets/microsites/lenovo/index/producto_06.webp';
import Product7 from '@/assets/microsites/lenovo/index/producto_07.webp';
import Product8 from '@/assets/microsites/lenovo/index/producto_08.webp';
import Product9 from '@/assets/microsites/lenovo/index/producto_09.webp';
import Product10 from '@/assets/microsites/lenovo/index/producto_10.webp';

// Servicios
import Service1 from '@/assets/microsites/lenovo/index/services/servicio_1.webp';
import Service2 from '@/assets/microsites/lenovo/index/services/servicio_2.webp';
import Service3 from '@/assets/microsites/lenovo/index/services/servicio_3.webp';
import Service4 from '@/assets/microsites/lenovo/index/services/servicio_4.webp';
import Service5 from '@/assets/microsites/lenovo/index/services/servicio_5.webp';
import Service6 from '@/assets/microsites/lenovo/index/services/servicio_6.webp';
//Nosotros
import Us from '@/assets/microsites/lenovo/index/nosotros.webp';
import BannerUs from '@/assets/microsites/lenovo/index/banner_nosotros.webp';

// Modal
import Modal from '@/assets/microsites/lenovo/index/business_modal.webp';
import { withBasePathConfig } from '@/components/sections/microsites/config/path-utils';

export const lenovoConfig = withBasePathConfig({
  brand: {
    slug: 'lenovo',
    name: 'Lenovo',
    plan: 'business',
  },

  meta: {
    title: 'Micrositio Lenovo - Grupo CVA',
    description:
      'Descubre las soluciones tecnológicas de Lenovo a través de nuestro micrositio dedicado. Explora productos, servicios y eventos exclusivos diseñados para impulsar tu negocio con la innovación de Lenovo.',
    favicon: 'https://support.lenovo.com/esv4/images/l-favicon.ico',
  },

  branding: {
    logos: {
      header: {
        src: LogoHeader.src,
        alt: 'Logo Lenovo',
      },
      footer: {
        src: LogoHeader.src,
        alt: 'Logo Lenovo Footer',
      },
    },
    theme: {
      typography: {
        headingFontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
        bodyFontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
        ctaFontFamily: 'var(--font-plus-jakarta, "Plus Jakarta Sans", sans-serif)',
      },
      primaryColor: '#E1140A',
      secondaryColor: '#1F242D',
      accentColor: '#313741',
      buttonColor: '#F55D56',
      buttonHoverColor: '#E1140A',
      heroGradient: 'linear-gradient(90deg, #1F242D 0%, #313741 100%)',
      detailSubtitleColor: '#4AADEE',
      hero: {
        text: {
          titleColor: '#FFFFFF',
          subtitleColor: '#FFFFFF',
          descriptionColor: 'rgba(255, 255, 255, 0.9)',
          sliderTitleColor: '#FFFFFF',
          sliderSubtitleColor: '#FFFFFF',
        },
      },
      buttons: {
        heroCta: {
          background: '#F55D56',
          textColor: '#FFFFFF',
          hoverBackground: '#E1140A',
          hoverTextColor: '#FFFFFF',
          borderColor: '#313741',
          hoverBorderColor: '#313741',
        },
        productCardCta: {
          background: '#FFFFFF',
          textColor: '#313741',
          hoverBackground: '#E1140A',
          hoverTextColor: '#FFFFFF',
          borderColor: 'none',
          hoverBorderColor: 'none',
        },
      },
      surfaces: {
        productCard: {
          featuredBackground: '#20252E',
          defaultBackground: '#303640',
          textColor: '#FFFFFF',
        },
      },
      services: {
        panelBackground: '#FFFFFF',
        panelBorderColor: '#FFFFFF',
        cardBorderColor: '#1F242D',
        cardTitleColor: '#FFFFFF',
        cardDescriptionColor: '#152938',
        // cardBorderRadius: '22px',
        ctaBackground: '#F55D56',
        ctaTextColor: '#FFFFFF',
        ctaHoverBackground: '#E1140A',
        ctaHoverTextColor: '#FFFFFF',
        ctaBorderColor: '#313741',
        ctaHoverBorderColor: '#313741',
      },
      popup: {
        overlay: 'rgba(0, 0, 0, 0.72)',
        closeBackground: 'rgba(31, 36, 45, 0.55)',
        closeHoverBackground: 'rgba(225, 20, 10, 0.92)',
      },
      footer: {
        backgroundColor: '#FFFFFF',
        dividerGradient: 'linear-gradient(90deg, #EEEEF1 0%, #000000 50%, #EEEEF0 100%)',
        titleColor: '#101924',
        itemColor: '#101924',
        mutedColor: '#92939E',
        linkHoverColor: '#E1140A',
      },
    },
  },

  navigation: {
    basePath: '/micrositios/lenovo',
    items: [
      { label: 'Nosotros', href: '/micrositios/lenovo/nosotros', type: 'link' },
      { label: 'Productos', href: '/micrositios/lenovo#productos', type: 'scroll' },
      { label: 'Servicios', href: '/micrositios/lenovo#servicios', type: 'scroll' },
    ],
  },

  contact: {
    whatsapp:
      'https://api.whatsapp.com/send/?phone=523315994174&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+las+soluciones+de+CVA.+%C2%BFPodr%C3%ADan+brindarme+informaci%C3%B3n%2C+por+favor%3F&type=phone_number&app_absent=0',
  },

  sections: {
    heroes: [
      {
        type: 'with-slider',
        gradient: 'linear-gradient(90deg, #1F242D 0%, #313741 100%)',
        title: 'Tecnología que se adapta a ti',
        subtitle: 'Redefinición del rendimiento para flujos de trabajo exigentes.',
        banners: [
          {
            name: 'ThinkPad',
            subtitle: '¡Personalizable!',
            image: HeroSlideThinkpad.src,
          },
          {
            name: 'IdeaPad',
            subtitle: '¡Personalizable!',
            image: HeroSlideIdeapad.src,
          },
          {
            name: 'Legion',
            subtitle: '¡Personalizable!',
            image: HeroSlideLegion.src,
          },
        ],
        buttonText: 'Conoce nuestros modelos',
        buttonHref: '/micrositios/lenovo/legion',
      },
      {
        type: 'image-background',
        backgroundImage: BannerFeatured2.src,
      },
      {
        type: 'image-background',
        backgroundImage: BannerFeatured3.src,
      },
    ],

    video: {
      enabled: true,
      url: LenovoVideo,
      title: 'Video Lenovo',
      // poster: BannerFeatured2.src,
      controls: true,
      autoplay: true,
      muted: true,
      loop: true,
    },

    products: {
      sectionTitle: 'Productos',
      buttonText: 'Ver más',
      allProductsLabel: 'Ver todos los productos',
      collapseProductsLabel: 'Ver menos productos',
      items: [
        {
          image: HeroSlideLegion.src,
          titleProduct: 'Legion Pro 5',
          subtitleProduct: '5 Gen 10 (16” AMD)\nGeForce RTX',
          descriptionTitle: 'Libera el rendimiento',
          description:
            'Portátil gamer de alto desempeño con gráficos dedicados, refrigeración optimizada y potencia sostenida para sesiones exigentes de juego y creación.',
          href: '/micrositios/lenovo/legion',
        },
        {
          image: HeroSlideThinkpad.src,
          titleProduct: 'ThinkPad',
          subtitleProduct: 'E14 Gen 6\n14” AMD',
          descriptionTitle: 'Desempeño mejorado para una\nmayor productividad',
          description:
            'Si estás trabajando en varias hojas de cálculo, investigando y escribiendo un ensayo, o bien, realizando codificación extrema, podrás ir de tarea en tarea con el rendimiento y la velocidad de los procesadores AMD Ryzen 7000HS, además de una gran memoria expandible. ',
          href: '/micrositios/lenovo/thinkpad',
        },
        {
          image: HeroSlideIdeapad.src,
          titleProduct: 'IdeaPad',
          subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'El portátil Lenovo  IdeaPadSlim5 Gen 10 AMD de 14” ofrece capacidades de computación avanzadas gracias a su procesador AMD Ryzen, con un rendimiento impresionante para gestionar tareas complejas con facilidad. Ideal para estudiar o jugar, ya que garantiza un rendimiento sólido al tiempo que optimiza el consumo de energía',
          href: '/micrositios/lenovo/ideapad',
        },
        {
          image: Product4.src,
          titleProduct: 'Lenovo',
          subtitleProduct: 'Tab K11',
          descriptionTitle: 'Más rápido',
          description:
            'Obtenga un rendimiento superior con el procesador MediaTek G88 de ocho núcleos en la tableta Lenovo Tab K11 LTE. Diseñado para mentes curiosas y de ritmo rápido, este dispositivo supera las expectativas con juegos fluidos, multitarea fluida y transmisión fluida con abundante memoria y almacenamiento.',
          href: '/micrositios/lenovo/legion',
        },
        {
          image: Product5.src,
          titleProduct: 'Idea Tab Plus',
          subtitleProduct: 'con Funda Teclado + \nLápiz + EarBuds',
          descriptionTitle: 'Ligera sobre ti.\nBrillante para ti',
          description:
            'Con un grosor de aproximadamente 6,29 mm* y un peso de alrededor de 530 g, esta tablet es lo suficientemente delgada como para caber entre los cuadernos y es lo suficientemente ligera como para llevarla de la mañana a la noche. Se adapta fácilmente a la vida cotidiana sin ocupar espacio.',
          href: '/micrositios/lenovo/thinkpad',
        },
        {
          image: Product6.src,
          titleProduct: 'Idea Pad Slim',
          subtitleProduct: '5x Gen 9\n14” Snapdragon',
          descriptionTitle: 'Mayor definición. Más brillante',
          description:
            'Sumérgete en un espectáculo visual sin igual con nuestra deslumbrante pantalla de 14″ 16:10, con OLED disponible en modelos seleccionados, y biseles estrechos de 4 lados para ofrecer el máximo de pantalla en tiempo real. Cada píxel canta en colores, mejorando el trabajo y el juego. ',
          href: '/micrositios/lenovo/ideapad',
        },
        {
          image: Product7.src,
          titleProduct: 'Mochila',
          subtitleProduct: 'ThinkPad\nProfessional',
          // descriptionTitle: 'Lorem ipsum dolor sit amet',
          // description:
          //   'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.',
          href: '/micrositios/lenovo/legion',
        },
        {
          image: Product8.src,
          titleProduct: 'Docking Station',
          subtitleProduct: 'ThinkPad Universal',
          // descriptionTitle: 'Lorem ipsum dolor sit amet',
          // description:
          //   'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.',
          href: '/micrositios/lenovo/thinkpad',
        },
        {
          image: Product9.src,
          titleProduct: 'Mochila',
          subtitleProduct: 'Lorem Ipsum is\nsimply dummy text',
          // descriptionTitle: 'Lenovo',
          // description:
          //   'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.',
          href: '/micrositios/lenovo/ideapad',
        },
        {
          image: Product10.src,
          titleProduct: 'IdeaPad Pro',
          subtitleProduct: '5 Gen 10 (16” AMD)\n¡Personalizable!',
          descriptionTitle: 'Rompe el límite y aumenta la\nproductividad',
          description:
            'Rompe las barreras de la productividad con la laptop Lenovo IdeaPad Pro 5 de 10ma Gen 16". Esta PC Copilot+, que cuenta con la tecnología de los procesadores AMD Ryzen™ de la serie 300 y la tecnología de PC con IA de Lenovo, garantiza un rendimiento fluido, sin importar la tarea.',
          href: '/micrositios/lenovo/legion',
        },
      ],
      bannerProduct: {
        banner: BannerFeatured.src,
        image: BannerFeaturedProduct.src,
        title: 'Legion',
        description:
          'Glacier White Legion 7i combina un estilo llamativo con la ingeniería de precisión. Hecho de aluminio de grado aeroespacial, es ligero, ultraduradero y más delgado que una moneda de diez centavos—perfecto para estudiantes de STEM en movimiento. Las funciones como una cámara IR de 5 MP con eShutter, los indicadores del modo de rendimiento RGB y la marca grabada con láser llevan la innovación al siguiente nivel.',
      },
    },

    services: {
      sectionTitle: 'Servicios',
      items: [
        {
          image: Service1.src,
          title: 'Protección de ThinkShield',
          description:
            'Lenovo ThinkShield ofrece a las empresas un marco de ciberseguridad integral, lo que garantiza la integridad de la cadena de suministro.',
          // href: '/micrositios/lenovo#contacto',
        },
        {
          image: Service2.src,
          title: 'Digital Workplace',
          description:
            'Las organizaciones obtienen un ecosistema completo de hardware, software y servicios creados para respaldar el trabajo hibrido e impulsar resultados medibles.',
          // href: '/micrositios/lenovo#contacto',
        },
        {
          image: Service3.src,
          title: 'Sustainability Solutions',
          description:
            'Lenovo Solutions impulsa la eficiencia: Reduce los costos energéticos, optimiza el rendimiento y maximiza el valor de TI.',
          // href: '/micrositios/lenovo#contacto',
        },
        {
          image: Service4.src,
          title: 'Servicio de IA de Lenovo',
          description: 'Experiencia en IA de extremo a extremo para un impacto empresarial real.',
          // href: '/micrositios/lenovo#contacto',
        },
        {
          image: Service5.src,
          title: 'IA Discover',
          description:
            'Evaluamos tu preparación para la IA en seguridad, personas, procesos y tecnología para identificar casos de uso de alto impacto.',
          // href: '/micrositios/lenovo#contacto',
        },
        {
          image: Service6.src,
          title: 'AI Fast Start',
          description:
            'Obtén una solución de IA totalmente operativa y preparada para el futuro que se adapta a las necesidades de tu empresa y es capaz de ofrecer resultados en 90 días',
          // href: '/micrositios/lenovo#contacto',
        },
      ],
    },

    catalogue: {
      sectionTitle: 'Catálogo',
      description:
        '<p>Descubre en nuestro catálogo la innovación y potencia de Lenovo, diseñada para acompañarte en cada desafío. Encuentra laptops, equipos de escritorio y accesorios con el rendimiento y la calidad que necesitas.</p><br><p>Elige la tecnología ideal <strong>para trabajar, crear y conectar sin límites.</strong></p>',
      image: CataloguePreview.src,
      imageAlt: 'Catálogo Lenovo',
    },

    events: {
      sectionTitle: 'Eventos',
      title:
        'La tecnología no se detiene, y nosotros tampoco. Acompáñanos en nuestros próximos eventos y vive la innovación en acción.',
      subtitle: 'AGENDA Y ACTIVIDADES PRÓXIMAS',
      description:
        'Conoce las líneas Lenovo destacadas para gaming, productividad y movilidad en experiencias enfocadas a cada tipo de usuario y negocio.',
      items: [
        {
          image: 'https://cdn.videocardz.com/1/2025/12/2LENOVO-CES-CEOS-1200x623.jpg',
          flyer: 'https://www.grupocva.com/mkt/imagenes/2025/07/07_flyer-general.jpg',
          title: 'Experiencia Lenovo 1',
          href: '/micrositios/lenovo/legion',
          eventDate: '2026-06-03',
          eventType: 'Showcase',
          location: 'CDMX',
        },
        {
          image: 'https://www.grupocva.com/mkt/imagenes/2026/04/Flyer_Business_Breakfast_CVA.jpg',
          title: 'Experiencia Lenovo 2',
          href: '/micrositios/lenovo/thinkpad',
          eventDate: '2026-06-10',
          eventType: 'Business Breakfast',
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwODv-qx99eo33QsBk6ogsGKUpZDiU4IL8Bw&s',
          flyer: 'https://www.grupocva.com/mkt/imagenes/2025/07/07_flyer-general.jpg',
          title: 'Experiencia Lenovo 3',
          href: '/micrositios/lenovo/ideapad',
          eventDate: '2026-06-18',
          location: 'En línea',
        },
        {
          image: 'https://www.technewsworld.com/wp-content/uploads/sites/3/2026/01/Lenovo-Tech-World-2026.jpg',
          flyer: 'https://www.grupocva.com/mkt/imagenes/2026/04/SKILL-UP-SESSIONS_Abril--.jpg',
          title: 'Experiencia Lenovo 4',
          href: '/micrositios/lenovo/ideapad',
          eventDate: '2026-06-25',
          eventType: 'Tech World',
          location: 'Querétaro',
        },
      ],
    },

    productDetails: [
      {
        slug: 'legion',
        hero: {
          image: LegionHeroBanner.src,
          title: 'LEGION',
          subtitle: 'Potencia para dominar',
        },
        productInfo: {
          subtitle: 'RENDIMIENTO ÓPTIMO PARA GAMERS',
          title: 'Rendimiento de nivel de escritorio, en cualquier lugar.',
          description:
            'Experimenta juegos y productividad de siguiente nivel con los procesadores Intel® Core™ Ultra. Disfruta de una capacidad de juego ultrafluida, multitarea perfecta y tareas creativas aceleradas por IA. Conecta todos los periféricos con Thunderbolt™ 4 y mejora el tiempo de juego sin conectar con un rendimiento más fresco y silencioso para gaming, streaming y creación.',
          image: LegionProductMain.src,
        },
        secondBanner: {
          image: LegionBannerSecondary.src,
        },
        features: [
          {
            image: LegionFeatureDlss.src,
            title: 'NVIDIA DLSS 4',
            description:
              'DLSS es un conjunto revolucionario de tecnologías de renderizado neuronal que utiliza IA para aumentar los FPS, reducir la latencia y mejorar la calidad de la imagen. \n\n\nEl último avance DLSS 4 incluye generación de fotogramas múltiples y super resolución  mejorada.',
          },
          {
            image: LegionFeatureRayTracing.src,
            title: 'TRAZADO DE RAYOS',
            description:
              'Imágenes de calidad cinematográfica a una velocidad sin precedentes, habilitadas por los núcleos RT de 4a generación y las innovadoras tecnologías de renderizado neuronal aceleradas con los núcleos tensores de 5a generación.',
          },
          {
            image: LegionFeatureReflex.src,
            title: 'NVIDIA Reflex 2',
            description:
              'Reflex 2 con Frame Warp te ofrece la máxima capacidad de respuesta, lo que mejora la adquisición de objetivos, el tiempo de reacción y la precisión de puntería.',
          },
          {
            image: LegionFeatureMaxQ.src,
            title: 'Max Q',
            description:
              'Diseñada desde cero para ofrecer la máxima eficiencia y dar un salto masivo en el rendimiento y la duración de la batería',
          },
        ],
      },
      {
        slug: 'thinkpad',
        hero: {
          image: HeroSlideThinkpad.src,
          title: 'ThinkPad E14',
          subtitle: 'Productividad sin compromisos',
        },
        productInfo: {
          subtitle: 'Serie Empresarial',
          title: 'Desempeño mejorado para mayor productividad',
          description:
            'Si estás trabajando en varias hojas de cálculo, investigando y escribiendo un ensayo, o bien, realizando codificación extrema, podrás ir de tarea en tarea con el rendimiento y la velocidad de los procesadores AMD Ryzen 7000HS, además de una gran memoria expandible.',
          image: HeroSlideThinkpad.src,
        },
        secondBanner: {
          image: BannerFeatured.src,
        },
        features: [
          {
            image: HeroSlideThinkpad.src,
            title: 'Seguridad empresarial',
            description:
              'Lector de huellas dactilares integrado, chip TPM 2.0 y ThinkShield para protección de datos corporativos de nivel empresarial.',
          },
          {
            image: HeroSlideThinkpad.src,
            title: 'Batería de larga duración',
            description:
              'Hasta 12 horas de autonomía con carga rápida que te permite alcanzar el 80% en solo 1 hora de carga.',
          },
          {
            image: HeroSlideThinkpad.src,
            title: 'Pantalla antirreflejos',
            description:
              'Display IPS de 14" Full HD con tratamiento antirreflejos y certificación TÜV Rheinland para reducir la fatiga visual.',
          },
          {
            image: HeroSlideThinkpad.src,
            title: 'Teclado ergonómico',
            description:
              'Teclado ThinkPad legendario con retroiluminación, resistente a derrames y diseñado para largas jornadas de trabajo.',
          },
          {
            image: HeroSlideThinkpad.src,
            title: 'Construcción robusta',
            description:
              'Probado bajo estándares militares MIL-STD-810H para resistir condiciones extremas de temperatura, humedad y vibraciones.',
          },
          {
            image: HeroSlideThinkpad.src,
            title: 'Conectividad profesional',
            description:
              'USB-C con Power Delivery, HDMI 2.0, Wi-Fi 6 y opción LTE para mantenerte conectado en cualquier lugar.',
          },
        ],
      },
      {
        slug: 'ideapad',
        hero: {
          image: HeroSlideIdeapad.src,
          title: 'IdeaPad Slim 5',
          subtitle: 'Ligera, potente y versátil',
        },
        productInfo: {
          subtitle: 'Serie Lifestyle',
          title: 'Disfruta de la informática sin límites',
          description:
            'El portátil Lenovo IdeaPad Slim 5 Gen 10 AMD de 14" ofrece capacidades de computación avanzadas gracias a su procesador AMD Ryzen, con un rendimiento impresionante para gestionar tareas complejas con facilidad. Ideal para estudiar o trabajar, ya que garantiza un rendimiento sólido al tiempo que optimiza el consumo de energía.',
          image: HeroSlideIdeapad.src,
        },
        secondBanner: {
          image: BannerFeatured.src,
        },
        features: [
          {
            image: HeroSlideIdeapad.src,
            title: 'Diseño ultradelgado',
            description:
              'Con solo 16.9mm de grosor y 1.46kg de peso, es perfecta para llevar a cualquier lugar sin sacrificar rendimiento.',
          },
          {
            image: HeroSlideIdeapad.src,
            title: 'Pantalla OLED',
            description:
              'Display OLED de 14" con resolución 2.8K (2880x1800), 100% DCI-P3 y brillo de 400 nits para colores vibrantes y negros profundos.',
          },
          {
            image: HeroSlideIdeapad.src,
            title: 'Procesador eficiente',
            description:
              'AMD Ryzen 7 7730U con arquitectura Zen 3+ ofrece hasta 8 núcleos y 16 hilos para multitarea fluida.',
          },
          {
            image: HeroSlideIdeapad.src,
            title: 'Audio Dolby Atmos',
            description:
              'Sistema de audio con certificación Dolby Atmos y altavoces optimizados por software para sonido envolvente.',
          },
          {
            image: HeroSlideIdeapad.src,
            title: 'Cámara con privacidad',
            description:
              'Webcam FHD con obturador de privacidad físico y reducción de ruido temporal para videollamadas claras.',
          },
          {
            image: HeroSlideIdeapad.src,
            title: 'Almacenamiento rápido',
            description:
              'SSD NVMe PCIe 4.0 de hasta 1TB con velocidades de lectura de 3500MB/s para arranques y transferencias instantáneas.',
          },
        ],
      },
    ],
  },

  aboutPage: {
    metaTitle: 'Nosotros Lenovo - Grupo CVA',
    title: '1 Empresario, 10 Ingenierosy  25 000 USD',
    subtitle: 'NOSOTROS',
    description:
      '<p class="mb-5">Lenovo fue pionera en el mercado mundial de ordenadores cuando se fundó hace cuatro décadas. A partir de una inversión inicial de tan solo 25 000 USD, Lenovo ha crecido hasta convertirse en no solo uno de los mayores fabricantes de ordenadores del mundo, si no también en líder tecnológico mundial en campos como la sostenibilidad corporativa.</p><p>La historia de Lenovo comienza en una habitación polvorienta de Pekín en 1984, el mismo año en que IBM lanzó su primer ordenador portátil, el IBM Portable PC, con un peso de 13,60 kg. La historia de ambas empresas fue entrelazándose a lo largo de los siguientes años.</p>',
    image: Us.src,
    imageAlt: 'Dell Technologies impulsando la innovación',
    additionalInfo: `
          <ul class="business-detail-timeline space-y-5 text-justify">
            <li>
              <strong class="block font-extrabold text-xl">1984</strong>
              Lenovo presentó y vendió ordenadores de marca propia y se convirtió en la marca líder en China, con una
              cuota de mercado del 30%
            </li>
            <li>
              <strong class="block font-extrabold text-xl">1986</strong>
              Creación de la primera tarjeta de caracteres chinos que permitió a los ordenadores procesar el idioma
              chino
            </li>
            <li>
              <strong class="block font-extrabold text-xl">1990</strong>
              Operando bajo el nombre Legend, Lenovo presentó el primer ordenador con su marca en China.
            </li>
            <li>
              <strong class="block font-extrabold text-xl">1992</strong>
              Primeros hitos de ThinkPad: Pantalla TFT en color y más tarde chip de seguridad integrado; innovaciones
              que acabaron convirtiéndose en estándares del sector.
            </li>
            <li>
              <strong class="block font-extrabold text-xl">1999</strong>
              El primer ordenador con Internet para China, con la primera conexión directa entre un ordenador y una
              línea telefónica.
            </li>
            <li>
              <strong class="block font-extrabold text-xl">2003</strong>
              La empresa pasó a llamarse Lenovo.
            </li>
            <li>
              <strong class="block font-extrabold text-xl">2005</strong>
              Lenovo adquirió la división de ordenadores de IBM, inlcuido ThinkPad
            </li>
          </ul>`,
    banner: BannerUs.src,
  },

  popupModal: {
    enabled: true,
    image: Modal.src,
    alt: 'Promoción Lenovo',
    href: '/micrositios/lenovo/nosotros',
  },

  footer: {
    contact: {
      email: 'contacto@grupocva.com',
      phone: '33 3812 14 13',
      address: 'Av. Mariano Otero 2489',
    },
  },
} satisfies BusinessMicrositeConfig);
