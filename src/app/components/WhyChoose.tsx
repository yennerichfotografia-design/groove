import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

const benefits = [
  {
    num: '2s',
    titleEs: 'Tu web carga en menos de 2 segundos',
    titleEn: 'Your site loads in under 2 seconds',
    subtitleEs: 'El 53% se va si tarda m\u00e1s de 3.',
    subtitleEn: '53% leave if it takes over 3.',
  },
  {
    num: '0',
    titleEs: 'Cero intermediarios',
    titleEn: 'Zero middlemen',
    subtitleEs: 'Habl\u00e1s directo con quien dise\u00f1a y programa.',
    subtitleEn: 'You talk directly to the one who designs and codes.',
  },
  {
    num: '95+',
    titleEs: 'Score en Google PageSpeed',
    titleEn: 'Google PageSpeed score',
    subtitleEs: 'M\u00e1s r\u00e1pido = mejor SEO = m\u00e1s ventas.',
    subtitleEn: 'Faster = better SEO = more sales.',
  },
  {
    num: '3\u20135',
    titleEs: 'Semanas y ten\u00e9s tu web lista',
    titleEn: 'Weeks and your site is live',
    subtitleEs: 'No meses. No sorpresas.',
    subtitleEn: 'Not months. No surprises.',
  },
];

export function WhyChoose() {
  const { language } = useLanguage();

  return (
    <section id="why" className="relative z-10 bg-black text-white lg:-mt-[50vh] overflow-hidden" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {benefits.map((b, i) => (
            <RevealAnimation key={i} delay={i * 0.08}>
              <div className="group bg-black p-8 sm:p-10 h-full flex flex-col justify-between hover:bg-white/[0.03] transition-colors duration-300">
                <div>
                  <span
                    className="block text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-6"
                    style={{ color: 'var(--groove-accent)' }}
                  >
                    {b.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium leading-snug mb-3">
                    {language === 'es' ? b.titleEs : b.titleEn}
                  </h3>
                </div>
                <p className="text-sm text-white/40 mt-4">
                  {language === 'es' ? b.subtitleEs : b.subtitleEn}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
