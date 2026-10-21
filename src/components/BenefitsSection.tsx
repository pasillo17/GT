import React from 'react';
import { Layers, UserCheck, TrendingDown } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-24 bg-[#050505] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-[11px] font-montserrat uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#86868b] font-semibold">
            Nuestra Filosofía
          </span>
          <h2 className="font-heading text-2xl sm:text-5xl font-bold text-white tracking-tight">
            Tecnología. Calidad. Confianza.
          </h2>
          <p className="text-xs sm:text-sm text-[#86868b] font-inter">
            Cada paso de nuestro proceso de importación está pensado para garantizarte la mejor experiencia tecnológica.
          </p>
        </div>

        {/* 3 Pillars Grid: 1 col mobile, 3 cols tablet & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
          {/* Bloque 1: Productos seleccionados */}
          <div className="studio-card rounded-2xl p-6 sm:p-8 text-left space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Productos seleccionados
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] font-inter leading-relaxed">
                Curaduría rigurosa de cada modelo. Solo trabajamos dispositivos originales, sellados de fábrica y en perfecto estado.
              </p>
            </div>
            <div className="pt-2 text-[10px] sm:text-[11px] font-montserrat text-zinc-400 font-semibold uppercase tracking-wider">
              Autenticidad 100%
            </div>
          </div>

          {/* Bloque 2: Atención personalizada */}
          <div className="studio-card rounded-2xl p-6 sm:p-8 text-left space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Atención personalizada
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] font-inter leading-relaxed">
                Asesoramiento directo e individualizado. Resolvemos tus dudas técnicas y te acompañamos antes, durante y después de tu compra.
              </p>
            </div>
            <div className="pt-2 text-[10px] sm:text-[11px] font-montserrat text-zinc-400 font-semibold uppercase tracking-wider">
              Asistencia Directa
            </div>
          </div>

          {/* Bloque 3: Precios competitivos */}
          <div className="studio-card rounded-2xl p-6 sm:p-8 text-left space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
                <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Precios competitivos
              </h3>
              <p className="text-xs sm:text-sm text-[#86868b] font-inter leading-relaxed">
                Importación directa que nos permite trasladarte los mejores valores de plaza, sin costos innecesarios de intermediación.
              </p>
            </div>
            <div className="pt-2 text-[10px] sm:text-[11px] font-montserrat text-zinc-400 font-semibold uppercase tracking-wider">
              Importación Directa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
