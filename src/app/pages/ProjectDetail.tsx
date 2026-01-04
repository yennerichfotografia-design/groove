import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import frescaHeroImage from 'figma:asset/68021ba4dab3c6623908bf92d4b19c8db32ff252.png';
import frescaProcessImage from 'figma:asset/7fe1ccae157d99de15e5af12c3ee5efc3dd19a5b.png';
import burgerRocketHeroImage from 'figma:asset/37e7504528f00bb6f9b7103eaba6ec713af07ccb.png';
import burgerRocketProcessImage from 'figma:asset/87afd5d50c3998943accad24d3107f1a1062ad2b.png';
import academyHeroImage from 'figma:asset/11841ab7a77eef984c2fb68283000746ffb971d9.png';
import academyProcessImage from 'figma:asset/e74e5cee2ff3dbb4aab0cd2c9989a64675ea8637.png';
import forzaHeroImage from 'figma:asset/ea189d1f9af7a10cf5a65eaf940f05bccc292479.png';
import forzaProcessImage from 'figma:asset/1ba2896f40474e6bebe4b2ea8171987da794c31b.png';

const projectsData: Record<string, any> = {
  'fresca-branding': {
    titleEs: 'Fresca',
    titleEn: 'Fresca',
    categoryEs: 'Branding',
    categoryEn: 'Branding',
    year: '2024',
    clientEs: 'Marca de productos frescos',
    clientEn: 'Fresh products brand',
    descEs: 'Identidad visual completa para marca de productos frescos y naturales. El proyecto buscaba transmitir frescura, calidad y modernidad.',
    descEn: 'Complete visual identity for fresh and natural products brand. The project aimed to convey freshness, quality and modernity.',
    challengeEs: 'Crear una identidad que se destaque en el sector alimenticio manteniendo simplicidad y transmitiendo confianza.',
    challengeEn: 'Create an identity that stands out in the food sector while maintaining simplicity and conveying trust.',
    solutionEs: 'Desarrollamos una identidad visual limpia y fresca con paleta de colores vibrantes que reflejan la naturalidad del producto.',
    solutionEn: 'We developed a clean and fresh visual identity with vibrant color palette that reflects the naturalness of the product.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Sistema de color', 'Aplicaciones'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Color system', 'Applications'],
    behanceUrl: 'https://www.behance.net/gallery/227200673/Fresca-branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227200673?ilo0=1',
    heroImage: frescaHeroImage,
    processImage: frescaProcessImage,
  },
  'burger-rocket-branding': {
    titleEs: 'Burger Rocket',
    titleEn: 'Burger Rocket',
    categoryEs: 'Branding',
    categoryEn: 'Branding',
    year: '2024',
    clientEs: 'Marca de hamburguesas',
    clientEn: 'Burger brand',
    descEs: 'Identidad visual completa para marca de hamburguesas premium. El proyecto buscaba crear una marca moderna y energética que se destaque en el competitivo mercado gastronómico.',
    descEn: 'Complete visual identity for premium burger brand. The project aimed to create a modern and energetic brand that stands out in the competitive gastronomic market.',
    challengeEs: 'Crear una identidad que transmita calidad premium sin perder la diversión y energía característica de una marca de hamburguesas. Diferenciarse en un mercado saturado.',
    challengeEn: 'Create an identity that conveys premium quality without losing the fun and energy characteristic of a burger brand. Stand out in a saturated market.',
    solutionEs: 'Desarrollamos una identidad visual dinámica con elementos gráficos que evocan velocidad y frescura. Paleta de colores vibrante que combina rojo energético con elementos negros para transmitir premium.',
    solutionEn: 'We developed a dynamic visual identity with graphic elements that evoke speed and freshness. Vibrant color palette that combines energetic red with black elements to convey premium quality.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Sistema de color', 'Aplicaciones en packaging'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Color system', 'Packaging applications'],
    behanceUrl: 'https://www.behance.net/gallery/227201079/Identity-Visual-Burger-Rocket-Branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227201079?ilo0=1',
    heroImage: burgerRocketHeroImage,
    processImage: burgerRocketProcessImage,
  },
  'academy-branding': {
    titleEs: 'Coffee Academy',
    titleEn: 'Coffee Academy',
    categoryEs: 'Branding',
    categoryEn: 'Branding',
    year: '2024',
    clientEs: 'Marca de café premium',
    clientEn: 'Premium coffee brand',
    descEs: 'Identidad visual completa para marca de café especializado. El proyecto buscaba crear una marca que combine calidad premium con accesibilidad educativa.',
    descEn: 'Complete visual identity for specialty coffee brand. The project aimed to create a brand that combines premium quality with educational accessibility.',
    challengeEs: 'Crear una identidad que transmita expertise y calidad sin resultar intimidante, manteniendo un enfoque educativo y cercano.',
    challengeEn: 'Create an identity that conveys expertise and quality without being intimidating, maintaining an educational and approachable focus.',
    solutionEs: 'Desarrollamos una identidad visual moderna con sistema de packaging distintivo que comunica variedad y calidad. Paleta de colores vibrantes para cada variedad de café.',
    solutionEn: 'We developed a modern visual identity with distinctive packaging system that communicates variety and quality. Vibrant color palette for each coffee variety.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Sistema de packaging', 'Diseño de etiquetas'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Packaging system', 'Label design'],
    behanceUrl: 'https://www.behance.net/gallery/227199549/Academy-branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227199549?ilo0=1',
    heroImage: academyHeroImage,
    processImage: academyProcessImage,
  },
  'forza-branding': {
    titleEs: 'Forza Co.',
    titleEn: 'Forza Co.',
    categoryEs: 'Branding',
    categoryEn: 'Branding',
    year: '2024',
    clientEs: 'Marca de indumentaria',
    clientEn: 'Clothing brand',
    descEs: 'Identidad visual completa para marca de indumentaria lifestyle. El proyecto buscaba crear una marca que transmita autenticidad, conexión con la naturaleza y estilo de vida rural contemporáneo.',
    descEn: 'Complete visual identity for lifestyle clothing brand. The project aimed to create a brand that conveys authenticity, connection with nature and contemporary rural lifestyle.',
    challengeEs: 'Crear una identidad que conecte con un público joven urbano que busca autenticidad y valores relacionados con la naturaleza, el campo y un estilo de vida más consciente.',
    challengeEn: 'Create an identity that connects with a young urban audience seeking authenticity and values related to nature, countryside and a more conscious lifestyle.',
    solutionEs: 'Desarrollamos una identidad visual robusta con paleta de colores tierra y fotografía aspiracional que comunica un lifestyle auténtico. El logo combina fuerza tipográfica con elementos que evocan tradición y calidad.',
    solutionEn: 'We developed a robust visual identity with earth color palette and aspirational photography that communicates an authentic lifestyle. The logo combines typographic strength with elements that evoke tradition and quality.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Fotografía de marca', 'Manual de identidad'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Brand photography', 'Brand guidelines'],
    behanceUrl: 'https://www.behance.net/gallery/227203217/Forza-branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227203217?ilo0=1',
    heroImage: forzaHeroImage,
    processImage: forzaProcessImage,
  },
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const project = slug ? projectsData[slug] : null;

  // Scroll to top cuando entra al proyecto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Proyecto no encontrado</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-16">
        {/* Hero del proyecto */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <Link 
              to="/#portfolio"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-12 transition-colors"
            >
              <ArrowLeft size={20} />
              {language === 'es' ? 'Volver a proyectos' : 'Back to projects'}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
                  {language === 'es' ? project.titleEs : project.titleEn}
                </h1>
                <p className="text-xl text-gray-600">
                  {language === 'es' ? project.descEs : project.descEn}
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {language === 'es' ? 'Categoría' : 'Category'}
                  </div>
                  <div className="text-xl">
                    {language === 'es' ? project.categoryEs : project.categoryEn}
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {language === 'es' ? 'Año' : 'Year'}
                  </div>
                  <div className="text-xl">{project.year}</div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {language === 'es' ? 'Cliente' : 'Client'}
                  </div>
                  <div className="text-xl">
                    {language === 'es' ? project.clientEs : project.clientEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen principal */}
            <div className="aspect-[16/9] bg-gray-100 mb-20 flex items-center justify-center overflow-hidden">
              {project.heroImage ? (
                <img
                  src={project.heroImage}
                  alt={language === 'es' ? project.titleEs : project.titleEn}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">
                    {language === 'es' ? project.titleEs : project.titleEn}
                  </div>
                  <div className="text-sm">{language === 'es' ? 'Imagen principal del proyecto' : 'Main project image'}</div>
                </div>
              )}
            </div>

            {/* El desafío */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl mb-4">
                  {language === 'es' ? 'El desafío' : 'The challenge'}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {language === 'es' ? project.challengeEs : project.challengeEn}
                </p>
              </div>
            </div>

            {/* Imagen secundaria - Placeholder */}
            <div className="aspect-[16/9] bg-gray-100 mb-20 flex items-center justify-center">
              {project.processImage ? (
                <img
                  src={project.processImage}
                  alt={language === 'es' ? project.titleEs : project.titleEn}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400 text-sm">
                  {language === 'es' ? 'Imagen del proceso' : 'Process image'}
                </div>
              )}
            </div>

            {/* La solución */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl mb-4">
                  {language === 'es' ? 'La solución' : 'The solution'}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {language === 'es' ? project.solutionEs : project.solutionEn}
                </p>
              </div>
            </div>

            {/* Servicios prestados */}
            <div className="border-t-2 border-black pt-12">
              <h3 className="text-2xl mb-6">
                {language === 'es' ? 'Servicios prestados' : 'Services provided'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(language === 'es' ? project.servicesEs : project.servicesEn).map((service: string, i: number) => (
                  <li key={i} className="text-gray-600 pl-4 border-l-2 border-gray-200">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Behance Embed - Full width */}
        {project.behanceEmbed && (
          <section className="bg-gray-50 py-20">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
              <h3 className="text-3xl sm:text-4xl mb-8 text-center">
                {language === 'es' ? 'Proyecto completo' : 'Full project'}
              </h3>
              <div className="w-full">
                <iframe
                  src={project.behanceEmbed}
                  height="316"
                  allowFullScreen
                  allow="clipboard-write"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full border-0"
                  style={{ minHeight: '600px' }}
                  title={`Behance project: ${language === 'es' ? project.titleEs : project.titleEn}`}
                />
              </div>
              {project.behanceUrl && (
                <div className="text-center mt-8">
                  <a 
                    href={project.behanceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                  >
                    {language === 'es' ? 'Ver en Behance' : 'View on Behance'}
                    <ArrowRight size={18} />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="bg-black text-white py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              {language === 'es' 
                ? '¿Tenés un proyecto similar?' 
                : 'Do you have a similar project?'}
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              {language === 'es' 
                ? 'Hablemos de cómo puedo ayudarte' 
                : "Let's talk about how I can help you"}
            </p>
            <Link 
              to="/#contact"
              className="inline-block bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors"
            >
              {language === 'es' ? 'Contactar' : 'Contact'}
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}