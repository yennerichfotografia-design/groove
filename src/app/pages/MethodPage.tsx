import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { AboutHeroBanner } from '../components/AboutHeroBanner';
import { RevealAnimation } from '../components/RevealAnimation';

export function MethodPage() {
    return (
        <>
            <AboutHeroBanner />
            <div className="relative z-10 min-h-screen bg-black text-white pt-24 pb-32 noise-bg">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
                    <RevealAnimation>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Proceso</p>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter mb-24 max-w-4xl font-medium">
                            Método de trabajo
                        </h1>
                    </RevealAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-8">
                        {/* Section 1 */}
                        <div className="lg:col-span-5">
                            <RevealAnimation delay={0.1}>
                                <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
                                    Diseño, tecnología<br />y criterio
                                </h2>
                            </RevealAnimation>
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <RevealAnimation delay={0.2}>
                                <p className="text-xl text-white/70 leading-relaxed">
                                    Trabajo con Figma como base del proceso, porque permite pensar, prototipar y validar antes de construir.
                                </p>
                                <p className="text-white/50 leading-relaxed mt-6">
                                    Sobre esa base incorporo nuevas tecnologías, IA y Figma Make para acelerar tiempos, iterar más rápido y mejorar resultados, sin perder control ni calidad.
                                </p>
                                <p className="text-white/50 leading-relaxed mt-6">
                                    No uso inteligencia artificial como atajo ni como reemplazo del criterio profesional. La uso como lo que es: un acelerador que permite enfocarse más en estrategia, experiencia y detalle.
                                </p>
                            </RevealAnimation>
                        </div>

                        <div className="col-span-full border-t border-white/10 my-8 hidden lg:block" />

                        {/* Section 2 */}
                        <div className="lg:col-span-5">
                            <RevealAnimation delay={0.1}>
                                <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
                                    Formación constante
                                </h2>
                            </RevealAnimation>
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <RevealAnimation delay={0.2}>
                                <p className="text-white/50 leading-relaxed">
                                    Me capacito de forma permanente para mantenerme a la vanguardia del diseño, la tecnología y los avances en IA.
                                    El ecosistema digital cambia todo el tiempo, y creo que la única forma de ofrecer soluciones relevantes es seguir aprendiendo, probando y adaptándose.
                                </p>
                                <div className="mt-8 bg-white/[0.03] border border-white/10 p-8 rounded-2xl">
                                    <p className="text-sm uppercase tracking-widest text-white/40 mb-4 font-medium">Esto se traduce en</p>
                                    <ul className="space-y-4 text-xl text-white/80 font-light">
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--groove-accent)' }} />
                                            Procesos más ágiles
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--groove-accent)' }} />
                                            Decisiones mejor informadas
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--groove-accent)' }} />
                                            Proyectos preparados para escalar
                                        </li>
                                    </ul>
                                </div>
                            </RevealAnimation>
                        </div>

                        <div className="col-span-full border-t border-white/10 my-8 hidden lg:block" />

                        {/* Section 3 */}
                        <div className="lg:col-span-5">
                            <RevealAnimation delay={0.1}>
                                <h2 className="text-3xl sm:text-4xl font-medium leading-tight">
                                    Cómo trabajo
                                </h2>
                            </RevealAnimation>
                        </div>
                        <div className="lg:col-span-7 space-y-8">
                            <RevealAnimation delay={0.2}>
                                <p className="text-xl text-white/70 leading-relaxed">
                                    Prefiero procesos claros, comunicación directa y objetivos bien definidos.
                                    Trabajo de manera independiente para involucrarme de verdad en cada proyecto y construir soluciones a medida.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                    <div className="flex-1 p-6 border border-white/10 rounded-xl hover:border-[var(--groove-accent)]/40 transition-colors duration-300">
                                        <h3 className="text-lg font-medium mb-2">No vendo fórmulas</h3>
                                        <p className="text-white/50 text-sm">Cada marca tiene necesidades únicas que requieren soluciones específicas.</p>
                                    </div>
                                    <div className="flex-1 p-6 border border-white/10 rounded-xl hover:border-[var(--groove-accent)]/40 transition-colors duration-300">
                                        <h3 className="text-lg font-medium mb-2">Construyo a futuro</h3>
                                        <p className="text-white/50 text-sm">Diseño marcas y sitios web pensados para durar, crecer y adaptarse.</p>
                                    </div>
                                </div>
                            </RevealAnimation>
                        </div>
                    </div>

                    <div className="mt-24 border-t border-white/10 pt-12">
                        <RevealAnimation delay={0.3}>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                            >
                                <ArrowLeft size={16} /> Volver al inicio
                            </Link>
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </>
    );
}
