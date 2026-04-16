import { useRef, useState, useCallback } from 'react';

interface TiltStyle {
  transform: string;
  transition: string;
  boxShadow: string;
}

export function use3DTilt(maxRotation = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<TiltStyle>({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxRotation;
    const rotateX = ((centerY - y) / centerY) * maxRotation;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
      boxShadow: `${-rotateY * 1.5}px ${rotateX * 1.5}px 30px rgba(0,0,0,0.12)`,
    });
  }, [maxRotation]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      boxShadow: '0 0 0 rgba(0,0,0,0)',
    });
  }, []);

  return { ref, style, handleMouseMove, handleMouseLeave };
}
