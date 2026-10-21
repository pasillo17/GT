import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Package, ArrowRight, ShieldCheck, Truck, MapPin, MessageCircle } from 'lucide-react';
import { GIANITECH_CONTACT } from '../data/catalog';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreOffers?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  const { channel, setChannel } = useCart();

  return (
    <section
      id="inicio"
      className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center bg-[#050505] overflow-hidden px-4 sm:px-6 lg:px-8 py-10 sm:py-16 border-b border-white/[0.06]"
    >
      {/* Dynamic Ambient Background Glow Halos - Soft and subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-gradient-to-b from-white/[0.04] via-zinc-400/[0.02] to-transparent rounded-full blur-[90px] sm:blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 sm:w-[380px] h-48 sm:h-[380px] bg-white/[0.015] rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      {/* Main Content Container - Centered Hero with Dominant Logo & Refined Glow */}
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8">
        
        {/* Top Minimalist Pill Eyebrow with Live Animated Beacon */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.04)] animate-in fade-in slide-in-from-top-3 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
          </span>
          <span className="text-[9px] sm:text-[11.5px] font-outfit tracking-[0.24em] text-zinc-200 uppercase font-bold">
            TECNOLOGÍA <span className="text-zinc-500 mx-0.5">·</span> ESTILO <span className="text-zinc-500 mx-0.5">·</span> TU MUNDO
          </span>
        </div>

        {/* HERO CENTERPIECE: Floating Animated Logo with Soft Glow */}
        <div className="relative w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] flex flex-col items-center justify-center my-1 sm:my-2 animate-float">
          
          {/* Layered Lighting Aura behind Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[220px] sm:w-[360px] lg:w-[440px] h-[150px] sm:h-[240px] lg:h-[280px] rounded-full bg-gradient-to-r from-white/[0.05] via-zinc-400/[0.03] to-transparent blur-[35px] sm:blur-[60px]" />
            <div className="w-[110px] sm:w-[190px] lg:w-[240px] h-[75px] sm:h-[130px] lg:h-[160px] rounded-full bg-white/[0.06] blur-[22px] sm:blur-[40px]" />
          </div>

          {/* Official Gianitech Logo - Clickable to WhatsApp with Personalized Message */}
          <a
            href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(
              `¡Hola Gianitech! 👋 Estoy viendo el catálogo online (${channel === 'mayorista' ? 'Mayorista' : 'Minorista'}) y me gustaría consultar disponibilidad, precios y cómo realizar un pedido.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-full p-2 sm:p-4 group cursor-pointer flex flex-col items-center focus:outline-none transition-transform active:scale-[0.98]"
            title="Abrir WhatsApp oficial de Gianitech con mensaje personalizado"
          >
            <img
              src="/src/assets/images/gianitech_logo.png"
              alt="GIANITECH IMPORTADOS - Logo Oficial"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[180px] xs:max-h-[220px] sm:max-h-[300px] md:max-h-[360px] object-contain object-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.14)] group-hover:drop-shadow-[0_0_22px_rgba(255,255,255,0.3)] group-hover:scale-[1.03] transition-all duration-500 ease-out select-none animate-in fade-in-50 zoom-in-95 duration-500"
              loading="eager"
            />
            {/* Interactive WhatsApp badge below logo with pulse glow */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/[0.04] group-hover:bg-emerald-500/15 border border-white/[0.08] group-hover:border-emerald-500/30 text-[10.5px] sm:text-xs text-zinc-300 group-hover:text-emerald-300 transition-all backdrop-blur-sm shadow-sm group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Click en el logo para consultar por WhatsApp</span>
            </div>
          </a>
        </div>

        {/* Minimalist Subtext */}
        <div className="space-y-2 max-w-xl mx-auto px-2">
          <p className="text-xs sm:text-sm md:text-base text-[#a1a1a6] font-inter font-normal leading-relaxed">
            Catálogo oficial de tecnología Apple, consolas, bazar térmico y perfumería importada con cotización en <strong className="text-white font-medium">Pesos ARS y Dólares USD</strong> y atención personalizada.
          </p>
        </div>

        {/* Action Controls: Catalog Button + Minorista/Mayorista Switcher */}
        <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center space-y-3 pt-1">
          
          {/* Primary Call to Action Button */}
          <button
            onClick={onExploreProducts}
            className="btn-primary w-auto sm:w-full min-h-[42px] sm:min-h-[52px] py-2.5 sm:py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-dmsans font-bold tracking-wider uppercase glow-btn-hover group cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2 sm:gap-2.5 shadow-[0_0_25px_rgba(255,255,255,0.15)] rounded-xl"
          >
            <span>VER CATÁLOGO COMPLETO</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Minimalist Channel Selector: Minorista / Mayorista */}
          <div className="w-full max-w-[290px] sm:max-w-full inline-flex items-center p-1 rounded-xl bg-[#0e0e12] border border-white/[0.1] shadow-inner">
            <button
              onClick={() => setChannel('minorista')}
              className={`flex-1 py-1.5 sm:py-2.5 px-3 rounded-lg text-[11px] sm:text-xs font-dmsans font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                channel === 'minorista'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Minorista (1u)</span>
            </button>
            <button
              onClick={() => setChannel('mayorista')}
              className={`flex-1 py-1.5 sm:py-2.5 px-3 rounded-lg text-[11px] sm:text-xs font-dmsans font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                channel === 'mayorista'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              <Package className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Mayorista (5u+)</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-[#86868b]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-zinc-400" />
              Showroom La Plata
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Truck className="w-3 h-3 text-zinc-400" />
              Envíos a todo el país
            </span>
            <span className="text-white/20 hidden xs:inline">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              Garantía Oficial
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
