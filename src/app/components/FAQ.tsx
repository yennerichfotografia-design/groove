import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  const faqs = {
    es: [
      {
        question: '¿Las webs se hacen directamente en código?',
        answer: 'No. Se diseñan en Figma y luego se llevan a producción.'
      },
      {
        question: '¿Qué rol cumple Figma Make?',
        answer: 'Acelera el paso de diseño a código, manteniendo coherencia.'
      },
      {
        question: '¿Usás IA para diseñar?',
        answer: 'Sí, como herramienta. Las decisiones siguen siendo humanas.'
      },
      {
        question: '¿Trabajás con clientes del exterior?',
        answer: 'Sí, 100% remoto.'
      }
    ],
    en: [
      {
        question: 'Are websites built directly in code?',
        answer: 'No. They are designed in Figma and then brought to production.'
      },
      {
        question: 'What role does Figma Make play?',
        answer: 'It accelerates the design-to-code transition while maintaining consistency.'
      },
      {
        question: 'Do you use AI for design?',
        answer: 'Yes, as a tool. The decisions remain human.'
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Yes, 100% remote.'
      }
    ]
  };

  const currentFaqs = faqs[language];

  return (
    <section id="faq" className="relative z-10 bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <RevealAnimation>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-16">
            FAQ
          </h2>
        </RevealAnimation>
        
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <RevealAnimation key={index} delay={index * 0.1}>
              <div className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left hover:opacity-60 transition-opacity"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl pr-4 sm:pr-8">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="pb-6 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealAnimation>
          ))}
        </div>
        
        <RevealAnimation delay={currentFaqs.length * 0.1 + 0.1}>
          <div className="mt-12 text-center">
            <Link 
              to="/preguntas-frecuentes"
              className="inline-flex items-center gap-2 text-lg hover:opacity-60 transition-opacity"
            >
              {language === 'es' ? 'Ver todas las preguntas' : 'See all questions'}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}