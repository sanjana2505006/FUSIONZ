import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend/API
    setSubmitted(true);
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Join the Movement</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          Be the first to know about our drops, artisan stories, and exclusive offers. 
          No spam, pinky promise!
        </p>
        
        {submitted ? (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Send size={24} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">You're In!</h3>
            <p className="text-gray-600 mb-0">
              Thanks for joining our community. Get ready for some serious style inspiration!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-2 rounded-full shadow-md flex items-center max-w-md mx-auto overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="bg-pink-400 text-white rounded-full px-6 py-3 font-medium hover:bg-pink-500 transition-colors flex items-center justify-center group"
            >
              Subscribe
              <Send size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-gray-600 text-sm">
          <span># fashionmovement</span>
          <span># genzcollective</span>
          <span># asianfusion</span>
          <span># artisanmade</span>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;