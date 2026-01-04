import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Para números numéricos
    if (value === '50+') {
      let current = 0;
      const target = 50;
      const duration = 2000;
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
    } else if (value === '90%+') {
      let current = 0;
      const target = 90;
      const duration = 2000;
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
    }
  }, [isVisible, value]);

  const displayValue = () => {
    if (value === '50+') {
      return count + '+';
    } else if (value === '90%+') {
      return count + '%+';
    } else {
      return value;
    }
  };

  return (
    <div ref={ref}>
      <div 
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 sm:mb-4 tracking-tight transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {displayValue()}
      </div>
      <p className="text-sm sm:text-base text-gray-600">{label}</p>
    </div>
  );
}

export function Stats() {
  const { t, language } = useLanguage();
  
  const stats = [
    {
      value: '50+',
      label: language === 'es' ? 'proyectos realizados' : 'completed projects'
    },
    {
      value: '90%+',
      label: language === 'es' ? 'satisfacción' : 'satisfaction'
    },
    {
      value: 'Global',
      label: language === 'es' ? 'Clientes internacionales' : 'International clients'
    }
  ];
  
  return (
    <section className="relative z-10 bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}