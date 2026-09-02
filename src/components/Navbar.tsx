import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Star, MapPin, Menu, X, ShieldCheck, Heart, Sparkles, ChevronRight, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/ayurvedaData';

interface NavbarProps {
  onOpenAppointment: () => void;
  onOpenDoshaQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment, onOpenDoshaQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Doctor', href: '#about-doctor' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Panchkarma', href: '#panchkarma' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'Google Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#0F2E22] text-[#FAF7F2] text-xs py-2 px-4 sm:px-6 border-b border-[#C5A059]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#DFBE7A]">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 / 5</span>
              <span className="text-[#FAF7F2]/75">({CLINIC_INFO.reviewsCount} Google Reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#FAF7F2]/80">
              <MapPin className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>Shivaji Nagar, D.G. Tukum, Chandrapur</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#FAF7F2]/80">
              <Clock className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>Mon-Sat: 10 AM - 2 PM & 5:30 PM - 9 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDoshaQuiz}
              className="text-[#DFBE7A] hover:text-white flex items-center gap-1 text-[11px] uppercase tracking-wider font-medium hover:underline transition-colors"
            >
              <Sparkles className="w-3 h-3" />
              <span>Free Dosha Check</span>
            </button>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="font-semibold text-[#DFBE7A] hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3 border-b border-[#2D6A4F]/10'
            : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4 border-b border-[#2D6A4F]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            {/* Ayurvedic Leaf & Om/Healing Emblem */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0F2E22] to-[#2D6A4F] p-0.5 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-[#C5A059]/40">
              <div className="w-full h-full rounded-full bg-[#0F2E22] flex items-center justify-center text-[#DFBE7A]">
                <ShieldCheck className="w-6 h-6 text-[#DFBE7A]" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-serif-ayur tracking-tight text-[#0F2E22] leading-tight">
                Dr. Kuldiwar's
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#2D6A4F] tracking-wide">
                Ayurveda & Panchkarma Center
              </span>
              <span className="text-[10px] text-[#C5A059] font-hindi leading-none mt-0.5 hidden sm:inline">
                {CLINIC_INFO.hindiName}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-[#1A2E26]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#2D6A4F] transition-colors relative py-1 group tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#2D6A4F] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Free Prakriti Check Button */}
            <button
              onClick={onOpenDoshaQuiz}
              className="hidden xl:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#E8F5E9] text-[#1B4332] text-xs font-semibold hover:bg-[#D8F3DC] transition-colors border border-[#2D6A4F]/20"
              title="Know your Vata/Pitta/Kapha Dosha"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Know Your Dosha</span>
            </button>

            {/* Direct Call Button */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#2D6A4F]/30 text-[#0F2E22] hover:bg-[#E8F5E9] hover:border-[#2D6A4F] text-xs font-bold transition-all shadow-sm"
              title={`Call Dr. Kuldiwar: ${CLINIC_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Call Now</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white hover:from-[#0F2E22] hover:to-[#1B4332] text-xs font-bold transition-all shadow-md shadow-[#2D6A4F]/20 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#DFBE7A]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="p-2 rounded-lg bg-[#E8F5E9] text-[#0F2E22] border border-[#2D6A4F]/20"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4 text-[#2D6A4F]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-[#2D6A4F]/20 text-[#0F2E22]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#2D6A4F]/15 px-5 py-6 shadow-xl animate-in slide-in-from-top duration-300">
            {/* Rating pill in mobile */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
              <div className="flex items-center gap-1.5 text-xs text-[#0F2E22] font-semibold">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span>5.0 Rating ({CLINIC_INFO.reviewsCount} Google Reviews)</span>
              </div>
              <span className="text-[10px] text-[#2D6A4F] font-bold bg-[#E8F5E9] px-2 py-0.5 rounded-full">
                Chandrapur
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#1A2E26] hover:text-[#2D6A4F] py-2 px-3 rounded-md hover:bg-[#FAF7F2] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#2D6A4F]/50" />
                </a>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDoshaQuiz();
                }}
                className="w-full py-2.5 rounded-lg bg-[#E8F5E9] text-[#1B4332] text-xs font-bold flex items-center justify-center gap-2 border border-[#2D6A4F]/20"
              >
                <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
                <span>Take Free Dosha (Prakriti) Test</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#1B4332] to-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#DFBE7A]" />
                <span>Book Appointment Today</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-2.5 rounded-lg bg-white border border-[#2D6A4F]/30 text-[#0F2E22] text-xs font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span>Call Dr. Kuldiwar: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
