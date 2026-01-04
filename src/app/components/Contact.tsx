import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    let message = `💼 *NUEVA CONSULTA*\n\n`;
    message += `*Nombre:* ${formData.name}\n`;
    message += `*Email:* ${formData.email}\n`;
    if (formData.company) {
      message += `*Empresa:* ${formData.company}\n`;
    }
    message += `\n*Mensaje:*\n${formData.message}`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/5493436987030?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const translations = {
    es: {
      title: '¿Tenés un proyecto en mente?',
      subtitle1: 'Marca, web o rediseño.',
      subtitle2: 'Lo vemos rápido y te digo si puedo ayudarte.',
      footer: 'Respuesta clara. Próximo paso definido.',
      name: 'Nombre *',
      email: 'Email *',
      company: 'Empresa',
      message: 'Mensaje *',
      submit: 'Enviar mensaje'
    },
    en: {
      title: 'Have a project in mind?',
      subtitle1: 'Brand, website or redesign.',
      subtitle2: "Let's take a quick look and I'll tell you if I can help.",
      footer: 'Clear response. Next step defined.',
      name: 'Name *',
      email: 'Email *',
      company: 'Company',
      message: 'Message *',
      submit: 'Send message'
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className="relative z-10 bg-black text-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <RevealAnimation>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-8">
                {t.title}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.1}>
              <p className="text-xl text-gray-400 mb-8">
                {t.subtitle1}<br />
                {t.subtitle2}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-gray-400">
                {t.footer}
              </p>
            </RevealAnimation>
          </div>
          
          <RevealAnimation delay={0.2}>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 text-sm">
                    {t.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 hover:bg-gray-200 transition-colors"
                >
                  {t.submit}
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}