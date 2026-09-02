import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, MessageSquare, CheckCircle2, ShieldCheck, Sparkles, Send, ArrowRight, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_INFO, AYURVEDIC_TREATMENTS } from '../data/ayurvedaData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  initialTreatment?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialTreatment = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    treatment: initialTreatment || 'General Ayurvedic Consultation',
    preferredDate: '',
    preferredSlot: 'Morning (10:00 AM - 02:00 PM)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update treatment if passed dynamically
  React.useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }));
    }
  }, [initialTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2D6A4F', '#C5A059', '#1B4332', '#DFBE7A'],
        });
      } catch (err) {
        // ignore confetti errors if not supported
      }
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Kuldiwar's Clinic, I would like to book an Ayurvedic consultation.\n\n*Name:* ${formData.fullName || 'Patient'}\n*Phone:* ${formData.phone || 'Not provided'}\n*Treatment:* ${formData.treatment}\n*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n*Slot:* ${formData.preferredSlot}\n*Note:* ${formData.message || 'Consultation request'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE2] to-[#FAF7F2] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D6A4F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Book with Dr. Kuldiwar */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2D6A4F]/20 text-[#1B4332] text-xs font-bold uppercase tracking-wider w-fit shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Prioritize Your Health</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-ayur text-[#0F2E22] tracking-tight leading-tight">
              Book Your Consultation Today
            </h2>
            <p className="text-sm font-hindi text-[#2D6A4F] font-semibold">
              आपली आरोग्य तपासणी व पंचकर्म उपचारांसाठी आजच नाव नोंदवा
            </p>

            <p className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              Take the first step toward lasting health. Connect with Dr. Kuldiwar for an unhurried, root-cause diagnostic session and custom Ayurvedic roadmap.
            </p>

            {/* Trust Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2D6A4F] shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F2E22]">Zero Waiting Line with Appointment</h4>
                  <p className="text-xs text-gray-600 font-light">Dedicated slot reserved for your comprehensive consultation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2D6A4F] shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F2E22]">100% Confidential & Compassionate</h4>
                  <p className="text-xs text-gray-600 font-light">Detailed medical history analysis and dietary review.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#2D6A4F]/10 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2D6A4F] shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F2E22]">Direct Doctor Supervised Panchkarma</h4>
                  <p className="text-xs text-gray-600 font-light">All therapies performed under senior physician guidance.</p>
                </div>
              </div>
            </div>

            {/* Quick Phone Call Card */}
            <div className="p-4 rounded-2xl bg-[#0F2E22] text-[#FAF7F2] flex items-center justify-between mt-2">
              <div>
                <span className="text-[10px] text-[#DFBE7A] uppercase font-mono tracking-widest block">
                  Need Immediate Help?
                </span>
                <span className="text-sm font-bold text-white">Call Dr. Kuldiwar Directly</span>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-4 py-2 rounded-xl bg-[#C5A059] text-[#0F2E22] text-xs font-bold hover:bg-[#DFBE7A] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Booking Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white shadow-2xl border border-[#2D6A4F]/20 relative">
              {submitted ? (
                /* Submission Confirmation */
                <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#E8F5E9] text-[#2D6A4F] mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl font-bold font-serif-ayur text-[#0F2E22]">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Dr. Kuldiwar's clinic staff will call you at <strong>{formData.phone}</strong> shortly to confirm your slot for <strong>{formData.treatment}</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-gray-200 text-xs text-gray-700 max-w-sm mx-auto text-left space-y-1">
                    <div><strong>Clinic Location:</strong> Shivaji Nagar, Chandrapur</div>
                    <div><strong>Selected Slot:</strong> {formData.preferredSlot}</div>
                    {formData.preferredDate && <div><strong>Preferred Date:</strong> {formData.preferredDate}</div>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm via WhatsApp Now</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold"
                    >
                      Book Another Appointment
                    </button>
                  </div>
                </div>
              ) : (
                /* Booking Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-gray-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold font-serif-ayur text-[#0F2E22]">
                      Patient Appointment Form
                    </h3>
                    <p className="text-xs text-gray-500 font-light">
                      Fill in your details below for a confirmed consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Sharma"
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FAF7F2] border border-gray-200 text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-[#2D6A4F] focus:bg-white transition-all"
                        />
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FAF7F2] border border-gray-200 text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-[#2D6A4F] focus:bg-white transition-all"
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Treatment Required (Dropdown) */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Treatment Required *
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-[#FAF7F2] border border-gray-200 text-gray-900 text-xs focus:outline-none focus:border-[#2D6A4F] focus:bg-white transition-all font-medium"
                    >
                      <option value="General Ayurvedic Consultation">General Ayurvedic Consultation & Pulse Assessment</option>
                      {AYURVEDIC_TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.sanskritName || t.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FAF7F2] border border-gray-200 text-gray-900 text-xs focus:outline-none focus:border-[#2D6A4F] focus:bg-white transition-all"
                        />
                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <select
                          value={formData.preferredSlot}
                          onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-3 rounded-xl bg-[#FAF7F2] border border-gray-200 text-gray-900 text-xs focus:outline-none focus:border-[#2D6A4F] focus:bg-white transition-all font-medium"
                        >
                          <option value="Morning (10:00 AM - 02:00 PM)">Morning: 10:00 AM – 02:00 PM</option>
                          <option value="Evening (05:30 PM - 09:00 PM)">Evening: 05:30 PM – 09:00 PM</option>
                          <option value="Sunday (10:00 AM - 01:00 PM)">Sunday: 10:00 AM – 01:00 PM</option>
                        </select>
                        <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Message / Symptoms */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Symptoms / Health Concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your symptoms, duration of illness, or previous medications..."
                      className="w-full p-3.5 rounded-xl bg-[#FAF7F2] border border-gray-200 text-gray-900 placeholder-gray-400 text-xs focus:outline-none focus:border-[#2D6A4F] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0F2E22] via-[#1B4332] to-[#2D6A4F] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Your Slot...</span>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 text-[#DFBE7A]" />
                        <span>Book Your Consultation Today</span>
                        <ArrowRight className="w-4 h-4 text-[#DFBE7A]" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-500 font-light pt-1">
                    🔒 Your health information is strictly confidential. No spam calls.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
