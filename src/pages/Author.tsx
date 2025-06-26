import React from 'react';
import { Book, Award, ExternalLink, Mail } from 'lucide-react';

const Author: React.FC = () => {
  const books = [
    {
      id: 1,
      title: "Trails of the Old West",
      subtitle: "Stories from the Frontier",
      cover: "https://via.placeholder.com/400x600/002C63/FFFFFF?text=Trails+of+the+Old+West",
      description: "A collection of authentic Western tales that capture the spirit of the American frontier.",
      year: "2023",
      pages: "284 pages",
      genre: "Western Fiction"
    },
    {
      id: 2,
      title: "Broken Spokes",
      subtitle: "A Ranch Life Memoir",
      cover: "https://via.placeholder.com/400x600/B31942/FFFFFF?text=Broken+Spokes",
      description: "Personal stories from life on a working ranch, exploring tradition and change in modern America.",
      year: "2022",
      pages: "356 pages",
      genre: "Memoir"
    },
    {
      id: 3,
      title: "Voices of the Range",
      subtitle: "Oral Histories of the American West",
      cover: "https://via.placeholder.com/400x600/002C63/FFFFFF?text=Voices+of+the+Range",
      description: "Collected interviews and stories from ranchers, cowboys, and Western communities.",
      year: "2021",
      pages: "428 pages",
      genre: "Non-Fiction"
    }
  ];

  const awards = [
    "Western Writers of America Spur Award Finalist - 2023",
    "Colorado Book Award Winner - 2022",
    "Independent Publisher Book Award - Silver Medal",
    "Foreword INDIES Award Honorable Mention"
  ];

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
            Author • Storyteller • Western Heritage Preservationist
          </p>
        </div>

        {/* Author Bio Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://via.placeholder.com/600x400/002C63/FFFFFF?text=Russ+Sawyer+Author" 
                alt="Russ Sawyer - Author"
                className="w-full rounded-lg shadow-lg border-4 border-american-blue"
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
            <div className="h-1 w-20 bg-bold-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white border-2 border-gray-200 hover:border-american-blue shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-bold-red text-white px-3 py-1 text-sm font-bold font-western">
                      {book.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-bold-red font-western font-bold">
                      {book.genre}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-american-blue font-western mb-2">
                    {book.title}
                  </h3>
                  <h4 className="text-lg text-gray-600 font-western italic mb-4">
                    {book.subtitle}
                  </h4>
                  <p className="text-gray-700 font-western mb-4 leading-relaxed">
                    {book.description}
                  </p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 font-western">
                      {book.pages}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-bold-red text-white font-bold font-western py-2 px-4 hover:bg-red-700 transition-colors duration-300 text-sm">
                      LEARN MORE
                    </button>
                    <button className="px-3 py-2 border-2 border-american-blue text-american-blue hover:bg-american-blue hover:text-white transition-colors duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="bg-gray-50 p-12 mb-20 border-l-4 border-bold-red">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-american-blue font-western mb-4">
              AWARDS & RECOGNITION
            </h2>
            <div className="h-1 w-16 bg-bold-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Award size={20} className="text-bold-red flex-shrink-0" />
                <span className="text-gray-700 font-western">{award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Author Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-american-blue font-western mb-4">
              LITERARY SERVICES
            </h2>
            <div className="h-1 w-20 bg-bold-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-t-4 border-bold-red shadow-lg text-center">
              <Book size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                SPEAKING ENGAGEMENTS
              </h3>
              <p className="text-gray-700 font-western">
                Available for book readings, Western heritage events, and literary festivals.
              </p>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-bold-red shadow-lg text-center">
              <Mail size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                WRITING WORKSHOPS
              </h3>
              <p className="text-gray-700 font-western">
                Workshops on Western storytelling, memoir writing, and authentic voice development.
              </p>
            </div>
            
            <div className="bg-white p-8 border-t-4 border-bold-red shadow-lg text-center">
              <Award size={48} className="text-american-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                MANUSCRIPT CONSULTING
              </h3>
              <p className="text-gray-700 font-western">
                Editorial consultation for Western fiction and non-fiction manuscripts.
              </p>
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
            <button className="px-8 py-3 bg-bold-red text-white font-bold font-western text-lg hover:bg-red-700 transition-colors duration-300">
              BOOK SIGNING REQUEST
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold font-western text-lg hover:bg-white hover:text-american-blue transition-colors duration-300">
              MEDIA INQUIRIES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;