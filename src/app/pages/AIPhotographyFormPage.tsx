import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function AIPhotographyFormPage() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 8;

  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', productType: '', imageQuantity: '',
    usage: [] as string[], visualObjective: '', style: [] as string[], references: '', comments: ''
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `\u{1F4F8} *SOLICITUD - FOTOS CON IA*\n\n`;
    msg += `*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n\n`;
    msg += `*Producto:* ${formData.productType}\n*Cantidad:* ${formData.imageQuantity}\n`;
    msg += `*Uso:* ${formData.usage.join(', ')}\n*Objetivo:* ${formData.visualObjective}\n`;
    msg += `*Estilo:* ${formData.style.join(', ')}\n`;
    if (formData.references) msg += `\n*Referencias:* ${formData.references}\n`;
    if (formData.comments) msg += `\n*Comentarios:* ${formData.comments}\n`;
    window.open(`https://wa.me/5493436987030?text=${encodeURIComponent(msg)}`, '_blank');
    setTimeout(() => navigate('/'), 1000);
  };

  const toggleArray = (key: 'usage' | 'style', value: string) => {
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
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">Fotografía IA</p>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">Fotos de producto con IA</h1>
            <p className="text-white/50">Completá el formulario y te enviaré una propuesta por WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div id="section-1" className="space-y-1">
              <p className="form-section-num">01</p>
              <h3 className="text-xl text-white font-medium mb-5">Datos de contacto</h3>
              <input type="text" placeholder="Nombre y apellido *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
              <input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
              <input type="tel" placeholder="WhatsApp (con código de país) *" required value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} onFocus={() => setCurrentSection(1)} className="form-input" />
            </div>

            <div className="border-t border-white/10" />

            <div id="section-2">
              <p className="form-section-num">02</p>
              <h3 className="text-xl text-white font-medium mb-2">Producto</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué tipo de producto es?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(2)}>
                {['Pequeño', 'Mediano', 'Grande', 'Packaging', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.productType === opt} onClick={() => setFormData({...formData, productType: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-3">
              <p className="form-section-num">03</p>
              <h3 className="text-xl text-white font-medium mb-2">Cantidad de imágenes</h3>
              <p className="text-sm text-white/40 mb-5">¿Cuántas imágenes finales necesitás?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(3)}>
                {['1 imagen', '2-3', '4-6', '7-10', 'Más de 10'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.imageQuantity === opt} onClick={() => setFormData({...formData, imageQuantity: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-4">
              <p className="form-section-num">04</p>
              <h3 className="text-xl text-white font-medium mb-2">Uso principal</h3>
              <p className="text-sm text-white/40 mb-5">¿Dónde vas a usar las imágenes?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(4)}>
                {['Sitio web', 'E-commerce', 'Redes sociales', 'Catálogo digital', 'Publicidad', 'Otro'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.usage.includes(opt)} onClick={() => toggleArray('usage', opt)} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-5">
              <p className="form-section-num">05</p>
              <h3 className="text-xl text-white font-medium mb-2">Objetivo visual</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué querés lograr?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(5)}>
                {['Mostrar el producto claro', 'Imagen profesional', 'Estilo premium', 'Más ventas', 'Lanzar producto'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.visualObjective === opt} onClick={() => setFormData({...formData, visualObjective: opt})} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-6">
              <p className="form-section-num">06</p>
              <h3 className="text-xl text-white font-medium mb-2">Estilo deseado</h3>
              <p className="text-sm text-white/40 mb-5">¿Qué estilo te gustaría?</p>
              <div className="flex flex-wrap gap-3" onClick={() => setCurrentSection(6)}>
                {['Fondo blanco / neutro', 'Fondo ambientado', 'Minimalista', 'Lifestyle', 'Necesito asesoramiento'].map(opt => (
                  <Option key={opt} value={opt} selected={formData.style.includes(opt)} onClick={() => toggleArray('style', opt)} />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10" />

            <div id="section-7">
              <p className="form-section-num">07</p>
              <h3 className="text-xl text-white font-medium mb-2">Referencias</h3>
              <p className="text-sm text-white/40 mb-5">Imágenes o estilos de referencia (opcional)</p>
              <textarea value={formData.references} onChange={e => setFormData({...formData, references: e.target.value})} onFocus={() => setCurrentSection(7)} rows={4} placeholder="Ej: Links a imágenes o 'Estilo minimalista con sombras suaves'" className="form-textarea" />
            </div>

            <div className="border-t border-white/10" />

            <div id="section-8">
              <p className="form-section-num">08</p>
              <h3 className="text-xl text-white font-medium mb-2">Comentarios</h3>
              <p className="text-sm text-white/40 mb-5">¿Algo más que debería saber?</p>
              <textarea value={formData.comments} onChange={e => setFormData({...formData, comments: e.target.value})} onFocus={() => setCurrentSection(8)} rows={4} placeholder="Cualquier detalle adicional..." className="form-textarea" />
            </div>

            <div className="pt-4">
              <button type="submit" className="form-submit">Enviar y recibir propuesta <ArrowRight size={18} /></button>
              <p className="text-center text-sm text-white/30 mt-4">Respuesta en menos de 24 horas</p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
