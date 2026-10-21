import React from 'react';
import { Sparkles, ShieldCheck, Truck, MapPin, CreditCard, MessageCircle } from 'lucide-react';

export const LiveTickerBar: React.FC = () => {
  const items = [
    { icon: <MapPin className="w-3.5 h-3.5 text-zinc-300" />, text: 'Showroom Espacio Dual La Plata' },
    { icon: <Truck className="w-3.5 h-3.5 text-emerald-400" />, text: 'Despachos en 24hs a todo el país' },
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />, text: 'Garantía Oficial de Importación' },
    { icon: <CreditCard className="w-3.5 h-3.5 text-amber-300" />, text: '6 Cuotas Sin Interés en Minorista' },
    { icon: <Sparkles className="w-3.5 h-3.5 text-amber-300" />, text: 'Escalas Mayoristas x5u, x10u y x30u' },
    { icon: <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />, text: 'Atención personalizada por WhatsApp' },
  ];

  return (
    <div className="w-full bg-[#08080c] border-y border-white/[0.08] overflow-hidden py-2 sm:py-2.5 relative select-none">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Ticker */}
      <div className="animate-marquee flex items-center gap-8 sm:gap-12">
        {/* First set */}
        {items.map((item, idx) => (
          <div key={`ticker-1-${idx}`} className="flex items-center gap-2 text-xs text-zinc-300 whitespace-nowrap font-dmsans">
            <span className="p-1 rounded-md bg-white/[0.05] border border-white/[0.08]">
              {item.icon}
            </span>
            <span className="font-semibold tracking-wide">{item.text}</span>
            <span className="text-zinc-600 ml-4">•</span>
          </div>
        ))}
        {/* Duplicate set for seamless infinite loop */}
        {items.map((item, idx) => (
          <div key={`ticker-2-${idx}`} className="flex items-center gap-2 text-xs text-zinc-300 whitespace-nowrap font-dmsans">
            <span className="p-1 rounded-md bg-white/[0.05] border border-white/[0.08]">
              {item.icon}
            </span>
            <span className="font-semibold tracking-wide">{item.text}</span>
            <span className="text-zinc-600 ml-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
