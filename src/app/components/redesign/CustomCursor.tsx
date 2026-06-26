import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Custom cursor: the brand asterisk (✱) follows the pointer with a soft spring.
 * Scales up and spins over interactive elements. Desktop / fine-pointer only.
 */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const sx = useSpring(x, { stiffness: 600, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 600, damping: 40, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add('rd-cursor-host');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setHovering(!!el?.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'));
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('rd-cursor-host');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="font-display"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        zIndex: 9999,
        pointerEvents: 'none',
        color: 'var(--rd-accent)',
        lineHeight: 1,
      }}
      animate={{ scale: hovering ? 1.7 : 1, rotate: hovering ? 90 : 0 }}
      transition={{ type: 'spring', damping: 18, stiffness: 220 }}
    >
      <span style={{ fontSize: '24px', display: 'block' }}>✱</span>
    </motion.div>
  );
}
