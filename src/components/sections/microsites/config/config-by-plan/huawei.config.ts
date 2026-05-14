import type { ProfessionalMicrositeConfig } from '@/components/sections/microsites/plans/professional/types/professional';
// Logos
import LogoHeader from '@/assets/microsites/huawei/logo_huawei.png';
import LogoFooter from '@/assets/microsites/huawei/logo_huawei_footer.png';

// Banners
import Banner1 from '@/assets/microsites/huawei/banner_huawei_1.png';
import Banner2 from '@/assets/microsites/huawei/banner_huawei_2.png';
import Banner3 from '@/assets/microsites/huawei/banner_huawei_3.png';

// Productos
import Product1 from '@/assets/microsites/huawei/producto_01.webp';
import Product2 from '@/assets/microsites/huawei/producto_02.webp';
import Product3 from '@/assets/microsites/huawei/producto_03.webp';
import Product4 from '@/assets/microsites/huawei/producto_04.webp';
import Product5 from '@/assets/microsites/huawei/producto_05.webp';
import Product6 from '@/assets/microsites/huawei/producto_06.webp';

// Productos
import Service1 from '@/assets/microsites/huawei/servicio_01.webp';
import Service2 from '@/assets/microsites/huawei/servicio_02.webp';
import Service3 from '@/assets/microsites/huawei/servicio_03.webp';
import Service4 from '@/assets/microsites/huawei/servicio_04.webp';

//Ideahub
import IdeaHubBanner from '@/assets/microsites/huawei/details/ideahub/banner.webp';
import IdeaHubProduct from '@/assets/microsites/huawei/details/ideahub/producto_ideahub.webp';
import IdeaHubIcon1 from '@/assets/microsites/huawei/details/ideahub/icono_1.webp';
import IdeaHubIcon2 from '@/assets/microsites/huawei/details/ideahub/icono_2.webp';
import IdeaHubIcon3 from '@/assets/microsites/huawei/details/ideahub/icono_3.webp';
import IdeaHubIcon4 from '@/assets/microsites/huawei/details/ideahub/icono_4.webp';

//Mate X7
import Mate_x7Banner from '@/assets/microsites/huawei/details/mate_x7/banner.webp';
import Mate_x7Info from '@/assets/microsites/huawei/details/mate_x7/info.webp';
import Mate_x7Icon1 from '@/assets/microsites/huawei/details/mate_x7/icono_1.webp';
import Mate_x7Icon2 from '@/assets/microsites/huawei/details/mate_x7/icono_2.webp';
import Mate_x7Icon3 from '@/assets/microsites/huawei/details/mate_x7/icono_3.webp';
import { withBasePathConfig } from '@/components/sections/microsites/config/path-utils';
// CONFIGURACIÓN DEL MICROSITIO HUAWEI

