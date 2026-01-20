import React, { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would make an API call here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  const services = [
    'Ventanas Residenciales',
    'Puertas de Vidrio',
    'Fachadas Comerciales',
    'Barandales',
    'Divisiones de Oficina',
    'Cancelería de Baño',
    'Domos y Tragaluces',
    'Otro',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-0 py-3 input-underline text-slate-900"
          placeholder="Tu nombre completo"
          data-testid="form-name"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Teléfono <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-0 py-3 input-underline text-slate-900"
          placeholder="+52 442 123 4567"
          data-testid="form-phone"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-0 py-3 input-underline text-slate-900"
          placeholder="tu@email.com"
          data-testid="form-email"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Servicio de Interés
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-0 py-3 input-underline text-slate-900 bg-white cursor-pointer"
          data-testid="form-service"
        >
          <option value="">Selecciona un servicio</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-0 py-3 input-underline text-slate-900 resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
          data-testid="form-message"
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div
          className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-sm"
          data-testid="form-success"
        >
          <CheckCircle size={20} />
          <span className="text-sm">
            ¡Mensaje enviado! Nos pondremos en contacto pronto.
          </span>
        </div>
      )}

      {status === 'error' && (
        <div
          className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-sm"
          data-testid="form-error"
        >
          <AlertCircle size={20} />
          <span className="text-sm">
            Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
          </span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        data-testid="form-submit"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={20} />
            Enviar Mensaje
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
