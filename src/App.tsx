import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WhatsAppChat from './components/WhatsAppChat';
import ProjectModal from './components/ProjectModal';
import ConsultationModal from './components/ConsultationModal'; // Import the new consultation modal

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false); // New state for consultation modal

  return (
    <div className="min-h-screen">
      <Navigation onOpenConsultationModal={() => setIsConsultationModalOpen(true)} /> {/* Pass the consultation modal opener to Navigation */}
      <Hero onOpenModal={() => setIsProjectModalOpen(true)} />
      <TrustMetrics />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact onOpenConsultationModal={() => setIsConsultationModalOpen(true)} /> {/* Pass the consultation modal opener */}
      <Footer />
      <WhatsAppChat />
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}

export default App;
