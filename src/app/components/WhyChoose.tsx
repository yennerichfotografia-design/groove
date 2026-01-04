import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function WhyChoose() {
  const { t } = useLanguage();
  
  return (
    <section id="why" className="relative z-10 bg-gray-50 py-20 lg:py-32 -mt-[50vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-16">
            {t('why.title')}
          </h2>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <RevealAnimation delay={0.1}>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">{t('why.figmaSource.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('why.figmaSource.desc')}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">{t('why.speedControl.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('why.speedControl.desc')}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">{t('why.buildsWell.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('why.buildsWell.desc')}
              </p>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">{t('why.clearProcess.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600">
                {t('why.clearProcess.desc')}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}