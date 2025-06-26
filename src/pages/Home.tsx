import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic, Video, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-american-blue font-western mb-8 leading-tight">
              STORIES COME TO LIFE
            </h1>
            <div className="h-1 w-32 bg-bold-red mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-gray-800 font-western leading-relaxed text-center italic border-l-4 border-bold-red pl-8">
              "Welcome to Broken Spokes Productions, where stories come to life through expert podcast production and dynamic video editing. We're passionate about crafting high-quality audio and visual content that captivates, informs, and inspires. Whether you're launching a podcast or polishing a video, our team is here to turn your vision into reality—seamlessly, professionally, and with a touch of creativity that sets you apart."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-american-blue font-western mb-4">
              OUR CRAFT
            </h2>
            <div className="h-1 w-24 bg-bold-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-bold-red shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <Mic size={48} className="text-american-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-american-blue font-western mb-4">
                  PODCAST MASTERY
                </h3>
                <p className="text-gray-700 font-western leading-relaxed">
                  Showcasing our finest podcast productions, from intimate storytelling to dynamic conversations that capture the Western spirit.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-bold-red shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <Video size={48} className="text-american-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-american-blue font-western mb-4">
                  VISUAL STORYTELLING
                </h3>
                <p className="text-gray-700 font-western leading-relaxed">
                  Our video productions bring stories to life with cinematic quality and authentic Western character.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-bold-red shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <BookOpen size={48} className="text-american-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-american-blue font-western mb-4">
                  WRITTEN WORKS
                </h3>
                <p className="text-gray-700 font-western leading-relaxed">
                  Exploring the literary side of our storytelling through published works and written narratives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-american-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-western mb-8">
            EXPLORE OUR PORTFOLIO
          </h2>
          <p className="text-xl text-white font-western mb-10 max-w-2xl mx-auto">
            Discover the stories we've brought to life through our multimedia productions.
          </p>
          <Link
            to="/examples"
            className="inline-flex items-center px-8 py-4 bg-bold-red text-white font-bold font-western text-lg hover:bg-red-700 transition-colors duration-300 border-2 border-bold-red hover:border-red-700"
          >
            VIEW OUR WORK
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;