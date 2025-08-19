import React from 'react';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'STARTER',
      badge: 'GOOD',
      badgeColor: 'bg-gray-500',
      price: '₹8,999',
      delivery: 'Delivery: 1-2 Weeks',
      buttonText: 'Get Started',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      cardColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
      icon: Rocket,
      features: [
        { text: 'Modern Responsive Website', included: true },
        { text: 'Up to 5 Pages', included: true },
        { text: 'Mobile & Desktop Optimized', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Basic SEO Setup', included: true },
        { text: 'Social Media Integration', included: true },
        { text: '1 Round of Revisions', included: true },
        { text: 'Google Analytics Setup', included: false },
        { text: 'Advanced SEO Package', included: false },
        { text: 'E-commerce Integration', included: false },
        { text: 'Custom CMS', included: false },
        { text: 'Priority Support', included: false }
      ]
    },
    {
      name: 'PROFESSIONAL',
      badge: 'POPULAR',
      badgeColor: 'bg-[#14B8A6]',
      price: '₹11,999',
      delivery: 'Delivery: 2-3 Weeks',
      buttonText: 'Choose Pro',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      cardColor: 'bg-gradient-to-br from-indigo-900 to-purple-900',
      icon: Crown,
      popular: true,
      features: [
        { text: 'Premium Responsive Website', included: true },
        { text: 'Up to 10 Pages', included: true },
        { text: 'Mobile, Tablet & Desktop', included: true },
        { text: 'Advanced Contact Forms', included: true },
        { text: 'Complete SEO Package', included: true },
        { text: 'Social Media Integration', included: true },
        { text: '3 Rounds of Revisions', included: true },
        { text: 'Google Analytics & Search Console', included: true },
        { text: 'Performance Optimization', included: true },
        { text: 'Basic E-commerce (up to 50 products)', included: true },
        { text: 'Content Management System', included: true },
        { text: 'Priority Support (3 months)', included: false }
      ]
    },
    {
      name: 'ENTERPRISE',
      badge: 'BEST VALUE',
      badgeColor: 'bg-[#0D1B2A]',
      price: '₹16,999',
      delivery: 'Delivery: 3-5 Weeks',
      buttonText: 'Go Enterprise',
      buttonColor: 'bg-[#0D1B2A] hover:bg-[#1a2332]',
      cardColor: 'bg-gradient-to-br from-[#14B8A6] to-[#0f9488]',
      icon: Zap,
      features: [
        { text: 'Custom Enterprise Solution', included: true },
        { text: 'Unlimited Pages', included: true },
        { text: 'Full Responsive Design', included: true },
        { text: 'Advanced Form & CRM Integration', included: true },
        { text: 'Enterprise SEO & Marketing', included: true },
        { text: 'Complete Social Media Setup', included: true },
        { text: 'Unlimited Revisions', included: true },
        { text: 'Advanced Analytics Dashboard', included: true },
        { text: 'Performance Optimization', included: true },
        { text: 'Full E-commerce Solution', included: true },
        { text: 'Custom CMS & Admin Panel', included: true },
        { text: 'Priority Support (12 months)', included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0D1B2A] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#14B8A6]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for exceptional web development services. No hidden fees, just premium quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-6 ${plan.cardColor} ${plan.popular ? 'scale-95 shadow-2xl' : 'shadow-xl'} hover:scale-100 transition-all duration-300`}
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <plan.icon size={20} className="text-white mr-2" />
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                </div>
                <span className={`${plan.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {plan.badge}
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                <div className="flex items-center text-gray-300">
                  <div className="w-3 h-3 border-2 border-gray-300 rounded-full mr-2 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                  {plan.delivery}
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full ${plan.buttonColor} text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg mb-6`}>
                {plan.buttonText}
              </button>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check size={16} className="text-[#14B8A6] mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={16} className="text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`${feature.included ? 'text-white' : 'text-gray-500'} text-sm leading-relaxed`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular badge overlay */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#14B8A6] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4 text-xl">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button className="bg-[#14B8A6] text-white px-6 py-3 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
            Contact for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
