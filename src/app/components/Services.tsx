import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Palette, Code2, Camera } from 'lucide-react';
import { StickyNarrative } from './redesign/effects/StickyNarrative';
import { RevealText } from './redesign/effects/RevealText';

const SERVICES = [
  {
    Icon: Palette,
    num: '01',
    labelEs: 'Branding',
    labelEn: 'Branding',
    titleEs: 'Marca que impacta',
    titleEn: 'Brand that impacts',
    descEs: 'Identidad visual que justifica tu precio premium.',
    descEn: 'Visual identity that justifies your premium price.',
    tagsEs: ['Estrategia', 'Logo', 'Manual de marca', 'Redes'],
    tagsEn: ['Strategy', 'Logo', 'Brand manual', 'Social'],
  },
  {
    Icon: Globe,
    num: '02',
    labelEs: 'Diseño Web',
    labelEn: 'Web Design',
    titleEs: 'Web que vende',
    titleEn: 'Website that sells',
    descEs: 'Ultra-rápida, SEO optimizada, diseñada para convertir.',
    descEn: 'Ultra-fast, SEO optimized, designed to convert.',
    tagsEs: ['95+ PageSpeed', 'SEO', 'Conversión', 'Mobile-first'],
    tagsEn: ['95+ PageSpeed', 'SEO', 'Conversion', 'Mobile-first'],
  },
  {
    Icon: Code2,
    num: '03',
    labelEs: 'Apps & SaaS',
    labelEn: 'Apps & SaaS',
    titleEs: 'Aplicaciones a medida',
    titleEn: 'Custom applications',
    descEs: 'Construimos productos digitales completos a medida, del front al backend. Plataformas SaaS, paneles, sistemas internos: lo que tu negocio necesite, con código limpio y veloz.',
    descEn: 'We build complete custom digital products, front to back. SaaS platforms, dashboards, internal systems: whatever your business needs, with clean and fast code.',
    tagsEs: ['Front + Backend', 'SaaS a medida', 'Paneles & sistemas', 'Código limpio'],
    tagsEn: ['Front + Backend', 'Custom SaaS', 'Dashboards & systems', 'Clean code'],
  },
  {
    Icon: Camera,
    num: '04',
    labelEs: 'Fotografía',
    labelEn: 'Photography',
    titleEs: 'Fotos sin estudio',
    titleEn: 'Photos without a studio',
    descEs: 'Fotografías realistas de prendas y productos sin necesidad de estudio fotográfico. Para indumentaria o productos de cualquier tipo, con calidad profesional.',
    descEn: 'Realistic photos of clothing and products with no photo studio required. For apparel or any kind of product, with professional quality.',
    tagsEs: ['Indumentaria', 'Productos', 'Sin estudio', 'Realista'],
    tagsEn: ['Apparel', 'Products', 'No studio', 'Realistic'],
  },
];

