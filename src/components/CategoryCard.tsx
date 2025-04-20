import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
      
      {/* Category Image */}
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-2 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          {category.name}
        </h3>
        <p className="text-sm text-white/90 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {category.description}
        </p>
        <div className="mt-4 transform translate-y-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="inline-block py-2 px-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-sm font-medium transition-colors">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;