import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  MapPin,
  Clock,
  Package,
} from 'lucide-react';
import { GIANITECH_CONTACT } from '../data/catalog';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const {
    totalUnits,
    setIsCartOpen,
    favorites,
    setIsFavoritesOpen,
    setIsSearchOpen,
    setIsUserModalOpen,
    currency,
    toggleCurrency,
    channel,
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
          <div className="flex items-center justify-between h-14 sm:h-20">
            {/* Left: Official Gianitech Brand Logo */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('inicio');
              }}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none py-1"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.12] p-1.5 group-hover:border-white/30 transition-all shadow-[0_0_15px_rgba(255,255,255,0.06)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.18)]">
                <img
                  src="/src/assets/images/gianitech_logo.png"
                  alt="Logo Oficial Gianitech Import"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors leading-none">
                  GIANITECH
                </span>
                <span className="text-[7.5px] sm:text-[9px] tracking-[0.28em] text-[#86868b] uppercase font-montserrat mt-0.5 group-hover:text-zinc-400 transition-colors">
                  IMPORTADOS
                </span>
              </div>
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

              {/* User / Care Icon */}
              <button
                onClick={() => setIsUserModalOpen(true)}
                className="p-2 sm:p-2.5 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[40px] min-w-[40px] hidden sm:flex items-center justify-center cursor-pointer"
                aria-label="Atención al cliente y garantía"
              >
                <User className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
              </button>

              {/* Favorites Icon */}
              <button
                onClick={() => setIsFavoritesOpen(true)}
                className="relative p-2 sm:p-2.5 text-[#86868b] hover:text-white transition-colors focus:outline-none min-h-[40px] min-w-[40px] hidden sm:flex items-center justify-center cursor-pointer"
                aria-label="Ver favoritos"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                {favorites.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]" />
                )}
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
        <div className="lg:hidden fixed inset-x-0 top-14 bottom-0 z-30 bg-[#080808]/98 backdrop-blur-2xl px-6 py-6 overflow-y-auto space-y-6 animate-in slide-in-from-top-2 border-b border-white/[0.1]">
          {/* Brand header in mobile drawer */}
          <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08]">
            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.12] p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.08)]">
              <img
                src="/src/assets/images/gianitech_logo.png"
                alt="Gianitech Import"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-lg font-bold tracking-tight text-white leading-none">
                GIANITECH
              </span>
              <span className="text-[8px] tracking-[0.25em] text-[#86868b] uppercase font-montserrat mt-1">
                IMPORTADOS · OFICIAL
              </span>
            </div>
          </div>



          {/* Main Navigation links */}
          <div className="space-y-1">
            <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-[#86868b] font-semibold">
              Secciones
            </span>
            <nav className="flex flex-col space-y-3 pt-2">
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

          {/* Quick Shortcuts */}
          <div className="pt-2 border-t border-white/[0.08] space-y-3">
            <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-[#86868b] font-semibold">
              Accesos Rápidos
            </span>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsFavoritesOpen(true);
                }}
                className="p-3 rounded-xl bg-[#0c0c0e] border border-white/[0.08] text-left flex items-center gap-2 text-xs text-white"
              >
                <Heart className="w-4 h-4 text-[#86868b]" />
                <span>Favoritos ({favorites.length})</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsUserModalOpen(true);
                }}
                className="p-3 rounded-xl bg-[#0c0c0e] border border-white/[0.08] text-left flex items-center gap-2 text-xs text-white"
              >
                <ShieldCheck className="w-4 h-4 text-[#86868b]" />
                <span>Garantía & FAQ</span>
              </button>
            </div>
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
              href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(`Hola Gianitech! Quiero consultar por el catálogo ${channel}.`)}`}
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
