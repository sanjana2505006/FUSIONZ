import React, { useState } from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addToCart } = useCart();
  
  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.tag && (
        <div className="absolute top-4 left-4 z-10 bg-pink-400 text-white text-xs font-medium px-2 py-1 rounded-full">
          {product.tag}
        </div>
      )}
      
      <div className="relative overflow-hidden h-72">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
        />
        
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-pink-400 hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button 
            onClick={() => addToCart(product, selectedSize)}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-pink-400 hover:text-white transition-colors"
          >
            <ShoppingBag size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-pink-400 hover:text-white transition-colors">
            <Eye size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category.charAt(0).toUpperCase() + product.category.slice(1)} Collection</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-pink-500">{formatPrice(product.price)}</span>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="text-sm border rounded px-2 py-1"
          >
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() => addToCart(product, selectedSize)}
          className="w-full bg-gray-100 hover:bg-pink-400 hover:text-white text-gray-800 py-2 rounded transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;