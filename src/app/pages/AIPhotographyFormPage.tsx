import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/2a1be87d495193914ab22c7cd47e0a19e7433208.png';

export function AIPhotographyFormPage() {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 8;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    productType: '',
    imageQuantity: '',
    usage: [] as string[],
    visualObjective: '',
    style: [] as string[],
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
    let message = `📸 *SOLICITUD DE PROPUESTA - FOTOS CON IA*\n\n`;
    message += `*DATOS DE CONTACTO*\n`;
    message += `Nombre: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `WhatsApp: ${formData.whatsapp}\n\n`;
    
    message += `*TIPO DE PRODUCTO*\n`;
    message += `${formData.productType}\n\n`;
    
    message += `*CANTIDAD DE IMÁGENES*\n`;
    message += `${formData.imageQuantity}\n\n`;
    
    message += `*USO PRINCIPAL*\n`;
    message += `${formData.usage.join(', ')}\n\n`;
    
    message += `*OBJETIVO VISUAL*\n`;
    message += `${formData.visualObjective}\n\n`;
    
    message += `*ESTILO DESEADO*\n`;
    message += `${formData.style.join(', ')}\n\n`;
    
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

  const handleUsageChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      usage: prev.usage.includes(value)
        ? prev.usage.filter(u => u !== value)
        : [...prev.usage, value]
    }));
  };

  const handleStyleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      style: prev.style.includes(value)
        ? prev.style.filter(s => s !== value)
        : [...prev.style, value]
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
                  <h2 className="text-2xl mb-2">Fotos de producto con IA</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Con esta información puedo entender tu necesidad y enviarte la propuesta por WhatsApp.
                  </p>
                  
                  <nav className="space-y-2">
                    {[
                      'Datos de contacto',
                      'Producto',
                      'Cantidad de imágenes',
                      'Uso principal de las imágenes',
                      'Objetivo visual',
                      'Estilo deseado',
                      'Referencias',
                      'Comentarios adicionales'
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

                  {/* 2. Tipo de producto */}
                  <div id="section-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <h3 className="text-3xl">Producto</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Qué tipo de producto es? *
                      </label>
                      <div className="space-y-3">
                        {['Producto físico pequeño', 'Producto físico mediano', 'Producto físico grande', 'Packaging', 'Otro'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="productType"
                              value={option}
                              checked={formData.productType === option}
                              onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
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

                  {/* 3. Cantidad de imágenes */}
                  <div id="section-3">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <h3 className="text-3xl">Cantidad de imágenes</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Cuántas imágenes finales necesitás? *
                      </label>
                      <div className="space-y-3">
                        {['1 imagen', '2 a 3 imágenes', '4 a 6 imágenes', '7 a 10 imágenes', 'Más de 10 imágenes'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="imageQuantity"
                              value={option}
                              checked={formData.imageQuantity === option}
                              onChange={(e) => setFormData({ ...formData, imageQuantity: e.target.value })}
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

                  {/* 4. Uso principal */}
                  <div id="section-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <h3 className="text-3xl">Uso principal de las imágenes</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Dónde vas a usar estas imágenes? *
                      </label>
                      <div className="space-y-3">
                        {['Sitio web', 'E-commerce', 'Redes sociales', 'Catálogo digital', 'Publicidad online', 'Otro'].map((option) => (
                          <label key={option} className="flex items-center gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="checkbox"
                              checked={formData.usage.includes(option)}
                              onChange={() => handleUsageChange(option)}
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

                  {/* 5. Objetivo visual */}
                  <div id="section-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        5
                      </div>
                      <h3 className="text-3xl">Objetivo visual</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Qué querés lograr con las imágenes? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Mostrar el producto de forma clara',
                          'Dar una imagen más profesional',
                          'Transmitir un estilo premium',
                          'Generar más ventas',
                          'Lanzar un nuevo producto'
                        ].map((option) => (
                          <label key={option} className="flex items-start gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="radio"
                              name="visualObjective"
                              value={option}
                              checked={formData.visualObjective === option}
                              onChange={(e) => setFormData({ ...formData, visualObjective: e.target.value })}
                              onFocus={() => setCurrentSection(5)}
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

                  {/* 6. Estilo deseado */}
                  <div id="section-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        6
                      </div>
                      <h3 className="text-3xl">Estilo deseado</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label className="block mb-4 font-medium">
                        ¿Qué estilo te gustaría? *
                      </label>
                      <div className="space-y-3">
                        {[
                          'Fondo blanco / neutro',
                          'Fondo ambientado',
                          'Estilo minimalista',
                          'Estilo lifestyle',
                          'No lo sé, necesito asesoramiento'
                        ].map((option) => (
                          <label key={option} className="flex items-start gap-3 cursor-pointer p-3 border-2 border-gray-200 hover:border-gray-400 transition-colors rounded">
                            <input
                              type="checkbox"
                              checked={formData.style.includes(option)}
                              onChange={() => handleStyleChange(option)}
                              onFocus={() => setCurrentSection(6)}
                              className="w-5 h-5 mt-0.5"
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
                        ¿Tenés imágenes de referencia?
                      </label>
                      <p className="text-sm text-gray-600 mb-3">
                        Opcional pero recomendado. Podés pegar links o describir el estilo.
                      </p>
                      <textarea
                        id="references"
                        value={formData.references}
                        onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                        onFocus={() => setCurrentSection(7)}
                        rows={5}
                        placeholder="Ej: https://ejemplo.com/imagen.jpg o 'Estilo minimalista con sombras suaves'"
                        className="w-full border-2 border-gray-300 px-4 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200" />

                  {/* 8. Comentarios adicionales */}
                  <div id="section-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                        8
                      </div>
                      <h3 className="text-3xl">Comentarios adicionales</h3>
                    </div>
                    
                    <div className="ml-0 sm:ml-13">
                      <label htmlFor="comments" className="block mb-2 font-medium">
                        ¿Hay algo más que debería saber?
                      </label>
                      <textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                        onFocus={() => setCurrentSection(8)}
                        rows={5}
                        placeholder="Cualquier detalle adicional que quieras compartir..."
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