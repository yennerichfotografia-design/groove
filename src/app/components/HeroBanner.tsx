import { motion } from 'motion/react';
import { ParallaxScale } from './redesign/effects/ParallaxScale';
import { RevealText } from './redesign/effects/RevealText';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroBanner() {
  const { language } = useLanguage();
  const es = language === 'es';

  return (
    <section className="rd-dark rd-noise sticky top-0 z-0 w-full overflow-hidden" style={{ height: '100svh' }}>

      {/* Video background — ParallaxScale: zoom-out + vertical drift on scroll */}
      <ParallaxScale className="absolute inset-0 w-full h-full" fromScale={1.12} drift={10}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/hero-image.webp"
          className="w-full h-full object-cover"
        >
          <source src="/hero-bubble-video.mp4" type="video/mp4" />
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

      {/* Editorial statement — mid-page cinematic banner (distinct from the hero) */}
      <div
        className="relative z-30 flex flex-col justify-center px-6 sm:px-10 lg:px-16"
        style={{ minHeight: '100svh' }}
      >
        <motion.span
          className="rd-meta mb-6 block"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', damping: 28, stiffness: 140 }}
        >
          {es ? 'Groove — Estudio Digital' : 'Groove — Digital Studio'}
        </motion.span>

        <h2 className="font-display text-[clamp(2.25rem,8.5vw,8rem)] leading-[0.92] tracking-tight max-w-[15ch]">
          <RevealText as="span" whenInView stagger={0.05} className="block text-white">
            {es ? 'Marcas que' : 'Brands that'}
          </RevealText>
          <RevealText as="span" whenInView stagger={0.05} delay={0.12} className="block text-[var(--rd-accent)]">
            {es ? 'no pasan desapercibidas' : 'refuse to blend in'}
          </RevealText>
        </h2>

        <motion.div
          className="mt-8 h-[1px] w-12"
          style={{ backgroundColor: 'var(--rd-line)', transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 26, stiffness: 150, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
