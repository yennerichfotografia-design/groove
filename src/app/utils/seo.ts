export interface PageSEO {
    title: string;
    description: string;
    keywords: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

export const seoConfig: Record<string, PageSEO> = {
    home: {
        title: 'Groove - Diseño Web Premium, Branding y Fotografía IA | Resultados en Semanas',
        description: 'Diseño web de alto rendimiento y branding estratégico. Resultados de clase mundial en semanas, no meses. Trato directo con quien diseña y construye.',
        keywords: 'diseño web premium, branding estratégico, fotografía IA, desarrollo web, diseño UX UI, web high performance, branding Argentina',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    about: {
        title: 'Sobre Matías Yennerich | Partner Tecnológico en Diseño Web y Branding',
        description: 'Más de 50 proyectos entregados. Fusiono ingeniería de software con diseño de producto. Soluciones comerciales llave en mano que generan retorno desde el día 1.',
        keywords: 'diseñador web, branding estratégico, partner tecnológico, Matías Yennerich, diseño web Argentina',
        ogType: 'profile',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    method: {
        title: 'Método de Trabajo | Diseño + Tecnología + Criterio | Groove',
        description: 'Proceso claro: diseño en Figma, validación, desarrollo high-perf. IA como acelerador, criterio humano en cada decisión. Resultados en semanas.',
        keywords: 'método de trabajo, proceso diseño web, Figma, desarrollo web IA, vibe coding',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    faq: {
        title: 'Preguntas Frecuentes | Proceso, Plazos y Precios | Groove',
        description: 'Todo sobre el proceso de trabajo: plazos de 3-5 semanas, tecnología de Uber y Airbnb, trato directo sin intermediarios. Respuestas claras.',
        keywords: 'preguntas frecuentes diseño web, plazos branding, costos diseño web, proceso de trabajo',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    aiPhotography: {
        title: 'Fotografía de Producto con IA | Calidad Estudio, Cero Logística | Groove',
        description: 'Imágenes profesionales de producto generadas con IA. Calidad 4K fotorrealista, entrega en 48hs, sin estudio ni producción. Desde una foto de celular.',
        keywords: 'fotografía IA, fotografía producto, imágenes IA, fotografía sin estudio, fotografía e-commerce',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    brandingForm: {
        title: 'Empezá tu Proyecto de Branding | Groove',
        description: 'Completá el brief y recibí una propuesta personalizada en menos de 24hs. Branding estratégico que diferencia y vende más.',
        keywords: 'formulario branding, cotización branding, identidad de marca, diseño logo',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    webForm: {
        title: 'Empezá tu Proyecto Web | Groove',
        description: 'Completá el brief y recibí una cotización personalizada en menos de 24hs. Web high-performance que convierte visitantes en clientes.',
        keywords: 'formulario diseño web, cotización sitio web, desarrollo web, web high performance',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    aiPhotographyForm: {
        title: 'Solicitá Fotografía con IA | Groove',
        description: 'Completá el formulario con los datos de tu producto. Imágenes profesionales generadas con IA, entrega en 48hs.',
        keywords: 'formulario fotografía IA, cotización fotografía, imágenes producto IA',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    blog: {
        title: 'Blog | Diseño Web, Branding y Tendencias Digitales | Groove',
        description: 'Artículos sobre diseño web, branding, estrategia digital y tendencias. Consejos prácticos para hacer crecer tu negocio online.',
        keywords: 'blog diseño web, branding tips, tendencias digitales, estrategia digital, SEO',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    }
};

export function getSEOByRoute(pathname: string): PageSEO {
    if (pathname === '/' || pathname === '') return seoConfig.home;
    if (pathname === '/sobre-mi') return seoConfig.about;
    if (pathname === '/metodo') return seoConfig.method;
    if (pathname === '/preguntas-frecuentes') return seoConfig.faq;
    if (pathname === '/fotografia-ia') return seoConfig.aiPhotography;
    if (pathname === '/formulario-branding') return seoConfig.brandingForm;
    if (pathname === '/formulario-web') return seoConfig.webForm;
    if (pathname === '/formulario-fotografia-ia') return seoConfig.aiPhotographyForm;
    if (pathname === '/blog' || pathname.startsWith('/blog')) return seoConfig.blog;
    return seoConfig.home;
}
