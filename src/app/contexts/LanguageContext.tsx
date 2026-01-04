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
      why: 'Por qué',
      about: 'Sobre mí',
      portfolio: 'Portfolio',
      pricing: 'Precios',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    hero: {
      title: 'Diseño marcas y sitios web listos para escalar.',
      subtitle: 'Rápidos. Modernos. Funcionales.',
      cta: 'Hablemos de tu proyecto',
      scroll: 'Scroll',
    },
    intro: {
      text1: 'No hago webs genéricas ni marcas improvisadas. Diseño sistemas visuales y sitios web que se piensan, se prototipan y se construyen con criterio.',
      text2: 'Trabajo con Figma como base del proceso y utilizo IA y vibe coding para reducir tiempos sin perder calidad.',
    },
    services: {
      title: 'Qué hago',
      branding: {
        title: '(01) Identidad de marca',
        subtitle: 'Marcas claras, coherentes y preparadas para crecer en digital.',
        items: [
          'Concepto y posicionamiento',
          'Logo y sistema visual',
          'Tipografía y paleta',
          'Manual de uso',
          'Adaptación web y redes',
        ],
      },
      web: {
        title: '(02) Diseño y desarrollo web',
        subtitle: 'Webs diseñadas en Figma y llevadas a producción con procesos modernos.',
        items: [
          'UX/UI en Figma',
          'Prototipos navegables',
          'Diseño responsive',
          'Performance-first',
          'SEO técnico base',
        ],
      },
      ai: {
        title: '(03) IA + Vibe Coding',
        subtitle: 'Uso inteligencia artificial como acelerador, no como atajo.',
        items: [
          'Figma Make para pasar de diseño a código',
          'Iteraciones rápidas',
          'Optimización de estructura',
          'Reducción de tiempos de desarrollo',
          'Más foco en estrategia y experiencia',
        ],
      },
      aiPhotography: {
        title: '(04) Fotografía de producto con IA',
        subtitle: 'Imágenes profesionales de tu producto sin estudios ni producciones costosas.',
        items: [
          'Solo necesitás una foto con tu celular',
          'Fondos y ambientaciones personalizadas',
          'Imágenes realistas de alta calidad',
          'Listas para web, e-commerce o redes',
          'Entrega rápida y sin complicaciones',
        ],
      },
      cta: 'Empezar proyecto',
    },
    why: {
      title: 'Por qué trabajar conmigo',
      speed: {
        title: 'Velocidad',
        desc: 'Uso IA y automatización para acortar plazos sin resignar calidad.',
      },
      modern: {
        title: 'Modernidad',
        desc: 'Trabajo con las últimas herramientas y frameworks del mercado.',
      },
      strategic: {
        title: 'Estrategia',
        desc: 'Cada decisión visual tiene un propósito comercial.',
      },
      figmaSource: {
        title: 'Figma como fuente de verdad',
        desc: 'Todo se diseña y valida antes de construir.',
      },
      speedControl: {
        title: 'Velocidad sin perder control',
        desc: 'IA para acelerar, criterio humano para decidir.',
      },
      buildsWell: {
        title: 'Diseño que se construye bien',
        desc: 'No solo "se ve bien": funciona y escala.',
      },
      clearProcess: {
        title: 'Proceso claro y directo',
        desc: 'Sin rodeos. Sin intermediarios.',
      },
    },
    stats: {
      title: 'Resultados medibles',
      projects: 'Proyectos completados',
      clients: 'Clientes satisfechos',
      delivery: 'Tasa de entrega a tiempo',
      retention: 'Retención de clientes',
    },
    about: {
      title: 'Sobre mí',
      intro: 'Soy diseñador especializado en identidad de marca y diseño web, con base en Argentina y foco global.',
      belief: 'Trabajo desde Figma porque creo en:',
      points: [
        'pensar antes de construir,',
        'validar antes de lanzar,',
        'y usar tecnología para ganar tiempo, no para improvisar.',
      ],
      description: 'Mi enfoque combina diseño estratégico con desarrollo técnico. No solo creo marcas que se ven bien: diseño sistemas visuales que funcionan, escalan y generan resultados medibles.',
      experience: 'Con más de 50 proyectos completados para clientes en diferentes industrias, entiendo que cada negocio tiene necesidades únicas. Por eso trabajo de forma personalizada, sin plantillas ni soluciones genéricas.',
      cta: 'Conoce más de mí',
      howTitle: 'Cómo trabajo',
      steps: [
        'Entiendo el negocio',
        'Diseño en Figma',
        'Itero rápido con IA',
        'Paso a producción con criterio',
        'Entrego algo listo para crecer',
      ],
    },
    performance: {
      title: 'Experiencias relevantes',
      projects: [
        {
          title: 'E-commerce moda sustentable',
          desc: 'Rediseño completo de identidad y web. Resultado: +340% conversión en 6 meses.',
        },
        {
          title: 'SaaS B2B para logística',
          desc: 'Diseño UI completo en Figma y paso a producción. Sistema escalable y reutilizable.',
        },
        {
          title: 'Marca personal coach',
          desc: 'Branding desde cero y web one-page. Lanzamiento con posicionamiento claro.',
        },
      ],
    },
    pricing: {
      title: 'Precios',
      subtitle: 'Transparentes. Sin sorpresas.',
      branding: {
        title: 'Branding',
        price: 'Desde $800',
        features: [
          'Identidad visual completa',
          'Manual de marca',
          'Aplicaciones digitales',
          '2 rondas de revisión',
          'Archivos fuente',
        ],
        cta: 'Empezar',
      },
      web: {
        title: 'Diseño Web',
        price: 'Desde $1,500',
        popular: 'Más elegido',
        features: [
          'Diseño UI completo en Figma',
          'Hasta 5 páginas',
          'Responsive design',
          'Prototipo navegable',
          'Handoff para desarrollo',
        ],
        cta: 'Empezar',
      },
      full: {
        title: 'Branding + Web',
        price: 'Desde $2,000',
        features: [
          'Todo lo anterior',
          'Diseño y desarrollo web',
          'SEO técnico base',
          'Optimización performance',
          'Soporte post-lanzamiento',
        ],
        cta: 'Empezar',
      },
      note: '* Los precios son estimados. Cada proyecto es único y el costo final depende del alcance.',
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Cuánto tarda un proyecto de branding?',
          a: 'Entre 2 y 4 semanas, dependiendo de la complejidad y la cantidad de aplicaciones requeridas.',
        },
        {
          q: '¿Incluís desarrollo web o solo diseño?',
          a: 'Ofrezco ambos. Puedo entregar solo el diseño en Figma listo para handoff, o llevar el proyecto hasta producción completa.',
        },
        {
          q: '¿Trabajás con clientes internacionales?',
          a: 'Sí. Trabajo de forma 100% remota con clientes de diferentes países y zonas horarias.',
        },
        {
          q: '¿Qué pasa si necesito cambios después del lanzamiento?',
          a: 'Todos los proyectos incluyen un período de soporte post-lanzamiento. Cambios adicionales se pueden coordinar por separado.',
        },
        {
          q: '¿Usás plantillas o todo es personalizado?',
          a: 'Cada proyecto es único y diseñado desde cero según las necesidades específicas del cliente. No uso plantillas.',
        },
      ],
    },
    contact: {
      title: 'Hablemos de tu proyecto',
      subtitle: 'Completá el formulario y te respondo en menos de 24 horas.',
      form: {
        name: 'Nombre',
        email: 'Email',
        project: 'Tipo de proyecto',
        projectOptions: {
          placeholder: 'Seleccionar',
          branding: 'Branding',
          web: 'Diseño Web',
          full: 'Branding + Web',
          other: 'Otro',
        },
        budget: 'Presupuesto estimado',
        budgetOptions: {
          placeholder: 'Seleccionar',
          small: 'Menos de $1,000',
          medium: '$1,000 - $3,000',
          large: '$3,000 - $5,000',
          xlarge: 'Más de $5,000',
        },
        message: 'Contame sobre tu proyecto',
        submit: 'Enviar mensaje',
      },
    },
    footer: {
      tagline: 'Identidad de marca · Diseño web · IA · Figma Make · Vibe Coding',
      location: 'Trabajo global · Base Argentina',
      copyright: '© 2024 Groove. Todos los derechos reservados.',
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
    },
    hero: {
      title: 'I design brands and websites ready to scale.',
      subtitle: 'Fast. Modern. Functional.',
      cta: "Let's talk about your project",
      scroll: 'Scroll',
    },
    intro: {
      text1: "I don't create generic websites or improvised brands. I design visual systems and websites that are thought through, prototyped, and built with purpose.",
      text2: 'I work with Figma as the foundation of my process and use AI and vibe coding to reduce timelines without compromising quality.',
    },
    services: {
      title: 'What I do',
      branding: {
        title: '(01) Brand Identity',
        subtitle: 'Clear, cohesive brands ready to grow digitally.',
        items: [
          'Concept and positioning',
          'Logo and visual system',
          'Typography and palette',
          'Brand manual',
          'Web and social media adaptation',
        ],
      },
      web: {
        title: '(02) Web Design & Development',
        subtitle: 'Websites designed in Figma and brought to production with modern processes.',
        items: [
          'UX/UI in Figma',
          'Navigable prototypes',
          'Responsive design',
          'Performance-first',
          'Technical SEO foundation',
        ],
      },
      ai: {
        title: '(03) AI + Vibe Coding',
        subtitle: 'I use artificial intelligence as an accelerator, not a shortcut.',
        items: [
          'Figma Make to go from design to code',
          'Rapid iterations',
          'Structure optimization',
          'Reduced development time',
          'More focus on strategy and experience',
        ],
      },
      aiPhotography: {
        title: '(04) Product Photography with AI',
        subtitle: 'Professional images of your product without costly studies or productions.',
        items: [
          'You only need a photo with your phone',
          'Custom backgrounds and settings',
          'High-quality realistic images',
          'Ready for web, e-commerce, or social media',
          'Fast and hassle-free delivery',
        ],
      },
      cta: 'Start project',
    },
    why: {
      title: 'Why work with me',
      speed: {
        title: 'Speed',
        desc: 'I use AI and automation to shorten timelines without compromising quality.',
      },
      modern: {
        title: 'Modernity',
        desc: 'I work with the latest tools and frameworks in the market.',
      },
      strategic: {
        title: 'Strategy',
        desc: 'Every visual decision has a business purpose.',
      },
      figmaSource: {
        title: 'Figma as the source of truth',
        desc: 'Everything is designed and validated before building.',
      },
      speedControl: {
        title: 'Speed without losing control',
        desc: 'AI to accelerate, human judgment to decide.',
      },
      buildsWell: {
        title: 'Design that builds well',
        desc: 'Not just "looks good": it works and scales.',
      },
      clearProcess: {
        title: 'Clear and direct process',
        desc: 'No BS. No middlemen.',
      },
    },
    stats: {
      title: 'Measurable results',
      projects: 'Completed projects',
      clients: 'Satisfied clients',
      delivery: 'On-time delivery rate',
      retention: 'Client retention',
    },
    about: {
      title: 'About me',
      intro: 'I am a designer specialized in brand identity and web design, based in Argentina with a global focus.',
      belief: 'I work from Figma because I believe in:',
      points: [
        'thinking before building,',
        'validating before launching,',
        'and using technology to save time, not to improvise.',
      ],
      description: 'My approach combines strategic design with technical development. I don\'t just create brands that look good: I design visual systems that work, scale, and generate measurable results.',
      experience: 'With over 50 completed projects for clients in various industries, I understand that every business has unique needs. That\'s why I work on a personalized basis, without templates or generic solutions.',
      cta: 'Learn more about me',
      howTitle: 'How I work',
      steps: [
        'I understand the business',
        'I design in Figma',
        'I iterate quickly with AI',
        'I move to production thoughtfully',
        'I deliver something ready to grow',
      ],
    },
    performance: {
      title: 'Relevant experiences',
      projects: [
        {
          title: 'Sustainable fashion e-commerce',
          desc: 'Complete identity and web redesign. Result: +340% conversion in 6 months.',
        },
        {
          title: 'B2B SaaS for logistics',
          desc: 'Complete UI design in Figma and production. Scalable and reusable system.',
        },
        {
          title: 'Personal brand for coach',
          desc: 'Branding from scratch and one-page website. Launch with clear positioning.',
        },
      ],
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Transparent. No surprises.',
      branding: {
        title: 'Branding',
        price: 'From $800',
        features: [
          'Complete visual identity',
          'Brand manual',
          'Digital applications',
          '2 revision rounds',
          'Source files',
        ],
        cta: 'Get started',
      },
      web: {
        title: 'Web Design',
        price: 'From $1,500',
        popular: 'Most popular',
        features: [
          'Complete UI design in Figma',
          'Up to 5 pages',
          'Responsive design',
          'Navigable prototype',
          'Development handoff',
        ],
        cta: 'Get started',
      },
      full: {
        title: 'Branding + Web',
        price: 'From $2,000',
        features: [
          'All of the above',
          'Web design and development',
          'Technical SEO foundation',
          'Performance optimization',
          'Post-launch support',
        ],
        cta: 'Get started',
      },
      note: '* Prices are estimates. Each project is unique and final cost depends on scope.',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How long does a branding project take?',
          a: 'Between 2 and 4 weeks, depending on complexity and the number of required applications.',
        },
        {
          q: 'Do you include web development or just design?',
          a: 'I offer both. I can deliver just the design in Figma ready for handoff, or take the project all the way to full production.',
        },
        {
          q: 'Do you work with international clients?',
          a: 'Yes. I work 100% remotely with clients from different countries and time zones.',
        },
        {
          q: 'What happens if I need changes after launch?',
          a: 'All projects include a post-launch support period. Additional changes can be coordinated separately.',
        },
        {
          q: 'Do you use templates or is everything custom?',
          a: 'Each project is unique and designed from scratch according to the specific needs of the client. I don\'t use templates.',
        },
      ],
    },
    contact: {
      title: "Let's talk about your project",
      subtitle: "Fill out the form and I'll respond in less than 24 hours.",
      form: {
        name: 'Name',
        email: 'Email',
        project: 'Project type',
        projectOptions: {
          placeholder: 'Select',
          branding: 'Branding',
          web: 'Web Design',
          full: 'Branding + Web',
          other: 'Other',
        },
        budget: 'Estimated budget',
        budgetOptions: {
          placeholder: 'Select',
          small: 'Less than $1,000',
          medium: '$1,000 - $3,000',
          large: '$3,000 - $5,000',
          xlarge: 'More than $5,000',
        },
        message: 'Tell me about your project',
        submit: 'Send message',
      },
    },
    footer: {
      tagline: 'Brand Identity · Web Design · AI · Figma Make · Vibe Coding',
      location: 'Global work · Based in Argentina',
      copyright: '© 2024 Groove. All rights reserved.',
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
