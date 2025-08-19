import React, { useState } from 'react';
import { Code, Zap, Globe } from 'lucide-react';

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center space-x-3 group">
      {/* Icon Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Icon Background */}
        <div className="relative w-12 h-12 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 rounded-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl">
          {/* Animated Background Circles */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 opacity-0 transition-all duration-700 ${isHovered ? 'opacity-20 scale-110' : ''}`}></div>
          
          {/* Dynamic Icon Switching */}
          <div className="relative z-10 transition-all duration-300">
            {!isHovered ? (
              <Code size={20} className="text-white drop-shadow-lg" />
            ) : (
              <div className="flex items-center space-x-0.5">
                <Globe size={8} className="text-white animate-pulse" />
                <Zap size={12} className="text-yellow-300 animate-bounce" />
                <Code size={8} className="text-white animate-pulse" />
              </div>
            )}
          </div>
          
          {/* Corner Accent */}
          <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white to-cyan-200 rounded-full opacity-60"></div>
        </div>
        
        {/* Floating Particles */}
        <div className={`absolute -top-1 -right-1 w-3 h-3 bg-slate-400 rounded-full transition-all duration-700 ${isHovered ? 'animate-ping' : 'opacity-0'}`}></div>
        <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-slate-500 rounded-full transition-all duration-500 ${isHovered ? 'animate-pulse' : 'opacity-0'}`}></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        {/* Main Brand Name */}
        <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-teal-700 to-teal-600 leading-tight tracking-tight hover:from-teal-600 hover:to-teal-500 transition-all duration-500">
          WebWork Labs
        </h1>
        
        {/* Tagline with Animation */}
        <div className="relative overflow-hidden">
          <p className="text-xs font-bold text-gray-600 tracking-[0.25em] uppercase transform transition-all duration-300 group-hover:text-teal-600 group-hover:tracking-[0.3em]">
            Ideas to Impact
          </p>
          {/* Animated Underline */}
          <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
        
        {/* Subtle Tech Dots */}
        <div className="flex space-x-1 mt-1 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
          <div className="w-1 h-1 bg-teal-500 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-teal-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-1 h-1 bg-teal-700 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
