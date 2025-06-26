import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const Examples: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Western Tales Podcast",
      type: "Podcast Production",
      description: "A weekly storytelling podcast featuring authentic Western narratives and frontier legends.",
      image: "https://via.placeholder.com/500x300/002C63/FFFFFF?text=Western+Tales+Podcast",
      duration: "45 min episodes"
    },
    {
      id: 2,
      title: "Ranch Life Documentary",
      type: "Video Production",
      description: "Documentary series showcasing modern ranching practices and traditional Western values.",
      image: "https://via.placeholder.com/500x300/B31942/FFFFFF?text=Ranch+Life+Documentary",
      duration: "30 min episodes"
    },
    {
      id: 3,
      title: "Frontier Business Stories",
      type: "Corporate Podcast",
      description: "Business podcast focusing on entrepreneurship in rural America and frontier innovation.",
      image: "https://via.placeholder.com/500x300/002C63/FFFFFF?text=Frontier+Business",
      duration: "25 min episodes"
    },
    {
      id: 4,
      title: "Heritage Preservation Project",
      type: "Educational Video",
      description: "Video series documenting Western heritage sites and their historical significance.",
      image: "https://via.placeholder.com/500x300/B31942/FFFFFF?text=Heritage+Project",
      duration: "15 min episodes"
    },
    {
      id: 5,
      title: "Cowboy Code Podcast",
      type: "Lifestyle Podcast",
      description: "Exploring modern applications of traditional Western values and the cowboy code of ethics.",
      image: "https://via.placeholder.com/500x300/002C63/FFFFFF?text=Cowboy+Code",
      duration: "35 min episodes"
    },
    {
      id: 6,
      title: "Rodeo Championship Highlights",
      type: "Sports Video",
      description: "High-energy video production capturing the excitement and skill of professional rodeo competitions.",
      image: "https://via.placeholder.com/500x300/B31942/FFFFFF?text=Rodeo+Highlights",
      duration: "10 min highlights"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-american-blue font-western mb-6">
            OUR PORTFOLIO
          </h1>
          <div className="h-1 w-24 bg-bold-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 font-western max-w-3xl mx-auto leading-relaxed">
            A showcase of our finest productions, each representing our commitment to authentic Western storytelling and multimedia excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border-2 border-gray-200 hover:border-american-blue transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-american-blue bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <Play size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-bold-red text-white px-3 py-1 text-sm font-bold font-western">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 font-western mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 font-western">
                    {project.duration}
                  </span>
                  <button className="flex items-center text-bold-red hover:text-red-700 font-bold font-western transition-colors duration-300">
                    View Details
                    <ExternalLink size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="text-center mt-20">
          <div className="bg-gray-50 p-12 border-l-4 border-bold-red">
            <blockquote className="text-2xl font-bold text-american-blue font-western mb-6 italic">
              "Each project tells a story worth preserving"
            </blockquote>
            <p className="text-lg text-gray-700 font-western max-w-2xl mx-auto">
              Our portfolio represents years of dedication to capturing authentic Western narratives through modern multimedia production techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;