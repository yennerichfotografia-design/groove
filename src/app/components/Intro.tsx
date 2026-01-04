import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Intro() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <RevealAnimation delay={0.1}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8">
              {t('intro.text1')}
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-base sm:text-lg text-gray-600">
              {t('intro.text2')}
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}