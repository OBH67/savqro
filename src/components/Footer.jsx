import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="space-y-6" data-testid="footer-brand">
            <div>
              <h3 className="text-3xl font-bold mb-2" data-testid="footer-logo">
                SAVQRO
              </h3>
              <div className="inline-block bg-secondary text-primary px-3 py-1 rounded-sm text-xs font-semibold">
                +20 años de experiencia
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Soluciones profesionales en aluminio y vidrio para espacios residenciales y comerciales en Querétaro.
            </p>
          </div>

          {/* Links Column */}
          <div data-testid="footer-links">
            <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-home"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-about"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-services"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-gallery"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-contact"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+524423388425"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-phone"
                >
                  +52 442 338 8425
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contacto@savqro.com"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                  data-testid="footer-email"
                >
                  contacto@savqro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm" data-testid="footer-location">
                  Querétaro, México
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm" data-testid="footer-hours">
                  Lun - Vie: 9:00 - 18:00<br />
                  Sáb: 9:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm" data-testid="footer-copyright">
            &copy; {currentYear} SAVQRO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
