import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NotFound() {
    return (
        <>
            <Header />
            <div className="min-h-[70vh] flex items-center justify-center bg-background px-4">
                <div className="max-w-2xl w-full text-center">
                    <div className="mb-8 space-y-4">
                        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            404
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Página no encontrada
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Lo sentimos, la página que buscas no existe o ha sido movida.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Volver al inicio
                        </Link>
                        <Link
                            to="/sobre-mi"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-border px-8 py-3 text-sm font-medium text-foreground hover:bg-accent transition-all"
                        >
                            Sobre nosotros
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="text-sm text-muted-foreground mb-4">
                            ¿Necesitas ayuda? Contáctanos
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="mailto:info@groove.com"
                                className="text-sm text-primary hover:underline"
                            >
                                info@groove.com
                            </a>
                            <span className="text-muted-foreground">•</span>
                            <Link
                                to="/preguntas-frecuentes"
                                className="text-sm text-primary hover:underline"
                            >
                                Preguntas frecuentes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
