import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';
import { motion, AnimatePresence } from 'motion/react';

const SPRING = { type: 'spring' as const, damping: 28, stiffness: 140 };

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.items.${i}.q`),
    answer: t(`faq.items.${i}.a`),
  }));

  return (
    <section
      id="faq"
      className="rd-dark rd-noise relative z-10"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div
          style={{
            borderTop: '1px solid var(--rd-line)',
            paddingTop: 'clamp(1.5rem, 3vw, 3rem)',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          <span className="rd-meta">FAQ</span>
          <div
            style={{
              fontSize: 'var(--text-section)',
              lineHeight: 1.05,
              color: 'var(--rd-fg)',
              marginTop: '0.75rem',
            }}
          >
            <RevealText
              as="h2"
              className="font-display tracking-tight"
              whenInView
              delay={0.1}
            >
              {t('faq.title')}
            </RevealText>
          </div>
        </div>

        {/* ── Accordion list ─────────────────────────────────── */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderTop: '1px solid var(--rd-line)' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-start justify-between gap-6 group pr-20 lg:pr-0"
                style={{
                  paddingTop: 'clamp(1.25rem, 2.5vw, 2rem)',
                  paddingBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                  color: 'var(--rd-fg)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span
                  className="font-semibold"
                  style={{
                    fontSize: 'var(--text-card-title)',
                    lineHeight: 1.2,
                    opacity: openIndex === index ? 1 : 0.8,
                    transition: 'opacity 0.2s ease',
                  }}
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={SPRING}
                  className="flex-shrink-0"
                  style={{
                    color: 'var(--rd-accent)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    lineHeight: 1,
                    marginTop: '0.1em',
                    display: 'block',
                    fontWeight: 300,
                  }}
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: SPRING,
                      opacity: { duration: 0.22, ease: 'easeOut' },
                    }}
                    className="overflow-hidden"
                  >
                    <p
                      style={{
                        color: 'var(--rd-fg-dim)',
                        fontSize: 'var(--text-body-lg)',
                        lineHeight: 1.75,
                        paddingBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                        maxWidth: '72ch',
                      }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Closing hairline */}
          <div style={{ borderTop: '1px solid var(--rd-line)' }} />
        </div>

        {/* ── CTA ────────────────────────────────────────────── */}
        <div style={{ marginTop: 'clamp(2.5rem, 5vw, 5rem)' }}>
          <Link
            to="/preguntas-frecuentes"
            className="rd-meta inline-flex items-center gap-3 transition-opacity hover:opacity-60"
            style={{ color: 'var(--rd-accent)' }}
          >
            {t('faq.seeAll')}
            <span aria-hidden="true" style={{ fontSize: '1em' }}>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
