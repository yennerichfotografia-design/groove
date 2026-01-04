import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from '../components/RevealAnimation';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = {
    es: [
      {
        question: '¿Cómo es el proceso de trabajo?',
        answer: 'Cada proyecto tiene un proceso claro y ordenado.\nArrancamos entendiendo el contexto y los objetivos, luego diseño la propuesta en Figma, validamos el diseño y recién después pasamos a la etapa de desarrollo. Esto evita rehacer, ahorra tiempo y asegura coherencia desde el inicio.'
      },
      {
        question: '¿Las webs se diseñan directamente en código?',
        answer: 'No.\nLas webs se diseñan primero en Figma. Ahí se define la estructura, la experiencia de usuario y el diseño visual.\nUna vez aprobado, el diseño se lleva a producción utilizando procesos modernos, apoyados por IA y Figma Make para acelerar el pasaje a código sin perder calidad.'
      },
      {
        question: '¿Qué rol cumple la inteligencia artificial en tu trabajo?',
        answer: 'La IA es una herramienta de apoyo.\nLa uso para acelerar procesos, iterar más rápido y optimizar tareas técnicas, pero las decisiones de diseño, experiencia y estrategia siguen siendo humanas.\nNo reemplaza el criterio: lo potencia.'
      },
      {
        question: '¿Cuánto tiempo lleva un proyecto?',
        answer: 'Depende del alcance y la complejidad.\nEn promedio:\n\n• Sitios simples: 3 a 4 semanas\n• Proyectos más complejos: se define en la etapa inicial\n\nSiempre establecemos plazos claros antes de comenzar.'
      },
      {
        question: '¿Trabajás con clientes del exterior?',
        answer: 'Sí.\nTrabajo de forma 100% remota con clientes de distintos países. La comunicación se realiza por videollamadas, mail y WhatsApp, según lo que resulte más cómodo.'
      },
      {
        question: '¿Incluye contenido y textos?',
        answer: 'Depende del proyecto.\nPuedo trabajar con contenido provisto por el cliente o colaborar en la estructuración y redacción de los textos si el proyecto lo requiere. Esto se define antes de cotizar.'
      },
      {
        question: '¿Puedo pedir cambios durante el proceso?',
        answer: 'Sí.\nEl proceso contempla instancias de revisión en la etapa de diseño, donde se ajusta todo lo necesario antes de pasar a desarrollo. Esto permite avanzar con seguridad y sin sorpresas.'
      },
      {
        question: '¿Qué pasa una vez que el proyecto está terminado?',
        answer: 'Entrego el proyecto listo para usarse, con todo lo necesario para su correcta implementación.\nSi el cliente lo necesita, puedo acompañar en ajustes, mejoras o futuras etapas de crecimiento.'
      },
      {
        question: '¿Cómo empiezo?',
        answer: 'Muy simple.\nCompletás el formulario correspondiente (branding o sitio web) y, con esa información, te contacto por WhatsApp para avanzar con la propuesta.'
      }
    ],
    en: [
      {
        question: 'How does the work process work?',
        answer: 'Each project has a clear and orderly process.\nWe start by understanding the context and objectives, then I design the proposal in Figma, we validate the design and only then do we move to the development stage. This avoids rework, saves time and ensures consistency from the start.'
      },
      {
        question: 'Are websites designed directly in code?',
        answer: 'No.\nWebsites are designed first in Figma. That\'s where the structure, user experience and visual design are defined.\nOnce approved, the design is taken to production using modern processes, supported by AI and Figma Make to accelerate the transition to code without losing quality.'
      },
      {
        question: 'What role does artificial intelligence play in your work?',
        answer: 'AI is a support tool.\nI use it to speed up processes, iterate faster and optimize technical tasks, but design, experience and strategy decisions remain human.\nIt doesn\'t replace judgment: it enhances it.'
      },
      {
        question: 'How long does a project take?',
        answer: 'It depends on the scope and complexity.\nOn average:\n\n• Simple sites: 3 to 4 weeks\n• More complex projects: defined in the initial stage\n\nWe always establish clear deadlines before starting.'
      },
      {
        question: 'Do you work with international clients?',
        answer: 'Yes.\nI work 100% remotely with clients from different countries. Communication is done via video calls, email and WhatsApp, depending on what is most comfortable.'
      },
      {
        question: 'Does it include content and texts?',
        answer: 'It depends on the project.\nI can work with content provided by the client or collaborate on the structuring and writing of texts if the project requires it. This is defined before quoting.'
      },
      {
        question: 'Can I request changes during the process?',
        answer: 'Yes.\nThe process includes review instances in the design stage, where everything necessary is adjusted before moving to development. This allows you to move forward with confidence and without surprises.'
      },
      {
        question: 'What happens once the project is finished?',
        answer: 'I deliver the project ready to use, with everything necessary for its correct implementation.\nIf the client needs it, I can accompany adjustments, improvements or future growth stages.'
      },
      {
        question: 'How do I start?',
        answer: 'Very simple.\nYou complete the corresponding form (branding or website) and, with that information, I contact you via WhatsApp to move forward with the proposal.'
      }
    ]
  };

  const currentFaqs = faqs[language];

  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <RevealAnimation>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8">
              {language === 'es' ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-16">
              {language === 'es' 
                ? 'Todo lo que necesitás saber sobre el proceso, plazos y formas de trabajo.' 
                : 'Everything you need to know about the process, deadlines and ways of working.'}
            </p>
          </RevealAnimation>
          
          <div className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <RevealAnimation key={index} delay={index * 0.05}>
                <div className="bg-white border border-gray-200">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 px-6 sm:px-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl sm:text-2xl pr-8">{faq.question}</h3>
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 flex-shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 flex-shrink-0" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      >
                        <div className="px-6 sm:px-8 pb-6">
                          {faq.answer.split('\n').map((line, i) => (
                            line.trim() ? (
                              <p key={i} className="text-gray-600 mb-3 last:mb-0">
                                {line}
                              </p>
                            ) : (
                              <div key={i} className="h-3" />
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.5}>
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-600 mb-6">
                {language === 'es' 
                  ? '¿Tenés otra pregunta?' 
                  : 'Do you have another question?'}
              </p>
              <a 
                href="https://wa.me/5493436987030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors"
              >
                {language === 'es' ? 'Escribime por WhatsApp' : 'Message me on WhatsApp'}
              </a>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
}