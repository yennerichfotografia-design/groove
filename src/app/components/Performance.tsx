import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';

/* ─── Case metadata: metrics are content-agnostic ─── */
type CaseData = { metric: string; labelEs: string; labelEn: string };

const CASES: CaseData[] = [
  { metric: '+340%', labelEs: 'Conversión',       labelEn: 'Conversion'   },
  { metric: '×3',    labelEs: 'Usuarios activos', labelEn: 'Active users' },
  { metric: '<3M',   labelEs: 'Posicionamiento',  labelEn: 'Positioning'  },
];

/* ─── Spring physics: damping 26, stiffness 140 (within 24-30 / 120-160) ─── */
const spring = { type: 'spring' as const, damping: 26, stiffness: 140 };

/* ─── Single case row ─── */
function CaseRow({
  index,
  metric,
  metricLabel,
  title,
  desc,
}: {
  index: number;
  metric: string;
  metricLabel: string;
  title: string;
  desc: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-[clamp(180px,22vw,320px)_1fr_48px] gap-8 md:gap-16 py-12 md:py-20 items-start"
      style={{ borderTop: '1px solid var(--rd-line)' }}
    >
      {/* Giant metric in accent green */}
      <div>
        <motion.span
          className="font-display block leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--rd-accent)', letterSpacing: '-0.03em' }}
          initial={{ y: 64, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ ...spring, delay: 0.04 }}
        >
          {metric}
        </motion.span>
        <motion.span
          className="rd-meta block"
          style={{ marginTop: '0.875rem' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.38 }}
        >
          {metricLabel}
        </motion.span>
      </div>

      {/* Case title + description */}
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ ...spring, delay: 0.16 }}
      >
        <h3
          style={{
            fontSize: 'var(--text-card-title)',
            color: 'var(--rd-fg)',
            fontWeight: 500,
            lineHeight: 1.2,
            marginBottom: '0.875rem',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 'var(--text-body)',
            color: 'var(--rd-fg-dim)',
            lineHeight: 1.72,
            maxWidth: '46ch',
          }}
        >
          {desc}
        </p>
      </motion.div>

      {/* Case index — right-aligned meta */}
      <motion.span
        className="rd-meta hidden md:block text-right"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.48 }}
      >
        0{index + 1}
      </motion.span>
    </div>
  );
}

/* ─── Section ─── */
export function Performance() {
  const { t, language } = useLanguage();

  return (
    <section
      className="rd-dark rd-noise relative z-10 overflow-hidden"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      {/* Blueprint grid */}
      <div className="rd-grid-fine absolute inset-0 pointer-events-none" />

      <div
        className="relative z-10 max-w-[1440px] mx-auto"
        style={{ padding: '0 var(--space-section-x)' }}
      >
        {/* Section header — editorial label + display title */}
        <div
          className="flex items-end justify-between"
          style={{
            borderBottom: '1px solid var(--rd-line)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'var(--text-section)',
              color: 'var(--rd-fg)',
              lineHeight: 1.1,
              maxWidth: '20ch',
            }}
          >
            <RevealText as="span" whenInView stagger={0.055}>
              {t('performance.title')}
            </RevealText>
          </h2>
          <span className="rd-meta hidden sm:block">Case Studies — 03</span>
        </div>

        {/* Case rows */}
        <div>
          {CASES.map((c, i) => (
            <CaseRow
              key={i}
              index={i}
              metric={c.metric}
              metricLabel={language === 'es' ? c.labelEs : c.labelEn}
              title={t(`performance.projects.${i}.title`)}
              desc={t(`performance.projects.${i}.desc`)}
            />
          ))}
        </div>

        {/* Closing hairline */}
        <div style={{ borderTop: '1px solid var(--rd-line)' }} />
      </div>
    </section>
  );
}
