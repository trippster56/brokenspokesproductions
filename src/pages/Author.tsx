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
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img 
                src="https://m.media-amazon.com/images/I/91dy4nu+ZWL._SL1500_.jpg" 
                alt="The Hanging Creek Chronicles: Shadows of Martial Law"
                className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg border-4 border-american-blue"
                loading="lazy"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-american-blue font-western mb-4">
                THE HANGING CREEK CHRONICLES: SHADOWS OF MARTIAL LAW
              </h2>
              <div className="h-1 w-16 bg-bold-red mb-6"></div>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
              In The Hanging Creek Chronicles: Shadows of Martial Law, a shocking political upheaval plunges the U.S. into chaos as the Speaker of the House declares herself President and imposes martial law, targeting “conspiracy theorists, Right-wingers, and rednecks.” 
              </p>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
              For Cole Ramsey, a retired veteran, the edict threatens his family’s quiet life at Pete’s Place, a farmstead just miles from a volatile interstate. As local thugs, led by the menacing Joe-Dee, exploit the unrest to terrorize the community, Cole, his wife Nora, and their tight-knit group arm themselves with rifles, shotguns, and resolve. With betrayal lurking—embodied by the corrupt Sheriff Dobbins—Cole’s survival skills are tested in a desperate stand to protect his home. 
              </p>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
              Inspired by authors such as A. American, Pete Robertucci, and Franklin Horton, this dystopian thriller weaves raw action, family loyalty, and self-reliance into a chilling vision of societal collapse.
              </p>
              <div className="mt-8">
                <a 
                  href="https://www.amazon.com/dp/B0FMQF8X45?crid=104FDT0LX7ELO&dib=eyJ2IjoiMSJ9.B16VDYEa1bvwBeSppP7iBwRENEzEFmi4EkTFK27-fb1q4x-kntPXo5Ici7kF66JgswybJsEoKMODcIcAf0uDa-JI_x4zfaPs9lb5qKP2swxnNGXEMg1KUKpYo_dddzii6QbYX4I85Jniq0wvvkjw2TP88aE0D59hbVFoPVs1t_orY8Kkv-bLTQLorWygMbmZOJ3ODzw36_zYbYS3w_2vUUt0jRhaojaYnoXMa0qdiOI.tuDx6dWdyYvfkp-OZc1D02gpS0U_Ut02J4uxws7WeuM&dib_tag=se&keywords=RUSS+SAWYER&qid=1755463410&sprefix=russ+sawyer,aps,140&sr=8-2&linkCode=sl1&tag=586301-20&linkId=9bf86798523245e8c245071259d54a55&language=en_US&ref_=as_li_ss_tl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-bold-red text-white font-bold font-western text-lg hover:bg-red-700 transition-colors duration-300 inline-block"
                >
                  GET YOUR COPY TODAY
                </a>
              </div>
            </div>
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