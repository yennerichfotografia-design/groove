import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const EASE = [0.23, 1, 0.32, 1] as const;

/** Button that subtly follows the cursor (magnetic effect). */
function Magnetic({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15 });
  const y = useSpring(my, { stiffness: 200, damping: 15 });

  const onMove = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/** A single headline line that reveals from behind a mask. */
function MaskLine({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cursor spotlight: grayscale base, full-color reveal under the cursor.
  const SPOTLIGHT_R = 260;
  const spotlight =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { damping: 30, stiffness: 200, mass: 0.5 });
  const sy = useSpring(my, { damping: 30, stiffness: 200, mass: 0.5 });
  const revealMask = useMotionTemplate`radial-gradient(circle ${SPOTLIGHT_R}px at ${sx}px ${sy}px, #000 0%, #000 38%, rgba(0,0,0,0.45) 62%, rgba(0,0,0,0) 78%)`;

  const handleSpotlight = (e: ReactMouseEvent) => {
    if (!spotlight) return;
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const scrollToNext = () => {
    const el = document.getElementById('intro') || document.getElementById('pricing');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = language === 'es'
    ? ['Branding', 'Diseño Web', 'Fotografía IA', 'Estrategia']
    : ['Branding', 'Web Design', 'AI Photography', 'Strategy'];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSpotlight}
      className="rd-dark rd-noise relative z-0 isolate min-h-dvh w-full overflow-hidden flex flex-col landscape-safe"
    >
      {/* Background — grayscale base + full-color reveal under the cursor spotlight */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <img
          src="/hero-image.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(1.08)' }}
        />
        {spotlight && (
          <motion.img
            src="/hero-image.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'grayscale(0.55) brightness(0.16) contrast(1.15)',
              WebkitMaskImage: revealMask,
              maskImage: revealMask,
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          />
        )}
      </div>

      {/* Dark wash + grid overlay — keeps white/green text readable over the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/85 pointer-events-none" />
      <div className="absolute inset-0 -z-10 rd-grid-fine opacity-30 pointer-events-none" />
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ background: 'radial-gradient(130% 90% at 50% 35%, transparent 45%, rgba(10,10,10,0.55) 100%)' }}
      />

      {/* ===== Top metadata row ===== */}
      <div
        className="relative z-10 flex items-start justify-between gap-6"
        style={{ padding: 'clamp(5rem, 10vh, 8rem) var(--space-section-x) 0' }}
      >
        {/* Top-left: identity */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="max-w-[16rem]"
        >
          <p className="rd-meta">
            <span className="text-[var(--rd-accent)]">✱</span>{' '}
            {language === 'es' ? 'Estudio creativo' : 'Creative studio'}
            <br />
            {language === 'es' ? 'de Argentina para el mundo' : 'from Argentina to the world'}
          </p>
        </motion.div>

        {/* Top-right: tag + services */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="text-right"
        >
          <p className="rd-meta mb-3 text-[var(--rd-accent)]">GRV · 2K26</p>
          <ul className="rd-meta space-y-1">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ===== Headline block (bottom) ===== */}
      <motion.div
        className="relative z-10 mt-auto w-full"
        style={{ padding: '0 var(--space-section-x) clamp(3rem, 8vh, 6rem)', y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rd-meta mb-5 flex items-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-[var(--rd-accent)]" />
          {language === 'es' ? 'Diseño web premium & branding' : 'Premium web design & branding'}
        </motion.p>

        <h1
          className="font-display font-semibold tracking-[-0.02em] leading-[0.92]"
          style={{ fontSize: 'var(--text-hero-lg)' }}
        >
          <MaskLine delay={0.35} className="text-[var(--rd-fg)]">
            {t('hero.line1')}
          </MaskLine>
          <MaskLine delay={0.48} className="text-[var(--rd-accent)]">
            {t('hero.line2')} <span className="text-[var(--rd-fg)]">✱</span>
          </MaskLine>
        </h1>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="max-w-md text-[var(--rd-fg-dim)] leading-relaxed"
            style={{ fontSize: 'var(--text-body)' }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: EASE }}
          >
            <Magnetic
              onClick={scrollToNext}
              className="group inline-flex items-center gap-3 bg-[var(--rd-accent)] text-black rounded-full pl-7 pr-2 py-2 font-medium"
            >
              <span style={{ fontSize: 'var(--text-body)' }}>{t('hero.cta')}</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-[var(--rd-accent)] transition-transform duration-300 group-hover:rotate-45">
                <ArrowDownRight size={18} />
              </span>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== Scroll cue ===== */}
      <motion.button
        onClick={scrollToNext}
        aria-label="scroll"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[var(--rd-fg-dim)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="rd-meta">{t('hero.scroll')}</span>
        <motion.span
          className="w-px h-8 bg-[var(--rd-accent)]"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.button>
    </section>
  );
}
