import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { use3DTilt } from '../hooks/use3DTilt';

const SPRING = { type: 'spring' as const, damping: 28, stiffness: 140 };

interface Plan {
  id: string;
  price: string;
  name_es: string;
  name_en: string;
  desc_es: string;
  desc_en: string;
  features_es: string[];
  features_en: string[];
  href: string;
  cta_es: string;
  cta_en: string;
  note_es?: string;
  note_en?: string;
  featured?: boolean;
  badge_es?: string;
  badge_en?: string;
}

const PLANS: Plan[] = [
  {
    id: '01',
    price: 'USD 1.800',
    name_es: 'Branding Estratégico',
    name_en: 'Strategic Branding',
    desc_es: 'Identidad visual completa para diferenciarte y vender más.',
    desc_en: 'Complete visual identity to differentiate you and sell more.',
    features_es: [
      'Estrategia de marca',
      'Logo + Sistema Visual',
      'Manual de Marca Digital',
      'Kit Redes Sociales',
      'Archivos Editables',
    ],
    features_en: [
      'Brand Strategy',
      'Logo + Visual System',
      'Digital Brand Manual',
      'Social Media Kit',
      'Editable Files',
    ],
    href: '/formulario-branding',
    cta_es: 'Reservar mi lugar',
    cta_en: 'Reserve my spot',
    note_es: 'Se reserva con el 50%',
    note_en: '50% deposit to start',
  },
  {
    id: '02',
    price: 'USD 4.200',
    name_es: 'Web High-Performance',
    name_en: 'High-Perf Web',
    desc_es: 'Tu web rápida, moderna y optimizada para conversión.',
    desc_en: 'Your fast, modern website optimized for conversion.',
    features_es: [
      'Diseño UI en Figma',
      'Desarrollo a medida',
      'Animaciones de alto impacto',
      'SEO Técnico incluido',
      'Performance 90+ Score',
    ],
    features_en: [
      'UI Design in Figma',
      'Custom Development',
      'High-impact Animations',
      'Technical SEO included',
      'Performance 90+ Score',
    ],
    href: '/formulario-web',
    cta_es: 'Reservar mi lugar',
    cta_en: 'Reserve my spot',
    note_es: 'Se reserva con el 50%',
    note_en: '50% deposit to start',
    featured: true,
    badge_es: 'Más elegido',
    badge_en: 'Most picked',
  },
  {
    id: '03',
    price: 'USD 800',
    name_es: 'Fotografía IA',
    name_en: 'AI Photography',
    desc_es: 'Imágenes de producto nivel estudio, sin producción ni logística.',
    desc_en: 'Studio-level product images, no production or logistics.',
    features_es: [
      'Generación Fotorrealista IA',
      'Resolución 4K',
      'Entrega en 48 horas',
      'Sin estudio físico',
    ],
    features_en: [
      'Photorealistic AI Generation',
      '4K Resolution',
      '48-hour Delivery',
      'No Physical Studio',
    ],
    href: '/fotografia-ia',
    cta_es: 'Ver Fotografía IA',
    cta_en: 'See AI Photography',
  },
];

/* ─── Ticket stub (left accent card) ──────────────────────────── */
function Ticket({ id, featured }: { id: string; featured?: boolean }) {
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
        border: `1px solid ${featured ? 'var(--rd-accent)' : 'var(--rd-line)'}`,
        background: featured ? 'var(--rd-accent)' : 'var(--rd-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.375rem',
      }}
    >
      <span
        className="font-display leading-none"
        style={{
          fontSize: '1.25rem',
          letterSpacing: '-0.04em',
          color: featured ? '#000000' : 'var(--rd-accent)',
        }}
      >
        {id}
      </span>
      <div
        style={{
          width: '1.25rem',
          height: '1px',
          background: featured ? 'rgba(0,0,0,0.35)' : 'var(--rd-line)',
        }}
      />
    </div>
  );
}

