import { ImageWithFallback } from './figma/ImageWithFallback';
import profileImage from 'figma:asset/c7d69569fe29a1d285dd404c1a3e3baafc4146c9.png';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 bg-black text-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20">
          <div className="order-2 lg:order-1">
            <RevealAnimation>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-8">
                {t('about.title')}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <p className="text-xl text-gray-400 mb-8">
                {t('about.intro')}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-gray-400 mb-4">
                {t('about.belief')}
              </p>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>• {t('about.points.0')}</li>
                <li>• {t('about.points.1')}</li>
                <li>• {t('about.points.2')}</li>
              </ul>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-lg text-gray-400 mb-6">
                {t('about.description')}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="text-gray-400 mb-8">
                {t('about.experience')}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <Link
                to="/metodo"
                className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors"
              >
                {t('about.cta')}
              </Link>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.2} direction="left" className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden rounded-lg sm:rounded-none">
              <img
                src={profileImage}
                alt="Professional portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealAnimation>
        </div>

        <div>
          <RevealAnimation>
            <h3 className="text-3xl sm:text-4xl mb-12">{t('about.howTitle')}</h3>
          </RevealAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            <RevealAnimation delay={0.1}>
              <div className="border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-colors group">
                <div className="text-6xl sm:text-7xl mb-4 font-light opacity-40 group-hover:opacity-100 transition-opacity">1</div>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t('about.steps.0')}</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-colors group">
                <div className="text-6xl sm:text-7xl mb-4 font-light opacity-40 group-hover:opacity-100 transition-opacity">2</div>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t('about.steps.1')}</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-colors group">
                <div className="text-6xl sm:text-7xl mb-4 font-light opacity-40 group-hover:opacity-100 transition-opacity">3</div>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t('about.steps.2')}</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-colors group">
                <div className="text-6xl sm:text-7xl mb-4 font-light opacity-40 group-hover:opacity-100 transition-opacity">4</div>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t('about.steps.3')}</p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="border-l-2 border-white/20 pl-6 py-4 hover:border-white/60 transition-colors group">
                <div className="text-6xl sm:text-7xl mb-4 font-light opacity-40 group-hover:opacity-100 transition-opacity">5</div>
                <p className="text-gray-300 group-hover:text-white transition-colors">{t('about.steps.4')}</p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}