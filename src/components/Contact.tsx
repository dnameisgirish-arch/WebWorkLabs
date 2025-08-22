import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

interface ContactProps {
  onOpenConsultationModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0D1B2A] mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a question or want to start a project? Reach out to us, and let's build something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Mail size={40} className="text-[#14B8A6] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">Email Us</h3>
            <p className="text-gray-600">info@webworklabs.com</p>
            <a href="mailto:info@webworklabs.com" className="text-[#14B8A6] hover:underline mt-2 inline-block">Send a Message</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Phone size={40} className="text-[#14B8A6] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <a href="tel:+15551234567" className="text-[#14B8A6] hover:underline mt-2 inline-block">Make a Call</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <MapPin size={40} className="text-[#14B8A6] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#0D1B2A] mb-2">Our Location</h3>
            <p className="text-gray-600">123 Tech Avenue, Suite 400, Innovation City, CA 90210</p>
            <a href="https://maps.app.goo.gl/yourlocation" target="_blank" rel="noopener noreferrer" className="text-[#14B8A6] hover:underline mt-2 inline-block">Get Directions</a>
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#0D1B2A] mb-6">Book Your Free Consultation</h3>
          <p className="text-gray-700 mb-8">
            Ready to discuss your project in detail? Schedule a free consultation with our experts.
          </p>
          <button
            onClick={onOpenConsultationModal} // Attach the onClick handler here
            className="group bg-[#14B8A6] text-white px-8 py-4 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-[#14B8A6]/25 hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <Clock size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
