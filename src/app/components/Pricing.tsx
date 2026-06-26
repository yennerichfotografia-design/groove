import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { use3DTilt } from '../hooks/use3DTilt';

const SPRING = { type: 'spring' as const, damping: 28, stiffness: 140 };

interface Plan {
  id: string;
  name_es: string;
  name_en: string;
  desc_es: string;
  desc_en: string;
  features_es: string[];
  features_en: string[];
  href: string;
  featured?: boolean;
  badge_es?: string;
  badge_en?: string;
}

const PLANS: Plan[] = [
  {
    id: '01',
    name_es: 'Branding Estratégico',
    name_en: 'Strategic Branding',
    desc_es: 'Identidad visual completa para diferenciarte y vender más.',
    desc_en: 'Complete visual identity to differentiate you and sell more.',
    features_es: ['Estrategia de marca', 'Logo + Sistema Visual', 'Manual de Marca Digital', 'Kit Redes Sociales', 'Archivos Editables'],
    features_en: ['Brand Strategy', 'Logo + Visual System', 'Digital Brand Manual', 'Social Media Kit', 'Editable Files'],
    href: '/formulario-branding',
  },
  {
    id: '02',
    name_es: 'Web High-Performance',
    name_en: 'High-Perf Web',
    desc_es: 'Tu web rápida, moderna y optimizada para conversión.',
    desc_en: 'Your fast, modern website optimized for conversion.',
    features_es: ['Diseño UI en Figma', 'Desarrollo a medida', 'Animaciones de alto impacto', 'SEO Técnico incluido', 'Performance 90+ Score'],
    features_en: ['UI Design in Figma', 'Custom Development', 'High-impact Animations', 'Technical SEO included', 'Performance 90+ Score'],
    href: '/formulario-web',
    featured: true,
    badge_es: 'Más elegido',
    badge_en: 'Most picked',
  },
];

/* ─── Ticket stub (left accent card) ──────────────────────────── */
function Ticket({ id, active }: { id: string; active?: boolean }) {
  const { ref, style: tiltStyle, handleMouseMove, handleMouseLeave } = use3DTilt(10);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...tiltStyle,
        flexShrink: 0,
        width: '3.25rem',
        height: '5rem',
        borderRadius: '0.625rem',
        border: `1px solid ${active ? 'var(--rd-accent)' : 'var(--rd-line)'}`,
        background: active ? 'var(--rd-accent)' : 'var(--rd-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.375rem',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <span className="font-display leading-none" style={{ fontSize: '1.25rem', letterSpacing: '-0.04em', color: active ? '#000' : 'var(--rd-accent)' }}>
        {id}
      </span>
      <div style={{ width: '1.25rem', height: '1px', background: active ? 'rgba(0,0,0,0.35)' : 'var(--rd-line)' }} />
    </div>
  );
}

/* ─── Selectable plan row ──────────────────────────────────────── */
function PlanRow({ plan, index, es, selected, onSelect }: {
  plan: Plan; index: number; es: boolean; selected: boolean; onSelect: () => void;
}) {
  const name = es ? plan.name_es : plan.name_en;
  const desc = es ? plan.desc_es : plan.desc_en;
  const features = es ? plan.features_es : plan.features_en;
  const badge = plan.featured ? (es ? plan.badge_es : plan.badge_en) : null;

  return (
    <RevealAnimation delay={index * 0.12}>
      <motion.button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className="w-full text-left py-8 lg:py-10 px-4 sm:px-6 rounded-2xl my-2 block"
        style={{
          background: selected ? 'var(--rd-bg-soft)' : 'transparent',
          boxShadow: selected ? '0 0 0 2px var(--rd-accent)' : '0 0 0 1px var(--rd-line)',
          cursor: 'pointer',
        }}
        whileHover={{ y: -2 }}
        transition={SPRING}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">

          {/* Ticket + info */}
          <div className="flex items-start gap-4 sm:gap-5 flex-1 lg:pr-8 min-w-0">
            <Ticket id={plan.id} active={selected || plan.featured} />
            <div className="min-w-0 flex-1">
              {badge && (
                <div className="mb-2.5">
                  <span className="rd-meta px-3 py-1 rounded-full" style={{ background: 'var(--rd-accent)', color: '#000' }}>
                    {badge}
                  </span>
                </div>
              )}
              <h3
                className="font-display leading-[0.95] tracking-tighter"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', color: selected ? 'var(--rd-accent)' : 'var(--rd-fg)', letterSpacing: '-0.03em' }}
              >
                {name}
              </h3>
              <p className="rd-meta mt-3" style={{ color: 'var(--rd-fg-dim)', maxWidth: '22rem' }}>
                {desc}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px self-stretch flex-shrink-0" style={{ background: 'var(--rd-line)' }} />

          {/* Features */}
          <ul className="flex flex-col gap-2.5 lg:flex-1 lg:px-8 lg:self-stretch lg:justify-center">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2.5" style={{ fontSize: '0.8125rem', color: 'var(--rd-fg-dim)' }}>
                <Check size={13} style={{ color: 'var(--rd-accent)', flexShrink: 0 }} />
                {feature}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="hidden lg:block w-px self-stretch flex-shrink-0" style={{ background: 'var(--rd-line)' }} />

          {/* Selection indicator */}
          <div className="flex items-center gap-3 flex-shrink-0 lg:pl-8 lg:justify-end">
            <span
              className="inline-flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                width: '1.75rem',
                height: '1.75rem',
                background: selected ? 'var(--rd-accent)' : 'transparent',
                border: `1.5px solid ${selected ? 'var(--rd-accent)' : 'var(--rd-line)'}`,
              }}
            >
              {selected && <Check size={15} style={{ color: '#000' }} strokeWidth={3} />}
            </span>
            <span className="rd-meta" style={{ color: selected ? 'var(--rd-accent)' : 'var(--rd-fg-dim)' }}>
              {selected ? (es ? 'Elegido' : 'Selected') : (es ? 'Elegir' : 'Select')}
            </span>
          </div>

        </div>
      </motion.button>
    </RevealAnimation>
  );
}

