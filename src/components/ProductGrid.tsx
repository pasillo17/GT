import React, { useState, useMemo } from 'react';
import { ALL_PRODUCTS, DualProduct, STORE_CATEGORIES, CategoryInfo } from '../data/catalog';
import { useCart } from '../context/CartContext';
import { ProductCard } from './ProductCard';
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  BookOpen,
  Search,
  X,
  Filter,
} from 'lucide-react';

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
  const { channel, setChannel } = useCart();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [categorySubSearch, setCategorySubSearch] = useState<Record<string, string>>({});
  const [categoryBrandFilter, setCategoryBrandFilter] = useState<Record<string, string>>({});

  const toggleCategoryExpand = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const expandAll = () => {
    const allExp: Record<string, boolean> = {};
    STORE_CATEGORIES.forEach((c) => {
      allExp[c.id] = true;
    });
    setExpandedCategories(allExp);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  const isAllExpanded = useMemo(() => {
    return STORE_CATEGORIES.every((c) => !!expandedCategories[c.id]);
  }, [expandedCategories]);

  const currentChannelProducts = useMemo(() => {
    return channel === 'minorista'
      ? ALL_PRODUCTS.filter((p) => !p.wholesaleOnly)
      : ALL_PRODUCTS;
  }, [channel]);

  // Group products by category
  const categorizedSections = useMemo(() => {
    const query = searchFilter.toLowerCase().trim();

    return STORE_CATEGORIES.map((cat, index) => {
      let catProducts = currentChannelProducts.filter((p) => p.categoryId === cat.id);

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

      // Extract unique brands for filtering
      const brands = Array.from(new Set(catProducts.map((p) => p.brand))).filter(Boolean);

      return {
        category: cat,
        sectionIndex: index + 1,
        products: sorted,
        brands,
      };
    }).filter((group) => {
      if (activeCategory !== 'all' && group.category.id !== activeCategory) {
        return false;
      }
      return group.products.length > 0;
    });
  }, [activeCategory, searchFilter, currentChannelProducts]);

  return (
    <section id="productos" className="py-8 sm:py-16 bg-[#050505] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        
        {/* Main Section Header - Mobile First, Clean & Focused */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left border-b border-white/[0.08] pb-5 sm:pb-7">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-montserrat text-[#86868b] font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span>GIANITECH · CATÁLOGO OFICIAL</span>
              <span>·</span>
              <span className="text-zinc-300 font-bold">PRECIOS EN PESOS ARS & DÓLARES USD</span>
            </div>

            <h2 className="font-jakarta text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              {channel === 'minorista' ? 'Catálogo Minorista' : 'Catálogo Mayorista'}
            </h2>

            <p className="text-[11px] sm:text-xs text-[#86868b] font-inter max-w-xl">
              {channel === 'minorista'
                ? `Compra unitaria con cotización en efectivo, transferencia bancaria y 6 cuotas en ARS y USD (${currentChannelProducts.length} productos).`
                : `Venta por mayor con escalas por 5u, 10u y 30u en Dólares USD y Pesos ARS (${currentChannelProducts.length} productos en stock).`}
            </p>
          </div>

          {/* Controls: Mode Switcher & Expand All */}
          <div className="flex items-center gap-2 pt-1 sm:pt-0 self-stretch sm:self-end justify-between sm:justify-end">
            {/* Minorista / Mayorista Toggle */}
            <div className="inline-flex items-center p-0.5 rounded-xl bg-[#0e0e11] border border-white/[0.1] shadow-inner flex-1 sm:flex-none">
              <button
                onClick={() => setChannel('minorista')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-dmsans font-bold transition-all cursor-pointer text-center ${
                  channel === 'minorista'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                Minorista (1u)
              </button>
              <button
                onClick={() => setChannel('mayorista')}
                className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-dmsans font-bold transition-all cursor-pointer text-center ${
                  channel === 'mayorista'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-[#86868b] hover:text-white'
                }`}
              >
                Mayorista (5u+)
              </button>
            </div>

            {/* Expand / Collapse Master Button */}
            <button
              onClick={isAllExpanded ? collapseAll : expandAll}
              className="px-3 py-1.5 rounded-xl bg-[#0e0e11] hover:bg-[#181820] border border-white/[0.12] text-xs font-dmsans font-bold text-white transition-all flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm"
              title={isAllExpanded ? 'Colapsar todas las secciones' : 'Ver catálogo completo de todas las secciones'}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xs:inline">{isAllExpanded ? 'Solo Top 5' : 'Ver Todo'}</span>
            </button>
          </div>
        </div>

        {/* Categories Navigation Strip - Clean horizontal scroll on mobile */}
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
              <span>Todos ({currentChannelProducts.length})</span>
            </button>

            {STORE_CATEGORIES.map((cat, idx) => {
              const isActive = activeCategory === cat.id;
              const catCount = currentChannelProducts.filter((p) => p.categoryId === cat.id).length;
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
                  <span className="text-[10px] text-zinc-500 font-mono">0{idx + 1}</span>
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
          /* SECTIONS: Clean Mobile First Layout with Top 5 + Compact Expand */
          <div className="space-y-10 sm:space-y-16">
            {categorizedSections.map(({ category, sectionIndex, products, brands }) => {
              const isExpanded = !!expandedCategories[category.id];
              const top5Products = products.slice(0, 5);

              // Apply sub-filters inside expanded category
              const subQuery = (categorySubSearch[category.id] || '').toLowerCase().trim();
              const activeBrand = categoryBrandFilter[category.id] || 'ALL';

              let fullCatalogList = products;
              if (subQuery) {
                fullCatalogList = fullCatalogList.filter(
                  (p) =>
                    p.name.toLowerCase().includes(subQuery) ||
                    p.brand.toLowerCase().includes(subQuery) ||
                    (p.variant && p.variant.toLowerCase().includes(subQuery))
                );
              }
              if (activeBrand !== 'ALL') {
                fullCatalogList = fullCatalogList.filter((p) => p.brand === activeBrand);
              }

              return (
                <div
                  key={category.id}
                  id={`seccion-${category.id}`}
                  className="space-y-4 sm:space-y-6 pt-5 border-t border-white/[0.08] first:border-t-0 first:pt-0"
                >
                  {/* Category Section Header - Uncluttered, Mobile Organized */}
                  <div className="flex items-end justify-between gap-3 text-left">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-zinc-300">
                          0{sectionIndex}
                        </span>
                        <span className="text-[10.5px] font-dmsans font-semibold text-emerald-400">
                          {products.length} productos
                        </span>
                      </div>

                      <h3 className="font-jakarta text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight">
                        {category.name}
                      </h3>
                    </div>

                    {/* Compact Mode Pill */}
                    <button
                      onClick={() => toggleCategoryExpand(category.id)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-dmsans font-semibold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                        isExpanded
                          ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                          : 'bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-zinc-300 hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{isExpanded ? 'Catálogo Abierto' : 'Top 5'}</span>
                    </button>
                  </div>

                  {/* Top 5 Destacados Showcase */}
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3.5">
                      {top5Products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>

                  {/* BOTÓN VER CATÁLOGO COMPLETO (COMPACTO Y LIMPIO) */}
                  <div className="pt-1">
                    {!isExpanded ? (
                      /* Botón compacto y centrado, sin texto publicitario arriba */
                      <div className="flex items-center justify-center pt-2">
                        <button
                          onClick={() => toggleCategoryExpand(category.id)}
                          className="py-2 px-5 rounded-xl border border-white/20 hover:border-emerald-500/50 bg-[#0e0e12] hover:bg-[#14141c] text-white text-xs font-dmsans font-semibold flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-[0_0_20px_rgba(16,185,129,0.18)] active:scale-95 cursor-pointer group"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Ver catálogo completo ({products.length})</span>
                          <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    ) : (
                      /* Catálogo Completo Desplegado */
                      <div className="rounded-2xl p-3.5 sm:p-6 bg-[#09090c] border border-emerald-500/25 space-y-4 shadow-[0_0_35px_rgba(16,185,129,0.05)] animate-in fade-in duration-300">
                        {/* Header & Sub-Buscador */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                          <div>
                            <div className="text-xs font-bold text-white">
                              Catálogo Completo: {category.name}
                            </div>
                            <div className="text-[10.5px] text-[#86868b]">
                              Mostrando {fullCatalogList.length} de {products.length} productos
                            </div>
                          </div>

                          {/* Buscador dentro de la sección */}
                          <div className="flex items-center gap-2">
                            <div className="relative flex-1 sm:w-64">
                              <Search className="w-3 h-3 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                              <input
                                type="text"
                                placeholder={`Buscar en ${category.name}...`}
                                value={categorySubSearch[category.id] || ''}
                                onChange={(e) =>
                                  setCategorySubSearch((prev) => ({
                                    ...prev,
                                    [category.id]: e.target.value,
                                  }))
                                }
                                className="w-full bg-[#121216] border border-white/[0.1] rounded-xl pl-8 pr-7 py-1.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 font-inter"
                              />
                              {categorySubSearch[category.id] && (
                                <button
                                  onClick={() =>
                                    setCategorySubSearch((prev) => ({
                                      ...prev,
                                      [category.id]: '',
                                    }))
                                  }
                                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              )}
                            </div>

                            <button
                              onClick={() => toggleCategoryExpand(category.id)}
                              className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-xs font-dmsans font-semibold text-zinc-300 hover:text-white flex items-center gap-1 cursor-pointer whitespace-nowrap"
                            >
                              <ChevronUp className="w-3.5 h-3.5" />
                              <span className="hidden xs:inline">Cerrar</span>
                            </button>
                          </div>
                        </div>

                        {/* Brand Filter Pills if multiple brands */}
                        {brands.length > 1 && (
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                            <span className="text-[10px] uppercase font-montserrat font-bold text-zinc-500 mr-1 flex items-center gap-1">
                              <Filter className="w-3 h-3" /> Marca:
                            </span>
                            <button
                              onClick={() =>
                                setCategoryBrandFilter((prev) => ({
                                  ...prev,
                                  [category.id]: 'ALL',
                                }))
                              }
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-dmsans font-semibold transition-all cursor-pointer whitespace-nowrap ${
                                activeBrand === 'ALL'
                                  ? 'bg-white text-black font-bold'
                                  : 'bg-white/[0.04] text-[#86868b] hover:text-white border border-white/[0.06]'
                              }`}
                            >
                              Todas ({products.length})
                            </button>
                            {brands.map((b) => {
                              const count = products.filter((p) => p.brand === b).length;
                              return (
                                <button
                                  key={b}
                                  onClick={() =>
                                    setCategoryBrandFilter((prev) => ({
                                      ...prev,
                                      [category.id]: b,
                                    }))
                                  }
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-dmsans font-semibold transition-all cursor-pointer whitespace-nowrap ${
                                    activeBrand === b
                                      ? 'bg-white text-black font-bold'
                                      : 'bg-white/[0.04] text-[#86868b] hover:text-white border border-white/[0.06]'
                                  }`}
                                >
                                  {b} ({count})
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Grid con todos los productos */}
                        {fullCatalogList.length === 0 ? (
                          <div className="py-8 text-center text-zinc-500 text-xs font-dmsans space-y-2">
                            <p>No se encontraron modelos con el filtro seleccionado.</p>
                            <button
                              onClick={() => {
                                setCategorySubSearch((prev) => ({ ...prev, [category.id]: '' }));
                                setCategoryBrandFilter((prev) => ({ ...prev, [category.id]: 'ALL' }));
                              }}
                              className="text-white underline font-semibold cursor-pointer"
                            >
                              Restablecer filtros
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3.5">
                            {fullCatalogList.map((product) => (
                              <ProductCard key={product.id} product={product} />
                            ))}
                          </div>
                        )}

                        {/* Botón inferior de colapso */}
                        <div className="flex items-center justify-center pt-3 border-t border-white/[0.08]">
                          <button
                            onClick={() => toggleCategoryExpand(category.id)}
                            className="py-2 px-5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.15] text-zinc-300 hover:text-white text-xs font-dmsans font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 group"
                          >
                            <ChevronUp className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform" />
                            <span>Ver menos (solo Top 5)</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
