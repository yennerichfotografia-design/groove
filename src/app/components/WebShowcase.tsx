import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';
import { use3DTilt } from '../hooks/use3DTilt';

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

function WebCard({
  site,
  index,
  language,
}: {
  site: (typeof websites)[0];
  index: number;
  language: string;
}) {
  const { ref, style, handleMouseMove, handleMouseLeave } = use3DTilt(4);
  const es = language === 'es';
  const tags = es ? site.tags : site.tagsEn;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ ...SPRING, delay: index * 0.1 }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="group"
      >
        <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          {/* Dark browser mockup */}
          <div
            className="overflow-hidden mb-5 rounded-lg"
            style={{
              background: 'var(--rd-bg-soft)',
              border: '1px solid var(--rd-line)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-2.5"
              style={{
                background: 'var(--rd-bg)',
                borderBottom: '1px solid var(--rd-line)',
              }}
            >
              <div className="flex gap-1.5 shrink-0">
                {[0, 1, 2].map((d) => (
                  <div
                    key={d}
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--rd-line)' }}
                  />
                ))}
              </div>
              <div
                className="flex-1 truncate px-3 py-0.5 text-[11px] leading-5"
                style={{
                  background: 'var(--rd-bg-soft)',
                  border: '1px solid var(--rd-line)',
                  borderRadius: '4px',
                  color: 'var(--rd-fg-dim)',
                  marginLeft: '4px',
                }}
              >
                {site.url.replace('https://', '')}
              </div>
            </div>

            {/* Screenshot + hover overlay */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 text-[13px] font-medium"
                  style={{
                    background: 'var(--rd-accent)',
                    color: '#000',
                    padding: '10px 20px',
                    borderRadius: '999px',
                  }}
                >
                  {es ? 'Visitar sitio' : 'Visit site'}
                  <ArrowUpRight size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="rd-meta mb-2">
                {String(index + 1).padStart(2, '0')} — {tags[0]}
              </p>
              <h3
                className="font-display tracking-tight mb-2 transition-colors duration-200 text-[var(--rd-fg)] group-hover:text-[var(--rd-accent)]"
                style={{ fontSize: 'var(--text-card-title)', fontWeight: 600, lineHeight: 1.15 }}
              >
                {site.name}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--rd-fg-dim)' }}>
                {es ? site.descEs : site.descEn}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-[0.1em] px-2.5 py-0.5"
                    style={{
                      border: '1px solid var(--rd-accent)',
                      color: 'var(--rd-accent)',
                      borderRadius: '999px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 transition-colors duration-200 text-[var(--rd-fg-dim)] group-hover:text-[var(--rd-accent)]"
            />
          </div>
        </a>
      </div>
    </motion.article>
  );
}

export function WebShowcase() {
  const { language } = useLanguage();
  const es = language === 'es';

  return (
    <section
      id="web-showcase"
      className="relative rd-dark rd-noise rd-grid-fine overflow-hidden"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      <div
        className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20"
      >
        {/* Editorial header */}
        <motion.p
          className="rd-meta mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...SPRING, delay: 0.05 }}
        >
          {es ? 'Webs / 03' : 'Websites / 03'}
        </motion.p>

        {/* Giant display headline */}
        <RevealText
          as="h2"
          whenInView
          stagger={0.05}
          delay={0.1}
          className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] tracking-tight uppercase text-[var(--rd-fg)]"
        >
          {es ? 'Proyectos web en vivo' : 'Live web projects'}
        </RevealText>

        {/* Hairline rule */}
        <motion.div
          className="h-px bg-[var(--rd-line)] mt-10 mb-14 lg:mt-12 lg:mb-16 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ ...SPRING, delay: 0.4 }}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {websites.map((site, i) => (
            <WebCard key={site.name} site={site} index={i} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
