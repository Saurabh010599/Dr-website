import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS, CLINIC_INFO } from '../data/ayurvedaData';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] border border-[#2D6A4F]/20 text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>100% 5-Star Rated Practice</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-4">
            Google Reviews & Patient Feedback
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-3">
            गुगलवर ५.० स्टार मानांकन प्राप्त — रुग्णांचा प्रामाणिक अभिप्राय
          </p>
          <div className="w-20 h-1 bg-[#C5A059] rounded-full mb-6" />

          {/* Rating Snapshot Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0F2E22] via-[#1B4332] to-[#0F2E22] text-white shadow-xl max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C5A059]/30">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold font-serif-ayur text-[#DFBE7A]">
                5.0
              </div>
              <div>
                <div className="flex text-amber-400 gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-[#FAF7F2]/90 font-medium">
                  Based on <strong>{CLINIC_INFO.reviewsCount} Verified Reviews</strong> on Google Maps
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr.+Kuldiwar's+Ayurveda+%26+Panchkarma+Center+Chandrapur"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#DFBE7A] text-[#0F2E22] text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 6 Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-gray-200 hover:border-[#2D6A4F]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-sm`}>
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F2E22]">
                        {review.author}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-gray-500">
                        <span>{review.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Logo G badge */}
                  <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                    <span className="font-bold text-xs text-blue-600">G</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs text-gray-700 leading-relaxed font-light mb-4">
                  "{review.content}"
                </p>
              </div>

              {/* Treatment Tag & Verified Pill */}
              <div className="pt-3 border-t border-gray-200/70 flex items-center justify-between text-[11px]">
                {review.treatment && (
                  <span className="text-[#2D6A4F] font-semibold">
                    {review.treatment}
                  </span>
                )}
                <span className="text-gray-500 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Google Review</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
