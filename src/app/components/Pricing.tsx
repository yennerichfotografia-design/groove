import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Pricing() {
  const { language } = useLanguage();
  
  const translations = {
    es: {
      title: 'Inversión clara. Proyectos a medida.',
      intro1: 'Cada proyecto es distinto.',
      intro2: 'Por eso no trabajo con precios fijos, sino con propuestas pensadas según lo que realmente necesitás.',
      intro3: 'Elegí el tipo de proyecto y contame los detalles. Con esa info te envío una cotización clara por WhatsApp.',
      branding: {
        title: 'Branding & Identidad de marca',
        desc: 'Diseño marcas desde cero o las llevo a un nuevo nivel. El alcance depende de la etapa y los objetivos del negocio.',
        helps: 'Este formulario me ayuda a entender:',
        items: [
          'Tipo de marca (personal, empresa, startup)',
          'Etapa del proyecto',
          'Alcance (logo, sistema visual, branding completo)',
          'Uso principal (web, redes, comercial, institucional)',
          'Plazos'
        ],
        cta: 'Completar formulario de branding',
        note: 'Te respondo por WhatsApp con una propuesta'
      },
      web: {
        title: 'Diseño y desarrollo web',
        desc: 'Webs diseadas en Figma y construidas con procesos modernos, rpidas y listas para escalar.',
        allows: 'Este formulario me permite definir:',
        items: [
          'Tipo de sitio (institucional, landing, portfolio)',
          'Cantidad de secciones',
          'Idiomas',
          'Objetivo principal (ventas, contacto, posicionamiento)',
          'Plazos y urgencia',
          'E-commerce: solo en plataformas (Tienda Nube, Shopify)'
        ],
        cta: 'Completar formulario de sitio web',
        note: 'Seguimos la cotización por WhatsApp'
      },
      aiPhotography: {
        title: 'Fotografía de producto con IA',
        desc: 'Imágenes profesionales de tu producto sin estudios, sin producciones costosas y sin complicaciones. Con solo una foto tomada con el celular, genero imágenes realistas y de alta calidad listas para usar en tu web, e-commerce o redes.',
        cta: 'Quiero saber más'
      },
      trust: {
        clear: 'Proceso claro',
        fast: 'Respuesta rápida',
        noCommit: 'Sin compromiso'
      },
      whatsapp: 'Hablemos directo por WhatsApp'
    },
    en: {
      title: 'Clear investment. Custom projects.',
      intro1: 'Each project is different.',
      intro2: "That's why I don't work with fixed prices, but with proposals tailored to what you really need.",
      intro3: 'Choose the project type and tell me the details. With that info, I\'ll send you a clear quote via WhatsApp.',
      branding: {
        title: 'Branding & Brand Identity',
        desc: 'I design brands from scratch or take them to the next level. The scope depends on the stage and business objectives.',
        helps: 'This form helps me understand:',
        items: [
          'Brand type (personal, company, startup)',
          'Project stage',
          'Scope (logo, visual system, complete branding)',
          'Main use (web, social media, commercial, institutional)',
          'Timelines'
        ],
        cta: 'Complete branding form',
        note: "I'll reply via WhatsApp with a proposal"
      },
      web: {
        title: 'Web design and development',
        desc: 'Websites designed in Figma and built with modern processes, fast and ready to scale.',
        allows: 'This form allows me to define:',
        items: [
          'Site type (corporate, landing, portfolio)',
          'Number of sections',
          'Languages',
          'Main goal (sales, contact, positioning)',
          'Deadlines and urgency',
          'E-commerce: only on platforms (Tienda Nube, Shopify)'
        ],
        cta: 'Complete website form',
        note: "We'll continue the quote via WhatsApp"
      },
      aiPhotography: {
        title: 'Product Photography with AI',
        desc: 'Professional images of your product without studies, without expensive productions, and without complications. With just a photo taken with your phone, I generate realistic and high-quality images ready to use on your website, e-commerce, or social media.',
        cta: 'I want to know more'
      },
      trust: {
        clear: 'Clear process',
        fast: 'Fast response',
        noCommit: 'No commitment'
      },
      whatsapp: 'Let\'s talk directly on WhatsApp'
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