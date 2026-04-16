import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TableOfContentsProps {
    content: string;
}

interface Heading {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents({ content }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const lines = content.split('\n');
        const extractedHeadings: Heading[] = [];

        lines.forEach((line) => {
            const match = line.match(/^(#{2,3})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const text = match[2].replace(/<[^>]*>/g, '').trim();
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                extractedHeadings.push({ id, text, level });
            }
        });

        setHeadings(extractedHeadings);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66%' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToHeading = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop - 120, behavior: 'smooth' });
            setActiveId(id);
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-32 self-start w-64 max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
                Contenido
            </h4>
            <ul className="space-y-3">
                {headings.map((heading) => (
                    <li key={heading.id} className={`${heading.level === 3 ? 'pl-4' : ''} relative`}>
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => scrollToHeading(heading.id, e)}
                            className={`text-sm block transition-colors duration-200 ${
                                activeId === heading.id
                                    ? 'text-[var(--groove-accent)] font-medium'
                                    : 'text-white/40 hover:text-[var(--groove-accent)]'
                            }`}
                        >
                            {activeId === heading.id && (
                                <motion.span
                                    layoutId="toc-indicator"
                                    className="absolute left-0 w-[2px] h-4 -ml-4"
                                    style={{ background: 'var(--groove-accent)' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
