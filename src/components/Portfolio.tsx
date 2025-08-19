import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Modern e-commerce platform with advanced filtering and payment integration'
    },
    {
      id: 2,
      title: 'Healthcare App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'HIPAA-compliant mobile application for patient management'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600',
      description: 'Real-time financial analytics dashboard with interactive charts'
    },
    {
      id: 4,
      title: 'EdTech Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Interactive learning platform with video streaming capabilities'
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Property listing platform with virtual tour integration'
    },
    {
      id: 6,
      title: 'Restaurant Management',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete restaurant management system with POS integration'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6">Featured Work</h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto">
            Discover our latest projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-[#0D1B2A]/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-[#14B8A6] rounded-full flex items-center justify-center hover:bg-[#0f9488] transition-colors duration-200">
                      <Eye size={20} className="text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                      <ExternalLink size={20} className="text-[#0D1B2A]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-[#14B8A6] font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{project.title}</h3>
                <p className="text-[#475569] leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#14B8A6] text-white px-8 py-4 rounded-xl hover:bg-[#0f9488] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;