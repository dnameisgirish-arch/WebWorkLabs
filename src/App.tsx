import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustMetrics />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;
