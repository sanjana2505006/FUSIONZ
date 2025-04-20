import React from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Gen Z Voice</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our community is saying about their FUSIONZ experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;