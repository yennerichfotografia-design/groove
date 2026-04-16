import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { motion } from 'motion/react';
import { getPostBySlug, getAllPosts } from '../data/blogPosts';
import { RevealAnimation } from '../components/RevealAnimation';
import { SEO } from '../hooks/useSEO';
import { useLanguage } from '../contexts/LanguageContext';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { TableOfContents } from '../components/TableOfContents';

export function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const originalPost = slug ? getPostBySlug(slug) : undefined;
    const allPosts = getAllPosts();

    const getLocalizedPost = (p: any) => {
        if (!p) return undefined;
        if (language === 'en') {
            return { ...p, title: p.titleEn || p.title, excerpt: p.excerptEn || p.excerpt, content: p.contentEn || p.content, category: p.categoryEn || p.category, seo: p.seoEn || p.seo };
        }
        return p;
    };

    const post = getLocalizedPost(originalPost);

    useEffect(() => { window.scrollTo(0, 0); }, [slug]);

    if (!post) return <Navigate to="/blog" replace />;

    const relatedPosts = allPosts
        .filter(p => p.slug !== originalPost.slug && (p.category === originalPost.category || p.tags.some(tag => originalPost.tags.includes(tag))))
        .slice(0, 3);

    const t = language === 'es' ? {
        back: 'Volver al blog', by: 'Por', minRead: 'min de lectura', share: 'Compartir', related: 'Artículos Relacionados', readMore: 'Leer más'
    } : {
        back: 'Back to blog', by: 'By', minRead: 'min read', share: 'Share', related: 'Related Articles', readMore: 'Read more'
    };

    const sharePost = () => {
        if (navigator.share) {
            navigator.share({ title: post.title, text: post.excerpt, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    const getText = (children: any): string => {
        if (typeof children === 'string') return children;
        if (typeof children === 'number') return children.toString();
        if (Array.isArray(children)) return children.map(getText).join('');
        if (children?.props?.children) return getText(children.props.children);
        return '';
    };

    const generateId = (text: string) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

    return (
        <>
            <SEO title={post.seo.title} description={post.seo.description} keywords={post.seo.keywords} ogImage={`https://groovedesign.com.ar${post.featuredImage}`}>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org", "@type": "BlogPosting",
                        "headline": post.title, "description": post.excerpt,
                        "image": `https://groovedesign.com.ar${post.featuredImage}`,
                        "author": { "@type": "Person", "name": post.author },
                        "publisher": { "@type": "Organization", "name": "Groove", "logo": { "@type": "ImageObject", "url": "https://groovedesign.com.ar/og-image.jpg" } },
                        "datePublished": post.publishDate, "dateModified": post.publishDate,
                        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://groovedesign.com.ar/blog/${post.slug}` }
                    })}
                </script>
            </SEO>

            <ReadingProgressBar />

            <div className="min-h-screen bg-black text-white">
                {/* Hero */}
                <section className="relative">
                    <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
                        <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 lg:px-16 pb-12 sm:pb-16">
                        <div className="max-w-[1440px] mx-auto">
                            <RevealAnimation>
                                <Link to="/blog" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 text-sm">
                                    <ArrowLeft size={14} /> {t.back}
                                </Link>
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60">{post.category}</span>
                                    <span className="text-xs text-white/30">{post.readingTime} {t.minRead}</span>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-6xl max-w-4xl leading-tight tracking-tight font-medium">
                                    {post.title}
                                </h1>
                            </RevealAnimation>
                        </div>
                    </div>
                </section>

                {/* Meta bar */}
                <section className="border-b border-white/10">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-6">
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium" style={{ background: 'var(--groove-accent)', color: 'black' }}>
                                    {post.author.charAt(0)}
                                </div>
                                <span className="text-white/70">{post.author}</span>
                            </div>
                            <span className="text-white/20">|</span>
                            <time dateTime={post.publishDate} className="text-white/40">
                                {new Date(post.publishDate).toLocaleDateString(language === 'es' ? 'es-AR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                            <button onClick={sharePost} className="ml-auto flex items-center gap-2 text-white/40 hover:text-[var(--groove-accent)] transition-colors">
                                <Share2 size={14} /> {t.share}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-24">
                    <div className="lg:grid lg:grid-cols-12 gap-12">
                        <aside className="hidden lg:block lg:col-span-3 relative">
                            <TableOfContents content={post.content} />
                        </aside>

                        <article className="lg:col-span-8 lg:col-start-4">
                            <div className="prose prose-lg prose-invert max-w-none
                                prose-headings:text-white prose-headings:font-medium prose-headings:tracking-tight
                                prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-8
                                prose-h3:text-2xl prose-h3:mt-14 prose-h3:mb-5
                                prose-p:text-white/60 prose-p:leading-8 prose-p:mb-6
                                prose-a:text-[var(--groove-accent)] prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-white prose-strong:font-medium
                                prose-ul:my-8 prose-ol:my-8 prose-ul:space-y-2 prose-ol:space-y-2
                                prose-li:text-white/60
                                prose-blockquote:border-l-2 prose-blockquote:border-[var(--groove-accent)] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-12 prose-blockquote:text-xl prose-blockquote:text-white/80
                                prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-[var(--groove-accent)] prose-code:before:content-none prose-code:after:content-none
                                prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-10
                                prose-img:rounded-xl prose-img:my-12
                            ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        h2: ({ node, ...props }) => {
                                            const { ref, ...rest } = props;
                                            const id = generateId(getText(props.children));
                                            return <motion.h2 id={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} {...(rest as any)} />;
                                        },
                                        h3: ({ node, ...props }) => {
                                            const { ref, ...rest } = props;
                                            const id = generateId(getText(props.children));
                                            return <motion.h3 id={id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} {...(rest as any)} />;
                                        },
                                        p: ({ node, ...props }) => {
                                            const { ref, ...rest } = props;
                                            return <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4 }} {...(rest as any)} />;
                                        },
                                        blockquote: ({ node, ...props }) => {
                                            const { ref, ...rest } = props;
                                            return <motion.blockquote initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} {...(rest as any)} />;
                                        }
                                    }}
                                >
                                    {post.content.trim()}
                                </ReactMarkdown>
                            </div>

                            {/* Tags + Share */}
                            <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="text-xs text-white/40 border border-white/10 px-3 py-1.5 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <button onClick={sharePost} className="flex items-center gap-2 text-sm text-white/40 hover:text-[var(--groove-accent)] transition-colors">
                                    <Share2 size={14} /> {t.share}
                                </button>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-20 lg:py-28 border-t border-white/10">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <RevealAnimation>
                                <h2 className="text-3xl sm:text-4xl mb-12 tracking-tight font-medium">{t.related}</h2>
                            </RevealAnimation>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((originalRelatedPost, index) => {
                                    const relatedPost = getLocalizedPost(originalRelatedPost);
                                    return (
                                        <RevealAnimation key={relatedPost.slug} delay={index * 0.1}>
                                            <Link to={`/blog/${relatedPost.slug}`} className="group block">
                                                <div className="aspect-[4/3] mb-5 overflow-hidden rounded-xl">
                                                    <img src={relatedPost.featuredImage} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ transitionTimingFunction: 'var(--ease-out-strong)' }} />
                                                </div>
                                                <h3 className="text-xl mb-3 font-medium group-hover:text-[var(--groove-accent)] transition-colors tracking-tight">{relatedPost.title}</h3>
                                                <p className="text-white/40 text-sm line-clamp-2">{relatedPost.excerpt}</p>
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
