import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, Calendar, Menu, X, MessageCircle, Clock } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Faciales', path: '/faciales' },
    { name: 'Depilación Láser', path: '/depilacion' },
    { name: 'Corporales', path: '/corporales' },
    { name: 'Peeling', path: '/peeling' },
    { name: 'Cejas & Pestañas', path: '/cejas' },
    { name: 'Masajes Spa', path: '/masajes' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Promo Bar Meta Ads */}
      <div className="bg-gradient-to-r from-terracotta via-dustyrose to-terracotta text-white text-xs md:text-sm py-2 px-4 text-center font-medium shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 animate-pulse" />
        <span><strong>PROMO META ADS:</strong> 15% OFF en tu 1ª sesión + Diagnóstico Digital GRATIS reservando hoy online</span>
        <Clock className="w-3.5 h-3.5 hidden sm:inline-block ml-1 opacity-90" />
      </div>

      {/* Main Nav */}
      <nav className="glass-nav px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo -> Links to Home '/' */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-dustyrose flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-charcoal leading-none">AURA</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-terracotta font-medium mt-0.5">Estética Advanced</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              className="text-xs xl:text-sm font-medium text-charcoal/80 hover:text-terracotta transition-colors py-1"
            >
              Inicio
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs xl:text-sm font-medium text-charcoal/80 hover:text-terracotta transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-terracotta hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5491199887766?text=Hola%20AURA!%20Quisiera%20hacer%20una%20consulta%20antes%20de%20agendar."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-charcoal hover:text-terracotta transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Consultar</span>
            </a>

            <button
              onClick={() => {
                navigate('/faciales');
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white px-5 py-2.5 rounded-full text-xs xl:text-sm font-bold shadow-luxury hover:shadow-glow hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Turno Online</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-terracotta/10 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-terracotta/15 flex flex-col gap-2 pb-2 animate-fadeIn">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-charcoal hover:text-terracotta px-2 py-1.5 rounded-md hover:bg-nude-200/50 transition-colors"
            >
              Inicio
            </Link>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-charcoal hover:text-terracotta px-2 py-1.5 rounded-md hover:bg-nude-200/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/faciales');
                  window.scrollTo(0, 0);
                }}
                className="w-full flex items-center justify-center gap-2 bg-terracotta text-white py-3 rounded-xl text-sm font-bold shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Turno Online</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
