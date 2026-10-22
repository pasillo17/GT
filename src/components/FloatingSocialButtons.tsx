import React from 'react';
import { GIANITECH_CONTACT } from '../data/catalog';
import { Instagram, MessageCircle } from 'lucide-react';

export const FloatingSocialButtons: React.FC = () => {
  return (
    <div
      className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 pointer-events-auto"
      style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.6))' }}
    >
      {/* Botón Flotante Instagram */}
      <a
        href={GIANITECH_CONTACT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram Oficial Gianitech"
        title="Instagram Oficial Gianitech"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </a>

      {/* Botón Flotante WhatsApp */}
      <a
        href={`https://wa.me/${GIANITECH_CONTACT.whatsappDigits}?text=${encodeURIComponent(
          '¡Hola Gianitech! 👋 Me comunico desde la web oficial para consultar disponibilidad de productos y atención personalizada.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Oficial Gianitech"
        title="WhatsApp Oficial Gianitech"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
