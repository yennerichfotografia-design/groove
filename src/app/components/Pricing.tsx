import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Pricing() {
  const { language } = useLanguage();

  const translations = {
    es: {
      title: 'Inversión Clara. Paquetes Transparentes.',
      intro1: 'Sin vueltas ni costos ocultos.',
      intro2: 'Trabajo con rangos de precios claros para que sepas dónde estás parado desde el día 1.',
      intro3: 'Elegí el paquete que mejor se ajuste a tu etapa actual y empecemos.',
      branding: {
        title: 'Branding Estratégico',
        desc: 'Identidad visual completa pensada para diferenciarte y vender más.',
        helps: 'Incluye:',
        items: [
          'Estrategia de marca',
          'Sistema visual (Logo, Colores, Typos)',
          'Manual de marca digital',
          'Assets para redes sociales',
          'Archivos editables finales'
        ],
        cta: 'Empezar Branding',
        note: 'Se reserva con el 50%'
      },
      web: {
        title: 'Diseño Web High-Perf',
        desc: 'Tu web rápida, moderna y optimizada para conversión. Sin builders pesados.',
        allows: 'Incluye:',
        items: [
          'Diseño UI Premium en Figma',
          'Desarrollo a medida (Next.js/React)',
          'Animaciones "Vibe Coding"',
          'SEO Técnico base',
          'Optimización de velocidad (90+)'
        ],
        cta: 'Empezar Web',
        note: 'Se reserva con el 50%'
      },
      aiPhotography: {
        title: 'Fotografía IA',
        desc: 'Imágenes de producto nivel estudio, generadas con IA a partir de fotos caseras.',
        cta: 'Ver Fotografía IA'
      },
      trust: {
        clear: 'Proceso claro',
        fast: 'Velocidad real',
        noCommit: 'Calidad garantizada'
      },
      whatsapp: 'Consultar por WhatsApp'
    },
    en: {
      title: 'Clear Investment. Transparent Packages.',
      intro1: 'No fluff, no hidden costs.',
      intro2: 'I work with clear price ranges so you know where you stand from day 1.',
      intro3: 'Choose the package that best fits your current stage and let\'s start.',
      branding: {
        title: 'Strategic Branding',
        desc: 'Complete visual identity designed to differentiate you and sell more.',
        helps: 'Includes:',
        items: [
          'Brand Strategy',
          'Visual System (Logo, Colors, Typos)',
          'Digital Brand Manual',
          'Social Media Assets',
          'Final Editable Files'
        ],
        cta: 'Start Branding',
        note: '50% deposit to start'
      },
      web: {
        title: 'High-Perf Web Design',
        desc: 'Your fast, modern website optimized for conversion. No heavy builders.',
        allows: 'Includes:',
        items: [
          'Premium UI Design in Figma',
          'Custom Development (Next.js/React)',
          '"Vibe Coding" Animations',
          'Base Technical SEO',
          'Speed Optimization (90+)'
        ],
        cta: 'Start Web',
        note: '50% deposit to start'
      },
      aiPhotography: {
        title: 'AI Photography',
        desc: 'Studio-level product images generated with AI from amateur photos.',
        cta: 'See AI Photography'
      },
      trust: {
        clear: 'Clear process',
        fast: 'Real speed',
        noCommit: 'Guaranteed quality'
      },
      whatsapp: 'Chat on WhatsApp'
    }
  };

  const t = translations[language];

  return (
    <section id="pricing" className="relative z-10 bg-white py-20 lg:py-32 -mt-[50vh]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <div className="mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4">
              {t.title.split('.')[0]}.
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-500">
              {t.title.split('.')[1]}.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          <RevealAnimation delay={0.1}>
            <p className="text-2xl sm:text-3xl text-gray-600">
              {t.intro1}
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <p className="text-xl text-gray-600">
                {t.intro2}
              </p>
              <p className="text-xl text-gray-600">
                {t.intro3}
              </p>
            </div>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* BLOQUE 1 - BRANDING */}
          <RevealAnimation delay={0.1} className="flex">
            <div className="group flex flex-col w-full border border-black p-6 sm:p-8 lg:p-10 hover:bg-black hover:text-white transition-all duration-300">
              <div className="mb-6 flex-grow">
                <div className="text-sm tracking-wider text-gray-400 mb-4 sm:mb-6 group-hover:text-gray-400">01</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 group-hover:text-white">{t.branding.title}</h3>

                <p className="text-base sm:text-lg mb-6 sm:mb-8 group-hover:text-gray-300">
                  {t.branding.desc}
                </p>

                <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60 mb-3 group-hover:text-gray-400">{t.branding.helps}</p>

                <ul className="space-y-2 mb-8 sm:mb-10 group-hover:text-gray-300 text-sm sm:text-base">
                  {t.branding.items.map((item, i) => (
                    <li key={i} className="pl-4 border-l border-gray-300 group-hover:border-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to="/formulario-branding"
                  className="inline-block w-full text-center bg-black text-white py-3 sm:py-4 text-sm sm:text-base group-hover:bg-white group-hover:text-black transition-colors mb-2"
                >
                  {t.branding.cta}
                </Link>
                <p className="text-xs sm:text-sm opacity-60 text-center group-hover:text-gray-400">
                  {t.branding.note}
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* BLOQUE 2 - SITIO WEB */}
          <RevealAnimation delay={0.2} className="flex">
            <div className="group flex flex-col w-full border border-black p-6 sm:p-8 lg:p-10 hover:bg-black hover:text-white transition-all duration-300">
              <div className="mb-6 flex-grow">
                <div className="text-sm tracking-wider text-gray-400 mb-4 sm:mb-6 group-hover:text-gray-400">02</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 group-hover:text-white">{t.web.title}</h3>

                <p className="text-base sm:text-lg mb-6 sm:mb-8 group-hover:text-gray-300">
                  {t.web.desc}
                </p>

                <p className="text-xs sm:text-sm uppercase tracking-wider opacity-60 mb-3 group-hover:text-gray-400">{t.web.allows}</p>

                <ul className="space-y-2 mb-8 sm:mb-10 group-hover:text-gray-300 text-sm sm:text-base">
                  {t.web.items.map((item, i) => (
                    <li key={i} className="pl-4 border-l border-gray-300 group-hover:border-gray-600">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to="/formulario-web"
                  className="inline-block w-full text-center bg-black text-white py-3 sm:py-4 text-sm sm:text-base group-hover:bg-white group-hover:text-black transition-colors mb-2"
                >
                  {t.web.cta}
                </Link>
                <p className="text-xs sm:text-sm opacity-60 text-center group-hover:text-gray-400">
                  {t.web.note}
                </p>
              </div>
            </div>
          </RevealAnimation>

          {/* BLOQUE 3 - FOTOGRAFÍA CON IA */}
          <RevealAnimation delay={0.3} className="flex">
            <div className="group flex flex-col w-full border border-black p-6 sm:p-8 lg:p-10 hover:bg-black hover:text-white transition-all duration-300">
              <div className="mb-6 flex-grow">
                <div className="text-sm tracking-wider text-gray-400 mb-4 sm:mb-6 group-hover:text-gray-400">03</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 group-hover:text-white">{t.aiPhotography.title}</h3>

                <p className="text-base sm:text-lg mb-6 sm:mb-8 group-hover:text-gray-300">
                  {t.aiPhotography.desc}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  to="/fotografia-ia"
                  className="inline-block w-full text-center bg-black text-white py-3 sm:py-4 text-sm sm:text-base group-hover:bg-white group-hover:text-black transition-colors mb-2"
                >
                  {t.aiPhotography.cta}
                </Link>
                <p className="text-xs sm:text-sm opacity-60 text-center group-hover:text-gray-400 invisible">
                  Placeholder
                </p>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* MICRO COPY DE CONFIANZA */}
        <RevealAnimation delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-600">
            <div className="flex items-center gap-2">
              <span>✔</span>
              <span>{t.trust.clear}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✔</span>
              <span>{t.trust.fast}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✔</span>
              <span>{t.trust.noCommit}</span>
            </div>
          </div>
        </RevealAnimation>

        {/* BOTÓN FINAL */}
        <RevealAnimation delay={0.5}>
          <div className="text-center">
            <a
              href="https://wa.me/5493436987030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base hover:bg-gray-800 transition-colors"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-center">{t.whatsapp}</span>
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}