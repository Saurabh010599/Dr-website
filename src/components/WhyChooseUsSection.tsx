import React, { useState, useEffect } from 'react';
import { Leaf, UserCheck, Award, Sun, HeartHandshake, TrendingUp, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, CLINIC_INFO } from '../data/ayurvedaData';

export const WhyChooseUsSection: React.FC = () => {
  const [reviews, setReviews] = useState(0);
  const [rating, setRating] = useState(0);
  const [personalization, setPersonalization] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const duration = 1600;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setReviews(Math.floor(progress * CLINIC_INFO.reviewsCount));
      setRating(Number((progress * CLINIC_INFO.googleRating).toFixed(1)));
      setPersonalization(Math.floor(progress * 100));
      setExperience(Math.floor(progress * CLINIC_INFO.experienceYears));

      if (step >= steps) {
        setReviews(CLINIC_INFO.reviewsCount);
        setRating(CLINIC_INFO.googleRating);
        setPersonalization(100);
        setExperience(CLINIC_INFO.experienceYears);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const iconMap: Record<string, React.ElementType> = {
    Leaf,
    UserCheck,
    Award,
    Sun,
    HeartHandshake,
    TrendingUp,
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#FAF7F2] rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#E8F5E9] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3 border border-[#2D6A4F]/20">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Why Patients Trust Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-4">
            Why Patients Choose Dr. Kuldiwar
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-3">
            रुग्णांचा विश्वास आणि शाश्वत आरोग्य पुनरुज्जीवन
          </p>
          <div className="w-20 h-1 bg-[#C5A059] rounded-full mb-6" />

          <p className="max-w-2xl text-base text-gray-700 font-light leading-relaxed">
            Our clinic combines the ancient wisdom of classical Ayurveda with attentive clinical care to deliver lasting, root-cause healing.
          </p>
        </div>

        {/* 4 Animated Metric Counters Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {/* Counter 1: Reviews */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/15 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-ayur text-[#0F2E22] mb-1">
              {reviews}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Happy Google Reviews
            </div>
            <div className="text-[11px] text-gray-500 mt-1">Verified Patients</div>
          </div>

          {/* Counter 2: Google Rating */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/15 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl font-extrabold font-serif-ayur text-amber-600 mb-1">
              <span>{rating.toFixed(1)}</span>
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Google Rating
            </div>
            <div className="text-[11px] text-gray-500 mt-1">100% 5-Star Feedback</div>
          </div>

          {/* Counter 3: Personalized Treatment */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/15 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-ayur text-[#0F2E22] mb-1">
              {personalization}%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Personalized Plans
            </div>
            <div className="text-[11px] text-gray-500 mt-1">Nadi & Prakriti Based</div>
          </div>

          {/* Counter 4: Years of Experience */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/15 text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-ayur text-[#0F2E22] mb-1">
              {experience}+
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              Years of Experience
            </div>
            <div className="text-[11px] text-gray-500 mt-1">Ayurveda & Panchkarma</div>
          </div>
        </div>

        {/* 6 Core Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Leaf;

            return (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#2D6A4F]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E8F5E9] border border-[#2D6A4F]/20 flex items-center justify-center text-[#1B4332] mb-5 group-hover:bg-[#0F2E22] group-hover:text-[#DFBE7A] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-xl font-bold font-serif-ayur text-[#0F2E22] mb-3 group-hover:text-[#2D6A4F] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                {pillar.stat && (
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F2E22] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      <span>{pillar.stat}</span>
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                      Standard
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
