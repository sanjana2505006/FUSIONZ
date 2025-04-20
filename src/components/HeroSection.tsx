import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const heroImages = [
  'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg',
  'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    // Start text animation
    setAnimateText(true);

    // Image carousel logic
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      // Reset and restart text animation
      setAnimateText(false);
      setTimeout(() => setAnimateText(true), 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <img
            src={img}
            alt={`Hero image ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
          <span 
            className={`block transform transition-all duration-700 ${
              animateText 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{transitionDelay: '300ms'}}
          >
            Redefining Fashion
          </span>
          <span 
            className={`block transform transition-all duration-700 ${
              animateText 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            }`}
            style={{transitionDelay: '600ms'}}
          >
            for Gen Z
          </span>
        </h1>
        
        <p 
          className={`text-lg md:text-xl max-w-lg mb-8 transform transition-all duration-700 ${
            animateText 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{transitionDelay: '900ms'}}
        >
          Where style meets purpose. Created by artisans, designed for you.
        </p>
        
        <button 
          onClick={() => scrollToSection('shop')}
          className={`bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full flex items-center transform transition-all duration-700 ${
            animateText 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{transitionDelay: '1200ms'}}
        >
          Explore Collection
          <ArrowRight className="ml-2" size={18} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;