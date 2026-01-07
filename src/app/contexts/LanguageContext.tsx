import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    header: {
      services: 'Servicios',
      why: 'Beneficios',
      about: 'Nosotros',
      portfolio: 'Casos',
      pricing: 'Inversión',
      faq: 'Dudas',
      contact: 'Empezar',
      blog: 'Blog',
    },
    hero: {
      title: 'Tu marca merece liderar su mercado. Ahora.',
      subtitle: 'Diseño estratégico y webs de ultra-velocidad para negocios que no pueden darse el lujo de ser lentos ni genéricos.',
      cta: 'Cotizar proyecto hoy',
      scroll: 'Ver por qué funcionamos',
    },
    intro: {
      text1: 'Tu web debería ser tu mejor vendedor. Si no vende, es un gasto. Creo activos digitales de alto rendimiento que fusionan estética premium con ingeniería de conversión.',
      text2: 'Uso IA y "Vibe Coding" para eliminar la burocracia de las agencias. Resultados de clase mundial en semanas, no meses.',
    },
    services: {
      title: 'Resultados que hablan',
      web: {
        title: '01 Website de Alto Rendimiento',
        subtitle: 'Webs optimizadas para cargar rápido, verse bien y funcionar en cualquier dispositivo.',
        items: [
          'Diseño UX/UI en Figma',
          'Código a medida (0% Builders)',
          'Carga instantánea (95+ Score)',
          'SEO Técnico nativo',
          'Animaciones que retienen',
        ],
      },
      branding: {
        title: '02 Branding + Web Integrados',
        subtitle: 'Diseño visual y experiencia digital pensados como un todo, no como piezas sueltas.',
        items: [
          'Estrategia de posicionamiento',
          'Identidad visual inconfundible',
          'Dirección de arte premium',
          'Manual de marca accionable',
          'Kit de redes sociales',
        ],
      },
      aiPhotography: {
        title: '03 Identidad Visual con IA',
        subtitle: 'Fotografía y recursos visuales generados con IA, alineados a una marca con criterio y estilo propio.',
        items: [
          'Calidad fotorrealista 4K',
          'Escenarios infinitos',
          'Cero costos de logística',
          'Consistencia visual total',
          'Entrega express (48hs)',
        ],
      },
      cta: 'Ver cómo escalar tu negocio',
    },
    why: {
      title: 'Por qué elegirnos',
      speed: {
        title: 'Velocidad es Dinero',
        desc: 'Cada segundo de demora te cuesta clientes. Mis webs vuelan para retener y convertir.',
      },
      modern: {
        title: 'Estética Dominante',
        desc: 'Diseño que intimida a tu competencia y enamora a tu cliente. "Vibe Coding" real.',
      },
      strategic: {
        title: 'Socio de Negocio',
        desc: 'No soy un ejecutor de tareas. Soy el estratega que cuida tu inversión digital.',
      },
      figmaSource: {
        title: 'Sin Sorpresas',
        desc: 'Previsualizás cada pixel antes de programar. Garantía total de satisfacción visual.',
      },
      speedControl: {
        title: 'Agilidad Controlada',
        desc: 'La potencia de la IA con la dirección creativa de un experto humano.',
      },
      buildsWell: {
        title: 'Escalabilidad Pura',
        desc: 'Sistemas robustos listos para crecer con tu facturación. Sin deuda técnica.',
      },
      clearProcess: {
        title: 'Trato Directo',
        desc: 'Sin intermediarios. Hablás con quien construye tu futuro digital.',
      },
    },
    stats: {
      title: 'Impacto Medible',
      projects: 'Proyectos Exitosos',
      clients: 'Marcas Potenciadas',
      delivery: 'Cumplimiento de Plazos',
      retention: 'Clientes que Vuelven',
    },
    about: {
      title: 'Tu partner tecnológico.',
      intro: 'Soy Matías. Transformo visiones complejas en productos digitales rentables y estéticos.',
      belief: 'Manifiesto:',
      points: [
        'Lento es costoso. La velocidad es la nueva divisa.',
        'El diseño sin estrategia es arte. Yo hago negocios.',
        'Tu éxito es mi mejor caso de estudio.',
      ],
      description: 'Fusiono la ingeniería de software con el diseño de producto. No entrego código, entrego soluciones comerciales llave en mano.',
      experience: '+50 proyectos entregados. Experiencia global. Enfoque en relaciones a largo plazo y crecimiento mutuo.',
      cta: 'Ver método de trabajo',
      howTitle: 'El Proceso',
      steps: [
        'Auditoría y Estrategia',
        'Diseño y Prototipado',
        'Revisión y Ajuste',
        'Desarrollo High-Perf',
        'Lanzamiento y Escala',
      ],
    },
    performance: {
      title: 'Resultados que Hablan',
      projects: [
        {
          title: '01 Website de Alto Rendimiento',
          desc: 'Webs optimizadas para cargar rápido, verse bien y funcionar en cualquier dispositivo.',
        },
        {
          title: '02 Branding + Web Integrados',
          desc: 'Diseño visual y experiencia digital pensados como un todo, no como piezas sueltas.',
        },
        {
          title: '03 Identidad Visual con IA',
          desc: 'Fotografía y recursos visuales generados con IA, alineados a una marca con criterio y estilo propio.',
        },
      ],
    },
    pricing: {
      title: 'Inversión Inteligente',
      subtitle: 'Retorno claro. Sin letra chica.',
      branding: {
        title: 'Brand Identity',
        price: 'Desde $800',
        features: [
          'Estrategia de Marca',
          'Sistema Visual Scalable',
          'Guidelines Digitales',
          'Kit Social Media',
          'Archivos Fuente',
        ],
        cta: 'Reservar Lugar',
      },
      web: {
        title: 'Web Experience',
        price: 'Desde $1,500',
        popular: 'Best Seller',
        features: [
          'Diseño UI/UX Custom',
          'Desarrollo 100% a medida',
          'SEO Técnico Avanzado',
          'Core Web Vitals verdes',
          'Soporte Prioritario',
        ],
        cta: 'Reservar Lugar',
      },
      full: {
        title: 'Full Partner',
        price: 'Desde $2,000',
        features: [
          'Solución 360°',
          'Branding + Web Integrados',
          'Estrategia Unificada',
          'Optimización Máxima',
          'Acceso Directo VIP',
        ],
        cta: 'Aplicar Ahora',
      },
      note: '* Cupos limitados por mes para garantizar calidad.',
    },
    faq: {
      title: 'Dudas Frecuentes',
      items: [
        {
          q: '¿Diseño o Código?',
          a: 'Ambos. Soy un perfil híbrido (Desarrollador + Diseñador). Garantizo que el código refleje el diseño pixel-perfect.',
        },
        {
          q: '¿Tiempos de entrega?',
          a: 'Branding: 2-3 semanas. Web: 3-5 semanas. Trabajo con sprints intensivos para lanzar rápido.',
        },
        {
          q: '¿Usás plantillas de Wordpress/Wix?',
          a: 'Jamás. Uso Next.js y React. Tecnología de empresas como Uber o Airbnb. Rendimiento superior garantizado.',
        },
        {
          q: '¿Qué necesito para empezar?',
          a: 'Una videollamada de 15 min para ver si hacemos fit. Si todo cuadra, reservamos fecha con el 50%.',
        },
        {
          q: '¿Formas de pago?',
          a: 'Transferencia bancaria, Crypto (USDT) o PayPal/Stripe para clientes internacionales.',
        },
        {
          q: '¿Soporte post-lanzamiento?',
          a: 'Sí, 30 días de garantía incluidos. Luego ofrezco planes de mantenimiento para que te despreocupes.',
        },
      ],
    },
    contact: {
      title: 'Empecemos.',
      subtitle: 'Completá el formulario para recibir una propuesta a medida.',
      form: {
        name: 'Nombre y Apellido',
        email: 'Email Corporativo',
        project: '¿Qué buscás?',
        projectOptions: {
          placeholder: 'Seleccioná una opción',
          branding: 'Branding / Identidad',
          web: 'Sitio Web High-Performance',
          full: 'Pack Completo (Branding + Web)',
          other: 'Consultoría / Otro',
        },
        budget: 'Inversión Disponible',
        budgetOptions: {
          placeholder: 'Seleccioná rango',
          small: '$800 - $1,500',
          medium: '$1,500 - $3,000',
          large: '$3,000 - $5,000',
          xlarge: '+ $5,000 (Enterprise)',
        },
        message: 'Contame brevemente sobre tu proyecto...',
        submit: 'Solicitar Propuesta Sin Cargo',
      },
    },
    footer: {
      tagline: 'Estrategia Digital · Ingeniería Web · Inteligencia Artificial',
      location: 'Global · Desde Argentina',
      copyright: '© 2026 Groove. Crecimiento digital.',
    },
  },
  en: {
    header: {
      services: 'Services',
      why: 'Why',
      about: 'About',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      blog: 'Blog',
    },
    hero: {
      title: 'Ultra-fast websites & strategic branding for brands that want to lead.',
      subtitle: 'Modern design, cutting-edge tech, and conversion strategy. No templates, no fluff. Elevate your digital presence today.',
      cta: 'Get a quote now',
      scroll: 'Discover more',
    },
    intro: {
      text1: 'Your website is your best salesperson, don\'t leave it to slow templates. I create custom digital experiences that fuse premium aesthetics, real speed, and conversion.',
      text2: 'I power the process with AI and "Vibe Coding" to deliver agency results in record time. Guaranteed quality, no unnecessary delays.',
    },
    services: {
      title: 'What I do',
      web: {
        title: '01 High-Performance Web Dev',
        subtitle: 'Sites that load instantly. Emotional design ("Vibe Coding") with technical architecture for SEO and sales.',
        items: [
          'Premium UX/UI Design in Figma',
          'Custom development (No builders)',
          'Extreme speed (90+ PageSpeed)',
          'Technical SEO optimization',
          'Fluid & modern animations',
        ],
      },
      branding: {
        title: '02 Strategic Branding',
        subtitle: 'Visual identity designed to differentiate you, connect with your audience, and justify your value.',
        items: [
          'Brand strategy & personality',
          'Logo & scalable visual system',
          'Typography & art direction',
          'Digital brand manual',
          'Assets ready for social & web',
        ],
      },
      aiPhotography: {
        title: '03 AI Product Photography',
        subtitle: 'Elevate your product perception with studio-level images, generated digitally.',
        items: [
          'Transform simple photos into pro setups',
          'Custom settings for your brand',
          'No studio or logistics costs',
          '4K photorealistic quality',
          'Delivery in 48hs',
        ],
      },
      cta: 'See how we can work together',
    },
    why: {
      title: 'Why your business needs this',
      speed: {
        title: 'Speed that Sells',
        desc: 'Every millisecond counts. My sites retain users and improve your Google ranking.',
      },
      modern: {
        title: 'Current Aesthetics ("Vibe Coding")',
        desc: 'Design that conveys emotion and modernity. Your brand will look like a leader, not a follower.',
      },
      strategic: {
        title: 'Strategic Partner',
        desc: 'I\'m not just an executor. I help you make decisions that benefit your business.',
      },
      figmaSource: {
        title: 'Total Clarity',
        desc: 'You visualize the final result before I write a single line of code. Zero surprises.',
      },
      speedControl: {
        title: 'Speed without losing control',
        desc: 'AI to accelerate, human judgment to decide.',
      },
      buildsWell: {
        title: 'Scalable Architecture',
        desc: 'It doesn\'t just "look good": it works, converts, and grows with you.',
      },
      clearProcess: {
        title: 'Direct Process',
        desc: 'You talk to me, I design, I code. No broken telephone.',
      },
    },
    stats: {
      title: 'Real Results',
      projects: 'Projects Launched',
      clients: 'Happy Clients',
      delivery: 'On-time Deliveries',
      retention: 'Recurring Clients',
    },
    about: {
      title: 'More than a provider, a partner.',
      intro: 'I\'m Matías. I help founders and companies translate their vision into high-value digital assets.',
      belief: 'My philosophy is simple:',
      points: [
        'What isn\'t fast, is slow (and loses sales).',
        'Design must have intention, not just decoration.',
        'Technology is the means, your business is the end.',
      ],
      description: 'I combine the technical precision of development with the sensitivity of design. I don\'t deliver "files", I deliver a system ready to work and scale.',
      experience: 'With global experience and over 50 successful projects, I understand the challenges of being an entrepreneur. I look for long-term relationships, not one-off gigs.',
      cta: 'Know my process',
      howTitle: 'How I work',
      steps: [
        'Understand your business',
        'Design in Figma',
        'Validate with you',
        'Develop clean code',
        'Launch to grow',
      ],
    },
    performance: {
      title: 'Success Stories',
      projects: [
        {
          title: 'Fashion E-commerce',
          desc: 'Total redesign. Result: +340% conversion in 6 months.',
        },
        {
          title: 'Logistics SaaS',
          desc: 'Scalable UI/UX and modular design system.',
        },
        {
          title: 'Personal Brand',
          desc: 'Branding and Web. Leading positioning in its niche.',
        },
      ],
    },
    pricing: {
      title: 'Clear Investment',
      subtitle: 'Transparent packages.',
      branding: {
        title: 'Branding',
        price: 'From $800',
        features: [
          'Brand strategy',
          'Complete visual system',
          'Digital brand manual',
          'Assets for social',
          'Editable files',
        ],
        cta: 'Start now',
      },
      web: {
        title: 'Web Design',
        price: 'From $1,500',
        popular: 'Most picked',
        features: [
          'UI Design in Figma',
          'Custom development',
          'Technical SEO',
          'Optimized speed',
          'Post-launch support',
        ],
        cta: 'Start now',
      },
      full: {
        title: 'Branding + Web',
        price: 'From $2,000',
        features: [
          'Comprehensive solution',
          'Identity + Web',
          'Unified strategy',
          'Total optimization',
          'Priority scheduling',
        ],
        cta: 'Start now',
      },
      note: '* Estimated investment. Each project is quoted custom.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Do you deliver code or design?',
          a: 'Both. I design in Figma, we approve together, and I develop the final optimized code.',
        },
        {
          q: 'How long does a branding project take?',
          a: 'Between 2 and 4 weeks, depending on complexity.',
        },
        {
          q: 'How long does a website take?',
          a: 'Simple sites: 2-3 weeks. Full projects: 4-6 weeks. Speed is my priority.',
        },
        {
          q: 'Do you use templates?',
          a: 'Never. Everything is designed and coded closely to your objectives.',
        },
        {
          q: 'How is payment handled?',
          a: '50% to reserve the date and start, 50% upon satisfactory final delivery.',
        },
        {
          q: 'Does it include maintenance?',
          a: 'I include 30 days of post-launch support. Then I offer optional maintenance plans.',
        },
      ],
    },
    contact: {
      title: 'Ready to scale?',
      subtitle: 'Fill out the form and I\'ll analyze your case.',
      form: {
        name: 'Your Name',
        email: 'Your Best Email',
        project: 'Project Type',
        projectOptions: {
          placeholder: 'Select',
          branding: 'Branding',
          web: 'Web Design',
          full: 'Branding + Web',
          other: 'Other',
        },
        budget: 'Estimated Investment',
        budgetOptions: {
          placeholder: 'Select',
          small: 'Less than $1,000',
          medium: '$1,000 - $3,000',
          large: '$3,000 - $5,000',
          xlarge: 'More than $5,000',
        },
        message: 'What is your biggest challenge today?',
        submit: 'Send inquiry (No commitment)',
      },
    },
    footer: {
      tagline: 'Strategic Design · High-Performance Dev · AI · Vibe Coding',
      location: 'Global · Argentina Base',
      copyright: '© 2026 Groove. All rights reserved.',
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
