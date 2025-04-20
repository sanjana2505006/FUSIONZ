import React from 'react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';

const ShopSection: React.FC = () => {
  return (
    <section id="shop" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Shop By Category</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our unique collections inspired by diverse Asian and South Asian styles, 
            reimagined for the modern Gen Z wardrobe.
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;