import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our most popular designs, handcrafted with care and designed to make a statement.
          </p>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-pink-400 text-pink-500 font-medium px-8 py-3 rounded-full hover:bg-pink-400 hover:text-white transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;