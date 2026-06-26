import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

// Nav link style shared between desktop items
const NAV_LINK_STYLE: React.CSSProperties = {
  fontSize: '0.8125rem',
  letterSpacing: '0.04em',
  color: 'var(--rd-fg-dim)',
  fontWeight: 400,
  lineHeight: 1,
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        setIsVisible(currentScrollY < lastScrollY.current);
      } else {
        setIsVisible(true);
      }
      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const navItems = [
    { id: 'services', label: t('header.services') },
    { id: 'portfolio', label: t('header.portfolio') },
    { id: 'why', label: t('header.why') },
    { id: 'about', label: t('header.about') },
    { id: 'pricing', label: t('header.pricing') },
    { id: 'faq', label: t('header.faq') },
  ];

  return (
    <>
      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 overflow-y-auto"
            style={{ background: 'var(--rd-bg)', zIndex: 9999 }}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between h-14 px-5 sticky top-0"
              style={{ background: 'var(--rd-bg)', borderBottom: '1px solid var(--rd-line)' }}
            >
              <button
                onClick={handleLogoClick}
                className="font-display font-semibold uppercase"
                style={{ color: 'var(--rd-fg)', fontSize: '0.875rem', letterSpacing: '0.2em' }}
              >
                GROOVE<span style={{ color: 'var(--rd-accent)' }}>✱</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                style={{ color: 'var(--rd-fg)', padding: '6px' }}
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav list */}
            <nav
              className="flex flex-col px-5 pb-10 pt-2"
              style={{ minHeight: 'calc(100dvh - 3.5rem)' }}
            >
              <div className="flex flex-col">
                {navItems.map(({ id, label }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => handleNavClick(id)}
                    className="text-left py-4 transition-colors duration-200"
                    style={{
                      color: 'var(--rd-fg)',
                      fontSize: '1.0625rem',
                      letterSpacing: '0.01em',
                      fontWeight: 400,
                      borderBottom: '1px solid var(--rd-line)',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid var(--rd-line)',
                    } as React.CSSProperties}
                  >
                    {label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + navItems.length * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ borderBottom: '1px solid var(--rd-line)' }}
                >
                  <Link
                    to="/blog"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 transition-colors duration-200"
                    style={{ color: 'var(--rd-fg)', fontSize: '1.0625rem', letterSpacing: '0.01em', fontWeight: 400 }}
                  >
                    {t('header.blog')}
                  </Link>
                </motion.div>
              </div>

              {/* CTA + lang at bottom */}
              <div className="flex items-center gap-3 mt-auto pt-8">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex-1 text-center transition-colors duration-200"
                  style={{
                    background: 'var(--rd-accent)',
                    color: '#0a0a0a',
                    padding: '14px 20px',
                    borderRadius: '2px',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {t('header.contact')}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="transition-colors duration-200"
                  style={{
                    color: 'var(--rd-fg-dim)',
                    border: '1px solid var(--rd-line)',
                    padding: '14px 16px',
                    borderRadius: '2px',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  {language === 'es' ? 'EN' : 'ES'}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main header ── */}
      <motion.header
        animate={{ y: isVisible ? 0 : '-100%' }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled ? 'rgba(10, 10, 10, 0.82)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(18px) saturate(160%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(18px) saturate(160%)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--rd-line)' : '1px solid transparent',
          transition: 'background 0.45s ease, backdrop-filter 0.45s ease, border-color 0.45s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="font-display font-semibold uppercase transition-colors duration-200 hover:opacity-80"
              style={{ color: 'var(--rd-fg)', fontSize: '0.875rem', letterSpacing: '0.2em' }}
            >
              GROOVE<span style={{ color: 'var(--rd-accent)' }}>✱</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center" style={{ gap: '2.25rem' }}>
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="transition-colors duration-200 hover:text-white"
                  style={NAV_LINK_STYLE}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--rd-fg)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--rd-fg-dim)')}
                >
                  {label}
                </button>
              ))}

              <Link
                to="/blog"
                className="transition-colors duration-200"
                style={NAV_LINK_STYLE}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--rd-fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--rd-fg-dim)')}
              >
                {t('header.blog')}
              </Link>

              {/* Contact — thin bordered pill */}
              <button
                onClick={() => handleNavClick('contact')}
                className="transition-all duration-200"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--rd-fg)',
                  border: '1px solid var(--rd-line)',
                  padding: '7px 16px',
                  borderRadius: '2px',
                  fontWeight: 500,
                  lineHeight: 1,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--rd-accent)';
                  e.currentTarget.style.borderColor = 'var(--rd-accent)';
                  e.currentTarget.style.color = '#0a0a0a';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--rd-line)';
                  e.currentTarget.style.color = 'var(--rd-fg)';
                }}
              >
                {t('header.contact')}
              </button>

              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                className="transition-colors duration-200"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--rd-fg-dim)',
                  fontWeight: 500,
                  lineHeight: 1,
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--rd-fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--rd-fg-dim)')}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </nav>

            {/* Mobile: lang + burger */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="transition-colors duration-200"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--rd-fg-dim)',
                  fontWeight: 500,
                }}
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                style={{ color: 'var(--rd-fg)', padding: '4px' }}
              >
                <Menu size={20} strokeWidth={1.5} />
              </button>
            </div>

          </div>
        </div>
      </motion.header>
    </>
  );
}
