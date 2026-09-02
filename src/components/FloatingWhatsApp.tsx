import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/ayurvedaData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col items-end">
      {/* Tooltip */}
      {showTooltip && (
        <div className="mb-2 p-3 rounded-2xl bg-white shadow-xl border border-emerald-200 text-xs text-gray-800 max-w-[220px] relative animate-in fade-in slide-in-from-bottom-2 duration-300 hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 flex items-center justify-center text-[10px]"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-[#0F2E22] mb-0.5">Need Ayurvedic Advice?</p>
          <p className="text-[11px] text-gray-600 font-light">
            Chat directly with Dr. Kuldiwar's clinic on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsappPhone}?text=Hello%20Dr.%20Kuldiwar's%20Ayurveda%20Center,%20I%20would%20like%20to%20inquire%20about%20treatment%20and%20consultation`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all relative group border-2 border-white"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 82375 10466)"
      >
        {/* Pulsing Green Wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
      </a>
    </div>
  );
};
