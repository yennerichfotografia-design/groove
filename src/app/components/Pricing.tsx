import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, MessageCircle, ArrowRight, Plus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

const SPRING = { type: 'spring' as const, damping: 28, stiffness: 140 };

/** The à-la-carte services for the custom builder. */
const SERVICES = [
  { id: 'branding', es: 'Branding', en: 'Branding' },
  { id: 'web', es: 'Diseño Web', en: 'Web Design' },
  { id: 'apps', es: 'Apps & SaaS', en: 'Apps & SaaS' },
  { id: 'foto', es: 'Fotografía', en: 'Photography' },
  { id: 'reels', es: 'Reels', en: 'Reels' },
];

interface Pkg {
  id: string;
  name_es: string; name_en: string;
  desc_es: string; desc_en: string;
  features_es: string[]; features_en: string[];
  featured?: boolean;
  badge_es?: string; badge_en?: string;
}

const PACKAGES: Pkg[] = [
  {
    id: 'branding',
    name_es: 'Marca Estratégica', name_en: 'Strategic Brand',
    desc_es: 'Identidad visual completa para diferenciarte y vender más.',
    desc_en: 'Complete visual identity to stand out and sell more.',
    features_es: ['Estrategia de marca', 'Logo + Sistema Visual', 'Manual de Marca', 'Kit Redes Sociales', 'Archivos Editables'],
    features_en: ['Brand Strategy', 'Logo + Visual System', 'Brand Manual', 'Social Media Kit', 'Editable Files'],
  },
  {
    id: 'marca-web',
    name_es: 'Marca + Web', name_en: 'Brand + Web',
    desc_es: 'El lanzamiento completo: marca premium y web de alto rendimiento.',
    desc_en: 'The full launch: premium brand and high-performance website.',
    features_es: ['Todo el Branding', 'Web a medida', 'SEO Técnico', 'Performance 90+', 'Listo para vender'],
    features_en: ['Full Branding', 'Custom website', 'Technical SEO', 'Performance 90+', 'Ready to sell'],
    featured: true,
    badge_es: 'Más elegido', badge_en: 'Most picked',
  },
  {
    id: 'web',
    name_es: 'Web High-Performance', name_en: 'High-Perf Web',
    desc_es: 'Tu web rápida, moderna y optimizada para conversión.',
    desc_en: 'Your fast, modern website optimized for conversion.',
    features_es: ['Diseño UI en Figma', 'Desarrollo a medida', 'Animaciones de impacto', 'SEO Técnico', 'Performance 90+'],
    features_en: ['UI Design in Figma', 'Custom Development', 'High-impact Animations', 'Technical SEO', 'Performance 90+'],
  },
];