/* ─── Single plan row ──────────────────────────────────────────── */
function PlanRow({ plan, index, es }: { plan: Plan; index: number; es: boolean }) {
  const name = es ? plan.name_es : plan.name_en;
  const desc = es ? plan.desc_es : plan.desc_en;
  const features = es ? plan.features_es : plan.features_en;
  const cta = es ? plan.cta_es : plan.cta_en;
  const note = es ? (plan.note_es ?? null) : (plan.note_en ?? null);
  const badge = plan.featured ? (es ? plan.badge_es : plan.badge_en) : null;

  return (
    <RevealAnimation delay={index * 0.12}>
      <motion.div
        className={`py-8 lg:py-10${plan.featured ? ' px-4 sm:px-6 rounded-2xl my-1' : ''}`}
        style={{
          background: plan.featured ? 'var(--rd-bg-soft)' : 'transparent',
          boxShadow: plan.featured ? '0 0 0 1px var(--rd-accent)' : 'none',
        }}
        whileHover={{ x: plan.featured ? 0 : 3 }}
        transition={SPRING}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0">

          {/* Ticket + info */}
          <div className="flex items-start gap-4 sm:gap-5 flex-1 lg:pr-8 min-w-0">
            <Ticket id={plan.id} featured={plan.featured} />
            <div className="min-w-0 flex-1">
              {badge && (
                <div className="mb-2.5">
                  <span
                    className="rd-meta px-3 py-1 rounded-full"
                    style={{ background: 'var(--rd-accent)', color: '#000000' }}
                  >
                    {badge}
                  </span>
                </div>
              )}
              {/* Plan name is the big display element (Groove does not list public prices) */}
              <h3
                className="font-display leading-[0.95] tracking-tighter"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 3.25rem)',
                  color: plan.featured ? 'var(--rd-accent)' : 'var(--rd-fg)',
                  letterSpacing: '-0.03em',
                }}
              >
                {name}
              </h3>
              <p
                className="rd-meta mt-3"
                style={{ color: 'var(--rd-fg-dim)', maxWidth: '22rem' }}
              >
                {desc}
              </p>
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div
            className="hidden lg:block w-px self-stretch flex-shrink-0"
            style={{ background: 'var(--rd-line)' }}
          />

          {/* Feature checklist */}
          <ul className="flex flex-col gap-2.5 lg:flex-1 lg:px-8 lg:self-stretch lg:justify-center">
            {features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5"
                style={{ fontSize: '0.8125rem', color: 'var(--rd-fg-dim)' }}
              >
                <Check
                  size={13}
                  style={{ color: 'var(--rd-accent)', flexShrink: 0 }}
                />
                {feature}
              </li>
            ))}
          </ul>

          {/* Vertical divider — desktop only */}
          <div
            className="hidden lg:block w-px self-stretch flex-shrink-0"
            style={{ background: 'var(--rd-line)' }}
          />

          {/* CTA */}
          <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0 lg:pl-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={SPRING}>
              <Link
                to={plan.href}
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  whiteSpace: 'nowrap',
                  background: plan.featured ? 'var(--rd-accent)' : 'transparent',
                  color: plan.featured ? '#000000' : 'var(--rd-fg)',
                  border: plan.featured ? 'none' : '1px solid var(--rd-line)',
                }}
              >
                {cta}
              </Link>
            </motion.div>
            {note && (
              <p
                className="rd-meta lg:text-right"
                style={{ color: 'var(--rd-fg-dim)', maxWidth: '9rem' }}
              >
                {note}
              </p>
            )}
          </div>

        </div>
      </motion.div>
    </RevealAnimation>
  );
}

/* ─── Section ──────────────────────────────────────────────────── */
export function Pricing() {
  const { language } = useLanguage();
  const es = language === 'es';

  return (
    <section
      id="pricing"
      className="relative z-10 rd-dark rd-noise -mt-[50vh]"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* Header */}
        <RevealAnimation>
          <div className="mb-16 lg:mb-20">
            <p className="rd-meta mb-4">
              {es ? 'Inversión' : 'Pricing'}
            </p>
            <h2
              className="font-display leading-none tracking-tighter mb-4"
              style={{ fontSize: 'var(--text-section)', color: 'var(--rd-fg)' }}
            >
              {es ? 'Elegí tu paquete' : 'Choose your package'}
            </h2>
            <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', maxWidth: '36rem' }}>
              {es
                ? 'Sin vueltas ni costos ocultos. Precio claro desde el día 1.'
                : 'No fluff, no hidden costs. Clear pricing from day 1.'}
            </p>
          </div>
        </RevealAnimation>

        {/* Plans */}
        <div style={{ borderTop: '1px solid var(--rd-line)' }}>
          {PLANS.map((plan, i) => (
            <div key={plan.id} style={{ borderBottom: '1px solid var(--rd-line)' }}>
              <PlanRow plan={plan} index={i} es={es} />
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <RevealAnimation delay={0.4}>
          <div
            className="mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap"
            style={{ borderTop: '1px solid var(--rd-line)' }}
          >
            <p style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)' }}>
              {es
                ? 'Máximo 3 proyectos al mes — consultá disponibilidad'
                : 'Maximum 3 projects per month — check availability'}
            </p>
            <div className="flex flex-wrap gap-6">
              {(es
                ? ['Proceso claro', 'Velocidad real', 'Calidad garantizada']
                : ['Clear process', 'Real speed', 'Guaranteed quality']
              ).map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2"
                  style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)' }}
                >
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
              {es ? 'Consultá por WhatsApp' : 'Chat on WhatsApp'}
            </a>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
}
