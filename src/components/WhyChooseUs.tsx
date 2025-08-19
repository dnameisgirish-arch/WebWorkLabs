import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Proven Expertise',
      description: 'Over 5 years of experience delivering high-quality web solutions across diverse industries with a track record of success and client satisfaction.'
    },
    {
      icon: Zap,
      title: 'Innovative Solutions',
      description: 'We leverage the latest technologies and industry best practices to create cutting-edge solutions that give your business a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with you throughout the entire process to ensure your vision becomes reality and exceeds expectations.'
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">Why Choose Us</h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            We combine technical expertise with creative vision to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#14B8A6] rounded-2xl flex items-center justify-center group-hover:bg-[#0f9488] transition-colors duration-300">
                  <reason.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">{reason.title}</h3>
              <p className="text-[#475569] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;