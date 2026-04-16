import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play().catch(() => {});
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-0 min-h-dvh bg-black flex items-center overflow-hidden landscape-safe">

      <div className="absolute inset-0 -z-20 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-35"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 w-full flex items-center justify-center" style={{ padding: 'var(--space-section-y) var(--space-section-x)' }}>
        <div className="text-center text-white max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block font-light tracking-tight text-white/80" style={{ fontSize: 'var(--text-hero-sm)' }}>
              {t('hero.line1')}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            style={{ marginBottom: 'var(--space-gap)' }}
          >
            <span
              className="block font-bold tracking-tighter"
              style={{ fontSize: 'var(--text-hero-lg)', color: 'var(--groove-accent)' }}
            >
              {t('hero.line2')}
            </span>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto opacity-70 leading-relaxed text-gray-300"
            style={{ fontSize: 'var(--text-body-lg)', marginBottom: 'var(--space-gap)', padding: '0 var(--space-section-x)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.button
            onClick={scrollToPricing}
            className="inline-block bg-[var(--groove-accent)] text-black px-8 sm:px-10 py-3.5 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium"
            style={{ fontSize: 'var(--text-body)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('hero.cta')}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span style={{ fontSize: 'var(--text-small)' }} className="uppercase tracking-[0.15em] text-center whitespace-nowrap">{t('hero.scroll')}</span>
        <motion.div
          className="w-px h-6 sm:h-12 bg-white/20"
          animate={{ scaleY: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
