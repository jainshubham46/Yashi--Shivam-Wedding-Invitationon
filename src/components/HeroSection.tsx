import React from 'react';
import { couple } from '../constants/data';
import { formatDate } from '../utils/dateUtils';
import { Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl mb-3 opacity-90 tracking-widest font-light animate-fade-in">
          WE ARE GETTING MARRIED
        </h2>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block transform hover:scale-105 transition-transform duration-700 text-rose-200">
            {couple.brideFirstName}
          </span>
          <span className="inline-block mx-2 md:mx-4 text-2xl md:text-4xl animate-pulse">&hearts;</span>
          <span className="block transform hover:scale-105 transition-transform duration-700 text-rose-200">
            {couple.groomFirstName}
          </span>
        </h1>
        
        <p className="text-white text-lg md:text-xl mb-12 opacity-90 font-light tracking-wide">
          {formatDate(couple.weddingDate)} {couple.location}
        </p>
        
        <div className="mt-8">
          <a 
            href="#wishes"
            className="inline-flex items-center justify-center px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium group"
          >
            <Heart className="w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform" />
            Send Wishes
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#our-story" 
          className="text-white opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;