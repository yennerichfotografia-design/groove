import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import frescaImage from 'figma:asset/0500e9aec64caec3e777b8689e4e267a37bd6737.png';
import burgerRocketImage from 'figma:asset/74973a075c1e0d4a586aa8195e6bef990f29e81d.png';
import academyImage from 'figma:asset/e67b4909b66cc3ef83f51b69eb04d3640affb918.png';
import forzaImage from 'figma:asset/f7e2d76fb3b8e9ae281c8a905a07a7c04fa351bc.png';

const projects = [
  {
    id: 'fresca-branding', slug: 'fresca-branding',
    titleEs: 'Fresca', titleEn: 'Fresca',
    categoryEs: 'Branding + Estrategia', categoryEn: 'Branding + Strategy', year: '2024',
    descEs: 'Necesitaban destacar en g\u00f3ndola frente a marcas establecidas. Identidad visual fresca y juvenil.',
    descEn: 'They needed to stand out on shelves against established brands. Fresh, youthful visual identity.',
    coverImage: frescaImage,
  },
  {
    id: 'burger-rocket', slug: 'burger-rocket-branding',
    titleEs: 'Burger Rocket', titleEn: 'Burger Rocket',
    categoryEs: 'Branding Fast-Food', categoryEn: 'Fast-Food Branding', year: '2024',
    descEs: 'Franquicia en expansi\u00f3n necesitaba identidad escalable y consistente en cada sucursal.',
    descEn: 'Expanding franchise needed a scalable, consistent identity across locations.',
    coverImage: burgerRocketImage,
  },
  {
    id: 'academy-branding', slug: 'academy-branding',
    titleEs: 'Coffee Academy', titleEn: 'Coffee Academy',
    categoryEs: 'Branding Premium', categoryEn: 'Premium Branding', year: '2024',
    descEs: 'Cafeter\u00eda de especialidad buscaba posicionarse como referente premium.',
    descEn: 'Specialty coffee shop sought premium positioning.',
    coverImage: academyImage,
  },
  {
    id: 'forza-branding', slug: 'forza-branding',
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

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  // Mobile scroll snap
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.85;
      const idx = Math.round(scrollLeft / cardWidth);
      if (idx !== currentIndex && idx >= 0 && idx < projects.length) {
        setCurrentIndex(idx);
      }
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  const project = projects[currentIndex];
  if (!project) return null;

  const es = language === 'es';

  return (
    <section id="portfolio" className="relative z-10 bg-black text-white overflow-hidden noise-bg">
      {/* MOBILE layout */}
      <div className="lg:hidden py-16 px-4 sm:px-8">
        <RevealAnimation>
          <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
            {es ? 'Resultados Reales' : 'Real Results'}
          </p>
          <h2 className="text-3xl sm:text-4xl tracking-tight mb-8 font-medium">
            {es ? 'Proyectos destacados' : 'Featured projects'}
          </h2>
        </RevealAnimation>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {projects.map((p, i) => {
            const t = es ? p.titleEs : p.titleEn;
            const cat = es ? p.categoryEs : p.categoryEn;
            const d = es ? p.descEs : p.descEn;
            return (
              <div key={p.id} className="snap-start shrink-0 w-[85%] sm:w-[70%]">
                <Link to={`/proyecto/${p.slug}`} className="block group">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden">
                    <img src={p.coverImage} alt={t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style={{ transitionTimingFunction: 'var(--ease-out-strong)' }} />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    {/* Content over image at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] text-white/50 uppercase tracking-wider mb-2">{cat} &mdash; {p.year}</p>
                      <h3 className="text-xl font-medium mb-1.5 leading-tight">{t}</h3>
                      <p className="text-xs text-white/50 leading-relaxed mb-3 line-clamp-2">{d}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--groove-accent)' }}>
                        {es ? 'Ver proyecto' : 'View project'} <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {projects.map((_, i) => (
            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8' : 'w-4 bg-white/20'}`} style={i === currentIndex ? { background: 'var(--groove-accent)', width: '2rem' } : {}} />
          ))}
        </div>
      </div>

      {/* DESKTOP layout - fullscreen showcase */}
      <div className="hidden lg:block relative w-full h-dvh landscape-safe">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.id}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05, x: direction > 0 ? '3%' : '-3%' }}
            animate={{ opacity: 1, scale: 1, x: '0%' }}
            exit={{ opacity: 0, scale: 0.98, x: direction > 0 ? '-3%' : '3%' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0"
          >
            <img src={project.coverImage} alt={es ? project.titleEs : project.titleEn} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button onClick={prev} className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-[var(--groove-accent)] hover:text-black hover:border-[var(--groove-accent)] transition-all duration-200" aria-label="Previous">
          <ChevronLeft size={22} />
        </button>
        <button onClick={next} className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-[var(--groove-accent)] hover:text-black hover:border-[var(--groove-accent)] transition-all duration-200" aria-label="Next">
          <ChevronRight size={22} />
        </button>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-20 pb-20">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-2 gap-8 items-end">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project.id + '-info'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
                      {(es ? project.categoryEs : project.categoryEn)} &mdash; {project.year}
                    </p>
                    <h3 className="text-5xl lg:text-7xl font-medium tracking-tight mb-4">
                      {es ? project.titleEs : project.titleEn}
                    </h3>
                    <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                      {es ? project.descEs : project.descEn}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex flex-col items-end gap-6">
                <Link to={`/proyecto/${project.slug}`} className="inline-flex items-center gap-3 bg-[var(--groove-accent)] text-black px-8 py-4 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium">
                  {es ? 'Ver proyecto' : 'View project'} <ArrowRight size={18} />
                </Link>
                <div className="flex items-center gap-3">
                  {projects.map((_, index) => (
                    <button key={index} onClick={() => goTo(index)} className={`h-1 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-12' : 'w-6 bg-white/20 hover:bg-white/40'}`} style={index === currentIndex ? { background: 'var(--groove-accent)' } : { transitionTimingFunction: 'var(--ease-out-strong)' }} aria-label={`Project ${index + 1}`} />
                  ))}
                  <span className="text-sm text-white/40 ml-3 tabular-nums">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top label */}
        <div className="absolute top-0 left-0 right-0 z-10 px-20 pt-28">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-sm uppercase tracking-[0.2em] text-white/40">
              {es ? 'Resultados Reales' : 'Real Results'}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
