import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function WebFormPage() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 9;

  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', projectType: '', sections: '',
    languages: [] as string[], objective: '', content: '', deadline: '', references: '', comments: ''
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `\u{1F310} *SOLICITUD - SITIO WEB*\n\n`;
    msg += `*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n\n`;
    msg += `*Tipo:* ${formData.projectType}\n*Secciones:* ${formData.sections}\n`;
    msg += `*Idiomas:* ${formData.languages.join(', ')}\n*Objetivo:* ${formData.objective}\n`;
    msg += `*Contenido:* ${formData.content}\n*Plazo:* ${formData.deadline}\n`;
    if (formData.references) msg += `\n*Referencias:* ${formData.references}\n`;
    if (formData.comments) msg += `\n*Comentarios:* ${formData.comments}\n`;
    window.open(`https://wa.me/5493436987030?text=${encodeURIComponent(msg)}`, '_blank');
    setTimeout(() => navigate('/'), 1000);
  };

  const toggleLang = (value: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(value) ? prev.languages.filter(v => v !== value) : [...prev.languages, value]
    }));
  };

  const Option = ({ value, selected, onClick }: { value: string; selected: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`form-option ${selected ? 'selected' : ''}`}>{value}</button>
  );

  return (
    <motion.div className="min-h-screen form-page noise-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <div className="fixed top-0 left-0 right-0 form-header z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"><ArrowLeft size={16} /> Volver</Link>
          <img src={logoImage} alt="Logo" className="h-7 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="text-xs text-white/40">{Math.round((currentSection / totalSections) * 100)}%</span>
        </div>
        <div className="h-0.5 bg-white/10">
          <div className="h-full form-progress-bar transition-all duration-500" style={{ width: `${(currentSection / totalSections) * 100}%`, transitionTimingFunction: 'var(--ease-out-strong)' }} />
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">Web</p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">Contá sobre tu proyecto web</h1>
            <p className="text-white/50">Completá el formulario y te enviaré una cotización por WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div id="section-1" className="space-y-1">
              <p className="form-section-num">01</p>
              <h3 className="text-xl text-white font-medium mb-5">Datos básicos</h3>
              <input type="text" placeholder="Nombre y apellido *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
              <input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
              <input type="tel" placeholder="WhatsApp (con código de país) *" required value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
            </div>

            <div className="border-t border-white/10" />

            <div id="section-2">
              <p className="form-section-num">02</p>
              <h3 className="text-xl text-white font-medium mb-2">Tipo de proyecto</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué tipo de sitio necesitás?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(2)}>
                {['Sitio institucional', 'Landing page', 'Portfolio', 'E-commerce', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.projectType === opt} onClick={() => setFormData({...formData, projectType: opt})} />
                ))}
              </div>
              {formData.projectType === 'E-commerce' && (
                <p className="mt-4 text-sm text-yellow-400/80 border-l-2 border-yellow-400/40 pl-4">Los e-commerce se desarrollan en Tienda Nube o Shopify.</p>
              )}
            </div>

            <div className="border-t border-white/10" />

            <div id="section-3">
              <p className="form-section-num">03</p>
              <h3 className="text-xl text-white font-medium mb-2">Alcance</h3>
              <p className="text-sm text-white/40 mb-5">¿Cuántas secciones estimás?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(3)}>
                {['1 sección (landing)', '3 a 5', '6 a 8', 'Más de 8', 'Necesito asesoramiento'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.sections === opt} onClick={() => setFormData({...formData, sections: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-4">
              <p className="form-section-num">04</p>
              <h3 className="text-xl text-white font-medium mb-2">Idiomas</h3>
              <p className="text-sm text-white/40 mb-5">¿En qué idioma/s estará el sitio?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(4)}>
                {['Español', 'Inglés', 'Portugués', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.languages.includes(opt)} onClick={() => toggleLang(opt)} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-5">
              <p className="form-section-num">05</p>
              <h3 className="text-xl text-white font-medium mb-2">Objetivo principal</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué querés lograr con el sitio?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(5)}>
                {['Generar ventas', 'Generar leads', 'Posicionamiento', 'Presentar servicios', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.objective === opt} onClick={() => setFormData({...formData, objective: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-6">
              <p className="form-section-num">06</p>
              <h3 className="text-xl text-white font-medium mb-2">Contenido</h3>
              <p className="text-sm text-white/40 mb-5">¿Ya contás con textos e imágenes?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(6)}>
                {['Sí, tengo todo', 'Tengo parte', 'Necesito ayuda'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.content === opt} onClick={() => setFormData({...formData, content: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-7">
              <p className="form-section-num">07</p>
              <h3 className="text-xl text-white font-medium mb-2">Plazos</h3>
              <p className="text-sm text-white/40 mb-5">¿Para cuándo lo necesitás?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(7)}>
                {['Lo antes posible', 'Menos de 1 mes', '1–2 meses', 'Sin urgencia'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.deadline === opt} onClick={() => setFormData({...formData, deadline: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-8">
              <p className="form-section-num">08</p>
              <h3 className="text-xl text-white font-medium mb-2">Referencias</h3>
              <p className="text-sm text-white/40 mb-5">Sitios que te gusten (opcional)</p>
              <textarea value={formData.references} onChange={e => setFormData({...formData, references: e.target.value})} onFocus={() => setCurrentSection(8)} rows={4} placeholder="Ej: https://ejemplo.com - Me gusta su diseño..." className="form-textarea" />
            </div>

            <div className="border-t border-white/10" />

            <div id="section-9">
              <p className="form-section-num">09</p>
              <h3 className="text-xl text-white font-medium mb-2">Comentarios</h3>
              <p className="text-sm text-white/40 mb-5">¿Algo más que debería saber?</p>
              <textarea value={formData.comments} onChange={e => setFormData({...formData, comments: e.target.value})} onFocus={() => setCurrentSection(9)} rows={4} placeholder="Cualquier detalle adicional..." className="form-textarea" />
            </div>

            <div className="pt-4">
              <button type="submit" className="form-submit">Enviar y recibir cotización <ArrowRight size={18} /></button>
              <p className="text-center text-sm text-white/30 mt-4">Respuesta en menos de 24 horas</p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
