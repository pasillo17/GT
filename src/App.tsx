import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { ChannelSelectorBar } from './components/ChannelSelectorBar';
import { Hero } from './components/Hero';
import { LiveTickerBar } from './components/LiveTickerBar';
import { CategoryBanner } from './components/CategoryBanner';
import { ProductGrid } from './components/ProductGrid';
import { PromotionalBanner } from './components/PromotionalBanner';
import { BenefitsSection } from './components/BenefitsSection';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';
import { FavoritesModal } from './components/FavoritesModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SearchModal } from './components/SearchModal';
import { UserCareModal } from './components/UserCareModal';
import { MobileBottomNav } from './components/MobileBottomNav';

function MainApp() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromBanner = (catId: string) => {
    setActiveCategory(catId);
    scrollToSection('productos');
  };

  return (
    <div className="min-h-screen bg-obsidian-canvas text-[#f5f5f7] flex flex-col font-inter selection:bg-white selection:text-black">
      {/* Encabezado y Navegación Principal */}
      <Header onNavigate={scrollToSection} />

      {/* Selector de Catálogo Minorista / Mayorista */}
      <ChannelSelectorBar />

      <main className="flex-1">
        {/* Hero Principal */}
        <Hero
          onExploreProducts={() => scrollToSection('productos')}
          onExploreOffers={() => scrollToSection('categorias')}
        />

        {/* Live Scrolling Trust Ticker */}
        <LiveTickerBar />

        {/* Sección de Categorías y Destacados */}
        <CategoryBanner onSelectCategory={handleSelectCategoryFromBanner} />

        {/* Sección de Productos / Catálogo con Precios Duales */}
        <ProductGrid
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchFilter={searchFilter}
        />

        {/* Banner Promocional */}
        <div id="ofertas-promo">
          <PromotionalBanner
            onViewOffers={() => {
              setActiveCategory('all');
              scrollToSection('productos');
            }}
          />
        </div>

        {/* Filosofía Comercial */}
        <BenefitsSection />
      </main>

      {/* Pie de Página */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleSelectCategoryFromBanner}
      />

      {/* Mobile Fixed Bottom Dock */}
      <MobileBottomNav onNavigate={scrollToSection} />

      {/* Interactive Modals & Drawers */}
      <ShoppingCart />
      <FavoritesModal />
      <ProductQuickViewModal />
      <SearchModal onSelectProduct={(id) => {}} />
      <UserCareModal />
    </div>
  );
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    try {
      localStorage.clear();
    } catch {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-[#0c0c0e] border border-white/10 shadow-2xl space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <span className="text-xl font-bold">GT</span>
            </div>
            <h1 className="text-xl font-bold font-heading">Gianitech Importados</h1>
            <p className="text-xs text-zinc-400">
              Ocurrió un error al cargar la vista del catálogo. Tocá el botón para restaurar y abrir la tienda:
            </p>
            <button
              onClick={this.handleReset}
              className="w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all cursor-pointer"
            >
              Reiniciar y Cargar Catálogo
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </ErrorBoundary>
  );
}
