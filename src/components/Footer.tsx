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
          <p className="text-american-blue font-western text-lg mb-4">
            © 2025 Broken Spokes Productions. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-bold-red transition-colors duration-300 font-western"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-bold-red transition-colors duration-300 font-western"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;