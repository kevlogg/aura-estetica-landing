import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, CheckCircle, Sparkles, ChevronRight, ArrowLeft, ShieldCheck, MessageCircle, QrCode, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, SPECIALISTS } from '../data/servicesData';

export default function BookingWidget({ preselectedCategory, preselectedTreatment }) {
  // Step State: 1 = Service, 2 = Date/Time, 3 = Specialist, 4 = Contact Form
  const [step, setStep] = useState(1);

  // Selected values
  const [selectedCatId, setSelectedCatId] = useState(preselectedCategory || 'faciales');
  const [selectedTreatmentName, setSelectedTreatmentName] = useState(preselectedTreatment || '');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSpecialistId, setSelectedSpecialistId] = useState('any');
  
  // Contact Form
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('local'); // 'local', 'cuotas', 'mercadopago'
  const [specialNotes, setSpecialNotes] = useState('');

  // Ticket Modal State
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update selection if props change
  useEffect(() => {
    if (preselectedCategory) setSelectedCatId(preselectedCategory);
    if (preselectedTreatment) setSelectedTreatmentName(preselectedTreatment);
  }, [preselectedCategory, preselectedTreatment]);

  // Current category data
  const currentCategory = SERVICES_DATA.find((c) => c.id === selectedCatId) || SERVICES_DATA[0];

  // Set default treatment if empty
  useEffect(() => {
    if (!selectedTreatmentName && currentCategory.treatments.length > 0) {
      setSelectedTreatmentName(currentCategory.treatments[0].name);
    }
  }, [selectedCatId, currentCategory]);

  // Generate next 14 available dates
  const availableDates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return {
      fullDateStr: `${dayNames[d.getDay()]} ${d.getDate()} de ${monthNames[d.getMonth()]}`,
      dayName: dayNames[d.getDay()],
      dayNum: d.getDate(),
      monthName: monthNames[d.getMonth()],
      isSunday: d.getDay() === 0,
    };
  }).filter(d => !d.isSunday); // Filter out Sundays

  // Available Time Slots
  const morningTimes = ['09:00', '10:30', '11:45'];
  const afternoonTimes = ['14:30', '16:00', '17:30', '19:00'];

  // Handle final submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Por favor completa tu nombre y número de teléfono.');
      return;
    }

    // Generate random reference ID
    const randomRef = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);

    // Trigger confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log(e);
    }

    // Format WhatsApp message
    const specialistName = selectedSpecialistId === 'any'
      ? 'Cualquier profesional disponible'
      : (SPECIALISTS.find(s => s.id === selectedSpecialistId)?.name || 'Especialista');

    const message = `✨ *NUEVA RESERVA ONLINE - AURA ESTÉTICA* ✨\n\n` +
      `📌 *Ref:* ${randomRef}\n` +
      `💆‍♀️ *Tratamiento:* ${selectedTreatmentName}\n` +
      `📅 *Fecha:* ${selectedDate || availableDates[0].fullDateStr}\n` +
      `⏰ *Horario:* ${selectedTime || '16:00 hs'}\n` +
      `👩‍⚕️ *Especialista:* ${specialistName}\n\n` +
      `👤 *Cliente:* ${clientName}\n` +
      `📱 *WhatsApp:* ${clientPhone}\n` +
      `💳 *Pago elegido:* ${paymentMethod === 'cuotas' ? '3/6 Cuotas Sin Interés' : paymentMethod === 'mercadopago' ? 'Mercado Pago / Seña Online' : 'Abonar en el Centro'}\n` +
      (specialNotes ? `📝 *Notas:* ${specialNotes}\n` : '') +
      `\nQuedo a la espera de la confirmación final de mi turno. ¡Muchas gracias!`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/5491199887766?text=${encodedMsg}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    // Show Digital Ticket Modal
    setShowTicketModal(true);
  };

  return (
    <section id="agendar" className="py-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta-dark text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Autoagendamiento Centralizado 24/7</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">
            Reserva tu Turno en 4 Simples Pasos
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto mt-2">
            Elige tu sesión, fecha y horario. Confirmación instantánea y congelamiento de precio promocional sin esperas.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-terracotta/25 relative overflow-hidden">
          
          {/* Step Indicator Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-terracotta/15">
            {[
              { num: 1, label: 'Tratamiento' },
              { num: 2, label: 'Fecha y Hora' },
              { num: 3, label: 'Especialista' },
              { num: 4, label: 'Confirmación' },
            ].map((s) => (
              <div
                key={s.num}
                onClick={() => {
                  if (s.num < step) setStep(s.num);
                }}
                className={`flex items-center gap-2 cursor-pointer transition-all ${
                  step === s.num
                    ? 'text-terracotta-dark font-bold scale-105'
                    : step > s.num
                    ? 'text-emerald-700 font-semibold'
                    : 'text-charcoal-muted/50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step === s.num
                      ? 'bg-terracotta text-white shadow-glow'
                      : step > s.num
                      ? 'bg-emerald-600 text-white'
                      : 'bg-nude-200 text-charcoal-muted'
                  }`}
                >
                  {step > s.num ? '✓' : s.num}
                </div>
                <span className="hidden sm:inline text-xs">{s.label}</span>
              </div>
            ))}
          </div>

          {/* STEP 1: SERVICE & TREATMENT SELECTION */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                <span>1. Selecciona la Categoría y Tratamiento:</span>
              </h3>

              {/* Category Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {SERVICES_DATA.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setSelectedCatId(cat.id);
                      setSelectedTreatmentName(cat.treatments[0].name);
                    }}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      selectedCatId === cat.id
                        ? 'bg-terracotta text-white border-terracotta shadow-md'
                        : 'bg-white text-charcoal border-terracotta/20 hover:border-terracotta'
                    }`}
                  >
                    <div className="font-bold">{cat.title.split(' ')[0]}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{cat.price}</div>
                  </button>
                ))}
              </div>

              {/* Specific Treatments List */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                  Selecciona la opción específica de {currentCategory.title}:
                </label>
                <div className="space-y-2">
                  {currentCategory.treatments.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTreatmentName(t.name)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        selectedTreatmentName === t.name
                          ? 'bg-nude-200 border-terracotta shadow-sm font-bold text-terracotta-dark'
                          : 'bg-white border-terracotta/20 hover:border-terracotta text-charcoal'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="treatmentRadio"
                          checked={selectedTreatmentName === t.name}
                          onChange={() => setSelectedTreatmentName(t.name)}
                          className="accent-terracotta w-4 h-4 cursor-pointer"
                        />
                        <span className="text-xs sm:text-sm">{t.name}</span>
                      </div>
                      <span className="text-xs font-bold text-terracotta-dark">{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-full text-xs font-bold shadow-md cursor-pointer transition-all"
                >
                  <span>Siguiente: Elegir Fecha y Hora</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME SELECTION */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-terracotta" />
                  <span>2. Selecciona Fecha y Horario Disponible:</span>
                </h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-terracotta flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Volver
                </button>
              </div>

              {/* Mini Interactive Calendar Carousel */}
              <div>
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                  Días disponibles este mes:
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1">
                  {availableDates.map((d, idx) => {
                    const isSelected = selectedDate === d.fullDateStr || (!selectedDate && idx === 0);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDate(d.fullDateStr)}
                        className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-b from-terracotta to-terracotta-dark text-white border-terracotta shadow-glow scale-105'
                            : 'bg-white text-charcoal border-terracotta/20 hover:border-terracotta'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">{d.dayName}</span>
                        <span className="text-xl font-bold font-serif leading-none my-1">{d.dayNum}</span>
                        <span className="text-[9px] opacity-75">{d.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Grid */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-charcoal uppercase tracking-wider">
                  Horarios disponibles para <span className="text-terracotta-dark">{selectedDate || availableDates[0].fullDateStr}</span>:
                </label>

                {/* Morning Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-charcoal-muted flex items-center gap-1 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" /> Turnos Mañana:
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {morningTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          (selectedTime === t || (!selectedTime && t === '10:30'))
                            ? 'bg-terracotta text-white border-terracotta shadow-xs'
                            : 'bg-white text-charcoal border-terracotta/20 hover:border-terracotta'
                        }`}
                      >
                        {t} hs
                      </button>
                    ))}
                  </div>
                </div>

                {/* Afternoon Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-charcoal-muted flex items-center gap-1 mb-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-600" /> Turnos Tarde:
                  </span>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {afternoonTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          selectedTime === t
                            ? 'bg-terracotta text-white border-terracotta shadow-xs'
                            : 'bg-white text-charcoal border-terracotta/20 hover:border-terracotta'
                        }`}
                      >
                        {t} hs
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-charcoal-muted hover:text-charcoal"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!selectedDate) setSelectedDate(availableDates[0].fullDateStr);
                    if (!selectedTime) setSelectedTime('10:30');
                    setStep(3);
                  }}
                  className="flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-full text-xs font-bold shadow-md cursor-pointer transition-all"
                >
                  <span>Siguiente: Especialista</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SPECIALIST SELECTION */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <User className="w-5 h-5 text-terracotta" />
                  <span>3. Selecciona tu Profesional Preferido:</span>
                </h3>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-terracotta flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Volver
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Option Any */}
                <div
                  onClick={() => setSelectedSpecialistId('any')}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${
                    selectedSpecialistId === 'any'
                      ? 'bg-nude-200 border-terracotta shadow-sm font-bold'
                      : 'bg-white border-terracotta/20 hover:border-terracotta'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-terracotta/20 flex items-center justify-center text-terracotta font-bold text-xl">
                    ✨
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-charcoal">Primer profesional disponible</h5>
                    <p className="text-[11px] text-charcoal-muted">Te asignaremos a la especialista ideal libre en tu horario</p>
                  </div>
                </div>

                {/* Specific Specialists */}
                {SPECIALISTS.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setSelectedSpecialistId(s.id)}
                    className={`p-4 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${
                      selectedSpecialistId === s.id
                        ? 'bg-nude-200 border-terracotta shadow-sm font-bold'
                        : 'bg-white border-terracotta/20 hover:border-terracotta'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-terracotta"
                    />
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-charcoal">{s.name}</h5>
                      <p className="text-[11px] text-terracotta-dark font-medium">{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-charcoal-muted hover:text-charcoal"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-full text-xs font-bold shadow-md cursor-pointer transition-all"
                >
                  <span>Siguiente: Datos de Confirmación</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CLIENT CONTACT & FINAL CONFIRMATION */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>4. Tus Datos para Bloquear el Turno:</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs text-terracotta flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Volver
                </button>
              </div>

              {/* Summary Card */}
              <div className="bg-nude-200/80 p-4 rounded-2xl border border-terracotta/30 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div>
                  <span className="text-charcoal-muted font-medium">Tratamiento:</span>{' '}
                  <strong className="text-charcoal">{selectedTreatmentName}</strong>
                </div>
                <div>
                  <span className="text-charcoal-muted font-medium">Fecha:</span>{' '}
                  <strong className="text-terracotta-dark">{selectedDate || availableDates[0].fullDateStr}</strong>
                </div>
                <div>
                  <span className="text-charcoal-muted font-medium">Hora:</span>{' '}
                  <strong className="text-terracotta-dark">{selectedTime || '10:30'} hs</strong>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Rossi"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-white border border-terracotta/30 rounded-xl p-3 text-xs focus:ring-2 focus:ring-terracotta focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +54 11 9876 5432"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-white border border-terracotta/30 rounded-xl p-3 text-xs focus:ring-2 focus:ring-terracotta focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal mb-1">
                  Email (Opcional para comprobante)
                </label>
                <input
                  type="email"
                  placeholder="sofia@ejemplo.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full bg-white border border-terracotta/30 rounded-xl p-3 text-xs focus:ring-2 focus:ring-terracotta focus:outline-none"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-charcoal mb-2">
                  Opción de Pago Preferida:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'local', title: 'Abonar en el Local', desc: 'Efectivo o Tarjeta en la sesión' },
                    { id: 'cuotas', title: '3 o 6 Cuotas Sin Interés', desc: 'Congela precio promocional' },
                    { id: 'mercadopago', title: 'Mercado Pago / Seña', desc: 'Transferencia o seña instantánea' }
                  ].map((pm) => (
                    <div
                      key={pm.id}
                      onClick={() => setPaymentMethod(pm.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer text-left ${
                        paymentMethod === pm.id
                          ? 'bg-terracotta/10 border-terracotta font-bold text-terracotta-dark'
                          : 'bg-white border-terracotta/20 text-charcoal'
                      }`}
                    >
                      <div className="text-xs font-bold">{pm.title}</div>
                      <div className="text-[10px] text-charcoal-muted mt-0.5">{pm.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-full text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>CONFIRMAR MI TURNO POR WHATSAPP</span>
              </button>

              <p className="text-[11px] text-center text-charcoal-muted flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tus datos están protegidos. Sin cargos sorpresa ni costo de cancelación.</span>
              </p>
            </form>
          )}

        </div>

      </div>

      {/* DIGITAL TICKET MODAL */}
      {showTicketModal && (
        <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-scaleUp border border-terracotta/30">
            <button
              onClick={() => setShowTicketModal(false)}
              className="absolute top-4 right-4 text-charcoal-muted hover:text-charcoal p-1 rounded-full bg-nude-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-3xl mb-3 shadow-glow">
                ✓
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">¡Reserva Enviada!</h3>
              <p className="text-xs text-charcoal-muted mt-1">
                Tu solicitud de turno ha sido generada exitosamente.
              </p>
            </div>

            {/* Ticket Box */}
            <div className="bg-nude-100 p-5 rounded-2xl border border-dashed border-terracotta/40 text-xs space-y-3 mb-6 relative">
              <div className="flex justify-between items-center pb-2 border-b border-terracotta/20">
                <span className="font-bold text-terracotta-dark">TICKET DE RESERVA</span>
                <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border">{bookingRef}</span>
              </div>

              <div>
                <span className="text-charcoal-muted">Tratamiento:</span>
                <div className="font-bold text-charcoal text-sm">{selectedTreatmentName}</div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-charcoal-muted">Fecha:</span>
                  <div className="font-bold text-charcoal">{selectedDate || availableDates[0].fullDateStr}</div>
                </div>
                <div>
                  <span className="text-charcoal-muted">Horario:</span>
                  <div className="font-bold text-charcoal">{selectedTime || '10:30'} hs</div>
                </div>
              </div>

              <div className="pt-2 border-t border-terracotta/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <QrCode className="w-10 h-10 text-charcoal opacity-80" />
                  <span className="text-[10px] text-charcoal-muted">Muestra este código al llegar a recepción</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowTicketModal(false)}
              className="w-full bg-terracotta text-white font-bold py-3 rounded-xl text-xs hover:bg-terracotta-dark transition-colors cursor-pointer"
            >
              Cerrar Comprobante
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
