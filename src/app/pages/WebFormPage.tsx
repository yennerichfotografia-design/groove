import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function WebFormPage() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 9;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: '',
    sections: '',
    languages: [] as string[],
    objective: '',
    content: '',
    deadline: '',
    references: '',
    comments: ''
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    let message = `🌐 *SOLICITUD DE COTIZACIÓN - SITIO WEB*\n\n`;
    message += `*DATOS BÁSICOS*\n`;
    message += `Nombre: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `WhatsApp: ${formData.whatsapp}\n\n`;
    
    message += `*TIPO DE PROYECTO*\n`;
    message += `${formData.projectType}\n\n`;
    
    message += `*ALCANCE*\n`;
    message += `Secciones: ${formData.sections}\n\n`;
    
    message += `*IDIOMAS*\n`;
    message += `${formData.languages.join(', ')}\n\n`;
    
    message += `*OBJETIVO*\n`;
    message += `${formData.objective}\n\n`;
    
    message += `*CONTENIDO*\n`;
    message += `${formData.content}\n\n`;
    
    message += `*PLAZO*\n`;
    message += `${formData.deadline}\n\n`;
    
    if (formData.references) {
      message += `*REFERENCIAS*\n`;
      message += `${formData.references}\n\n`;
    }
    
    if (formData.comments) {
      message += `*COMENTARIOS ADICIONALES*\n`;
      message += `${formData.comments}\n\n`;
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

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(value)
        ? prev.languages.filter(lang => lang !== value)
        : [...prev.languages, value]
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
            <Link to="/" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Volver al inicio</span>
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
                  <h2 className="text-2xl mb-2">Formulario Web</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Completá los datos para recibir tu cotización personalizada
                  </p>
                  
                  <nav className="space-y-2">
                    {[
                      'Datos básicos',
                      'Tipo de proyecto',
                      'Alcance',
                      'Idiomas',
                      'Objetivo',
                      'Contenido',
                      'Plazos',
                      'Referencias',
                      'Comentarios'
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
                  {/* 1. Datos básicos */}
                  <div id="section-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <h3 className="text-3xl">Datos básicos</h3>
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

                  {/* 2. Tipo de proyecto */}
                  <div id="section-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <h3 className="text-3xl">Tipo de proyecto</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Qué tipo de sitio necesitás? *
                      </label>
                      <div className="space-y-3">
                        {['Sitio institucional', 'Landing page', 'Portfolio', 'E-commerce', 'Otro'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="projectType"
                              value={option}
                              checked={formData.projectType === option}
                              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                              onFocus={() => setCurrentSection(2)}
                              required
                              className="w-5 h-5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                      
                      {formData.projectType === 'E-commerce' && (
                        <div className="mt-5 p-4 bg-amber-50 border-l-4 border-amber-400 flex gap-3">
                          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-amber-800">
                            Los e-commerce se desarrollan únicamente en Tienda Nube o Shopify.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 3. Alcance del sitio */}
                  <div id="section-3">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <h3 className="text-3xl">Alcance del sitio</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Cuántas secciones estimás que tendrá el sitio? *
                      </label>
                      <div className="space-y-3">
                        {[
                          '1 sección (landing)',
                          '3 a 5 secciones',
                          '6 a 8 secciones',
                          'Más de 8',
                          'No lo sé / necesito asesoramiento'
                        ].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="sections"
                              value={option}
                              checked={formData.sections === option}
                              onChange={(e) => setFormData({ ...formData, sections: e.target.value })}
                              onFocus={() => setCurrentSection(3)}
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

                  {/* 4. Idiomas */}
                  <div id="section-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <h3 className="text-3xl">Idiomas</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿En qué idioma/s estará el sitio? *
                      </label>
                      <div className="space-y-3">
                        {['Español', 'Inglés', 'Portugués', 'Otro'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="checkbox"
                              value={option}
                              checked={formData.languages.includes(option)}
                              onChange={() => handleCheckboxChange(option)}
                              onFocus={() => setCurrentSection(4)}
                              className="w-5 h-5"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 5. Objetivo principal */}
                  <div id="section-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <h3 className="text-3xl">Objetivo principal</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Cuál es el objetivo principal del sitio? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Generar ventas',
                          'Generar contactos / leads',
                          'Posicionamiento de marca',
                          'Presentar servicios',
                          'Otro'
                        ].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="objective"
                              value={option}
                              checked={formData.objective === option}
                              onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                              onFocus={() => setCurrentSection(5)}
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

                  {/* 6. Contenido */}
                  <div id="section-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        6
                      </div>
                      <h3 className="text-3xl">Contenido</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Ya contás con los textos y las imágenes? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Sí, tengo todo',
                          'Tengo parte del contenido',
                          'No, necesito ayuda con el contenido'
                        ].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="content"
                              value={option}
                              checked={formData.content === option}
                              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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

                  {/* 7. Plazos */}
                  <div id="section-7">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        7
                      </div>
                      <h3 className="text-3xl">Plazos</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Para cuándo necesitás el sitio? *
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
                              onFocus={() => setCurrentSection(7)}
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

                  {/* 8. Referencias */}
                  <div id="section-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        8
                      </div>
                      <h3 className="text-3xl">Referencias</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label htmlFor="references" className="block mb-2 font-medium">
                        ¿Tenés sitios de referencia que te gusten?
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        Opcional pero clave. Ejemplo: URLs o descripciones breves.
                      </p>
                      <textarea
                        id="references"
                        value={formData.references}
                        onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                        onFocus={() => setCurrentSection(8)}
                        rows={5}
                        placeholder="Ej: https://ejemplo.com - Me gusta su diseño minimalista y la navegación..."
                        className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 9. Comentarios adicionales */}
                  <div id="section-9">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        9
                      </div>
                      <h3 className="text-3xl">Comentarios adicionales</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label htmlFor="comments" className="block mb-2 font-medium">
                        ¿Hay algo más que debería saber sobre el proyecto?
                      </label>
                      <textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        onFocus={() => setCurrentSection(9)}
                        rows={5}
                        placeholder="Cualquier detalle adicional que consideres importante..."
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
                      Enviar y recibir cotización por WhatsApp →
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