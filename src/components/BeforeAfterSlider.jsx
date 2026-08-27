import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImg, afterImg, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX, rect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs font-semibold text-charcoal-muted px-1">
        <span className="flex items-center gap-1 text-terracotta">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Resultados Reales</span>
        </span>
        <span className="animate-pulse">← Desliza para comparar →</span>
      </div>

      <div
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury select-none cursor-ew-resize border border-terracotta/20 bg-nude-200"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* AFTER Image — full background layer */}
        <img
          src={afterImg}
          alt={`Después de ${title}`}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm z-10">
          DESPUÉS ✨
        </div>

        {/* BEFORE Image — clipped with clipPath so image fills full container, only cropped */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImg}
            alt={`Antes de ${title}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute top-3 left-3 bg-charcoal/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            ANTES
          </div>
        </div>

        {/* Divider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/90 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, boxShadow: '0 0 10px rgba(212,163,115,0.5)' }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-terracotta shadow-xl flex items-center justify-center border-2 border-terracotta">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
