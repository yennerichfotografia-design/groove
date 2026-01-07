import { ImageWithFallback } from './figma/ImageWithFallback';
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
    <section className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 640px)" srcSet={heroImage} />
          <img
            src={heroImageMobile}
            alt="Hero background"
            className="w-full h-full object-cover opacity-60"
          />
        </picture>
      </div>

      <div className="relative z-10 w-full py-20 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto opacity-90 mb-6 sm:mb-8 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.button
            onClick={scrollToPricing}
            className="inline-block bg-white text-black px-6 sm:px-8 py-3 text-sm sm:text-base hover:bg-gray-200 transition-colors"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.cta')}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-xs uppercase tracking-wider">{t('hero.scroll')}</span>
        <div className="w-px h-8 sm:h-12 bg-white/30"></div>
      </motion.div>
    </section>
  );
}