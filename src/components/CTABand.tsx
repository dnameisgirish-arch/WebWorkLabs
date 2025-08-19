import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTABand = () => {
  return (
    <section className="py-20 bg-[#14B8A6] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <Sparkles size={24} className="absolute top-16 right-1/4 text-white/30 animate-pulse" />
        <Sparkles size={16} className="absolute bottom-20 left-1/3 text-white/40 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's create something extraordinary together. Get in touch today and discover how we can elevate your business to new heights.
        </p>
        <button className="group bg-white text-[#14B8A6] px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center gap-3">
          Start Your Project Today
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default CTABand;
