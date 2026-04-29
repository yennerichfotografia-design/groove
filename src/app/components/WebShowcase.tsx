import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { use3DTilt } from '../hooks/use3DTilt';

const websites = [
  {
    name: 'Paran\u00e1 Legal',
    url: 'https://paranalegal.com/',
    image: '/web-parana.webp',
    descEs: 'Estudio jur\u00eddico integral. Web profesional y moderna para captar clientes de alto valor.',
    descEn: 'Full-service law firm. Professional, modern website designed to attract high-value clients.',
    tags: ['Dise\u00f1o Web', 'Desarrollo', 'SEO'],
    tagsEn: ['Web Design', 'Development', 'SEO'],
  },
  {
    name: 'Secoia',
    url: 'https://secoia.com.ar/',
    image: '/web-secoia.webp',
    descEs: 'Marca con presencia digital estrat\u00e9gica. Dise\u00f1o y desarrollo a medida.',
    descEn: 'Brand with strategic digital presence. Custom design and development.',
    tags: ['Dise\u00f1o Web', 'Branding', 'Desarrollo'],
    tagsEn: ['Web Design', 'Branding', 'Development'],
  },
  {
    name: 'Vitaneral',
    url: 'https://vitaneral.natufarma.com/',
    image: '/web-vitaneral.webp',
    descEs: 'Landing de producto para Natufarma. Dise\u00f1o limpio orientado a conversi\u00f3n.',
    descEn: 'Product landing page for Natufarma. Clean design focused on conversion.',
    tags: ['Landing Page', 'Dise\u00f1o Web', 'Desarrollo'],
    tagsEn: ['Landing Page', 'Web Design', 'Development'],
  },
];

function WebCard({ site, index, language }: { site: typeof websites[0]; index: number; language: string }) {
  const { ref, style, handleMouseMove, handleMouseLeave } = use3DTilt(5);
  const es = language === 'es';

  return (
    <RevealAnimation delay={0.1 + index * 0.1} className="flex">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="group w-full"
      >
        <a href={site.url} target="_blank" rel="noopener noreferrer" className="block">
          {/* Browser mockup */}
          <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-200/80">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 truncate ml-2">
                {site.url.replace('https://', '')}
              </div>
            </div>
            {/* Screenshot */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-[var(--groove-accent)] text-black px-5 py-2.5 rounded-full text-sm font-medium">
                  {es ? 'Visitar sitio' : 'Visit site'}
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium mb-2 group-hover:text-[var(--groove-accent)] transition-colors duration-200">
                {site.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {es ? site.descEs : site.descEn}
              </p>
              <div className="flex flex-wrap gap-2">
                {(es ? site.tags : site.tagsEn).map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full border border-black/10 text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight size={20} className="text-gray-300 group-hover:text-[var(--groove-accent)] transition-colors duration-200 mt-1 shrink-0" />
          </div>
        </a>
      </div>
    </RevealAnimation>
  );
}

export function WebShowcase() {
  const { language } = useLanguage();
  const es = language === 'es';

  return (
    <section className="relative z-10 bg-white" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>
        <RevealAnimation>
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
              {es ? 'Webs que constru\u00ed' : 'Websites I built'}
            </p>
            <h2 className="tracking-tight" style={{ fontSize: 'var(--text-section)' }}>
              {es ? 'Proyectos web en vivo' : 'Live web projects'}
            </h2>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {websites.map((site, i) => (
            <WebCard key={site.name} site={site} index={i} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
