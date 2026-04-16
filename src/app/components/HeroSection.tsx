import heroImage from 'figma:asset/da7803c75fd8cecc7fae0dc6483ec3ca93ebeea1.png';
import heroImageMobile from 'figma:asset/9eb21e371da9b763ee5f45ba0a80bd5095c91d95.png';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-0 min-h-screen bg-black flex items-center overflow-hidden">

      {/* Video background */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35"
          poster={heroImage}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 w-full py-20 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-5xl">
          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white/80">
              {t('hero.line1')}
            </span>
          </motion.div>

          {/* Line 2 - accent, bold, bigger */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="mb-6 sm:mb-8"
          >
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter"
              style={{ color: 'var(--groove-accent)' }}
            >
              {t('hero.line2')}
            </span>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-70 mb-8 sm:mb-10 leading-relaxed px-4 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.button
            onClick={scrollToPricing}
            className="inline-block bg-[var(--groove-accent)] text-black px-8 sm:px-10 py-3.5 text-sm sm:text-base hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium"
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-xs uppercase tracking-[0.2em]">{t('hero.scroll')}</span>
        <motion.div
          className="w-px h-8 sm:h-12 bg-white/20"
          animate={{ scaleY: [1, 1.3, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
