import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import frescaImage from 'figma:asset/0500e9aec64caec3e777b8689e4e267a37bd6737.png';
import burgerRocketImage from 'figma:asset/74973a075c1e0d4a586aa8195e6bef990f29e81d.png';
import academyImage from 'figma:asset/e67b4909b66cc3ef83f51b69eb04d3640affb918.png';
import forzaImage from 'figma:asset/f7e2d76fb3b8e9ae281c8a905a07a7c04fa351bc.png';

const EASE = [0.23, 1, 0.32, 1] as const;

const projects = [
  {
    slug: 'underground-book-gallery',
    titleEs: 'Underground Book Gallery', titleEn: 'Underground Book Gallery',
    categoryEs: 'Branding', categoryEn: 'Branding', year: '2024',
    descEs: 'Identidad bold para una galería de libros y arte independiente.',
    descEn: 'Bold identity for an independent book & art gallery.',
    coverImage: '/proj-underground-cover.webp',
  },
  {
    slug: 'isla-brew',
    titleEs: 'ISLA Brew', titleEn: 'ISLA Brew',
    categoryEs: 'Branding', categoryEn: 'Branding', year: '2024',
    descEs: 'Marca de café de especialidad con un sistema de íconos propio.',
    descEn: 'Specialty coffee brand with a custom icon system.',
    coverImage: '/proj-isla-cover.webp',
  },
  {
    slug: 'fresca-branding',
    titleEs: 'Fresca', titleEn: 'Fresca',
    categoryEs: 'Branding + Estrategia', categoryEn: 'Branding + Strategy', year: '2024',
    descEs: 'Necesitaban destacar en góndola frente a marcas establecidas. Identidad visual fresca y juvenil.',
    descEn: 'They needed to stand out on shelves against established brands. Fresh, youthful visual identity.',
    coverImage: frescaImage,
  },
  {
    slug: 'burger-rocket-branding',
    titleEs: 'Burger Rocket', titleEn: 'Burger Rocket',
    categoryEs: 'Branding Fast-Food', categoryEn: 'Fast-Food Branding', year: '2024',
    descEs: 'Franquicia en expansión necesitaba identidad escalable y consistente en cada sucursal.',
    descEn: 'Expanding franchise needed a scalable, consistent identity across locations.',
    coverImage: burgerRocketImage,
  },
  {
    slug: 'academy-branding',
    titleEs: 'Coffee Academy', titleEn: 'Coffee Academy',
    categoryEs: 'Branding Premium', categoryEn: 'Premium Branding', year: '2024',
    descEs: 'Cafetería de especialidad buscaba posicionarse como referente premium.',
    descEn: 'Specialty coffee shop sought premium positioning.',
    coverImage: academyImage,
  },
  {
    slug: 'forza-branding',
    titleEs: 'Forza Co.', titleEn: 'Forza Co.',
    categoryEs: 'Branding Moda', categoryEn: 'Fashion Branding', year: '2024',
    descEs: 'Marca urbana necesitaba un sistema visual audaz para diferenciarse.',
    descEn: 'Urban brand needed a bold visual system to stand out.',
    coverImage: forzaImage,
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { language } = useLanguage();
  const es = language === 'es';
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Restart the autoplay timer whenever the slide changes (manual nav included),
  // so a click never collides with a pending tick and double-advances.
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, currentIndex]);

  const project = projects[currentIndex];
  if (!project) return null;

  return (
    <section id="portfolio" className="relative z-10 rd-dark rd-noise overflow-hidden">

      {/* ── MOBILE: horizontal scroll-snap cards ── */}
      <div className="lg:hidden py-20 px-5 sm:px-8">
        <p className="rd-meta mb-4">{es ? 'Proyectos / 04' : 'Projects / 04'}</p>
        <h2
          className="font-display tracking-tight uppercase mb-8 leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 11vw, 4.5rem)', color: 'var(--rd-fg)' }}
        >
          {es ? 'Proyectos seleccionados' : 'Selected Projects'}
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-5 px-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((p) => (
            <div key={p.slug} className="snap-start shrink-0 w-[85%] sm:w-[70%]">
              <Link to={`/proyecto/${p.slug}`} className="block group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={p.coverImage}
                    alt={es ? p.titleEs : p.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="rd-meta mb-2">{(es ? p.categoryEs : p.categoryEn)} — {p.year}</p>
                    <h3 className="font-display text-2xl font-semibold mb-2 leading-tight text-white">
                      {es ? p.titleEs : p.titleEn}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--rd-accent)' }}>
                      {es ? 'Ver proyecto' : 'View project'} <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: fullscreen showcase carousel ── */}
      <div className="hidden lg:block relative w-full h-dvh landscape-safe">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.slug}
            custom={direction}
            initial={{ opacity: 0, scale: 1.06, x: direction > 0 ? '3%' : '-3%' }}
            animate={{ opacity: 1, scale: 1, x: '0%' }}
            exit={{ opacity: 0, scale: 0.98, x: direction > 0 ? '-3%' : '3%' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute inset-0"
          >
            <img
              src={project.coverImage}
              alt={es ? project.titleEs : project.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Section label — top left */}
        <div className="absolute top-28 left-20 z-20">
          <p className="rd-meta">{es ? 'Proyectos seleccionados / 04' : 'Selected Projects / 04'}</p>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-[var(--rd-accent)] hover:text-black hover:border-[var(--rd-accent)] transition-all duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-[var(--rd-accent)] hover:text-black hover:border-[var(--rd-accent)] transition-all duration-200"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-20 pb-20">
          <div className="max-w-[1440px] mx-auto grid grid-cols-2 gap-8 items-end">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug + '-info'}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <p className="rd-meta mb-4">
                    {(es ? project.categoryEs : project.categoryEn)} — {project.year}
                  </p>
                  <h3
                    className="font-display font-semibold tracking-tight mb-5 leading-[0.92] text-white"
                    style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)' }}
                  >
                    {es ? project.titleEs : project.titleEn}
                  </h3>
                  <p className="text-lg max-w-lg leading-relaxed" style={{ color: 'var(--rd-fg-dim)' }}>
                    {es ? project.descEs : project.descEn}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-end gap-6">
              <Link
                to={`/proyecto/${project.slug}`}
                className="group inline-flex items-center gap-3 bg-[var(--rd-accent)] text-black pl-7 pr-2 py-2 rounded-full font-medium"
              >
                <span>{es ? 'Ver proyecto' : 'View project'}</span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[var(--rd-accent)] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <div className="flex items-center gap-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className="h-1 rounded-full transition-all duration-500"
                    style={
                      index === currentIndex
                        ? { background: 'var(--rd-accent)', width: '3rem' }
                        : { background: 'rgba(255,255,255,0.2)', width: '1.5rem', transitionTimingFunction: 'var(--ease-out-strong)' }
                    }
                    aria-label={`Project ${index + 1}`}
                  />
                ))}
                <span className="text-sm ml-3 tabular-nums" style={{ color: 'var(--rd-fg-dim)' }}>
                  {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
