import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0D1B2A] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#14B8A6] rotate-45 animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#14B8A6] rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#14B8A6] rotate-45 animate-bounce delay-1500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            Crafting Web & App
            <br />
            <span className="text-[#14B8A6]">Experiences</span> That Drive
            <br />
            Business <span className="text-[#14B8A6]">Growth</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Elegant. Reliable. Future-Ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group bg-[#14B8A6] text-white px-8 py-4 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-[#14B8A6]/25 hover:scale-105 flex items-center gap-3">
            <Rocket size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            Start Your Project
          </button>
          <button className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#0D1B2A] transition-all duration-300 font-semibold text-lg flex items-center gap-3">
            View Our Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;