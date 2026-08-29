import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, CheckCircle2, Clock, CreditCard, ChevronRight, Share2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import BookingWidget from '../components/BookingWidget';
import FAQAccordion from '../components/FAQAccordion';

export default function ServicePage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // Find matching category or fallback
  const category = SERVICES_DATA.find((s) => s.id === categoryId) || SERVICES_DATA[0];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div className="animate-fadeIn py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb Back Button */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-terracotta hover:text-terracotta-dark bg-white/80 hover:bg-white px-4 py-2 rounded-full border border-terracotta/20 shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <span className="text-xs text-charcoal-muted font-mono bg-nude-200 px-3 py-1 rounded-full border border-terracotta/15">
            URL Única: /{category.id}
          </span>
        </div>

        {/* Hero Header for this specific Service */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-terracotta/25 mb-12 shadow-luxury">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{category.badge}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-2">
            {category.title}
          </h1>

          <p className="text-base sm:text-xl text-terracotta font-semibold mb-4">
            {category.subtitle}
          </p>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-3xl leading-relaxed mb-6">
            {category.tagline} {category.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-muted pt-4 border-t border-terracotta/15">
            <div className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-terracotta" />
              <span>Duración estimada: <strong>{category.duration}</strong></span>
            </div>
            <span className="text-terracotta/40 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 font-medium">
              <CreditCard className="w-4 h-4 text-terracotta" />
              <span>Financiación: <strong>{category.installments}</strong></span>
            </div>
          </div>
        </div>

        {/* Grid: Before/After Slider + Step by Step Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Before/After Slider */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <BeforeAfterSlider
              beforeImg={category.beforeImage}
              afterImg={category.afterImage}
              title={category.title}
            />

            {/* Benefits box */}
            <div className="glass-card p-6 rounded-3xl border border-terracotta/20">
              <h4 className="font-serif text-lg font-bold text-charcoal mb-3">
                Beneficios Directos:
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

          {/* Right Column: Step by step 1-2-3 & Options list */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Step process 1-2-3 */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                ¿Cómo es la experiencia paso a paso?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {category.steps.map((step, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-terracotta/20 shadow-xs relative">
                    <span className="text-3xl font-bold font-serif text-terracotta/25 absolute top-3 right-3">
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

            {/* Treatment suboptions */}
            <div className="bg-nude-200/70 p-6 rounded-3xl border border-terracotta/20">
              <h4 className="font-serif text-xl font-bold text-charcoal mb-4">
                Opciones disponibles en esta categoría:
              </h4>

              <div className="space-y-3 mb-6">
                {category.treatments.map((t) => (
                  <div
                    key={t.id}
                    className="bg-white border border-terracotta/20 p-4 rounded-2xl flex items-center justify-between shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-terracotta" />
                      <span className="text-xs sm:text-sm font-semibold text-charcoal">
                        {t.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-terracotta-dark">
                      {t.price}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#agendar-servicio"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-terracotta to-terracotta-dark text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-luxury hover:shadow-glow transition-all"
              >
                <span>Ir al Formulario de Agendamiento Online</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* DEDICATED BOOKING WIDGET FOR THIS SERVICE */}
        <div id="agendar-servicio" className="scroll-mt-24 mb-16">
          <BookingWidget preselectedCategory={category.id} />
        </div>

        {/* CATEGORY SWITCHER BAR AT BOTTOM */}
        <div className="pt-8 border-t border-terracotta/15 text-center">
          <p className="text-xs font-bold text-terracotta uppercase tracking-widest mb-4">
            Explorar otras categorías especializadas:
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {SERVICES_DATA.filter((s) => s.id !== category.id).map((s) => (
              <button
                key={s.id}
                onClick={() => navigate(`/${s.id}`)}
                className="bg-white hover:bg-terracotta hover:text-white text-charcoal border border-terracotta/20 px-4 py-2 rounded-full text-xs font-semibold shadow-xs transition-all cursor-pointer"
              >
                {s.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <FAQAccordion />
        </div>

      </div>
    </div>
  );
}
