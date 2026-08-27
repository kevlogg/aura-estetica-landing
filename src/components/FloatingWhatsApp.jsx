import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = '5491199887766';
  const defaultMessage = encodeURIComponent('Hola AURA! Tengo una consulta antes de agendar mi turno online.');
  const waUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="glass-card p-3 rounded-2xl shadow-2xl border border-emerald-500/30 max-w-xs text-xs animate-bounce relative mb-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute -top-2 -left-2 w-5 h-5 bg-charcoal text-white rounded-full flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-bold text-charcoal flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            ¿Tenés dudas antes de agendar?
          </p>
          <p className="text-[11px] text-charcoal-muted mt-0.5">
            Hacé clic acá y hablá en vivo por WhatsApp con nuestro equipo.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Notification badge dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-rose-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold">
          1
        </span>
      </a>
    </div>
  );
}
