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

function WebRow({ site, index, es }: { site: (typeof websites)[0]; index: number; es: boolean }) {
  const tags = es ? site.tags : site.tagsEn;
  const imageRight = index % 2 === 1; // alternate sides on desktop

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={SPRING}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* Image */}
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block overflow-hidden rounded-xl ${imageRight ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={site.image}
            alt={site.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-[1.04]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
            <span
              className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-2 text-sm font-medium"
              style={{ background: 'var(--rd-accent)', color: '#000', padding: '10px 22px', borderRadius: '999px' }}
            >
              {es ? 'Visitar sitio' : 'Visit site'}
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </a>

      {/* Info */}
      <div className={imageRight ? 'lg:order-1' : 'lg:order-2'}>
        <p className="rd-meta mb-4">
          {String(index + 1).padStart(2, '0')} — {site.url.replace('https://', '').replace(/\/$/, '')}
        </p>
        <h3
          className="font-display font-semibold tracking-tight text-[var(--rd-fg)] leading-[1.02] mb-5"
          style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
        >
          {site.name}
        </h3>
        <p className="mb-7 max-w-md" style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', lineHeight: 1.6 }}>
          {es ? site.descEs : site.descEn}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-[0.1em] px-2.5 py-1"
              style={{ border: '1px solid var(--rd-line)', color: 'var(--rd-fg-dim)', borderRadius: '999px' }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2"
        >
          <span className="rd-meta transition-colors duration-200" style={{ color: 'var(--rd-fg)' }}>
            {es ? 'Visitar sitio' : 'Visit site'}
          </span>
          <ArrowUpRight size={16} style={{ color: 'var(--rd-accent)' }} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

export function WebShowcase() {
  const { language } = useLanguage();
  const es = language === 'es';

  return (
    <section id="web-showcase" className="relative rd-dark rd-noise overflow-hidden" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* Editorial header */}
        <div className="mb-16 lg:mb-24">
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
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {websites.map((site, i) => (
            <WebRow key={site.name} site={site} index={i} es={es} />
          ))}
        </div>
      </div>
    </section>
  );
}
