import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ParallaxScale } from './redesign/effects/ParallaxScale';
import { RevealText } from './redesign/effects/RevealText';
import { useLanguage } from '../contexts/LanguageContext';

const STATEMENT = {
  es: 'Velocidad. Diseño. Resultados.',
  en: 'Speed. Design. Results.',
};

const LABEL = {
  es: 'Groove Studio — Agencia Digital',
  en: 'Groove Studio — Digital Agency',
};

export function MidBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play().catch(() => {});
  }, []);

  /* Fade-out the overlay as user scrolls into the section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });
  const overlayOpacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.72, 0.42]),
    { damping: 28, stiffness: 120, mass: 0.6 }
  );

  return (
    <section
      ref={sectionRef}
      className="rd-dark rd-noise relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Video layer with parallax + scale ── */}
      <ParallaxScale className="absolute inset-0 w-full h-full" fromScale={1.12} drift={10}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/mid-banner-video.mp4" type="video/mp4" />
        </video>
      </ParallaxScale>

      {/* ── Cinematic dark overlay — fades as user scrolls in ── */}
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          opacity: overlayOpacity,
          background:
            'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.18) 100%)',
        }}
      />

      {/* ── Fine grid overlay ── */}
      <div className="rd-grid-fine absolute inset-0 z-10 pointer-events-none opacity-30" />

      {/* ── Editorial content — anchored bottom-left ── */}
      <div className="relative z-20 flex flex-col justify-end h-full min-h-[100svh] px-6 pb-14 md:px-14 md:pb-20 lg:px-20 lg:pb-24">

        {/* Meta label */}
        <motion.p
          className="rd-meta mb-5 md:mb-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', damping: 30, stiffness: 140, delay: 0.1 }}
        >
          {LABEL[language]}
        </motion.p>

        {/* Statement headline */}
        <div className="overflow-hidden">
          <RevealText
            as="h2"
            className="font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.94] tracking-[-0.03em] text-[var(--rd-fg)] block"
            stagger={0.07}
            delay={0.18}
            whenInView
          >
            {STATEMENT[language]}
          </RevealText>
        </div>

        {/* Accent rule */}
        <motion.div
          className="mt-8 md:mt-10 h-px w-16"
          style={{ backgroundColor: 'var(--rd-accent)' }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', damping: 24, stiffness: 160, delay: 0.55 }}
        />
      </div>
    </section>
  );
}
