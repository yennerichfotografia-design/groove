import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Clock, Calendar, Tag } from 'lucide-react';
import { getAllPosts } from '../data/blogPosts';
import { blogCategories } from '../data/blogTypes';
import { RevealAnimation } from '../components/RevealAnimation';
import { SEO } from '../hooks/useSEO';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogListPage() {
    const posts = getAllPosts();
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        es: {
            title: 'Blog',
            subtitle: 'Diseño web, branding, Vibe Coding y tendencias digitales. Aprende, inspírate y potencia tu marca.',
            allCategories: 'Todas las categorías',
            readMore: 'Leer más',
            minRead: 'min de lectura'
        },
        en: {
            title: 'Blog',
            subtitle: 'Web design, branding, Vibe Coding and digital trends. Learn, get inspired and boost your brand.',
            allCategories: 'All categories',
            readMore: 'Read more',
            minRead: 'min read'
        }
    };

    const t = content[language];

    return (
        <>
            <SEO />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-gray-50 py-20 lg:py-32">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                        <RevealAnimation>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
                                {t.title}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl">
                                {t.subtitle}
                            </p>
                        </RevealAnimation>
                    </div>
                </section>

                {/* Blog Posts Grid */}
                <section className="py-16 lg:py-24">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {posts.map((post, index) => (
                                <RevealAnimation key={post.slug} delay={index * 0.1}>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="group block"
                                    >
                                        <article className="h-full flex flex-col">
                                            {/* Featured Image */}
                                            <div className="aspect-[16/10] bg-gray-100 mb-6 overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500" />
                                            </div>

                                            {/* Category */}
                                            <div className="flex items-center gap-2 mb-3">
                                                <Tag className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-500 uppercase tracking-wide">
                                                    {post.category}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-2xl sm:text-3xl mb-4 group-hover:text-gray-600 transition-colors">
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p className="text-gray-600 mb-6 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta Information */}
                                            <div className="mt-auto flex items-center gap-6 text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <time dateTime={post.publishDate}>
                                                        {new Date(post.publishDate).toLocaleDateString('es-AR', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </time>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{post.readingTime} {t.minRead}</span>
                                                </div>
                                            </div>

                                            {/* Read More Link */}
                                            <div className="mt-6">
                                                <span className="text-black group-hover:underline inline-flex items-center gap-2">
                                                    {t.readMore}
                                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                </RevealAnimation>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
