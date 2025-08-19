import React from 'react';
import { ShoppingCart, Heart, Building, GraduationCap, Cpu, Home } from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: ShoppingCart, name: 'E-Commerce', color: 'text-blue-600' },
    { icon: Heart, name: 'Healthcare', color: 'text-red-500' },
    { icon: Building, name: 'Finance', color: 'text-green-600' },
    { icon: GraduationCap, name: 'Education', color: 'text-purple-600' },
    { icon: Cpu, name: 'Technology', color: 'text-indigo-600' },
    { icon: Home, name: 'Real Estate', color: 'text-orange-600' }
  ];

  return (
    <section id="industries" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">Industry Focus</h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            We serve diverse industries with specialized expertise and tailored solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center group-hover:bg-[#14B8A6]/10 transition-colors duration-300">
                  <industry.icon size={24} className={`${industry.color} group-hover:text-[#14B8A6] transition-colors duration-300`} />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-[#0D1B2A] group-hover:text-[#14B8A6] transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;