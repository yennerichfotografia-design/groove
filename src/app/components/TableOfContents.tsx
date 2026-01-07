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
        // Extract headings from markdown
        const lines = content.split('\n');
        const extractedHeadings: Heading[] = [];

        lines.forEach((line) => {
            const match = line.match(/^(#{2,3})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                // Strip HTML tags from text
                const cleanText = match[2].replace(/<[^>]*>/g, '').trim();

                // Keep original text for rendering if needed, but for TOC usually we want clean text
                const text = cleanText;

                // Create a slug from text
                const id = text
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-');

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
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    const scrollToHeading = (id: string, e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120, // Offset for header + padding
                behavior: 'smooth'
            });
            setActiveId(id);
        }
    };

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-32 self-start w-64 max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                Contenido
            </h4>
            <ul className="space-y-3">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={`${heading.level === 3 ? 'pl-4' : ''}`}
                    >
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => scrollToHeading(heading.id, e)}
                            className={`
                                text-sm block transition-colors duration-200
                                ${activeId === heading.id
                                    ? 'text-black font-medium'
                                    : 'text-gray-400 hover:text-gray-600'
                                }
                            `}
                        >
                            {activeId === heading.id && (
                                <motion.span
                                    layoutId="toc-indicator"
                                    className="absolute left-0 w-[2px] h-4 bg-black -ml-4"
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
