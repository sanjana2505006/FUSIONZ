import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ShopSection from './components/ShopSection';
import FeaturedProducts from './components/FeaturedProducts';
import ImpactSection from './components/ImpactSection';
import TestimonialSection from './components/TestimonialSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import SizeCalculator from './components/SizeCalculator';
import Background3D from './components/Background3D';
import { CartProvider } from './context/CartContext';

import './styles/animations.css';

const HomePage: React.FC = () => (
  <>
    <Background3D />
    <HeroSection />
    <AboutSection />
    <ShopSection />
    <FeaturedProducts />
    <ImpactSection />
    <TestimonialSection />
    <NewsletterSection />
  </>
);

function App() {
  useEffect(() => {
    document.title = 'FUSIONZ | Gen Z Fashion with Purpose';
  }, []);

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/size-calculator" element={
                <div className="container mx-auto px-4 py-20">
                  <SizeCalculator />
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;