import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function Footer() {
  const { language } = useLanguage();

  const translations = {
    es: {
      tagline: 'Identidad de marca · Diseño web · IA · Figma Make · Vibe Coding',
      location: 'Trabajo global · Base Argentina',
      copyright: '© 2024 Groove. Todos los derechos reservados.'
    },
    en: {
      tagline: 'Brand Identity · Web Design · AI · Figma Make · Vibe Coding',
      location: 'Global work · Based in Argentina',
      copyright: '© 2024 Groove. All rights reserved.'
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-white py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Logo groove */}
        <div className="text-center mb-8">
          <img 
            src={logoImage} 
            alt="Logo" 
            className="h-12 sm:h-16 w-auto mx-auto"
            style={{ filter: 'brightness(0)' }}
          />
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-4">
            {t.tagline}
          </p>
          <p className="text-gray-600">
            {t.location}
          </p>
        </div>
        
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p className="text-center sm:text-left">{t.copyright}</p>
          <div className="flex gap-4 sm:gap-6 items-center">
            <a 
              href="https://www.linkedin.com/in/matias-yennerich-b37bb1206/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/gdstudio.ar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.behance.net/zozobracontenidos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              aria-label="Behance"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}