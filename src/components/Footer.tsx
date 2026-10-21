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

            {/* Direct Contact Buttons */}
            <div className="pt-1 space-y-2.5">
              <a
                href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(
                  `¡Hola Gianitech! 👋 Quiero consultar stock y cotización para compras del catálogo ${channel === 'mayorista' ? 'Mayorista (5u+)' : 'Minorista'}. ¿Tienen disponibilidad inmediata?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-white transition-all flex items-center justify-center gap-2 font-dmsans text-xs group active:scale-98 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-emerald-300">WhatsApp Oficial: {GIANITECH_CONTACT.whatsapp}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <a
                  href={GIANITECH_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-dmsans"
                >
                  {GIANITECH_CONTACT.instagram}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d1d1d6] font-montserrat font-bold">
              Catálogos Activos
            </h4>
            <div className="space-y-2 text-xs text-[#86868b] font-inter">
              <button
                onClick={() => {
                  setChannel('minorista');
                  onNavigate('productos');
                }}
                className={`block text-left py-1 transition-colors ${
                  channel === 'minorista' ? 'text-white font-bold' : 'hover:text-white'
                }`}
              >
                • Catálogo Minorista (1u - 6 Cuotas / Efectivo)
              </button>
              <button
                onClick={() => {
                  setChannel('mayorista');
                  onNavigate('productos');
                }}
                className={`block text-left py-1 transition-colors ${
                  channel === 'mayorista' ? 'text-white font-bold' : 'hover:text-white'
                }`}
              >
                • Catálogo Mayorista (Escalas 5u, 10u, 30u)
              </button>
              <button
                onClick={() => onNavigate('inicio')}
                className="block text-left py-1 hover:text-white transition-colors"
              >
                • Inicio & Banners
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

        {/* WhatsApp VIP Card "Abajo de Todo" */}
        <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0d0d12] to-emerald-950/30 border border-emerald-500/25 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-[0_0_35px_rgba(16,185,129,0.08)]">
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
              <MessageCircle className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h5 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">
                ¿Tenés dudas o buscás un producto en particular?
              </h5>
              <p className="text-xs sm:text-sm text-[#86868b] font-inter mt-0.5 max-w-xl">
                Escribinos directamente al WhatsApp oficial. Te asesoramos al instante con fotos reales, stock actualizado y opciones de pago.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(
              `¡Hola Gianitech! 👋 Me encuentro al final del catálogo y me gustaría hacerles una consulta personalizada sobre disponibilidad de stock y envíos.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-dmsans text-xs sm:text-sm font-bold transition-all shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] active:scale-95 shrink-0 cursor-pointer"
            title="Escribir a WhatsApp con mensaje personalizado"
          >
            <MessageCircle className="w-4 h-4 fill-black text-black" />
            <span>Chatear por WhatsApp</span>
          </a>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-[#86868b] font-inter text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} GIANITECH IMPORTADOS. Catálogo Oficial.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <a
              href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(
                `¡Hola Gianitech! 👋 Los contacto desde el final de la web para consultar disponibilidad de productos.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-dmsans font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Directo: {GIANITECH_CONTACT.whatsapp}</span>
            </a>
          </div>
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
