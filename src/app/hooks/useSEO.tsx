import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getSEOByRoute, type PageSEO, SITE_NAME, TWITTER_HANDLE } from '../utils/seo';

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
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={seo.canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={seo.ogType} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.ogImage} />
            <meta property="og:image:alt" content={seo.title} />
            <meta property="og:locale" content="es_AR" />
            <meta property="og:locale:alternate" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={TWITTER_HANDLE} />
            <meta name="twitter:url" content={seo.canonical} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.ogImage} />
            <meta name="twitter:image:alt" content={seo.title} />

            {children}
        </Helmet>
    );
}
