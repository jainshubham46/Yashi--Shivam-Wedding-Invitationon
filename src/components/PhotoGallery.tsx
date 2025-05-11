import React, { useState } from 'react';
import { gallery } from '../constants/data';

const PhotoGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setActivePhoto(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhoto(null);
    document.body.style.overflow = 'auto';
  };

  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (activePhoto === null) return;
    
    const currentIndex = gallery.findIndex(photo => photo.id === activePhoto);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % gallery.length;
    } else {
      newIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    }
    
    setActivePhoto(gallery[newIndex].id);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Precious Moments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our journey together, capturing the joy, laughter, and love we've shared.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((photo, index) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(photo.id)}
              data-aos="fade-up"
              data-aos-delay={50 * index}
            >
              <img 
                src={photo.image} 
                alt={photo.caption} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {activePhoto !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white text-xl focus:outline-none z-10"
            onClick={closeLightbox}
          >
            ✕
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl focus:outline-none hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('prev');
            }}
          >
            ‹
          </button>
          
          <div 
            className="max-w-4xl max-h-screen p-4" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={gallery.find(photo => photo.id === activePhoto)?.image}
              alt={gallery.find(photo => photo.id === activePhoto)?.caption}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
            />
            <p className="text-white text-center mt-4">
              {gallery.find(photo => photo.id === activePhoto)?.caption}
            </p>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl focus:outline-none hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigatePhoto('next');
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;