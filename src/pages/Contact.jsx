import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleCall = () => {
    window.location.href = 'tel:+524423388425';
  };

  const faqs = [
    {
      question: '¿Cuánto tiempo toma completar un proyecto?',
      answer:
        'El tiempo de ejecución varía según la complejidad del proyecto. Proyectos residenciales típicos toman de 1 a 2 semanas, mientras que proyectos comerciales pueden tomar de 3 a 6 semanas. Durante la consulta inicial, te proporcionaremos un cronograma específico.',
    },
    {
      question: '¿Ofrecen garantía en sus trabajos?',
      answer:
        'Sí, todos nuestros trabajos incluyen garantía. Los materiales tienen garantía del fabricante y nuestra mano de obra está garantizada por 1 año. Esto cubre cualquier defecto de instalación o fabricación.',
    },
    {
      question: '¿Trabajan fuera de Querétaro?',
      answer:
        'Principalmente atendemos Querétaro y zona metropolitana, pero también realizamos proyectos en municipios cercanos. Contáctanos para verificar si tu ubicación está dentro de nuestra área de servicio.',
    },
    {
      question: '¿Cómo funciona el proceso de cotización?',
      answer:
        'El proceso es simple: 1) Agenda una consulta gratuita, 2) Visitamos tu espacio y tomamos medidas, 3) Te presentamos una propuesta con diseño y cotización detallada, 4) Una vez aprobada, iniciamos la fabricación e instalación.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-6 animate-fade-in">
              Contacto
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              Hablemos de tu proyecto
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animation-delay-200">
              Estamos listos para escucharte y ayudarte a transformar tu espacio. Contáctanos hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-32" data-testid="contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Info Cards */}
            <div className="lg:col-span-4 space-y-6">
              {/* Phone Card (Featured) */}
              <div className="bg-slate-900 text-white p-8 rounded-sm animate-fade-in-up" data-testid="contact-phone-card">
                <Phone size={32} className="text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <a
                  href="tel:+524423388425"
                  className="text-2xl font-bold hover:text-secondary transition-colors"
                  data-testid="contact-phone-link"
                >
                  +52 442 338 8425
                </a>
                <p className="text-slate-300 text-sm mt-3">
                  Llámanos de Lun - Vie, 9:00 - 18:00
                </p>
              </div>

              {/* Email Card */}
              <div className="card-clean p-8 animate-fade-in-up animation-delay-100" data-testid="contact-email-card">
                <Mail size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:contacto@savqro.com"
                  className="text-lg text-primary hover:text-slate-700 transition-colors"
                  data-testid="contact-email-link"
                >
                  contacto@savqro.com
                </a>
                <p className="text-slate-600 text-sm mt-3">
                  Respuesta en menos de 24 horas
                </p>
              </div>

              {/* Location Card */}
              <div className="card-clean p-8 animate-fade-in-up animation-delay-200" data-testid="contact-location-card">
                <MapPin size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
                <p className="text-slate-600">
                  Querétaro, Qro.<br />
                  México
                </p>
                <p className="text-slate-600 text-sm mt-3">
                  Servicio en Querétaro y zona metropolitana
                </p>
              </div>

              {/* Hours Card */}
              <div className="card-clean p-8 animate-fade-in-up animation-delay-300" data-testid="contact-hours-card">
                <Clock size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Horario</h3>
                <div className="text-slate-600 space-y-1">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sábado: 9:00 - 14:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-slate-50 p-8 rounded-sm animate-fade-in-up animation-delay-400" data-testid="contact-quick-cta">
                <h3 className="text-xl font-semibold mb-3">¿Prefieres llamar?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Habla directamente con uno de nuestros especialistas
                </p>
                <button
                  onClick={handleCall}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  data-testid="quick-call-button"
                >
                  <Phone size={18} />
                  Llamar Ahora
                </button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-8">
              <div className="card-clean p-10 animate-fade-in-up animation-delay-500">
                <h2 className="text-3xl font-semibold mb-2">Envíanos un mensaje</h2>
                <p className="text-slate-600 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-20 md:pb-32" data-testid="contact-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119074.14566272113!2d-100.48977555820312!3d20.588818600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b8a1f2b0001%3A0x1c2d6b0e6b0e6b0e!2sQuer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses!2smx!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de SAVQRO en Querétaro"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-slate-50" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-slate-400 mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card-clean overflow-hidden animate-fade-in-up animation-delay-${index * 100}`}
                data-testid={`faq-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={24} className="text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-primary flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6" data-testid={`faq-answer-${index}`}>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
