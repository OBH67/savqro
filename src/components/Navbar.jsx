import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/', testId: 'nav-home' },
    { name: 'Nosotros', path: '/about', testId: 'nav-about' },
    { name: 'Servicios', path: '/services', testId: 'nav-services' },
    { name: 'Galería', path: '/gallery', testId: 'nav-gallery' },
    { name: 'Contacto', path: '/contact', testId: 'nav-contact' },
  ];

  const handleCall = () => {
    window.location.href = 'tel:+524423388425';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-white/70 backdrop-blur-xl'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
            data-testid="nav-logo"
          >
            <img 
              src="/images/Logo Empresa/Logo Savro JPG.avif" 
              alt="SAVQRO Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-slate-600'
                }`}
                data-testid={link.testId}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleCall}
            className="hidden md:flex items-center gap-2 btn-primary"
            data-testid="nav-cta-button"
          >
            <Phone size={18} />
            Llamar Ahora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
            data-testid="mobile-menu-button"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white border-t border-slate-200 shadow-xl"
          data-testid="mobile-menu"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-slate-600 hover:text-primary'
                }`}
                data-testid={`${link.testId}-mobile`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleCall}
              className="w-full flex items-center justify-center gap-2 btn-primary"
              data-testid="mobile-cta-button"
            >
              <Phone size={18} />
              Llamar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
