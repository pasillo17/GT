import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PromotionalBannerProps {
  onViewOffers: () => void;
}

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({ onViewOffers }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-12 sm:py-20 lg:py-24 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.1] bg-[#080808] min-h-[380px] sm:min-h-[480px] flex items-center">
          {/* Background Right: Macro Technology Lens Photo with Deep Shadow Vignette */}
          <div className="absolute inset-0 flex justify-end">
            <div className="relative w-full lg:w-3/5 h-full">
              <img
                src="/src/assets/images/banner_macro_cinematic_1792121378477.jpg"
                alt="Macro detalle tecnológico"
                className="w-full h-full object-cover object-center filter contrast-110"
              />
              {/* Radial & directional gradient overlays for seamless text contrast on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/85 to-transparent sm:via-transparent sm:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent hidden sm:block" />
            </div>
          </div>

          {/* Left: Content Block */}
          <div className="relative z-10 p-6 sm:p-14 lg:p-20 max-w-xl text-left space-y-3.5 sm:space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-montserrat tracking-[0.24em] sm:tracking-[0.28em] text-[#d1d1d6] uppercase font-semibold">
                OFERTAS
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.96]">
              Lo que buscás, <br className="hidden sm:inline" />
              <span className="text-[#86868b]">al mejor precio.</span>
            </h2>

            <p className="text-xs sm:text-base text-[#a1a1a6] font-inter font-normal leading-relaxed">
              Equipos de importación directa con valores promocionales por tiempo limitado. Garantía oficial, packaging sellado y entrega inmediata.
            </p>

            <div className="pt-1 sm:pt-2">
              <button
                onClick={onViewOffers}
                className="btn-primary w-full sm:w-auto min-h-[46px] group cursor-pointer"
              >
                <span>VER OFERTAS</span>
                <span className="arrow-icon group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
