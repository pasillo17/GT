import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, DualProduct, STORE_CATEGORIES } from '../data/catalog';
import { useCart } from '../context/CartContext';
import { ProductCard } from './ProductCard';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface ProductGridProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchFilter: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  activeCategory,
  setActiveCategory,
  searchFilter,
}) => {
  const { channel } = useCart();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategoryExpand = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const currentProducts = useMemo(() => {
    return channel === 'minorista'
      ? ALL_PRODUCTS.filter((p) => !p.wholesaleOnly)
      : ALL_PRODUCTS;
  }, [channel]);

  // Group products by category
  const categorizedSections = useMemo(() => {
    const query = searchFilter.toLowerCase().trim();

    return STORE_CATEGORIES.map((cat, index) => {
      let catProducts = currentProducts.filter((p) => p.categoryId === cat.id);

      // Global search filter if present
      if (query) {
        catProducts = catProducts.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query) ||
            p.categoryLabel.toLowerCase().includes(query) ||
            (p.variant && p.variant.toLowerCase().includes(query))
        );
      }

      // Sort by top 5 rank first, then page number
      const sorted = [...catProducts].sort((a, b) => {
        if (a.isTop5 && b.isTop5) {
          return (a.salesRank || 99) - (b.salesRank || 99);
        }
        if (a.isTop5) return -1;
        if (b.isTop5) return 1;
        return a.page - b.page;
      });

      return {
        category: cat,
        sectionIndex: index + 1,
        products: sorted,
      };
    }).filter((group) => {
      if (activeCategory !== 'all' && group.category.id !== activeCategory) {
        return false;
      }
      return group.products.length > 0;
    });
  }, [activeCategory, searchFilter, currentProducts]);

  return (
    <section id="productos" className="py-8 sm:py-16 bg-[#050505] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        
        {/* Main Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left border-b border-white/[0.08] pb-5 sm:pb-7">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-montserrat text-[#86868b] font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>GIANITECH · CATÁLOGO OFICIAL</span>
              <span>·</span>
              <span className="text-zinc-300 font-bold">PRECIOS EN PESOS ARS & DÓLARES USD</span>
            </div>

            <h2 className="font-jakarta text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Catálogo Oficial
            </h2>

            <p className="text-[11px] sm:text-xs text-[#86868b] font-inter max-w-xl">
              Tecnología Apple, perfumería importada, consolas, bazar térmico y accesorios originales con stock disponible.
            </p>
          </div>
        </div>

        {/* Categories Navigation Strip */}
        <div className="overflow-x-auto pb-1 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-dmsans font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[34px] sm:min-h-[38px] flex items-center gap-1.5 ${
                activeCategory === 'all'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'bg-[#080808] text-[#86868b] hover:text-white border border-white/[0.08]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Todos ({currentProducts.length})</span>
            </button>

            {STORE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const catCount = currentProducts.filter((p) => p.categoryId === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-dmsans font-semibold whitespace-nowrap transition-all cursor-pointer min-h-[34px] sm:min-h-[38px] flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      : 'bg-[#080808] text-[#86868b] hover:text-white border border-white/[0.08]'
                  }`}
                >
                  <span className="font-jakarta font-semibold tracking-tight">{cat.name}</span>
                  <span className="text-[10px] opacity-60">({catCount})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty Search State */}
        {categorizedSections.length === 0 ? (
          <div className="py-14 text-center studio-card rounded-2xl max-w-md mx-auto p-6 space-y-3">
            <p className="text-white font-dmsans font-bold">No se encontraron productos</p>
            <p className="text-xs text-[#86868b]">
              No hay coincidencias para el término de búsqueda ingresado.
            </p>
            <button
              onClick={() => setActiveCategory('all')}
              className="btn-primary w-full sm:w-auto"
            >
              Ver todas las secciones
            </button>
          </div>
        ) : (
          /* SECTIONS: Clean layout with unified grid and 'Ver más' button */
          <div className="space-y-10 sm:space-y-16">
            {categorizedSections.map(({ category, products }) => {
              const isExpanded = !!expandedCategories[category.id];
              const displayedProducts = isExpanded ? products : products.slice(0, 5);
              const hasMore = products.length > 5;

              return (
                <div
                  key={category.id}
                  id={`seccion-${category.id}`}
                  className="space-y-4 sm:space-y-6 pt-5 border-t border-white/[0.08] first:border-t-0 first:pt-0"
                >
                  {/* Category Title Only - Clean without 01, 28 productos or catalogo abierto */}
                  <div className="flex items-center justify-between text-left">
                    <h3 className="font-jakarta text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {category.name}
                    </h3>
                  </div>

                  {/* UNIFIED PRODUCT GRID - All products stay in the same clean grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3.5">
                    {displayedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Ver más / Ver menos Button - Centered and clean */}
                  {hasMore && (
                    <div className="flex justify-center pt-2 sm:pt-4">
                      <button
                        onClick={() => toggleCategoryExpand(category.id)}
                        className="py-2.5 px-6 rounded-xl border border-white/20 hover:border-white/40 bg-[#0e0e12] hover:bg-[#181820] text-white text-xs font-dmsans font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95 group"
                      >
                        <span>{isExpanded ? 'Ver menos' : 'Ver más'}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
