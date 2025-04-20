import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import Background3D from './Background3D';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryProducts = products.filter(
    product => product.category === category
  );

  const getCategoryTitle = () => {
    switch (category) {
      case 'korean':
        return 'Korean Collection';
      case 'chinese':
        return 'Chinese Collection';
      case 'japanese':
        return 'Japanese Collection';
      case 'desi':
        return 'Desi Fusion';
      case 'neutral':
        return 'Gender-Neutral Collection';
      default:
        return 'Collection';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pt-20">
      <Background3D />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">{getCategoryTitle()}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;