import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const SPRING = { type: 'spring' as const, stiffness: 400, damping: 25 };

export function Marquee() {
  const { language } = useLanguage();

  const items =
    language === 'es'
      ? ['Branding', 'Diseño Web', 'Fotografía IA', 'Estrategia Digital', 'UX/UI', 'Desarrollo', 'SEO']
      : ['Branding', 'Web Design', 'AI Photography', 'Digital Strategy', 'UX/UI', 'Development', 'SEO'];

  const gap = 'clamp(2rem, 4vw, 4rem)';

  const track = items.flatMap((item, i) => [
    <motion.span
      key={`item-${i}`}
      className="font-display whitespace-nowrap shrink-0 cursor-default"
      style={{
        fontSize: 'var(--text-section)',
        color: '#f5f5f3',
        letterSpacing: '-0.02em',
        lineHeight: 1,
      }}
      whileHover={{ color: '#72ff56', y: -3 }}
      transition={SPRING}
    >
      {item}
    </motion.span>,
    <span
      key={`sep-${i}`}
      aria-hidden
      className="font-display shrink-0 select-none"
      style={{ color: '#72ff56', fontSize: 'var(--text-hero-sm)', lineHeight: 1 }}
    >
      ✱
    </span>,
  ]);

  return (
    <section
      className="rd-dark relative overflow-hidden"
      style={{
        borderTop: '1px solid var(--rd-line)',
        borderBottom: '1px solid var(--rd-line)',
        paddingBlock: 'clamp(1.25rem, 2.5vw, 2.25rem)',
      }}
    >
      <motion.div
        className="flex items-center"
        style={{ width: 'max-content', gap }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
      >
        {track}
        {track}
      </motion.div>
    </section>
  );
}
