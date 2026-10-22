import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, MessageCircle, Package } from 'lucide-react';
import { formatArs, formatUsd, GIANITECH_CONTACT } from '../data/catalog';

export const ShoppingCart: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalUnits,
    totalPriceUsd,
    totalPriceArs,
    currency,
    toggleCurrency,
    channel,
    setChannel,
    customerName,
    setCustomerName,
    customerCity,
    setCustomerCity,
    customerNotes,
    setCustomerNotes,
    sendWhatsAppOrder,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left">
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-full sm:max-w-md bg-[#080808] border-l border-white/[0.1] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.1] p-1 flex items-center justify-center">
                  <img
                    src="/src/assets/images/gianitech_logo.png"
                    alt="Gianitech"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]"
                  />
                </div>
                <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                  Tu Pedido ({totalUnits}u)
                </h2>
              </div>
              <div className="text-[10px] text-zinc-400 font-dmsans">
                GIANITECH IMPORTADOS · CATÁLOGO OFICIAL
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleCurrency}
                className="text-xs font-dmsans font-semibold px-2.5 py-1.5 rounded bg-[#0c0c0e] border border-white/[0.1] text-zinc-300 hover:text-white min-h-[36px]"
                title="Cambiar moneda"
              >
                {currency}
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-lg text-[#86868b] hover:text-white hover:bg-white/[0.05] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 sm:py-20 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#86868b]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-white">
                    Tu lista está vacía
                  </h3>
                  <p className="text-xs text-[#86868b] font-inter max-w-xs mx-auto">
                    Agregá productos desde el catálogo para armar tu pedido por WhatsApp.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary text-xs w-full sm:w-auto min-h-[44px]"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => {
                  const isWholesale = item.channel === 'mayorista';
                  let unitPriceArs = item.product.retail.efectivo;
                  let unitPriceUsd = Math.round(unitPriceArs / 1250);

                  if (isWholesale) {
                    const q = item.quantity;
                    let tier = item.product.wholesale[0];
                    for (let i = item.product.wholesale.length - 1; i >= 0; i--) {
                      if (q >= item.product.wholesale[i].units) {
                        tier = item.product.wholesale[i];
                        break;
                      }
                    }
                    unitPriceArs = tier?.priceArs || unitPriceArs;
                    unitPriceUsd = tier?.priceUsd || unitPriceUsd;
                  }

                  const subtotalArs = unitPriceArs * item.quantity;

                  return (
                    <div
                      key={item.product.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#0c0c0e] border border-white/[0.08] flex gap-3 sm:gap-3.5 items-center justify-between"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-[#050505] border border-white/[0.08] p-1.5 flex items-center justify-center shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className={`w-full h-full object-contain ${
                            item.product.id === 'body-splash-victorias-secret-body-splash-amber-romance' || item.product.name.toUpperCase().includes('AMBER ROMANCE')
                              ? 'scale-130'
                              : ''
                          }`}
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                        <div className="text-[9.5px] uppercase font-montserrat text-[#86868b] truncate flex items-center gap-1.5">
                          <span>{item.product.brand}</span>
                          <span>·</span>
                          <span className={isWholesale ? 'text-amber-400 font-semibold' : 'text-emerald-400'}>
                            {isWholesale ? 'Mayorista' : 'Minorista'}
                          </span>
                        </div>
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-white truncate">
                          {item.product.name}
                        </h4>
                        <div className="font-dmsans text-xs font-bold text-white tabular-nums flex items-baseline gap-1.5 flex-wrap">
                          <span>{formatArs(subtotalArs)}</span>
                          <span className="text-emerald-400 font-extrabold">({formatUsd(unitPriceUsd * item.quantity)})</span>
                        </div>
                        <div className="text-[10px] text-zinc-400 font-normal">
                          {formatArs(unitPriceArs)} · {formatUsd(unitPriceUsd)} c/u
                        </div>
                      </div>

                      {/* Quantity Controls & Delete */}
                      <div className="flex flex-col items-end gap-1.5 sm:gap-2">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-[#86868b] hover:text-red-400 transition-colors p-1 min-h-[28px] min-w-[28px] flex items-center justify-center"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center border border-white/[0.1] rounded-lg bg-[#050505] p-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - (isWholesale ? 5 : 1))}
                            className="p-1 text-[#86868b] hover:text-white transition-colors min-h-[28px] min-w-[28px] flex items-center justify-center cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-dmsans font-bold text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + (isWholesale ? 5 : 1))}
                            className="p-1 text-[#86868b] hover:text-white transition-colors min-h-[28px] min-w-[28px] flex items-center justify-center cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="flex justify-end pt-1">
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-[#86868b] hover:text-white transition-colors py-1 px-2 cursor-pointer"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            )}

            {/* Customer Details Form */}
            {items.length > 0 && (
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="text-xs font-montserrat uppercase tracking-wider text-[#d1d1d6] font-semibold">
                  Datos de Contacto & Entrega
                </div>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nombre completo o razón social"
                    className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-inter min-h-[44px]"
                  />
                  <input
                    type="text"
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    placeholder="Localidad de envío o retiro en Espacio Dual"
                    className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-inter min-h-[44px]"
                  />
                  <textarea
                    rows={2}
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Notas (medio de pago preferido, consultas sobre modelos)..."
                    className="w-full bg-[#0c0c0e] border border-white/[0.08] rounded-lg px-3 py-2.5 text-base sm:text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 font-inter resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#050505] space-y-3 sm:space-y-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="pt-2 border-t border-white/[0.06] flex items-baseline justify-between">
                <div>
                  <span className="font-heading text-sm font-bold text-white">Total Estimado:</span>
                  <div className="text-[10px] text-[#86868b] font-inter">Cotización oficial sujeta a medio de pago</div>
                </div>
                <div className="text-right">
                  <div className="font-dmsans text-xl sm:text-2xl font-black text-white tabular-nums leading-none">
                    {formatArs(totalPriceArs)}
                  </div>
                  <div className="text-xs sm:text-sm font-dmsans font-extrabold text-emerald-400 tabular-nums mt-1">
                    {formatUsd(totalPriceUsd)} USD
                  </div>
                </div>
              </div>

              {/* Finalize on WhatsApp Button */}
              <button
                onClick={sendWhatsAppOrder}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-dmsans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>ENVIAR PEDIDO POR WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#86868b]">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Atención directa Gianitech: +54 9 221 202-9666</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
