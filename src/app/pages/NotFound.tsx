import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function NotFound() {
    return (
        <>
            <Header />
            <div className="min-h-[80vh] flex items-center justify-center bg-black text-white noise-bg px-4">
                <div className="max-w-2xl w-full text-center">
                    <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter mb-4" style={{ color: 'var(--groove-accent)' }}>
                        404
                    </h1>
                    <h2 className="text-2xl sm:text-3xl font-medium mb-4 text-white">
                        Página no encontrada
                    </h2>
                    <p className="text-white/50 mb-10 max-w-md mx-auto">
                        Lo sentimos, la página que buscas no existe o ha sido movida.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-[var(--groove-accent)] text-black px-8 py-4 rounded-full font-medium hover:bg-[var(--groove-accent-dark)] transition-colors duration-200"
                    >
                        <ArrowLeft size={16} />
                        Volver al inicio
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
