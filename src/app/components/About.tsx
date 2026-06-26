import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealText } from './redesign/effects/RevealText';

/** Spring enter: fade + lift, Spector-range physics */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { type: 'spring' as const, damping: 27, stiffness: 135, delay },
});

const TEAM = [
  {
    photo: '/team-b.webp',
    name: 'Matt',
    roleEs: 'Desarrollo & Producto',
    roleEn: 'Development & Product',
    bioEs: 'Convierte ideas en webs y apps ultrarrápidas, del front al backend.',
    bioEn: 'Turns ideas into ultra-fast websites and apps, front to back.',
  },
  {
    photo: '/team-a.webp',
    name: 'Fide',
    roleEs: 'Branding & Dirección de Arte',
    roleEn: 'Branding & Art Direction',
    bioEs: 'Construye identidades premium que hacen que te elijan.',
    bioEn: 'Builds premium identities that make clients choose you.',
  },
];

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
          <span className="rd-meta">{es ? 'El equipo' : 'The team'}</span>
          <span className="rd-meta">GRV — 2026</span>
        </div>

        {/* Statement */}
        <div className="pt-12 lg:pt-16">
          <RevealText
            as="h2"
            className="font-display [font-size:var(--text-hero-lg)] [line-height:1.0] [letter-spacing:-0.03em] text-[var(--rd-fg)]"
            whenInView
            stagger={0.045}
          >
            {es ? 'Dos socios. Cero intermediarios.' : 'Two partners. Zero middlemen.'}
          </RevealText>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-8 max-w-[46ch]"
            style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg-dim)', lineHeight: 1.7 }}
          >
            {es
              ? 'Sin agencias ni capas de gerentes. Hablás directo con quienes diseñan y construyen tu proyecto.'
              : 'No agencies, no layers of managers. You talk directly to the people designing and building your project.'}
          </motion.p>
        </div>
      </div>

      {/* ── Team grid ───────────────────────────────────────── */}
      <div
        className="max-w-[1440px] mx-auto"
        style={{ padding: 'clamp(3rem, 6vw, 5rem) var(--space-section-x) var(--space-section-y)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TEAM.map((m, i) => (
            <motion.article key={m.name} {...fadeUp(0.1 + i * 0.12)} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-xl mb-6" style={{ aspectRatio: '4/5' }}>
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                {/* Name on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <h3 className="font-display font-semibold text-white leading-none" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
                    {m.name}
                  </h3>
                  <span className="rd-meta" style={{ color: 'var(--rd-accent)' }}>
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Role + bio */}
              <p className="rd-meta mb-3" style={{ color: 'var(--rd-accent)' }}>
                {es ? m.roleEs : m.roleEn}
              </p>
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--rd-fg)', lineHeight: 1.5, maxWidth: '34ch' }}>
                {es ? m.bioEs : m.bioEn}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.3)} className="mt-14">
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
