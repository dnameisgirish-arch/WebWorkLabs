import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#475569] hover:text-[#14B8A6] transition-colors duration-200 font-medium">Services</a>
            <a href="#portfolio" className="text-[#475569] hover:text-[#14B8A6] transition-colors duration-200 font-medium">Portfolio</a>
            <a href="#pricing" className="text-[#475569] hover:text-[#14B8A6] transition-colors duration-200 font-medium">Pricing</a>
            <a href="#about" className="text-[#475569] hover:text-[#14B8A6] transition-colors duration-200 font-medium">About</a>
            <a href="#contact" className="text-[#475569] hover:text-[#14B8A6] transition-colors duration-200 font-medium">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-[#14B8A6] text-white px-6 py-3 rounded-lg hover:bg-[#0f9488] transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#475569] hover:text-[#14B8A6] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-[#475569] hover:text-[#14B8A6] font-medium">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-[#475569] hover:text-[#14B8A6] font-medium">Portfolio</a>
              <a href="#pricing" className="block px-3 py-2 text-[#475569] hover:text-[#14B8A6] font-medium">Pricing</a>
              <a href="#about" className="block px-3 py-2 text-[#475569] hover:text-[#14B8A6] font-medium">About</a>
              <a href="#contact" className="block px-3 py-2 text-[#475569] hover:text-[#14B8A6] font-medium">Contact</a>
              <div className="px-3 py-2">
                <button className="w-full bg-[#14B8A6] text-white px-6 py-3 rounded-lg hover:bg-[#0f9488] transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
