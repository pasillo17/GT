import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { ALL_PRODUCTS, formatArs, formatUsd, USD_RATE } from '../data/catalog';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  onSelectProduct: (productId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onSelectProduct }) => {
  const { isSearchOpen, setIsSearchOpen, currency, channel, setQuickViewProduct } = useCart();
  const [query, setQuery] = useState('');

  const availableProducts = useMemo(() => {
    return channel === 'minorista'
      ? ALL_PRODUCTS.filter((p) => !p.wholesaleOnly)
      : ALL_PRODUCTS;
  }, [channel]);

  const results = useMemo(() => {
    if (!query.trim()) return availableProducts.slice(0, 6);
    const q = query.toLowerCase().trim();
    return availableProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        (p.variant && p.variant.toLowerCase().includes(q))
    );
  }, [query, availableProducts]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto text-left">
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-start justify-center p-3 pt-12 sm:p-4 sm:pt-20 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-[#080808] border border-white/[0.12] p-4 sm:p-6 text-left shadow-2xl transition-all">
          {/* Search Header Input */}
          <div className="flex items-center gap-2.5 pb-3 sm:pb-4 border-b border-white/[0.08]">
            <Search className="w-5 h-5 text-[#86868b] shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por 9PM, Asad, Stanley, PS5, Karseell, iPhone..."
              className="w-full bg-transparent text-base sm:text-lg text-white placeholder-[#86868b] focus:outline-none font-inter min-h-[44px]"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 rounded-lg text-[#86868b] hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="pt-3 sm:pt-4 space-y-1.5 max-h-[65vh] overflow-y-auto">
            <div className="text-[9.5px] uppercase font-montserrat text-[#86868b] tracking-wider px-2">
              {query.trim() ? `Coincidencias (${results.length})` : 'Productos Destacados'}
            </div>

            {results.length === 0 ? (
              <div className="py-10 text-center text-xs text-[#86868b]">
                No encontramos productos que coincidan con tu búsqueda.
              </div>
            ) : (
              results.map((product) => {
                const priceArs = channel === 'minorista'
                  ? product.retail.efectivo
                  : product.wholesale[0].priceArs;
                const priceUsd = channel === 'minorista'
                  ? Math.round(product.retail.efectivo / USD_RATE)
                  : product.wholesale[0].priceUsd;

                return (
                  <div
                    key={product.id}
                    onClick={() => {
                      setQuickViewProduct(product);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 sm:p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] flex items-center justify-between gap-3 cursor-pointer transition-colors active:scale-[0.99] min-h-[50px]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-[#050505] p-1 border border-white/[0.08] flex items-center justify-center shrink-0">
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
                      <div className="min-w-0">
                        <div className="text-[9px] font-montserrat text-[#86868b] uppercase truncate">
                          {product.brand} · Pág. {product.page}
                        </div>
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-white truncate">
                          {product.name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 text-right">
                      <div>
                        <div className="font-dmsans text-xs sm:text-sm font-bold text-white tabular-nums leading-none">
                          {formatArs(priceArs)}
                        </div>
                        <div className="text-[10px] font-dmsans font-extrabold text-emerald-400 tabular-nums mt-0.5">
                          {formatUsd(priceUsd)}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#86868b]" />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
