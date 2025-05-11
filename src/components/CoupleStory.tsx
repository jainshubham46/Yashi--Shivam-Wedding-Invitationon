import React from 'react';
import { timeline } from '../constants/data';

const CoupleStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Love Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's how our journey unfolded.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row mb-16 md:mb-24 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div 
                className="md:w-1/2 flex justify-center items-start mb-6 md:mb-0"
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-duration="1000"
              >
                <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 group-hover:bg-opacity-30" />
                </div>
              </div>
              
              <div 
                className={`md:w-1/2 flex items-center ${
                  index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'
                }`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div>
                  <div 
                    className={`inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-3 ${
                      index % 2 === 0 ? '' : 'md:ml-auto'
                    }`}
                  >
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoupleStory;