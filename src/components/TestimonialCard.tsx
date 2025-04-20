import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  // Alternating styles
  const isEven = index % 2 === 0;
  const bgColor = isEven ? 'bg-purple-50' : 'bg-pink-50';
  const chatTailPosition = isEven ? 'left-4' : 'right-4';
  const chatTailColor = isEven ? 'border-l-purple-50' : 'border-r-pink-50';
  
  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 animate-pop-in" style={{ animationDelay: `${index * 150}ms` }}>
      {/* Chat Bubble */}
      <div className={`relative ${bgColor} p-6 rounded-2xl shadow-sm`}>
        {/* Chat Tail */}
        <div className={`absolute ${chatTailPosition} -bottom-3 w-0 h-0 border-8 border-transparent ${isEven ? 'border-t-purple-50' : 'border-t-pink-50'}`}></div>
        
        {/* Rating */}
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        
        {/* Comment */}
        <p className="text-gray-700 mb-2 italic">"{testimonial.comment}"</p>
      </div>
      
      {/* User */}
      <div className={`flex items-center gap-3 mt-5 ${isEven ? 'ml-4' : 'mr-4 justify-end'}`}>
        <div className={`${isEven ? 'order-first' : 'order-last'} w-10 h-10 rounded-full overflow-hidden`}>
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;