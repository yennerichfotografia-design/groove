import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Zap, Folder, Star, User, CreditCard, HelpCircle, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Pages with dark hero backgrounds where header should start transparent+white
  const hasDarkHero = location.pathname === '/' || location.pathname.startsWith('/blog') || location.pathname === '/preguntas-frecuentes' || location.pathname === '/fotografia-ia' || location.pathname === '/sobre-mi' || location.pathname === '/metodo';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > 80) {
        setIsVisible(currentScrollY < lastScrollY.current);
      } else {
        setIsVisible(true);
      }

      // Glassmorphism after scrolling past hero
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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

  return (
    <>
    {/* Mobile fullscreen menu - outside header to avoid stacking context issues */}
    {isMenuOpen && (
      <div className="md:hidden fixed inset-0" style={{ background: '#000', zIndex: 9999 }}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          <img src={logoImage} alt="Logo" className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col justify-center px-8 pt-8 pb-12 h-[calc(100vh-4rem)]">
          <div className="space-y-1 mb-10">
            {[
              { id: 'services', icon: Zap, label: t('header.services') },
              { id: 'portfolio', icon: Folder, label: t('header.portfolio') },
              { id: 'why', icon: Star, label: t('header.why') },
              { id: 'about', icon: User, label: t('header.about') },
              { id: 'pricing', icon: CreditCard, label: t('header.pricing') },
              { id: 'faq', icon: HelpCircle, label: t('header.faq') },
            ].map(({ id, icon: Icon, label }) => (
              <button key={id} onClick={() => handleNavClick(id)} className="flex items-center gap-4 w-full text-left text-lg font-medium text-white hover:text-[var(--groove-accent)] transition-colors py-3 group">
                <Icon size={18} className="text-white/20 group-hover:text-[var(--groove-accent)] transition-colors" strokeWidth={1.5} />
                {label}
              </button>
            ))}
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 w-full text-left text-lg font-medium text-white hover:text-[var(--groove-accent)] transition-colors py-3 group">
              <FileText size={18} className="text-white/20 group-hover:text-[var(--groove-accent)] transition-colors" strokeWidth={1.5} />
              {t('header.blog')}
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            <button onClick={() => handleNavClick('contact')} className="flex-1 text-center bg-[var(--groove-accent)] text-black py-4 rounded-full font-medium text-base">
              {t('header.contact')}
            </button>
            <button onClick={toggleLanguage} className="w-12 h-12 flex items-center justify-center border border-white/15 rounded-full text-white text-xs font-medium uppercase">
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </nav>
      </div>
    )}

    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? hasDarkHero
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 text-white'
            : 'bg-white/70 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] text-black'
          : hasDarkHero
            ? 'bg-transparent border-b border-transparent text-white'
            : 'bg-white/70 backdrop-blur-xl border-b border-black/5 text-black'
      }`}
      style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleLogoClick}>
              <img
                src={logoImage}
                alt="Logo"
                className="h-8 sm:h-10 w-auto transition-all duration-500"
                style={{ filter: (!hasDarkHero && isScrolled) || !hasDarkHero ? 'brightness(0)' : 'brightness(0) invert(1)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('services')} className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.services')}
            </button>
            <button onClick={() => handleNavClick('portfolio')} className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.portfolio')}
            </button>
            <button onClick={() => handleNavClick('why')} className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.why')}
            </button>
            <button onClick={() => handleNavClick('about')} className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.about')}
            </button>
            <button onClick={() => handleNavClick('pricing')} className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.pricing')}
            </button>
            <button onClick={() => handleNavClick('faq')} className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.faq')}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-sm bg-[var(--groove-accent)] text-black px-4 py-1.5 rounded-full hover:bg-[var(--groove-accent-dark)] transition-colors duration-200"
            >
              {t('header.contact')}
            </button>
            <Link to="/blog" className="text-sm hover:text-[var(--groove-accent)] transition-colors duration-200">
              {t('header.blog')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm hover:text-[var(--groove-accent)] transition-colors duration-200 border border-black/10 px-3 py-1.5 rounded-full"
            >
              <Globe size={14} />
              <span className="uppercase text-xs font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </header>
    </>
  );
}
