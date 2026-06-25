import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

/**
 * EFFECT 5 — Expansive Video Lightbox.
 *
 * Portfolio cards that expand to (near) fullscreen on click using a shared
 * `layoutId`, so the card morphs into the lightbox with a fluid spring
 * transition — no page reload. Escape / backdrop / close button dismiss it.
 */

export type LightboxItem = {
  id: string;
  title: string;
  subtitle?: string;
  /** Poster image shown in the grid + as video fallback. */
  poster: string;
  /** Optional video played when expanded. */
  video?: string;
};

const SPRING = { type: 'spring' as const, damping: 30, stiffness: 200, mass: 0.9 };

export function VideoLightbox({ items, className = '' }: { items: LightboxItem[]; className?: string }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = items.find((i) => i.id === activeId) || null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveId(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeId]);

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {items.map((item) => (
          <motion.button
            key={item.id}
            layoutId={`lb-${item.id}`}
            onClick={() => setActiveId(item.id)}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl text-left"
            transition={SPRING}
            whileHover={{ y: -6 }}
          >
            <motion.img
              src={item.poster}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
              {item.subtitle && <p className="rd-meta mt-1">{item.subtitle}</p>}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setActiveId(null)}
            />
            <motion.div
              layoutId={`lb-${active.id}`}
              transition={SPRING}
              className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-2xl bg-black"
            >
              {active.video ? (
                <video
                  src={active.video}
                  poster={active.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src={active.poster} alt={active.title} className="w-full h-full object-cover" />
              )}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display text-2xl font-semibold text-white">{active.title}</h3>
                {active.subtitle && <p className="rd-meta mt-1">{active.subtitle}</p>}
              </motion.div>
            </motion.div>

            <motion.button
              onClick={() => setActiveId(null)}
              aria-label="Cerrar"
              className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.15 }}
            >
              <X size={20} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
