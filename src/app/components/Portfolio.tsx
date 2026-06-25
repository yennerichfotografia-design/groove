import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { VideoLightbox } from './redesign/effects/VideoLightbox';
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
      id: 'fresca-branding',
      title: 'Fresca',
      subtitle: es ? 'Branding + Estrategia — 2024' : 'Branding + Strategy — 2024',
      poster: frescaImage,
    },
    {
      id: 'burger-rocket',
      title: 'Burger Rocket',
      subtitle: es ? 'Branding Fast-Food — 2024' : 'Fast-Food Branding — 2024',
      poster: burgerRocketImage,
    },
    {
      id: 'academy-branding',
      title: 'Coffee Academy',
      subtitle: es ? 'Branding Premium — 2024' : 'Premium Branding — 2024',
      poster: academyImage,
    },
    {
      id: 'forza-branding',
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

      {/* ── Project grid ── */}
      <motion.div
        className="px-6 sm:px-10 lg:px-20 pb-32 lg:pb-44 max-w-[1440px] mx-auto"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ ...SPRING, delay: 0.25 }}
      >
        {/*
          Override VideoLightbox grid at lg to show all 4 as a single
          editorial horizontal strip — Spector-like full-bleed row.
          lg:!grid-cols-4 uses Tailwind's ! modifier (!important) to win
          over the component's internal lg:grid-cols-3.
        */}
        <VideoLightbox
          items={items}
          className="lg:!grid-cols-4 gap-2 lg:gap-3"
        />
      </motion.div>
    </section>
  );
}
