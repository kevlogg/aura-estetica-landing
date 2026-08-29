import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Star, ShieldCheck, Award, CheckCircle2, Clock, CreditCard } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import SocialProofSection from '../components/SocialProofSection';
import FAQAccordion from '../components/FAQAccordion';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="animate-fadeIn">
      
      {/* HERO SECTION GENERAL */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-terracotta/20 via-dustyrose/20 to-nude-300/30 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Content Left */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <div className="inline-flex items-center gap-2 self-center lg:self-start bg-nude-200/80 border border-terracotta/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-terracotta-dark shadow-sm mb-6">
                <Sparkles className="w-3.5 h-3.5 text-terracotta animate-pulse" />
                <span>Centro de Estética Médica & Spa Boutique</span>
                <span className="bg-terracotta text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">CABA</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.1] mb-6">
                Resalta tu belleza natural con <span className="italic text-terracotta font-normal">ciencia, arte y bienestar</span>
              </h1>

              <p className="text-base sm:text-lg text-charcoal-muted font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Conoce nuestras áreas especializadas. Haz clic en el tratamiento de tu interés para ver información detallada, casos de Antes/Después y agendar tu turno online.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <a
                  href="#nuestros-servicios"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-terracotta via-terracotta-dark to-terracotta text-white px-8 py-4 rounded-full text-base font-bold shadow-glow hover:shadow-luxury hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <span>Explorar Servicios Especializados</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Badges */}
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

            {/* Showcase Image Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5] bg-nude-200">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                    alt="Ambiente AURA Estética Spa"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-terracotta-light">Experiencia Boutique</span>
                    <h3 className="font-serif text-2xl font-bold mt-1">AURA Advanced</h3>
                    <p className="text-xs text-white/80 mt-1">Atención personalizada y diagnóstico cosmiátrico sin cargo.</p>
                  </div>
                </div>

                <div className="absolute -top-4 left-0 sm:-left-6 glass-card p-3 sm:p-4 rounded-2xl shadow-luxury flex items-center gap-2 sm:gap-3 border border-terracotta/20">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-base flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">Reserva Online Directa</p>
                    <p className="text-[11px] text-charcoal-muted">Desde la URL de cada tratamiento</p>
                  </div>
                </div>

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
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS ESPECIALIZADOS (CARDS CON REDIRECCIÓN A SU URL ÚNICA) */}
      <section id="nuestros-servicios" className="py-16 bg-nude-200/40 border-t border-terracotta/15 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Nuestras 6 Áreas de Especialización</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
              Explora y Elige tu Tratamiento
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto mt-2">
              Haz clic en cualquier categoría para ir a su **URL dedicada**, ver fotos reales de Antes/Después y realizar tu reserva online.
            </p>
          </div>

          {/* Grid de 6 Tarjetas de Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-3xl border border-terracotta/20 shadow-luxury overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Service Image Frame */}
                  <div className="relative h-52 overflow-hidden bg-nude-200">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-terracotta text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                      {cat.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-terracotta transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-terracotta-dark mt-1">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs text-charcoal-muted mt-3 line-clamp-2 leading-relaxed">
                      {cat.tagline}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {cat.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer with Price & Redirect Button */}
                <div className="px-6 pb-6 pt-2 border-t border-nude-200 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-charcoal-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-terracotta" /> {cat.duration}
                    </span>
                    <span className="font-bold text-terracotta-dark text-sm">
                      Desde {cat.price}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/${cat.id}`);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-terracotta to-terracotta-dark text-white py-3 rounded-xl text-xs font-bold shadow-md hover:shadow-glow transition-all cursor-pointer"
                  >
                    <span>Ver Detalles y Agendar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PRUEBA SOCIAL & TESTIMONIOS */}
      <SocialProofSection />

      {/* FAQ */}
      <FAQAccordion />

    </div>
  );
}
