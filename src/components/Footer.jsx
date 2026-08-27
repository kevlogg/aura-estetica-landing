import React, { useState } from 'react';
import { Sparkles, MapPin, Clock, Phone, Mail, ShieldCheck, X } from 'lucide-react';

export default function Footer() {
  const [showLegalModal, setShowLegalModal] = useState(false);

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-terracotta/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-terracotta to-dustyrose flex items-center justify-center text-white shadow-glow">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-widest text-white">AURA</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Centro de Estética Advanced & Spa Boutique. Tecnología médica de última generación y protocolos dermocosméticos personalizados.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Location & Map Card */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-terracotta-light">Ubicación & Sede</h4>
            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
              <span>Av. Santa Fe 2840, Piso 3 - Palermo, CABA (A 2 cuadras de Alto Palermo).</span>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 h-28 bg-nude-300/20 group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=500&q=80"
                alt="Mapa ubicación Palermo"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/90 hover:bg-white text-charcoal text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-terracotta" />
                  <span>Ver en Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Hours & Contact */}
          <div className="space-y-3 text-xs text-white/80">
            <h4 className="font-serif text-lg font-bold text-terracotta-light">Horarios de Atención</h4>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-terracotta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Lunes a Sábado:</p>
                <p className="text-white/70">09:00 a 20:00 hs (Con turno previo)</p>
                <p className="text-[11px] text-emerald-400 mt-1 font-medium">✓ Estacionamiento con descuento a 50m</p>
              </div>
            </div>

            <div className="pt-2 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-terracotta" />
                <span>+54 11 9988-7766</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-terracotta" />
                <span>contacto@auraestetica.com</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links & Guarantee */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif text-lg font-bold text-terracotta-light">Compromiso AURA</h4>
            <p className="text-white/70 leading-relaxed">
              Todos nuestros procedimientos son supervisados por médicos matriculados y realizados con equipamiento higienizado bajo estrictas normas de bioseguridad.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setShowLegalModal(true)}
                className="text-terracotta hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Políticas de Privacidad y Cancelación</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} AURA Estética Advanced. Todos los derechos reservados.</p>
          <p className="text-[11px]">Diseño & Desarrollo de Alta Conversión para Meta Ads</p>
        </div>

      </div>

      {/* LEGAL MODAL */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-charcoal rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowLegalModal(false)}
              className="absolute top-4 right-4 text-charcoal-muted hover:text-charcoal p-1 rounded-full bg-nude-200"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Políticas de Privacidad & Agendamiento
            </h3>

            <div className="text-xs text-charcoal-muted space-y-3 leading-relaxed">
              <h5 className="font-bold text-charcoal">1. Reserva y Confirmación de Turnos</h5>
              <p>
                Los turnos solicitados a través del sitio web quedan pre-bloqueados de forma automática y se confirman mediante la interacción con nuestro equipo de recepcionistas en WhatsApp.
              </p>

              <h5 className="font-bold text-charcoal">2. Cancelación y Reprogramación</h5>
              <p>
                Puedes solicitar la reprogramación de tu cita sin costo alguno con un mínimo de 24 horas de antelación.
              </p>

              <h5 className="font-bold text-charcoal">3. Protección de Datos Personales</h5>
              <p>
                Los datos solicitados (nombre, teléfono y correo) son utilizados únicamente para la gestión de turnos y envío de recordatorios de tus sesiones.
              </p>
            </div>

            <button
              onClick={() => setShowLegalModal(false)}
              className="mt-6 w-full bg-terracotta text-white font-bold py-3 rounded-xl text-xs hover:bg-terracotta-dark transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
