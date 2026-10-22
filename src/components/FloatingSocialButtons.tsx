import React from 'react';
import { GIANITECH_CONTACT } from '../data/catalog';
import { MessageCircle } from 'lucide-react';

export const FloatingSocialButtons: React.FC = () => {
  return (
    <div
      className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 pointer-events-auto"
      style={{ filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.6))' }}
    >
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
