import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { use3DTilt } from '../hooks/use3DTilt';

function TiltCard({ children, delay = 0, featured = false }: { children: React.ReactNode; delay?: number; featured?: boolean }) {
  const { ref, style, handleMouseMove, handleMouseLeave } = use3DTilt(6);

  return (
    <RevealAnimation delay={delay} className="flex h-full">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style}
        className={`w-full h-full rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col transition-colors duration-500 ${
          featured
            ? 'bg-black text-white ring-2 ring-[var(--groove-accent)]'
            : 'bg-gray-50 text-black hover:bg-black hover:text-white group'
        }`}
      >
        {children}
      </div>
    </RevealAnimation>
  );
}

export function Pricing() {
  const { language } = useLanguage();

  const es = language === 'es';

  return (
    <section id="pricing" className="relative z-10 bg-white -mt-[50vh]" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* Header */}
        <RevealAnimation>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-4">
              {es ? 'Inversi\u00f3n' : 'Pricing'}
            </p>
            <h2 className="tracking-tight mb-6" style={{ fontSize: 'var(--text-section)' }}>
              {es ? 'Eleg\u00ed tu paquete' : 'Choose your package'}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {es ? 'Sin vueltas ni costos ocultos. Precio claro desde el d\u00eda 1.' : 'No fluff, no hidden costs. Clear pricing from day 1.'}
            </p>
          </div>
        </RevealAnimation>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {/* Branding */}
          <TiltCard delay={0.1}>
            <div className="flex-grow">
              <span
                className="text-4xl sm:text-5xl font-bold tracking-tighter"
                style={{ color: 'var(--groove-accent)' }}
              >01</span>
              <h3 className="text-2xl sm:text-3xl font-medium mt-4 mb-3">
                {es ? 'Branding Estrat\u00e9gico' : 'Strategic Branding'}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors mb-8">
                {es ? 'Identidad visual completa para diferenciarte y vender m\u00e1s.' : 'Complete visual identity to differentiate you and sell more.'}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {(es
                  ? ['Estrategia', 'Logo + Sistema Visual', 'Manual Digital', 'Kit Redes', 'Archivos Editables']
                  : ['Strategy', 'Logo + Visual System', 'Digital Manual', 'Social Kit', 'Editable Files']
                ).map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-black/10 text-gray-500 group-hover:border-white/10 group-hover:text-white/60 transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Link
                to="/formulario-branding"
                className="inline-flex items-center justify-center gap-2 w-full bg-black text-white group-hover:bg-[var(--groove-accent)] group-hover:text-black py-4 rounded-full font-medium transition-colors duration-300"
              >
                {es ? 'Reservar mi lugar' : 'Reserve my spot'}
                <ArrowRight size={16} />
              </Link>
              <p className="text-xs text-gray-400 text-center mt-3">
                {es ? 'Se reserva con el 50%' : '50% deposit to start'}
              </p>
            </div>
          </TiltCard>

          {/* Web - Featured */}
          <TiltCard delay={0.2} featured>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-4xl sm:text-5xl font-bold tracking-tighter"
                  style={{ color: 'var(--groove-accent)' }}
                >02</span>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: 'var(--groove-accent)', color: 'black' }}
                >
                  {es ? 'M\u00e1s elegido' : 'Most picked'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium mb-3">
                {es ? 'Web High-Performance' : 'High-Perf Web Design'}
              </h3>
              <p className="text-gray-400 mb-8">
                {es ? 'Tu web r\u00e1pida, moderna y optimizada para conversi\u00f3n.' : 'Your fast, modern website optimized for conversion.'}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {(es
                  ? ['Dise\u00f1o UI en Figma', 'Desarrollo a medida', 'Animaciones', 'SEO T\u00e9cnico', '90+ Score']
                  : ['UI Design in Figma', 'Custom Development', 'Animations', 'Technical SEO', '90+ Score']
                ).map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Link
                to="/formulario-web"
                className="inline-flex items-center justify-center gap-2 w-full bg-[var(--groove-accent)] text-black py-4 rounded-full font-medium hover:bg-[var(--groove-accent-dark)] transition-colors duration-200"
              >
                {es ? 'Reservar mi lugar' : 'Reserve my spot'}
                <ArrowRight size={16} />
              </Link>
              <p className="text-xs text-gray-500 text-center mt-3">
                {es ? 'Se reserva con el 50%' : '50% deposit to start'}
              </p>
            </div>
          </TiltCard>

          {/* AI Photography */}
          <TiltCard delay={0.3}>
            <div className="flex-grow">
              <span
                className="text-4xl sm:text-5xl font-bold tracking-tighter"
                style={{ color: 'var(--groove-accent)' }}
              >03</span>
              <h3 className="text-2xl sm:text-3xl font-medium mt-4 mb-3">
                {es ? 'Fotograf\u00eda IA' : 'AI Photography'}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors mb-8">
                {es ? 'Im\u00e1genes de producto nivel estudio, sin producci\u00f3n ni log\u00edstica.' : 'Studio-level product images, no production or logistics needed.'}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {(es
                  ? ['IA Fotorrealista', '4K', 'Entrega 48hs', 'Sin Estudio']
                  : ['Photorealistic AI', '4K', '48hrs Delivery', 'No Studio']
                ).map((tag, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-black/10 text-gray-500 group-hover:border-white/10 group-hover:text-white/60 transition-colors duration-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4">
              <Link
                to="/fotografia-ia"
                className="inline-flex items-center justify-center gap-2 w-full bg-black text-white group-hover:bg-[var(--groove-accent)] group-hover:text-black py-4 rounded-full font-medium transition-colors duration-300"
              >
                {es ? 'Ver Fotograf\u00eda IA' : 'See AI Photography'}
                <ArrowRight size={16} />
              </Link>
            </div>
          </TiltCard>
        </div>

        {/* Scarcity + Trust */}
        <RevealAnimation delay={0.4}>
          <div className="text-center space-y-6">
            <p className="text-lg font-medium text-black">
              {es
                ? 'M\u00e1ximo 3 proyectos al mes \u2014 consult\u00e1 disponibilidad'
                : 'Maximum 3 projects per month \u2014 check availability'}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>{es ? '\u2713 Proceso claro' : '\u2713 Clear process'}</span>
              <span>{es ? '\u2713 Velocidad real' : '\u2713 Real speed'}</span>
              <span>{es ? '\u2713 Calidad garantizada' : '\u2713 Guaranteed quality'}</span>
            </div>
            <a
              href="https://wa.me/5493436987030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--groove-accent)] transition-colors duration-200 mt-4"
            >
              <MessageCircle size={16} />
              {es ? 'O consult\u00e1 por WhatsApp' : 'Or chat on WhatsApp'}
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
