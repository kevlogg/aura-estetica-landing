import React from 'react';
import { Sparkles, Calendar, CheckCircle2, Clock, CreditCard, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function ServiceCategoryBlock({ category, onSelectTreatment }) {
  return (
    <section id={category.id} className="py-16 border-t border-terracotta/15 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{category.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
              {category.title}
            </h2>
            <p className="text-base sm:text-lg text-terracotta font-medium mt-1">
              {category.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-charcoal-muted bg-white/80 p-3 rounded-2xl border border-terracotta/15 shadow-xs">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>Sesión: {category.duration}</span>
            </div>
            <span className="text-terracotta/40">|</span>
            <div className="flex items-center gap-1 font-semibold text-charcoal">
              <CreditCard className="w-4 h-4 text-terracotta" />
              <span>{category.installments}</span>
            </div>
          </div>
        </div>

        {/* Grid Layout: Visual Showcase + Step by step process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Interactive Before & After Slider + Image */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <BeforeAfterSlider
              beforeImg={category.beforeImage}
              afterImg={category.afterImage}
              title={category.title}
            />

            {/* Quick Benefits list */}
            <div className="glass-card p-5 rounded-2xl border border-terracotta/20">
              <h4 className="font-serif text-lg font-bold text-charcoal mb-3">
                Beneficios Principales:
              </h4>
              <ul className="space-y-2.5">
                {category.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-muted">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Steps & Treatment Selection */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full gap-6">
            
            {/* Tagline */}
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              {category.tagline} {category.description}
            </p>

            {/* Step-by-step process 1-2-3 */}
            <div>
              <h4 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                <span>¿Cómo es la experiencia paso a paso?</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {category.steps.map((step, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-terracotta/15 shadow-xs relative">
                    <span className="text-2xl font-bold font-serif text-terracotta/30 absolute top-3 right-3">
                      {step.number}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-charcoal pr-6 mb-1">
                      {step.title}
                    </h5>
                    <p className="text-[11px] text-charcoal-muted leading-snug">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specific Treatment Sub-options */}
            <div className="bg-nude-200/60 p-5 rounded-2xl border border-terracotta/20">
              <h4 className="font-serif text-lg font-bold text-charcoal mb-3">
                Opciones disponibles en esta categoría:
              </h4>

              <div className="space-y-2.5 mb-6">
                {category.treatments.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => onSelectTreatment(category.id, t.name)}
                    className="bg-white hover:bg-terracotta/5 border border-terracotta/20 hover:border-terracotta p-3 rounded-xl flex items-center justify-between transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-terracotta group-hover:scale-125 transition-transform" />
                      <span className="text-xs sm:text-sm font-semibold text-charcoal group-hover:text-terracotta-dark">
                        {t.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-terracotta-dark">
                        {t.price}
                      </span>
                      <button className="text-[11px] bg-terracotta/10 text-terracotta-dark font-bold px-2.5 py-1 rounded-md group-hover:bg-terracotta group-hover:text-white transition-colors">
                        Seleccionar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Primary Direct Booking CTA */}
              <button
                onClick={() => onSelectTreatment(category.id, category.treatments[0].name)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-terracotta to-terracotta-dark text-white py-3.5 rounded-xl font-bold text-sm shadow-luxury hover:shadow-glow hover:scale-[1.01] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar este tratamiento online</span>
                <ChevronRight className="w-4 h-4 opacity-80" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
