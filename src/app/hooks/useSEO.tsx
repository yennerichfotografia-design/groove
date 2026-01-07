import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getSEOByRoute, type PageSEO } from '../utils/seo';

interface UseSEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonical?: string;
}

export function useSEO(customSEO?: UseSEOProps) {
    const location = useLocation();
    const defaultSEO = getSEOByRoute(location.pathname);

    const seo: PageSEO = {
        title: customSEO?.title || defaultSEO.title,
        description: customSEO?.description || defaultSEO.description,
        keywords: customSEO?.keywords || defaultSEO.keywords,
        canonical: customSEO?.canonical || `https://groovedesign.com.ar${location.pathname}`,
        ogImage: customSEO?.ogImage || defaultSEO.ogImage,
        ogType: customSEO?.ogType || defaultSEO.ogType || 'website'
    };

    return seo;
}

interface SEOProps extends UseSEOProps {
    children?: React.ReactNode;
}

export function SEO({ children, ...customSEO }: SEOProps) {
    const seo = useSEO(customSEO);

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <link rel="canonical" href={seo.canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.ogType} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.ogImage} />
            <meta property="og:locale" content="es_AR" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seo.canonical} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.ogImage} />

            {children}
        </Helmet>
    );
}
