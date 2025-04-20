import React, { useEffect, useRef } from 'react';
import { Heart, Users, Truck } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;
      
      const sectionPos = sectionRef.current.getBoundingClientRect();
      const timelinePos = timelineRef.current.getBoundingClientRect();
      
      // If section is in viewport
      if (sectionPos.top < window.innerHeight * 0.75 && sectionPos.bottom > 0) {
        timelineRef.current.classList.add('animate-timeline');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Born from a simple idea: what if fashion could look good and do good at the same time?
            FUSIONZ combines cutting-edge Gen Z style with real social impact.
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={28} className="text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Fashion with Purpose</h3>
            <p className="text-gray-600">
              Every piece we create combines stunning Gen Z aesthetics with a commitment to positive change.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={28} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Artisan Collaboration</h3>
            <p className="text-gray-600">
              We partner with skilled local artisans, providing fair wages and sustainable employment opportunities.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck size={28} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Ethical Delivery</h3>
            <p className="text-gray-600">
              Fast fashion without the ethical cost. We deliver quickly while maintaining our commitment to sustainability.
            </p>
          </div>
        </div>
        
        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-3xl mx-auto px-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
          
          {/* Year 1 */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-pink-400 z-10 flex items-center justify-center text-white font-bold">1</div>
            <div className="ml-auto mr-8 md:mr-16 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">The Spark (2023)</h3>
              <p className="text-gray-600">
                Founded by fashion students with a vision to merge Asian and South Asian styles with Gen Z aesthetics.
              </p>
            </div>
          </div>
          
          {/* Year 2 */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-purple-400 z-10 flex items-center justify-center text-white font-bold">2</div>
            <div className="mr-auto ml-8 md:ml-16 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Finding Our Voice (2024)</h3>
              <p className="text-gray-600">
                Partnered with our first group of artisans and launched our initial collection to widespread acclaim.
              </p>
            </div>
          </div>
          
          {/* Year 3 */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-blue-400 z-10 flex items-center justify-center text-white font-bold">3</div>
            <div className="ml-auto mr-8 md:mr-16 w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Today (2025)</h3>
              <p className="text-gray-600">
                Growing our community and expanding our impact, with new collections that push fashion boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;