import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Star, ShieldCheck, Award, HeartHandshake, Leaf, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/ayurvedaData';

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onOpenDoshaQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment, onOpenDoshaQuiz }) => {
  // Animated Counters for Stats
  const [reviewsCount, setReviewsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [patientsCount, setPatientsCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setReviewsCount(Math.floor(progress * CLINIC_INFO.reviewsCount));
      setExperienceCount(Math.floor(progress * CLINIC_INFO.experienceYears));
      setPatientsCount(Math.floor(progress * 5000));

      if (step >= steps) {
        setReviewsCount(CLINIC_INFO.reviewsCount);
        setExperienceCount(CLINIC_INFO.experienceYears);
        setPatientsCount(5000);
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:pb-24 lg:pt-12 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE2] to-[#FAF7F2]">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft herbal blur rings */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#2D6A4F]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#52B788]/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Herbal Leaves (CSS animated) */}
      <div className="absolute top-16 left-8 pointer-events-none opacity-60 hidden md:block animate-float-leaf">
        <div className="w-10 h-10 rounded-full bg-[#E8F5E9] border border-[#2D6A4F]/20 flex items-center justify-center text-[#2D6A4F] shadow-sm">
          <Leaf className="w-5 h-5 transform rotate-45" />
        </div>
      </div>
      <div className="absolute top-48 right-12 pointer-events-none opacity-50 hidden lg:block animate-float-leaf-delayed">
        <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-md">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute bottom-24 left-16 pointer-events-none opacity-40 hidden lg:block animate-float-leaf">
        <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2D6A4F]">
          <Leaf className="w-4 h-4 transform -rotate-12" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Badge: 5.0 Google Rating & Chandrapur Verification */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#2D6A4F]/20 shadow-sm mb-6">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
              <span className="text-xs font-bold text-[#0F2E22]">
                5.0 Google Rating ({reviewsCount}+ Reviews)
              </span>
              <span className="hidden sm:inline text-xs text-[#2D6A4F] font-semibold border-l border-gray-200 pl-2">
                Chandrapur, Maharashtra
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-ayur text-[#0F2E22] leading-[1.15] tracking-tight mb-4">
              Natural Healing Through{' '}
              <span className="gold-gradient-text block sm:inline">
                Ayurveda & Panchkarma
              </span>
            </h1>

            {/* Hindi Sub-Title */}
            <p className="text-sm sm:text-base font-hindi text-[#2D6A4F] font-medium mb-3">
              {CLINIC_INFO.hindiName} — प्रामाणिक आयुर्वेदिक चिकित्सा आणि पंचकर्म केंद्र
            </p>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal mb-8 max-w-2xl">
              Experience authentic Ayurvedic treatments, Panchkarma therapies, and personalized wellness solutions for long-term health and holistic healing at Shivaji Nagar, Chandrapur.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Primary: Book Appointment */}
              <button
                id="hero-book-btn"
                onClick={onOpenAppointment}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#0F2E22] via-[#1B4332] to-[#2D6A4F] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-[#0F2E22]/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 text-[#DFBE7A]" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#DFBE7A]" />
              </button>

              {/* Secondary: Call Now */}
              <a
                id="hero-call-btn"
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-6 py-4 rounded-xl bg-white border border-[#2D6A4F]/30 text-[#0F2E22] font-bold text-sm tracking-wide hover:bg-[#E8F5E9] hover:border-[#2D6A4F] transition-all shadow-sm flex items-center justify-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span>Call Now: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* 4 Feature Badges Required by Prompt */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-[#2D6A4F]/15">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F2E22]">5.0 Rating</span>
                  <span className="text-[10px] text-gray-500">Google Verified</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F2E22]">Ayurvedic Doctor</span>
                  <span className="text-[10px] text-gray-500">{experienceCount}+ Yrs Exp</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F2E22]">Personalized</span>
                  <span className="text-[10px] text-gray-500">Treatment Plans</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#0F2E22]">Panchkarma</span>
                  <span className="text-[10px] text-gray-500">Authentic Therapy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor & Panchkarma Consultation Showcase Imagery Card */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Image Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Doctor Consultation & Ayurvedic Therapy Image */}
              <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop"
                  alt="Dr. Kuldiwar Ayurveda & Panchkarma Center Consultation"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E22]/90 via-[#0F2E22]/20 to-transparent" />

                {/* Overlaid Doctor Title Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#2D6A4F]/20 shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-0.5">
                        <Leaf className="w-3 h-3 text-[#2D6A4F]" />
                        <span>Principal Physician</span>
                      </div>
                      <h3 className="text-lg font-bold font-serif-ayur text-[#0F2E22]">
                        {CLINIC_INFO.doctorName}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium">
                        {CLINIC_INFO.doctorTitle}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                        <span>Verified</span>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">
                        B.A.M.S., C.P.K.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Floating Pill Card (Left) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-2xl bg-white shadow-xl border border-[#2D6A4F]/20 max-w-[200px] sm:max-w-[220px] hidden sm:block animate-in fade-in zoom-in duration-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center text-[#DFBE7A] shrink-0 shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#0F2E22]">100% Herbal</div>
                  <div className="text-[11px] text-gray-500">Root Cause Treatment</div>
                </div>
              </div>
            </div>

            {/* Floating Counter Pill Card (Top Right) */}
            <div className="absolute -top-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-[#0F2E22] text-white shadow-xl border border-[#C5A059]/40 max-w-[190px] hidden sm:block">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059] flex items-center justify-center text-[#0F2E22] font-bold text-xs shrink-0">
                  5.0★
                </div>
                <div>
                  <div className="text-xs font-bold text-white">19+ Happy Reviews</div>
                  <div className="text-[10px] text-[#DFBE7A]">Google Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Diagnostic / Dosha Checker Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F2E22] via-[#1B4332] to-[#0F2E22] text-white shadow-xl border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-serif-ayur text-white">
                Unsure Which Treatment Fits Your Body?
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/80 font-light">
                Take our 60-second Ayurvedic Dosha (Prakriti) assessment to identify your Vata, Pitta, or Kapha imbalance.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDoshaQuiz}
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-[#C5A059] text-[#0F2E22] font-bold text-xs uppercase tracking-wider hover:bg-[#DFBE7A] transition-colors shrink-0 shadow-md flex items-center justify-center gap-2"
          >
            <span>Free Dosha Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
