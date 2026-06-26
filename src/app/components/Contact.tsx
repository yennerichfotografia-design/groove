import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// ── RevealText: word-by-word spring entry ────────────────────────────────────
function RevealText({ children }: { children: string }) {
  return (
    <span aria-label={children}>
      {children.split(' ').map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            type: 'spring',
            damping: 26,
            stiffness: 140,
            delay: i * 0.08,
          }}
          style={{ display: 'inline-block', marginRight: '0.22em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ── Contact section ──────────────────────────────────────────────────────────
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });
  const [focused, setFocused] = useState<'name' | 'email' | 'message' | null>(null);

  const { t, language } = useLanguage();
  const es = language === 'es';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `\u{1F4BC} *NUEVA CONSULTA*\n\n`;
    msg += `*Nombre:* ${formData.name}\n`;
    msg += `*Email:* ${formData.email}\n`;
    if (formData.project) msg += `*Proyecto:* ${formData.project}\n`;
    msg += `\n*Mensaje:*\n${formData.message}`;
    window.open(`https://wa.me/5493436987030?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projectOptions = [
    { value: 'branding', label: 'Branding' },
    { value: 'web', label: 'Web' },
    { value: 'full', label: 'Branding + Web' },
    { value: 'other', label: es ? 'Otro' : 'Other' },
  ];

  const inputStyle = (field: 'name' | 'email' | 'message'): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === field ? 'var(--rd-accent)' : 'var(--rd-line)'}`,
    padding: '1.25rem 0',
    fontSize: 'var(--text-body)',
    color: 'var(--rd-fg)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit',
  });

  const sp = { type: 'spring' as const, damping: 28, stiffness: 140 };

  return (
    <section
      id="contact"
      className="rd-dark rd-noise relative overflow-hidden"
      style={{ padding: 'var(--space-section-y) 0' }}
    >
      {/* Ambient accent glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          borderRadius: '9999px',
          background: 'var(--rd-accent)',
          opacity: 0.035,
          filter: 'blur(130px)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative z-10 max-w-2xl mx-auto"
        style={{ padding: '0 var(--space-section-x)' }}
      >
        {/* Meta label */}
        <motion.p
          className="rd-meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...sp, delay: 0.05 }}
          style={{ marginBottom: '2.5rem' }}
        >
          {es ? 'Contacto' : 'Contact'} — {new Date().getFullYear()}
        </motion.p>

        {/* Giant display title */}
        <h2
          className="font-display"
          style={{
            fontSize: 'var(--text-hero-lg, clamp(3.5rem, 10vw, 8rem))',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: 'var(--rd-fg)',
            marginBottom: '2rem',
          }}
        >
          <RevealText>{es ? 'Hablemos.' : "Let's talk."}</RevealText>
        </h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...sp, delay: 0.25 }}
          style={{
            color: 'var(--rd-fg-dim)',
            fontSize: 'var(--text-body)',
            marginBottom: '5rem',
            maxWidth: '38ch',
          }}
        >
          {t('contact.subtitle')}
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...sp, delay: 0.35 }}
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            required
            placeholder={t('contact.form.name')}
            className="placeholder:opacity-30 block"
            style={inputStyle('name')}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            required
            placeholder={t('contact.form.email')}
            className="placeholder:opacity-30 block"
            style={inputStyle('email')}
          />

          {/* Project pills */}
          <div style={{ padding: '2.5rem 0' }}>
            <p className="rd-meta" style={{ marginBottom: '1.25rem' }}>
              {t('contact.form.project')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {projectOptions.map((opt) => {
                const active = formData.project === opt.value;
                return (
                  <motion.button
                    key={opt.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, project: opt.value })}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', damping: 24, stiffness: 160 }}
                    style={{
                      padding: '0.5rem 1.375rem',
                      borderRadius: '9999px',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.05em',
                      fontWeight: 500,
                      cursor: 'pointer',
                      background: active ? 'var(--rd-accent)' : 'transparent',
                      color: active ? '#0a0a0a' : 'var(--rd-fg-dim)',
                      border: active
                        ? '1px solid var(--rd-accent)'
                        : '1px solid var(--rd-line)',
                      transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                    }}
                  >
                    {opt.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            required
            rows={3}
            placeholder={t('contact.form.message')}
            className="placeholder:opacity-30 block"
            style={{ ...inputStyle('message'), resize: 'none' }}
          />

          {/* Submit */}
          <div style={{ paddingTop: '3.5rem' }}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.975 }}
              transition={{ type: 'spring', damping: 24, stiffness: 150 }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                background: 'var(--rd-accent)',
                color: '#0a0a0a',
                padding: '1.125rem 2rem',
                borderRadius: '9999px',
                fontWeight: 600,
                fontSize: 'var(--text-body)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {t('contact.form.submit')}
              <ArrowRight size={18} />
            </motion.button>

            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8125rem',
                color: 'var(--rd-fg-dim)',
                marginTop: '1.5rem',
                opacity: 0.55,
              }}
            >
              {t('contact.footer')}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
