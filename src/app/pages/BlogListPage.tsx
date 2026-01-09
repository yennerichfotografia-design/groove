import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '../data/blogPosts';
import { blogCategories } from '../data/blogTypes';
import { RevealAnimation } from '../components/RevealAnimation';
import { SEO } from '../hooks/useSEO';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogListPage() {
    const allPosts = getAllPosts();
    const featuredPost = allPosts[0];
    const otherPosts = allPosts.slice(1);
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const content = {
        es: {
            title: 'Blog',
            subtitle: 'Diseño web, branding, Vibe Coding y tendencias digitales. Aprende, inspírate y potencia tu marca.',
            allCategories: 'Todas las categorías',
            readMore: 'Leer artículo',
            latest: 'Último lanzamiento'
        },
        en: {
            title: 'Blog',
            subtitle: 'Web design, branding, Vibe Coding and digital trends. Learn, get inspired and boost your brand.',
            allCategories: 'All categories',
            readMore: 'Read article',
            latest: 'Latest release'
        }
    };

    const t = content[language];

    const getLocalizedPost = (post: any) => {
        if (!post) return null;
        if (language === 'en') {
            return {
                ...post,
                title: post.titleEn || post.title,
                excerpt: post.excerptEn || post.excerpt,
                category: post.categoryEn || post.category
            };
        }
        return post;
    };

    const featuredPostContent = getLocalizedPost(featuredPost);

    return (
        <>
            <SEO />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-white pt-32 pb-20 lg:pt-48 lg:pb-32">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                        <RevealAnimation>
                            <h1 className="text-6xl sm:text-7xl lg:text-9xl mb-8 tracking-tighter">
                                {t.title}
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light">
                                {t.subtitle}
                            </p>
                        </RevealAnimation>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="pb-24 lg:pb-32">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <RevealAnimation>
                                <Link to={`/blog/${featuredPost.slug}`} className="group block">
                                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                                        <div className="lg:col-span-7 aspect-[16/10] bg-gray-50 overflow-hidden rounded-sm relative">
                                            <div className="absolute top-6 left-6 z-10 bg-white text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                                                {t.latest}
                                            </div>
                                            <img
                                                src={featuredPost.featuredImage}
                                                alt={featuredPost.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </div>
                                        <div className="lg:col-span-5 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-8">
                                                <span className="text-xs font-medium uppercase tracking-widest text-black border border-gray-200 px-3 py-1 rounded-full">
                                                    {featuredPostContent.category}
                                                </span>
                                                <span className="text-xs text-gray-400 font-medium">
                                                    {featuredPostContent.readingTime} min
                                                </span>
                                            </div>
                                            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8 font-medium group-hover:text-gray-600 transition-colors tracking-tight">
                                                {featuredPostContent.title}
                                            </h2>
                                            <p className="text-lg text-gray-500 mb-10 line-clamp-3 leading-relaxed">
                                                {featuredPostContent.excerpt}
                                            </p>
                                            <span className="text-sm font-bold text-black group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2 uppercase tracking-widest">
                                                {t.readMore} <ArrowRight className="w-4 h-4" strokeWidth={2} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </RevealAnimation>
                        </div>
                    </section>
                )}

                {/* Other Posts Grid */}
                {otherPosts.length > 0 && (
                    <section className="pb-32 lg:pb-40 border-t border-gray-100 pt-24">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                                {otherPosts.map((originalPost, index) => {
                                    const post = getLocalizedPost(originalPost);
                                    return (
                                        <RevealAnimation key={post.slug} delay={index * 0.1}>
                                            <Link
                                                to={`/blog/${post.slug}`}
                                                className="group block h-full"
                                            >
                                                <article className="h-full flex flex-col">
                                                    {/* Featured Image */}
                                                    <div className="aspect-[4/3] bg-gray-50 mb-8 overflow-hidden rounded-sm relative">
                                                        <img
                                                            src={post.featuredImage}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                        />
                                                    </div>

                                                    {/* Category */}
                                                    <div className="flex items-center gap-3 mb-5">
                                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-900">
                                                            {post.category}
                                                        </span>
                                                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                        <span className="text-xs text-gray-400 font-medium">
                                                            {post.readingTime} min
                                                        </span>
                                                    </div>

                                                    {/* Title */}
                                                    <h2 className="text-2xl lg:text-3xl leading-tight mb-4 font-medium group-hover:text-gray-600 transition-colors tracking-tight">
                                                        {post.title}
                                                    </h2>

                                                    {/* Excerpt */}
                                                    <p className="text-gray-500 mb-8 line-clamp-3 leading-relaxed text-base font-light">
                                                        {post.excerpt}
                                                    </p>

                                                    {/* Meta Information */}
                                                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-6">
                                                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                                                            <time dateTime={post.publishDate}>
                                                                {new Date(post.publishDate).toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })}
                                                            </time>
                                                        </div>

                                                        <span className="text-xs font-bold text-black group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-2 uppercase tracking-widest">
                                                            <ArrowRight className="w-4 h-4" strokeWidth={2} />
                                                        </span>
                                                    </div>
                                                </article>
                                            </Link>
                                        </RevealAnimation>
                                    );
                                })}
                            </div>
                        </div >
                    </section >
                )
                }
            </div >
        </>
    );
}
