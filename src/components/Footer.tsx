import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Clock, Star, Heart, ArrowUp, Leaf, Send, Sparkles } from 'lucide-react';
import { CLINIC_INFO, AYURVEDIC_TREATMENTS } from '../data/ayurvedaData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#091A14] text-[#FAF7F2] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#C5A059]/20 relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2D6A4F]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Grid: Brand & Manifesto, Quick Links, Treatments, Contact & Timings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1 & 2: Brand Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] border border-[#C5A059]/40 flex items-center justify-center text-[#DFBE7A] shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-serif-ayur tracking-tight text-white leading-tight">
                  Dr. Kuldiwar's
                </span>
                <span className="text-xs font-semibold text-[#DFBE7A]">
                  Ayurveda & Panchkarma Center
                </span>
              </div>
            </div>

            <p className="text-xs font-hindi text-[#DFBE7A] mb-3">
              {CLINIC_INFO.hindiName}
            </p>

            <p className="text-xs text-[#FAF7F2]/75 font-light leading-relaxed max-w-sm mb-6">
              Chandrapur's benchmark destination for classical Ayurvedic medicine, authentic Panchkarma detoxification, and personalized holistic recovery.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-[#C5A059]/30 text-xs font-medium text-[#DFBE7A] mb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Rating</span>
              <span className="text-white/70">({CLINIC_INFO.reviewsCount} Google Reviews)</span>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-3.5 py-2 rounded-lg bg-[#2D6A4F] text-white hover:bg-[#52B788] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#DFBE7A]" />
                <span>{CLINIC_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsappPhone}?text=Hello%20Dr%20Kuldiwar,%20I%20would%20like%20to%20inquire%20about%20Ayurvedic%20treatment`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFBE7A] font-semibold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/75 font-light">
              <li>
                <a href="#hero" className="hover:text-[#DFBE7A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about-doctor" className="hover:text-[#DFBE7A] transition-colors">Meet Dr. Kuldiwar</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#DFBE7A] transition-colors">Ayurvedic Treatments</a>
              </li>
              <li>
                <a href="#panchkarma" className="hover:text-[#DFBE7A] transition-colors">Panchkarma Therapies</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#DFBE7A] transition-colors">Why Patients Trust Us</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#DFBE7A] transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DFBE7A] transition-colors">Google Reviews (5.0 ★)</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DFBE7A] transition-colors">Clinic Address & Map</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Key Treatments */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFBE7A] font-semibold mb-4">
              Key Treatments
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/75 font-light">
              {AYURVEDIC_TREATMENTS.slice(0, 7).map((t) => (
                <li key={t.id}>
                  <a href="#treatments" className="hover:text-[#DFBE7A] transition-colors">
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Clinic Hours & Location */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#DFBE7A] font-semibold mb-4">
              Chandrapur Clinic
            </h4>
            <div className="space-y-3 text-xs text-[#FAF7F2]/75 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#DFBE7A] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Ground Floor, Besides Maa Kali Medical, Near Bank of Maharashtra, Shivaji Nagar, D.G. Tukum, Chandrapur 442401
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#DFBE7A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Mon – Sat:</p>
                  <p>10:00 AM – 02:00 PM</p>
                  <p>05:30 PM – 09:00 PM</p>
                  <p className="text-[#DFBE7A] mt-1">Sun: 10:00 AM – 01:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-white font-mono">
                <Phone className="w-4 h-4 text-[#DFBE7A]" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#DFBE7A]">
                  {CLINIC_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Footer Tagline Bar */}
        <div className="py-8 text-center border-b border-white/5">
          <p className="text-sm sm:text-base font-serif-ayur text-[#DFBE7A] tracking-wider uppercase">
            Experience Natural Healing with Ayurveda & Panchkarma
          </p>
          <p className="text-xs font-hindi text-[#FAF7F2]/60 mt-1">
            आरोग्यम् परमं भाग्यम् — नैसर्गिक स्वास्थ्य आणि दीर्घायुष्याचा मार्ग
          </p>
        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/50 font-light">
          <div>
            © {new Date().getFullYear()} Dr. Kuldiwar's Ayurveda & Panchkarma Center, Chandrapur. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#FAF7F2]/60">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Authentic Ayurvedic Healing
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#DFBE7A] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#DFBE7A]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
