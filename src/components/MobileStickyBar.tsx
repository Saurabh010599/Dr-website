import React from 'react';
import { Phone, Calendar, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/ayurvedaData';

interface MobileStickyBarProps {
  onOpenAppointment: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenAppointment }) => {
  return (
    <aside aria-label="Quick booking and call actions" className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#2D6A4F]/20 p-2.5 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-2">
        {/* Call Now Button */}
        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="py-3 px-3 rounded-xl bg-[#FAF7F2] border border-[#2D6A4F]/30 text-[#0F2E22] text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>Call Now</span>
        </a>

        {/* Book Appointment Button */}
        <button
          onClick={onOpenAppointment}
          className="py-3 px-3 rounded-xl bg-gradient-to-r from-[#0F2E22] to-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#DFBE7A]" />
          <span>Book Appointment</span>
        </button>
      </div>
    </aside>
  );
};
