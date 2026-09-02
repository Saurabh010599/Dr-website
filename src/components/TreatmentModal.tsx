import React from 'react';
import { X, CheckCircle2, Clock, Leaf, ShieldCheck, Sparkles, Calendar, Phone, ArrowRight } from 'lucide-react';
import { AyurvedicTreatment } from '../types';
import { CLINIC_INFO } from '../data/ayurvedaData';

interface TreatmentModalProps {
  treatment: AyurvedicTreatment | null;
  onClose: () => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onBookTreatment,
}) => {
  if (!treatment) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#2D6A4F]/20 max-h-[90vh] flex flex-col">
        {/* Modal Header with Image */}
        <div className="relative h-48 sm:h-56 w-full shrink-0">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E22] via-[#0F2E22]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              {treatment.badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#0F2E22] text-[10px] font-bold uppercase tracking-wider">
                  {treatment.badge}
                </span>
              )}
              {treatment.sanskritName && (
                <span className="text-xs text-[#DFBE7A] font-hindi">
                  {treatment.sanskritName}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-ayur leading-tight">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-700 text-sm">
          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" />
              <span>About This Therapy</span>
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed font-light">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Key Health Benefits</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF7F2] border border-[#2D6A4F]/10">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-800 leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions Treated & Key Herbs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
              <h5 className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Conditions Treated</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {treatment.conditionsTreated.map((c, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white text-[#1B4332] border border-emerald-200 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
              <h5 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-amber-700" />
                <span>Classical Herbs / Oils</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {treatment.keyHerbs.map((h, i) => (
                  <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white text-amber-900 border border-amber-200 font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Duration & Suitability Info Strip */}
          <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#2D6A4F]" />
              <span><strong>Duration:</strong> {treatment.duration}</span>
            </div>
            <div className="text-[11px] text-gray-500">
              <strong>Supervised by:</strong> {CLINIC_INFO.doctorName}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-800 text-xs font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Call to Inquire</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookTreatment(treatment.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0F2E22] to-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#DFBE7A]" />
            <span>Book Consultation for {treatment.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
