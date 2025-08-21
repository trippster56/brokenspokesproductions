import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Patriotic Stripes */}
      <div className="w-full">
        <div className="h-2 bg-bold-red"></div>
        <div className="h-2 bg-white"></div>
        <div className="h-2 bg-american-blue"></div>
      </div>
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-american-blue font-western text-lg mb-2">
            2025 Broken Spokes Productions. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Made by{' '}
            <a 
              href="https://tripplisenby.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bold-red hover:underline"
            >
              Tripp Lisenby
            </a>
          </p>
          <div className="mt-2">
            <Link 
              to="/subscribe" 
              className="text-gray-600 hover:text-bold-red transition-colors duration-300 font-western text-lg"
            >
              Subscribe to Our Newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;