import React, { useState } from 'react';
import { Sparkles, Droplets, Activity, Moon, Smile, Shield, Flame, CheckCircle2, ArrowRight, Leaf, Award } from 'lucide-react';
import { PANCHKARMA_STEPS, PANCHKARMA_BENEFITS, CLINIC_INFO } from '../data/ayurvedaData';

interface PanchkarmaHighlightSectionProps {
  onOpenAppointment: () => void;
}

export const PanchkarmaHighlightSection: React.FC<PanchkarmaHighlightSectionProps> = ({
  onOpenAppointment,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const benefitIcons: Record<string, React.ElementType> = {
    Sparkles,
    Activity,
    Moon,
    Smile,
    Shield,
    Flame,
  };

  const currentStepData = PANCHKARMA_STEPS[activeStep];

  return (
    <section id="panchkarma" className="py-24 sm:py-32 bg-gradient-to-b from-[#091A14] via-[#0F2E22] to-[#091A14] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle Background Radial Glows & Traditional Motifs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2D6A4F]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Ayurvedic Herbs & Oil Pot Graphics (Animated CSS) */}
      <div className="absolute top-12 left-10 pointer-events-none opacity-20 hidden lg:block animate-float-leaf">
        <div className="w-16 h-16 rounded-full border border-[#C5A059]/40 flex items-center justify-center">
          <Droplets className="w-8 h-8 text-[#C5A059]" />
        </div>
      </div>
      <div className="absolute bottom-20 right-12 pointer-events-none opacity-20 hidden lg:block animate-float-leaf-delayed">
        <div className="w-20 h-20 rounded-full border border-[#DFBE7A]/40 flex items-center justify-center">
          <Leaf className="w-10 h-10 text-[#DFBE7A]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/30 text-[#DFBE7A] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Classical Bio-Purification & Detox</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-ayur text-white tracking-tight mb-4">
            Authentic Panchkarma Therapies
          </h2>
          <p className="text-sm font-hindi text-[#DFBE7A] font-semibold mb-3">
            पंचकर्म चिकित्सा — शरीरातील विषद्रव्ये बाहेर काढून संपूर्ण कायाकल्प
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C5A059] to-[#DFBE7A] rounded-full mb-6" />

          <p className="max-w-3xl text-base sm:text-lg text-[#E8F5E9]/90 font-light leading-relaxed">
            Panchkarma is a powerful Ayurvedic detoxification process designed to remove toxins, restore balance, and rejuvenate the body naturally.
          </p>
        </div>

        {/* 6 Core Panchkarma Benefits Grid */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-lg font-serif-ayur text-[#DFBE7A] tracking-wider uppercase">
              Proven Holistic Benefits of Panchkarma
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PANCHKARMA_BENEFITS.map((benefit) => {
              const Icon = benefitIcons[benefit.icon] || Sparkles;

              return (
                <div
                  key={benefit.id}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBE7A] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-serif-ayur text-white mb-1">
                    {benefit.title}
                  </h4>
                  <span className="text-[11px] font-hindi text-[#DFBE7A] font-medium block mb-2">
                    {benefit.subtitle}
                  </span>
                  <p className="text-xs text-[#FAF7F2]/75 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive 5 Classical Steps Deep Dive */}
        <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono text-[#DFBE7A] uppercase tracking-widest">
              The 5 Classical Pradhana Karmas
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-ayur text-white mt-1">
              Complete Detox Protocol
            </h3>
          </div>

          {/* Step Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            {PANCHKARMA_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeStep === idx
                    ? 'bg-[#C5A059] text-[#0F2E22] font-bold shadow-lg scale-105'
                    : 'bg-white/10 text-[#FAF7F2] hover:bg-white/20 border border-white/10'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px]">
                  {step.stepNumber}
                </span>
                <span>{step.name}</span>
              </button>
            ))}
          </div>

          {/* Active Step Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
            {/* Left: Step Details */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#2D6A4F] text-[#DFBE7A] text-[11px] font-mono font-bold">
                  Step 0{currentStepData.stepNumber} of 05
                </span>
                <span className="text-xs text-[#DFBE7A] font-hindi">
                  {currentStepData.sanskritName}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold font-serif-ayur text-white">
                {currentStepData.name} ({currentStepData.shortTag})
              </h4>

              <p className="text-sm text-[#FAF7F2]/85 leading-relaxed font-light">
                {currentStepData.description}
              </p>

              {/* Action Mechanism & Target Organs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFBE7A] font-bold block mb-1">
                    Therapeutic Action
                  </span>
                  <p className="text-xs text-[#FAF7F2]/90 leading-snug">
                    {currentStepData.action}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFBE7A] font-bold block mb-1">
                    Target Systems
                  </span>
                  <p className="text-xs text-[#FAF7F2]/90 leading-snug">
                    {currentStepData.targetOrgans}
                  </p>
                </div>
              </div>

              {/* Key Benefits List */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-[#DFBE7A] uppercase tracking-wider block">
                  Expected Clinical Outcomes:
                </span>
                {currentStepData.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#FAF7F2]/85">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Step CTA */}
              <div className="pt-4">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBE7A] text-[#0F2E22] text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 shadow-md"
                >
                  <span>Book Consultation for {currentStepData.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Step Image Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/30 h-64 sm:h-80">
                <img
                  src={currentStepData.image}
                  alt={currentStepData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-[10px] text-[#DFBE7A] uppercase font-mono tracking-wider">
                    Classical Herbs Used
                  </div>
                  <div className="text-xs text-white/90 font-medium">
                    {currentStepData.herbalFormulations.join(' • ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purvakarma Note Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-[#C5A059]/20 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                Pre-Therapy Preparation (Purvakarma) Included
              </h5>
              <p className="text-xs text-[#FAF7F2]/75 font-light">
                All procedures include internal oleation (Snehapana), herbal steam (Swedana), and Abhyanga oil massage.
              </p>
            </div>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="shrink-0 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#DFBE7A] text-xs font-semibold border border-[#C5A059]/30 transition-colors"
          >
            Inquire About Packages
          </a>
        </div>
      </div>
    </section>
  );
};
