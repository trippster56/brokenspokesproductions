import React from 'react';
import { ExternalLink } from 'lucide-react';

const AuthorwBooks: React.FC = () => {
  const books = [
    {
      id: 1,
      title: "Whiskey Creek",
      subtitle: "A Western Frontier Novel",
      cover: "https://via.placeholder.com/300x450/002C63/FFFFFF?text=Whiskey+Creek",
      description: "A gripping tale of survival and redemption set in the untamed frontier of the American West.",
      pages: "320 pages",
      year: "2023"
    },
    {
      id: 2,
      title: "The Last Roundup",
      subtitle: "Tales from the Open Range",
      cover: "https://via.placeholder.com/300x450/B31942/FFFFFF?text=The+Last+Roundup",
      description: "A collection of short stories capturing the spirit and challenges of life on the open range.",
      pages: "280 pages",
      year: "2022"
    },
    {
      id: 3,
      title: "Frontier Justice",
      subtitle: "A Marshal's Journey",
      cover: "https://via.placeholder.com/300x450/002C63/FFFFFF?text=Frontier+Justice",
      description: "Follow the journey of a frontier marshal as he brings law and order to the Wild West.",
      pages: "350 pages",
      year: "2023"
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
                Russ Sawyer is an acclaimed author and storyteller whose works capture the authentic spirit of the American West. Born and raised on a working ranch, his writing draws from a lifetime of experience with Western culture, values, and traditions.
              </p>
              <p className="text-lg text-gray-700 font-western mb-6 leading-relaxed">
                His books have been praised for their authentic voice, compelling characters, and deep respect for Western heritage. Through both fiction and non-fiction, Russ preserves and celebrates the stories that define the American frontier experience.
              </p>
              <p className="text-lg text-gray-700 font-western leading-relaxed">
                When not writing, Russ continues his storytelling work through Broken Spokes Productions, where he brings narratives to life through multimedia productions.
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white border-2 border-gray-200 hover:border-american-blue transition-all duration-300 shadow-lg hover:shadow-xl">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-american-blue font-western mb-1">
                    {book.title}
                  </h3>
                  <h4 className="text-md text-gray-600 font-western mb-3">
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
              <div key={index} className="flex items-start">
                <div className="bg-american-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-western text-lg">
                  {award}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Literary Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-american-blue font-western mb-4">
              LITERARY SERVICES
            </h2>
            <div className="h-1 w-16 bg-bold-red mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 font-western max-w-3xl mx-auto leading-relaxed">
              Russ offers a range of literary services to help bring Western stories to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-2 border-gray-200 rounded-lg text-center hover:border-american-blue transition-all duration-300">
              <div className="bg-american-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                Manuscript Review
              </h3>
              <p className="text-gray-700 font-western">
                Professional evaluation and feedback on your Western manuscript.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-gray-200 rounded-lg text-center hover:border-american-blue transition-all duration-300">
              <div className="bg-american-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                Writing Workshops
              </h3>
              <p className="text-gray-700 font-western">
                Interactive workshops on Western storytelling and character development.
              </p>
            </div>
            
            <div className="bg-white p-8 border-2 border-gray-200 rounded-lg text-center hover:border-american-blue transition-all duration-300">
              <div className="bg-american-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-american-blue font-western mb-3">
                Publishing Guidance
              </h3>
              <p className="text-gray-700 font-western">
                Expert advice on navigating the publishing industry for Western authors.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-american-blue text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-western mb-6">
            Ready to Bring Your Story to Life?
          </h2>
          <p className="text-xl font-western mb-8 max-w-3xl mx-auto">
            Whether you're looking for a speaker, workshop leader, or literary consultant, I'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-bold-red text-white font-bold font-western py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorwBooks;
