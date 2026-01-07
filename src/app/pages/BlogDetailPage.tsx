import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
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

    // Helper to extract text from React children
    const getText = (children: any): string => {
        if (typeof children === 'string') return children;
        if (typeof children === 'number') return children.toString();
        if (Array.isArray(children)) return children.map(getText).join('');
        if (children?.props?.children) return getText(children.props.children);
        return '';
    };

    // Helper to generate IDs for headings
    const generateId = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-');
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

            <ReadingProgressBar />

            <div className="min-h-screen bg-white">
                {/* Header */}
                <section className="pt-32 pb-8 lg:pt-48 lg:pb-12 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                        <RevealAnimation>
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors mb-12 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
                                {t.backToBlog}
                            </Link>

                            <div className="max-w-4xl">
                                <div className="mb-8">
                                    <span className="text-xs font-medium uppercase tracking-widest text-gray-400 border border-gray-100 px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 text-gray-500 py-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-black">
                                            {post.author.charAt(0)}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-black">{post.author}</span>
                                            <span className="text-xs text-gray-400">Author</span>
                                        </div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-100 mx-2"></div>
                                    <div className="flex flex-col">
                                        <time dateTime={post.publishDate} className="text-sm font-medium text-black">
                                            {new Date(post.publishDate).toLocaleDateString('es-AR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                        <span className="text-xs text-gray-400">Published</span>
                                    </div>
                                    <div className="w-px h-8 bg-gray-100 mx-2"></div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-black flex items-center gap-2">
                                            <Clock className="w-4 h-4" strokeWidth={1.5} />
                                            {post.readingTime} {t.minRead}
                                        </span>
                                        <span className="text-xs text-gray-400">Read time</span>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>
                    </div>
                </section>

                {/* Featured Image */}
                <section className="relative px-4 sm:px-8 lg:px-16 max-w-[1440px] mx-auto mb-16 lg:mb-24">
                    <div className="aspect-[21/9] overflow-hidden rounded-sm bg-gray-50">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                {/* Content Layout */}
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pb-32">
                    <div className="lg:grid lg:grid-cols-12 gap-12">
                        {/* Sidebar / TOC */}
                        <aside className="hidden lg:block lg:col-span-3 relative">
                            <TableOfContents content={post.content} />
                        </aside>

                        {/* Main Content */}
                        <article className="lg:col-span-8 lg:col-start-4">
                            <div className="prose prose-lg prose-gray max-w-none
                                prose-headings:text-black
                                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-16
                                prose-h2:text-3xl prose-h2:mt-24 prose-h2:mb-8
                                prose-h3:text-2xl prose-h3:mt-16 prose-h3:mb-6
                                prose-p:text-gray-600 prose-p:leading-loose prose-p:mb-8 prose-p:text-[1.125rem]
                                prose-a:text-black prose-a:underline prose-a:decoration-1 prose-a:underline-offset-4 hover:prose-a:text-gray-600 prose-a:transition-colors
                                prose-strong:text-black prose-strong:font-medium
                                prose-ul:my-10 prose-ol:my-10 prose-ul:space-y-4 prose-ol:space-y-4
                                prose-li:text-gray-600
                                prose-blockquote:border-l-2 prose-blockquote:border-black prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:my-16 prose-blockquote:text-2xl prose-blockquote:text-black prose-blockquote:leading-relaxed
                                prose-code:bg-gray-50 prose-code:px-2 prose-code:py-1 prose-code:rounded-sm prose-code:text-sm prose-code:text-gray-800 prose-code:before:content-none prose-code:after:content-none
                                prose-pre:bg-gray-900 prose-pre:text-gray-200 prose-pre:rounded-sm prose-pre:p-8 prose-pre:my-12 prose-pre:shadow-xl
                                prose-img:rounded-sm prose-img:my-12 prose-img:shadow-sm
                                
                                /* Drop cap for first paragraph */
                                [&>p:first-of-type]:first-letter:text-5xl
                                [&>p:first-of-type]:first-letter:float-left
                                [&>p:first-of-type]:first-letter:mr-4
                                [&>p:first-of-type]:first-letter:mt-1
                                [&>p:first-of-type]:first-letter:leading-none
                            ">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        h2: ({ node, ...props }) => {
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            const { ref, ...rest } = props;
                                            const text = getText(props.children);
                                            const id = generateId(text);
                                            return (
                                                <motion.h2
                                                    id={id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 0.6 }}
                                                    {...(rest as any)}
                                                />
                                            );
                                        },
                                        h3: ({ node, ...props }) => {
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            const { ref, ...rest } = props;
                                            const text = getText(props.children);
                                            const id = generateId(text);
                                            return (
                                                <motion.h3
                                                    id={id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 0.6 }}
                                                    {...(rest as any)}
                                                />
                                            );
                                        },
                                        p: ({ node, ...props }) => {
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            const { ref, ...rest } = props;
                                            return (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ duration: 0.4 }}
                                                    {...(rest as any)}
                                                />
                                            );
                                        },
                                        blockquote: ({ node, ...props }) => {
                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            const { ref, ...rest } = props;
                                            return (
                                                <motion.blockquote
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6 }}
                                                    {...(rest as any)}
                                                />
                                            );
                                        }
                                    }}
                                >
                                    {post.content.trim()}
                                </ReactMarkdown>
                            </div>

                            {/* Share section */}
                            <div className="mt-20 pt-8 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs text-gray-400 border border-gray-100 px-3 py-1 rounded-full uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={sharePost}
                                    className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
                                >
                                    <Share2 className="w-4 h-4" strokeWidth={1.5} />
                                    <span className="uppercase tracking-widest">{t.share}</span>
                                </button>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="py-24 bg-gray-50">
                        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                            <RevealAnimation>
                                <h2 className="text-2xl mb-12">{t.relatedPosts}</h2>
                            </RevealAnimation>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                                {relatedPosts.map((relatedPost, index) => (
                                    <RevealAnimation key={relatedPost.slug} delay={index * 0.1}>
                                        <Link
                                            to={`/blog/${relatedPost.slug}`}
                                            className="group block h-full"
                                        >
                                            <article className="h-full flex flex-col">
                                                <div className="aspect-[4/3] bg-gray-200 mb-6 overflow-hidden rounded-sm">
                                                    <img
                                                        src={relatedPost.featuredImage}
                                                        alt={relatedPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                    />
                                                </div>
                                                <h3 className="text-xl mb-3 leading-tight group-hover:text-gray-600 transition-colors">
                                                    {relatedPost.title}
                                                </h3>
                                                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                                                    {relatedPost.excerpt}
                                                </p>
                                                <div className="mt-auto">
                                                    <span className="text-xs font-medium uppercase tracking-widest text-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                                                        {t.readMore} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                                                    </span>
                                                </div>
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
