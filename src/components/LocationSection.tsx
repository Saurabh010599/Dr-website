import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/ayurvedaData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5E9] text-[#1B4332] text-xs font-bold uppercase tracking-wider mb-3 border border-[#2D6A4F]/20">
            <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Clinic Location & Timings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight mb-4">
            Visit Our Chandrapur Center
          </h2>
          <p className="text-sm font-hindi text-[#2D6A4F] font-semibold mb-3">
            शिवाजी नगर, डी. जी. तुकूम, चंद्रपूर — प्रत्यक्ष क्लिनिक पत्ता व वेळ
          </p>
          <div className="w-20 h-1 bg-[#C5A059] rounded-full mb-6" />

          <p className="max-w-2xl text-base text-gray-700 font-light leading-relaxed">
            Conveniently located in Shivaji Nagar, Chandrapur with dedicated consultation suites and traditional Panchkarma therapy rooms.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Contact & Timings Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/15 shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#DFBE7A] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif-ayur text-[#0F2E22]">
                    Clinic Address
                  </h3>
                  <p className="text-xs text-gray-500">
                    Shivaji Nagar, Chandrapur
                  </p>
                </div>
              </div>

              <div className="text-xs text-gray-700 leading-relaxed space-y-1.5 pl-1">
                <p className="font-semibold text-[#0F2E22] text-sm">
                  {CLINIC_INFO.name}
                </p>
                <p>{CLINIC_INFO.address.line1}</p>
                <p>{CLINIC_INFO.address.line2}</p>
                <p>{CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} — {CLINIC_INFO.address.pincode}</p>

                <div className="pt-3 border-t border-gray-200 text-[11px] text-[#2D6A4F] font-semibold">
                  📌 Landmarks: Besides Maa Kali Medical, Near Bank of Maharashtra
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ground+Floor+Besides+Maa+Kali+Medical+Near+Bank+of+Maharashtra+Shivaji+Nagar+D.G.+Tukum+Chandrapur+Maharashtra+442401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#0F2E22] text-white text-xs font-bold text-center hover:bg-[#2D6A4F] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DFBE7A]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="flex-1 py-2.5 rounded-xl bg-white border border-[#2D6A4F]/30 text-[#0F2E22] text-xs font-bold text-center hover:bg-[#E8F5E9] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>Call Clinic</span>
                </a>
              </div>
            </div>

            {/* Consulting Hours Card */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#2D6A4F]/15 shadow-xs">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-[#0F2E22] flex items-center justify-center shrink-0 shadow-sm font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-serif-ayur text-[#0F2E22]">
                    Consultation Timings
                  </h3>
                  <p className="text-xs text-gray-500">
                    Daily OPD & Panchkarma Hours
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-700 pl-1">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-800">Monday – Saturday (Morning):</span>
                  <span className="font-mono text-[#0F2E22] font-bold">10:00 AM – 02:00 PM</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-800">Monday – Saturday (Evening):</span>
                  <span className="font-mono text-[#0F2E22] font-bold">05:30 PM – 09:00 PM</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Sunday:</span>
                  <span className="font-mono text-[#2D6A4F] font-bold">10:00 AM – 01:00 PM (By Appt)</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-4 rounded-xl bg-[#E8F5E9] border border-[#2D6A4F]/20 flex items-center justify-between text-xs text-[#0F2E22]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-bold">Phone / WhatsApp: {CLINIC_INFO.phone}</span>
              </div>
              <span className="text-[10px] bg-[#2D6A4F] text-white px-2 py-0.5 rounded font-mono font-bold">
                Available
              </span>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-gray-200 shadow-xl bg-gray-100 flex flex-col min-h-[420px] relative">
            <iframe
              title="Dr Kuldiwar Ayurveda & Panchkarma Center Location Map"
              src="https://maps.google.com/maps?q=Shivaji+Nagar+Tukum+Chandrapur+Maharashtra+442401&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full flex-grow border-0 min-h-[380px]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Bottom Information Strip */}
            <div className="p-4 bg-[#0F2E22] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DFBE7A] shrink-0" />
                <span>Shivaji Nagar, Beside Maa Kali Medical, D.G. Tukum, Chandrapur</span>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shivaji+Nagar+D.G.+Tukum+Chandrapur+Maharashtra+442401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DFBE7A] hover:underline flex items-center gap-1 font-semibold shrink-0"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
