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
      pricing: 'Inversi\u00f3n',
      faq: 'Dudas',
      contact: 'Empezar',
      blog: 'Blog',
    },
    hero: {
      line1: 'Tu marca merece',
      line2: 'ir m\u00e1s r\u00e1pido',
      subtitle: 'Dise\u00f1o web premium y branding estrat\u00e9gico. Resultados de clase mundial en semanas, no meses. Sin agencia, sin intermediarios.',
      cta: 'Agendar auditor\u00eda estrat\u00e9gica',
      scroll: 'Ver por qu\u00e9 funcionamos',
    },
    intro: {
      text1: 'Tu web deber\u00eda ser tu mejor vendedor. Si no vende, es un gasto. Creo activos digitales que fusionan est\u00e9tica premium con ingenier\u00eda de conversi\u00f3n para que cada visita se acerque m\u00e1s a ser un cliente.',
      text2: 'Estuve del lado de la agencia. S\u00e9 exactamente qu\u00e9 frustra a los clientes: tiempos eternos, costos ocultos, m\u00faltiples intermediarios. Por eso elimin\u00e9 todo eso. Ac\u00e1 habl\u00e1s directo con quien construye tu futuro digital.',
    },
    services: {
      title: 'Lo que gan\u00e1s trabajando conmigo',
      web: {
        title: '01 Tu Web como M\u00e1quina de Ventas',
        subtitle: 'Una web que carga casi instant\u00e1neo, posiciona en Google y convierte visitantes en clientes. Sin templates ni builders pesados.',
        items: [
          'Dise\u00f1o que convierte visitantes en clientes',
          'Velocidad de carga que mejora tu ranking en Google (95+ score)',
          'C\u00f3digo a medida: sin l\u00edmites de plataformas gen\u00e9ricas',
          'SEO t\u00e9cnico que te posiciona frente a tu competencia',
          'Animaciones que retienen al usuario y bajan la tasa de rebote',
        ],
      },
      branding: {
        title: '02 Identidad que Justifica tu Precio Premium',
        subtitle: 'Una marca que transmite confianza desde el primer contacto. Dise\u00f1o visual y experiencia digital pensados para vender m\u00e1s.',
        items: [
          'Estrategia de posicionamiento para diferenciarte del resto',
          'Sistema visual que tus clientes recuerdan',
          'Direcci\u00f3n de arte que eleva la percepci\u00f3n de tu marca',
          'Manual de marca listo para escalar sin perder coherencia',
          'Kit de redes sociales para empezar a comunicar desde el d\u00eda 1',
        ],
      },
      aiPhotography: {
        title: '03 Fotograf\u00eda de Producto sin Estudio ni Log\u00edstica',
        subtitle: 'Im\u00e1genes de nivel profesional generadas con IA. El resultado de una sesi\u00f3n de estudio, sin el costo ni la complejidad.',
        items: [
          'Calidad fotorrealista 4K que parece salida de un estudio profesional',
          'Escenarios infinitos sin alquilar locaciones',
          'Cero costos de producci\u00f3n, log\u00edstica ni fot\u00f3grafos',
          'Consistencia visual total en todo tu cat\u00e1logo',
          'Entrega express en 48hs, no en semanas',
        ],
      },
      cta: 'Consultar disponibilidad',
    },
    why: {
      title: 'Por qu\u00e9 esto funciona para tu negocio',
      speed: {
        title: 'Cada Segundo Lento Te Cuesta Ventas',
        desc: 'Una web que tarda m\u00e1s de 3 segundos pierde el 53% de los visitantes. Las m\u00edas cargan en menos de 2.',
      },
      modern: {
        title: 'Tu Competencia Se Va a Preguntar Qui\u00e9n Te Hizo la Web',
        desc: 'Dise\u00f1o que transmite autoridad y modernidad. Tu marca se ve como l\u00edder, no como seguidora.',
      },
      strategic: {
        title: 'Un Socio Estrat\u00e9gico, No un Ejecutor de Tareas',
        desc: 'Cuido tu inversi\u00f3n digital como si fuera m\u00eda. Cada decisi\u00f3n de dise\u00f1o tiene un por qu\u00e9 comercial.',
      },
      figmaSource: {
        title: 'Aprobas Cada P\u00edxel Antes de Pagar',
        desc: 'Visualiz\u00e1s el resultado final en Figma antes de que escriba una sola l\u00ednea de c\u00f3digo. Cero sorpresas.',
      },
      speedControl: {
        title: 'Velocidad de IA, Criterio Humano',
        desc: 'Uso inteligencia artificial para acelerar, pero cada decisi\u00f3n pasa por la direcci\u00f3n creativa de un experto.',
      },
      buildsWell: {
        title: 'Crece con Tu Facturaci\u00f3n',
        desc: 'Sistemas robustos listos para escalar. Sin deuda t\u00e9cnica que te frene cuando m\u00e1s crec\u00e9s.',
      },
      clearProcess: {
        title: 'Habl\u00e1s Directo con Quien Construye',
        desc: 'Sin intermediarios, sin tel\u00e9fono descompuesto. El que dise\u00f1a y programa es el mismo con el que habl\u00e1s.',
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
      title: 'Tu partner tecnol\u00f3gico.',
      intro: 'Soy Mat\u00edas. Transformo visiones complejas en productos digitales rentables y est\u00e9ticos.',
      belief: 'Manifiesto:',
      points: [
        'Lento es costoso. La velocidad es la nueva divisa.',
        'El dise\u00f1o sin estrategia es arte. Yo hago negocios.',
        'Tu \u00e9xito es mi mejor caso de estudio.',
      ],
      description: 'Fusiono la ingenier\u00eda de software con el dise\u00f1o de producto. No entrego c\u00f3digo, entrego soluciones comerciales llave en mano que generan retorno desde el d\u00eda 1.',
      experience: '+50 proyectos entregados. Experiencia global. Estuve del lado de la agencia y s\u00e9 exactamente qu\u00e9 no funciona. Por eso mi enfoque es diferente: relaciones a largo plazo y crecimiento mutuo.',
      cta: 'Ver m\u00e9todo de trabajo',
      howTitle: 'El Proceso',
      steps: [
        'Auditor\u00eda y Estrategia',
        'Dise\u00f1o y Prototipado',
        'Revisi\u00f3n y Ajuste',
        'Desarrollo High-Perf',
        'Lanzamiento y Escala',
      ],
    },
    performance: {
      title: 'Casos Reales, Resultados Medibles',
      projects: [
        {
          title: 'E-commerce de Moda',
          desc: 'Redise\u00f1o integral de tienda online. Resultado: +340% de conversi\u00f3n en 6 meses.',
        },
        {
          title: 'SaaS de Log\u00edstica',
          desc: 'UI/UX escalable y design system modular. La plataforma triplic\u00f3 sus usuarios activos.',
        },
        {
          title: 'Marca Personal Premium',
          desc: 'Branding + web estrat\u00e9gica. Posicionamiento l\u00edder en su nicho en menos de 3 meses.',
        },
      ],
    },
    pricing: {
      sectionTitle: 'Inversi\u00f3n Clara. Paquetes Transparentes.',
      intro1: 'Sin vueltas ni costos ocultos.',
      intro2: 'Trabajo con rangos de precios claros para que sepas d\u00f3nde est\u00e1s parado desde el d\u00eda 1.',
      intro3: 'Eleg\u00ed el paquete que mejor se ajuste a tu etapa actual y empecemos.',
      scarcity: 'Para mantener la velocidad y calidad que prometo, tomo un m\u00e1ximo de 3 proyectos al mes. Consult\u00e1 disponibilidad.',
      branding: {
        title: 'Branding Estrat\u00e9gico',
        desc: 'Identidad visual completa pensada para diferenciarte y vender m\u00e1s.',
        helps: 'Incluye:',
        items: [
          'Estrategia de marca',
          'Sistema visual (Logo, Colores, Typos)',
          'Manual de marca digital',
          'Assets para redes sociales',
          'Archivos editables finales',
        ],
        cta: 'Reservar mi lugar',
        note: 'Se reserva con el 50%',
      },
      web: {
        title: 'Dise\u00f1o Web High-Perf',
        desc: 'Tu web r\u00e1pida, moderna y optimizada para conversi\u00f3n. Sin builders pesados.',
        allows: 'Incluye:',
        items: [
          'Dise\u00f1o UI Premium en Figma',
          'Desarrollo a medida (tecnolog\u00eda de Uber y Airbnb)',
          'Animaciones fluidas y modernas',
          'SEO T\u00e9cnico base',
          'Optimizaci\u00f3n de velocidad (90+ en Google)',
        ],
        cta: 'Reservar mi lugar',
        note: 'Se reserva con el 50%',
      },
      aiPhotography: {
        title: 'Fotograf\u00eda IA',
        desc: 'Im\u00e1genes de producto nivel estudio, generadas con IA. Sin producci\u00f3n ni log\u00edstica.',
        cta: 'Ver Fotograf\u00eda IA',
      },
      trust: {
        clear: 'Proceso claro',
        fast: 'Velocidad real',
        noCommit: 'Calidad garantizada',
      },
      whatsapp: 'Consultar por WhatsApp',
    },
    faq: {
      title: 'Dudas Frecuentes',
      items: [
        {
          q: '\u00bfDise\u00f1o o C\u00f3digo?',
          a: 'Ambos. Soy un perfil h\u00edbrido (Desarrollador + Dise\u00f1ador). Eso significa que el dise\u00f1o que aprob\u00e1s en Figma es exactamente lo que vas a ver en tu web final. Pixel perfect.',
        },
        {
          q: '\u00bfCu\u00e1nto tarda un proyecto?',
          a: 'Branding: 2-3 semanas. Web: 3-5 semanas. Trabajo con sprints intensivos para que puedas empezar a vender antes, no despu\u00e9s.',
        },
        {
          q: '\u00bfPor qu\u00e9 no usar una agencia tradicional?',
          a: 'En una agencia tu proyecto pasa por 5 personas, se dilata meses y pag\u00e1s por toda esa estructura. Conmigo habl\u00e1s directo con quien dise\u00f1a y programa. M\u00e1s r\u00e1pido, m\u00e1s transparente, mejor resultado.',
        },
        {
          q: '\u00bfUs\u00e1s plantillas de WordPress/Wix?',
          a: 'Jam\u00e1s. Uso la misma tecnolog\u00eda que empresas como Uber o Airbnb. Eso significa que tu web carga en menos de 2 segundos, posiciona mejor en Google y no tiene los l\u00edmites de un builder gen\u00e9rico.',
        },
        {
          q: '\u00bfQu\u00e9 necesito para empezar?',
          a: 'Una videollamada de 15 min para ver si hacemos fit. Si todo cuadra, reservamos fecha con el 50% y arrancamos la misma semana.',
        },
        {
          q: '\u00bfFormas de pago?',
          a: 'Transferencia bancaria, Crypto (USDT) o PayPal/Stripe para clientes internacionales. Flexible y sin complicaciones.',
        },
      ],
      seeAll: 'Ver todas las preguntas',
    },
    contact: {
      title: 'Empecemos.',
      subtitle: 'Complet\u00e1 el formulario para recibir una auditor\u00eda estrat\u00e9gica gratuita de tu presencia digital.',
      form: {
        name: 'Nombre y Apellido',
        email: 'Email Corporativo',
        project: '\u00bfQu\u00e9 busc\u00e1s?',
        projectOptions: {
          placeholder: 'Seleccion\u00e1 una opci\u00f3n',
          branding: 'Branding / Identidad',
          web: 'Sitio Web High-Performance',
          full: 'Pack Completo (Branding + Web)',
          other: 'Consultor\u00eda / Otro',
        },
        budget: 'Inversi\u00f3n Disponible',
        budgetOptions: {
          placeholder: 'Seleccion\u00e1 rango',
          small: '$800 - $1,500',
          medium: '$1,500 - $3,000',
          large: '$3,000 - $5,000',
          xlarge: '+ $5,000 (Enterprise)',
        },
        message: 'Cont\u00e1 brevemente sobre tu proyecto y tu mayor desaf\u00edo hoy...',
        submit: 'Solicitar auditor\u00eda gratuita',
      },
      footer: 'Respuesta clara en menos de 24hs.',
    },
    footer: {
      tagline: 'Estrategia Digital \u00b7 Ingenier\u00eda Web \u00b7 Inteligencia Artificial',
      location: 'Global \u00b7 Desde Argentina',
      copyright: '\u00a9 2026 Groove. Crecimiento digital.',
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
      line1: 'Your brand deserves to',
      line2: 'move faster',
      subtitle: 'Premium web design & strategic branding. World-class results in weeks, not months. No agency, no middlemen.',
      cta: 'Book a strategic audit',
      scroll: 'Discover more',
    },
    intro: {
      text1: 'Your website should be your best salesperson. If it\'s not selling, it\'s a cost. I create digital assets that fuse premium aesthetics with conversion engineering so every visit gets closer to becoming a client.',
      text2: 'I\'ve been on the agency side. I know exactly what frustrates clients: endless timelines, hidden costs, multiple middlemen. That\'s why I eliminated all of it. Here, you talk directly to the one building your digital future.',
    },
    services: {
      title: 'What you get working with me',
      web: {
        title: '01 Your Website as a Sales Machine',
        subtitle: 'A site that loads almost instantly, ranks on Google, and converts visitors into clients. No templates, no heavy builders.',
        items: [
          'Design that converts visitors into paying clients',
          'Loading speed that boosts your Google ranking (95+ score)',
          'Custom code: no limits from generic platforms',
          'Technical SEO that puts you ahead of competitors',
          'Animations that retain users and reduce bounce rate',
        ],
      },
      branding: {
        title: '02 An Identity That Justifies Your Premium Price',
        subtitle: 'A brand that builds trust from the first impression. Visual design and digital experience built to sell more.',
        items: [
          'Positioning strategy to stand out from the rest',
          'A visual system your clients remember',
          'Art direction that elevates brand perception',
          'Brand manual ready to scale without losing consistency',
          'Social media kit to start communicating from day 1',
        ],
      },
      aiPhotography: {
        title: '03 Product Photography Without a Studio',
        subtitle: 'Professional-level images generated with AI. Studio-quality results without the cost or complexity.',
        items: [
          '4K photorealistic quality that looks studio-shot',
          'Unlimited scenarios without renting locations',
          'Zero production, logistics, or photographer costs',
          'Total visual consistency across your entire catalog',
          'Express delivery in 48hrs, not weeks',
        ],
      },
      cta: 'Check availability',
    },
    why: {
      title: 'Why this works for your business',
      speed: {
        title: 'Every Slow Second Costs You Sales',
        desc: 'A site that takes over 3 seconds loses 53% of visitors. Mine loads in under 2.',
      },
      modern: {
        title: 'Your Competitors Will Ask Who Built Your Site',
        desc: 'Design that conveys authority and modernity. Your brand looks like a leader, not a follower.',
      },
      strategic: {
        title: 'A Strategic Partner, Not a Task Executor',
        desc: 'I protect your digital investment as if it were my own. Every design decision has a business reason.',
      },
      figmaSource: {
        title: 'You Approve Every Pixel Before Paying',
        desc: 'You see the final result in Figma before I write a single line of code. Zero surprises.',
      },
      speedControl: {
        title: 'AI Speed, Human Judgment',
        desc: 'I use artificial intelligence to accelerate, but every decision goes through expert creative direction.',
      },
      buildsWell: {
        title: 'Scales With Your Revenue',
        desc: 'Robust systems ready to grow. No technical debt slowing you down when you need speed most.',
      },
      clearProcess: {
        title: 'You Talk Directly to the Builder',
        desc: 'No middlemen, no broken telephone. The one who designs and codes is the one you talk to.',
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
      intro: 'I\'m Mat\u00edas. I help founders and companies translate their vision into high-value digital assets.',
      belief: 'My philosophy is simple:',
      points: [
        'What isn\'t fast, is expensive. Speed is the new currency.',
        'Design without strategy is art. I build businesses.',
        'Your success is my best case study.',
      ],
      description: 'I combine the technical precision of development with the sensitivity of design. I don\'t deliver "files", I deliver turnkey commercial solutions that generate returns from day 1.',
      experience: 'With global experience and over 50 successful projects, I\'ve been on the agency side and know exactly what doesn\'t work. That\'s why my approach is different: long-term relationships and mutual growth.',
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
      title: 'Real Cases, Measurable Results',
      projects: [
        {
          title: 'Fashion E-commerce',
          desc: 'Full store redesign. Result: +340% conversion in 6 months.',
        },
        {
          title: 'Logistics SaaS',
          desc: 'Scalable UI/UX and modular design system. The platform tripled its active users.',
        },
        {
          title: 'Premium Personal Brand',
          desc: 'Branding + strategic web. Leading position in its niche in under 3 months.',
        },
      ],
    },
    pricing: {
      sectionTitle: 'Clear Investment. Transparent Packages.',
      intro1: 'No fluff, no hidden costs.',
      intro2: 'I work with clear price ranges so you know where you stand from day 1.',
      intro3: 'Choose the package that best fits your current stage and let\'s start.',
      scarcity: 'To maintain the speed and quality I promise, I take a maximum of 3 projects per month. Check availability.',
      branding: {
        title: 'Strategic Branding',
        desc: 'Complete visual identity designed to differentiate you and sell more.',
        helps: 'Includes:',
        items: [
          'Brand Strategy',
          'Visual System (Logo, Colors, Typos)',
          'Digital Brand Manual',
          'Social Media Assets',
          'Final Editable Files',
        ],
        cta: 'Reserve my spot',
        note: '50% deposit to start',
      },
      web: {
        title: 'High-Perf Web Design',
        desc: 'Your fast, modern website optimized for conversion. No heavy builders.',
        allows: 'Includes:',
        items: [
          'Premium UI Design in Figma',
          'Custom Development (same tech as Uber & Airbnb)',
          'Fluid & modern animations',
          'Base Technical SEO',
          'Speed Optimization (90+ on Google)',
        ],
        cta: 'Reserve my spot',
        note: '50% deposit to start',
      },
      aiPhotography: {
        title: 'AI Photography',
        desc: 'Studio-level product images generated with AI. No production or logistics needed.',
        cta: 'See AI Photography',
      },
      trust: {
        clear: 'Clear process',
        fast: 'Real speed',
        noCommit: 'Guaranteed quality',
      },
      whatsapp: 'Chat on WhatsApp',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Do you deliver code or design?',
          a: 'Both. I\'m a hybrid profile (Developer + Designer). That means the design you approve in Figma is exactly what you\'ll see on your final website. Pixel perfect.',
        },
        {
          q: 'How long does a project take?',
          a: 'Branding: 2-3 weeks. Web: 3-5 weeks. I work in intensive sprints so you can start selling sooner, not later.',
        },
        {
          q: 'Why not use a traditional agency?',
          a: 'At an agency, your project goes through 5 people, drags on for months, and you pay for all that overhead. With me, you talk directly to the one who designs and codes. Faster, more transparent, better result.',
        },
        {
          q: 'Do you use WordPress/Wix templates?',
          a: 'Never. I use the same technology as companies like Uber or Airbnb. That means your site loads in under 2 seconds, ranks better on Google, and doesn\'t have the limits of a generic builder.',
        },
        {
          q: 'What do I need to get started?',
          a: 'A 15-minute video call to see if we\'re a good fit. If everything checks out, we reserve your spot with 50% and start the same week.',
        },
        {
          q: 'Payment methods?',
          a: 'Bank transfer, Crypto (USDT), or PayPal/Stripe for international clients. Flexible and hassle-free.',
        },
      ],
      seeAll: 'See all questions',
    },
    contact: {
      title: 'Let\'s start.',
      subtitle: 'Fill out the form to receive a free strategic audit of your digital presence.',
      form: {
        name: 'Your Name',
        email: 'Your Best Email',
        project: 'What are you looking for?',
        projectOptions: {
          placeholder: 'Select an option',
          branding: 'Branding / Identity',
          web: 'High-Performance Website',
          full: 'Full Pack (Branding + Web)',
          other: 'Consulting / Other',
        },
        budget: 'Available Investment',
        budgetOptions: {
          placeholder: 'Select range',
          small: '$800 - $1,500',
          medium: '$1,500 - $3,000',
          large: '$3,000 - $5,000',
          xlarge: '+ $5,000 (Enterprise)',
        },
        message: 'Tell me briefly about your project and your biggest challenge today...',
        submit: 'Request free audit',
      },
      footer: 'Clear response in under 24hrs.',
    },
    footer: {
      tagline: 'Strategic Design \u00b7 High-Performance Dev \u00b7 AI \u00b7 Vibe Coding',
      location: 'Global \u00b7 Argentina Base',
      copyright: '\u00a9 2026 Groove. All rights reserved.',
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
