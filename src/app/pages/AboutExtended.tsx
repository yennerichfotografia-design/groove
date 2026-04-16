import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AboutHeroBanner } from '../components/AboutHeroBanner';
import { RevealAnimation } from '../components/RevealAnimation';

const profileImage = '/about-profile.webp';

export function AboutExtended() {
  return (
    <>
      <AboutHeroBanner />
      <div className="relative z-10 min-h-screen bg-black text-white pt-24 pb-20 noise-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealAnimation>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12 font-medium tracking-tight">
              Sobre mí
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <div className="mb-12">
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </RevealAnimation>

          <div className="space-y-8">
            <RevealAnimation delay={0.2}>
              <p className="text-xl text-white/70 leading-relaxed">
                Trabajo en diseño desde hace más de 15 años, acompañando marcas, empresas y profesionales en distintos momentos de crecimiento.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.25}>
              <p className="text-white/60 leading-relaxed">
                Mi foco siempre estuvo en la identidad visual y en cómo una marca se construye de forma coherente en todos sus puntos de contacto. No creo en el diseño aislado ni en lo meramente estético: creo en el diseño como herramienta estratégica, capaz de ordenar, comunicar y generar confianza.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-white/60 leading-relaxed">
                A lo largo de mi carrera entendí que una buena marca no se trata solo de verse bien, sino de funcionar bien. Por eso pongo un fuerte énfasis en la experiencia del usuario, en la claridad del mensaje y en la lógica detrás de cada decisión visual.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap gap-4 pt-8">
                <Link
                  to="/metodo"
                  className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-8 py-4 rounded-full font-medium hover:bg-[var(--groove-accent-dark)] transition-colors duration-200"
                >
                  Ver Método de Trabajo <ArrowRight size={16} />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 border border-white/15 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors duration-200"
                >
                  <ArrowLeft size={16} /> Volver al inicio
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </>
  );
}
