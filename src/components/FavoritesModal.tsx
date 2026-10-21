import React from 'react';
import { useCart } from '../context/CartContext';
import { ALL_PRODUCTS, formatArs, formatUsd } from '../data/catalog';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export const FavoritesModal: React.FC = () => {
  const {
    favorites,
    isFavoritesOpen,
    setIsFavoritesOpen,
    toggleFavorite,
    addToCart,
    channel,
    currency,
    setQuickViewProduct,
  } = useCart();

  if (!isFavoritesOpen) return null;

  const favoriteProducts = ALL_PRODUCTS.filter((p) => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden text-left">
      <div
        onClick={() => setIsFavoritesOpen(false)}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-full sm:max-w-md bg-[#080808] border-l border-white/[0.1] shadow-2xl flex flex-col justify-between">
          <div className="p-4 sm:p-6 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-white fill-white" />
              <h2 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight">
                Tus Favoritos ({favoriteProducts.length})
              </h2>
            </div>
            <button
              onClick={() => setIsFavoritesOpen(false)}
              className="p-2 rounded-lg text-[#86868b] hover:text-white hover:bg-white/[0.05] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 pb-24 sm:pb-6">
            {favoriteProducts.length === 0 ? (
              <div className="py-16 sm:py-20 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#86868b]">
                  <Heart className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-white">
                    No tenés productos guardados
                  </h3>
                  <p className="text-xs text-[#86868b] font-inter max-w-xs mx-auto">
                    Hacé click en el corazón de cualquier producto para guardarlo aquí y comparar.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-2.5 sm:space-y-3">
                {favoriteProducts.map((product) => {
                  const priceArs = channel === 'minorista'
                    ? product.retail.efectivo
                    : product.wholesale[0].priceArs;
                  const priceUsd = channel === 'minorista'
                    ? Math.round(priceArs / 1250)
                    : product.wholesale[0].priceUsd;

                  return (
                    <div
                      key={product.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#0c0c0e] border border-white/[0.08] flex gap-3 items-center justify-between"
                    >
                      <div
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsFavoritesOpen(false);
                        }}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-[#050505] border border-white/[0.08] p-1.5 flex items-center justify-center shrink-0 cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full h-full object-contain ${
                            product.id === 'body-splash-victorias-secret-body-splash-amber-romance' || product.name.toUpperCase().includes('AMBER ROMANCE')
                              ? 'scale-130'
                              : ''
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                        <div className="text-[9.5px] uppercase font-montserrat text-[#86868b] truncate">
                          {product.brand} · Pág. {product.page}
                        </div>
                        <h4
                          onClick={() => {
                            setQuickViewProduct(product);
                            setIsFavoritesOpen(false);
                          }}
                          className="font-heading text-xs sm:text-sm font-bold text-white truncate cursor-pointer hover:text-zinc-200"
                        >
                          {product.name}
                        </h4>
                        <div className="font-dmsans text-xs font-bold text-white tabular-nums flex items-baseline gap-1.5 flex-wrap">
                          <span>{formatArs(priceArs)}</span>
                          <span className="text-emerald-400 font-extrabold text-[10.5px]">({formatUsd(priceUsd)})</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            if (channel === 'minorista') {
                              addToCart(product, 1);
                            } else {
                              addToCart(product, 5, 5);
                            }
                          }}
                          className="p-2 sm:p-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-dmsans text-xs font-bold transition-all min-h-[38px] min-w-[38px] flex items-center justify-center active:scale-95 cursor-pointer"
                          title="Mover al pedido"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => toggleFavorite(product.id)}
                          className="p-2 sm:p-2.5 rounded-lg text-[#86868b] hover:text-red-400 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
                          title="Eliminar de favoritos"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
