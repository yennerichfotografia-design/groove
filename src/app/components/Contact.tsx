import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { RevealAnimation } from './RevealAnimation';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const { t, language } = useLanguage();
  const es = language === 'es';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let msg = `\u{1F4BC} *NUEVA CONSULTA*\n\n`;
    msg += `*Nombre:* ${formData.name}\n`;
    msg += `*Email:* ${formData.email}\n`;
    if (formData.project) {
      msg += `*Proyecto:* ${formData.project}\n`;
    }
    msg += `\n*Mensaje:*\n${formData.message}`;

    window.open(`https://wa.me/5493436987030?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projectOptions = [
    { value: 'branding', label: es ? 'Branding' : 'Branding' },
    { value: 'web', label: es ? 'Web' : 'Web' },
    { value: 'full', label: es ? 'Branding + Web' : 'Branding + Web' },
    { value: 'other', label: es ? 'Otro' : 'Other' },
  ];

  const inputClass = "w-full bg-transparent border-b border-white/20 px-0 py-4 focus:outline-none focus:border-[var(--groove-accent)] transition-colors duration-300 text-white placeholder:text-white/30 text-lg";

  return (
    <section id="contact" className="relative z-10 bg-black text-white py-24 lg:py-32 noise-bg overflow-hidden">
      {/* Accent glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px] pointer-events-none"
        style={{ background: 'var(--groove-accent)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <RevealAnimation>
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
              {es ? 'Contacto' : 'Contact'}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-white/50">
              {t('contact.subtitle')}
            </p>
          </div>
        </RevealAnimation>

        {/* Form */}
        <RevealAnimation delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('contact.form.name')}
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('contact.form.email')}
              className={inputClass}
            />

            {/* Project type as pills */}
            <div className="py-6">
              <p className="text-sm text-white/40 mb-4">{t('contact.form.project')}</p>
              <div className="flex flex-wrap gap-3">
                {projectOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, project: opt.value })}
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      formData.project === opt.value
                        ? 'bg-[var(--groove-accent)] text-black'
                        : 'border border-white/15 text-white/50 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder={t('contact.form.message')}
              className={`${inputClass} resize-none`}
            />

            <div className="pt-8">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-[var(--groove-accent)] text-black py-4 rounded-full font-medium text-lg hover:bg-[var(--groove-accent-dark)] transition-colors duration-200"
              >
                {t('contact.form.submit')}
                <ArrowRight size={18} />
              </button>
              <p className="text-center text-sm text-white/30 mt-4">
                {t('contact.footer')}
              </p>
            </div>
          </form>
        </RevealAnimation>
      </div>
    </section>
  );
}
