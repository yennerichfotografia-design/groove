import { useLanguage } from '../contexts/LanguageContext';

export function Marquee() {
  const { language } = useLanguage();

  const items = language === 'es'
    ? ['Branding', 'Dise\u00f1o Web', 'Fotograf\u00eda IA', 'Estrategia Digital', 'UX/UI', 'Desarrollo', 'SEO']
    : ['Branding', 'Web Design', 'AI Photography', 'Digital Strategy', 'UX/UI', 'Development', 'SEO'];

  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-4 sm:gap-8 shrink-0">
      <span className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight whitespace-nowrap">
        {item}
      </span>
      <span
        className="w-3 h-3 rounded-full shrink-0"
        style={{ background: 'var(--groove-accent)' }}
      />
    </span>
  ));

  return (
    <section
      className="py-8 sm:py-12 overflow-hidden border-y"
      style={{ borderColor: 'var(--groove-accent)', background: 'var(--groove-accent)' }}
    >
      <div
        className="flex gap-4 sm:gap-8 text-black"
        style={{
          animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}
      >
        {content}
        {content}
        {content}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
