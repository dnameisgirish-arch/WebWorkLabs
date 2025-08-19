import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sara Wilson',
      role: 'Business Owner',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'Exceptional service and results. Our online presence has never been stronger. The team delivered beyond expectations with incredible attention to detail.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Growth Solutions',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'WebWorks Labs transformed our digital strategy completely. The ROI has been phenomenal, and our conversion rates increased by 300% within the first quarter.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'Innovation Hub',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      content: 'Professional, reliable, and incredibly talented team. They brought our vision to life with a level of craftsmanship that exceeded all expectations.',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">Client Testimonials</h2>
          <p className="text-xl text-[#475569]">
            Hear what our clients say about their experience working with us
          </p>
        </div>

        <div className="relative">
          <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <Quote size={48} className="text-[#14B8A6]" />
            </div>

            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-[#475569] leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].content}"
            </p>

            <div className="flex items-center justify-center mb-8">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="font-bold text-[#0D1B2A] text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-[#475569]">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-[#14B8A6]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
