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

export const lenovoConfig = {
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
      {
        label: 'Catálogo',
        type: 'dropdown' as const,
        items: [
          { label: 'Legion', href: '/micrositios/lenovo/legion' },
          { label: 'IdeaPad', href: '/micrositios/lenovo/ideapad' },
          { label: 'ThinkPad', href: '/micrositios/lenovo/thinkpad' },
        ],
      },
      {
        label: 'Contacto',
        href: 'https://api.whatsapp.com/send/?phone=523315994174&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+las+soluciones+de+CVA.+%C2%BFPodr%C3%ADan+brindarme+informaci%C3%B3n%2C+por+favor%3F&type=phone_number&app_absent=0',
        type: 'link' as const,
      },
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
        // title: 'Segundo Banner',
        // subtitle: 'Promoción especial',
        // description: 'Texto adicional opcional',
        // buttonText: 'Comprar',
        // buttonHref: '/productos',
      },
      {
        type: 'image-background',
        backgroundImage: BannerFeatured3.src,
        // title: 'Tercer Banner',
        // subtitle: 'Evento especial',
        // buttonText: 'Registrarse',
        // buttonHref: '/evento',
      },
    ],

    video: {
      enabled: true,
      url: 'https://www.youtube.com/embed/Vi2r20f6tAY?si=4UQfSS7ePHFCQrqh',
      title: 'Video Lenovo',
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
          titleProduct: 'Producto 04',
          subtitleProduct: '5 Gen 10 (16” AMD)\nGeForce RTX',
          descriptionTitle: 'Libera el rendimiento',
          description:
            'Portátil gamer de alto desempeño con gráficos dedicados, refrigeración optimizada y potencia sostenida para sesiones exigentes de juego y creación.',
          href: '/micrositios/lenovo/legion',
        },
        {
          image: Product5.src,
          titleProduct: 'Producto 05',
          subtitleProduct: 'E14 Gen 6\n14” AMD',
          descriptionTitle: 'Desempeño mejorado para una\nmayor productividad',
          description:
            'Si estás trabajando en varias hojas de cálculo, investigando y escribiendo un ensayo, o bien, realizando codificación extrema, podrás ir de tarea en tarea con el rendimiento y la velocidad de los procesadores AMD Ryzen 7000HS, además de una gran memoria expandible. ',
          href: '/micrositios/lenovo/thinkpad',
        },
        {
          image: Product6.src,
          titleProduct: 'Producto 06',
          subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'El portátil Lenovo  IdeaPadSlim5 Gen 10 AMD de 14” ofrece capacidades de computación avanzadas gracias a su procesador AMD Ryzen, con un rendimiento impresionante para gestionar tareas complejas con facilidad. Ideal para estudiar o jugar, ya que garantiza un rendimiento sólido al tiempo que optimiza el consumo de energía',
          href: '/micrositios/lenovo/ideapad',
        },
        {
          image: Product4.src,
          titleProduct: 'Producto 07',
          subtitleProduct: '5 Gen 10 (16” AMD)\nGeForce RTX',
          descriptionTitle: 'Libera el rendimiento',
          description:
            'Portátil gamer de alto desempeño con gráficos dedicados, refrigeración optimizada y potencia sostenida para sesiones exigentes de juego y creación.',
          href: '/micrositios/lenovo/legion',
        },
        {
          image: Product5.src,
          titleProduct: 'Producto 08',
          subtitleProduct: 'E14 Gen 6\n14” AMD',
          descriptionTitle: 'Desempeño mejorado para una\nmayor productividad',
          description:
            'Si estás trabajando en varias hojas de cálculo, investigando y escribiendo un ensayo, o bien, realizando codificación extrema, podrás ir de tarea en tarea con el rendimiento y la velocidad de los procesadores AMD Ryzen 7000HS, además de una gran memoria expandible. ',
          href: '/micrositios/lenovo/thinkpad',
        },
        {
          image: Product6.src,
          titleProduct: 'Producto 09',
          subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'El portátil Lenovo  IdeaPadSlim5 Gen 10 AMD de 14” ofrece capacidades de computación avanzadas gracias a su procesador AMD Ryzen, con un rendimiento impresionante para gestionar tareas complejas con facilidad. Ideal para estudiar o jugar, ya que garantiza un rendimiento sólido al tiempo que optimiza el consumo de energía',
          href: '/micrositios/lenovo/ideapad',
        },
        {
          image: HeroSlideLegion.src,
          titleProduct: 'Producto 10',
          subtitleProduct: '5 Gen 10 (16” AMD)\nGeForce RTX',
          descriptionTitle: 'Libera el rendimiento',
          description:
            'Portátil gamer de alto desempeño con gráficos dedicados, refrigeración optimizada y potencia sostenida para sesiones exigentes de juego y creación.',
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
          image: Event1.src,
          title: 'Experiencia Lenovo Legion',
          href: '/micrositios/lenovo/legion',
        },
        {
          image: Event2.src,
          title: 'Productividad con ThinkPad',
          href: '/micrositios/lenovo/thinkpad',
        },
        {
          image: Event3.src,
          title: 'Movilidad con IdeaPad',
          href: '/micrositios/lenovo/ideapad',
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

  footer: {
    contact: {
      email: 'contacto@grupocva.com',
      phone: '33 3812 14 13',
      address: 'Av. Mariano Otero 2489',
    },
  },
} satisfies BusinessMicrositeConfig;
