import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Examples: React.FC = () => {
  
  const handleViewDetails = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const projects = [
    {
      id: 1,
      title: "The Angery American Nation Podcast",
      type: "Podcast Production",
      description: "The “Angery American Nation Podcast,” hosted by Chris Weatherman, known as Angery American, along with panelists like Robert “T” Toombs, Seaux Larreau, Imri Morgenstern, and Donnie Dunn, has become a platform where discussions on world and national news are intertwined with themes of self-reliance and community.",
      image: "https://mma.prnewswire.com/media/1761485/LOGO___Angery_American.jpg?p=facebook",
      duration: "45+ min episodes",
      externalLink: "https://www.youtube.com/@angery-american"
    },
    {
      id: 2,
      title: "The Eden Army Podcast",
      type: "Podcast Snippets",
      description: "Best-selling author Pete Robertucci, mastermind behind the Eden Series, hosts this electrifying podcast for his devoted readers. Dive into survival and preparedness as we grill top industry experts, arming you with the know-how to thrive when chaos strikes!",
      image: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/487488316_1696193921180237_7171310811890905654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=f-BURd_I1FMQ7kNvwG9IlNU&_nc_oc=AdkofU21H4Q8xV-5-ZOoENdz0n-YbQ8L9hsKakNUaY0hEqQvdeil-w8jOcnwiC79PaU&_nc_zt=23&_nc_ht=scontent-atl3-2.xx&_nc_gid=bD_0hmiM8IZPo43xfqOOGw&oh=00_AfWLmyThZBzEf265Zqlz_4JycHXDgk9MP2Wdm8PMMIZ-PQ&oe=68A94CDC",
      duration: "2 min clips",
      externalLink: "https://www.youtube.com/@peterobertucci"
    },
    {
      id: 3,
      title: "Mountain Readiness Mondays",
      type: "Short Form Videos",
      description: "Robert ‘T’ Toombs, the quick-witted co-founder of Mountain Readiness, serves up homegrown humor alongside a colorful lineup of guests, covering the full spectrum of preparedness and self-reliance with charm and grit!",
      image: "https://static.wixstatic.com/media/1b0303_53f6b47c5d47440e820aeb8e7372af75~mv2.webp/v1/fill/w_560,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1b0303_53f6b47c5d47440e820aeb8e7372af75~mv2.webp",
      duration: "3-20 min shorts",
      externalLink: "https://www.youtube.com/@mountainreadiness"
    },
    {
      id: 4,
      title: "Rebuilding Hollers – Come Hell or Highwaters",
      type: "Foundational Content",
      description: "Join Stephanie Johnson, founder of the Rebuilding Hollers Foundation, on Rebuilding Hollers – Come Hell or Highwaters, a podcast that celebrates the unyielding spirit of self-reliance and preparedness communities in Western North Carolina's recovery after Hurricane Helene.  From the hollers of Yancey and Mitchell Counties, Stephanie shares powerful stories of resilience, community,m and hope as mountain families, volunteers, and local heros come together to rebuild homes, businesses and lives.",
      image: "https://live.staticflickr.com/65535/54618185464_581efa5a45_c.jpg",
      duration: "",
      externalLink: "https://www.youtube.com/@RebuildingHollers"
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
          A showcase of our finest productions, each representing our commitment to authentic storytelling and multimedia excellence within the self-reliance and preparedness communities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border-2 border-gray-200 hover:border-american-blue transition-all duration-300 shadow-lg hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <div className={`relative w-full h-48 flex items-center justify-center ${project.id === 4 ? 'bg-white p-4' : 'overflow-hidden'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={`${project.id === 4 ? 'max-h-full max-w-full object-contain' : 'w-full h-full object-cover group-hover:scale-105'} transition-transform duration-300`}
                  />
                </div>
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
                  <button 
                    onClick={() => handleViewDetails(project.externalLink)}
                    className="flex items-center text-bold-red hover:text-red-700 font-bold font-western transition-colors duration-300"
                  >
                    View Production
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
            Our portfolio represents years of dedication to capturing authentic narratives surrounding the self-reliance and preparedness communities through modern multimedia production techniques
            </p>
            <div className="mt-8">
              <Link 
                to="/subscribe" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-western rounded-md text-white bg-bold-red hover:bg-red-700 transition-colors duration-300"
              >
                Subscribe to Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examples;