import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, Phone } from 'lucide-react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data/ayurvedaData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#2D6A4F]/20 text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-3">
            आयुर्वेदिक उपचार आणि पंचकर्माबद्दल वारंवार विचारले जाणारे प्रश्न
          </p>
          <div className="w-16 h-1 bg-[#C5A059] rounded-full mb-4" />
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#2D6A4F]/15 overflow-hidden transition-all shadow-xs hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F2E22]">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#2D6A4F] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#E8F5E9]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed font-light border-t border-gray-100 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#E8F5E9] border border-[#2D6A4F]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#0F2E22]">Have a specific medical query?</h4>
            <p className="text-xs text-gray-600 font-light">
              Speak directly with our clinic staff to understand therapy packages.
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="px-5 py-2.5 rounded-xl bg-[#0F2E22] hover:bg-[#2D6A4F] text-white text-xs font-bold transition-colors flex items-center gap-2 shrink-0 shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#DFBE7A]" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
