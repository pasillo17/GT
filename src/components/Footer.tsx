import React from 'react';
import { GIANITECH_CONTACT, STORE_CATEGORIES } from '../data/catalog';
import { useCart } from '../context/CartContext';
import { MessageCircle, Instagram, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const { channel, setChannel } = useCart();

  return (
    <footer id="contacto" className="bg-[#050505] border-t border-white/[0.08] text-left pt-12 sm:pt-16 pb-28 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <a
              href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(
                `¡Hola Gianitech! 👋 Los contacto desde el pie de página de su catálogo oficial para consultar disponibilidad de productos y medios de pago.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group cursor-pointer focus:outline-none transition-transform hover:scale-[1.01]"
              title="Escribir a Gianitech Oficial por WhatsApp"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.12] group-hover:border-emerald-500/40 p-2 shadow-[0_0_15px_rgba(255,255,255,0.06)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                <img
                  src="/src/assets/images/gianitech_logo.png"
                  alt="Gianitech Oficial Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors leading-none">
                    GIANITECH
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                </div>
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#86868b] uppercase font-montserrat mt-1 group-hover:text-emerald-400 transition-colors">
                  IMPORTADOS · WHATSAPP DIRECTO
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#86868b] font-inter max-w-sm leading-relaxed">
              Catálogo oficial de tecnología Apple, smartphones de alta gama, consolas, perfumería importada y accesorios de vanguardia.
            </p>

          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d1d1d6] font-montserrat font-bold">
              Navegación
            </h4>
            <div className="space-y-2 text-xs text-[#86868b] font-inter">
              <button
                onClick={() => onNavigate('productos')}
                className="block text-left py-1 hover:text-white transition-colors cursor-pointer"
              >
                • Ver Catálogo Completo
              </button>
              <button
                onClick={() => onNavigate('categorias')}
                className="block text-left py-1 hover:text-white transition-colors cursor-pointer"
              >
                • Secciones & Categorías
              </button>
              <button
                onClick={() => onNavigate('inicio')}
                className="block text-left py-1 hover:text-white transition-colors cursor-pointer"
              >
                • Inicio
              </button>
              <button
                onClick={() => onNavigate('contacto')}
                className="block text-left py-1 hover:text-white transition-colors"
              >
                • Showroom Espacio Dual
              </button>
            </div>
          </div>

          {/* Categories Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d1d1d6] font-montserrat font-bold">
              Categorías
            </h4>
            <ul className="space-y-1.5 text-xs text-[#86868b] font-inter">
              {STORE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onSelectCategory(cat.id)}
                    className="hover:text-white transition-colors py-0.5 block text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d1d1d6] font-montserrat font-bold">
              Showroom Espacio Dual
            </h4>
            <div className="space-y-2 text-xs text-[#86868b] font-inter">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <span className="text-zinc-200">{GIANITECH_CONTACT.showroom}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <span>{GIANITECH_CONTACT.hours}</span>
              </div>
              <div className="pt-1 text-[11px] text-zinc-400">
                Probadores disponibles para fragancias árabes y diseñador en showroom. Retiro inmediato o despacho seguro a todo el país.
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Legal Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#86868b] font-inter text-center sm:text-left">
          <span>© {new Date().getFullYear()} GIANITECH IMPORTADOS. Catálogo Oficial.</span>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Showroom Espacio Dual</span>
            <span>·</span>
            <span>La Plata, Buenos Aires</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
