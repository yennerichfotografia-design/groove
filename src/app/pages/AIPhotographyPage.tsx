import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export function AIPhotographyPage() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    es: {
      back: 'Volver',
      title: 'Fotografía de producto con IA',
      subtitle: 'Imágenes profesionales sin estudios ni producciones costosas',
      intro: 'Con solo una foto tomada con el celular, genero imágenes realistas y de alta calidad listas para usar en tu web, e-commerce o redes.',
      includes: 'Qué incluye',
      includeItems: [
        'Mejora y limpieza de la imagen original',
        'Iluminación profesional simulada',
        'Fondos neutros o ambientados',
        'Estilo visual coherente con tu marca',
        'Imágenes optimizadas para uso digital'
      ],
      idealFor: 'Ideal para',
      idealForItems: [
        'E-commerce',
        'Catálogos',
        'Lanzamientos de producto',
        'Redes sociales',
        'Landing pages'
      ],
      howWorks: 'Cómo funciona',
      howWorksItems: [
        {
          step: '1',
          title: 'Enviás las fotos',
          desc: 'Me mandás una o varias fotos del producto. Una foto con el celular es suficiente.'
        },
        {
          step: '2',
          title: 'Definimos el estilo',
          desc: 'Conversamos sobre el estilo visual que necesitás y el uso que le vas a dar.'
        },
        {
          step: '3',
          title: 'Genero las imágenes',
          desc: 'Trabajo con IA para crear las imágenes profesionales de tu producto.'
        },
        {
          step: '4',
          title: 'Recibís las imágenes',
          desc: 'Te entrego las imágenes finales optimizadas y listas para usar.'
        }
      ],
      final: 'Simple, rápido y profesional.',
      cta: 'Completar formulario de fotos con IA',
      ctaText: 'Contame sobre tu producto y coordinamos'
    },
    en: {
      back: 'Back',
      title: 'Product Photography with AI',
      subtitle: 'Professional images without studios or expensive productions',
      intro: 'With just a photo taken with your phone, I generate realistic and high-quality images ready to use on your website, e-commerce, or social media.',
      includes: 'What is included',
      includeItems: [
        'Improvement and cleaning of the original image',
        'Simulated professional lighting',
        'Neutral or ambient backgrounds',
        'Visual style consistent with your brand',
        'Images optimized for digital use'
      ],
      idealFor: 'Ideal for',
      idealForItems: [
        'E-commerce',
        'Catalogs',
        'Product launches',
        'Social media',
        'Landing pages'
      ],
      howWorks: 'How it works',
      howWorksItems: [
        {
          step: '1',
          title: 'Send the photos',
          desc: 'Send me one or more product photos. A phone photo is sufficient.'
        },
        {
          step: '2',
          title: 'Define the style',
          desc: 'We talk about the visual style you need and the use you will give it.'
        },
        {
          step: '3',
          title: 'Generate the images',
          desc: 'I work with AI to create professional images of your product.'
        },
        {
          step: '4',
          title: 'Receive the images',
          desc: 'I deliver the final optimized images ready to use.'
        }
      ],
      final: 'Simple, fast, and professional.',
      cta: 'Request AI photos',
      ctaText: 'Tell me about your product and we\'ll coordinate'
    }
  };

  const t = translations[language];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-8">
          {/* HEADER */}
          <Link 
            to="/#pricing"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t.back}</span>
          </Link>

          {/* TÍTULO */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
              {t.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600">
              {t.subtitle}
            </p>
          </div>

          {/* INTRO */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* QUÉ INCLUYE */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl mb-8">{t.includes}</h2>
            <ul className="space-y-4">
              {t.includeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-black mt-1">✓</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IDEAL PARA */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl mb-8">{t.idealFor}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {t.idealForItems.map((item, i) => (
                <div key={i} className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors">
                  <span className="text-base sm:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CÓMO FUNCIONA */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl mb-12">{t.howWorks}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {t.howWorksItems.map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="text-sm tracking-wider text-gray-400">{item.step}</div>
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL */}
          <div className="text-center mb-12">
            <p className="text-2xl sm:text-3xl mb-8">{t.final}</p>
            
            <Link
              to="/formulario-fotografia-ia"
              className="inline-block w-full max-w-md mx-auto bg-black text-white py-4 text-base hover:bg-gray-800 transition-colors mb-2"
            >
              {t.cta}
            </Link>
            <p className="text-sm text-gray-500">
              {t.ctaText}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}