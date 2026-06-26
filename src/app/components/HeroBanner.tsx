import { motion } from 'motion/react';
import { ParallaxScale } from './redesign/effects/ParallaxScale';
import { RevealText } from './redesign/effects/RevealText';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroBanner() {
  const { t } = useLanguage();

  return (
    <section className="rd-dark rd-noise relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* Video background — ParallaxScale: zoom-out + vertical drift on scroll */}
      <ParallaxScale className="absolute inset-0 w-full h-full" fromScale={1.12} drift={10}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero-banner-video.mp4" type="video/mp4" />
        </video>
      </ParallaxScale>

      {/* Cinematic overlay — dark vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.08) 42%, rgba(10,10,10,0.80) 100%)',
        }}
      />

      {/* Blueprint grid */}
      <div className="rd-grid-fine absolute inset-0 z-20 pointer-events-none" />

      {/* Editorial content — bottom-anchored */}
      <div
        className="relative z-30 flex flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
        style={{ minHeight: '100svh' }}
      >

        {/* Meta label */}
        <motion.span
          className="rd-meta mb-5 block"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 140, delay: 0.5 }}
        >
          Groove — Digital Design Studio
        </motion.span>

        {/* Heading line 1 */}
        <RevealText
          as="h1"
          className="font-display text-[clamp(2.8rem,8.5vw,8rem)] leading-[0.9] tracking-tight text-white block"
          delay={0.15}
          stagger={0.055}
        >
          {t('hero.line1')}
        </RevealText>

        {/* Heading line 2 — accent color */}
        <RevealText
          as="h1"
          className="font-display text-[clamp(2.8rem,8.5vw,8rem)] leading-[0.9] tracking-tight text-[#72FF56] block"
          delay={0.3}
          stagger={0.055}
        >
          {t('hero.line2')}
        </RevealText>

        {/* Hairline rule */}
        <motion.div
          className="mt-8 mb-6 h-[1px] w-12"
          style={{ backgroundColor: 'var(--rd-line)', transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ type: 'spring', damping: 26, stiffness: 150, delay: 0.72 }}
        />

        {/* Subtitle */}
        <motion.p
          className="max-w-[44ch] text-sm sm:text-base leading-relaxed"
          style={{ color: 'var(--rd-fg-dim)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 130, delay: 0.85 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="mt-8 inline-flex self-start items-center gap-4 border px-7 py-3.5 text-xs uppercase tracking-[0.18em] font-medium"
          style={{ borderColor: '#72FF56', color: '#72FF56' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 130, delay: 1.0 }}
          whileHover={{ backgroundColor: 'rgba(114,255,86,0.07)' }}
          whileTap={{ scale: 0.97 }}
        >
          {t('hero.cta')}
          <span aria-hidden>→</span>
        </motion.a>
      </div>

      {/* Scroll hint — bottom right */}
      <motion.div
        className="rd-meta absolute bottom-8 right-6 z-30 flex items-center gap-3 lg:right-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <motion.span
          className="block h-[1px] w-8"
          style={{ backgroundColor: 'var(--rd-fg-dim)', transformOrigin: 'left' }}
          animate={{ scaleX: [0.45, 1, 0.45] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        />
        {t('hero.scroll')}
      </motion.div>
    </section>
  );
}
