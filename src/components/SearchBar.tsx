import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (category: string) => {
    navigate(`/category/${category}`);
    setShowResults(false);
    setSearchTerm('');
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-full border border-gray-200">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 rounded-l-full focus:outline-none w-48 md:w-64"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(e.target.value.length > 0);
          }}
          onFocus={() => setShowResults(true)}
        />
        <Search size={20} className="mx-3 text-gray-400" />
      </div>

      {showResults && searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div
                key={product.id}
                className="p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleProductClick(product.category)}
              >
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;