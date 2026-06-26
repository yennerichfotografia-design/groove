import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';

const SPRING = { type: 'spring' as const, damping: 26, stiffness: 150, mass: 0.9 };

const websites = [
  {
    name: 'Paraná Legal',
    url: 'https://paranalegal.com/',
    image: '/web-parana.webp',
    descEs: 'Estudio jurídico integral. Web profesional y moderna para captar clientes de alto valor.',
    descEn: 'Full-service law firm. Professional, modern website designed to attract high-value clients.',
    tags: ['Diseño Web', 'Desarrollo', 'SEO'],
    tagsEn: ['Web Design', 'Development', 'SEO'],
  },
  {
    name: 'Secoia',
    url: 'https://secoia.com.ar/',
    image: '/web-secoia.webp',
    descEs: 'Marca con presencia digital estratégica. Diseño y desarrollo a medida.',
    descEn: 'Brand with strategic digital presence. Custom design and development.',
    tags: ['Diseño Web', 'Branding', 'Desarrollo'],
    tagsEn: ['Web Design', 'Branding', 'Development'],
  },
  {
    name: 'Vitaneral',
    url: 'https://vitaneral.natufarma.com/',
    image: '/web-vitaneral.webp',
    descEs: 'Landing de producto para Natufarma. Diseño limpio orientado a conversión.',
    descEn: 'Product landing page for Natufarma. Clean design focused on conversion.',
    tags: ['Landing Page', 'Diseño Web', 'Desarrollo'],
    tagsEn: ['Landing Page', 'Web Design', 'Development'],
  },
];

function WebTile({ site, index, es }: { site: (typeof websites)[0]; index: number; es: boolean }) {
  const tags = es ? site.tags : site.tagsEn;

  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...SPRING, delay: index * 0.08 }}
    >
      <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
        <img
          src={site.image}
          alt={site.name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.06]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
          loading="lazy"
        />

        {/* Permanent bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Hover darkening + visit pill */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
          <span
            className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 text-sm font-medium"
            style={{ background: 'var(--rd-accent)', color: '#000', padding: '10px 22px', borderRadius: '999px' }}
          >
            {es ? 'Visitar sitio' : 'Visit site'}
            <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
          <p className="rd-meta mb-2">
            {String(index + 1).padStart(2, '0')} — {tags[0]}
          </p>
          <h3
            className="font-display font-semibold tracking-tight text-white leading-[1.05] mb-3"
            style={{ fontSize: 'clamp(1.75rem, 2.5vw, 2.75rem)' }}
          >
            {site.name}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5"
                style={{ border: '1px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)', borderRadius: '999px' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function WebShowcase() {
  const { language } = useLanguage();
  const es = language === 'es';

  return (
    <section
      id="web-showcase"
      className="relative rd-dark rd-noise overflow-hidden"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      {/* Editorial header — contained */}
      <div className="px-6 sm:px-10 lg:px-20 mb-12 lg:mb-16">
        <motion.p
          className="rd-meta mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {es ? 'Webs / 03' : 'Websites / 03'}
        </motion.p>

        <RevealText
          as="h2"
          whenInView
          stagger={0.05}
          delay={0.1}
          className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.92] tracking-tight uppercase text-[var(--rd-fg)]"
        >
          {es ? 'Proyectos web en vivo' : 'Live web projects'}
        </RevealText>

        <div className="flex items-end justify-between gap-6 mt-8">
          <p className="rd-meta max-w-xs">
            {es ? 'Sitios reales, en producción, construidos a medida.' : 'Real sites, in production, built from scratch.'}
          </p>
          <span className="rd-meta hidden sm:block">2024 — 2026</span>
        </div>
      </div>

      {/* Full-bleed image grid — big tiles, tight gaps (Spector "Selected Projects") */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 px-2 lg:px-3">
        {websites.map((site, i) => (
          <WebTile key={site.name} site={site} index={i} es={es} />
        ))}
      </div>
    </section>
  );
}
