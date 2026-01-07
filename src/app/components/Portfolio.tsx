import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import frescaImage from 'figma:asset/0500e9aec64caec3e777b8689e4e267a37bd6737.png';
import burgerRocketImage from 'figma:asset/74973a075c1e0d4a586aa8195e6bef990f29e81d.png';
import academyImage from 'figma:asset/e67b4909b66cc3ef83f51b69eb04d3640affb918.png';
import forzaImage from 'figma:asset/f7e2d76fb3b8e9ae281c8a905a07a7c04fa351bc.png';

const projects = [
  {
    id: 'fresca-branding',
    slug: 'fresca-branding',
    titleEs: 'Fresca',
    titleEn: 'Fresca',
    categoryEs: 'Branding + Estrategia',
    categoryEn: 'Branding + Strategy',
    year: '2024',
    descEs: 'Identidad visual diseñada para destacar en góndola y atraer público joven.',
    descEn: 'Visual identity designed to stand out on shelf and attract young audience.',
    behanceUrl: 'https://www.behance.net/gallery/227200673/Fresca-branding',
    coverImage: frescaImage,
  },
  {
    id: 'burger-rocket',
    slug: 'burger-rocket-branding',
    titleEs: 'Burger Rocket',
    titleEn: 'Burger Rocket',
    categoryEs: 'Branding Fast-Food',
    categoryEn: 'Fast-Food Branding',
    year: '2024',
    descEs: 'Marca dinámica y de alto impacto visual para franquicia en expansión.',
    descEn: 'Dynamic and high visual impact brand for expanding franchise.',
    behanceUrl: 'https://www.behance.net/gallery/227201079/Identity-Visual-Burger-Rocket-Branding',
    coverImage: burgerRocketImage,
  },
  {
    id: 'academy-branding',
    slug: 'academy-branding',
    titleEs: 'Coffee Academy',
    titleEn: 'Coffee Academy',
    categoryEs: 'Branding Premium',
    categoryEn: 'Premium Branding',
    year: '2024',
    descEs: 'Identidad minimalista y sofisticada para cafetería de especialidad.',
    descEn: 'Minimalist and sophisticated identity for specialty coffee shop.',
    behanceUrl: 'https://www.behance.net/gallery/227199549/Academy-branding',
    coverImage: academyImage,
  },
  {
    id: 'forza-branding',
    slug: 'forza-branding',
    titleEs: 'Forza Co.',
    titleEn: 'Forza Co.',
    categoryEs: 'Branding Moda',
    categoryEn: 'Fashion Branding',
    year: '2024',
    descEs: 'Sistema visual audaz para marca de indumentaria urbana.',
    descEn: 'Bold visual system for urban clothing brand.',
    behanceUrl: 'https://www.behance.net/gallery/227203217/Forza-branding',
    coverImage: forzaImage,
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  // Autoplay: avanza cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Calcula la posición de cada tarjeta relativa al índice actual
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absPos = ((diff + projects.length) % projects.length);
    const position = absPos > projects.length / 2 ? absPos - projects.length : absPos;

    // Tarjeta central (activa)
    if (position === 0) {
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 5,
        opacity: 1,
      };
    }
    // Tarjetas vecinas inmediatas (izquierda y derecha)
    else if (position === 1) {
      return {
        transform: 'translateX(65%) scale(0.9) rotateY(-15deg)',
        zIndex: 3,
        opacity: 0.8,
      };
    }
    else if (position === -1) {
      return {
        transform: 'translateX(-65%) scale(0.9) rotateY(15deg)',
        zIndex: 3,
        opacity: 0.8,
      };
    }
    // Tarjetas exteriores (más alejadas pero menos rotadas)
    else if (position > 1) {
      return {
        transform: 'translateX(110%) scale(0.8) rotateY(-20deg)',
        zIndex: 1,
        opacity: 0.5,
      };
    }
    else {
      return {
        transform: 'translateX(-110%) scale(0.8) rotateY(20deg)',
        zIndex: 1,
        opacity: 0.5,
      };
    }
  };

  const currentProject = projects[currentIndex];

  // Validación de seguridad
  if (!currentProject || projects.length === 0) {
    return null;
  }

  return (
    <section id="portfolio" className="relative z-10 bg-white text-black py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <div className="mb-16 text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4">
              {language === 'es' ? 'Resultados Reales' : 'Real Results'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'es'
                ? 'Marcas que confiaron en la velocidad y el diseño estratégico'
                : 'Brands that trusted in speed and strategic design'}
            </p>
          </div>
        </RevealAnimation>

        {/* Carousel 3D Coverflow */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] mb-12 overflow-visible" style={{ perspective: '1200px' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <Link
                  key={project.id}
                  to={isActive ? `/proyecto/${project.slug}` : '#'}
                  className="absolute w-[240px] sm:w-[320px] md:w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out"
                  style={{
                    ...style,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={(e) => {
                    if (!isActive) {
                      e.preventDefault();
                      setCurrentIndex(index);
                    }
                  }}
                >
                  <img
                    src={project.coverImage}
                    alt={language === 'es' ? project.titleEs : project.titleEn}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                      <div className="text-white">
                        <h3 className="text-2xl sm:text-3xl mb-2">
                          {language === 'es' ? project.titleEs : project.titleEn}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-200">
                          {language === 'es' ? project.categoryEs : project.categoryEn} • {project.year}
                        </p>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Información del proyecto activo */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-600 mb-8">
            {language === 'es' ? currentProject.descEs : currentProject.descEn}
          </p>

          <Link
            to={`/proyecto/${currentProject.slug}`}
            className="inline-flex items-center gap-2 text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors"
          >
            {language === 'es' ? 'Ver proyecto completo' : 'View full project'}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="p-4 border border-gray-300 hover:border-black transition-colors rounded-full"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? 'w-8 bg-black'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Ir al proyecto ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-4 border border-gray-300 hover:border-black transition-colors rounded-full"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}