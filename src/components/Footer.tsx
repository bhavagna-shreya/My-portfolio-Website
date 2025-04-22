import React from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
          
          <div className="text-center mb-6">
            <a 
              href="#home" 
              className="text-xl font-bold text-white hover:text-purple-400 transition-colors"
            >
              Portfolio
            </a>
            <p className="mt-2 max-w-md mx-auto">
              Creating exceptional digital experiences through creative design and development.
            </p>
          </div>
          
          <div className="w-24 h-px bg-gray-800 mb-6"></div>
          
          <div className="mb-6">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-400 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <p className="text-sm">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}