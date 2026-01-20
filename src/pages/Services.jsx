import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building2, Boxes, Shield, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const handleCall = () => {
    window.location.href = 'tel:+524423388425';
  };

  const services = [
    {
      icon: Home,
      title: 'Ventanas Residenciales',
      description: 'Ventanas de aluminio y vidrio con diseños modernos, eficiencia energética y acabados personalizados para tu hogar.',
      featured: true,
      image: '/images/services/Hogar/puertas-ventanas-vidrio.avif',
    },
    {
      icon: Building2,
      title: 'Puertas de Vidrio',
      description: 'Puertas corredizas, batientes y automáticas con vidrio templado y herrajes de primera calidad.',
      featured: false,
    },
    {
      icon: Building2,
      title: 'Fachadas Comerciales',
      description: 'Sistemas de fachadas para edificios comerciales y corporativos con tecnología de punta.',
      featured: true,
      image: '/images/services/Empresa/puerta-de-vidrio-negocio.avif',
    },
    {
      icon: Shield,
      title: 'Barandales',
      description: 'Barandales de vidrio templado para escaleras, balcones y terrazas con máxima seguridad.',
      featured: false,
    },
    {
      icon: Boxes,
      title: 'Divisiones de Oficina',
      description: 'Sistemas de división para espacios corporativos con vidrio y aluminio, funcionales y estéticos.',
      featured: false,
    },
    {
      icon: Home,
      title: 'Cancelería de Baño',
      description: 'Canceles para baño con vidrio templado, diseños personalizados y acabados premium.',
      featured: false,
    },
    {
      icon: Building2,
      title: 'Domos y Tragaluces',
      description: 'Soluciones de iluminación natural con domos de policarbonato y vidrio.',
      featured: false,
    },
    {
      icon: Shield,
      title: 'Vidrio de Seguridad',
      description: 'Vidrio templado, laminado y de control solar para máxima protección y confort.',
      featured: false,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Analizamos tus necesidades y visitamos el espacio para tomar medidas precisas.',
    },
    {
      number: '02',
      title: 'Diseño y Propuesta',
      description: 'Creamos un diseño personalizado con renders y especificaciones técnicas.',
    },
    {
      number: '03',
      title: 'Cotización',
      description: 'Presentamos una cotización detallada y transparente sin costos ocultos.',
    },
    {
      number: '04',
      title: 'Instalación',
      description: 'Ejecutamos el proyecto con personal especializado y entrega puntual.',
    },
  ];

  const materials = [
    'Aluminio anodizado y lacado',
    'Vidrio templado de 6mm a 12mm',
    'Vidrio laminado de seguridad',
    'Vidrio de control solar',
    'Herrajes y accesorios importados',
    'Perfiles europeos de alta resistencia',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6 animate-fade-in">
              Nuestros Servicios
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Soluciones completas en aluminio y vidrio
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animation-delay-200">
              Desde proyectos residenciales hasta grandes obras comerciales, ofrecemos servicios integrales con la más alta calidad y profesionalismo.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                featured={service.featured}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              Nuestro Proceso
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Cómo trabajamos
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Un proceso transparente y profesional en cada etapa del proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center animate-fade-in-up animation-delay-${index * 100}`}
                data-testid={`process-step-${index}`}
              >
                <div className="text-7xl font-bold text-slate-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white" data-testid="materials-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6">
                Materiales Premium
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Solo trabajamos con lo mejor
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Seleccionamos cuidadosamente cada material para garantizar durabilidad, seguridad y un acabado impecable en todos nuestros proyectos.
              </p>

              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 animate-fade-in-up animation-delay-${index * 100}`}
                  >
                    <CheckCircle size={24} className="text-secondary flex-shrink-0" />
                    <span className="text-slate-200">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/services/Canceles de baño/Cancel-de-baño-ejemplo-1.avif"
                alt="Material premium 1"
                className="w-full h-64 object-cover rounded-sm"
              />
              <img
                src="/images/services/Hogar/escaleras-con-vidrio.avif"
                alt="Material premium 2"
                className="w-full h-64 object-cover rounded-sm mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-20 md:py-32" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-clean p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              ¿Necesitas asesoría personalizada?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos transformar tu espacio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
                data-testid="services-contact-link"
              >
                Solicitar Cotización
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={handleCall}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                data-testid="services-call-button"
              >
                <Phone size={20} />
                Llamar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
