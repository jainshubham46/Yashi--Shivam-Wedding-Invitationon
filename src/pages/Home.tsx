import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CoupleStory from '../components/CoupleStory';
import EventDetails from '../components/EventDetails';
import PhotoGallery from '../components/PhotoGallery';
import WishForm from '../components/WishForm';
import RSVP from '../components/RSVP';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Yashi & Shivam - Wedding Celebration';
    
    // You could add scroll animations library initialization here if needed
    // For example, AOS (Animate on Scroll)
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <CoupleStory />
      <EventDetails />
      <PhotoGallery />
      <WishForm />
      <RSVP />
      <Footer />
    </div>
  );
};

export default Home;