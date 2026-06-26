import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

// ─── Count-up hook (preserves original animation logic) ────────────────────
function useCountUp(target: number, active: boolean, duration = 2000): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active || target === 0) return;
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

// ─── Stat cell ──────────────────────────────────────────────────────────────
interface StatItemProps {
  value: string;
  label: string;
  index: number;
  total: number;
  isVisible: boolean;
}

function StatItem({ value, label, index, total, isVisible }: StatItemProps) {
  const isLast = index === total - 1;
  const numericTarget = value === '50+' ? 50 : value === '90%+' ? 90 : 0;
  const isNumeric = numericTarget > 0;
  const count = useCountUp(numericTarget, isVisible && isNumeric);

  const displayValue = (): string => {
    if (value === '50+') return `${count}+`;
    if (value === '90%+') return `${count}%+`;
    return value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{
        type: 'spring',
        stiffness: 55,
        damping: 14,
        delay: index * 0.14,
      }}
      // mobile: border-bottom between cells; sm+: border-right instead
      className={!isLast ? 'border-b sm:border-b-0 sm:border-r' : ''}
      style={{
        padding: 'clamp(2.5rem, 5vw, 4rem) var(--space-section-x, 2rem)',
        borderColor: 'var(--rd-line)',
      }}
    >
      {/* Giant display number */}
      <div
        className="font-display"
        style={{
          fontSize: 'clamp(4.5rem, 10vw, 8.5rem)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'var(--rd-accent)',
          marginBottom: '1.5rem',
        }}
      >
        {displayValue()}
      </div>

      {/* Hairline rule */}
      <div
        style={{
          width: '2rem',
          height: '1px',
          background: 'var(--rd-line)',
          marginBottom: '1rem',
        }}
      />

      {/* Meta label */}
      <p className="rd-meta">{label}</p>
    </motion.div>
  );
}

// ─── Section export ──────────────────────────────────────────────────────────
export function Stats() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const stats = [
    {
      value: '50+',
      label: language === 'es' ? 'proyectos realizados' : 'completed projects',
    },
    {
      value: '90%+',
      label: language === 'es' ? 'satisfacción' : 'satisfaction',
    },
    {
      value: 'Global',
      label: language === 'es' ? 'Clientes internacionales' : 'International clients',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="rd-dark rd-noise relative"
      style={{ borderTop: '1px solid var(--rd-line)' }}
    >
      {/* Editorial header row */}
      <div
        className="max-w-[1440px] mx-auto"
        style={{
          padding: '1.25rem var(--space-section-x, 2rem)',
          borderBottom: '1px solid var(--rd-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className="rd-meta">
          {language === 'es' ? 'Métricas del proyecto' : 'Project metrics'}
        </span>
        <span className="rd-meta" aria-hidden>
          / 03
        </span>
      </div>

      {/* Stats grid */}
      <div
        className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3"
        style={{ borderBottom: '1px solid var(--rd-line)' }}
      >
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            value={stat.value}
            label={stat.label}
            index={i}
            total={stats.length}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}
