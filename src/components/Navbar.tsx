import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import SearchBar from './SearchBar';
import CartDrawer from './CartDrawer';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              <span className={`font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
                FUSIONZ
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`hover:opacity-75 transition ${isScrolled ? 'text-black' : 'text-white'}`}>Home</Link>
              <Link to="/category/korean" className={`hover:opacity-75 transition ${isScrolled ? 'text-black' : 'text-white'}`}>Shop</Link>
              <Link to="/size-calculator" className={`hover:opacity-75 transition ${isScrolled ? 'text-black' : 'text-white'}`}>Size Guide</Link>
            </div>

            <div className="flex items-center space-x-4">
              <SearchBar />
              <button 
                className={`hover:opacity-75 transition relative ${isScrolled ? 'text-black' : 'text-white'}`}
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-400 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
              <button 
                className={`md:hidden hover:opacity-75 transition ${isScrolled ? 'text-black' : 'text-white'}`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex justify-end">
            <button 
              className="text-black hover:opacity-75 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <Link to="/" className="text-black hover:text-pink-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/category/korean" className="text-black hover:text-pink-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/size-calculator" className="text-black hover:text-pink-400 transition" onClick={() => setIsMobileMenuOpen(false)}>Size Guide</Link>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;