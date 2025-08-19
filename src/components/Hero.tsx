import React from 'react';
import { Rocket, ArrowRight, Code, Smartphone, Globe, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0D1B2A] flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-16 animate-float">
          <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#14B8A6]/30">
            <Code size={20} className="text-[#14B8A6]" />
          </div>
        </div>
        
        <div className="absolute top-40 right-24 animate-float-delayed">
          <div className="w-10 h-10 bg-[#14B8A6]/15 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#14B8A6]/25">
            <Smartphone size={16} className="text-[#14B8A6]" />
          </div>
        </div>
        
        <div className="absolute bottom-32 left-20 animate-float-slow">
          <div className="w-14 h-14 bg-[#14B8A6]/25 rounded-xl flex items-center justify-center backdrop-blur-sm border border-[#14B8A6]/40">
            <Globe size={24} className="text-[#14B8A6]" />
          </div>
        </div>
        
        <div className="absolute bottom-40 right-32 animate-float">
          <div className="w-8 h-8 bg-[#14B8A6]/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-[#14B8A6]/30">
            <TrendingUp size={14} className="text-[#14B8A6]" />
          </div>
        </div>

        {/* Animated Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 150 200 Q 400 150 650 300" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw-line"
          />
          <path 
            d="M 200 600 Q 500 500 800 650" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-draw-line-delayed"
          />
        </svg>

        {/* Digital Particles */}
        <div className="absolute top-1/4 left-1/3">
          <div className="w-1 h-1 bg-[#14B8A6] rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-1/2 right-1/4">
          <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full animate-pulse delay-700"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <div className="w-1 h-1 bg-[#14B8A6] rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Enhanced Geometric Shapes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#14B8A6] rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#14B8A6]/60 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#14B8A6] rotate-45 animate-bounce-gentle delay-1500"></div>
        
        {/* Binary Code Rain Effect */}
        <div className="absolute top-0 left-1/4 text-[#14B8A6]/20 text-xs font-mono animate-code-rain">
          <div className="animate-fade-in-out">01001000</div>
          <div className="animate-fade-in-out delay-500">01100101</div>
          <div className="animate-fade-in-out delay-1000">01101100</div>
        </div>
        
        <div className="absolute top-0 right-1/3 text-[#14B8A6]/15 text-xs font-mono animate-code-rain delay-2000">
          <div className="animate-fade-in-out delay-300">01101100</div>
          <div className="animate-fade-in-out delay-800">01101111</div>
          <div className="animate-fade-in-out delay-1300">00100000</div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 animate-fade-in-up">
            Crafting Web & App
            <br />
            <span className="text-[#14B8A6] animate-gradient-text">Experiences</span> That Drive
            <br />
            Business <span className="text-[#14B8A6] animate-gradient-text">Growth</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Elegant. Reliable. Future-Ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
          <button className="group bg-[#14B8A6] text-white px-8 py-4 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-[#14B8A6]/25 hover:scale-105 flex items-center gap-3 animate-pulse-button">
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
