import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';
import { Link } from 'react-router-dom';

// ── RevealText ──────────────────────────────────────────────────────────────
function RevealText({ children }: { children: string }) {
  const words = children.split(' ');
  return (
    <span aria-label={children}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: '0.3em' }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.09, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-8%' }}
          style={{ display: 'inline-block', marginRight: '0.18em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ── Behance icon ─────────────────────────────────────────────────────────────
function BehanceIcon() {
  return (
    <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'services', label: t('header.services') },
    { id: 'portfolio', label: t('header.portfolio') },
    { id: 'pricing', label: t('header.pricing') },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/matias-yennerich-b37bb1206/',
      icon: <Linkedin size={13} />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/gdstudio.ar/',
      icon: <Instagram size={13} />,
    },
    {
      label: 'Behance',
      href: 'https://www.behance.net/zozobracontenidos',
      icon: <BehanceIcon />,
    },
  ];

  return (
    <footer className="rd-dark rd-noise relative">
      <div
        className="relative z-10 max-w-[1440px] mx-auto"
        style={{ padding: '0 var(--space-section-x)' }}
      >
        {/* ── CTA statement ──────────────────────────────── */}
        <div
          style={{
            paddingTop: 'clamp(5rem, 12vw, 10rem)',
            paddingBottom: 'clamp(4rem, 8vw, 7rem)',
            borderBottom: '1px solid var(--rd-line)',
          }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(4.5rem, 14vw, 13rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              color: 'var(--rd-fg)',
            }}
          >
            <RevealText>Construyamos.</RevealText>
          </h2>
          <p className="rd-meta" style={{ marginTop: '2rem' }}>
            Let's build something great together.
          </p>
        </div>

        {/* ── Columns ──────────────────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr]"
          style={{
            paddingTop: 'clamp(3rem, 6vw, 5rem)',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          {/* Brand */}
          <div
            className="pb-10 md:pb-0 md:pr-16 border-b md:border-b-0 md:border-r"
            style={{ borderColor: 'var(--rd-line)' }}
          >
            <img
              src={logoImage}
              alt="Groove"
              className="h-9 w-auto mb-8"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p
              className="rd-meta"
              style={{ maxWidth: '30ch', lineHeight: 1.8 }}
            >
              {t('footer.tagline')}
            </p>
          </div>

          {/* Links */}
          <div
            className="py-10 md:py-0 md:px-14 border-b md:border-b-0 md:border-r"
            style={{ borderColor: 'var(--rd-line)' }}
          >
            <p className="rd-meta" style={{ marginBottom: '2rem' }}>
              Links
            </p>
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left w-full text-sm transition-colors duration-200"
                  style={{ color: 'var(--rd-fg-dim)' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--rd-fg)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--rd-fg-dim)')
                  }
                >
                  {label}
                </button>
              ))}
              <Link
                to="/blog"
                className="text-sm transition-colors duration-200"
                style={{ color: 'var(--rd-fg-dim)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--rd-fg)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--rd-fg-dim)')
                }
              >
                {t('header.blog')}
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="pt-10 md:pt-0 md:pl-14">
            <p className="rd-meta" style={{ marginBottom: '2rem' }}>
              Social
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                  style={{ color: 'var(--rd-fg-dim)' }}
                  aria-label={label}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = 'var(--rd-accent)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = 'var(--rd-fg-dim)')
                  }
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom meta bar ────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t"
          style={{
            borderColor: 'var(--rd-line)',
            paddingTop: '1.5rem',
            paddingBottom: '2.5rem',
          }}
        >
          <p className="rd-meta">{t('footer.copyright')}</p>
          <p className="rd-meta">{t('footer.location')}</p>
        </div>
      </div>
    </footer>
  );
}
