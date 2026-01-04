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

            <div className="pt-8">
              <h2 className="text-3xl sm:text-4xl mb-6">
                Diseño, tecnología y criterio
              </h2>
              <p className="text-gray-700 mb-4">
                Trabajo con Figma como base del proceso, porque permite pensar, prototipar y validar antes de construir.
                Sobre esa base incorporo nuevas tecnologías, IA y Figma Make para acelerar tiempos, iterar más rápido y mejorar resultados, sin perder control ni calidad.
              </p>
              <p className="text-gray-700">
                No uso inteligencia artificial como atajo ni como reemplazo del criterio profesional. La uso como lo que es:
                un acelerador que permite enfocarse más en estrategia, experiencia y detalle.
              </p>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl sm:text-4xl mb-6">
                Formación constante
              </h2>
              <p className="text-gray-700 mb-4">
                Me capacito de forma permanente para mantenerme a la vanguardia del diseño, la tecnología y los avances en IA.
                El ecosistema digital cambia todo el tiempo, y creo que la única forma de ofrecer soluciones relevantes es seguir aprendiendo, probando y adaptándose.
              </p>
              <p className="text-gray-700 mb-4">
                Eso se traduce en:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li>• procesos más ágiles,</li>
                <li>• decisiones mejor informadas,</li>
                <li>• y proyectos preparados para escalar.</li>
              </ul>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl sm:text-4xl mb-6">
                Cómo trabajo
              </h2>
              <p className="text-gray-700 mb-4">
                Prefiero procesos claros, comunicación directa y objetivos bien definidos.
                Trabajo de manera independiente para involucrarme de verdad en cada proyecto y construir soluciones a medida.
              </p>
              <p className="text-gray-700 mb-2">
                No vendo fórmulas.
              </p>
              <p className="text-gray-700">
                Diseño marcas y sitios web pensados para durar, crecer y adaptarse.
              </p>
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