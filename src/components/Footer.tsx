import React from 'react';
import { Instagram, Linkedin, Twitter, Facebook, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">FUSIONZ</h2>
            <p className="text-gray-300 mb-4">
              Redefining fashion for Gen Z with purpose, style, and cultural inspiration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Korean Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Chinese Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Japanese Collection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Desi Fusion</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Gender-Neutral</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-pink-400 transition-colors">Our Impact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Press</a></li>
            </ul>
          </div>
          
          {/* Help Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} FUSIONZ. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-gray-400 text-sm">
              <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-pink-400 transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;