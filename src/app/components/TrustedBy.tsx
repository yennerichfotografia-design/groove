import academyLogo from 'figma:asset/ab18b8bee118cdc4e3d1089a0d6e01aa1fc48882.png';
import chulaLogo from 'figma:asset/4461a3de7067891ad7d7bfa7f3f4197489ab6a38.png';
import forzaLogo from 'figma:asset/15aba8bd1e7b556e33a4adadc64c41b0399c03bc.png';
import frescaLogo from 'figma:asset/25db106fa7b359e421fd49c538e26a5f158e508c.png';
import pollyLogo from 'figma:asset/1c5fa85e3733084144b3bf92294c3d7eb1f37362.png';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { LogoCarousel3D } from './redesign/effects/LogoCarousel3D';
import { RevealText } from './redesign/effects/RevealText';

const logos = [
  { src: academyLogo, alt: 'Academy' },
  { src: chulaLogo, alt: 'Chula' },
  { src: forzaLogo, alt: 'Forza' },
  { src: frescaLogo, alt: 'Fresca' },
  { src: pollyLogo, alt: 'Polly' },
  { src: '/logo-natufarma.webp', alt: 'Natufarma' },
];

export function TrustedBy() {
  const { language } = useLanguage();

  return (
    <section
      className="rd-dark rd-noise relative z-10 overflow-hidden"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      {/* Blueprint grid overlay */}
      <div className="rd-grid-fine absolute inset-0 pointer-events-none" />

      {/* Top hairline separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'var(--rd-line)' }}
      />

      <div
        className="relative z-10 max-w-[1440px] mx-auto"
        style={{ padding: '0 var(--space-section-x)' }}
      >
        {/* Meta label */}
        <motion.p
          className="rd-meta mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {language === 'es' ? '— Clientes' : '— Clients'}
        </motion.p>

        {/* Giant editorial display title */}
        <div
          className="mb-5"
          style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
        >
          <RevealText
            as="h2"
            className="font-display leading-[0.92] tracking-tight"
            stagger={0.07}
            delay={0.1}
            whenInView
          >
            {language === 'es' ? 'Ya confiaron en nosotros' : 'They already trusted us'}
          </RevealText>
        </div>

        {/* Hairline rule between title and carousel */}
        <motion.div
          className="h-px mb-16 sm:mb-20 lg:mb-24"
          style={{ background: 'var(--rd-line)' }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', damping: 30, stiffness: 80, delay: 0.35 }}
        />

        {/* Logo carousel — logos inverted to white via scoped CSS below */}
        <motion.div
          className="tb-carousel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', damping: 26, stiffness: 90, delay: 0.5 }}
        >
          <LogoCarousel3D logos={logos} speed={38} />
        </motion.div>
      </div>

      {/* Bottom hairline separator */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'var(--rd-line)' }}
      />

      {/*
        Scoped styles: invert logos to white on the dark background.
        Specificity of `.tb-carousel img` (0,1,1) beats Tailwind's
        `.opacity-60` (0,1,0), so !important is not needed for opacity.
        The hover rule beats Tailwind's `hover:opacity-100` (0,2,0) by
        carrying the element selector (0,2,1).
      */}
      <style>{`
        .tb-carousel img {
          filter: brightness(0) invert(1);
          opacity: 0.45;
        }
        .tb-carousel img:hover {
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
}
