import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    question: t(`faq.items.${i}.q`),
    answer: t(`faq.items.${i}.a`),
  }));

  return (
    <section id="faq" className="relative z-10 bg-white" style={{ padding: 'var(--space-section-y) 0' }}>
      <div className="max-w-[1440px] mx-auto" style={{ padding: '0 var(--space-section-x)' }}>
        <RevealAnimation>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-16">
            {t('faq.title')}
          </h2>
        </RevealAnimation>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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

        <RevealAnimation delay={faqs.length * 0.1 + 0.1}>
          <div className="mt-12 text-center">
            <Link
              to="/preguntas-frecuentes"
              className="inline-flex items-center gap-2 text-lg hover:opacity-60 transition-opacity"
            >
              {t('faq.seeAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
