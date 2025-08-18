import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/examples', label: 'Examples' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/author', label: 'Author' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="relative">
      <nav className="bg-white border-b-4 border-american-blue shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-center items-center py-4 relative">
            {/* Logo - Only shown on mobile */}
            <div className="md:hidden">
              <Link to="/" className="block h-12 w-12">
                <img 
                  src="https://i.imgur.com/V3H2Ohm.png" 
                  alt="Broken Spokes Productions Logo"
                  className="h-full w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-western font-bold text-lg px-4 py-2 border-b-3 transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-bold-red border-bold-red'
                      : 'text-american-blue border-transparent hover:text-bold-red hover:border-bold-red'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button - positioned absolutely on the right for mobile */}
            <div className="md:hidden absolute right-0">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-american-blue hover:text-bold-red transition-colors duration-300"
              >
                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Centered logo with red bar - Hidden on mobile */}
      <div className="hidden md:block w-full py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link to="/" className="inline-block group">
            <img 
              src="https://i.imgur.com/V3H2Ohm.png" 
              alt="Broken Spokes Productions Logo"
              className="h-48 w-auto mx-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
            />
            <div className="h-1 w-24 bg-bold-red mx-auto mt-4"></div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-american-blue bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 font-western font-bold text-lg border-l-4 transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-bold-red border-bold-red bg-gray-50'
                    : 'text-american-blue border-transparent hover:text-bold-red hover:border-bold-red hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;