export function Pricing() {
  const { language } = useLanguage();
  const es = language === 'es';

  // selection: either a fixed package id, or 'custom' with a set of service ids
  const [pkgId, setPkgId] = useState<string | null>('marca-web');
  const [custom, setCustom] = useState<string[]>([]);

  const isCustom = pkgId === null;

  const selectPackage = (id: string) => { setPkgId(id); setCustom([]); };
  const toggleService = (id: string) => {
    setPkgId(null);
    setCustom((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  // Build CTA target + label
  let briefHref = '#';
  let chosenLabel = '';
  if (!isCustom && pkgId) {
    const p = PACKAGES.find((x) => x.id === pkgId)!;
    briefHref = `/brief?plan=${pkgId}`;
    chosenLabel = es ? p.name_es : p.name_en;
  } else if (custom.length) {
    briefHref = `/brief?servicios=${custom.join(',')}`;
    chosenLabel = custom.map((id) => {
      const s = SERVICES.find((x) => x.id === id)!;
      return es ? s.es : s.en;
    }).join(' + ');
  }
  const ctaReady = briefHref !== '#';

  return (
    <section id="pricing" className="relative z-10 rd-dark rd-noise" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* Header */}
        <RevealAnimation>
          <div className="mb-12 lg:mb-16">
            <p className="rd-meta mb-4">{es ? 'Paquetes' : 'Packages'}</p>
            <h2 className="font-display leading-none tracking-tighter mb-4" style={{ fontSize: 'var(--text-section)', color: 'var(--rd-fg)' }}>
              {es ? 'Armá tu proyecto' : 'Build your project'}
            </h2>
            <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', maxWidth: '40rem' }}>
              {es
                ? 'Elegí un combo listo o armalo a medida con lo que necesites. Sin precios ocultos: arrancamos con una charla.'
                : 'Pick a ready-made combo or build your own with what you need. No hidden prices: we start with a chat.'}
            </p>
          </div>
        </RevealAnimation>

        {/* Fixed packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {PACKAGES.map((p, i) => {
            const selected = pkgId === p.id;
            const name = es ? p.name_es : p.name_en;
            const desc = es ? p.desc_es : p.desc_en;
            const features = es ? p.features_es : p.features_en;
            const badge = p.featured ? (es ? p.badge_es : p.badge_en) : null;
            return (
              <RevealAnimation key={p.id} delay={i * 0.08}>
                <motion.button
                  type="button"
                  onClick={() => selectPackage(p.id)}
                  aria-pressed={selected}
                  whileHover={{ y: -3 }}
                  transition={SPRING}
                  className="w-full h-full text-left rounded-2xl p-6 lg:p-7 flex flex-col"
                  style={{
                    background: selected ? 'var(--rd-bg-soft)' : 'transparent',
                    boxShadow: selected ? '0 0 0 2px var(--rd-accent)' : '0 0 0 1px var(--rd-line)',
                    cursor: 'pointer',
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="rd-meta" style={{ color: 'var(--rd-accent)' }}>0{i + 1}</span>
                    {badge && (
                      <span className="rd-meta px-3 py-1 rounded-full" style={{ background: 'var(--rd-accent)', color: '#000' }}>{badge}</span>
                    )}
                  </div>
                  <h3 className="font-display leading-[0.95] tracking-tighter mb-3" style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)', color: selected ? 'var(--rd-accent)' : 'var(--rd-fg)' }}>
                    {name}
                  </h3>
                  <p className="mb-6" style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)', lineHeight: 1.55 }}>{desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-6">
                    {features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5" style={{ fontSize: '0.8125rem', color: 'var(--rd-fg-dim)' }}>
                        <Check size={13} style={{ color: 'var(--rd-accent)', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center gap-2.5">
                    <span
                      className="inline-flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ width: '1.6rem', height: '1.6rem', background: selected ? 'var(--rd-accent)' : 'transparent', border: `1.5px solid ${selected ? 'var(--rd-accent)' : 'var(--rd-line)'}` }}
                    >
                      {selected && <Check size={13} style={{ color: '#000' }} strokeWidth={3} />}
                    </span>
                    <span className="rd-meta" style={{ color: selected ? 'var(--rd-accent)' : 'var(--rd-fg-dim)' }}>
                      {selected ? (es ? 'Elegido' : 'Selected') : (es ? 'Elegir' : 'Select')}
                    </span>
                  </div>
                </motion.button>
              </RevealAnimation>
            );
          })}
        </div>

        {/* À-la-carte / custom */}
        <RevealAnimation delay={0.15}>
          <div
            className="mt-5 rounded-2xl p-6 lg:p-7"
            style={{ background: isCustom && custom.length ? 'var(--rd-bg-soft)' : 'transparent', boxShadow: isCustom && custom.length ? '0 0 0 2px var(--rd-accent)' : '0 0 0 1px var(--rd-line)' }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Plus size={16} style={{ color: 'var(--rd-accent)' }} />
                  <h3 className="font-display tracking-tight" style={{ fontSize: 'var(--text-card-title)', color: 'var(--rd-fg)' }}>
                    {es ? 'A medida' : 'Custom'}
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)' }}>
                  {es ? 'Combiná los servicios que necesites.' : 'Combine the services you need.'}
                </p>
              </div>

              {/* Service chips */}
              <div className="flex flex-wrap gap-2.5">
                {SERVICES.map((s) => {
                  const on = isCustom && custom.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => toggleService(s.id)}
                      className="inline-flex items-center gap-2 rounded-full transition-colors duration-200"
                      style={{
                        padding: '0.5rem 1rem',
                        fontSize: '0.8125rem',
                        background: on ? 'var(--rd-accent)' : 'transparent',
                        color: on ? '#000' : 'var(--rd-fg)',
                        border: `1px solid ${on ? 'var(--rd-accent)' : 'var(--rd-line)'}`,
                      }}
                    >
                      {on ? <Check size={13} strokeWidth={3} /> : <Plus size={13} />}
                      {es ? s.es : s.en}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* CTA bar */}
        <RevealAnimation delay={0.2}>
          <div
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-6 py-6 lg:px-8"
            style={{ background: 'var(--rd-bg-soft)', border: '1px solid var(--rd-line)' }}
          >
            <div className="min-w-0">
              <p className="rd-meta mb-1.5" style={{ color: 'var(--rd-fg-dim)' }}>{es ? 'Tu elección' : 'Your pick'}</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={chosenLabel || 'none'}
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
                  className="font-display truncate"
                  style={{ fontSize: 'var(--text-card-title)', color: ctaReady ? 'var(--rd-fg)' : 'var(--rd-fg-dim)', letterSpacing: '-0.02em' }}
                >
                  {ctaReady ? chosenLabel : (es ? 'Elegí un paquete o servicios' : 'Pick a package or services')}
                </motion.p>
              </AnimatePresence>
            </div>

            <Link
              to={briefHref}
              onClick={(e) => { if (!ctaReady) e.preventDefault(); }}
              aria-disabled={!ctaReady}
              className="group inline-flex items-center gap-3 rounded-full font-medium pl-7 pr-2 py-2 shrink-0"
              style={{ background: 'var(--rd-accent)', color: '#000', fontSize: 'var(--text-body)', opacity: ctaReady ? 1 : 0.4, pointerEvents: ctaReady ? 'auto' : 'none' }}
            >
              <span>{es ? '¡Empecemos!' : "Let's go!"}</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[var(--rd-accent)] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </RevealAnimation>

        {/* Trust signals */}
        <RevealAnimation delay={0.3}>
          <div className="mt-12 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap" style={{ borderTop: '1px solid var(--rd-line)' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)' }}>
              {es ? 'Tomamos pocos proyectos por mes — consultá disponibilidad' : 'We take few projects per month — check availability'}
            </p>
            <a
              href="https://wa.me/5493436987030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
              style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)' }}
            >
              <MessageCircle size={14} />
              {es ? 'O escribinos por WhatsApp' : 'Or message us on WhatsApp'}
            </a>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
}
