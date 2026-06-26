import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

// ── RevealText — word-by-word spring mask reveal ──────────────────────────────
function RevealText({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <span ref={ref} aria-label={children} style={{ display: 'block' }}>
      {children.split(' ').map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.28em',
            verticalAlign: 'bottom',
          }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            animate={{ y: inView ? 0 : '110%' }}
            transition={{
              type: 'spring',
              damping: 28,
              stiffness: 140,
              delay: i * 0.07,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ── Benefit data (bilingual) ──────────────────────────────────────────────────
const benefits = [
  {
    num: '2s',
    titleEs: 'Tu web carga en menos de 2 segundos',
    titleEn: 'Your site loads in under 2 seconds',
    subtitleEs: 'El 53% se va si tarda más de 3.',
    subtitleEn: '53% leave if it takes over 3.',
  },
  {
    num: '0',
    titleEs: 'Cero intermediarios',
    titleEn: 'Zero middlemen',
    subtitleEs: 'Hablás directo con quien diseña y programa.',
    subtitleEn: 'You talk directly to the one who designs and codes.',
  },
  {
    num: '95+',
    titleEs: 'Score en Google PageSpeed',
    titleEn: 'Google PageSpeed score',
    subtitleEs: 'Más rápido = mejor SEO = más ventas.',
    subtitleEn: 'Faster = better SEO = more sales.',
  },
  {
    num: '3–5',
    titleEs: 'Semanas y tenés tu web lista',
    titleEn: 'Weeks and your site is live',
    subtitleEs: 'No meses. No sorpresas.',
    subtitleEn: 'Not months. No surprises.',
  },
];

// Hairline borders: mobile 1-col → sm 2-col → lg 4-col
const BORDER: string[] = [
  '',
  'border-t sm:border-t-0 sm:border-l',
  'border-t lg:border-t-0 lg:border-l',
  'border-t sm:border-l lg:border-t-0',
];

// ── BenefitCard ───────────────────────────────────────────────────────────────
interface Benefit {
  num: string;
  titleEs: string;
  titleEn: string;
  subtitleEs: string;
  subtitleEn: string;
}

function BenefitCard({
  benefit,
  index,
  lang,
}: {
  benefit: Benefit;
  index: number;
  lang: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const delay = index * 0.09;

  return (
    <motion.article
      ref={ref}
      className={`flex flex-col p-8 sm:p-10 lg:px-10 lg:py-20 ${BORDER[index] ?? ''}`}
      style={{ borderColor: 'var(--rd-line)' }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 32 }}
      transition={{ type: 'spring', damping: 26, stiffness: 130, delay }}
    >
      {/* Giant editorial number */}
      <motion.span
        className="font-display block"
        style={{
          fontSize: 'clamp(4.5rem, 8vw, 8.5rem)',
          color: 'var(--rd-accent)',
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          marginBottom: '2.5rem',
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 16 }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 120,
          delay: delay + 0.07,
        }}
      >
        {benefit.num}
      </motion.span>

      {/* Title + subtitle */}
      <div className="mt-auto">
        <h3
          style={{
            fontSize: 'var(--text-body, 1rem)',
            color: 'var(--rd-fg)',
            fontWeight: 500,
            lineHeight: 1.35,
            marginBottom: '0.625rem',
          }}
        >
          {lang === 'es' ? benefit.titleEs : benefit.titleEn}
        </h3>
        <p className="rd-meta">
          {lang === 'es' ? benefit.subtitleEs : benefit.subtitleEn}
        </p>
      </div>
    </motion.article>
  );
}

// ── WhyChoose ─────────────────────────────────────────────────────────────────
export function WhyChoose() {
  const { language } = useLanguage();

  return (
    <section
      id="why"
      className="rd-dark rd-noise relative z-10 overflow-hidden"
      style={{ padding: 'var(--space-section-y, 6rem) 0' }}
    >
      {/* Blueprint grid */}
      <div className="rd-grid-fine absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div
        className="relative max-w-[1440px] mx-auto"
        style={{ padding: '0 var(--space-section-x, 2rem)' }}
      >
        {/* Editorial section header */}
        <div
          className="border-b"
          style={{
            borderColor: 'var(--rd-line)',
            paddingBottom: 'clamp(2rem, 4vw, 4rem)',
            marginBottom: 'clamp(2.5rem, 5vw, 5rem)',
          }}
        >
          <p className="rd-meta" style={{ marginBottom: '1.25rem' }}>
            {language === 'es' ? '— Por qué elegirnos' : '— Why choose us'}
          </p>
          <h2
            className="font-display"
            style={{
              fontSize: 'var(--text-section, clamp(2.5rem, 5vw, 4rem))',
              color: 'var(--rd-fg)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            <RevealText>
              {language === 'es' ? 'Números que hablan' : 'Numbers that speak'}
            </RevealText>
          </h2>
        </div>

        {/* 4-benefit editorial grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <BenefitCard key={b.num} benefit={b} index={i} lang={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
