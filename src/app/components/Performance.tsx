import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Performance() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 overflow-hidden" style={{ background: 'var(--groove-accent)', padding: 'var(--space-section-y) 0' }}>
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>
        <RevealAnimation>
          <h2 className="tracking-tight mb-20 text-black" style={{ fontSize: 'var(--text-section)' }}>
            {t('performance.title')}
          </h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[0, 1, 2].map((i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.1}>
              <div className="group">
                <div className="border-t-2 border-black/20 group-hover:border-black transition-colors duration-300 pt-6 mb-6">
                  <div className="text-6xl sm:text-7xl font-bold text-black/30 group-hover:text-black/60 transition-all duration-500 mb-4">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl mb-3 text-black font-medium">
                  {t(`performance.projects.${i}.title`)}
                </h3>
                <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                  {t(`performance.projects.${i}.desc`)}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
