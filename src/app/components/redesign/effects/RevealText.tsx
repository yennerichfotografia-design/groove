import { motion } from 'motion/react';
import type { ReactNode } from 'react';

/**
 * EFFECT 1 — Staggered Hero Text Reveal.
 *
 * Splits text into words; each word emerges from below (Y axis) with a soft
 * fade, cascading via stagger. Spring physics (high damping, moderate stiffness)
 * give a heavy, elegant, non-robotic motion.
 *
 * Usage:
 *   <RevealText as="h1" className="font-display ..." stagger={0.05}>
 *     Tu marca merece ir más rápido
 *   </RevealText>
 */

const container = (stagger: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const word = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { type: 'spring' as const, damping: 26, stiffness: 140, mass: 1 },
  },
};

type RevealTextProps = {
  children: string;
  className?: string;
  /** Per-word delay. Default 0.05s. */
  stagger?: number;
  /** Delay before the cascade begins. */
  delay?: number;
  /** Animate when scrolled into view instead of on mount. */
  whenInView?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
};

export function RevealText({
  children,
  className = '',
  stagger = 0.05,
  delay = 0,
  whenInView = false,
  as = 'span',
}: RevealTextProps) {
  const MotionTag = motion[as] as typeof motion.span;
  const words = children.split(' ');

  return (
    <MotionTag
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      {...(whenInView
        ? { whileInView: 'visible', viewport: { once: true, amount: 0.5 } }
        : { animate: 'visible' })}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.18em] -mb-[0.18em]">
          <motion.span className="inline-block" variants={word}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
