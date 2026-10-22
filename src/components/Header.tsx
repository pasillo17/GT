import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Package,
  MapPin,
  Clock,
} from 'lucide-react';
import { GIANITECH_CONTACT } from '../data/catalog';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const {
    totalUnits,
    setIsCartOpen,
    setIsSearchOpen,
    currency,
    toggleCurrency,
    setChannel,
  } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#050505]/92 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:h-22">
            {/* Left: Official Gianitech Protagonist Monogram Brandmark */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('inicio');
              }}
              className="group focus:outline-none py-1.5 relative flex items-center cursor-pointer transition-transform active:scale-95"
              title="GIANITECH IMPORT — Inicio"
            >
              {/* Luxury Ambient Halo Glow behind logo */}
              <div className="absolute inset-0 -inset-x-3 bg-gradient-to-r from-white/[0.08] via-emerald-400/[0.05] to-transparent rounded-2xl blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <img
                src="/src/assets/images/gianitech_logo.png"
                alt="GIANITECH IMPORT"
                referrerPolicy="no-referrer"
                className="h-10 xs:h-11 sm:h-14 md:h-15 w-auto object-contain filter drop-shadow-[0_2px_14px_rgba(255,255,255,0.25)] group-hover:drop-shadow-[0_0_26px_rgba(255,255,255,0.55)] group-hover:scale-[1.04] transition-all duration-300 relative z-10 select-none"
              />
            </a>

            {/* Center: Desktop Navigation & Channel Switcher */}
            <div className="hidden lg:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                <button
                  onClick={() => handleNavClick('inicio')}
                  className="text-xs uppercase tracking-widest text-[#86868b] hover:text-white font-montserrat font-medium transition-colors py-2 cursor-pointer"
                >
                  Inicio
                </button>
                <button
                  onClick={() => handleNavClick('productos')}
                  className="text-xs uppercase tracking-widest text-[#86868b] hover:text-white font-montserrat font-medium transition-colors py-2 cursor-pointer"
                >
                  Catálogo
                </button>
                <button
                  onClick={() => handleNavClick('categorias')}
                  className="text-xs uppercase tracking-widest text-[#86868b] hover:text-white font-montserrat font-medium transition-colors py-2 cursor-pointer"
                >
                  Secciones
                </button>
                <button
                  onClick={() => handleNavClick('contacto')}
                  className="text-xs uppercase tracking-widest text-[#86868b] hover:text-white font-montserrat font-medium transition-colors py-2 cursor-pointer"
                >
                  Showroom
                </button>
                <button
                  onClick={() => {
                    setChannel('mayorista');
                    handleNavClick('productos');
                  }}
                  className="text-xs uppercase tracking-wider font-montserrat font-bold py-1.5 px-3 rounded-lg bg-white/[0.08] hover:bg-white text-white hover:text-black border border-white/20 transition-all cursor-pointer shadow-sm active:scale-95 ml-2"
                >
                  Catálogo Mayorista
                </button>
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 sm:gap-2">

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:p-2.5 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
                aria-label="Buscar productos"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </button>

              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] text-white transition-all focus:outline-none active:scale-95 min-h-[38px] sm:min-h-[40px] cursor-pointer"
                aria-label="Ver carrito"
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.75]" />
                <span className="text-xs font-dmsans font-bold tabular-nums">
                  {totalUnits}
                </span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Menú principal"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-30 bg-[#080808]/98 backdrop-blur-2xl px-6 py-6 overflow-y-auto space-y-6 animate-in slide-in-from-top-2 border-b border-white/[0.1]">
          {/* Brand header in mobile drawer */}
          <div className="flex items-center justify-center pb-4 border-b border-white/[0.08]">
            <img
              src="/src/assets/images/gianitech_logo.png"
              alt="GIANITECH IMPORT"
              className="h-12 w-auto object-contain filter drop-shadow-[0_0_16px_rgba(255,255,255,0.35)]"
            />
          </div>



          {/* Main Navigation links */}
          <div className="space-y-1">
            <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-[#86868b] font-semibold">
              Secciones
            </span>
            <nav className="flex flex-col space-y-3 pt-2">
              <button
                onClick={() => {
                  setChannel('mayorista');
                  handleNavClick('productos');
                }}
                className="w-full py-3 px-4 rounded-xl bg-white text-black font-dmsans text-sm font-bold flex items-center justify-between shadow-lg"
              >
                <span>Catálogo Mayorista</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
              <button
                onClick={() => handleNavClick('inicio')}
                className="text-left text-lg font-heading font-bold text-white hover:text-zinc-300 py-1 flex items-center justify-between"
              >
                <span>Inicio</span>
                <ArrowRight className="w-4 h-4 text-[#86868b]" />
              </button>
              <button
                onClick={() => handleNavClick('productos')}
                className="text-left text-lg font-heading font-bold text-white hover:text-zinc-300 py-1 flex items-center justify-between"
              >
                <span>Catálogo Completo</span>
                <ArrowRight className="w-4 h-4 text-[#86868b]" />
              </button>
              <button
                onClick={() => handleNavClick('categorias')}
                className="text-left text-lg font-heading font-bold text-white hover:text-zinc-300 py-1 flex items-center justify-between"
              >
                <span>Categorías & Destacados</span>
                <ArrowRight className="w-4 h-4 text-[#86868b]" />
              </button>
              <button
                onClick={() => handleNavClick('contacto')}
                className="text-left text-lg font-heading font-bold text-white hover:text-zinc-300 py-1 flex items-center justify-between"
              >
                <span>Showroom Espacio Dual</span>
                <ArrowRight className="w-4 h-4 text-[#86868b]" />
              </button>
            </nav>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2 text-left">
            <div className="text-xs font-dmsans font-bold text-white flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Atención Directa Gianitech</span>
            </div>
            <p className="text-[11px] text-[#86868b] leading-relaxed">
              ¿Tenés dudas sobre las listas de precios o querés coordinar retiro en La Plata? Hablá directamente con nosotros.
            </p>
            <a
              href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent('¡Hola Gianitech! 👋 Quiero consultar por disponibilidad y precios del catálogo.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-2.5 px-3 rounded-lg bg-white text-black font-dmsans font-bold text-xs flex items-center justify-center gap-1.5"
            >
              <span>Abrir WhatsApp Oficial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Showroom location snippet */}
          <div className="text-left text-[11px] text-[#86868b] space-y-1">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>{GIANITECH_CONTACT.showroom}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{GIANITECH_CONTACT.hours}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
