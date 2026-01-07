import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Clock, Calendar, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { motion } from 'motion/react';
import { getPostBySlug, getAllPosts } from '../data/blogPosts';
import { RevealAnimation } from '../components/RevealAnimation';
import { SEO } from '../hooks/useSEO';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;
    const allPosts = getAllPosts();
    const { language } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const relatedPosts = allPosts
        .filter(p => p.slug !== post.slug && (
            p.category === post.category ||
            p.tags.some(tag => post.tags.includes(tag))
        ))
        .slice(0, 3);

    const content = {
        es: {
            backToBlog: 'Volver al blog',
            by: 'Por',
            minRead: 'min de lectura',
            share: 'Compartir',
            relatedPosts: 'Artículos Relacionados',
            readMore: 'Leer más'
        },
        en: {
            backToBlog: 'Back to blog',
            by: 'By',
            minRead: 'min read',
            share: 'Share',
            relatedPosts: 'Related Articles',
            readMore: 'Read more'
        }
    };

    const t = content[language];

    const sharePost = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copiado al portapapeles');
        }
    };

    return (
        <>
            <SEO
                title={post.seo.title}
                description={post.seo.description}
                keywords={post.seo.keywords}
                ogImage={`https://groovedesign.com.ar${post.featuredImage}`}
            >
                {/* Blog Posting Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "image": `https://groovedesign.com.ar${post.featuredImage}`,
                        "author": {
                            "@type": "Person",
                            "name": post.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Groove",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://groovedesign.com.ar/og-image.jpg"
                            }
                        },
                        "datePublished": post.publishDate,
                        "dateModified": post.publishDate,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://groovedesign.com.ar/blog/${post.slug}`
                        }
                    })}
                </script>
            </SEO>

            <div className="min-h-screen bg-white">
                {/* Header */}
                <section className="py-12 lg:py-16 border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">
                        <RevealAnimation>
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                {t.backToBlog}
                            </Link>

                            <div className="mb-6">
                                <span className="text-sm text-gray-500 uppercase tracking-wide">
                                    {post.category}
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-8">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">{t.by} {post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.publishDate} className="text-sm">
                                        {new Date(post.publishDate).toLocaleDateString('es-AR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">{post.readingTime} {t.minRead}</span>
                                </div>
                                <button
                                    onClick={sharePost}
                                    className="flex items-center gap-2 hover:text-black transition-colors"
                                >
                                    <Share2 className="w-4 h-4" />
                                    <span className="text-sm">{t.share}</span>
                                </button>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </RevealAnimation>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="relative">
                    <div className="w-full h-[400px] lg:h-[500px] overflow-hidden">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Content */}
                <article className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-8">
                        {/* Prose content with enhanced styling */}
                        <div className="prose prose-lg max-w-none
                            prose-headings:font-normal prose-headings:tracking-tight prose-headings:scroll-mt-20
                            prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-16
                            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-200
                            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-gray-900
                            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                            prose-a:text-black prose-a:underline prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:text-gray-600 prose-a:transition-colors
                            prose-strong:text-black prose-strong:font-semibold
                            prose-ul:my-8 prose-ol:my-8 prose-ul:space-y-3 prose-ol:space-y-3
                            prose-li:text-gray-700 prose-li:text-lg prose-li:leading-relaxed
                            prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:text-xl prose-blockquote:font-light prose-blockquote:text-gray-900
                            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-['']
                            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-6 prose-pre:my-8
                            prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:shadow-sm
                            prose-th:border prose-th:border-gray-300 prose-th:p-4 prose-th:bg-gray-50 prose-th:font-semibold prose-th:text-left
                            prose-td:border prose-td:border-gray-300 prose-td:p-4 prose-td:text-gray-700
                            
                            /* Drop cap for first paragraph */
                            [&>p:first-of-type]:first-letter:text-6xl
                            [&>p:first-of-type]:first-letter:font-bold
                            [&>p:first-of-type]:first-letter:float-left
                            [&>p:first-of-type]:first-letter:mr-3
                            [&>p:first-of-type]:first-letter:mt-1
                            [&>p:first-of-type]:first-letter:leading-none
                        ">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    // Custom rendering for better visual hierarchy
                                    h2: ({ node, ...props }) => (
                                        <motion.h2
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6 }}
                                            {...props}
                                        />
                                    ),
                                    h3: ({ node, ...props }) => (
                                        <motion.h3
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5 }}
                                            {...props}
                                        />
                                    ),
                                    p: ({ node, ...props }) => (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.4 }}
                                            {...props}
                                        />
                                    ),
                                    ul: ({ node, ...props }) => (
                                        <motion.ul
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            {...props}
                                        />
                                    ),
                                    ol: ({ node, ...props }) => (
                                        <motion.ol
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            {...props}
                                        />
                                    ),
                                    table: ({ node, ...props }) => (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className="overflow-x-auto"
                                        >
                                            <table {...props} />
                                        </motion.div>
                                    ),
                                    blockquote: ({ node, ...props }) => (
                                        <motion.blockquote
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                            {...props}
                                        />
                                    ),
                                }}
                            >
                                {post.content.trim()}
                            </ReactMarkdown>
                        </div>

                        {/* Visual break / decorative element */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-24 h-1 bg-gradient-to-r from-black to-gray-400 mx-auto my-16"
                        />
                    </div>
                </article>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <RevealAnimation>
                                <h2 className="text-3xl sm:text-4xl mb-12">{t.relatedPosts}</h2>
                            </RevealAnimation>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((relatedPost, index) => (
                                    <RevealAnimation key={relatedPost.slug} delay={index * 0.1}>
                                        <Link
                                            to={`/blog/${relatedPost.slug}`}
                                            className="group block"
                                        >
                                            <article>
                                                <div className="aspect-[16/10] bg-gray-200 mb-4 overflow-hidden">
                                                    <img
                                                        src={relatedPost.featuredImage}
                                                        alt={relatedPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h3 className="text-xl mb-3 group-hover:text-gray-600 transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                                    {relatedPost.excerpt}
                                                </p>
                                                <span className="text-black group-hover:underline inline-flex items-center gap-2">
                                                    {t.readMore}
                                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                </span>
                                            </article>
                                        </Link>
                                    </RevealAnimation>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
