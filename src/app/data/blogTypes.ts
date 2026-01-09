export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishDate: string;
    readingTime: number; // in minutes
    category: string;
    tags: string[];
    featuredImage: string;
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
    // English Content
    titleEn?: string;
    excerptEn?: string;
    contentEn?: string;
    categoryEn?: string;
    seoEn?: {
        title: string;
        description: string;
        keywords: string;
    };
}

export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
}

export const blogCategories: BlogCategory[] = [
    { id: '1', name: 'Tecnología', slug: 'tecnologia' },
    { id: '2', name: 'Diseño Web', slug: 'diseno-web' },
    { id: '3', name: 'Branding', slug: 'branding' },
    { id: '4', name: 'IA y Desarrollo', slug: 'ia-desarrollo' },
    { id: '5', name: 'Marketing Digital', slug: 'marketing-digital' }
];