export function Services() {
  const { t, language } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SERVICES[activeIdx];
  const ActiveIcon = active.Icon;

  const getLabel = (s: (typeof SERVICES)[0]) =>
    language === 'es' ? s.labelEs : s.labelEn;

  return (
    <section id="services" className="rd-dark rd-grid-fine rd-noise relative overflow-hidden">

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div
        className="max-w-[1440px] mx-auto"
        style={{
          paddingTop: 'var(--space-section-y)',
          paddingLeft: 'var(--space-section-x)',
          paddingRight: 'var(--space-section-x)',
        }}
      >
        {/* Meta label */}
        <div className="flex items-center gap-3 mb-14">
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 20, stiffness: 160, delay: 0.1 }}
            className="block w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: 'var(--rd-accent)' }}
          />
          <span className="rd-meta">
            {language === 'es' ? 'Servicios' : 'Services'}
          </span>
        </div>

        {/* Giant display title */}
        <RevealText
          as="h2"
          className="font-display leading-none tracking-tighter uppercase [font-size:var(--text-hero-lg)]"
          whenInView
          stagger={0.04}
          delay={0.1}
        >
          {t('services.title')}
        </RevealText>
      </div>

      {/* ── Divider ─────────────────────────────────────────────────── */}
      <div
        className="max-w-[1440px] mx-auto mt-20"
        style={{
          paddingLeft: 'var(--space-section-x)',
          paddingRight: 'var(--space-section-x)',
        }}
      >
        <div style={{ height: '1px', background: 'var(--rd-line)' }} />
      </div>

      {/* ── Sticky Narrative ────────────────────────────────────────── */}
      <div
        className="max-w-[1440px] mx-auto"
        style={{
          paddingTop: 'calc(var(--space-section-y) * 0.75)',
          paddingBottom: 'var(--space-section-y)',
          paddingLeft: 'var(--space-section-x)',
          paddingRight: 'var(--space-section-x)',
        }}
      >
        <StickyNarrative
          stickyTop="top-32"
          leftWidth="lg:w-[34%]"
          left={
            <div>
              {/* Service nav */}
              <nav aria-label={language === 'es' ? 'Servicios' : 'Services'}>
                <ul>
                  {SERVICES.map((s, i) => {
                    const isActive = i === activeIdx;
                    return (
                      <li
                        key={s.num}
                        style={{ borderTop: '1px solid var(--rd-line)' }}
                      >
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIdx(i)}
                          onClick={() => setActiveIdx(i)}
                          className="w-full text-left flex items-center gap-5 py-6"
                        >
                          {/* Active dot */}
                          <motion.span
                            initial={false}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              scale: isActive ? 1 : 0.3,
                            }}
                            transition={{ type: 'spring', damping: 28, stiffness: 160 }}
                            className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: 'var(--rd-accent)' }}
                          />

                          {/* Number */}
                          <span
                            className="rd-meta w-7 flex-shrink-0 transition-colors duration-200"
                            style={{
                              color: isActive ? 'var(--rd-accent)' : 'var(--rd-fg-dim)',
                            }}
                          >
                            {s.num}
                          </span>

                          {/* Label */}
                          <span
                            className="text-base tracking-tight transition-colors duration-200"
                            style={{
                              color: isActive ? 'var(--rd-fg)' : 'var(--rd-fg-dim)',
                              fontWeight: isActive ? 500 : 400,
                            }}
                          >
                            {getLabel(s)}
                          </span>

                          {/* Arrow */}
                          <AnimatePresence mode="popLayout">
                            {isActive && (
                              <motion.span
                                key="arrow"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 8 }}
                                transition={{ type: 'spring', damping: 28, stiffness: 140 }}
                                className="ml-auto rd-meta"
                                style={{ color: 'var(--rd-accent)' }}
                              >
                                →
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      </li>
                    );
                  })}
                  {/* Closing rule */}
                  <li style={{ borderTop: '1px solid var(--rd-line)' }} aria-hidden="true" />
                </ul>
              </nav>

              {/* Counter */}
              <p className="rd-meta mt-10" style={{ color: 'var(--rd-fg-dim)' }}>
                {String(activeIdx + 1).padStart(2, '0')} / {String(SERVICES.length).padStart(2, '0')}
              </p>
            </div>
          }
          right={
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIdx}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ type: 'spring', damping: 28, stiffness: 130, mass: 0.85 }}
              >
                {/* Tag row */}
                <div className="flex items-center gap-3 mb-10">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md flex-shrink-0"
                    style={{
                      background: 'var(--rd-bg-soft)',
                      border: '1px solid var(--rd-line)',
                    }}
                  >
                    <ActiveIcon
                      size={15}
                      strokeWidth={1.5}
                      style={{ color: 'var(--rd-accent)' }}
                    />
                  </span>
                  <span className="rd-meta" style={{ color: 'var(--rd-accent)' }}>
                    {active.num}
                  </span>
                </div>

                {/* Service title */}
                <h3
                  className="font-display tracking-tighter leading-[0.92] mb-8"
                  style={{
                    fontSize: 'var(--text-section)',
                    color: 'var(--rd-fg)',
                  }}
                >
                  {language === 'es' ? active.titleEs : active.titleEn}
                </h3>

                {/* Description */}
                <p
                  className="mb-12 max-w-sm leading-relaxed"
                  style={{
                    fontSize: 'var(--text-body, 1rem)',
                    color: 'var(--rd-fg-dim)',
                  }}
                >
                  {language === 'es' ? active.descEs : active.descEn}
                </p>

                {/* Feature list */}
                <ul>
                  {(language === 'es' ? active.tagsEs : active.tagsEn).map((tag, i) => (
                    <motion.li
                      key={tag}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: 'spring',
                        damping: 24,
                        stiffness: 130,
                        delay: 0.06 + i * 0.07,
                      }}
                      className="flex items-center gap-4 py-4"
                      style={{ borderBottom: '1px solid var(--rd-line)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--rd-accent)' }}
                      />
                      <span style={{ fontSize: 'var(--text-body, 1rem)', color: 'var(--rd-fg)' }}>
                        {tag}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.38, duration: 0.4 }}
                  className="mt-12"
                >
                  <a href="#contact" className="inline-flex items-center gap-2 group">
                    <span
                      className="rd-meta transition-colors duration-200"
                      style={{ color: 'var(--rd-fg-dim)' }}
                    >
                      {t('services.cta')}
                    </span>
                    <span
                      className="rd-meta transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: 'var(--rd-accent)' }}
                    >
                      →
                    </span>
                  </a>
                </motion.div>
              </motion.article>
            </AnimatePresence>
          }
        />
      </div>
    </section>
  );
}
