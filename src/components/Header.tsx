import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { couple } from '../constants/data';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white bg-opacity-90 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className={`mr-2 ${scrolled ? 'text-rose-500' : 'text-white'}`} size={24} />
          <h1 
            className={`font-semibold text-xl tracking-wider ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {couple.brideFirstName} & {couple.groomFirstName}
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'Our Story', 'Events', 'Gallery', 'Wishes'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-rose-400 ${
                    scrolled ? 'text-gray-600' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;