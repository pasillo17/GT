import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Package } from 'lucide-react';

export const ChannelSelectorBar: React.FC = () => {
  const { channel, setChannel } = useCart();

  return (
    <div className="bg-[#050505]/95 border-b border-white/[0.06] py-1.5 px-3 sm:px-6 sticky top-14 sm:top-20 z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#86868b] truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
          <span className="font-montserrat truncate">
            Catálogo Oficial <strong className="text-white font-medium">GIANITECH IMPORTADOS</strong>
          </span>
        </div>

        {/* Minimalist Switcher */}
        <div className="flex items-center p-0.5 rounded-lg bg-[#0e0e11] border border-white/[0.08] shrink-0">
          <button
            onClick={() => setChannel('minorista')}
            className={`px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-dmsans font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              channel === 'minorista'
                ? 'bg-white text-black shadow-sm'
                : 'text-[#86868b] hover:text-white'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Minorista</span>
          </button>

          <button
            onClick={() => setChannel('mayorista')}
            className={`px-2.5 sm:px-3 py-1 rounded-md text-[10px] sm:text-xs font-dmsans font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              channel === 'mayorista'
                ? 'bg-white text-black shadow-sm'
                : 'text-[#86868b] hover:text-white'
            }`}
          >
            <Package className="w-3 h-3" />
            <span>Mayorista</span>
          </button>
        </div>
      </div>
    </div>
  );
};
