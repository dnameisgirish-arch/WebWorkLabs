import React, { useState } from 'react';
import { X, Target, Lightbulb, BarChart } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState<string | null>(null);
  const [discussionTopic, setDiscussionTopic] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [selectedConsultationServices, setSelectedConsultationServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setSelectedConsultationServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const params = new URLSearchParams();
    params.append('fullName', fullName);
    params.append('email', email);
    params.append('phone', phone);
    params.append('company', company);
    params.append('preferredDate', preferredDate);
    params.append('preferredTime', preferredTime || '');
    params.append('discussionTopic', discussionTopic);
    params.append('additionalNotes', additionalNotes);
    params.append('selectedConsultationServices', selectedConsultationServices.join(','));
    params.append('submittedAt', new Date().toISOString());

    const webhookUrl = `https://frank-abnormally-wasp.ngrok-free.app/webhook/ad54c0cd-6b4c-41bc-b069-18022d94f530?${params.toString()}`;
    window.open(webhookUrl, '_blank');

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setPreferredDate('');
    setPreferredTime(null);
    setDiscussionTopic('');
    setAdditionalNotes('');
    setSelectedConsultationServices([]);

    setIsSubmitting(false);
    onClose();
  };

  const consultationServiceOptions = [
    {
      id: 'strategic-planning',
      icon: Target,
      title: 'Strategic Planning',
      description: 'Tailored roadmap for your digital goals',
    },
    {
      id: 'expert-insights',
      icon: Lightbulb,
      title: 'Expert Insights',
      description: 'Industry best practices and innovative solutions',
    },
    {
      id: 'market-analysis',
      icon: BarChart,
      title: 'Market Analysis',
      description: 'Competitive landscape and opportunity assessment',
    },
  ];

  const timeSlotOptions = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];
  const discussionTopics = [
    'Website Development',
    'Mobile App Development',
    'Digital Marketing Strategy',
    'SEO Optimization',
    'Cloud Solutions',
    'UI/UX Design',
    'Other',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
        {/* Header */}
        <div className="bg-[#14B8A6] text-white p-8 rounded-t-2xl relative">
          <h2 className="text-3xl font-bold mb-2">Book Free Consultation</h2>
          <p className="text-lg">Get expert advice and strategic insights for your digital transformation</p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 p-2 rounded-full hover:bg-white/20"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <form onSubmit={handleSubmit} className="p-8">
          {/* Consultation Service Selection */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {consultationServiceOptions.map(service => {
              const isSelected = selectedConsultationServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`bg-gray-50 p-6 rounded-xl text-center border-2 ${
                    isSelected ? 'border-[#14B8A6] shadow-md' : 'border-gray-200'
                  } hover:border-[#14B8A6] transition-all duration-200 cursor-pointer transform hover:scale-105`}
                >
                  <service.icon size={32} className="text-[#14B8A6] mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-1 text-[#0D1B2A]">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          {/* Form Fields */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                id="company"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          {/* Preferred Date */}
          <div className="mb-8">
            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
            <div className="relative">
              <input
                type="date"
                id="preferredDate"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200 pr-10"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Preferred Time */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Preferred Time</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {timeSlotOptions.map(time => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setPreferredTime(time)}
                  className={`p-3 border-2 ${
                    preferredTime === time ? 'border-[#14B8A6] bg-[#E0F2F1] shadow-md' : 'border-gray-300 bg-white'
                  } rounded-lg hover:border-[#14B8A6] hover:bg-[#E0F2F1] transition-all duration-200 text-gray-700 font-medium transform hover:scale-105`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Discussion Topic */}
          <div className="mb-8">
            <label htmlFor="discussionTopic" className="block text-sm font-medium text-gray-700 mb-1">What would you like to discuss?</label>
            <select
              id="discussionTopic"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200 bg-white appearance-none pr-10"
              value={discussionTopic}
              onChange={(e) => setDiscussionTopic(e.target.value)}
              required
            >
              <option value="">Select a topic</option>
              {discussionTopics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="mb-10">
            <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea
              id="additionalNotes"
              rows={4}
              placeholder="Any specific questions or topics you'd like to cover..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none resize-y transition-all duration-200"
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#14B8A6] hover:bg-[#0f9488] transform hover:scale-105'
            } text-white px-8 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl`}
          >
            {isSubmitting ? 'Booking...' : 'Book My Free Consultation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
