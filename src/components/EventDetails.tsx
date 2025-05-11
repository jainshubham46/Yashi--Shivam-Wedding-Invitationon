import React from 'react';
import { events } from '../constants/data';

const EventDetails: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Wedding Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We would be honored to have you join us for these special moments as we begin our new life together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => {
            const EventIcon = event.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 h-2" />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 mx-auto">
                    <EventIcon className="text-rose-500" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-col items-center text-gray-600 mb-4">
                    <p className="font-medium">{event.date}</p>
                    <p>{event.time}</p>
                    <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm text-center">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#rsvp"
            className="inline-block px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
          >
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;