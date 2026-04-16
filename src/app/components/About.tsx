import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

const profileImageMobile = '/about-profile.webp';
const profileImageDesktop = '/about-profile-desktop.webp';

export function About() {
  const { t, language } = useLanguage();
  const es = language === 'es';

  return (
    <section id="about" className="relative z-10 text-white overflow-hidden">

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="lg:hidden bg-black noise-bg">
        {/* Photo - no text overlay */}
        <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/4] w-full">
          <img
            src={profileImageMobile}
            alt="Professional portrait"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Content below photo */}
        <div className="px-6 sm:px-8 pb-16 -mt-8 relative z-10">
          <RevealAnimation>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">
              {es ? 'Sobre mí' : 'About'}
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-tight mb-5 font-medium">
              {t('about.title')}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.1}>
            <p className="text-base text-white/60 mb-8 leading-relaxed">
              {t('about.intro')}
            </p>
          </RevealAnimation>

          {/* Manifesto */}
          <div className="space-y-3 mb-8">
            {[0, 1, 2].map((i) => (
              <RevealAnimation key={i} delay={0.15 + i * 0.05}>
                <p className="text-base font-medium text-white/80 border-l-2 pl-4" style={{ borderColor: 'var(--groove-accent)' }}>
                  {t(`about.points.${i}`)}
                </p>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.35}>
            <Link
              to="/metodo"
              className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-6 py-3.5 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium text-sm"
            >
              {t('about.cta')} <ArrowRight size={14} />
            </Link>
          </RevealAnimation>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block relative min-h-dvh landscape-safe">
        <img
          src={profileImageDesktop}
          alt="Professional portrait"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 min-h-dvh landscape-safe flex flex-col justify-end" style={{ padding: 'var(--space-section-y) var(--space-section-x)' }}>
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="max-w-3xl ml-auto">
              <RevealAnimation>
                <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                  {es ? 'Sobre mí' : 'About'}
                </p>
                <h2 className="text-5xl lg:text-7xl tracking-tight mb-6 font-medium">
                  {t('about.title')}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <p className="text-xl text-white/70 mb-10 max-w-xl">
                  {t('about.intro')}
                </p>
              </RevealAnimation>

              <div className="space-y-4 mb-10">
                {[0, 1, 2].map((i) => (
                  <RevealAnimation key={i} delay={0.15 + i * 0.06}>
                    <p className="text-xl font-medium text-white/80 border-l-2 pl-5" style={{ borderColor: 'var(--groove-accent)' }}>
                      {t(`about.points.${i}`)}
                    </p>
                  </RevealAnimation>
                ))}
              </div>

              <RevealAnimation delay={0.4}>
                <Link
                  to="/metodo"
                  className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-8 py-4 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium"
                >
                  {t('about.cta')} <ArrowRight size={16} />
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Process cards - shared */}
      <div className="bg-black noise-bg" style={{ padding: 'var(--space-section-y) var(--space-section-x)' }}>
        <div className="max-w-[1440px] mx-auto">
          <RevealAnimation>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-8">
              {t('about.howTitle')}
            </p>
          </RevealAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <RevealAnimation key={i} delay={0.05 + i * 0.05}>
                <div className="group bg-white/[0.03] border border-white/10 rounded-xl p-4 sm:p-5 hover:border-[var(--groove-accent)]/40 hover:bg-white/[0.06] transition-all duration-300">
                  <span
                    className="block text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter mb-2"
                    style={{ color: 'var(--groove-accent)' }}
                  >
                    0{i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-white/50 group-hover:text-white transition-colors duration-300">
                    {t(`about.steps.${i}`)}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
