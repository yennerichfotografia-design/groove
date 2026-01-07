import { Link } from 'react-router-dom';
import { AboutHeroBanner } from '../components/AboutHeroBanner';
import { RevealAnimation } from '../components/RevealAnimation';

export function MethodPage() {
    return (
        <>
            <AboutHeroBanner />
            <div className="relative z-10 min-h-screen bg-white pt-24 pb-32">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                    <RevealAnimation>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-24 max-w-4xl">
                            Método de trabajo
                        </h1>
                    </RevealAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-8">
                        {/* Section 1 */}
                        <div className="lg:col-span-5">
                            <RevealAnimation delay={0.1}>
                                <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                                    Diseño, tecnología<br />y criterio
                                </h2>
                            </RevealAnimation>
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <RevealAnimation delay={0.2}>
                                <div className="prose prose-lg prose-gray max-w-none">
                                    <p className="text-xl text-gray-800 leading-relaxed font-light">
                                        Trabajo con Figma como base del proceso, porque permite pensar, prototipar y validar antes de construir.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-6">
                                        Sobre esa base incorporo nuevas tecnologías, IA y Figma Make para acelerar tiempos, iterar más rápido y mejorar resultados, sin perder control ni calidad.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-6">
                                        No uso inteligencia artificial como atajo ni como reemplazo del criterio profesional. La uso como lo que es:
                                        un acelerador que permite enfocarse más en estrategia, experiencia y detalle.
                                    </p>
                                </div>
                            </RevealAnimation>
                        </div>

                        {/* Divider */}
                        <div className="col-span-full border-t border-gray-100 my-8 hidden lg:block" />

                        {/* Section 2 */}
                        <div className="lg:col-span-5">
                            <RevealAnimation delay={0.1}>
                                <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                                    Formación constante
                                </h2>
                            </RevealAnimation>
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <RevealAnimation delay={0.2}>
                                <div className="prose prose-lg prose-gray max-w-none">
                                    <p className="text-gray-600 leading-relaxed">
                                        Me capacito de forma permanente para mantenerme a la vanguardia del diseño, la tecnología y los avances en IA.
                                        El ecosistema digital cambia todo el tiempo, y creo que la única forma de ofrecer soluciones relevantes es seguir aprendiendo, probando y adaptándose.
                                    </p>
                                    <div className="mt-8 bg-gray-50 p-8 rounded-2xl">
                                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-medium">Esto se traduce en</p>
                                        <ul className="space-y-4 text-xl text-gray-900 font-light">
                                            <li className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                                                Procesos más ágiles
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                                                Decisiones mejor informadas
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                                                Proyectos preparados para escalar
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </RevealAnimation>
                        </div>

                        {/* Divider */}
                        <div className="col-span-full border-t border-gray-100 my-8 hidden lg:block" />

                        {/* Section 3 */}
                        <div className="lg:col-span-5">
                            <RevealAnimation delay={0.1}>
                                <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
                                    Cómo trabajo
                                </h2>
                            </RevealAnimation>
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <RevealAnimation delay={0.2}>
                                <div className="prose prose-lg prose-gray max-w-none">
                                    <p className="text-xl text-gray-800 leading-relaxed font-light">
                                        Prefiero procesos claros, comunicación directa y objetivos bien definidos.
                                        Trabajo de manera independiente para involucrarme de verdad en cada proyecto y construir soluciones a medida.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                        <div className="flex-1 p-6 border border-gray-100 rounded-xl">
                                            <h3 className="text-lg font-medium mb-2">No vendo fórmulas</h3>
                                            <p className="text-gray-500 text-sm">Cada marca tiene necesidades únicas que requieren soluciones específicas.</p>
                                        </div>
                                        <div className="flex-1 p-6 border border-gray-100 rounded-xl">
                                            <h3 className="text-lg font-medium mb-2">Construyo a futuro</h3>
                                            <p className="text-gray-500 text-sm">Diseño marcas y sitios web pensados para durar, crecer y adaptarse.</p>
                                        </div>
                                    </div>
                                </div>
                            </RevealAnimation>
                        </div>
                    </div>

                    <div className="mt-32 border-t border-gray-100 pt-16">
                        <RevealAnimation delay={0.3}>
                            <Link
                                to="/"
                                className="group inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors"
                            >
                                <span className="mr-3 transition-transform group-hover:-translate-x-1">←</span>
                                Volver al inicio
                            </Link>
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </>
    );
}
