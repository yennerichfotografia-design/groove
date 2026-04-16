import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RevealAnimation } from '../components/RevealAnimation';
import { useLanguage } from '../contexts/LanguageContext';

export function AIPhotographyPage() {
  const { language } = useLanguage();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const es = language === 'es';
  const t = es ? {
    back: 'Volver', title: 'Fotografía de producto con IA',
    subtitle: 'Imágenes profesionales sin estudios ni producciones costosas',
    intro: 'Con solo una foto tomada con el celular, genero imágenes realistas y de alta calidad listas para usar en tu web, e-commerce o redes.',
    includes: 'Qué incluye',
    includeItems: ['Mejora y limpieza de la imagen original', 'Iluminación profesional simulada', 'Fondos neutros o ambientados', 'Estilo visual coherente con tu marca', 'Imágenes optimizadas para uso digital'],
    idealFor: 'Ideal para',
    idealForItems: ['E-commerce', 'Catálogos', 'Lanzamientos', 'Redes sociales', 'Landing pages'],
    howWorks: 'Cómo funciona',
    steps: [
      { num: '01', title: 'Enviás las fotos', desc: 'Una foto con el celular es suficiente.' },
      { num: '02', title: 'Definimos el estilo', desc: 'Conversamos sobre el estilo visual y uso.' },
      { num: '03', title: 'Genero las imágenes', desc: 'Creo las imágenes profesionales con IA.' },
      { num: '04', title: 'Recibís las imágenes', desc: 'Optimizadas y listas para usar.' },
    ],
    cta: 'Completar formulario', ctaText: 'Contame sobre tu producto'
  } : {
    back: 'Back', title: 'Product Photography with AI',
    subtitle: 'Professional images without studios or expensive productions',
    intro: 'With just a phone photo, I generate realistic, high-quality images ready for your website, e-commerce, or social media.',
    includes: 'What\'s included',
    includeItems: ['Image enhancement and cleanup', 'Simulated professional lighting', 'Neutral or ambient backgrounds', 'Brand-consistent visual style', 'Digitally optimized images'],
    idealFor: 'Ideal for',
    idealForItems: ['E-commerce', 'Catalogs', 'Launches', 'Social media', 'Landing pages'],
    howWorks: 'How it works',
    steps: [
      { num: '01', title: 'Send your photos', desc: 'A phone photo is sufficient.' },
      { num: '02', title: 'Define the style', desc: 'We discuss the visual style and usage.' },
      { num: '03', title: 'I generate the images', desc: 'Professional images created with AI.' },
      { num: '04', title: 'Receive your images', desc: 'Optimized and ready to use.' },
    ],
    cta: 'Fill out form', ctaText: 'Tell me about your product'
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white pt-24 pb-16 noise-bg">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          <RevealAnimation>
            <Link to="/#pricing" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10 transition-colors text-sm">
              <ArrowLeft size={16} /> {t.back}
            </Link>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">{es ? 'Fotografía IA' : 'AI Photography'}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 font-medium">{t.title}</h1>
            <p className="text-xl text-white/50 mb-16">{t.subtitle}</p>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <p className="text-lg text-white/60 leading-relaxed mb-16 pb-16 border-b border-white/10">{t.intro}</p>
          </RevealAnimation>

          {/* Includes */}
          <RevealAnimation delay={0.15}>
            <div className="mb-16 pb-16 border-b border-white/10">
              <h2 className="text-2xl sm:text-3xl mb-8 font-medium">{t.includes}</h2>
              <ul className="space-y-4">
                {t.includeItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: 'var(--groove-accent)' }}>✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Ideal for */}
          <RevealAnimation delay={0.2}>
            <div className="mb-16 pb-16 border-b border-white/10">
              <h2 className="text-2xl sm:text-3xl mb-8 font-medium">{t.idealFor}</h2>
              <div className="flex flex-wrap gap-3">
                {t.idealForItems.map((item, i) => (
                  <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 text-white/60 text-sm hover:border-[var(--groove-accent)] hover:text-white transition-all duration-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* How it works */}
          <RevealAnimation delay={0.25}>
            <div className="mb-16 pb-16 border-b border-white/10">
              <h2 className="text-2xl sm:text-3xl mb-10 font-medium">{t.howWorks}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {t.steps.map((step, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-[var(--groove-accent)]/40 transition-colors duration-300">
                    <span className="text-2xl font-bold tracking-tighter mb-2 block" style={{ color: 'var(--groove-accent)' }}>{step.num}</span>
                    <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                    <p className="text-sm text-white/50">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* CTA */}
          <RevealAnimation delay={0.3}>
            <div className="text-center">
              <Link
                to="/formulario-fotografia-ia"
                className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-10 py-4 rounded-full font-medium hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 text-lg"
              >
                {t.cta} <ArrowRight size={18} />
              </Link>
              <p className="text-sm text-white/30 mt-4">{t.ctaText}</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <Footer />
    </>
  );
}
