import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Zap, Folder, Star, User, CreditCard, HelpCircle, Mail, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      // Si no estamos en home, navegar primero a home y luego scroll
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Si ya estamos en home, solo hacer scroll
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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleLogoClick}>
              <img
                src={logoImage}
                alt="Logo"
                className="h-8 sm:h-10 w-auto"
                style={{ filter: 'brightness(0)' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('services')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.services')}
            </button>
            <button onClick={() => handleNavClick('portfolio')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.portfolio')}
            </button>
            <button onClick={() => handleNavClick('why')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.why')}
            </button>
            <button onClick={() => handleNavClick('about')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.about')}
            </button>
            <button onClick={() => handleNavClick('pricing')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.pricing')}
            </button>
            <button onClick={() => handleNavClick('faq')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.faq')}
            </button>
            <button onClick={() => handleNavClick('contact')} className="text-sm hover:text-gray-600 transition-colors">
              {t('header.contact')}
            </button>
            <Link to="/blog" className="text-sm hover:text-gray-600 transition-colors">
              {t('header.blog')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors border border-gray-200 px-3 py-1.5 rounded"
            >
              <Globe size={16} />
              <span className="uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <button onClick={() => handleNavClick('services')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <Zap className="w-4 h-4" strokeWidth={1.5} />
              {t('header.services')}
            </button>
            <button onClick={() => handleNavClick('portfolio')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <Folder className="w-4 h-4" strokeWidth={1.5} />
              {t('header.portfolio')}
            </button>
            <button onClick={() => handleNavClick('why')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <Star className="w-4 h-4" strokeWidth={1.5} />
              {t('header.why')}
            </button>
            <button onClick={() => handleNavClick('about')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <User className="w-4 h-4" strokeWidth={1.5} />
              {t('header.about')}
            </button>
            <button onClick={() => handleNavClick('pricing')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <CreditCard className="w-4 h-4" strokeWidth={1.5} />
              {t('header.pricing')}
            </button>
            <button onClick={() => handleNavClick('faq')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <HelpCircle className="w-4 h-4" strokeWidth={1.5} />
              {t('header.faq')}
            </button>
            <button onClick={() => handleNavClick('contact')} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              {t('header.contact')}
            </button>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 w-full text-left text-sm hover:text-gray-600 transition-colors py-2">
              <FileText className="w-4 h-4" strokeWidth={1.5} />
              {t('header.blog')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors border border-gray-200 px-3 py-1.5 rounded w-fit"
            >
              <Globe size={16} />
              <span className="uppercase">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}