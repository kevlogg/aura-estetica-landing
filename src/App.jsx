import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceCategoryBlock from './components/ServiceCategoryBlock';
import BookingWidget from './components/BookingWidget';
import SocialProofSection from './components/SocialProofSection';
import FAQAccordion from './components/FAQAccordion';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

import { SERVICES_DATA } from './data/servicesData';

export default function App() {
  const [selectedCatForBooking, setSelectedCatForBooking] = useState('faciales');
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState('');

  // Scroll smooth to booking widget & set selection
  const handleSelectTreatmentForBooking = (catId, treatmentName) => {
    setSelectedCatIdForBooking(catId, treatmentName);
  };

  const setSelectedCatIdForBooking = (catId, treatmentName = '') => {
    setSelectedCatForBooking(catId);
    if (treatmentName) {
      setSelectedTreatmentForBooking(treatmentName);
    }
    const widgetEl = document.getElementById('agendar');
    if (widgetEl) {
      widgetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGeneralBookClick = () => {
    const widgetEl = document.getElementById('agendar');
    if (widgetEl) {
      widgetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-nude-100 text-charcoal font-sans flex flex-col selection:bg-terracotta/20 selection:text-terracotta-dark">
      {/* Navigation */}
      <Navbar onBookClick={handleGeneralBookClick} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onBookClick={handleGeneralBookClick}
          onCategorySelect={(catId) => setSelectedCatIdForBooking(catId)}
        />

        {/* 6 Category Mini-Landing Blocks */}
        <div className="space-y-4">
          {SERVICES_DATA.map((cat) => (
            <ServiceCategoryBlock
              key={cat.id}
              category={cat}
              onSelectTreatment={handleSelectTreatmentForBooking}
            />
          ))}
        </div>

        {/* Interactive Multi-Step Scheduling Widget */}
        <BookingWidget
          preselectedCategory={selectedCatForBooking}
          preselectedTreatment={selectedTreatmentForBooking}
        />

        {/* Social Proof & Testimonials */}
        <SocialProofSection />

        {/* FAQ Accordion */}
        <FAQAccordion />
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
