import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoryBannerProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryBanner: React.FC<CategoryBannerProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-12 sm:py-20 lg:py-24 bg-[#050505] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 text-left">
          <div>
            <span className="text-[10px] sm:text-[11px] font-montserrat uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#86868b] font-semibold">
              Destacados & Categorías
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
              Innovación en cada categoría.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#86868b] font-inter max-w-sm">
            Explorá nuestra curaduría de perfumería importada, tecnología Apple y Stanley original.
          </p>
        </div>

        {/* Editorial Asymmetric Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
          {/* BANNER 1 — Tecnología / Apple & PS5 */}
          <div className="lg:col-span-12 group relative rounded-2xl overflow-hidden studio-card min-h-[360px] sm:min-h-[460px] flex flex-col justify-end p-5 sm:p-12 text-left">
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/hero_iphone_flagship_1792121376351.jpg"
                alt="Tecnología Banner"
                className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 sm:via-[#050505]/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent hidden md:block" />
            </div>

            <div className="relative z-10 max-w-xl space-y-2.5 sm:space-y-4">
              <span className="text-[9.5px] sm:text-[11px] font-montserrat uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#d1d1d6] font-semibold">
                LOS MÁS BUSCADOS
              </span>
              <h3 className="font-jakarta text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.025em] leading-[0.98]">
                Potencia en cada detalle.
              </h3>
              <p className="text-xs sm:text-base text-[#a1a1a6] font-inter font-normal leading-relaxed max-w-md">
                iPhones sellados, consolas PlayStation 5, parlantes JBL y cargadores oficiales con stock inmediato y entrega garantizada.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onSelectCategory('tecnologia')}
                  className="btn-primary w-full sm:w-auto min-h-[44px] group/btn cursor-pointer"
                >
                  <span>VER TECNOLOGÍA</span>
                  <span className="arrow-icon group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* BANNER 2 — Perfumería Árabe & Nicho */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden studio-card min-h-[340px] sm:min-h-[440px] flex flex-col justify-end p-5 sm:p-10 text-left">
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/category_perfumes_arabic_1792101869766.jpg"
                alt="Perfumes Árabes Banner"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 sm:via-[#050505]/75 to-transparent" />
            </div>

            <div className="relative z-10 space-y-2.5">
              <span className="text-[9.5px] sm:text-[11px] font-montserrat uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#d1d1d6] font-semibold">
                FRAGANCIAS ORIENTALES
              </span>
              <h3 className="font-jakarta text-xl sm:text-4xl font-extrabold text-white tracking-[-0.025em]">
                Línea Árabe & Diseñador.
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1a6] font-inter max-w-sm">
                Afnan 9PM, Lattafa Khamrah, Asad, Bharara King, Jean Paul Gaultier y Xerjoff con probadores en Espacio Dual.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onSelectCategory('perfumes-arabes')}
                  className="btn-primary w-full sm:w-auto min-h-[44px] group/btn cursor-pointer"
                >
                  <span>EXPLORAR PERFUMES</span>
                  <span className="arrow-icon group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* BANNER 3 — Stanley Original & Bazar */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden studio-card min-h-[340px] sm:min-h-[440px] flex flex-col justify-end p-5 sm:p-10 text-left">
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/product_stanley_tumbler_1792102623116.jpg"
                alt="Stanley Original Banner"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 sm:via-[#050505]/75 to-transparent" />
            </div>

            <div className="relative z-10 space-y-2.5">
              <span className="text-[9.5px] sm:text-[11px] font-montserrat uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[#d1d1d6] font-semibold">
                BAZAR TÉRMICO DE ALTA GAMA
              </span>
              <h3 className="font-jakarta text-xl sm:text-4xl font-extrabold text-white tracking-[-0.025em]">
                Stanley Original & Kits.
              </h3>
              <p className="text-xs sm:text-sm text-[#a1a1a6] font-inter max-w-sm">
                Termos Mate System 1.2L, vasos Quencher y sets completos de mate con escalas por bulto cerrado y por menor.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onSelectCategory('stanley-original')}
                  className="btn-primary w-full sm:w-auto min-h-[44px] group/btn cursor-pointer"
                >
                  <span>VER STANLEY & BAZAR</span>
                  <span className="arrow-icon group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
