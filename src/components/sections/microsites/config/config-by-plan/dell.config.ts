import Banner1 from '@/assets/microsites/dell/index/banner-1.png';
import Banner2 from '@/assets/microsites/dell/index/banner-2.png';
import Banner3 from '@/assets/microsites/dell/index/banner-3.png';
import Banner4 from '@/assets/microsites/dell/index/banner-4.png';
import BannerPopup from '@/assets/microsites/dell/index/banner-popup.png';
import BannerProduct from '@/assets/microsites/dell/index/banner-product-1.png';
import CataloguePreview from '@/assets/microsites/dell/index/catalogue-preview.png';
import LogoFooter from '@/assets/microsites/dell/index/logo-footer.png';
import LogoHeader from '@/assets/microsites/dell/index/logo-header.png';
import ProductDesktop from '@/assets/microsites/dell/index/product-desktop.png';
import ProductHeadset from '@/assets/microsites/dell/index/product-headset.png';
import ProductLaptop from '@/assets/microsites/dell/index/product-laptop.png';
import ProductMonitor from '@/assets/microsites/dell/index/product-monitor.png';
import ProductMouse from '@/assets/microsites/dell/index/product-mouse.png';
import ProductPortatil from '@/assets/microsites/dell/index/product-portatil.png';
import Service1 from '@/assets/microsites/dell/index/service-1.png';
import Service2 from '@/assets/microsites/dell/index/service-2.png';
import Service3 from '@/assets/microsites/dell/index/service-3.png';
import VideoDell from '@/assets/microsites/dell/index/video.mp4';
import BannerVideoDell from '@/assets/microsites/dell/index/banner_video.mp4';
import BannerUs from '@/assets/microsites/dell/index/banner-us.png';
import type { PremiumMicrositeConfig } from '@/components/sections/microsites/plans/premium/types';

// details
import LaptopDellEleganceColors from '@/assets/microsites/dell/details/laptop-dell/elegance-colors.png';
import LaptopDellHighPerformance from '@/assets/microsites/dell/details/laptop-dell/high-performance.png';
import LaptopDellHero from '@/assets/microsites/dell/details/laptop-dell/laptop-dell-hero.png';
import LaptopDellModels from '@/assets/microsites/dell/details/laptop-dell/models.png';
import LaptopDellPorts2 from '@/assets/microsites/dell/details/laptop-dell/ports-and-slots-2.png';
import LaptopDellPorts from '@/assets/microsites/dell/details/laptop-dell/ports-and-slots.png';
import LaptopDellTechnologyGameBottom from '@/assets/microsites/dell/details/laptop-dell/technology-game-bottom-image.png';
import LaptopDellTechnologyGame from '@/assets/microsites/dell/details/laptop-dell/technology-game.png';

