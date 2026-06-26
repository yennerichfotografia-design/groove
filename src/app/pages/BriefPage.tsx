import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RevealText } from '../components/redesign/effects/RevealText';
import { SEO } from '../hooks/useSEO';

const WHATSAPP = '5493436987030';

const PLAN_LABELS: Record<string, { es: string; en: string }> = {
  branding: { es: 'Marca Estratégica', en: 'Strategic Brand' },
  'marca-web': { es: 'Marca + Web', en: 'Brand + Web' },
  web: { es: 'Web High-Performance', en: 'High-Perf Web' },
};

const SERVICE_LABELS: Record<string, { es: string; en: string }> = {
  branding: { es: 'Branding', en: 'Branding' },
  web: { es: 'Diseño Web', en: 'Web Design' },
  apps: { es: 'Apps & SaaS', en: 'Apps & SaaS' },
  foto: { es: 'Fotografía', en: 'Photography' },
  reels: { es: 'Reels', en: 'Reels' },
};

export function BriefPage() {
  const [params] = useSearchParams();
  const { language } = useLanguage();
  const es = language === 'es';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Resolve the chosen selection from the URL.
  const selection = useMemo<string[]>(() => {
    const plan = params.get('plan');
    const servicios = params.get('servicios');
    if (plan && PLAN_LABELS[plan]) return [es ? PLAN_LABELS[plan].es : PLAN_LABELS[plan].en];
    if (servicios) {
      return servicios
        .split(',')
        .map((id) => SERVICE_LABELS[id])
        .filter(Boolean)
        .map((l) => (es ? l.es : l.en));
    }
    return [];
  }, [params, es]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      es ? '¡Hola Groove! Quiero arrancar un proyecto.' : 'Hi Groove! I want to start a project.',
      '',
      `${es ? 'Servicios' : 'Services'}: ${selection.join(', ') || (es ? 'A definir' : 'TBD')}`,
      `${es ? 'Nombre' : 'Name'}: ${name}`,
      `Email: ${email}`,
      message ? `${es ? 'Detalle' : 'Details'}: ${message}` : '',
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputStyle = 'w-full bg-transparent py-3 outline-none transition-colors duration-300';

  return (
    <>
      <SEO />
      <Header />
      <main className="rd-dark rd-noise relative min-h-dvh" style={{ paddingTop: 'clamp(7rem, 14vh, 10rem)', paddingBottom: 'var(--space-section-y)' }}>
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 pointer-events-none"
          style={{ width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--rd-accent) 0%, transparent 70%)', opacity: 0.05, transform: 'translate(20%,-30%)' }}
        />

        <div className="relative max-w-[1100px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>
          <Link to="/#pricing" className="inline-flex items-center gap-2 rd-meta mb-12 transition-colors duration-200 hover:text-[var(--rd-fg)]" style={{ color: 'var(--rd-fg-dim)' }}>
            <ArrowLeft size={14} />
            {es ? 'Volver a paquetes' : 'Back to packages'}
          </Link>

          <p className="rd-meta mb-5" style={{ color: 'var(--rd-accent)' }}>{es ? 'Brief' : 'Brief'}</p>

          <RevealText
            as="h1"
            className="font-display [font-size:var(--text-hero-lg)] [line-height:0.98] [letter-spacing:-0.03em] text-[var(--rd-fg)]"
            stagger={0.05}
          >
            {es ? 'Contanos tu proyecto' : 'Tell us about your project'}
          </RevealText>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 mt-16">

            {/* Selection summary */}
            <div>
              <p className="rd-meta mb-5" style={{ color: 'var(--rd-fg-dim)' }}>{es ? 'Tu selección' : 'Your selection'}</p>
              <div className="flex flex-col">
                {selection.length ? selection.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 border-t rd-rule py-5">
                    <span className="rd-meta" style={{ color: 'var(--rd-accent)' }}>0{i + 1}</span>
                    <span className="font-display tracking-tight" style={{ fontSize: 'var(--text-card-title)', color: 'var(--rd-fg)' }}>{s}</span>
                  </div>
                )) : (
                  <p className="border-t rd-rule py-5" style={{ color: 'var(--rd-fg-dim)' }}>
                    {es ? 'Todavía no elegiste nada — contanos qué necesitás abajo.' : "You haven't picked anything yet — tell us below."}
                  </p>
                )}
                <div className="border-t rd-rule" />
              </div>
              <p className="mt-6" style={{ fontSize: '0.875rem', color: 'var(--rd-fg-dim)', lineHeight: 1.6 }}>
                {es
                  ? 'No es definitivo: lo terminamos de ajustar en una charla directa con nosotros.'
                  : 'Not final: we fine-tune it in a direct chat with us.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <label className="block">
                <span className="rd-meta block mb-2" style={{ color: 'var(--rd-fg-dim)' }}>{es ? 'Nombre' : 'Name'}</span>
                <input
                  required value={name} onChange={(e) => setName(e.target.value)}
                  className={inputStyle}
                  style={{ borderBottom: '1px solid var(--rd-line)', color: 'var(--rd-fg)', fontSize: 'var(--text-body-lg)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--rd-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--rd-line)')}
                />
              </label>
              <label className="block">
                <span className="rd-meta block mb-2" style={{ color: 'var(--rd-fg-dim)' }}>Email</span>
                <input
                  required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={inputStyle}
                  style={{ borderBottom: '1px solid var(--rd-line)', color: 'var(--rd-fg)', fontSize: 'var(--text-body-lg)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--rd-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--rd-line)')}
                />
              </label>
              <label className="block">
                <span className="rd-meta block mb-2" style={{ color: 'var(--rd-fg-dim)' }}>{es ? 'Contanos un poco más' : 'Tell us a bit more'}</span>
                <textarea
                  rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className={`${inputStyle} resize-none`}
                  style={{ borderBottom: '1px solid var(--rd-line)', color: 'var(--rd-fg)', fontSize: 'var(--text-body-lg)' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--rd-accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--rd-line)')}
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 self-start rounded-full font-medium pl-7 pr-2 py-2 mt-2"
                style={{ background: 'var(--rd-accent)', color: '#000', fontSize: 'var(--text-body)' }}
              >
                <span>{es ? 'Enviar por WhatsApp' : 'Send via WhatsApp'}</span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[var(--rd-accent)] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
