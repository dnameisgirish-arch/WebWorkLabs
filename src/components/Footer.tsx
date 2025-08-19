import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Brand */}
        <h3 className="text-2xl font-bold mb-4 text-[#14B8A6]">WebWork Labs</h3>
        <p className="text-gray-300 leading-relaxed mb-6">
          Crafting exceptional web solutions with cutting-edge technology, tailored strategies,
          and dedicated support for every client.
        </p>

        {/* Contact Info */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">
            <Phone size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">
            <Mail size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">
            <MapPin size={20} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            © 2024 WebWork Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
