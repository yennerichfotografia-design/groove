import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-20">
            {t('services.title')}
          </h2>
        </RevealAnimation>

        <div className="space-y-24">
          <RevealAnimation delay={0.1}>
            <div className="group">
              <div className="border-t-2 border-black pt-6 sm:pt-8 mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 group-hover:opacity-60 transition-opacity">{t('services.web.title')}</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl">
                  {t('services.web.subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4 py-2 hover:border-black transition-colors">
                    <p className="text-sm sm:text-base text-gray-600">{t(`services.web.items.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div className="group">
              <div className="border-t-2 border-black pt-6 sm:pt-8 mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 group-hover:opacity-60 transition-opacity">{t('services.branding.title')}</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl">
                  {t('services.branding.subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4 py-2 hover:border-black transition-colors">
                    <p className="text-sm sm:text-base text-gray-600">{t(`services.branding.items.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="group">
              <div className="border-t-2 border-black pt-6 sm:pt-8 mb-8 sm:mb-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 group-hover:opacity-60 transition-opacity">{t('services.aiPhotography.title')}</h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl">
                  {t('services.aiPhotography.subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="border-l-2 border-gray-200 pl-4 py-2 hover:border-black transition-colors">
                    <p className="text-sm sm:text-base text-gray-600">{t(`services.aiPhotography.items.${i}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-20">
            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
            >
              {t('services.cta')}
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}