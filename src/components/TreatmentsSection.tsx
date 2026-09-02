import React, { useState } from 'react';
import { Sparkles, Droplets, Activity, Sun, ShieldCheck, HeartPulse, Heart, Feather, Flame, Zap, ArrowRight, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { AYURVEDIC_TREATMENTS } from '../data/ayurvedaData';
import { AyurvedicTreatment } from '../types';
import { TreatmentModal } from './TreatmentModal';

interface TreatmentsSectionProps {
  onOpenAppointmentForTreatment: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({
  onOpenAppointmentForTreatment,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<AyurvedicTreatment | null>(null);

  // Icon mapping
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Droplets,
    Activity,
    Sun,
    ShieldCheck,
    HeartPulse,
    Heart,
    Feather,
    Flame,
    Zap,
  };

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'panchkarma', label: 'Panchkarma & Detox' },
    { id: 'chronic', label: 'Pain & Chronic Care' },
    { id: 'specialized', label: 'Specialized Care' },
    { id: 'lifestyle', label: 'Lifestyle & Mind' },
  ];

  const filteredTreatments = activeCategory === 'all'
    ? AYURVEDIC_TREATMENTS
    : AYURVEDIC_TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="treatments" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2D6A4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-[#2D6A4F]/20 text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Holistic Ayurvedic Therapies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-4">
            Our Ayurvedic Treatments
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-3">
            सर्व आजारांवर प्रामाणिक आयुर्वेदिक उपचार व पंचकर्म
          </p>
          <div className="w-20 h-1 bg-[#C5A059] rounded-full mb-6" />

          <p className="max-w-2xl text-base text-gray-700 font-light leading-relaxed">
            Every therapy is administered according to classical Ayurvedic guidelines with individualized herbal formulations and therapeutic Panchkarma techniques.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 max-w-3xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0F2E22] text-[#FAF7F2] shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:bg-[#E8F5E9] hover:text-[#0F2E22] border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Treatments Grid: 10 Modern Service Cards with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => {
            const Icon = iconMap[treatment.iconName] || Sparkles;

            return (
              <div
                key={treatment.id}
                className="group relative rounded-2xl bg-white border border-[#2D6A4F]/15 hover:border-[#C5A059]/60 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Image Top Strip with Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Icon Emblem floating on image */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#0F2E22] flex items-center justify-center shadow-md border border-white/40">
                    <Icon className="w-5 h-5 text-[#2D6A4F]" />
                  </div>

                  {/* Badge */}
                  {treatment.badge && (
                    <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#0F2E22] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {treatment.badge}
                    </div>
                  )}

                  {/* Sanskrit Name on image */}
                  {treatment.sanskritName && (
                    <div className="absolute bottom-3 left-4 text-xs font-hindi text-[#DFBE7A] font-medium">
                      {treatment.sanskritName}
                    </div>
                  )}
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif-ayur text-[#0F2E22] group-hover:text-[#2D6A4F] transition-colors mb-2 leading-tight">
                      {treatment.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-light leading-relaxed mb-4 line-clamp-3">
                      {treatment.shortDesc}
                    </p>

                    {/* Key Benefits Bullet Highlights */}
                    <div className="space-y-1.5 mb-5">
                      {treatment.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedTreatment(treatment)}
                      className="text-xs font-bold text-[#0F2E22] hover:text-[#2D6A4F] flex items-center gap-1 group/btn py-1"
                    >
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-[#2D6A4F]" />
                    </button>

                    <button
                      onClick={() => onOpenAppointmentForTreatment(treatment.title)}
                      className="px-3.5 py-2 rounded-lg bg-[#E8F5E9] hover:bg-[#2D6A4F] text-[#1B4332] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Comprehensive Advisory Banner */}
        <div className="mt-16 text-center">
          <p className="text-xs text-gray-500 font-light max-w-xl mx-auto mb-4">
            Need consultation for a specific health condition not listed above? Dr. Kuldiwar provides holistic management for over 40+ chronic and seasonal ailments.
          </p>
          <a
            href="tel:+918237510466"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#2D6A4F] hover:text-[#0F2E22] underline underline-offset-4"
          >
            <span>Speak directly to our clinic staff at +91 82375 10466</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Detailed Treatment Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBookTreatment={(name) => {
          setSelectedTreatment(null);
          onOpenAppointmentForTreatment(name);
        }}
      />
    </section>
  );
};
