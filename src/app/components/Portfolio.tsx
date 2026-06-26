import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';
import frescaImage from 'figma:asset/0500e9aec64caec3e777b8689e4e267a37bd6737.png';
import burgerRocketImage from 'figma:asset/74973a075c1e0d4a586aa8195e6bef990f29e81d.png';
import academyImage from 'figma:asset/e67b4909b66cc3ef83f51b69eb04d3640affb918.png';
import forzaImage from 'figma:asset/f7e2d76fb3b8e9ae281c8a905a07a7c04fa351bc.png';

const SPRING = { type: 'spring' as const, damping: 26, stiffness: 150, mass: 0.9 };

export function Portfolio() {
  const { language } = useLanguage();
  const es = language === 'es';

  const items = [
    {
      slug: 'fresca-branding',
      title: 'Fresca',
      subtitle: es ? 'Branding + Estrategia — 2024' : 'Branding + Strategy — 2024',
      poster: frescaImage,
    },
    {
      slug: 'burger-rocket-branding',
      title: 'Burger Rocket',
      subtitle: es ? 'Branding Fast-Food — 2024' : 'Fast-Food Branding — 2024',
      poster: burgerRocketImage,
    },
    {
      slug: 'academy-branding',
      title: 'Coffee Academy',
      subtitle: es ? 'Branding Premium — 2024' : 'Premium Branding — 2024',
      poster: academyImage,
    },
    {
      slug: 'forza-branding',
      title: 'Forza Co.',
      subtitle: es ? 'Branding Moda — 2024' : 'Fashion Branding — 2024',
      poster: forzaImage,
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative rd-dark rd-noise overflow-hidden"
    >
      {/* ── Header editorial ── */}
      <div className="px-6 sm:px-10 lg:px-20 pt-28 pb-10 lg:pt-40 lg:pb-14 max-w-[1440px] mx-auto">

        {/* Index / section label */}
        <motion.p
          className="rd-meta mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {es ? 'Proyectos / 04' : 'Projects / 04'}
        </motion.p>

        {/* Giant display headline — Spector-style */}
        <RevealText
          as="h2"
          whenInView
          stagger={0.045}
          delay={0.1}
          className="font-display text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.88] tracking-tight uppercase text-[var(--rd-fg)]"
        >
          {es ? 'Proyectos seleccionados' : 'Selected Projects'}
        </RevealText>

        {/* Hairline rule — animates left-to-right */}
        <motion.div
          className="h-px bg-[var(--rd-line)] mt-10 mb-7 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...SPRING, delay: 0.45 }}
        />

        {/* Subtitle row */}
        <div className="flex items-end justify-between gap-6">
          <motion.p
            className="rd-meta max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...SPRING, delay: 0.55 }}
          >
            {es
              ? 'Una selección curada de trabajo narrativo con clientes reales.'
              : 'A curated selection of narrative-driven client work.'}
          </motion.p>

          <motion.span
            className="rd-meta shrink-0 hidden sm:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ...SPRING, delay: 0.65 }}
          >
            2024
          </motion.span>
        </div>
      </div>

      {/* ── Project grid — each card navigates to the full project page ── */}
      <div className="px-6 sm:px-10 lg:px-20 pb-32 lg:pb-44 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ ...SPRING, delay: 0.1 + i * 0.08 }}
            >
              <Link
                to={`/proyecto/${item.slug}`}
                className="group block relative aspect-[4/5] overflow-hidden rounded-xl"
              >
                <img
                  src={item.poster}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
                  loading="lazy"
                />
                {/* Bottom gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 bg-[var(--rd-accent)] text-black px-5 py-2.5 rounded-full text-sm font-medium">
                    {es ? 'Ver proyecto' : 'View project'}
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="rd-meta mt-1.5">{item.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
