// Datos SEO para el prerender estático del <head> (scripts/prerender-meta.mjs).
// Espejo de src/app/utils/seo.ts — mantener en sync. JS plano para correr en el build.

export const SITE = 'https://groovedesign.com.ar';
export const DEFAULT_OG = `${SITE}/og-home.jpg`;

// Rutas con meta propio (path => meta). El home (/) ya está en index.html.
export const ROUTES = {
  '/sobre-mi': {
    title: 'Sobre nosotros · Matt & Fide | Estudio Groove',
    description: 'Somos Matt y Fide, los dos socios detrás de Groove. Branding, web y producto sin agencias ni intermediarios: hablás directo con quienes diseñan y construyen tu proyecto.',
    keywords: 'sobre Groove, Matt y Fide, estudio de diseño Paraná, equipo de diseño web, branding y desarrollo',
    type: 'profile',
    image: DEFAULT_OG,
  },
  '/metodo': {
    title: 'Cómo trabajamos · El método de Groove',
    description: 'Proceso claro y rápido: estrategia, diseño y desarrollo high-performance. Entregamos en 3 a 5 semanas, con criterio humano en cada decisión y trato directo.',
    keywords: 'método de trabajo, proceso de diseño web, cómo trabajamos, desarrollo web rápido, branding proceso',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/preguntas-frecuentes': {
    title: 'Preguntas frecuentes · Plazos, proceso y precios | Groove',
    description: 'Todo sobre cómo trabajamos: plazos de 3 a 5 semanas, trato directo sin intermediarios, tecnología de primer nivel. Respuestas claras antes de empezar.',
    keywords: 'preguntas frecuentes diseño web, plazos branding, precios diseño web, proceso de trabajo Groove',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/brief': {
    title: 'Armá tu proyecto · Branding, Web, Apps, Foto y Reels | Groove',
    description: 'Elegí los servicios que necesitás y armá tu proyecto a medida. Te respondemos con una propuesta personalizada. Sin precios ocultos: arrancamos con una charla.',
    keywords: 'armar proyecto web, cotización diseño web, presupuesto branding, contratar diseño web Argentina',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/fotografia-ia': {
    title: 'Fotografía de productos sin estudio | Groove',
    description: 'Fotos realistas de prendas y productos sin necesidad de estudio fotográfico. Calidad profesional para indumentaria y e-commerce, con entrega rápida.',
    keywords: 'fotografía de producto, fotos sin estudio, fotografía e-commerce, fotos de indumentaria, fotografía realista',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/formulario-branding': {
    title: 'Empezá tu proyecto de Branding | Groove',
    description: 'Contanos sobre tu marca y recibí una propuesta personalizada. Branding estratégico que te diferencia y te ayuda a vender más.',
    keywords: 'formulario branding, cotización branding, identidad de marca, diseño de logo, manual de marca',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/formulario-web': {
    title: 'Empezá tu proyecto Web | Groove',
    description: 'Contanos sobre tu proyecto y recibí una propuesta personalizada. Webs high-performance que convierten visitantes en clientes.',
    keywords: 'formulario diseño web, cotización sitio web, desarrollo web, web rápida, diseño web a medida',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/formulario-fotografia-ia': {
    title: 'Solicitá fotografía de productos | Groove',
    description: 'Contanos sobre tus productos y recibí una propuesta. Imágenes profesionales sin estudio fotográfico, con entrega rápida.',
    keywords: 'formulario fotografía producto, cotización fotografía, fotos de producto sin estudio',
    type: 'website',
    image: DEFAULT_OG,
  },
  '/blog': {
    title: 'Blog · Diseño web, branding y tendencias | Groove',
    description: 'Artículos sobre diseño web, branding, estrategia y tendencias digitales. Consejos prácticos para hacer crecer tu negocio online.',
    keywords: 'blog diseño web, tips branding, tendencias digitales, estrategia digital, SEO para pymes',
    type: 'website',
    image: DEFAULT_OG,
  },
};

// Proyectos (/proyecto/:slug). Las imágenes con path /proj-*.webp se sirven del dominio;
// el resto usa la og-image por defecto.
export const PROJECTS = {
  'underground-book-gallery': {
    title: 'Underground Book Gallery',
    category: 'Branding',
    description: 'Identidad bold en blanco y negro para una galería de libros y arte independiente. Sistema gráfico crudo y editorial, de Groove.',
    image: `${SITE}/proj-underground-cover.webp`,
  },
  'isla-brew': {
    title: 'ISLA Brew',
    category: 'Branding',
    description: 'Marca de café de especialidad con un sistema de íconos propio. Identidad cálida, moderna y premium, de Groove.',
    image: `${SITE}/proj-isla-cover.webp`,
  },
  'fresca-branding': {
    title: 'Fresca',
    category: 'Branding + Estrategia',
    description: 'Identidad visual fresca y juvenil para destacar en góndola frente a marcas establecidas. Branding de Groove.',
    image: DEFAULT_OG,
  },
  'burger-rocket-branding': {
    title: 'Burger Rocket',
    category: 'Branding Fast-Food',
    description: 'Identidad escalable y consistente para una franquicia de hamburguesas en expansión. Branding de Groove.',
    image: DEFAULT_OG,
  },
  'academy-branding': {
    title: 'Coffee Academy',
    category: 'Branding Premium',
    description: 'Posicionamiento premium para una cafetería de especialidad. Identidad visual y estrategia de marca de Groove.',
    image: DEFAULT_OG,
  },
  'forza-branding': {
    title: 'Forza Co.',
    category: 'Branding Moda',
    description: 'Sistema visual audaz para una marca urbana que necesitaba diferenciarse. Branding de moda de Groove.',
    image: DEFAULT_OG,
  },
};
