import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function BrandingFormPage() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 8;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    brandType: '',
    projectStage: '',
    scope: [] as string[],
    mainUse: [] as string[],
    deadline: '',
    references: '',
    objectives: ''
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    let message = `🎨 *SOLICITUD DE PROPUESTA - BRANDING*\n\n`;
    message += `*DATOS DE CONTACTO*\n`;
    message += `Nombre: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `WhatsApp: ${formData.whatsapp}\n\n`;
    
    message += `*TIPO DE MARCA*\n`;
    message += `${formData.brandType}\n\n`;
    
    message += `*ETAPA DEL PROYECTO*\n`;
    message += `${formData.projectStage}\n\n`;
    
    message += `*ALCANCE DEL TRABAJO*\n`;
    message += `${formData.scope.join(', ')}\n\n`;
    
    message += `*USO PRINCIPAL DE LA MARCA*\n`;
    message += `${formData.mainUse.join(', ')}\n\n`;
    
    message += `*PLAZO*\n`;
    message += `${formData.deadline}\n\n`;
    
    if (formData.references) {
      message += `*REFERENCIAS*\n`;
      message += `${formData.references}\n\n`;
    }
    
    if (formData.objectives) {
      message += `*CONTEXTO Y OBJETIVOS*\n`;
      message += `${formData.objectives}\n\n`;
    }

    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5493436987030?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Redirigir al home después de un momento
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleScopeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      scope: prev.scope.includes(value)
        ? prev.scope.filter(s => s !== value)
        : [...prev.scope, value]
    }));
  };

  const handleMainUseChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      mainUse: prev.mainUse.includes(value)
        ? prev.mainUse.filter(u => u !== value)
        : [...prev.mainUse, value]
    }));
  };

  const scrollToSection = (section: number) => {
    setCurrentSection(section);
    const element = document.getElementById(`section-${section}`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Header fijo */}
      <motion.div 
        className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Volver</span>
            </Link>
            <img 
              src={logoImage} 
              alt="Logo" 
              className="h-8 sm:h-10 w-auto"
              style={{ filter: 'brightness(0)' }}
            />
            <div className="text-sm text-gray-600 hidden sm:block">
              {Math.round((currentSection / totalSections) * 100)}% completado
            </div>
          </div>
        </div>
        
        {/* Barra de progreso */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${(currentSection / totalSections) * 100}%` }}
          />
        </div>
      </motion.div>

      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar - Navegación */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl mb-2">Contame sobre tu marca</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Este formulario me permite entender el contexto de tu marca y enviarte una propuesta clara por WhatsApp.
                  </p>
                  
                  <nav className="space-y-2">
                    {[
                      'Datos de contacto',
                      'Tipo de marca',
                      'Etapa del proyecto',
                      'Alcance del trabajo',
                      'Uso principal de la marca',
                      'Plazos',
                      'Referencias',
                      'Contexto y objetivos'
                    ].map((section, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(index + 1)}
                        className={`w-full text-left px-4 py-2 rounded transition-colors ${
                          currentSection === index + 1
                            ? 'bg-black text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${
                            currentSection > index + 1
                              ? 'border-black bg-black text-white'
                              : currentSection === index + 1
                              ? 'border-white text-white'
                              : 'border-gray-300'
                          }`}>
                            {currentSection > index + 1 ? <CheckCircle2 size={16} /> : index + 1}
                          </span>
                          <span className="text-sm">{section}</span>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Formulario Principal */}
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-12">
                  {/* 1. Datos de contacto */}
                  <div id="section-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <h3 className="text-3xl">Datos de contacto</h3>
                    </div>
                    
                    <div className="space-y-5 ml-0 sm:ml-13">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                          Nombre y apellido *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setCurrentSection(1)}
                          required
                          className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setCurrentSection(1)}
                          required
                          className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">
                          WhatsApp (con código de país) *
                        </label>
                        <input
                          type="tel"
                          id="whatsapp"
                          placeholder="+54 9 11 1234 5678"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          onFocus={() => setCurrentSection(1)}
                          required
                          className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 2. Tipo de marca */}
                  <div id="section-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <h3 className="text-3xl">Tipo de marca</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Qué tipo de marca es? *
                      </label>
                      <div className="space-y-3">
                        {['Marca personal', 'Empresa / PyME', 'Startup', 'Proyecto en etapa inicial', 'Otro'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="brandType"
                              value={option}
                              checked={formData.brandType === option}
                              onChange={(e) => setFormData({ ...formData, brandType: e.target.value })}
                              onFocus={() => setCurrentSection(2)}
                              required
                              className="w-5 h-5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 3. Etapa del proyecto */}
                  <div id="section-3">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <h3 className="text-3xl">Etapa del proyecto</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿En qué etapa se encuentra la marca? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Idea / emprendimiento nuevo',
                          'Marca existente sin identidad clara',
                          'Marca con identidad que necesita rediseño',
                          'Marca consolidada que busca evolución'
                        ].map((option) => (
                          <label key={option} className="flex items-start gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="projectStage"
                              value={option}
                              checked={formData.projectStage === option}
                              onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                              onFocus={() => setCurrentSection(3)}
                              required
                              className="w-5 h-5 mt-0.5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 4. Alcance del trabajo */}
                  <div id="section-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <h3 className="text-3xl">Alcance del trabajo</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Qué necesitás diseñar? (podés elegir más de una) *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Logo',
                          'Sistema visual (tipografía, colores, aplicaciones)',
                          'Branding completo',
                          'Manual / lineamientos de marca',
                          'Adaptación para web y redes'
                        ].map((option) => (
                          <label key={option} className="flex items-start gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="checkbox"
                              value={option}
                              checked={formData.scope.includes(option)}
                              onChange={() => handleScopeChange(option)}
                              onFocus={() => setCurrentSection(4)}
                              className="w-5 h-5 mt-0.5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 5. Uso principal de la marca */}
                  <div id="section-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <h3 className="text-3xl">Uso principal de la marca</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Dónde se va a usar principalmente la identidad? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Sitio web',
                          'Redes sociales',
                          'Material comercial',
                          'Presentaciones institucionales',
                          'Packaging',
                          'Otro'
                        ].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="checkbox"
                              value={option}
                              checked={formData.mainUse.includes(option)}
                              onChange={() => handleMainUseChange(option)}
                              onFocus={() => setCurrentSection(5)}
                              className="w-5 h-5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 6. Plazos */}
                  <div id="section-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        6
                      </div>
                      <h3 className="text-3xl">Plazos</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Para cuándo necesitás el proyecto? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Lo antes posible',
                          'En menos de 1 mes',
                          'En 1–2 meses',
                          'No tengo urgencia'
                        ].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="deadline"
                              value={option}
                              checked={formData.deadline === option}
                              onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                              onFocus={() => setCurrentSection(6)}
                              required
                              className="w-5 h-5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 7. Referencias */}
                  <div id="section-7">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        7
                      </div>
                      <h3 className="text-3xl">Referencias</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label htmlFor="references" className="block mb-2 font-medium">
                        ¿Tenés marcas o estilos que te gusten?
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        Muy recomendable. Podés compartir nombres, links o describir el estilo.
                      </p>
                      <textarea
                        id="references"
                        value={formData.references}
                        onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                        onFocus={() => setCurrentSection(7)}
                        rows={5}
                        placeholder="Ej: Me gusta el minimalismo de Apple, la paleta de colores de Airbnb, el estilo moderno y limpio..."
                        className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 8. Contexto y objetivos */}
                  <div id="section-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        8
                      </div>
                      <h3 className="text-3xl">Contexto y objetivos</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label htmlFor="objectives" className="block mb-2 font-medium">
                        Contame brevemente qué buscás lograr con esta marca
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        Ej: profesionalizar la imagen, lanzar un producto, diferenciarme, escalar, etc.
                      </p>
                      <textarea
                        id="objectives"
                        value={formData.objectives}
                        onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                        onFocus={() => setCurrentSection(8)}
                        rows={5}
                        placeholder="Contanos qué querés lograr con este proyecto..."
                        className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Botón de envío */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full bg-black text-white px-8 py-5 hover:bg-gray-800 transition-colors text-lg font-medium"
                    >
                      Enviar y recibir propuesta por WhatsApp →
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      Te responderé en menos de 24 horas con una propuesta personalizada
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}