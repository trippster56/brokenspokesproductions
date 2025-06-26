import React from 'react';
import { Mic, Video, Headphones, Radio, Users, CheckCircle, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-american-blue font-western mb-4">
            Off the Grid, On the Air
          </h1>
          <div className="h-1 w-32 bg-bold-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
            Empowering independent creators in the preparedness community with professional podcast and live video production
          </p>
          <a 
            href="mailto:brokenspokesproductions@gmail.com" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-western rounded-md text-white bg-american-blue hover:bg-bold-red transition-colors duration-200"
          >
            <Mail className="mr-2" size={20} />
            Schedule Free Consultation
          </a>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-american-blue font-western mb-6">
                Welcome to Broken Spokes Productions LLC
              </h2>
              <div className="prose max-w-none text-gray-700 space-y-6">
                <p>
                  Based in the rural heart of Lynchburg, SC, we're a lean, remote podcast production company dedicated to empowering independent creators in the preparedness genre—whether you're passionate about survival, homesteading, emergency preparedness, or disaster readiness. Our mission is to transform your off-grid ideas into polished, professional audio and live video content that resonates with diverse audiences.
                </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-american-blue font-western mb-6 flex items-center">
                Our Comprehensive Services
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-bold-red">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <CheckCircle className="text-bold-red mr-2" size={20} />
                    Pre-Production
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Concept development for preppers</li>
                    <li>• Scripting and show planning</li>
                    <li>• Guest outreach for survival experts</li>
                    <li>• Content strategy for preparedness topics</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-american-blue">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Mic className="text-american-blue mr-2" size={20} />
                    Production
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Remote recording solutions</li>
                    <li>• In-home studio setup guidance</li>
                    <li>• Professional audio capture</li>
                    <li>• Multi-camera video recording</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-bold-red">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Headphones className="text-bold-red mr-2" size={20} />
                    Post-Production
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Expert audio editing and mastering</li>
                    <li>• Professional video editing</li>
                    <li>• Sound design and mixing</li>
                    <li>• Distribution and publishing guidance</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-american-blue">
                  <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <Video className="text-american-blue mr-2" size={20} />
                    Live Production
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Budget-friendly live streaming</li>
                    <li>• Multi-platform broadcasting</li>
                    <li>• Live Q&A and interaction</li>
                    <li>• Gear demos and tutorials</li>
                  </ul>
                </div>
              </div>

              <div className="bg-american-blue rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold font-western mb-3 flex items-center">
                  <Radio className="mr-2" size={24} />
                  Platform Distribution
                </h4>
                <p className="mb-3">We'll help you reach your audience wherever they are:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span className="flex items-center"><CheckCircle className="mr-2" size={16} /> Facebook</span>
                  <span className="flex items-center"><CheckCircle className="mr-2" size={16} /> Instagram</span>
                  <span className="flex items-center"><CheckCircle className="mr-2" size={16} /> YouTube</span>
                  <span className="flex items-center"><CheckCircle className="mr-2" size={16} /> X (Twitter)</span>
                  <span className="flex items-center"><CheckCircle className="mr-2" size={16} /> Kick</span>
                  <span className="flex items-center"><CheckCircle className="mr-2" size={16} /> All major podcast platforms</span>
                </div>
              </div>
            </div>

            {/* Community Focus */}
            <div className="bg-gray-50 p-8 rounded-lg mb-10">
              <h3 className="text-2xl font-bold text-american-blue font-western mb-4 flex items-center">
                <Users className="mr-2" size={28} />
                Rooted in the Preparedness Community
              </h3>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Rooted in Lynchburg's off-grid culture, we understand the preparedness community and its diverse creators—from young adults exploring homesteading to families planning for emergencies and retirees embracing self-reliance. With the podcast industry booming (144 million U.S. listeners in 2024) and live streaming on the rise, we're here to meet the growing demand for professional, niche-focused content.
                </p>
                <p>
                  Whether you're launching your first episode or streaming live to engage your audience, Broken Spokes Productions LLC is your trusted partner for standout audio and video.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-american-blue font-western mb-4">
                Ready to go on-air?
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Contact us today for a free 20-minute consultation to discuss your podcast or live stream goals!
              </p>
              <a 
                href="mailto:brokenspokesproductions@gmail.com" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-western rounded-md text-white bg-bold-red hover:bg-american-blue transition-colors duration-200"
              >
                <Mail className="mr-2" size={20} />
                Email Us
              </a>
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
            <p className="text-lg font-western mb-8 max-w-3xl mx-auto">
              To empower independent creators in the preparedness community with professional podcast and live video production, helping them share their stories, values, and expertise with the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;