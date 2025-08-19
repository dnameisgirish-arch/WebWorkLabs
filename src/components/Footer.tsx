import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">WebWork Labs</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crafting exceptional web and app experiences that drive business growth through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Portfolio</a></li>
              <li><a href="#industries" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Industries</a></li>
              <li><a href="#blogs" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Blogs</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">E-commerce</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#14B8A6] transition-colors duration-200">SEO Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={18} className="text-[#14B8A6] mr-3 flex-shrink-0" />
                <span className="text-gray-300">hello@webworkslabs.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-[#14B8A6] mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-[#14B8A6] mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WebWorks Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#14B8A6] text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#14B8A6] text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#14B8A6] text-sm transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
