import React from 'react';
import { Award, Users, Target, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-american-blue font-western mb-6">
            OUR STORY
          </h1>
          <div className="h-1 w-24 bg-bold-red mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 font-western max-w-3xl mx-auto leading-relaxed">
            The story behind Broken Spokes Productions and our commitment to preserving Western heritage through multimedia storytelling.
          </p>
        </div>

        {/* Russ Sawyer Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/600x400/002C63/FFFFFF?text=Russ+Sawyer" 
                alt="Russ Sawyer"
                className="w-full rounded-lg shadow-lg border-4 border-american-blue"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-american-blue font-western mb-6">
                RUSS SAWYER
              </h2>
              <div className="h-1 w-16 bg-bold-red mb-6"></div>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
                Founder and creative director of Broken Spokes Productions, Russ Sawyer brings over two decades of experience in multimedia production and storytelling. His passion for authentic Western narratives has made Broken Spokes a respected name in heritage preservation.
              </p>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
                With a background in both traditional broadcasting and modern digital media, Russ combines time-tested techniques with cutting-edge technology to create content that honors the Western spirit.
              </p>
              <p className="text-lg text-gray-700 font-western leading-relaxed">
                When he's not in the studio, Russ can be found on his ranch, drawing inspiration from the Western lifestyle that infuses all of his creative work.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 p-12 mb-20 border-l-4 border-bold-red">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-american-blue font-western mb-6">
              OUR MISSION
            </h2>
            <div className="h-1 w-16 bg-bold-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-western max-w-4xl mx-auto leading-relaxed italic">
              "To preserve and celebrate the authentic Western spirit through exceptional multimedia production, helping stories find their voice with clarity, creativity, and unwavering respect for tradition."
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-american-blue font-western mb-4">
              OUR VALUES
            </h2>
            <div className="h-1 w-20 bg-bold-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 border-t-4 border-bold-red shadow-lg">
              <Award size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                EXCELLENCE
              </h3>
              <p className="text-gray-700 font-western">
                We never compromise on quality, ensuring every production meets the highest standards of craftsmanship.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 border-t-4 border-bold-red shadow-lg">
              <Users size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                AUTHENTICITY
              </h3>
              <p className="text-gray-700 font-western">
                Every story deserves to be told with genuine respect for its unique character and heritage.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 border-t-4 border-bold-red shadow-lg">
              <Target size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                TRADITION
              </h3>
              <p className="text-gray-700 font-western">
                Honoring the timeless values and stories that define the American Western experience.
              </p>
            </div>
            
            <div className="text-center bg-white p-8 border-t-4 border-bold-red shadow-lg">
              <Star size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                CRAFTSMANSHIP
              </h3>
              <p className="text-gray-700 font-western">
                We embrace new technologies while honoring traditional storytelling principles and techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Legacy Section */}
        <div className="bg-american-blue py-16 text-white text-center">
          <h2 className="text-4xl font-bold font-western mb-6">
            PRESERVING WESTERN HERITAGE
          </h2>
          <p className="text-xl font-western mb-8 max-w-3xl mx-auto">
            Through our multimedia productions, we ensure that the stories, values, and spirit of the American West continue to inspire future generations.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold font-western mb-2">500+</div>
              <div className="text-lg font-western">Stories Preserved</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-western mb-2">20+</div>
              <div className="text-lg font-western">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-western mb-2">100+</div>
              <div className="text-lg font-western">Productions Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-western mb-2">50+</div>
              <div className="text-lg font-western">Awards Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;