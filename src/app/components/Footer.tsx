import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative text-black" style={{ background: 'var(--groove-accent)', padding: 'clamp(2.5rem, 5vw, 5rem) 0' }}>
      <div className="relative z-10 max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>

        {/* Mobile: compact stacked layout */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-6">
            <img src={logoImage} alt="Logo" className="h-8 w-auto" style={{ filter: 'brightness(0)' }} />
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/matias-yennerich-b37bb1206/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-black/15 rounded-full text-black/60 hover:text-white hover:bg-black transition-all duration-200" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://www.instagram.com/gdstudio.ar/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-black/15 rounded-full text-black/60 hover:text-white hover:bg-black transition-all duration-200" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="https://www.behance.net/zozobracontenidos" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center border border-black/15 rounded-full text-black/60 hover:text-white hover:bg-black transition-all duration-200" aria-label="Behance">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" /></svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-black/60 mb-6">
            <button onClick={() => scrollTo('services')}>{t('header.services')}</button>
            <button onClick={() => scrollTo('portfolio')}>{t('header.portfolio')}</button>
            <button onClick={() => scrollTo('pricing')}>{t('header.pricing')}</button>
            <Link to="/blog">{t('header.blog')}</Link>
          </div>
          <div className="pt-4 border-t border-black/10 flex items-center justify-between">
            <p className="text-[10px] text-black/40">{t('footer.copyright')}</p>
            <p className="text-[10px] text-black/40">{t('footer.location')}</p>
          </div>
        </div>

        {/* Desktop: 3-column layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-12 mb-16">
            <div>
              <img src={logoImage} alt="Logo" className="h-12 w-auto mb-6" style={{ filter: 'brightness(0)' }} />
              <p className="text-black/60 text-sm leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-black/60">Links</h4>
              <div className="space-y-3">
                <button onClick={() => scrollTo('services')} className="block text-sm text-black/60 hover:text-black transition-colors">{t('header.services')}</button>
                <button onClick={() => scrollTo('portfolio')} className="block text-sm text-black/60 hover:text-black transition-colors">{t('header.portfolio')}</button>
                <button onClick={() => scrollTo('pricing')} className="block text-sm text-black/60 hover:text-black transition-colors">{t('header.pricing')}</button>
                <Link to="/blog" className="block text-sm text-black/60 hover:text-black transition-colors">{t('header.blog')}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-black/60">Social</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://www.linkedin.com/in/matias-yennerich-b37bb1206/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-black/15 rounded-full text-black/60 hover:text-white hover:bg-black transition-all duration-200" aria-label="LinkedIn"><Linkedin size={16} /></a>
                <a href="https://www.instagram.com/gdstudio.ar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-black/15 rounded-full text-black/60 hover:text-white hover:bg-black transition-all duration-200" aria-label="Instagram"><Instagram size={16} /></a>
                <a href="https://www.behance.net/zozobracontenidos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-black/15 rounded-full text-black/60 hover:text-white hover:bg-black transition-all duration-200" aria-label="Behance">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" /></svg>
                </a>
              </div>
              <p className="text-sm text-black/50">{t('footer.location')}</p>
            </div>
          </div>
          <div className="pt-8 border-t border-black/15 text-center">
            <p className="text-xs text-black/50">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
