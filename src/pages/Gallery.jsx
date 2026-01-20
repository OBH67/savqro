import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, Mail } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = ['Todos', 'Residencial', 'Comercial', 'Barandales', 'Detalles', 'Proceso'];

  const projects = [
    {
      image: '/images/services/Canceles de baño/Cancel-de-baño-ejemplo-1.avif',
      alt: 'Cancel de baño moderno',
      category: 'Residencial',
    },
    {
      image: '/images/services/Canceles de baño/cancel-de-baño-ejemplo-2.avif',
      alt: 'Cancel de baño elegante',
      category: 'Residencial',
    },
    {
      image: '/images/services/Canceles de baño/Cancel-de-baño-ejemplo-3avif.avif',
      alt: 'Cancel de baño premium',
      category: 'Residencial',
    },
    {
      image: '/images/services/Empresa/puerta-de-vidrio-negocio.avif',
      alt: 'Puerta de vidrio comercial',
      category: 'Comercial',
    },
    {
      image: '/images/services/Empresa/puerta-de-vidrio-negocio-2.avif',
      alt: 'Entrada comercial moderna',
      category: 'Comercial',
    },
    {
      image: '/images/services/Hogar/escaleras-con-vidrio.avif',
      alt: 'Barandal de vidrio en escaleras',
      category: 'Barandales',
    },
    {
      image: '/images/services/Hogar/puertas-corredisas-vidrio.avif',
      alt: 'Puertas corredizas de vidrio',
      category: 'Residencial',
    },
    {
      image: '/images/services/Hogar/puertas-ventanas-vidrio.avif',
      alt: 'Ventanas y puertas de vidrio',
      category: 'Residencial',
    },
    {
      image: '/images/Logo Empresa/Logo Savro JPG.avif',
      alt: 'Detalle de instalación',
      category: 'Detalles',
    },
  ];

  const filteredProjects =
    selectedFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const handleCall = () => {
    window.location.href = 'tel:+524423388425';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32" data-testid="gallery-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6 animate-fade-in">
              Galería de Proyectos
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Nuestro trabajo habla por sí solo
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animation-delay-200">
              Explora una selección de nuestros proyectos más destacados en espacios residenciales, comerciales y corporativos.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12" data-testid="gallery-filters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-sm font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                data-testid={`filter-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 md:pb-32" data-testid="gallery-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                alt={project.alt}
                category={project.category}
                index={index}
                onClick={() => setSelectedImage(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox-modal"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors"
            data-testid="lightbox-close"
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="text-center mt-6">
              <span className="inline-block bg-secondary text-primary px-4 py-2 rounded-sm font-medium">
                {selectedImage.category}
              </span>
              <p className="text-white mt-4 text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" data-testid="stat-projects">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">+500</div>
              <div className="text-slate-600 font-medium">Proyectos Completados</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100" data-testid="stat-experience">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">+20</div>
              <div className="text-slate-600 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200" data-testid="stat-satisfaction">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">100%</div>
              <div className="text-slate-600 font-medium">Satisfacción</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-300" data-testid="stat-support">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white" data-testid="gallery-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            ¿Te inspiraste con nuestros proyectos?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Hagamos realidad tu visión. Contáctanos hoy para una consulta gratuita
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-sm font-medium hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
              data-testid="gallery-contact-link"
            >
              <Mail size={20} />
              Contactar
            </Link>
            <button
              onClick={handleCall}
              className="bg-secondary text-primary px-8 py-4 rounded-sm font-medium hover:bg-sky-500 transition-colors inline-flex items-center justify-center gap-2"
              data-testid="gallery-call-button"
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

export default Gallery;
