import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function BrandingFormPage() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 8;

  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', brandType: '', projectStage: '',
    scope: [] as string[], mainUse: [] as string[], deadline: '', references: '', objectives: ''
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `\u{1F3A8} *SOLICITUD - BRANDING*\n\n`;
    msg += `*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n\n`;
    msg += `*Tipo:* ${formData.brandType}\n*Etapa:* ${formData.projectStage}\n`;
    msg += `*Alcance:* ${formData.scope.join(', ')}\n*Uso:* ${formData.mainUse.join(', ')}\n`;
    msg += `*Plazo:* ${formData.deadline}\n`;
    if (formData.references) msg += `\n*Referencias:* ${formData.references}\n`;
    if (formData.objectives) msg += `\n*Objetivos:* ${formData.objectives}\n`;
    window.open(`https://wa.me/5493436987030?text=${encodeURIComponent(msg)}`, '_blank');
    setTimeout(() => navigate('/'), 1000);
  };

  const toggleArray = (key: 'scope' | 'mainUse', value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: prev[key].includes(value) ? prev[key].filter(v => v !== value) : [...prev[key], value]
    }));
  };

  const Option = ({ value, selected, onClick }: { value: string; selected: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className={`form-option ${selected ? 'selected' : ''}`}>{value}</button>
  );

  return (
    <motion.div className="min-h-screen form-page noise-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 form-header z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
            <ArrowLeft size={16} /> Volver
          </Link>
          <img src={logoImage} alt="Logo" className="h-7 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="text-xs text-white/40">{Math.round((currentSection / totalSections) * 100)}%</span>
        </div>
        <div className="h-0.5 bg-white/10">
          <div className="h-full form-progress-bar transition-all duration-500" style={{ width: `${(currentSection / totalSections) * 100}%`, transitionTimingFunction: 'var(--ease-out-strong)' }} />
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">Branding</p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">Contame sobre tu marca</h1>
            <p className="text-white/50">Completá el formulario y te enviaré una propuesta por WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* 1. Contacto */}
            <div id="section-1" className="space-y-1">
              <p className="form-section-num">01</p>
              <h3 className="text-xl text-white font-medium mb-5">Datos de contacto</h3>
              <input type="text" placeholder="Nombre y apellido *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
              <input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
              <input type="tel" placeholder="WhatsApp (con código de país) *" required value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
            </div>

            <div className="border-t border-white/10" />

            {/* 2. Tipo de marca */}
            <div id="section-2">
              <p className="form-section-num">02</p>
              <h3 className="text-xl text-white font-medium mb-2">Tipo de marca</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué tipo de marca es?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(2)}>
                {['Marca personal', 'Empresa / PyME', 'Startup', 'Proyecto en etapa inicial', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.brandType === opt} onClick={() => setFormData({...formData, brandType: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* 3. Etapa */}
            <div id="section-3">
              <p className="form-section-num">03</p>
              <h3 className="text-xl text-white font-medium mb-2">Etapa del proyecto</h3>
              <p className="text-sm text-white/40 mb-5">¿En qué etapa se encuentra la marca?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(3)}>
                {['Emprendimiento nuevo', 'Sin identidad clara', 'Necesita rediseño', 'Busca evolución'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.projectStage === opt} onClick={() => setFormData({...formData, projectStage: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* 4. Alcance */}
            <div id="section-4">
              <p className="form-section-num">04</p>
              <h3 className="text-xl text-white font-medium mb-2">Alcance del trabajo</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué necesitás? (podés elegir varias)</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(4)}>
                {['Logo', 'Sistema visual', 'Branding completo', 'Manual de marca', 'Web y redes'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.scope.includes(opt)} onClick={() => toggleArray('scope', opt)} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* 5. Uso */}
            <div id="section-5">
              <p className="form-section-num">05</p>
              <h3 className="text-xl text-white font-medium mb-2">Uso principal</h3>
              <p className="text-sm text-white/40 mb-5">¿Dónde se va a usar?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(5)}>
                {['Sitio web', 'Redes sociales', 'Material comercial', 'Presentaciones', 'Packaging', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.mainUse.includes(opt)} onClick={() => toggleArray('mainUse', opt)} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* 6. Plazos */}
            <div id="section-6">
              <p className="form-section-num">06</p>
              <h3 className="text-xl text-white font-medium mb-2">Plazos</h3>
              <p className="text-sm text-white/40 mb-5">¿Para cuándo lo necesitás?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(6)}>
                {['Lo antes posible', 'Menos de 1 mes', '1–2 meses', 'Sin urgencia'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.deadline === opt} onClick={() => setFormData({...formData, deadline: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* 7. Referencias */}
            <div id="section-7">
              <p className="form-section-num">07</p>
              <h3 className="text-xl text-white font-medium mb-2">Referencias</h3>
              <p className="text-sm text-white/40 mb-5">Marcas o estilos que te gusten (opcional)</p>
              <textarea value={formData.references} onChange={e => setFormData({...formData, references: e.target.value})} onFocus={() => setCurrentSection(7)} rows={4} placeholder="Ej: Me gusta el minimalismo de Apple, la paleta de Airbnb..." className="form-textarea" />
            </div>

            <div className="border-t border-white/10" />

            {/* 8. Objetivos */}
            <div id="section-8">
              <p className="form-section-num">08</p>
              <h3 className="text-xl text-white font-medium mb-2">Contexto y objetivos</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué buscás lograr con esta marca?</p>
              <textarea value={formData.objectives} onChange={e => setFormData({...formData, objectives: e.target.value})} onFocus={() => setCurrentSection(8)} rows={4} placeholder="Profesionalizar la imagen, lanzar un producto, escalar..." className="form-textarea" />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button type="submit" className="form-submit">
                Enviar y recibir propuesta <ArrowRight size={18} />
              </button>
              <p className="text-center text-sm text-white/30 mt-4">Respuesta en menos de 24 horas</p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
