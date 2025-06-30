import React from 'react';
import { useNavigate } from 'react-router-dom';

const Author: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = (inquiryType: string) => {
    navigate('/contact', { state: { inquiryType } });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-american-blue font-western mb-6">
            RUSS SAWYER
          </h1>
          <div className="h-1 w-24 bg-bold-red mx-auto mb-8"></div>
          <p className="text-2xl text-gray-700 font-western italic">
            Author • Storyteller
          </p>
        </div>

        {/* Author Bio Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://live.staticflickr.com/65535/54624376525_1c89fe8a52_b.jpg" 
                alt="Russ Sawyer - Author"
                className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg border-4 border-american-blue"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-american-blue font-western mb-6">
                THE STORYTELLER
              </h2>
              <div className="h-1 w-16 bg-bold-red mb-6"></div>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
              Russ Sawyer, a twenty-year United States Air Force veteran, brings unparalleled authenticity to his debut novel, The Hanging Creek Chronicles: Shadows of Martial Law, the first in a dystopian trilogy tailored for preparedness enthusiasts and post-apocalyptic fiction fans. Inspired by A. American’s Going Home series, he began this novel over ten years ago during dialysis treatments, transforming hardship into a creative pursuit. As a podcast producer for authors in the dystopian genre and preparedness community, Russ channels his deep survivalist knowledge into narratives of societal breakdown.
              </p>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
              An avid fisherman and hunter, Russ teaches basic firearms instruction and, alongside his wife, Theresa, is a mainstay at preparedness events like Mountain Readiness, where he sharpens skills for an uncertain future. His military discipline and outdoor passions infuse his storytelling with gritty realism, resonating with readers who value self-reliance and practical know-how.
              </p>
              <p className="text-lg text-gray-700 font-western leading-relaxed">
              When not writing or podcasting, Russ is casting a line, tracking game, or engaging with the preparedness community. Stay tuned for the next chapters of The Hanging Creek Chronicles and more from Russ’s distinctive voice in dystopian fiction.
              </p>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-american-blue font-western mb-4">
              PUBLISHED WORKS
            </h2>
            <div className="h-1 w-16 bg-bold-red mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 font-western italic">
              Coming Soon
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-american-blue py-16 text-white text-center">
          <h2 className="text-4xl font-bold font-western mb-6">
            CONNECT WITH THE AUTHOR
          </h2>
          <p className="text-xl font-western mb-8 max-w-2xl mx-auto">
            Interested in book signings, speaking engagements, or literary collaborations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleButtonClick('book-signing')}
              className="px-8 py-3 bg-bold-red text-white font-bold font-western text-lg hover:bg-red-700 transition-colors duration-300"
            >
              BOOK SIGNING REQUEST
            </button>
            <button 
              onClick={() => handleButtonClick('media-inquiry')}
              className="px-8 py-3 border-2 border-white text-white font-bold font-western text-lg hover:bg-white hover:text-american-blue transition-colors duration-300"
            >
              MEDIA INQUIRIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;