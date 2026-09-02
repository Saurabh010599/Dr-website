import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, UserCheck, Stethoscope, Award, ArrowRight, BookOpen, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/ayurvedaData';

interface AboutDoctorSectionProps {
  onOpenAppointment: () => void;
}

export const AboutDoctorSection: React.FC<AboutDoctorSectionProps> = ({ onOpenAppointment }) => {
  const highlights = [
    {
      title: 'Holistic Diagnosis',
      sanskrit: 'त्रिविध & अष्टविध परीक्षा',
      desc: 'Accurate root-cause analysis through traditional Nadi Pariksha (Pulse Assessment), tongue analysis, and Prakriti evaluation.',
      icon: Stethoscope,
      color: 'from-emerald-700 to-emerald-900',
    },
    {
      title: 'Root Cause Treatment',
      sanskrit: 'मूल कारण निवारण',
      desc: 'Eliminating the biological disease origin rather than temporary chemical masking, preventing long-term recurrence.',
      icon: ShieldCheck,
      color: 'from-amber-700 to-amber-900',
    },
    {
      title: 'Personalized Care',
      sanskrit: 'व्यक्तिगत चिकित्सा',
      desc: 'Each medicine, oil formulation, and dietary chart is tailored strictly to your individual doshic constitution.',
      icon: UserCheck,
      color: 'from-teal-700 to-teal-900',
    },
    {
      title: 'Preventive Healthcare',
      sanskrit: 'स्वास्थ्य रक्षण & रसायन',
      desc: 'Empowering you with daily routines (Dinacharya), seasonal detox, and immune-building (Ojas) Rasayanas.',
      icon: Sparkles,
      color: 'from-green-700 to-green-900',
    },
  ];

  return (
    <section id="about-doctor" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Background Subtle Motifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8F5E9]/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Badge */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3 border border-[#2D6A4F]/20">
            <Award className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Ayurvedic Clinical Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-4">
            Meet Dr. Kuldiwar
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-2">
            अनुभवी आयुर्वेदाचार्य आणि पंचकर्म तज्ज्ञ — चंद्रपूर
          </p>
          <div className="w-20 h-1 bg-[#C5A059] rounded-full mb-6" />

          <p className="max-w-3xl text-base sm:text-lg text-gray-700 font-light leading-relaxed">
            Dr. Kuldiwar provides personalized Ayurvedic consultation and Panchkarma therapies focused on treating the root cause of diseases rather than temporary symptom relief.
          </p>
        </div>

        {/* Main Content Grid: Image + Bio Story + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Doctor Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-b from-[#FAF7F2] to-white p-3">
              <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=900&auto=format&fit=crop"
                  alt="Dr. Kuldiwar Ayurvedic Physician"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2E22] via-transparent to-transparent opacity-85" />

                {/* Overlaid Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#DFBE7A] font-semibold">
                    Chandrapur, Maharashtra
                  </span>
                  <h3 className="text-2xl font-bold font-serif-ayur mt-1">
                    {CLINIC_INFO.doctorName}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/90 mt-0.5">
                    {CLINIC_INFO.doctorTitle}
                  </p>
                  <p className="text-[11px] text-[#DFBE7A] font-mono mt-1">
                    {CLINIC_INFO.degrees} • {CLINIC_INFO.experienceYears}+ Years Clinical Practice
                  </p>
                </div>
              </div>

              {/* Consultation Guarantee Stamp */}
              <div className="mt-3 p-4 rounded-xl bg-[#0F2E22] text-[#FAF7F2] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C5A059] flex items-center justify-center text-[#0F2E22] font-bold">
                    ✓
                  </div>
                  <div>
                    <span className="text-xs font-bold block text-white">Dedicated 1-on-1 Time</span>
                    <span className="text-[10px] text-[#DFBE7A]">Unhurried Diagnostic Consultations</span>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#DFBE7A] bg-white/10 px-2.5 py-1 rounded">
                  5.0 ★ Rated
                </span>
              </div>
            </div>
          </div>

          {/* Narrative & Clinical Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="prose text-gray-700 leading-relaxed text-sm sm:text-base space-y-4 font-light">
              <p className="text-lg font-medium text-[#0F2E22] leading-snug">
                "Ayurveda does not merely suppress a symptom; it restores the sacred biological rhythm between your mind, body, and cellular digestion."
              </p>

              <p>
                With years of experience in Ayurveda and Panchkarma, Dr. Kuldiwar has helped patients improve their health naturally through customized treatments, dietary guidance, detox therapies, and lifestyle corrections.
              </p>

              <p>
                Whether managing stubborn chronic joint stiffness, slip disc agony, chronic skin disorders (Psoriasis/Eczema), or stress-induced digestive burnout, Dr. Kuldiwar blends authentic Vedic diagnostic principles with modern clinical empathy.
              </p>
            </div>

            {/* 4 Clinical Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#2D6A4F]/15 hover:border-[#2D6A4F]/40 hover:bg-white transition-all shadow-xs hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#2D6A4F] text-white flex items-center justify-center group-hover:bg-[#0F2E22] transition-colors shrink-0">
                        <Icon className="w-4 h-4 text-[#DFBE7A]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F2E22]">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-hindi text-[#2D6A4F]">
                          {item.sanskrit}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Doctor Booking CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F2E22] to-[#2D6A4F] text-white font-bold text-xs uppercase tracking-wider hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Consult Dr. Kuldiwar</span>
                <ArrowRight className="w-4 h-4 text-[#DFBE7A]" />
              </button>

              <div className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                <span>Ground Floor, Beside Maa Kali Medical, Chandrapur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
