import { Link } from 'react-router-dom';
import profileImage from 'figma:asset/c7d69569fe29a1d285dd404c1a3e3baafc4146c9.png';
import { AboutHeroBanner } from '../components/AboutHeroBanner';

export function AboutExtended() {
  return (
    <>
      <AboutHeroBanner />
      <div className="relative z-10 min-h-screen bg-white pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-12">
            Sobre mí
          </h1>

          {/* Imagen de perfil */}
          <div className="mb-12">
            <img
              src={profileImage}
              alt="Foto de perfil"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <p className="text-xl text-gray-700 mb-6">
                Trabajo en diseño desde hace más de 15 años, acompañando marcas, empresas y profesionales en distintos momentos de crecimiento.
              </p>
              <p className="text-gray-700">
                Mi foco siempre estuvo en la identidad visual y en cómo una marca se construye de forma coherente en todos sus puntos de contacto. No creo en el diseño aislado ni en lo meramente estético: creo en el diseño como herramienta estratégica, capaz de ordenar, comunicar y generar confianza.
              </p>
            </div>

            <div>
              <p className="text-gray-700">
                A lo largo de mi carrera entendí que una buena marca no se trata solo de verse bien, sino de funcionar bien. Por eso pongo un fuerte énfasis en la experiencia del usuario, en la claridad del mensaje y en la lógica detrás de cada decisión visual.
              </p>
            </div>

            <div className="pt-12">
              <Link
                to="/metodo"
                className="inline-block border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-colors mr-4"
              >
                Ver Método de Trabajo →
              </Link>
            </div>

            <div className="pt-12">
              <Link
                to="/"
                className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}