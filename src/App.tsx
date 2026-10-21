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

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
