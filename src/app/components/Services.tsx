import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { use3DTilt } from '../hooks/use3DTilt';
import { Globe, Palette, Camera } from 'lucide-react';

function ServiceCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, style, handleMouseMove, handleMouseLeave } = use3DTilt(8);

  return (
    <RevealAnimation delay={delay} className="flex">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className="w-full"
      >
        {children}
      </div>
    </RevealAnimation>
  );
}

const services = [
  {
    Icon: Globe,
    num: '01',
    titleEs: 'Web que vende',
    titleEn: 'Website that sells',
    descEs: 'Ultra-r\u00e1pida, SEO optimizada, dise\u00f1ada para convertir.',
    descEn: 'Ultra-fast, SEO optimized, designed to convert.',
    tagsEs: ['95+ PageSpeed', 'SEO', 'Conversi\u00f3n', 'Mobile-first'],
    tagsEn: ['95+ PageSpeed', 'SEO', 'Conversion', 'Mobile-first'],
  },
  {
    Icon: Palette,
    num: '02',
    titleEs: 'Marca que impacta',
    titleEn: 'Brand that impacts',
    descEs: 'Identidad visual que justifica tu precio premium.',
    descEn: 'Visual identity that justifies your premium price.',
    tagsEs: ['Estrategia', 'Logo', 'Manual de marca', 'Redes'],
    tagsEn: ['Strategy', 'Logo', 'Brand manual', 'Social'],
  },
  {
    Icon: Camera,
    num: '03',
    titleEs: 'Fotos sin estudio',
    titleEn: 'Photos without a studio',
    descEs: 'Fotograf\u00eda de producto con IA. Calidad de estudio, cero log\u00edstica.',
    descEn: 'AI product photography. Studio quality, zero logistics.',
    tagsEs: ['IA 4K', 'Sin producci\u00f3n', '48hs entrega', 'Fotorrealista'],
    tagsEn: ['AI 4K', 'No production', '48hrs delivery', 'Photorealistic'],
  },
];

export function Services() {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="bg-white pt-24 pb-28 lg:py-32 overflow-visible">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
            {language === 'es' ? 'Servicios' : 'Services'}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-16 max-w-2xl">
            {t('services.title')}
          </h2>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <ServiceCard key={idx} delay={0.1 + idx * 0.1}>
              <div className="group relative h-full bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden hover:bg-black transition-colors duration-500 flex flex-col">
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'var(--groove-accent)' }}
                />

                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span
                    className="text-5xl sm:text-6xl font-bold tracking-tighter"
                    style={{ color: 'var(--groove-accent)' }}
                  >
                    {s.num}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'var(--groove-accent)' }}
                  >
                    <s.Icon size={22} className="text-black" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-medium mb-3 group-hover:text-white transition-colors duration-500 relative z-10">
                  {language === 'es' ? s.titleEs : s.titleEn}
                </h3>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-500 mb-8 relative z-10">
                  {language === 'es' ? s.descEs : s.descEn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {(language === 'es' ? s.tagsEs : s.tagsEn).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full border border-black/10 text-gray-500 group-hover:border-white/10 group-hover:text-white/60 transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ServiceCard>
          ))}
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-12 sm:mt-16 pb-4 text-center">
            <a
              href="#contact"
              className="inline-block bg-[var(--groove-accent)] text-black px-8 sm:px-10 py-4 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full text-base sm:text-lg font-medium"
            >
              {t('services.cta')}
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
