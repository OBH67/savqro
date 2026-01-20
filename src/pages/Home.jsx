import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Users, Star, Phone, Mail } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const handleCall = () => {
    window.location.href = 'tel:+524423388425';
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-image.png"
            alt="Fachada moderna de vidrio SAVQRO"
            className="w-full h-full object-cover"
          />    
          <div className="absolute inset-0 overlay-gradient-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6 animate-fade-in">
                <span className="inline-block bg-primary text-white px-4 py-1 rounded-sm font-semibold shadow-md">
                 Expertos en Aluminio &amp; Vidrio para Espacios Modernos, Hogares y Negocios
                </span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Diseño que transforma espacios
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 animate-fade-in-up animation-delay-200">
              Más de 20 años creando soluciones elegantes y funcionales
            </p>
            <p className="text-base leading-relaxed text-slate-600 mb-10 animate-fade-in-up animation-delay-300">
              Especialistas en proyectos residenciales, comerciales y corporativos en Querétaro y zona metropolitana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
                data-testid="hero-cta-primary"
              >
                Solicitar Cotización
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={handleCall}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                data-testid="hero-cta-secondary"
              >
                <Phone size={20} />
                Llamar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-slate-900 text-white py-16" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" data-testid="feature-quality">
              <Award size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p className="text-slate-300 text-sm">
                Materiales premium y acabados impecables
              </p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100" data-testid="feature-punctuality">
              <Clock size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Puntualidad</h3>
              <p className="text-slate-300 text-sm">
                Cumplimos con los tiempos acordados
              </p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200" data-testid="feature-experience">
              <Users size={40} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-xl font-semibold mb-2">20+ Años</h3>
              <p className="text-slate-300 text-sm">
                Experiencia en proyectos de todo tipo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              Nuestros Servicios
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Soluciones para cada necesidad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <ServiceCard
              icon={null}
              title="Proyectos Residenciales"
              description="Ventanas, puertas y soluciones de vidrio que transforman tu hogar en un espacio moderno y elegante."
              image="/images/services/Hogar/puertas-ventanas-vidrio.avif"
              featured={true}
              index={0}
            />
            <div className="grid grid-cols-1 gap-6">
              <ServiceCard
                icon={Users}
                title="Proyectos Comerciales"
                description="Fachadas, divisiones y soluciones corporativas que proyectan profesionalismo."
                index={1}
              />
              <ServiceCard
                icon={Award}
                title="Barandales de Vidrio"
                description="Seguridad y estética en escaleras, balcones y terrazas."
                index={2}
              />
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              data-testid="services-link"
            >
              Ver todos los servicios
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-32" data-testid="gallery-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              Galería
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Proyectos que hablan por sí solos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ProjectCard
              image="/images/services/Canceles de baño/Cancel-de-baño-ejemplo-1.avif"
              alt="Cancel de baño moderno"
              category="Residencial"
              index={0}
            />
            <ProjectCard
              image="/images/services/Empresa/puerta-de-vidrio-negocio.avif"
              alt="Puerta de vidrio comercial"
              category="Comercial"
              index={1}
            />
            <ProjectCard
              image="/images/services/Hogar/escaleras-con-vidrio.avif"
              alt="Barandales de vidrio"
              category="Barandales"
              index={2}
            />
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              data-testid="gallery-link"
            >
              Ver Galería Completa
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              Testimonios
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-clean p-8 animate-fade-in-up" data-testid="testimonial-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "Excelente trabajo en la instalación de nuestras ventanas. Muy profesionales y puntuales."
              </p>
              <div className="font-medium text-primary">María González</div>
              <div className="text-sm text-slate-500">Cliente Residencial</div>
            </div>

            <div className="card-clean p-8 animate-fade-in-up animation-delay-100" data-testid="testimonial-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "La fachada de nuestra oficina quedó espectacular. Altamente recomendados."
              </p>
              <div className="font-medium text-primary">Carlos Ramírez</div>
              <div className="text-sm text-slate-500">Proyecto Comercial</div>
            </div>

            <div className="card-clean p-8 animate-fade-in-up animation-delay-200" data-testid="testimonial-3">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                "Calidad excepcional y atención personalizada. Superaron nuestras expectativas."
              </p>
              <div className="font-medium text-primary">Ana Martínez</div>
              <div className="text-sm text-slate-500">Remodelación Hogar</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            ¿Listo para transformar tu espacio?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Agenda una consulta gratuita y recibe una cotización personalizada para tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-sm font-medium hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
              data-testid="cta-contact"
            >
              <Mail size={20} />
              Contactar
            </Link>
            <button
              onClick={handleCall}
              className="bg-secondary text-primary px-8 py-4 rounded-sm font-medium hover:bg-sky-500 transition-colors inline-flex items-center justify-center gap-2"
              data-testid="cta-call"
            >
              <Phone size={20} />
              Llamar Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
