import React from 'react';
import { Code, TrendingUp, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web & App Development',
      description: 'Custom websites, web applications, and mobile apps built with cutting-edge technologies. We create scalable, secure, and performance-optimized solutions tailored to your business needs.',
      features: ['Custom Web Development', 'Mobile App Development', 'E-commerce Solutions', 'API Integration']
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy & Growth',
      description: 'Comprehensive digital marketing strategies, SEO optimization, and growth hacking techniques to expand your online presence and drive meaningful business results.',
      features: ['Digital Marketing', 'SEO Optimization', 'Analytics & Insights', 'Conversion Optimization']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">Our Services</h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end digital solutions that transform your business and accelerate growth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#F8FAFC] rounded-3xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#14B8A6]/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-[#14B8A6] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1B2A]">{service.title}</h3>
              </div>
              
              <p className="text-[#475569] text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-[#475569]">
                    <div className="w-2 h-2 bg-[#14B8A6] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="group/btn flex items-center text-[#14B8A6] font-semibold hover:text-[#0f9488] transition-colors duration-200">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;