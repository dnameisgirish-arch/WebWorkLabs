import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">Get in Touch</h2>
          <p className="text-xl text-[#475569]">
            Contact us today to schedule a consultation and
            take the first step towards optimal online growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Call Us */}
          <a 
            href="tel:+15551234567" 
            className="bg-[#F8FAFC] rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 block"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E0F2F1] mx-auto mb-4">
              <Phone size={32} className="text-[#14B8A6]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-3">Call Us</h3>
            <p className="text-[#14B8A6] text-lg font-medium hover:underline">
              +1 (555) 123-4567
            </p>
            <p className="text-[#14B8A6] text-lg font-medium hover:underline">
              +1 (555) 765-4321
            </p>
            <p className="text-[#475569] mt-3">
              Tap to call • Available Mon-Sat, 9 AM - 6 PM
            </p>
          </a>

          {/* Email Us */}
          <a 
            href="mailto:hello@webworkslabs.com?subject=Project Inquiry&body=Hi WebWork Labs,%0D%0A%0D%0AI found your website and would like to discuss my project requirements.%0D%0A%0D%0APlease get back to me at your earliest convenience.%0D%0A%0D%0AThank you!" 
            className="bg-[#F8FAFC] rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 block"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E0F2F1] mx-auto mb-4">
              <Mail size={32} className="text-[#14B8A6]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-3">Email Us</h3>
            <p className="text-[#14B8A6] text-lg font-medium hover:underline">
              hello@webworkslabs.com
            </p>
            <p className="text-[#475569] mt-3">
              Tap to email • We'll respond within 24 hours
            </p>
          </a>

          {/* Visit Us */}
          <a 
            href="https://maps.google.com/?q=123+Tech+Street,+Suite+200,+San+Francisco,+CA+94105" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#F8FAFC] rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 block"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E0F2F1] mx-auto mb-4">
              <MapPin size={32} className="text-[#14B8A6]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-3">Visit Us</h3>
            <p className="text-[#475569] text-lg hover:text-[#14B8A6] transition-colors duration-200">
              123 Tech Street, Suite 200
              <br />
              San Francisco, CA 94105
            </p>
            <p className="text-[#475569] mt-3">
              Tap for directions • Open in Maps
            </p>
          </a>
        </div>

        <div className="text-center mt-12">
          <button className="group bg-[#14B8A6] text-white px-10 py-4 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center gap-3">
            Schedule Your Appointment Today
          </button>
          <p className="text-[#475569] mt-4">
            New client consultations available • Insurance accepted
          </p>
          
          {/* Social Media Links */}
          <div className="mt-8">
            <p className="text-[#475569] mb-4 text-lg font-medium">Follow us on social media</p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://instagram.com/webworklabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Instagram size={24} className="text-white" />
              </a>
              <a 
                href="https://linkedin.com/company/webworklabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-[#0077B5] rounded-xl hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