/* ─── Section ──────────────────────────────────────────────────── */
export function Pricing() {
  const { language } = useLanguage();
  const es = language === 'es';
  // Pre-select the most popular plan so the CTA is ready, but the user can switch.
  const [selectedId, setSelectedId] = useState<string>('02');
  const selected = PLANS.find((p) => p.id === selectedId) ?? null;
  const selectedName = selected ? (es ? selected.name_es : selected.name_en) : '';

  return (
    <section id="pricing" className="relative z-10 rd-dark rd-noise" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* Header */}
        <RevealAnimation>
          <div className="mb-12 lg:mb-16">
            <p className="rd-meta mb-4">{es ? 'Paquetes' : 'Packages'}</p>
            <h2 className="font-display leading-none tracking-tighter mb-4" style={{ fontSize: 'var(--text-section)', color: 'var(--rd-fg)' }}>
              {es ? 'Elegí tu paquete' : 'Choose your package'}
            </h2>
            <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', maxWidth: '36rem' }}>
              {es
                ? 'Sin vueltas ni costos ocultos. Elegí lo que necesitás y arrancamos con una charla.'
                : 'No fluff, no hidden costs. Pick what you need and we start with a chat.'}
            </p>
          </div>
        </RevealAnimation>

        {/* Selectable plans */}
        <div className="flex flex-col">
          {PLANS.map((plan, i) => (
            <PlanRow
              key={plan.id}
              plan={plan}
              index={i}
              es={es}
              selected={selectedId === plan.id}
              onSelect={() => setSelectedId(plan.id)}
            />
          ))}
        </div>

        {/* Sticky-feel CTA bar */}
        <RevealAnimation delay={0.15}>
          <div
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl px-6 py-6 lg:px-8"
            style={{ background: 'var(--rd-bg-soft)', border: '1px solid var(--rd-line)' }}
          >
            <div>
              <p className="rd-meta mb-1.5" style={{ color: 'var(--rd-fg-dim)' }}>
                {es ? 'Tu elección' : 'Your pick'}
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={selectedName}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="font-display"
                  style={{ fontSize: 'var(--text-card-title)', color: 'var(--rd-fg)', letterSpacing: '-0.02em' }}
                >
                  {selectedName}
                </motion.p>
              </AnimatePresence>
            </div>

            <Link
              to={selected ? selected.href : '#'}
              className="group inline-flex items-center gap-3 rounded-full font-medium pl-7 pr-2 py-2"
              style={{ background: 'var(--rd-accent)', color: '#000', fontSize: 'var(--text-body)' }}
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
            <div className="flex flex-wrap gap-6">
              {(es ? ['Proceso claro', 'Velocidad real', 'Trato directo'] : ['Clear process', 'Real speed', 'Direct contact']).map((item) => (
                <span key={item} className="flex items-center gap-2" style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)' }}>
                  <Check size={12} style={{ color: 'var(--rd-accent)' }} />
                  {item}
                </span>
              ))}
            </div>
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
