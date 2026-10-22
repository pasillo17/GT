import React, { useState } from 'react';
import { DualProduct, formatArs, formatUsd, USD_RATE } from '../data/catalog';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: DualProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setQuickViewProduct } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  const isAmberRomance = product.id === 'body-splash-victorias-secret-body-splash-amber-romance' || product.name.toUpperCase().includes('AMBER ROMANCE');
  const isJoystickPs4 = product.id === 'tecnologia-sony-joystick-ps4' || product.name.toLowerCase().includes('joystick ps4');
  const needsZoom = isAmberRomance || isJoystickPs4;

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      className="group studio-card rounded-xl sm:rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer text-left relative transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,255,255,0.08)] active:scale-[0.98] bg-[#080808]"
    >
      {/* Top Image Stage with Studio Lighting & Loading Shimmer */}
      <div className={`relative w-full aspect-square bg-[#080808] flex items-center justify-center overflow-hidden border-b border-white/[0.06] ${
        needsZoom ? 'p-0.5 sm:p-1' : 'p-2.5 sm:p-4'
      }`}>
        {/* Ambient Subtle Studio Radial Glow */}
        <div className="absolute inset-0 bg-radial from-white/[0.04] via-white/[0.01] to-transparent pointer-events-none group-hover:from-white/[0.08] transition-all duration-500" />

        {/* Image Loading Skeleton with Shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0d] z-0 overflow-hidden">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/[0.03] animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer" />
          </div>
        )}

        {/* Product Image with Fade & Scale in on Load */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain filter contrast-105 transition-all duration-700 ease-out relative z-10 ${
            isJoystickPs4
              ? 'scale-145 sm:scale-150 group-hover:scale-160'
              : isAmberRomance
              ? 'scale-135 sm:scale-140 group-hover:scale-145'
              : 'scale-100 group-hover:scale-108'
          } ${
            imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 scale-95 blur-sm'
          }`}
          loading="lazy"
        />

        {/* Top Badges & Favorite Button */}
        <div className="absolute top-2 left-2 right-2 sm:top-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-1">
            {product.isTop5 && product.salesRank && product.salesRank <= 5 ? (
              <span className="text-[7.5px] sm:text-[8.5px] font-dmsans font-extrabold tracking-wider uppercase text-amber-300 bg-black/80 border border-amber-400/40 px-1.5 py-0.5 rounded shadow-sm backdrop-blur-md animate-in fade-in duration-300">
                #{product.salesRank} TOP
              </span>
            ) : product.wholesaleOnly ? (
              <span className="text-[7.5px] sm:text-[8.5px] font-montserrat tracking-[0.14em] uppercase font-bold text-amber-300 bg-amber-950/85 backdrop-blur-md px-1.5 py-0.5 rounded border border-amber-400/40 animate-in fade-in duration-300">
                SOLO MAYORISTA
              </span>
            ) : product.badge ? (
              <span className="text-[7.5px] sm:text-[8.5px] font-montserrat tracking-[0.14em] uppercase font-semibold text-white/90 bg-black/75 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10 animate-in fade-in duration-300">
                {product.badge}
              </span>
            ) : null}
          </div>
        </div>

        {/* Desktop Quick View Hint */}
        <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] z-20 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-[#f5f5f7] text-black text-[11px] font-dmsans font-bold flex items-center gap-1.5 shadow-xl">
            <Eye className="w-3.5 h-3.5" />
            <span>Ver Detalle</span>
          </span>
        </div>
      </div>

      {/* Product Information - Mobile Clean & Organized */}
      <div className="p-2.5 sm:p-3.5 flex-1 flex flex-col justify-between space-y-2">
        <div className="space-y-0.5">
          {/* Brand */}
          <div className="text-[9px] sm:text-[10px] text-[#86868b] font-inter truncate font-semibold uppercase tracking-wider">
            {product.brand}
          </div>

          {/* Product Title */}
          <h3 className="font-heading text-[11.5px] sm:text-[13px] font-bold text-white tracking-tight leading-snug line-clamp-2 min-h-[1.9rem] sm:min-h-[2.1rem] group-hover:text-zinc-200 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Pricing Layout - PESOS ARS Y DÓLARES USD */}
        <div className="pt-2 border-t border-white/[0.06] space-y-2">
          <div className="space-y-1">
            <div className="flex items-baseline justify-between gap-1">
              <span className="text-[9px] uppercase tracking-wider font-bold text-emerald-400">
                Efectivo
              </span>
              <div className="flex items-baseline gap-1.5 text-right">
                <span className="font-dmsans text-[13px] sm:text-base font-black text-white tabular-nums">
                  {formatArs(product.retail?.efectivo || product.wholesale[0]?.priceArs || 0)}
                </span>
                <span className="text-[10px] sm:text-[11px] font-dmsans font-extrabold text-emerald-400 tabular-nums">
                  {formatUsd(Math.round((product.retail?.efectivo || product.wholesale[0]?.priceArs || 0) / USD_RATE))}
                </span>
              </div>
            </div>

            {product.retail?.transferencia ? (
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-[#86868b] pt-0.5">
                <span>Transf: {formatArs(product.retail.transferencia)}</span>
                <span className="text-zinc-400">6x {formatArs(Math.round((product.retail.cuotas6 || product.retail.efectivo) / 6))}</span>
              </div>
            ) : null}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full min-h-[34px] sm:min-h-[38px] py-1.5 px-2 rounded-lg text-[10px] sm:text-xs font-dmsans font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 shadow-sm ${
              isAdded
                ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-white hover:bg-zinc-200 text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span className="truncate">¡AGREGADO!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 stroke-[2]" />
                <span className="truncate">AGREGAR AL PEDIDO</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
