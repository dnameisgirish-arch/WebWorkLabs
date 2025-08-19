import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import Services from './components/Services';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustMetrics />
      <Services />
      <Industries />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <CTABand />
      <Footer />
    </div>
  );
}

export default App;