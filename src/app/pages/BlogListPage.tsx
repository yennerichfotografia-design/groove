import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '../data/blogPosts';
import { RevealAnimation } from '../components/RevealAnimation';
import { SEO } from '../hooks/useSEO';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogListPage() {
    const allPosts = getAllPosts();
    const featuredPost = allPosts[0];
    const otherPosts = allPosts.slice(1);
    const { language } = useLanguage();

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const t = language === 'es' ? {
        title: 'Blog',
        subtitle: 'Diseño web, branding y tendencias digitales.',
        readMore: 'Leer artículo',
        latest: 'Último'
    } : {
        title: 'Blog',
        subtitle: 'Web design, branding and digital trends.',
        readMore: 'Read article',
        latest: 'Latest'
    };

    const getLocalizedPost = (post: any) => {
        if (!post) return null;
        if (language === 'en') {
            return { ...post, title: post.titleEn || post.title, excerpt: post.excerptEn || post.excerpt, category: post.categoryEn || post.category };
        }
        return post;
    };

    const featuredPostContent = getLocalizedPost(featuredPost);

    return (
        <>
            <SEO />
            <div className="min-h-screen bg-black text-white">
                {/* Hero */}
                <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 noise-bg">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                        <RevealAnimation>
                            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Blog</p>
                            <h1 className="text-5xl sm:text-6xl lg:text-8xl mb-6 tracking-tighter font-medium">
                                {t.title}
                            </h1>
                            <p className="text-xl text-white/50 max-w-xl">
                                {t.subtitle}
                            </p>
                        </RevealAnimation>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="pb-16 lg:pb-24">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <RevealAnimation>
                                <Link to={`/blog/${featuredPost.slug}`} className="group block">
                                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                        <div className="lg:col-span-7 aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl relative">
                                            <div className="absolute top-4 left-4 z-10 text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: 'var(--groove-accent)', color: 'black' }}>
                                                {t.latest}
                                            </div>
                                            <img
                                                src={featuredPost.featuredImage}
                                                alt={featuredPost.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
                                            />
                                        </div>
                                        <div className="lg:col-span-5">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60">
                                                    {featuredPostContent.category}
                                                </span>
                                                <span className="text-xs text-white/30">
                                                    {featuredPostContent.readingTime} min
                                                </span>
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 font-medium group-hover:text-[var(--groove-accent)] transition-colors tracking-tight">
                                                {featuredPostContent.title}
                                            </h2>
                                            <p className="text-white/50 mb-8 line-clamp-3 leading-relaxed">
                                                {featuredPostContent.excerpt}
                                            </p>
                                            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--groove-accent)]">
                                                {t.readMore} <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </RevealAnimation>
                        </div>
                    </section>
                )}

                {/* Other Posts */}
                {otherPosts.length > 0 && (
                    <section className="pb-24 lg:pb-32 border-t border-white/10 pt-16">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {otherPosts.map((originalPost, index) => {
                                    const post = getLocalizedPost(originalPost);
                                    return (
                                        <RevealAnimation key={post.slug} delay={index * 0.1}>
                                            <Link to={`/blog/${post.slug}`} className="group block h-full">
                                                <article className="h-full flex flex-col">
                                                    <div className="aspect-[4/3] mb-6 overflow-hidden rounded-xl relative">
                                                        <img
                                                            src={post.featuredImage}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                            style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <span className="text-xs text-white/40">{post.category}</span>
                                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                                        <span className="text-xs text-white/30">{post.readingTime} min</span>
                                                    </div>
                                                    <h2 className="text-xl lg:text-2xl leading-tight mb-3 font-medium group-hover:text-[var(--groove-accent)] transition-colors tracking-tight">
                                                        {post.title}
                                                    </h2>
                                                    <p className="text-white/40 mb-6 line-clamp-2 text-sm leading-relaxed">
                                                        {post.excerpt}
                                                    </p>
                                                    <div className="mt-auto pt-5 border-t border-white/10 flex items-center justify-between">
                                                        <time dateTime={post.publishDate} className="text-xs text-white/30">
                                                            {new Date(post.publishDate).toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                        </time>
                                                        <ArrowRight size={14} className="text-white/20 group-hover:text-[var(--groove-accent)] transition-colors" />
                                                    </div>
                                                </article>
                                            </Link>
                                        </RevealAnimation>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