export const huaweiConfig = withBasePathConfig({
  // IDENTIFICACIÓN DE MARCA
  brand: {
    slug: 'huawei',
    name: 'Huawei',
    plan: 'professional',
  },

  // METADATOS SEO
  meta: {
    title: 'Micrositio Huawei - Grupo CVA',
    description:
      'Descubre las soluciones tecnológicas de Huawei a través de nuestro micrositio dedicado. Explora productos, servicios y eventos exclusivos diseñados para impulsar tu negocio con la innovación de Huawei.',
    favicon: 'https://consumer.huawei.com//dam/content/dam/huawei-cbg-site/common/huawei-logo.png',
  },

  // BRANDING
  branding: {
    logos: {
      header: {
        src: LogoHeader.src,
        alt: 'Logo Huawei',
      },
      footer: {
        src: LogoFooter.src,
        alt: 'Logo Huawei Footer',
      },
    },
    theme: {
      primaryColor: '#CF0A2C',
      secondaryColor: '#000000',
      detailAccentColor: '#929DAC',
      typography: {
        headingFontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
        bodyFontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
        ctaFontFamily: 'var(--font-plus-jakarta, "Plus Jakarta Sans", sans-serif)',
      },
      surfaces: {
        heroSlideBackgroundColor: '#FFFFFF',
        servicesSectionBackgroundColor: '#F5F5F5',
        servicesCard: {
          backgroundColor: '#FFFFFF',
          borderColor: '#D9D9D9',
          textColor: '#24272A',
        },
        eventsSectionBackgroundColor: '#E1E4E8',
        eventCardBaseColor: '#000000',
        eventCardOverlayColor: 'rgba(0, 0, 0, 0)',
        eventCardOverlayHoverColor: 'rgba(0, 0, 0, 0.4)',
        eventCardTitleTextColor: '#FFFFFF',
        emptyStateTextColor: '#6B7280',
        footerBackgroundColor: '#1F242D',
        // eventModal: {
        //   backdropColor: 'rgba(0, 0, 0, 0.8)',
        //   imageBackgroundColor: '#000000',
        //   titleBackgroundColor: 'rgba(0, 0, 0, 0.7)',
        //   titleTextColor: '#FFFFFF',
        //   closeButtonBackgroundColor: 'rgba(0, 0, 0, 0.6)',
        //   closeButtonHoverBackgroundColor: 'rgba(0, 0, 0, 0.8)',
        //   closeButtonTextColor: '#FFFFFF',
        // },
      },
      buttons: {
        heroCarouselControl: {
          backgroundColor: '#CBD5E1',
          textColor: '#FFFFFF',
          hoverBackgroundColor: '#64748B',
        },
        catalogSwitch: {
          activeBackgroundColor: '#CE0E2D',
          activeTextColor: '#FFFFFF',
          inactiveBackgroundColor: 'transparent',
          inactiveBorderColor: '#24272A',
          inactiveTextColor: '#24272A',
          focusOutlineColor: '#24272A',
        },
        serviceCardCta: {
          backgroundColor: '#24272A',
          textColor: '#FFFFFF',
          hoverBackgroundColor: '#4a5056',
        },
      },
    },
  },

  // NAVEGACIÓN
  navigation: {
    basePath: '/micrositios/huawei',
    items: [
      { label: 'Productos', href: '/micrositios/huawei#products', type: 'scroll' },
      { label: 'Servicios', href: '/micrositios/huawei?catalogo=servicios#products', type: 'scroll' },
    ],
  },

  contact: {
    whatsapp:
      'https://api.whatsapp.com/send/?phone=523315994174&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+las+soluciones+de+CVA.+%C2%BFPodr%C3%ADan+brindarme+informaci%C3%B3n%2C+por+favor%3F&type=phone_number&app_absent=0',
  },

  sections: {
    // HERO / CAROUSEL
    hero: {
      banners: [
        // { image: Banner1.src, alt: 'Banner Huawei 1' },
        {
          image: Banner1.src,
          alt: 'Banner principal Huawei',
          responsiveImage: {
            mobile: {
              image: Banner1.src,
            },
            tablet: {
              image: Banner1.src,
            },
            desktop: {
              image: Banner1.src,
              alt: 'Banne principal Huawei desktop',
            },
          },
        },
        { image: Banner2.src, alt: 'Banner Huawei 2' },
        { image: Banner3.src, alt: 'Banner Huawei 3' },
      ],
    },

    // PRODUCTOS
    products: {
      title: 'PRODUCTOS CVA | HUAWEI',
      subtitle: 'ACCESIBLE Y PERSONALIZADO',
      items: [
        {
          image: Product1.src,
          title: 'PRODUCTO 01',
          description: {
            paragraphs: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            ],
            spacing: 'sm',
          },
          href: '/micrositios/huawei/mate-x7',
        },
        {
          image: Product2.src,
          title: 'PRODUCTO 02',
          description: {
            paragraphs: [
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
              'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            ],
            spacing: 'none',
          },
          href: '#products',
        },
        {
          image: Product3.src,
          title: 'PRODUCTO 03',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          image: Product4.src,
          title: 'PRODUCTO 04',
          description:
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
        },
        {
          image: Product5.src,
          title: 'PRODUCTO 05',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
          image: Product6.src,
          title: 'PRODUCTO 06',
          description:
            'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
        },
      ],
    },

    services: {
      title: 'SERVICIOS CVA | HUAWEI',
      subtitle: 'CONOCE TODOS NUESTROS SERVICIOS',
      items: [
        {
          image: Service1.src,
          title: 'IDEAHUB',
          description:
            'Huawei IdeaHub es una herramienta integral de productividad diseñada para impulsar la oficina inteligente. Integra funciones de escritura inteligente, videoconferencias en alta definición (HD) y uso compartido inalámbrico, facilitando la colaboración eficiente entre equipos. Reconocido con el Premio Red Dot 2020, IdeaHub se adapta fácilmente a cualquier entorno de trabajo, transformando salas de conferencias, oficinas ejecutivas y espacios abiertos en entornos inteligentes, colaborativos y altamente productivos.',
          href: '/micrositios/huawei/ideahub',
        },
        {
          image: Service2.src,
          title: 'STORAGE',
          description: {
            paragraphs: [
              'El portafolio integral de almacenamiento de Huawei ofrece las herramientas adecuadas para cada necesidad.',
              'Desde bases de datos y virtualización hasta big data, entornos móviles y soluciones en la nube, Huawei proporciona tecnologías de almacenamiento diseñadas para cubrir todos los escenarios y demandas del negocio moderno.',
            ],
            spacing: 'sm',
          },
        },
        {
          image: Service3.src,
          title: 'WI-FI 6',
          description:
            'La tecnología Wi-Fi 6 de Huawei se ha posicionado como líder a nivel global (excepto en Estados Unidos), de acuerdo con el informe de participación de mercado de puntos de acceso Wi-Fi 6 para interiores, correspondiente al periodo del tercer trimestre de 2018 al tercer trimestre de 2019, elaborado por Dell’Oro Group, firma independiente líder en análisis e investigación de mercado.',
        },
        {
          image: Service4.src,
          title: 'UPS SMARTLL',
          description:
            'Seguimiento postventa y acompañamiento comercial para reforzar renovaciones, crecimiento por etapas y nuevas oportunidades sobre la base instalada.',
        },
      ],
    },

    // EVENTOS
    events: {
      title: 'PRÓXIMOS EVENTOS',
      subtitle: 'AGENDA Y ACTIVIDADES PRÓXIMAS',
      items: [
        {
          image:
            'https://imgproxy.domestika.org/unsafe/w:820/plain/src://content-items/000/625/442/IMG_6996-original.JPG?1404809844',
          flyer: 'https://www.grupocva.com/mkt/imagenes/2026/02/02_huawei_webinar17.jpg',
          title: 'Evento Huawei 1',
          href: 'https://www.huawei.com/es/',
          eventDate: '2026-06-05',
          eventType: 'Webinar',
          location: 'En línea',
        },
        {
          image: 'https://www.grupocva.com/mkt/imagenes/2026/02/02_huawei_webinar18.jpg',
          title: 'Evento Huawei 2',
          href: 'https://www.huawei.com/es/',
          eventDate: '2026-06-12',
          eventType: 'Capacitación',
        },
        {
          image: 'https://www.grupocva.com/mkt/imagenes/2026/02/02_huawei_webinar24.jpg',
          title: 'Evento Huawei 3',
          href: 'https://www.huawei.com/es/',
          eventDate: '2026-06-19',
          location: 'Guadalajara',
        },
        {
          image: 'https://www.grupocva.com/mkt/imagenes/2026/03/03_huawei_capacitacion13.jpg',
          title: 'Evento Huawei 4',
          href: 'https://www.huawei.com/es/',
          eventDate: '2026-06-26',
          eventType: 'Workshop',
          location: 'Monterrey',
        },
      ],
    },
  },

  productDetails: [
    {
      slug: 'mate-x7',
      banner: Mate_x7Banner.src,
      bannerAlt: 'Banner de Mate X7 Huawei',
      title: 'HUAWEI Mate X7',
      subtitle: 'HUAWEI Mate X7, 16+512G, Negro, Ultra delgado y durable',
      intro:
        'El HUAWEI Mate X7 es un smartphone plegable de gama alta lanzado en 2026, destacando por su diseño ultra delgado (9.5 mm plegado), durabilidad con certificación IP59/IP58, y un potente sistema de cámaras.\nCuenta con pantallas OLED LTPO de 120 Hz (6.49" externa/8" interna), procesador Kirin 9030 Pro, 16GB RAM, batería de 5600 mAh con carga rápida de 66W y funciona con HarmonyOS 6.',
      productTitleHtml:
        '<strong>El Huawei Mate X7</strong> está diseñado con una innovadora estructura compuesta de tres capas ultra resistente.',
      productDescription: [
        'La pantalla principal es delgada, resistente y verdaderamente fiable, con un 100 % más de resistencia a la flexión y un 20 % más de resistencia a los impactos*. La bisagra de precisión avanzada, reforzada con acero de ultra alta resistencia, garantiza una fiabilidad duradera. Además, el mayor espacio de la pantalla permite una mayor protección de la pantalla principal flexible. El marco central de aluminio de grado aeronáutico está diseñado para resistir caídas e impactos.',
      ],
      specs: [
        {
          icon: Mate_x7Icon1.src,
          title: 'Arquitectura plegable ultra confiable',
          description: '<ul class="list-disc text-left pl-4 pt-4"><li>Duradera por dentro y por fuera</li></ul>',
        },
        {
          icon: Mate_x7Icon2.src,
          title: 'Batería de larga duración y SuperCharge',
          description: '<ul class="list-disc text-left pl-4 pt-4"><li>Energía que dura</li></ul>',
        },
        {
          icon: Mate_x7Icon3.src,
          title: 'Experiencia Inmersiva',
          description: '<ul class="list-disc text-left pl-4 pt-4"><li>Inmersión a gran escala</li></ul>',
        },

        // {
        //   icon: IdeaHubIcon5.src,
        //   title: 'El centro de atención',
        //   description:
        //     'Con un rastreo rápido y preciso, el orador es siempre el centro de atención. Marco automático ajusta automáticamente el ángulo de la cámara en función de la sala de conferencias y el número de participantes. Disfrute de una vista panorámica óptima, en cualquier momento y lugar.',
        // },
        // {
        //   icon: IdeaHubIcon6.src,
        //   title: 'Conectado en cualquier lugar',
        //   description:
        //     'Con un solo toque, envíe contenido a la pizarra, las nuevas ideas vuelan desde el hub a sitios remotos. La colaboración en tiempo real se convierte en parte del mundo real.',
        // },
      ],
      product: {
        image: Mate_x7Info.src,
        title: 'HUAWEI Mate X7',
        description:
          'IdeaHub de Huawei es una herramienta de productividad para la oficina inteligente que integra escritura inteligente, videoconferencias de alta definición (HD) y uso compartido inalámbrico. Ganador del Premio Red Dot 2020, está diseñado para adaptarse a cualquier entorno y convertir sin esfuerzo salas de conferencias, oficinas ejecutivas y áreas abiertas en espacios inteligentes.',
        belowImageDescription: 'Razones para elegir el nuevo HUAWEI Mate X7',
      },
    },
    {
      slug: 'ideahub',
      banner: IdeaHubBanner.src,
      bannerAlt: 'Banner de IdeaHub Huawei',
      title: 'IDEAHUB',
      subtitle: 'EL NUEVO ESTÁNDAR DE LA OFICINA INTELIGENTE',
      intro:
        'IdeaHub de Huawei es una herramienta de productividad para la oficina inteligente que integra escritura inteligente, videoconferencias de alta definición (HD) y uso compartido inalámbrico. Ganador del Premio Red Dot 2020, está diseñado para adaptarse a cualquier entorno y convertir sin esfuerzo salas de conferencias, oficinas ejecutivas y áreas abiertas en espacios inteligentes.',
      productTitleHtml: '<strong>La elegancia</strong> de la <strong>simplicidad</strong>',
      productDescription: [
        'Un diseño elegante, contemporáneo y centrado en el usuario. Con un aire fino y minimalista.',
        '<strong>IdeaHub</strong> se integra sin esfuerzo en cualquier espacio.',
      ],
      specs: [
        {
          icon: IdeaHubIcon1.src,
          title: 'No más cables',
          description:
            '<p class="text-center">Las tecnologías combinadas 4K y H.265 ofrecen una experiencia nítida, clara y fluida. Solo tienes que tocar para compartir lo que hay en tu portátil o teléfono. La función de cambio de página en tiempo real y la anotación en pantalla hacen que la colaboración sea verdaderamente flexible y sencilla.</p>',
        },
        {
          icon: IdeaHubIcon2.src,
          title: 'Tan sencillo como lápiz y papel',
          description:
            '<p class="text-center">Con una latencia de escritura ultra baja de 35 ms, disfrute de una experiencia sin interrupciones con una altísima capacidad de respuesta. Su reconocimiento de escritura inteligente e innovador identifica automáticamente palabras, figuras y diagrama de flujo.</p>',
        },
        {
          icon: IdeaHubIcon3.src,
          title: 'Reunión en un toque',
          description:
            '<p class="text-center">El diseño de sistema en chip (SoC) doble combina el cómputo de gráficos independiente, el cómputo alimentado con inteligencia artificial y el motor de códec de audio y video. ¿El resultado final? Videoconferencias de calidad asistidas por operaciones de reunión simplificadas.</p>',
        },
        {
          icon: IdeaHubIcon4.src,
          title: 'Máxima nitidez',
          description:
            '<p class="text-center">Una matriz de 12 micrófonos usa tecnología de conformación de haces para captar voces humanas en un radio de 8 m. Una frecuencia más amplia para transferencias garantiza un audio clarísimo y de alta fidelidad hasta en los sitios más remotos.</p>',
        },
      ],
      product: {
        image: IdeaHubProduct.src,
        title: 'IDEAHUB',
        // description:
        //   'IdeaHub de Huawei es una herramienta de productividad para la oficina inteligente que integra escritura inteligente, videoconferencias de alta definición (HD) y uso compartido inalámbrico. Ganador del Premio Red Dot 2020, está diseñado para adaptarse a cualquier entorno y convertir sin esfuerzo salas de conferencias, oficinas ejecutivas y áreas abiertas en espacios inteligentes.',
      },
    },
  ],
} satisfies ProfessionalMicrositeConfig);
