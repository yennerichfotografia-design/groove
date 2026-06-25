import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * EFFECT 3 — Scroll Parallax + Scale.
 *
 * As the element scrolls through the viewport, its content zooms out
 * (scale 1.1 -> 1.0) and drifts on Y at a different speed than the page.
 * Spring-smoothed so the motion feels heavy and continuous, never jumpy.
 *
 * Use for full-bleed images/videos. The wrapper clips overflow so the
 * over-scaled child never shows seams.
 */

type Props = {
  children: ReactNode;
  className?: string;
  /** Max upward drift in % of element height. Default 12. */
  drift?: number;
  /** Starting scale. Default 1.1 (zooms out to 1.0). */
  fromScale?: number;
};

export function ParallaxScale({ children, className = '', drift = 12, fromScale = 1.1 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 1], [fromScale, 1]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [`-${drift / 2}%`, `${drift / 2}%`]);

  const spring = { damping: 30, stiffness: 80, mass: 0.8 };
  const scale = useSpring(scaleRaw, spring);
  const y = useSpring(yRaw, spring);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="w-full h-full will-change-transform" style={{ scale, y }}>
        {children}
      </motion.div>
    </div>
  );
}
