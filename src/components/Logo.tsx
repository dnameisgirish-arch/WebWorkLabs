import React from 'react';
import { Paintbrush } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
          <Paintbrush size={20} className="text-white transform -rotate-12" />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-[#0D1B2A] leading-tight">
          WebWork Labs
        </h1>
        <p className="text-xs text-[#475569] font-medium tracking-wider uppercase">
          Ideas to Impact
        </p>
      </div>
    </div>
  );
};

export default Logo;