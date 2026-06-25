import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'motion/react';

/**
 * EFFECT 2 — Infinite 3D Logo Carousel.
 *
 * Takes an array of logos and renders a seamless, auto-scrolling track with a
 * subtle 3D perspective. The track is duplicated so the loop restarts without a
 * visible jump (wraps at -50% of total width). Hovering lifts each item in Z.
 */

export type CarouselLogo = { src: string; alt: string };

type Props = {
  logos: CarouselLogo[];
  /** Pixels per second. Default 40 (slow, premium). */
  speed?: number;
  className?: string;
};

export function LogoCarousel3D({ logos, speed = 40, className = '' }: Props) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2; // width of one (un-duplicated) set
    let next = x.get() - (speed * delta) / 1000;
    if (half > 0 && next <= -half) next += half; // seamless wrap
    x.set(next);
  });

  const items = [...logos, ...logos];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ perspective: '1200px', maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)' }}
    >
      <motion.div ref={trackRef} className="flex items-center gap-16 w-max" style={{ x }}>
        {items.map((logo, i) => (
          <motion.div
            key={i}
            className="shrink-0 flex items-center justify-center"
            whileHover={{ rotateY: 0, z: 60, scale: 1.08 }}
            initial={{ rotateY: -12 }}
            transition={{ type: 'spring', damping: 18, stiffness: 120 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
