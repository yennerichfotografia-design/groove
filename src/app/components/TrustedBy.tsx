import academyLogo from 'figma:asset/ab18b8bee118cdc4e3d1089a0d6e01aa1fc48882.png';
import chulaLogo from 'figma:asset/4461a3de7067891ad7d7bfa7f3f4197489ab6a38.png';
import forzaLogo from 'figma:asset/15aba8bd1e7b556e33a4adadc64c41b0399c03bc.png';
import frescaLogo from 'figma:asset/25db106fa7b359e421fd49c538e26a5f158e508c.png';
import pollyLogo from 'figma:asset/1c5fa85e3733084144b3bf92294c3d7eb1f37362.png';
import { useLanguage } from '../contexts/LanguageContext';

const logos = [
  { src: academyLogo, alt: 'Academy' },
  { src: chulaLogo, alt: 'Chula' },
  { src: forzaLogo, alt: 'Forza' },
  { src: frescaLogo, alt: 'Fresca' },
  { src: pollyLogo, alt: 'Polly' }
];

export function TrustedBy() {
  const { language } = useLanguage();
  
  // Duplicamos los logos para crear el efecto de loop infinito
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative z-10 bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16">
          {language === 'es' ? 'Ya confiaron en mí' : 'They already trusted me'}
        </h2>
        
        <div className="relative">
          {/* Gradient overlays para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Contenedor del carrusel */}
          <div className="logos-scroll-container">
            <div className="logos-scroll-track">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="logo-item"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 sm:h-20 lg:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .logos-scroll-container {
          width: 100%;
          overflow: hidden;
        }

        .logos-scroll-track {
          display: flex;
          gap: 4rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 150px;
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .logos-scroll-track {
            gap: 6rem;
          }
          
          .logo-item {
            min-width: 200px;
          }
        }

        @media (min-width: 1024px) {
          .logos-scroll-track {
            gap: 8rem;
          }
          
          .logo-item {
            min-width: 250px;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .logos-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}