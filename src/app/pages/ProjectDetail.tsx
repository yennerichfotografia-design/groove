import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RevealAnimation } from '../components/RevealAnimation';
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
    titleEs: 'Fresca', titleEn: 'Fresca',
    categoryEs: 'Branding', categoryEn: 'Branding', year: '2024',
    clientEs: 'Marca de productos frescos', clientEn: 'Fresh products brand',
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
    heroImage: frescaHeroImage, processImage: frescaProcessImage,
  },
  'burger-rocket-branding': {
    titleEs: 'Burger Rocket', titleEn: 'Burger Rocket',
    categoryEs: 'Branding', categoryEn: 'Branding', year: '2024',
    clientEs: 'Marca de hamburguesas', clientEn: 'Burger brand',
    descEs: 'Identidad visual completa para marca de hamburguesas premium. Marca moderna y energética para el mercado gastronómico.',
    descEn: 'Complete visual identity for premium burger brand. Modern, energetic brand for the gastronomic market.',
    challengeEs: 'Crear una identidad que transmita calidad premium sin perder la diversión y energía. Diferenciarse en un mercado saturado.',
    challengeEn: 'Create an identity that conveys premium quality without losing fun and energy. Stand out in a saturated market.',
    solutionEs: 'Identidad visual dinámica con elementos gráficos que evocan velocidad y frescura. Paleta vibrante que combina rojo energético con negro premium.',
    solutionEn: 'Dynamic visual identity with graphic elements that evoke speed and freshness. Vibrant palette combining energetic red with premium black.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Sistema de color', 'Packaging'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Color system', 'Packaging'],
    behanceUrl: 'https://www.behance.net/gallery/227201079/Identity-Visual-Burger-Rocket-Branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227201079?ilo0=1',
    heroImage: burgerRocketHeroImage, processImage: burgerRocketProcessImage,
  },
  'academy-branding': {
    titleEs: 'Coffee Academy', titleEn: 'Coffee Academy',
    categoryEs: 'Branding', categoryEn: 'Branding', year: '2024',
    clientEs: 'Marca de café premium', clientEn: 'Premium coffee brand',
    descEs: 'Identidad visual para marca de café especializado que combina calidad premium con accesibilidad educativa.',
    descEn: 'Visual identity for specialty coffee brand combining premium quality with educational accessibility.',
    challengeEs: 'Transmitir expertise y calidad sin resultar intimidante, manteniendo un enfoque educativo y cercano.',
    challengeEn: 'Convey expertise and quality without being intimidating, maintaining an educational and approachable focus.',
    solutionEs: 'Identidad visual moderna con sistema de packaging distintivo que comunica variedad y calidad para cada variedad de café.',
    solutionEn: 'Modern visual identity with distinctive packaging system that communicates variety and quality for each coffee variety.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Sistema de packaging', 'Etiquetas'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Packaging system', 'Labels'],
    behanceUrl: 'https://www.behance.net/gallery/227199549/Academy-branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227199549?ilo0=1',
    heroImage: academyHeroImage, processImage: academyProcessImage,
  },
  'forza-branding': {
    titleEs: 'Forza Co.', titleEn: 'Forza Co.',
    categoryEs: 'Branding', categoryEn: 'Branding', year: '2024',
    clientEs: 'Marca de indumentaria', clientEn: 'Clothing brand',
    descEs: 'Identidad visual para marca de indumentaria lifestyle. Autenticidad, conexión con la naturaleza y estilo de vida rural contemporáneo.',
    descEn: 'Visual identity for lifestyle clothing brand. Authenticity, connection with nature and contemporary rural lifestyle.',
    challengeEs: 'Conectar con un público joven urbano que busca autenticidad y valores relacionados con la naturaleza y un estilo de vida consciente.',
    challengeEn: 'Connect with a young urban audience seeking authenticity and values related to nature and a conscious lifestyle.',
    solutionEs: 'Identidad visual robusta con paleta de colores tierra y fotografía aspiracional. Logo que combina fuerza tipográfica con tradición y calidad.',
    solutionEn: 'Robust visual identity with earth color palette and aspirational photography. Logo combining typographic strength with tradition and quality.',
    servicesEs: ['Estrategia de marca', 'Identidad visual', 'Logo y símbolo', 'Fotografía de marca', 'Manual de identidad'],
    servicesEn: ['Brand strategy', 'Visual identity', 'Logo and symbol', 'Brand photography', 'Brand guidelines'],
    behanceUrl: 'https://www.behance.net/gallery/227203217/Forza-branding',
    behanceEmbed: 'https://www.behance.net/embed/project/227203217?ilo0=1',
    heroImage: forzaHeroImage, processImage: forzaProcessImage,
  },
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const es = language === 'es';
  const project = slug ? projectsData[slug] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4">{es ? 'Proyecto no encontrado' : 'Project not found'}</h1>
          <Link to="/" className="text-[var(--groove-accent)] hover:underline">
            {es ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>
      </div>
    );
  }

  const title = es ? project.titleEs : project.titleEn;
  const services = es ? project.servicesEs : project.servicesEn;

  return (
    <>
      <Header />
      <div className="pt-16">
        {/* Hero - full width image */}
        <section className="relative bg-black landscape-safe" style={{ height: 'clamp(40vh, 60vw, 80vh)' }}>
          <img
            src={project.heroImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-12 lg:px-20 pb-12 sm:pb-16">
            <div className="max-w-[1440px] mx-auto">
              <RevealAnimation>
                <Link
                  to="/#portfolio"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors text-sm"
                >
                  <ArrowLeft size={16} />
                  {es ? 'Volver a proyectos' : 'Back to projects'}
                </Link>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-white/40 uppercase tracking-wider">{es ? project.categoryEs : project.categoryEn}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-sm text-white/40">{project.year}</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl tracking-tight text-white font-medium">
                  {title}
                </h1>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Info grid */}
        <section className="bg-black text-white py-16 lg:py-24 noise-bg">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
              <RevealAnimation>
                <p className="text-xl sm:text-2xl text-white/70 leading-relaxed">
                  {es ? project.descEs : project.descEn}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <div className="space-y-6">
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-1">{es ? 'Cliente' : 'Client'}</p>
                    <p className="text-lg">{es ? project.clientEs : project.clientEn}</p>
                  </div>
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-1">{es ? 'Servicios' : 'Services'}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {services.map((s: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Challenge */}
            <RevealAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20">
                <div className="lg:col-span-4">
                  <p className="form-section-num">01</p>
                  <h2 className="text-2xl sm:text-3xl font-medium mt-2">
                    {es ? 'El desafío' : 'The challenge'}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-white/60 leading-relaxed">
                    {es ? project.challengeEs : project.challengeEn}
                  </p>
                </div>
              </div>
            </RevealAnimation>

            {/* Process image */}
            {project.processImage && (
              <RevealAnimation>
                <div className="rounded-2xl overflow-hidden mb-20">
                  <img
                    src={project.processImage}
                    alt={title}
                    className="w-full h-auto"
                  />
                </div>
              </RevealAnimation>
            )}

            {/* Solution */}
            <RevealAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="form-section-num">02</p>
                  <h2 className="text-2xl sm:text-3xl font-medium mt-2">
                    {es ? 'La solución' : 'The solution'}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-white/60 leading-relaxed">
                    {es ? project.solutionEs : project.solutionEn}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Behance embed */}
        {project.behanceEmbed && (
          <section className="bg-neutral-950 py-16 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
              <RevealAnimation>
                <h3 className="text-2xl sm:text-3xl text-white mb-8 text-center">
                  {es ? 'Proyecto completo' : 'Full project'}
                </h3>
                <div className="rounded-2xl overflow-hidden">
                  <iframe
                    src={project.behanceEmbed}
                    allowFullScreen
                    allow="clipboard-write"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full border-0"
                    style={{ minHeight: '600px' }}
                    title={`Behance: ${title}`}
                  />
                </div>
                {project.behanceUrl && (
                  <div className="text-center mt-8">
                    <a
                      href={project.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-8 py-4 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium"
                    >
                      {es ? 'Ver en Behance' : 'View on Behance'}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </RevealAnimation>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 lg:py-28 relative overflow-hidden bg-black noise-bg">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 text-center relative z-10">
            <RevealAnimation>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                {es ? '¿Tenés un proyecto similar?' : 'Have a similar project?'}
              </h2>
              <p className="text-lg text-white/50 mb-10">
                {es ? 'Hablemos de cómo puedo ayudarte' : "Let's talk about how I can help"}
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-8 py-4 hover:bg-[var(--groove-accent-dark)] transition-colors duration-200 rounded-full font-medium"
              >
                {es ? 'Contactar' : 'Contact'}
                <ArrowRight size={16} />
              </Link>
            </RevealAnimation>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
