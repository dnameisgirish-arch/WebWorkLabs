import React, { useState } from 'react';
import { X, Rocket, BarChart2, Zap } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [projectTimeline, setProjectTimeline] = useState('2'); // Default to 3 months

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log({
      firstName,
      lastName,
      email,
      phone,
      companyName,
      projectDescription,
      selectedServices,
      selectedBudget,
      projectTimeline: ['1 month', '3 months', '6 months', '12+ months'][parseInt(projectTimeline) - 1],
    });
    alert('Project request submitted! (Check console for data)');
    onClose(); // Close modal after submission
    // Optionally reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setProjectDescription('');
    setSelectedServices([]);
    setSelectedBudget(null);
    setProjectTimeline('2');
  };

  const serviceOptions = [
    {
      id: 'web-app-dev',
      icon: Rocket,
      title: 'Web & App Development',
      description: 'Custom websites, web applications, and mobile apps with cutting-edge technologies',
    },
    {
      id: 'digital-marketing',
      icon: BarChart2,
      title: 'Digital Marketing',
      description: 'SEO optimization, growth strategies, and comprehensive digital marketing solutions',
    },
    {
      id: 'workflow-automation',
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions',
    },
  ];

  const budgetOptions = [
    '₹5k - ₹10k',
    '₹10k - ₹25k',
    '₹25k - ₹50k',
    '₹50k+',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform scale-95 animate-scale-in">
        {/* Header */}
        <div className="bg-[#14B8A6] text-white p-8 rounded-t-2xl relative">
          <h2 className="text-3xl font-bold mb-2">Start Your Project</h2>
          <p className="text-lg">Let's bring your vision to life with cutting-edge technology</p>
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
          {/* Service Selection */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {serviceOptions.map(service => {
              const isSelected = selectedServices.includes(service.id);
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
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
            <div className="md:col-span-2">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input
                type="text"
                id="companyName"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none transition-all duration-200"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
              <textarea
                id="projectDescription"
                rows={4}
                placeholder="Tell us about your project vision, goals, and requirements..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14B8A6] focus:border-transparent outline-none resize-y transition-all duration-200"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          {/* Project Budget */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-3">Project Budget</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {budgetOptions.map(budget => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`p-3 border-2 ${
                    selectedBudget === budget ? 'border-[#14B8A6] bg-[#E0F2F1] shadow-md' : 'border-gray-300 bg-white'
                  } rounded-lg hover:border-[#14B8A6] hover:bg-[#E0F2F1] transition-all duration-200 text-gray-700 font-medium transform hover:scale-105`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="mb-10">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Project Timeline</h3>
            <input
              type="range"
              min="1"
              max="4"
              value={projectTimeline}
              onChange={(e) => setProjectTimeline(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#14B8A6] timeline-slider"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>1 month</span>
              <span>3 months</span>
							<span>6 months</span>
              <span>12+ months</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#14B8A6] text-white px-8 py-4 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Submit Project Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;
