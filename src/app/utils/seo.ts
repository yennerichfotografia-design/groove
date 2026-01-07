// SEO configuration and meta tags for all pages
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
        title: 'Groove - Diseño Web, Branding y Fotografía IA | Agencia Digital Creativa',
        description: 'Groove: Agencia digital experta en diseño web, branding e identidad de marca. Creamos experiencias digitales únicas con IA. ¡Conoce nuestros servicios!',
        keywords: 'diseño web, branding, identidad de marca, agencia digital, diseño gráfico, desarrollo web, marketing digital, vibe coding',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    about: {
        title: 'Sobre Mí - Matias Yennerich | Diseñador Web y Especialista en Branding',
        description: 'Conoce a Matias Yennerich, diseñador web y especialista en branding. Transformo ideas en experiencias digitales que conectan y convierten. ¡Hablemos!',
        keywords: 'diseñador web, especialista branding, experiencias digitales, Matias Yennerich, diseño web Argentina',
        ogType: 'profile',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    faq: {
        title: 'Preguntas Frecuentes - Diseño Web y Branding | Groove',
        description: '¿Dudas sobre diseño web o branding? Encuentra respuestas sobre proceso, plazos, costos y metodología de trabajo. Todo lo que necesitas saber aquí.',
        keywords: 'diseño web proceso, branding costos, preguntas frecuentes diseño, FAQ diseño web, metodología trabajo',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    aiPhotography: {
        title: 'Fotografía con IA - Imágenes Únicas para tu Marca | Groove',
        description: 'Fotografía profesional potenciada con IA. Crea imágenes únicas para marcas y productos sin sesión física. Innovación en fotografía comercial. ¡Descubre cómo!',
        keywords: 'fotografía IA, fotografía comercial, imágenes productos, inteligencia artificial fotografía, fotografía profesional',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    brandingForm: {
        title: 'Solicita tu Proyecto de Branding - Identidad Visual Única | Groove',
        description: 'Completa el formulario y cuéntanos sobre tu proyecto de branding. Te contactamos en 24hs para crear una identidad de marca memorable.',
        keywords: 'formulario branding, cotización branding, identidad de marca, diseño logo, branding startup',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    webForm: {
        title: 'Solicita tu Sitio Web - Diseño Web Profesional | Groove',
        description: 'Completa el formulario y cuéntanos sobre tu proyecto web. Sitios profesionales con Figma + IA + Vibe Coding. Respuesta en 24hs.',
        keywords: 'formulario diseño web, cotización sitio web, desarrollo web profesional, vibe coding, diseño web IA',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    aiPhotographyForm: {
        title: 'Solicita Fotografía con IA - Imágenes Personalizadas | Groove',
        description: 'Completa el formulario para tu proyecto de fotografía con IA. Imágenes únicas y profesionales generadas con inteligencia artificial.',
        keywords: 'formulario fotografía IA, cotización fotografía, imágenes IA, fotografía personalizada',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    },
    blog: {
        title: 'Blog - Diseño Web, Branding y Vibe Coding | Groove',
        description: 'Blog de diseño web, branding y tendencias digitales. Consejos prácticos, casos de estudio y guías para potenciar tu marca. Aprende con Groove.',
        keywords: 'blog diseño web, consejos branding, tendencias digitales, vibe coding, tutoriales diseño, guías branding',
        ogType: 'website',
        ogImage: 'https://groovedesign.com.ar/og-image.jpg'
    }
};

// Helper to get SEO config by route
export function getSEOByRoute(pathname: string): PageSEO {
    if (pathname === '/' || pathname === '') return seoConfig.home;
    if (pathname === '/sobre-mi') return seoConfig.about;
    if (pathname === '/preguntas-frecuentes') return seoConfig.faq;
    if (pathname === '/fotografia-ia') return seoConfig.aiPhotography;
    if (pathname === '/formulario-branding') return seoConfig.brandingForm;
    if (pathname === '/formulario-web') return seoConfig.webForm;
    if (pathname === '/formulario-fotografia-ia') return seoConfig.aiPhotographyForm;
    if (pathname === '/blog' || pathname.startsWith('/blog')) return seoConfig.blog;

    // Default fallback
    return seoConfig.home;
}
