import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';

/**
 * Split a paragraph at the first ". " boundary so we get two editorial "beats":
 *   beat 1 → setup  (rendered muted)
 *   beat 2 → punchline (rendered bright)
 * Falls back to a 1/3 word-split if no sentence boundary is found.
 */
function splitAtFirstSentence(text: string): [string, string] {
  const idx = text.indexOf('. ');
  if (idx !== -1) return [text.slice(0, idx + 1), text.slice(idx + 2)];
  const words = text.split(' ');
  const cut = Math.ceil(words.length / 3);
  return [words.slice(0, cut).join(' '), words.slice(cut).join(' ')];
}

/** Shared spring-up variant — heavy spring, non-robotic. */
const springUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, damping: 28, stiffness: 130 },
  },
};

/** Stagger container for body section. */
const staggerBlock = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export function Intro() {
  const { t, language } = useLanguage();

  const text1 = t('intro.text1');
  const text2 = t('intro.text2');
  const [dim, bright] = splitAtFirstSentence(text1);

  const metaLabel = language === 'es' ? 'Manifiesto' : 'Manifesto';

  return (
    <section
      id="intro"
      className="rd-dark rd-grid rd-noise relative overflow-hidden"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      {/* Ambient accent glow — top-right, extremely subtle */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 pointer-events-none select-none"
        style={{
          width: '60vw',
          height: '60vw',
          background:
            'radial-gradient(circle, var(--rd-accent) 0%, transparent 70%)',
          opacity: 0.035,
          transform: 'translate(30%, -30%)',
        }}
      />

      <div
        className="relative z-10 max-w-[1440px] mx-auto"
        style={{ padding: '0 var(--space-section-x)' }}
      >

        {/* ─── Meta label row ──────────────────────────────── */}
        <motion.div
          className="flex items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={springUp}
          style={{ marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          <span className="rd-meta" style={{ color: 'var(--rd-accent)' }}>
            § 001
          </span>
          <span
            aria-hidden="true"
            style={{
              display: 'block',
              width: '2.5rem',
              height: '1px',
              background: 'var(--rd-line)',
              flexShrink: 0,
            }}
          />
          <span className="rd-meta">{metaLabel}</span>
        </motion.div>

        {/* ─── Hairline — expands left → right on scroll ───── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 90,
            delay: 0.1,
          }}
          style={{
            height: '1px',
            background: 'var(--rd-line)',
            transformOrigin: 'left center',
            marginBottom: 'clamp(3rem, 5vw, 5.5rem)',
          }}
        />

        {/* ─── Editorial statement (two-tone Spector split) ─── */}
        {/*
         *  Beat 1 — dim: "Tu web debería ser tu mejor vendedor."
         *  Beat 2 — bright: "Si no vende, es un gasto. Creo activos digitales…"
         *
         *  RevealText splits each beat word-by-word with spring stagger.
         *  Colors are applied via parent wrappers (RevealText has no `style` prop).
         */}
        <div
          className="font-display font-semibold tracking-tight"
          style={{
            fontSize: 'clamp(2.25rem, 4.2vw + 0.5rem, 6rem)',
            lineHeight: '0.94',
            marginBottom: 'clamp(4rem, 7vw, 7rem)',
          }}
        >
          {/* Beat 1: muted setup */}
          <div style={{ color: 'var(--rd-fg-dim)' }}>
            <RevealText as="div" whenInView stagger={0.04} delay={0}>
              {dim}
            </RevealText>
          </div>

          {/* Beat 2: bright punchline */}
          <div style={{ color: 'var(--rd-fg)' }}>
            <RevealText as="div" whenInView stagger={0.04} delay={0.22}>
              {bright}
            </RevealText>
          </div>
        </div>

        {/* ─── Body copy (text2) with staggered spring reveal ─ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerBlock}
        >
          {/* Thin rule above body */}
          <motion.div
            variants={springUp}
            style={{
              height: '1px',
              background: 'var(--rd-line)',
              marginBottom: 'clamp(1.5rem, 2.5vw, 2.5rem)',
            }}
          />

          <div
            className="grid items-start gap-8 md:gap-16"
            style={{ gridTemplateColumns: 'auto 1fr' }}
          >
            {/* Left: section index label */}
            <motion.div
              className="rd-meta"
              variants={springUp}
              style={{ lineHeight: '1.8', paddingTop: '0.15em' }}
            >
              <span style={{ color: 'var(--rd-accent)' }}>01</span>
              <br />
              Groove
            </motion.div>

            {/* Right: supporting copy */}
            <motion.p
              className="leading-relaxed"
              variants={springUp}
              style={{
                color: 'var(--rd-fg-dim)',
                fontSize: 'var(--text-body-lg)',
                maxWidth: '42rem',
              }}
            >
              {text2}
            </motion.p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
