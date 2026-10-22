import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShieldCheck, MapPin, Clock, MessageCircle, Instagram } from 'lucide-react';
import { GIANITECH_CONTACT } from '../data/catalog';

export const UserCareModal: React.FC = () => {
  const { isUserModalOpen, setIsUserModalOpen, channel } = useCart();

  if (!isUserModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto text-left">
      <div
        onClick={() => setIsUserModalOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
        <div className="relative w-full max-w-lg transform overflow-hidden rounded-t-2xl sm:rounded-2xl bg-[#080808] border-t sm:border border-white/[0.12] p-5 sm:p-8 text-left shadow-2xl transition-all space-y-5 max-h-[90vh] overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 sm:pb-4">
            <div>
              <span className="text-[9.5px] sm:text-[10px] font-montserrat uppercase tracking-[0.22em] text-[#86868b] font-semibold">
                Atención Oficial
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                Gianitech Import Concierge
              </h3>
            </div>
            <button
              onClick={() => setIsUserModalOpen(false)}
              className="p-2 rounded-lg text-[#86868b] hover:text-white hover:bg-white/[0.05] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 text-xs font-inter text-[#a1a1a6]">
            {/* Showroom & Hours */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08] space-y-1.5 sm:space-y-2">
              <div className="font-dmsans font-bold text-white flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-zinc-300" />
                <span>Showroom Espacio Dual (La Plata)</span>
              </div>
              <p className="text-zinc-300 font-medium leading-relaxed">
                {GIANITECH_CONTACT.showroom}
              </p>
              <div className="flex items-center gap-2 text-[#86868b] pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{GIANITECH_CONTACT.hours}</span>
              </div>
            </div>

            {/* Contact Gianitech */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08] space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.1] p-1 flex items-center justify-center">
                  <img
                    src="/src/assets/images/gianitech_logo.png"
                    alt="Gianitech"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
                  />
                </div>
                <div className="font-heading text-sm font-bold text-white">
                  GIANITECH IMPORT
                </div>
              </div>
              <div className="text-[11px] text-[#86868b] space-y-1">
                <div>WhatsApp Oficial: {GIANITECH_CONTACT.whatsapp}</div>
                <div>Instagram Oficial: {GIANITECH_CONTACT.instagram}</div>
              </div>
              <div className="pt-1 flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(`Hola Gianitech! Quiero consultar stock y disponibilidad de productos del catálogo.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-white text-black font-dmsans text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Gianitech</span>
                </a>

                <a
                  href={GIANITECH_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg border border-white/[0.15] hover:border-white/30 text-white font-dmsans text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Official Warranty & Shipping */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0c0c0e] border border-white/[0.08] space-y-1.5">
              <div className="font-dmsans font-bold text-white flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Originales Garantizados & Envíos al País</span>
              </div>
              <p className="text-[#86868b] leading-relaxed">
                Todos los productos cuentan con empaque original sellado. Despachamos a todas las provincias argentinas con seguro o retiro coordinado en Espacio Dual (La Plata).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
