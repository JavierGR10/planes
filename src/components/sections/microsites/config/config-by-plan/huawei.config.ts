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

import IdeaHubBanner from '@/assets/microsites/huawei/banner_ideahub.png';
import IdeaHubProduct from '@/assets/microsites/huawei/detalles_ideahub.png';
import IdeaHubIcon1 from '@/assets/microsites/huawei/ideahub_icono_1.png';
import IdeaHubIcon2 from '@/assets/microsites/huawei/ideahub_icono_2.png';
import IdeaHubIcon3 from '@/assets/microsites/huawei/ideahub_icono_3.png';
import IdeaHubIcon4 from '@/assets/microsites/huawei/ideahub_icono_4.png';
import IdeaHubIcon5 from '@/assets/microsites/huawei/ideahub_icono_5.png';
import IdeaHubIcon6 from '@/assets/microsites/huawei/ideahub_icono_6.png';

// CONFIGURACIÓN DEL MICROSITIO HUAWEI

export const huaweiConfig: ProfessionalMicrositeConfig = {
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
        eventModal: {
          backdropColor: 'rgba(0, 0, 0, 0.8)',
          imageBackgroundColor: '#000000',
          titleBackgroundColor: 'rgba(0, 0, 0, 0.7)',
          titleTextColor: '#FFFFFF',
          closeButtonBackgroundColor: 'rgba(0, 0, 0, 0.6)',
          closeButtonHoverBackgroundColor: 'rgba(0, 0, 0, 0.8)',
          closeButtonTextColor: '#FFFFFF',
        },
      },
      buttons: {
        heroCarouselControl: {
          backgroundColor: '#CBD5E1',
          textColor: '#FFFFFF',
          hoverBackgroundColor: '#64748B',
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
      // {
      //   label: 'Huawei-CVA',
      //   type: 'dropdown',
      //   items: [
      //     { label: 'IdeaHub', href: '#hero' },
      //     { label: 'Storage', href: '#products' },
      //     { label: 'Wi-Fi 6', href: '#products' },
      //     { label: 'UPS SmartLi', href: '#events' },
      //     { label: 'GPON', href: '#events' },
      //   ],
      // },
      // { label: 'Contacto', href: '#contact', type: 'scroll' },
      { label: 'Productos', href: '#products', type: 'scroll' },
      { label: 'Servicios', href: '/micrositios/huawei/servicios', type: 'link' },
    ],
  },

  sections: {
    // HERO / CAROUSEL
    hero: {
      banners: [
        { image: Banner1.src, alt: 'Banner Huawei 1' },
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
          href: '/micrositios/huawei/producto-01',
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
          title: 'SERVICIO 01',
          description: {
            paragraphs: [
              'Acompañamiento comercial y consultivo para identificar la solución Huawei más adecuada según el entorno, objetivos y capacidad operativa del cliente.',
            ],
            spacing: 'sm',
          },
        },
        {
          image: Service2.src,
          title: 'SERVICIO 02',
          description: {
            paragraphs: [
              'Soporte para levantamiento de requerimientos, integración inicial y orientación técnica en el despliegue de soluciones enfocadas en colaboración y conectividad.',
            ],
            spacing: 'sm',
          },
        },
        {
          image: Service3.src,
          title: 'SERVICIO 03',
          description: {
            paragraphs: [
              'Asesoría en continuidad operativa, escalabilidad y adopción, para que cada implementación mantenga valor práctico y una curva de uso clara para el cliente final.',
            ],
            spacing: 'sm',
          },
        },
        {
          image: Service4.src,
          title: 'SERVICIO 04',
          description: {
            paragraphs: [
              'Seguimiento postventa y acompañamiento comercial para reforzar renovaciones, crecimiento por etapas y nuevas oportunidades sobre la base instalada.',
            ],
            spacing: 'sm',
          },
        },
      ],
    },

    // EVENTOS
    events: {
      title: 'PRÓXIMOS EVENTOS',
      subtitle: 'AGENDA Y ACTIVIDADES PRÓXIMAS',
      items: [
        {
          image: 'https://img.pikbest.com/origin/06/01/31/16HpIkbEsTxkJ.jpg!w700wp',
          title: 'Evento Huawei 1',
          href: 'https://e.huawei.com/en/products/business-needs/smart-collaboration/ideahub',
        },
        {
          image: 'https://piktochart.com/wp-content/uploads/2018/05/Brushstroke-Event-Flyer-7345706.png',
          title: 'Evento Huawei 2',
          href: 'https://e.huawei.com/en/products/business-needs/smart-collaboration/ideahub',
        },
        {
          image:
            'https://market-resized.envatousercontent.com/previews/files/425518613/Image+Preview.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=ba5a667e0a7e8bccefff5c8f9c63478f21c3057a325a65886c95e34f96a07ce3',
          title: 'Evento Huawei 3',
          href: 'https://e.huawei.com/en/products/business-needs/smart-collaboration/ideahub',
        },
        {
          image: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/cce90b70-55d5-492c-9e8d-0264f5b62734.png',
          title: 'Evento Huawei 4',
          href: 'https://e.huawei.com/en/products/business-needs/smart-collaboration/ideahub',
        },
      ],
    },
  },

  productDetails: [
    {
      slug: 'producto-01',
      banner: IdeaHubBanner.src,
      bannerAlt: 'Banner de IdeaHub Huawei',
      title: 'PRODUCTO 01',
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
            'Las tecnologías combinadas 4K y H.265 ofrecen una experiencia nítida, clara y fluida. Solo tienes que tocar para compartir lo que hay en tu portátil o teléfono. La función de cambio de página en tiempo real y la anotación en pantalla hacen que la colaboración sea verdaderamente flexible y sencilla.',
        },
        {
          icon: IdeaHubIcon2.src,
          title: 'Tan sencillo como lápiz y papel',
          description:
            'Con una latencia de escritura ultra baja de 35 ms, disfrute de una experiencia sin interrupciones con una altísima capacidad de respuesta. Su reconocimiento de escritura inteligente e innovador identifica automáticamente palabras, figuras y diagrama de flujo.',
        },
        {
          icon: IdeaHubIcon3.src,
          title: 'Reunión en un toque',
          description:
            'El diseño de sistema en chip (SoC) doble combina el cómputo de gráficos independiente, el cómputo alimentado con inteligencia artificial y el motor de códec de audio y video. ¿El resultado final? Videoconferencias de calidad asistidas por operaciones de reunión simplificadas.',
        },
        {
          icon: IdeaHubIcon4.src,
          title: 'Máxima nitidez',
          description:
            'Una matriz de 12 micrófonos usa tecnología de conformación de haces para captar voces humanas en un radio de 8 m. Una frecuencia más amplia para transferencias garantiza un audio clarísimo y de alta fidelidad hasta en los sitios más remotos.',
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
        image: IdeaHubProduct.src,
        title: 'IDEAHUB',
        description:
          'IdeaHub de Huawei es una herramienta de productividad para la oficina inteligente que integra escritura inteligente, videoconferencias de alta definición (HD) y uso compartido inalámbrico. Ganador del Premio Red Dot 2020, está diseñado para adaptarse a cualquier entorno y convertir sin esfuerzo salas de conferencias, oficinas ejecutivas y áreas abiertas en espacios inteligentes.',
      },
    },
  ],
};
