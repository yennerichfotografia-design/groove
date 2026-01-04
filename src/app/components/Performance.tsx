import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Performance() {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative z-10 bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-20">
            {t('performance.title')}
          </h2>
        </RevealAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <RevealAnimation delay={0.1}>
            <div className="group">
              <div className="border-t-2 border-black pt-4 sm:pt-6 mb-4 sm:mb-6">
                <div className="text-sm tracking-wider text-gray-400 mb-2">01</div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 group-hover:opacity-60 transition-opacity">{t('performance.projects.0.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('performance.projects.0.desc')}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="group">
              <div className="border-t-2 border-black pt-4 sm:pt-6 mb-4 sm:mb-6">
                <div className="text-sm tracking-wider text-gray-400 mb-2">02</div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 group-hover:opacity-60 transition-opacity">{t('performance.projects.1.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('performance.projects.1.desc')}</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="group">
              <div className="border-t-2 border-black pt-4 sm:pt-6 mb-4 sm:mb-6">
                <div className="text-sm tracking-wider text-gray-400 mb-2">03</div>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 group-hover:opacity-60 transition-opacity">{t('performance.projects.2.title')}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{t('performance.projects.2.desc')}</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}