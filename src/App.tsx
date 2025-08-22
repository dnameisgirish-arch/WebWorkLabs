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
import ProjectModal from './components/ProjectModal'; // Import the new modal component

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onOpenModal={() => setIsProjectModalOpen(true)} /> {/* Pass the modal opener */}
      <TrustMetrics />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
    </div>
  );
}

export default App;
