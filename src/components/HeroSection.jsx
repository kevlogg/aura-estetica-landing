import React from 'react';
import { Sparkles, Calendar, Star, ShieldCheck, Award, ArrowDown, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function HeroSection({ onBookClick, onCategorySelect }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Decorative background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-terracotta/20 via-dustyrose/20 to-nude-300/30 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Left Column */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
            
            {/* Tag Badges */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-nude-200/80 border border-terracotta/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-terracotta-dark shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-terracotta animate-pulse" />
              <span>Centro de Estética Médica & Spa Boutique</span>
              <span className="bg-terracotta text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">CABA</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.1] mb-6">
              Resalta tu belleza natural con <span className="italic text-terracotta font-normal">ciencia, arte y bienestar</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-charcoal-muted font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Tratamientos estéticos avanzados de última generación, diseñados a medida para renovar tu piel, modelar tu figura y potenciar tu confianza desde la primera sesión.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-terracotta via-terracotta-dark to-terracotta text-white px-8 py-4 rounded-full text-base font-bold shadow-glow hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Agendar Turno Online</span>
                <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#categorias"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-charcoal border border-terracotta/20 px-6 py-4 rounded-full text-sm font-semibold shadow-sm hover:border-terracotta transition-all"
              >
                <span>Explorar Tratamientos</span>
                <ArrowDown className="w-4 h-4 text-terracotta" />
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-terracotta/15 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-charcoal ml-1">4.9/5</span>
                </div>
                <span className="text-xs text-charcoal-muted font-medium">+500 Pacientes Felices</span>
              </div>

              <div className="flex flex-col items-center lg:items-start border-x border-terracotta/15 px-2">
                <div className="flex items-center gap-1 text-terracotta mb-1 font-bold text-xs sm:text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Médicos Certificados</span>
                </div>
                <span className="text-xs text-charcoal-muted font-medium">Cosmiatras UBA</span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-terracotta mb-1 font-bold text-xs sm:text-sm">
                  <Award className="w-4 h-4" />
                  <span>ANMAT / FDA</span>
                </div>
                <span className="text-xs text-charcoal-muted font-medium">Aparatología de Punta</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none overflow-visible">
              
              {/* Main Luxury Spa Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5] bg-nude-200">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                  alt="Tratamiento facial luxury en AURA Estética"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-terracotta-light">Experiencia Boutique</span>
                  <h3 className="font-serif text-2xl font-bold mt-1">Glow Facial & Dermapen</h3>
                  <p className="text-xs text-white/80 mt-1">Piel radiante e hidratada desde tu primera sesión.</p>
                </div>
              </div>

              {/* Floating Highlight Card 1 — adjusted for mobile */}
              <div className="absolute -top-4 left-0 sm:-left-6 glass-card p-3 sm:p-4 rounded-2xl shadow-luxury flex items-center gap-2 sm:gap-3 animate-float border border-terracotta/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-base sm:text-lg flex-shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">Reserva Online 24/7</p>
                  <p className="text-[11px] text-charcoal-muted">Sin esperas por WhatsApp</p>
                </div>
              </div>

              {/* Floating Highlight Card 2 — adjusted for mobile */}
              <div className="absolute -bottom-4 right-0 sm:-right-6 glass-card p-3 sm:p-4 rounded-2xl shadow-luxury flex items-center gap-2 sm:gap-3 border border-terracotta/20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold flex-shrink-0">
                  💳
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal">3 y 6 Cuotas Sin Interés</p>
                  <p className="text-[11px] text-terracotta-dark font-medium">Congelá tu precio online</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Filter Bar / Deep Links Header */}
        <div id="categorias" className="mt-16 pt-8 border-t border-terracotta/15">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-terracotta mb-4">
            Selecciona tu tratamiento o categoría de interés
          </p>
          
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar px-1">
            {SERVICES_DATA.map((cat) => {
              const CATEGORY_LABELS = {
                faciales: { icon: '✨', label: 'Faciales' },
                depilacion: { icon: '🔥', label: 'Depilación' },
                corporales: { icon: '⚡', label: 'Corporales' },
                peeling: { icon: '🌿', label: 'Peeling' },
                cejas: { icon: '💖', label: 'Cejas & Pestañas' },
                masajes: { icon: '💆', label: 'Masajes Spa' },
              };
              const catLabel = CATEGORY_LABELS[cat.id] || { icon: '✦', label: cat.title.split(' ')[0] };
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onCategorySelect(cat.id);
                    const el = document.getElementById(cat.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-shrink-0 flex items-center gap-1.5 bg-white hover:bg-terracotta hover:text-white text-charcoal border border-terracotta/20 px-3.5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  <span>{catLabel.icon}</span>
                  <span>{catLabel.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
