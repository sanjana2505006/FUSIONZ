import React, { useEffect, useRef } from 'react';
import { Palette, Users, Package } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, delay }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            stepRef.current?.classList.add('translate-x-0', 'opacity-100');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={stepRef}
      className="flex items-start gap-6 transform translate-x-10 opacity-0 transition-all duration-700"
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From our artisans to you, discover how we create style with purpose.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-10">
            <Step 
              icon={<Palette size={32} />}
              title="Choose Your Style"
              description="Browse our collections and find pieces that speak to you, all crafted with unique cultural inspirations."
              delay={200}
            />
            
            <Step 
              icon={<Users size={32} />}
              title="Artisans Create"
              description="Local skilled artisans carefully craft each piece, earning fair wages in a supportive environment."
              delay={400}
            />
            
            <Step 
              icon={<Package size={32} />}
              title="Delivery & Glow Up"
              description="Receive your order quickly in sustainable packaging, and rock your new style knowing you've made a positive impact."
              delay={600}
            />
          </div>
          
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden h-[500px]">
            <img 
              src="https://images.pexels.com/photos/8386448/pexels-photo-8386448.jpeg" 
              alt="Artisan crafting clothing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Real Impact</h3>
              <p className="text-white/90 mb-4">Every purchase creates opportunity and preserves cultural craftsmanship traditions.</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                <span>100+ Artisans Employed</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                <span>80% Women-Led Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;