import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/ayurvedaData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto sliding carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2D6A4F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-[#2D6A4F]/20 text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Patient Recovery Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-4">
            Patient Success Stories
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-3">
            रुग्णांचे प्रत्यक्ष अनुभव आणि आरोग्यमुक्तीच्या प्रेरणादायी गोष्टी
          </p>
          <div className="w-20 h-1 bg-[#C5A059] rounded-full mb-6" />

          <p className="max-w-2xl text-base text-gray-700 font-light leading-relaxed">
            Real stories from individuals in Chandrapur who experienced transformative healing through authentic Ayurveda and personalized Panchkarma.
          </p>
        </div>

        {/* Testimonial Showcase Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#2D6A4F]/15 shadow-xl relative overflow-hidden transition-all duration-500">
            {/* Top Quote Watermark */}
            <div className="absolute top-6 right-8 text-[#2D6A4F]/10 pointer-events-none">
              <Quote className="w-24 h-24 rotate-180" />
            </div>

            {/* Stars and Verification Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
              <div className="flex items-center gap-1.5">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-gray-700 ml-2">
                  5.0 Verified Experience
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#1B4332] text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>{TESTIMONIALS[currentIndex].treatmentTaken}</span>
              </div>
            </div>

            {/* Testimonial Quote Content */}
            <blockquote className="text-lg sm:text-2xl font-serif-ayur text-[#0F2E22] leading-relaxed italic mb-8 relative z-10">
              "{TESTIMONIALS[currentIndex].content}"
            </blockquote>

            {/* Patient Info Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100 relative z-10">
              <div>
                <h4 className="text-base font-bold text-[#0F2E22]">
                  {TESTIMONIALS[currentIndex].author}
                </h4>
                <p className="text-xs text-gray-500">
                  {TESTIMONIALS[currentIndex].location} • {TESTIMONIALS[currentIndex].date}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#2D6A4F] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                <span>Verified Patient of Dr. Kuldiwar</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#2D6A4F] text-[#0F2E22] hover:text-[#2D6A4F] flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-8 bg-[#2D6A4F]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 hover:border-[#2D6A4F] text-[#0F2E22] hover:text-[#2D6A4F] flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
