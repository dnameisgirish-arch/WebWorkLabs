import React, { useState, useEffect } from 'react';
import { Award, Users, Heart } from 'lucide-react';

const TrustMetrics = () => {
  const [counts, setCounts] = useState({ projects: 0, industries: 0, satisfaction: 0 });
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('trust-metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const animateCount = (target: number, key: keyof typeof counts) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 20);
      };

      animateCount(100, 'projects');
      animateCount(20, 'industries');
      animateCount(98, 'satisfaction');
    }
  }, [inView]);

  const metrics = [
    {
      icon: Award,
      value: `${counts.projects}+`,
      label: 'Projects Delivered',
      color: 'text-[#14B8A6]'
    },
    {
      icon: Users,
      value: `${counts.industries}+`,
      label: 'Industries Served',
      color: 'text-[#14B8A6]'
    },
    {
      icon: Heart,
      value: `${counts.satisfaction}%`,
      label: 'Client Satisfaction',
      color: 'text-[#14B8A6]'
    }
  ];

  return (
    <section id="trust-metrics" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                  <metric.icon size={32} className={metric.color} />
                </div>
              </div>
              <div className={`text-5xl font-bold mb-3 ${metric.color}`}>
                {metric.value}
              </div>
              <p className="text-xl text-[#475569] font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;