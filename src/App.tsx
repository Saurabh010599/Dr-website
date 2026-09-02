import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutDoctorSection } from './components/AboutDoctorSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { PanchkarmaHighlightSection } from './components/PanchkarmaHighlightSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { DoshaAssessmentModal } from './components/DoshaAssessmentModal';

export default function App() {
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string>('');

  const scrollToAppointment = () => {
    const appointmentElem = document.getElementById('appointment');
    if (appointmentElem) {
      appointmentElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSpecificTreatment = (treatmentName: string) => {
    setSelectedTreatmentForBooking(treatmentName);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A2E26] relative selection:bg-[#2D6A4F] selection:text-white pb-14 sm:pb-0 font-sans">
      {/* 1. Header & Navigation Bar */}
      <Navbar
        onOpenAppointment={scrollToAppointment}
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* 2. Main Content Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenAppointment={scrollToAppointment}
          onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
        />

        {/* About Dr. Kuldiwar Section */}
        <AboutDoctorSection
          onOpenAppointment={scrollToAppointment}
        />

        {/* 10 Specialized Ayurvedic Treatments Section */}
        <TreatmentsSection
          onOpenAppointmentForTreatment={handleBookSpecificTreatment}
        />

        {/* Luxury Panchkarma Highlight Section (Dark Green) */}
        <PanchkarmaHighlightSection
          onOpenAppointment={scrollToAppointment}
        />

        {/* Why Patients Trust Us & Animated Metrics */}
        <WhyChooseUsSection />

        {/* Patient Success Stories & Testimonials Carousel */}
        <TestimonialsSection />

        {/* Verified Google Reviews Section (5.0 ★ Rating) */}
        <GoogleReviewsSection />

        {/* Premium Appointment Booking Section */}
        <AppointmentSection
          initialTreatment={selectedTreatmentForBooking}
        />

        {/* Location & Embedded Google Map Section */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* 3. Comprehensive Footer */}
      <Footer />

      {/* 4. 100% Mobile Responsive Sticky Action Bar */}
      <MobileStickyBar
        onOpenAppointment={scrollToAppointment}
      />

      {/* 5. Floating WhatsApp Button for Direct Quick Consultation */}
      <FloatingWhatsApp />

      {/* 6. Free Prakriti / Dosha Quiz Assessment Modal */}
      <DoshaAssessmentModal
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        onBookWithDosha={(doshaRegimen) => {
          setSelectedTreatmentForBooking(`Ayurvedic Consultation for ${doshaRegimen}`);
          scrollToAppointment();
        }}
      />
    </div>
  );
}
