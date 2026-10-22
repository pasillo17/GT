import React from 'react';
import { useCart } from '../context/CartContext';
import { Home, LayoutGrid, Search, Package, ShoppingBag } from 'lucide-react';

interface MobileBottomNavProps {
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onNavigate }) => {
  const {
    totalUnits,
    setIsCartOpen,
    setIsSearchOpen,
    setChannel,
  } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#080808]/92 backdrop-blur-xl border-t border-white/[0.1] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
      <div className="grid grid-cols-5 items-center justify-around text-center">
        {/* 1. Inicio */}
        <button
          onClick={() => onNavigate('inicio')}
          className="flex flex-col items-center justify-center py-1 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[44px]"
          aria-label="Ir al inicio"
        >
          <Home className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[10px] font-montserrat mt-1">Inicio</span>
        </button>

        {/* 2. Catálogo / Productos */}
        <button
          onClick={() => onNavigate('productos')}
          className="flex flex-col items-center justify-center py-1 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[44px]"
          aria-label="Ver catálogo de productos"
        >
          <LayoutGrid className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[10px] font-montserrat mt-1">Catálogo</span>
        </button>

        {/* 3. Buscar */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center justify-center py-1 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[44px]"
          aria-label="Buscar productos"
        >
          <Search className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[10px] font-montserrat mt-1">Buscar</span>
        </button>

        {/* 4. Mayorista */}
        <button
          onClick={() => {
            setChannel('mayorista');
            onNavigate('productos');
          }}
          className="flex flex-col items-center justify-center py-1 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[44px]"
          aria-label="Ver catálogo mayorista"
        >
          <Package className="w-5 h-5 stroke-[1.5]" />
          <span className="text-[10px] font-montserrat mt-1">Mayorista</span>
        </button>

        {/* 5. Carrito */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 text-white hover:text-zinc-200 transition-colors focus:outline-none min-h-[44px]"
          aria-label="Abrir carrito de compras"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            {totalUnits > 0 && (
              <span className="absolute -top-1 -right-2.5 min-w-4 h-4 px-1 rounded-full bg-white text-black text-[9px] font-dmsans font-extrabold flex items-center justify-center shadow-md animate-in zoom-in-50">
                {totalUnits}
              </span>
            )}
          </div>
          <span className="text-[10px] font-dmsans font-bold mt-1">Carrito</span>
        </button>
      </div>
    </div>
  );
};
