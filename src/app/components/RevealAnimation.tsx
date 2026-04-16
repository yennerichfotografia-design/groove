import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function RevealAnimation({ 
  children, 
  delay = 0, 
  duration = 0.5,
  direction = 'up',
  className = ''
}: RevealAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const directions = {
    up: { y: 30, filter: 'blur(3px)' },
    down: { y: -30, filter: 'blur(3px)' },
    left: { x: 30, filter: 'blur(3px)' },
    right: { x: -30, filter: 'blur(3px)' },
    none: { filter: 'blur(2px)' }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)'
      } : {
        opacity: 0,
        ...directions[direction]
      }}
      transition={{
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
