import React from 'react';
import { Star, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/servicesData';

export default function SocialProofSection() {
  return (
    <section id="testimonios" className="py-16 bg-nude-200/50 border-t border-terracotta/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Heart className="w-3.5 h-3.5 fill-terracotta text-terracotta" />
            <span>Prueba Social & Opiniones Verificadas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Lo que dicen nuestras pacientes
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto mt-2">
            Más de 500 experiencias de transformación y renovación cutánea con satisfacción garantizada.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card p-6 rounded-3xl border border-terracotta/20 shadow-luxury flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-terracotta/10 text-terracotta-dark font-bold px-2 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-terracotta/15">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-terracotta"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h5 className="font-bold text-xs text-charcoal">{t.name}</h5>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[11px] text-terracotta font-medium">{t.treatment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Grid */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-terracotta/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-charcoal">Protocolos Bioseguridad</h4>
              <p className="text-[11px] text-charcoal-muted">Material descartable y esterilización UV.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-charcoal">Aparatología Aprobada</h4>
              <p className="text-[11px] text-charcoal-muted">Equipamiento original ANMAT & FDA.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-charcoal">Diagnóstico Gratuito</h4>
              <p className="text-[11px] text-charcoal-muted">Evaluación cosmiátrica en tu 1ª sesión.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-terracotta/15 flex items-center justify-center text-terracotta">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-charcoal">Facilidades de Pago</h4>
              <p className="text-[11px] text-charcoal-muted">Hasta 3 y 6 Cuotas Sin Interés.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
