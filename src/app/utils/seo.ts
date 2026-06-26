export interface PageSEO {
    title: string;
    description: string;
    keywords: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

/** Canonical site origin — single source of truth. */
export const SITE_URL = 'https://groovedesign.com.ar';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_NAME = 'Groove';
export const TWITTER_HANDLE = '@gdstudio.ar';

export const seoConfig: Record<string, PageSEO> = {
    home: {
        title: 'Groove · Diseño Web y Branding Premium | Paraná, Argentina',
        description: 'Estudio creativo de Argentina para el mundo. Diseñamos branding premium, webs y apps ultrarrápidas que hacen crecer tu negocio. Trato directo con quienes lo construyen.',
        keywords: 'diseño web Paraná, branding Argentina, diseño web premium, desarrollo web a medida, apps y SaaS, diseño UX UI, estudio creativo, branding estratégico, agencia digital Paraná',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    about: {
        title: 'Sobre nosotros · Matt & Fide | Estudio Groove',
        description: 'Somos Matt y Fide, los dos socios detrás de Groove. Branding, web y producto sin agencias ni intermediarios: hablás directo con quienes diseñan y construyen tu proyecto.',
        keywords: 'sobre Groove, Matt y Fide, estudio de diseño Paraná, equipo de diseño web, branding y desarrollo',
        ogType: 'profile',
        ogImage: DEFAULT_OG_IMAGE,
    },
    method: {
        title: 'Cómo trabajamos · El método de Groove',
        description: 'Proceso claro y rápido: estrategia, diseño y desarrollo high-performance. Entregamos en 3 a 5 semanas, con criterio humano en cada decisión y trato directo.',
        keywords: 'método de trabajo, proceso de diseño web, cómo trabajamos, desarrollo web rápido, branding proceso',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    faq: {
        title: 'Preguntas frecuentes · Plazos, proceso y precios | Groove',
        description: 'Todo sobre cómo trabajamos: plazos de 3 a 5 semanas, trato directo sin intermediarios, tecnología de primer nivel. Respuestas claras antes de empezar.',
        keywords: 'preguntas frecuentes diseño web, plazos branding, precios diseño web, proceso de trabajo Groove',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    brief: {
        title: 'Armá tu proyecto · Branding, Web, Apps, Foto y Reels | Groove',
        description: 'Elegí los servicios que necesitás y armá tu proyecto a medida. Te respondemos con una propuesta personalizada. Sin precios ocultos: arrancamos con una charla.',
        keywords: 'armar proyecto web, cotización diseño web, presupuesto branding, contratar diseño web Argentina',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    aiPhotography: {
        title: 'Fotografía de productos sin estudio | Groove',
        description: 'Fotos realistas de prendas y productos sin necesidad de estudio fotográfico. Calidad profesional para indumentaria y e-commerce, con entrega rápida.',
        keywords: 'fotografía de producto, fotos sin estudio, fotografía e-commerce, fotos de indumentaria, fotografía realista',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    brandingForm: {
        title: 'Empezá tu proyecto de Branding | Groove',
        description: 'Contanos sobre tu marca y recibí una propuesta personalizada. Branding estratégico que te diferencia y te ayuda a vender más.',
        keywords: 'formulario branding, cotización branding, identidad de marca, diseño de logo, manual de marca',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    webForm: {
        title: 'Empezá tu proyecto Web | Groove',
        description: 'Contanos sobre tu proyecto y recibí una propuesta personalizada. Webs high-performance que convierten visitantes en clientes.',
        keywords: 'formulario diseño web, cotización sitio web, desarrollo web, web rápida, diseño web a medida',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    aiPhotographyForm: {
        title: 'Solicitá fotografía de productos | Groove',
        description: 'Contanos sobre tus productos y recibí una propuesta. Imágenes profesionales sin estudio fotográfico, con entrega rápida.',
        keywords: 'formulario fotografía producto, cotización fotografía, fotos de producto sin estudio',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
    blog: {
        title: 'Blog · Diseño web, branding y tendencias | Groove',
        description: 'Artículos sobre diseño web, branding, estrategia y tendencias digitales. Consejos prácticos para hacer crecer tu negocio online.',
        keywords: 'blog diseño web, tips branding, tendencias digitales, estrategia digital, SEO para pymes',
        ogType: 'website',
        ogImage: DEFAULT_OG_IMAGE,
    },
};

export function getSEOByRoute(pathname: string): PageSEO {
    if (pathname === '/' || pathname === '') return seoConfig.home;
    if (pathname === '/sobre-mi') return seoConfig.about;
    if (pathname === '/metodo') return seoConfig.method;
    if (pathname === '/preguntas-frecuentes') return seoConfig.faq;
    if (pathname === '/brief') return seoConfig.brief;
    if (pathname === '/fotografia-ia') return seoConfig.aiPhotography;
    if (pathname === '/formulario-branding') return seoConfig.brandingForm;
    if (pathname === '/formulario-web') return seoConfig.webForm;
    if (pathname === '/formulario-fotografia-ia') return seoConfig.aiPhotographyForm;
    if (pathname === '/blog' || pathname.startsWith('/blog')) return seoConfig.blog;
    return seoConfig.home;
}

/** Build SEO for a project detail page from its data. */
export function getProjectSEO(opts: {
    slug: string;
    title: string;
    category: string;
    description?: string;
    image?: string;
}): PageSEO {
    let ogImage = DEFAULT_OG_IMAGE;
    if (opts.image) {
        if (opts.image.startsWith('http')) ogImage = opts.image;
        else if (opts.image.startsWith('/')) ogImage = `${SITE_URL}${opts.image}`;
    }
    return {
        title: `${opts.title} · ${opts.category} | Proyectos Groove`,
        description:
            opts.description ||
            `${opts.title}: proyecto de ${opts.category.toLowerCase()} de Groove. Branding y diseño premium con resultados reales.`,
        keywords: `${opts.title}, ${opts.category}, portfolio Groove, proyecto de branding, caso de éxito diseño`,
        ogType: 'article',
        ogImage,
        canonical: `${SITE_URL}/proyecto/${opts.slug}`,
    };
}
