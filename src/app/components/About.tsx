import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';
import { StickyNarrative } from './redesign/effects/StickyNarrative';

const profileImageMobile = '/about-profile.webp';
const profileImageDesktop = '/about-profile-desktop.webp';

/** Spring enter: fade + lift, Spector-range physics */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { type: 'spring' as const, damping: 27, stiffness: 135, delay },
});

export function About() {
  const { t, language } = useLanguage();
  const es = language === 'es';

  return (
    <section id="about" className="rd-dark rd-noise relative overflow-hidden">

      {/* ── Header bar ──────────────────────────────────────── */}
      <div
        className="max-w-[1440px] mx-auto"
        style={{ padding: 'var(--space-section-y) var(--space-section-x) 0' }}
      >
        <div className="flex items-center justify-between border-b rd-rule pb-5">
          <span className="rd-meta">{es ? 'Sobre mí' : 'About'}</span>
          <span className="rd-meta">GRV — 2026</span>
        </div>
      </div>

      {/* ══ MOBILE ══════════════════════════════════════════════ */}
      <div
        className="lg:hidden"
        style={{ padding: '0 var(--space-section-x) var(--space-section-y)' }}
      >
        {/* Photo */}
        <div className="relative mt-10 mb-12 overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <img
            src={profileImageMobile}
            alt={es ? 'Retrato de Matías' : 'Matías — portrait'}
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none"
            style={{ height: '45%', background: 'linear-gradient(to top, var(--rd-bg) 15%, transparent)' }}
          />
        </div>

        {/* Statement headline */}
        <RevealText
          as="h2"
          className="font-display [font-size:var(--text-section)] [line-height:1.05] [letter-spacing:-0.025em] text-[var(--rd-fg)] mb-8"
          whenInView
          stagger={0.045}
        >
          {t('about.title')}
        </RevealText>

        {/* Intro */}
        <motion.p
          {...fadeUp(0.1)}
          className="mb-10"
          style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', lineHeight: 1.72 }}
        >
          {t('about.intro')}
        </motion.p>

        {/* Manifesto — hairline rows */}
        <div className="mb-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              {...fadeUp(0.08 + i * 0.08)}
              className="border-t rd-rule py-5"
            >
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg)', lineHeight: 1.5 }}>
                {t(`about.points.${i}`)}
              </p>
            </motion.div>
          ))}
          <div className="border-t rd-rule" />
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.32)}>
          <Link
            to="/metodo"
            className="inline-flex items-center gap-3 border rd-rule text-[var(--rd-fg)] hover:bg-[var(--rd-fg)] hover:text-[var(--rd-bg)] transition-colors duration-300"
            style={{ padding: '0.875rem 1.75rem', fontSize: 'var(--text-body)' }}
          >
            {t('about.cta')}
            <ArrowRight size={14} className="shrink-0" />
          </Link>
        </motion.div>
      </div>

      {/* ══ DESKTOP ═════════════════════════════════════════════ */}
      <div
        className="hidden lg:block"
        style={{ padding: '0 var(--space-section-x) 0' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <StickyNarrative
            stickyTop="top-24"
            leftWidth="lg:w-[44%]"
            className="pt-16"
            left={
              /* Portrait — full sticky height, editorial fade at bottom */
              <div className="relative overflow-hidden" style={{ height: '80vh' }}>
                <img
                  src={profileImageDesktop}
                  alt={es ? 'Retrato de Matías' : 'Matías — portrait'}
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{ height: '40%', background: 'linear-gradient(to top, var(--rd-bg) 10%, transparent)' }}
                />
              </div>
            }
            right={
              <div style={{ paddingBottom: 'var(--space-section-y)' }}>

                {/* Giant editorial statement */}
                <RevealText
                  as="h2"
                  className="font-display [font-size:var(--text-hero-lg)] [line-height:1.0] [letter-spacing:-0.03em] text-[var(--rd-fg)] mb-14"
                  whenInView
                  stagger={0.04}
                >
                  {t('about.title')}
                </RevealText>

                {/* Intro paragraph */}
                <motion.p
                  {...fadeUp(0.1)}
                  className="mb-16"
                  style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', lineHeight: 1.75, maxWidth: '48ch' }}
                >
                  {t('about.intro')}
                </motion.p>

                {/* Manifesto — hairline rows */}
                <div className="mb-14">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      {...fadeUp(0.08 + i * 0.1)}
                      className="border-t rd-rule py-6"
                    >
                      <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg)', lineHeight: 1.5 }}>
                        {t(`about.points.${i}`)}
                      </p>
                    </motion.div>
                  ))}
                  <div className="border-t rd-rule" />
                </div>

                {/* CTA — Spector bordered button */}
                <motion.div {...fadeUp(0.38)}>
                  <Link
                    to="/metodo"
                    className="inline-flex items-center gap-4 border rd-rule text-[var(--rd-fg)] hover:bg-[var(--rd-fg)] hover:text-[var(--rd-bg)] transition-colors duration-300"
                    style={{ padding: '1rem 2rem' }}
                  >
                    <span className="font-display" style={{ fontSize: '1rem', letterSpacing: '0.015em' }}>
                      {t('about.cta')}
                    </span>
                    <ArrowRight size={16} className="shrink-0" />
                  </Link>
                </motion.div>
              </div>
            }
          />
        </div>
      </div>

      {/* ── Process section ─────────────────────────────────── */}
      <div
        className="border-t rd-rule"
        style={{ padding: 'var(--space-section-y) var(--space-section-x)' }}
      >
        <div className="max-w-[1440px] mx-auto">
          <motion.p {...fadeUp()} className="rd-meta mb-10">
            {t('about.howTitle')}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className={`border-t rd-rule pt-5 pb-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pb-0${i === 0 ? ' lg:border-l-0' : ''}`}
              >
                <div className="lg:pl-6 lg:py-6">
                  <span className="rd-meta block mb-2">0{i + 1}</span>
                  <p style={{ fontSize: 'var(--text-body)', color: 'var(--rd-fg)', lineHeight: 1.4 }}>
                    {t(`about.steps.${i}`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
