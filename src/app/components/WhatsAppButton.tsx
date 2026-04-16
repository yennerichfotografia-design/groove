import { useState } from 'react';
import { MessageCircle, X, ArrowRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'branding',
    labelEs: 'Branding',
    labelEn: 'Branding',
    briefUrl: '/formulario-branding',
    msgEs: 'Hola! Me interesa el servicio de *Branding*. ¿Podemos coordinar una charla?',
    msgEn: 'Hi! I\'m interested in *Branding*. Can we schedule a chat?',
  },
  {
    id: 'web',
    labelEs: 'Diseño Web',
    labelEn: 'Web Design',
    briefUrl: '/formulario-web',
    msgEs: 'Hola! Me interesa el servicio de *Diseño Web*. ¿Podemos coordinar una charla?',
    msgEn: 'Hi! I\'m interested in *Web Design*. Can we schedule a chat?',
  },
  {
    id: 'ai',
    labelEs: 'Fotografía IA',
    labelEn: 'AI Photography',
    briefUrl: '/formulario-fotografia-ia',
    msgEs: 'Hola! Me interesa el servicio de *Fotografía IA*. ¿Podemos coordinar una charla?',
    msgEn: 'Hi! I\'m interested in *AI Photography*. Can we schedule a chat?',
  },
  {
    id: 'full',
    labelEs: 'Branding + Web',
    labelEn: 'Branding + Web',
    briefUrl: '/formulario-web',
    msgEs: 'Hola! Me interesa un *pack completo de Branding + Web*. ¿Podemos coordinar una charla?',
    msgEn: 'Hi! I\'m interested in a *full Branding + Web pack*. Can we schedule a chat?',
  },
];

type Step = 'select' | 'confirm';

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('select');
  const [selected, setSelected] = useState<typeof services[0] | null>(null);
  const { language } = useLanguage();
  const es = language === 'es';

  const handleSelect = (service: typeof services[0]) => {
    setSelected(service);
    setStep('confirm');
  };

  const handleWhatsApp = () => {
    if (!selected) return;
    const msg = es ? selected.msgEs : selected.msgEn;
    window.open(`https://wa.me/5493436987030?text=${encodeURIComponent(msg)}`, '_blank');
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep('select');
      setSelected(null);
    }, 200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute bottom-18 right-0 w-[calc(100vw-3rem)] sm:w-80 max-w-sm bg-black border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden mb-3"
          >
            <AnimatePresence mode="wait">
              {step === 'select' && (
                <motion.div
                  key="select"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="px-5 pt-5 pb-3">
                    <p className="text-white font-medium text-base mb-1">
                      {es ? '¿En qué te podemos ayudar?' : 'How can we help?'}
                    </p>
                    <p className="text-white/40 text-xs">
                      {es ? 'Elegí un servicio' : 'Pick a service'}
                    </p>
                  </div>
                  <div className="px-3 pb-4 space-y-1.5">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleSelect(service)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-white/70 hover:bg-[var(--groove-accent)] hover:text-black transition-all duration-200 group"
                      >
                        <span>{es ? service.labelEs : service.labelEn}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 'confirm' && selected && (
                <motion.div
                  key="confirm"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="px-5 pt-5 pb-3">
                    <button onClick={() => setStep('select')} className="text-xs text-white/40 hover:text-white transition-colors mb-3 flex items-center gap-1">
                      ← {es ? 'Volver' : 'Back'}
                    </button>
                    <p className="text-white font-medium text-base mb-1">
                      {es ? selected.labelEs : selected.labelEn}
                    </p>
                    <p className="text-white/40 text-xs">
                      {es ? '¿Cómo preferís contactarnos?' : 'How would you like to reach us?'}
                    </p>
                  </div>

                  <div className="px-3 pb-4 space-y-2">
                    {/* Brief option */}
                    <Link
                      to={selected.briefUrl}
                      onClick={handleClose}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm bg-white/[0.05] border border-white/10 hover:border-[var(--groove-accent)]/40 hover:bg-white/[0.08] text-white transition-all duration-200 group"
                    >
                      <FileText size={18} className="text-[var(--groove-accent)] shrink-0" />
                      <div className="text-left flex-1">
                        <p className="font-medium text-sm">{es ? 'Completar brief' : 'Fill out brief'}</p>
                        <p className="text-white/40 text-xs">{es ? 'Propuesta más precisa y rápida' : 'More precise and faster proposal'}</p>
                      </div>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    {/* WhatsApp option */}
                    <button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 text-white transition-all duration-200 group"
                    >
                      <MessageCircle size={18} className="text-[#25D366] shrink-0" fill="#25D366" strokeWidth={0} />
                      <div className="text-left flex-1">
                        <p className="font-medium text-sm">{es ? 'Ir a WhatsApp directo' : 'Go to WhatsApp directly'}</p>
                        <p className="text-white/40 text-xs">{es ? 'Chateá con nosotros ahora' : 'Chat with us now'}</p>
                      </div>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => isOpen ? handleClose() : setIsOpen(true)}
        className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-all duration-200 ${
          isOpen
            ? 'bg-white/10 backdrop-blur-xl text-white shadow-black/20'
            : 'bg-[#25D366] text-white shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out-strong)' }}
        aria-label="WhatsApp"
      >
        {isOpen ? <X size={22} /> : (
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            {/* Chat bubble */}
            <path d="M16 3C8.82 3 3 7.925 3 14c0 2.5.9 4.8 2.4 6.6L3 27l5.2-1.8C10.2 26.3 13 27 16 27c7.18 0 13-4.925 13-11S23.18 3 16 3z" fill="white"/>
            {/* Left eye */}
            <circle cx="12" cy="13" r="1.4" fill="#25D366"/>
            {/* Right eye */}
            <circle cx="20" cy="13" r="1.4" fill="#25D366"/>
            {/* Smile */}
            <path d="M11.5 17.5c1.2 1.8 3 2.5 4.5 2.5s3.3-.7 4.5-2.5" stroke="#25D366" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}
