import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Check, MessageCircle, Package } from 'lucide-react';
import { formatArs, formatUsd, GIANITECH_CONTACT, USD_RATE } from '../data/catalog';

export const ProductQuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    channel,
    setChannel,
    currency,
  } = useCart();

  const [selectedTierIdx, setSelectedTierIdx] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [modalImgLoaded, setModalImgLoaded] = useState(false);

  if (!quickViewProduct) return null;
  const activeWholesaleTier = quickViewProduct.wholesale[selectedTierIdx] || quickViewProduct.wholesale[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const handleConsultWhatsApp = () => {
    const text = `Hola Gianitech! Quisiera consultar stock y detalles de: *${quickViewProduct.name}* (Página ${quickViewProduct.page} del Catálogo ${channel}).`;
    window.open(
      `https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto text-left">
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-6 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-t-2xl sm:rounded-2xl bg-[#080808] border-t sm:border border-white/[0.12] p-5 sm:p-8 text-left shadow-2xl transition-all max-h-[92vh] flex flex-col">
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 rounded-lg text-[#86868b] hover:text-white hover:bg-white/[0.08] transition-colors z-20 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto pr-1 space-y-5 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-start">
              {/* Product Image Stage with Shimmer */}
              <div className={`md:col-span-5 relative aspect-square rounded-xl bg-[#050505] border border-white/[0.08] flex items-center justify-center overflow-hidden ${
                quickViewProduct.id === 'body-splash-victorias-secret-body-splash-amber-romance' || quickViewProduct.name.toUpperCase().includes('AMBER ROMANCE')
                  ? 'p-1 sm:p-2'
                  : 'p-4'
              }`}>
                <div className="absolute inset-0 bg-radial from-white/[0.05] to-transparent pointer-events-none" />
                {!modalImgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#09090c] z-0 overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-white/[0.04] animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer" />
                  </div>
                )}
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  referrerPolicy="no-referrer"
                  onLoad={() => setModalImgLoaded(true)}
                  className={`w-full h-full object-contain filter contrast-105 transition-all duration-500 relative z-10 ${
                    quickViewProduct.id === 'body-splash-victorias-secret-body-splash-amber-romance' || quickViewProduct.name.toUpperCase().includes('AMBER ROMANCE')
                      ? 'scale-135 sm:scale-140'
                      : 'scale-100'
                  } ${
                    modalImgLoaded ? 'opacity-100 blur-0' : 'opacity-0 scale-95 blur-sm'
                  }`}
                />
              </div>

              {/* Product Details */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#86868b] font-inter">
                    <span className="text-zinc-300 font-semibold">{quickViewProduct.brand}</span>
                    <span aria-hidden="true">·</span>
                    <span>{quickViewProduct.categoryLabel}</span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {quickViewProduct.name}
                  </h3>

                  {quickViewProduct.variant && (
                    <div className="text-xs text-zinc-400 font-dmsans">
                      Variante: <span className="text-white font-medium">{quickViewProduct.variant}</span>
                    </div>
                  )}

                  {quickViewProduct.description && (
                    <p className="text-xs text-[#86868b] font-inter leading-relaxed pt-1">
                      {quickViewProduct.description}
                    </p>
                  )}
                </div>

                {/* Pricing Box - PESOS ARS Y DÓLARES USD */}
                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/[0.08] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-bold uppercase">
                      Precio Efectivo:
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-dmsans text-xl font-bold text-white tabular-nums">
                        {formatArs(quickViewProduct.retail?.efectivo || quickViewProduct.wholesale[0]?.priceArs || 0)}
                      </span>
                      <span className="text-xs font-dmsans font-extrabold text-emerald-400 tabular-nums bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {formatUsd(Math.round((quickViewProduct.retail?.efectivo || quickViewProduct.wholesale[0]?.priceArs || 0) / USD_RATE))} USD
                      </span>
                    </div>
                  </div>
                  {quickViewProduct.retail?.transferencia ? (
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>Transferencia bancaria:</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-dmsans text-zinc-200 tabular-nums">
                          {formatArs(quickViewProduct.retail.transferencia)}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-dmsans tabular-nums">
                          ({formatUsd(Math.round(quickViewProduct.retail.transferencia / USD_RATE))} USD)
                        </span>
                      </div>
                    </div>
                  ) : null}
                  {quickViewProduct.retail?.cuotas6 ? (
                    <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-white/[0.06] pt-1.5">
                      <span>6 cuotas sin interés:</span>
                      <span className="font-dmsans text-white font-medium tabular-nums">
                        {formatArs(quickViewProduct.retail.cuotas6)}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 mt-2 border-t border-white/[0.08] flex items-center gap-2.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3 px-3 rounded-xl text-xs font-dmsans font-bold transition-all flex items-center justify-center gap-2 min-h-[46px] cursor-pointer ${
                isAdded
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white hover:bg-zinc-200 text-black active:scale-[0.98]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡AGREGADO AL PEDIDO!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>AGREGAR AL PEDIDO</span>
                </>
              )}
            </button>

            <button
              onClick={handleConsultWhatsApp}
              className="py-3 px-3 rounded-xl border border-white/[0.18] hover:border-white/40 text-white text-xs font-dmsans font-semibold flex items-center justify-center gap-1.5 transition-all hover:bg-white/[0.04] min-h-[46px] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