export const dellConfig = {
  brand: {
    slug: 'dell',
    name: 'Dell',
    plan: 'premium',
  },

  meta: {
    title: 'Micrositio Dell - Grupo CVA',
    productsTitle: 'Productos Dell - Grupo CVA',
    description:
      'Descubre las soluciones tecnológicas de Dell a través de nuestro micrositio dedicado. Explora productos, servicios y eventos exclusivos diseñados para impulsar tu negocio con la innovación de Dell.',
    favicon: 'https://www.dell.com/favicon.ico',
  },

  branding: {
    logos: {
      header: {
        src: LogoHeader.src,
        alt: 'Logo Dell',
      },
      footer: {
        src: LogoHeader.src,
        alt: 'Logo Dell Footer',
      },
    },
    theme: {
      primaryColor: '#007EBB',
      secondaryColor: '#1F242D',
      accentColor: '#313741',
      buttonColor: '#007EBB',
      buttonHoverColor: '#0056A3',
      heroGradient: 'linear-gradient(90deg, #1F242D 0%, #313741 100%)',
      detailSubtitleColor: '#4AADEE',
      pageBackground: '#1F242D',
      textColor: '#FFFFFF',
      titleColor: '#FFFFFF',
      mutedTextColor: '#92939E',
      navbar: {
        initialTheme: 'dark',
        scrollTheme: 'dark',
        scrollBackground: '#111827',
      },
      heroControls: {
        buttonTextColor: '#FFFFFF',
        buttonBorderRadius: '30px',
        navigationColor: '#FFFFFF',
        navigationBackground: 'rgba(0, 0, 0, 0.3)',
        navigationHoverBackground: 'rgba(0, 0, 0, 0.5)',
        paginationColor: 'rgba(255, 255, 255, 0.5)',
        paginationActiveColor: '#FFFFFF',
      },
      buttons: {
        waveBorderColor: '#FFFFFF',
        waveTextColor: '#FFFFFF',
        waveHoverTextColor: '#0F172A',
        waveFillColor: '#FFFFFF',
        waveFilledBackground: '#007EBB',
        productCardCta: {
          borderColor: '#FFFFFF',
          textColor: '#FFFFFF',
          hoverTextColor: '#0F172A',
          fillColor: '#FFFFFF',
          filledBackground: '#007EBB',
        },
        glowBorderColor: '#FFFFFF',
        glowTextColor: '#FFFFFF',
        glowHoverBackground: '#657693',
        glowHoverBorderColor: '#657693',
        glowShadowColor: 'rgba(54, 54, 54, 0.815)',
      },
      surfaces: {
        cardBorderColor: 'rgba(255, 255, 255, 0.92)',
        productCardFeaturedBackground: '#20252E',
        productCardDefaultBackground: '#303640',
        productCardTextColor: '#FFFFFF',
        productCardGradient:
          'linear-gradient(to bottom, transparent 0%, #1f242d33 20%, #1f242d66 40%, #1f242d99 60%, #111111cc 80%, #010101 100%)',
        productCardHoverShadow: 'rgba(0, 126, 187, 0.35)',
        servicesPanelGradient: 'linear-gradient(to bottom, transparent 0%, #6576931A 10%, #65769399 20%)',
        serviceCardOverlay:
          'linear-gradient(to bottom, transparent 0%, rgba(31, 36, 45, 0.18) 45%, rgba(31, 36, 45, 0.7) 100%)',
        cataloguePanelGradient:
          'linear-gradient(to bottom, transparent 0%, rgba(32, 32, 32, 0.1) 10%, rgba(1, 1, 1, 0.4) 40%, rgba(31, 36, 45, 0) 50%, rgba(31, 36, 45, 0.6) 60%, rgba(31, 36, 45, 0.7) 70%)',
        eventsPanelGradient: 'linear-gradient(to right, transparent 0%, rgba(31, 36, 45, 0.9) 45%, #161C2D 100%)',
      },
      eventCards: {
        background: '#FFFFFF',
        textColor: '#161C2D',
        hoverBackground: '#007EBB',
        hoverTextColor: '#FFFFFF',
        iconBackground: '#BFDBFE',
        iconColor: '#161C2D',
      },
      footer: {
        backgroundGradient: 'linear-gradient(90deg, #1F242D 0%, #1F242D 70%, #007EBB 100%)',
        dividerGradient: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #EEEEF0 50%, rgba(239, 239, 241, 0) 100%)',
        textColor: '#FFFFFF',
        mutedTextColor: '#92939E',
        linkColor: '#FFFFFF',
        linkHoverColor: '#9CA3AF',
        socialColor: '#7D818D',
        socialHoverColor: '#FFFFFF',
      },
      popup: {
        overlay: 'rgba(0, 0, 0, 0.7)',
        closeBackground: 'rgba(0, 0, 0, 0.5)',
        closeHoverBackground: 'rgba(0, 0, 0, 0.7)',
      },
    },
  },

  navigation: {
    basePath: '/micrositios/dell',
    items: [
      {
        label: 'Nosotros',
        href: '/micrositios/dell/nosotros',
        type: 'link' as const,
      },
      {
        label: 'Catálogo',
        type: 'dropdown' as const,
        items: [
          { label: 'Laptop Dell 15 DC15255', href: '/micrositios/dell/laptop-dell' },
          { label: 'Portátil Dell 16 Plus 2 en 1', href: '/micrositios/dell/productos' },
          { label: 'Mouse inalámbrico Dell WM126', href: '/micrositios/dell/productos' },
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
        type: 'image-background',
        backgroundImage: Banner2.src,
      },
      {
        type: 'image-background',
        backgroundImage: Banner1.src,
        responsiveBackgroundImage: {
          mobile: {
            image: Banner1.src,
          },
          tablet: {
            image: Banner1.src,
          },
          desktop: {
            image: Banner1.src,
          },
        },
        title: 'Notebook Dell Dc15250 15.6 Ci7 16 Gb Ram 1tb Ssd W11 Silver',
        subtitle: 'Plateado',
        // description: 'Texto adicional opcional',
        buttonText: 'Descubre todo su potencial',
        buttonHref: '/micrositios/dell/productos',
      },
      {
        type: 'image-background',
        backgroundImage: Banner3.src,
      },
      {
        type: 'image-background',
        backgroundVideo: BannerVideoDell,
        backgroundVideoPoster: Banner4.src,
        // title: 'Soluciones Dell para entornos de alto desempeño',
        // subtitle: 'Infraestructura y movilidad para equipos que exigen continuidad.',
        // buttonText: 'Explora el portafolio Dell',
        buttonHref: '/micrositios/dell/productos',
      },
    ],

    products: {
      sectionTitle: 'Productos',
      buttonText: 'Ver más',
      allProducts: 'Ver todos los productos',
      allProductsHref: '/micrositios/dell/productos',
      items: [
        {
          image: ProductLaptop.src,
          titleProduct: 'Laptop Dell 15 DC15255',
          // subtitleProduct: '5 Gen 10 (16” AMD)\n\nGeForce RTX',
          // descriptionTitle: 'Libera el rendimento',
          description: '15.6” Full HD AMD Ryzen 5 7520U, 8 GB, 512GB SSD, Windows 11 Home, Español',
          href: '/micrositios/dell/laptop-dell',
        },
        {
          image: ProductPortatil.src,
          titleProduct: 'Portátil Dell 16 Plus 2 en 1',
          // subtitleProduct: 'E14 Gen 6\n14” AMD',
          // descriptionTitle: 'Desempeño mejorado para una\nmayor productividad',
          description:
            'Equipo convertible de 16” con diseño versátil, rendimiento fluido y conectividad lista para trabajo híbrido.',
          href: '/micrositios/dell/productos',
        },
        {
          image: ProductMouse.src,
          titleProduct: 'Mouse inalámbrico Dell WM126',
          // subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          // descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'Mouse inalámbrico confiable y compacto, ideal para estaciones de trabajo que requieren movilidad y precisión diaria.',
          href: '/micrositios/dell/productos',
        },
        {
          image: ProductDesktop.src,
          titleProduct: 'Desktop Dell Inspiron',
          // subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          // descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'Desktop pensada para productividad de oficina, colaboración continua y operación estable en jornadas exigentes.',
          href: '/micrositios/dell/productos',
        },
        {
          image: ProductMonitor.src,
          titleProduct: 'Monitor Dell 24',
          // subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          // descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'Monitor Full HD con gran nitidez y ergonomía para escritorios corporativos, salas de monitoreo o puntos de atención.',
          href: '/micrositios/dell/productos',
        },
        {
          image: ProductHeadset.src,
          titleProduct: 'Diadema Dell Pro',
          // subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          // descriptionTitle: 'Disfruta de la informática sin límites',
          description: 'Audio claro y cómodo para videollamadas, soporte remoto y jornadas de colaboración intensiva.',
          href: '/micrositios/dell/productos',
        },
        {
          image: ProductHeadset.src,
          titleProduct: 'Dock Dell USB-C',
          // subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          // descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'Expande puertos, energía y conectividad desde una sola base para estaciones de trabajo más ordenadas y eficientes.',
          href: '/micrositios/dell/productos',
        },
        {
          image: ProductMonitor.src,
          titleProduct: 'Monitor Dell UltraSharp 27',
          // subtitleProduct: 'Slim 5 Gen 10\n14” AMD',
          // descriptionTitle: 'Disfruta de la informática sin límites',
          description:
            'Pantalla de alta definición para flujos creativos, análisis visual y multitarea con mayor área útil de trabajo.',
          href: '/micrositios/dell/productos',
        },
      ],
      bannerProduct: {
        banner: BannerProduct.src,
        // image: BannerProduct.src,
        // title: 'Legion',
        // description:
        //   'Glacier White Legion 7i combina un estilo llamativo con la ingeniería de precisión. Hecho de aluminio de grado aeroespacial, es ligero, ultraduradero y más delgado que una moneda de diez centavos—perfecto para estudiantes de STEM en movimiento. Las funciones como una cámara IR de 5 MP con eShutter, los indicadores del modo de rendimiento RGB y la marca grabada con láser llevan la innovación al siguiente nivel.',
      },
    },
    services: {
      sectionTitle: 'Servicios',
      description:
        'Impulsa tu infraestructura con servidores eficientes, seguros y preparados para evolucionar contigo',
      cta: 'Conoce todos Nuestros Servicios',
      ctaLink:
        'https://api.whatsapp.com/send/?phone=523315994174&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+las+soluciones+de+CVA.+%C2%BFPodr%C3%ADan+brindarme+informaci%C3%B3n%2C+por+favor%3F&type=phone_number&app_absent=0',
      items: [
        {
          title: 'Almacenamiento',
          description:
            'Soluciones de almacenamiento escalables para resguardar, administrar y recuperar información crítica con mayor continuidad operativa.',
          image: Service1.src,
        },
        {
          title: 'Servidores',
          description:
            'Infraestructura Dell preparada para cargas empresariales, virtualización y crecimiento sostenido en centros de datos modernos.',
          image: Service2.src,
        },
        {
          title: 'Proyectos',
          description:
            'Acompañamiento para diseñar, integrar e implementar soluciones tecnológicas alineadas con las metas de tu negocio.',
          image: Service3.src,
        },
      ],
    },
    video: {
      enabled: true,
      url: VideoDell,
      title: 'Video promocional Dell',
      controls: true,
      autoplay: true,
      muted: true,
      loop: true,
    },
    catalogue: {
      sectionTitle: 'Catálogo',
      description: 'Conoce nuestro catálogo',
      image: CataloguePreview.src,
      imageAlt: 'Catálogo dell',
      cta: 'Solicitar catálogo',
      ctaLink:
        'https://api.whatsapp.com/send/?phone=523315994174&text=%C2%A1Hola%21+Quiero+solicitar+el+cat%C3%A1logo+de+soluciones+Dell+de+CVA.+%C2%BFPodr%C3%ADan+compart%C3%ADrmelo%2C+por+favor%3F&type=phone_number&app_absent=0',
    },
    events: {
      sectionTitle: 'Eventos',
      items: [
        {
          title: 'Demostración Dell G15 5525',
          href: 'https://www.grupocva.com/mkt/imagenes/2026/01/Elfuturodelatecnolog%C3%ADa.jpg',
          eventDate: '2026-05-22',
          eventType: 'Demo Day',
          location: 'Guadalajara',
        },
        {
          title: 'Soluciones Dell para empresas',
          href: '/micrositios/dell/nosotros',
          eventDate: '2026-06-05',
          eventType: 'Seminario',
        },
        {
          title: 'Explora el portafolio Dell',
          href: 'https://www.grupocva.com/mkt/imagenes/2025/05/05_dell_cancun_catamaran.php',
          eventDate: '2026-06-19',
          location: 'Cancún',
        },
      ],
    },

    productDetails: [
      {
        slug: 'laptop-dell',
        hero: {
          image: LaptopDellHero.src,
          title: 'LAPTOP DELL G15 5525',
          subtitle: 'DISEÑADA PARA DOMINAR CADA DESAFÍO',
        },
        secondBanner: {
          image: LaptopDellModels.src,
        },
        detailSections: [
          {
            id: 'high-performance',
            variant: 'split',
            subtitle: '',
            title: 'ALTO RENDIMIENTO',
            paragraphs: [
              'Con los procesadores AMD Ryzen™ de última generación y la configuración de rendimiento optimizada, puede disfrutar de un rendimiento de gama alta potente y coherente durante cada experiencia de juego.',
              'Además, el nuevo y mejorado diseño térmico inspirado en Alienware cuenta con un enfriamiento óptimo gracias a la entrada de aire doble, las aspas de ventilador ultradelgadas, las tuberías de cobre y las cuatro rejillas de ventilación ubicadas estratégicamente.',
            ],
            media: [
              {
                src: LaptopDellHighPerformance.src,
                alt: 'Alto rendimiento Dell G15 5525',
              },
            ],
          },
          {
            id: 'ports-and-slots',
            variant: 'feature-list',
            title: 'PUERTOS Y RANURAS',
            paragraphs: [
              `1. USB 3.2 de alta velocidad de 1.ª generación Tipo-A | 2. USB 3.2 de alta velocidad de 1.ª generación Tipo-A | 3. USB 3.2 Tipo-C de 1.ª generación con modo alternativo DisplayPort | 4. USB 3.2 de alta velocidad de 1.ª generación Tipo-A | 5. HDMI 2.1 | 6. Entrada de alimentación | 7. RJ45 | 8. Auriculares/Micrófono`,
            ],
            media: [
              {
                src: LaptopDellPorts.src,
                alt: 'Puertos y ranuras Dell G15 5525',
              },
              {
                src: LaptopDellPorts2.src,
                alt: 'Vista adicional de puertos Dell G15 5525',
              },
            ],
            aside: {
              title: 'DIMENSIONES Y PESO',
              paragraphs: [
                `1. Altura: 26,90 mm (1,06 in) | 2. Ancho: 357,26 mm (14,06 in) | 3. Profundidad: 272,11 mm (10,74 in) | Peso inicial: 2,52 kg (5,55 lb)`,
              ],
            },
          },
          {
            id: 'immersive-experience',
            variant: 'closing',
            title: 'INMERSIÓN ININTERRUMPIDA',
            paragraphs: [
              `Con gráficos discretos dominantes hasta NVIDIA® GeForce RTX™ 3070 Ti y el panel de pantalla FHD de 165 Hz opcional (1920 x 1080) con un bisel estrecho de 2 lados, podrá jugar de forma fluida e ininterrumpida y obtendrá imágenes vívidas, lo que hace que sea fácil sumergirse completamente en cada experiencia. Además, experimentará una emocionante acción con tiempos de carga más cortos y un sistema más silencioso gracias a la memoria dedicada GDDR6 de hasta 8 GB.`,
            ],
            supportingBlocks: [
              {
                title: 'OPCIONES DE COLOR ELEGANTES',
                paragraphs: [
                  `El diseño altamente móvil inspirado en los juegos cuenta con un nuevo acabado sólido que es fácil de cuidar y está disponible en tres colores para adaptarse a su estilo: gris oscuro oculto, gris fantasma con manchas o verde espectro con camuflaje.`,
                ],
                media: [
                  {
                    src: LaptopDellEleganceColors.src,
                    alt: 'Opciones de color elegantes Dell G15 5525',
                  },
                ],
              },
              {
                title: 'TECNOLOGÍA GAME SHIFT',
                paragraphs: [
                  'Acelere su potencia con solo presionar un botón. La función Game Shift se activa presionando FN + la tecla de Game Shift (F9) y activa un modo de rendimiento dinámico dentro de Alienware Command Center al maximizar la velocidad de los ventiladores para mantener el sistema refrigerado mientras los procesadores trabajan más duro.',
                  'Características adicionales, como parlantes dobles con audio 3D Nahimic para jugadores y un teclado iluminado RGB opcional de 4 zonas con WASD, están diseñadas para elevar cada experiencia de juego.',
                ],
                bottomMedia: [
                  {
                    src: LaptopDellTechnologyGameBottom.src,
                    alt: 'Tecnología Game Shift Dell G15 5525',
                  },
                ],
                media: [
                  {
                    src: LaptopDellTechnologyGame.src,
                    alt: 'Tecnología Game Shift Dell G15 5525',
                  },
                ],
              },
            ],
          },
        ],

        features: [
          {
            title: 'Diagonal de la pantalla',
            description: '39.6 cm (15.6”)',
          },
          {
            title: 'Familia del procesador',
            description: 'AMD Ryzen™ 5',
          },
          {
            title: 'Núcleos del procesador',
            description: '6',
          },
          {
            title: 'Número de puertos HDMI',
            description: '1',
          },
          {
            title: 'Memoria Interna',
            description: '16 GB',
          },
          {
            title: 'Idioma del Teclado',
            description: 'Español',
          },
          {
            title: 'Sistema Operativo instalado',
            description: 'Windows 11 Home',
          },
          {
            title: 'Capacidad total de almacenaje',
            description: '512 GB',
          },
          {
            title: 'Unidad de Almacenamiento',
            description: 'SSD',
          },
          {
            title: 'Tipo de unidad óptica',
            description: 'No',
          },
          {
            title: 'Color del producto',
            description: 'Gris',
          },
        ],
      },
    ],
  },

  aboutPage: {
    metaTitle: 'Nosotros Dell - Grupo CVA',
    title: 'NOSOTROS',
    description:
      'Dell Technologies fue fundada en 1984 por Michael Dell en Austin, Texas, con la idea innovadora de vender computadoras directamente a los clientes, eliminando intermediarios y ofreciendo equipos personalizados según las necesidades de cada usuario. Con el tiempo, la empresa creció hasta convertirse en uno de los fabricantes de tecnología más importantes del mundo, ampliando su portafolio a laptops, servidores, almacenamiento, soluciones en la nube e infraestructura empresarial. Hoy, Dell Technologies es reconocida por impulsar la transformación digital de empresas y usuarios a través de soluciones tecnológicas confiables e innovadoras.',
    image: BannerUs.src,
    imageAlt: 'Dell Technologies impulsando la innovación',
    imageHeadline: 'Impulsando la\ninnovación.',
    gridTitle: 'Innovamos contigo,\nimpulsando soluciones\nque transforman ideas\nen resultados.',
    gridDescription:
      'Creemos en la innovación como motor de transformación y en las alianzas estratégicas como base del éxito. Nuestro objetivo es ofrecer soluciones integrales que conecten personas, procesos y resultados.',
  },

  footer: {
    logo: LogoFooter.src,
    alt: 'Logo Dell',
    description:
      'Explora soluciones Dell enfocadas en productividad, infraestructura y continuidad operativa para impulsar proyectos empresariales con respaldo CVA.',

    socialNetworks: [
      {
        alt: 'Facebook',
        href: 'https://www.facebook.com/DellMexico',
        class: 'fa-brands fa-facebook-f',
      },
      {
        alt: 'Instagram',
        href: 'https://www.instagram.com/dellmexico/',
        class: 'fa-brands fa-instagram',
      },
      {
        alt: 'LinkedIn',
        href: 'https://www.linkedin.com/company/dell-mexico/',
        class: 'fa-brands fa-linkedin-in',
      },
    ],
    links: [
      { label: 'Nosotros', href: '/micrositios/dell/nosotros' },
      {
        label: 'Contáctanos',
        href: 'https://api.whatsapp.com/send/?phone=523315994174&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+las+soluciones+de+CVA.+%C2%BFPodr%C3%ADan+brindarme+informaci%C3%B3n%2C+por+favor%3F&type=phone_number&app_absent=0',
      },
      { label: 'Productos', href: '/micrositios/dell/productos' },
      { label: 'Servicios', href: '/micrositios/dell' },
    ],
    contact: {
      email: 'contacto@grupocva.com',
      phone: '33 3812 14 13',
      address: 'Av. Mariano Otero 2489',
    },
  },

  popupModal: {
    enabled: true,
    image: BannerPopup.src,
    alt: 'Promoción Dell',
    href: '/micrositios/dell/productos',
  },
} satisfies PremiumMicrositeConfig;
