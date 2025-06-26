import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

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
    <nav className="bg-white border-b-4 border-american-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Settings 
                size={40} 
                className="text-american-blue group-hover:text-bold-red transition-colors duration-300 transform group-hover:rotate-45" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-american-blue group-hover:text-bold-red transition-colors duration-300 font-western">
                BROKEN SPOKES
              </span>
              <span className="text-sm text-gray-600 font-western tracking-wide">
                PRODUCTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-american-blue hover:text-bold-red transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-american-blue">
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
    </nav>
  );
};

export default Navigation;