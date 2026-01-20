import React, { useState, useEffect } from 'react';
import { Target, Eye, Award, Clock, CheckCircle, Users } from 'lucide-react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/images/services/Hogar/puertas-corredisas-vidrio.avif',
    '/images/services/Hogar/puertas-ventanas-vidrio.avif',
    '/images/services/Hogar/escaleras-con-vidrio.avif',
    '/images/services/Empresa/puerta-de-vidrio-negocio.avif',
    '/images/services/Empresa/puerta-de-vidrio-negocio-2.avif',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6 animate-fade-in">
                Nuestra Historia
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
                Creando espacios excepcionales desde 2004
              </h1>
              <p className="text-base leading-relaxed text-slate-600 mb-8 animate-fade-in-up animation-delay-200">
                SAVQRO nace de la pasión por transformar espacios a través del vidrio y aluminio. Con más de dos décadas de experiencia, nos hemos consolidado como líderes en soluciones arquitectónicas en Querétaro.
              </p>
              
              <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-300">
                <div className="text-center p-6 bg-slate-50 rounded-sm">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-slate-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-6 bg-slate-50 rounded-sm">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-slate-600">Proyectos Completados</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="relative w-full h-[600px] overflow-hidden rounded-sm shadow-xl">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Proyecto SAVQRO ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                
                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-clean p-10 animate-fade-in-up">
              <Target size={40} className="text-secondary mb-6" />
              <h3 className="text-2xl md:text-3xl font-medium mb-4">Nuestra Misión</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Proporcionar soluciones innovadoras en aluminio y vidrio que superen las expectativas de nuestros clientes, combinando calidad, diseño y funcionalidad. Nos comprometemos a entregar proyectos que transformen espacios y mejoren la calidad de vida de las personas.
              </p>
            </div>

            <div className="card-clean p-10 animate-fade-in-up animation-delay-100">
              <Eye size={40} className="text-secondary mb-6" />
              <h3 className="text-2xl md:text-3xl font-medium mb-4">Nuestra Visión</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Ser la empresa líder en soluciones de aluminio y vidrio en el Bajío, reconocida por nuestra excelencia, innovación y compromiso con la satisfacción del cliente. Aspiramos a establecer nuevos estándares de calidad en la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32" data-testid="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              Nuestros Valores
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Lo que nos define
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" data-testid="value-quality">
              <div className="w-20 h-20 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Award size={40} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4">Calidad</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Utilizamos únicamente materiales premium y aplicamos los más altos estándares en cada proyecto.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-100" data-testid="value-commitment">
              <div className="w-20 h-20 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4">Compromiso</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Nos dedicamos completamente a cada proyecto, garantizando resultados excepcionales.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200" data-testid="value-punctuality">
              <div className="w-20 h-20 bg-slate-900 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Clock size={40} className="text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-medium mb-4">Puntualidad</h3>
              <p className="text-base leading-relaxed text-slate-600">
                Respetamos los tiempos acordados y entregamos cada proyecto en la fecha establecida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-slate-900 text-white" data-testid="timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              Nuestro Recorrido
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Evolución y crecimiento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" data-testid="timeline-2004">
              <div className="text-5xl font-bold text-secondary mb-4">2004</div>
              <h4 className="text-xl font-semibold mb-3">Fundación</h4>
              <p className="text-slate-300 text-sm">
                Inicio de operaciones con proyectos residenciales en Querétaro
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-100" data-testid="timeline-2010">
              <div className="text-5xl font-bold text-secondary mb-4">2010</div>
              <h4 className="text-xl font-semibold mb-3">Expansión</h4>
              <p className="text-slate-300 text-sm">
                Incorporación de proyectos comerciales y corporativos
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-200" data-testid="timeline-2015">
              <div className="text-5xl font-bold text-secondary mb-4">2015</div>
              <h4 className="text-xl font-semibold mb-3">Innovación</h4>
              <p className="text-slate-300 text-sm">
                Implementación de tecnologías y materiales de vanguardia
              </p>
            </div>

            <div className="text-center animate-fade-in-up animation-delay-300" data-testid="timeline-2024">
              <div className="text-5xl font-bold text-secondary mb-4">2024</div>
              <h4 className="text-xl font-semibold mb-3">Liderazgo</h4>
              <p className="text-slate-300 text-sm">
                Consolidación como referente en la industria regional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32" data-testid="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6">
                Por Qué Elegirnos
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                La mejor opción para tu proyecto
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4 animate-fade-in-up">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Experiencia Comprobada</h4>
                    <p className="text-slate-600">
                      Más de 500 proyectos exitosos en residencias, comercios y edificios corporativos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up animation-delay-100">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Garantía de Calidad</h4>
                    <p className="text-slate-600">
                      Materiales certificados y mano de obra especializada en cada instalación
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up animation-delay-200">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Atención Personalizada</h4>
                    <p className="text-slate-600">
                      Asesoría completa desde el diseño hasta la instalación final
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up animation-delay-300">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Precios Competitivos</h4>
                    <p className="text-slate-600">
                      Cotizaciones transparentes sin costos ocultos
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Servicio Post-Venta</h4>
                    <p className="text-slate-600">
                      Soporte continuo y mantenimiento para tu tranquilidad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/services/Empresa/puerta-de-vidrio-negocio-2.avif"
                alt="Proyecto comercial"
                className="w-full h-[700px] object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
