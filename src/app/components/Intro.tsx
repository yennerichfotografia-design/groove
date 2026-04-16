import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Intro() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-black text-white overflow-hidden noise-bg" style={{ padding: 'var(--space-section-y) 0' }}>
      {/* Gradient accent glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'var(--groove-accent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px] pointer-events-none"
        style={{ background: 'var(--groove-accent)' }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>
        <div className="max-w-4xl">
          <RevealAnimation delay={0.1}>
            <p className="text-xl sm:text-2xl md:text-3xl leading-tight font-medium tracking-tight mb-10">
              {t('intro.text1')}
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
              {t('intro.text2')}
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
