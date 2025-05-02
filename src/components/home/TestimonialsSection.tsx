import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "SecureBank has transformed how I manage my business finances. Their online platform is intuitive, and the customer service team is always ready to help.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Financial Analyst",
    content: "As someone who works in finance, I have high standards for banking services. SecureBank exceeds them all with their attention to detail and innovative solutions.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    name: "Emily Chang",
    role: "Homeowner",
    content: "Getting a mortgage through SecureBank was surprisingly easy. They guided me through every step and found me the best possible rate.",
    rating: 4,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay when user interacts
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    
    // Resume autoplay after a period of inactivity
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    handleManualNavigation(newIndex);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % testimonials.length;
    handleManualNavigation(newIndex);
  };

  return (
    <section className="section bg-gradient-to-b from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">What Our Customers Say</h2>
          <p className="text-lg text-primary-100 reveal delay-1">
            Don't take our word for it - hear from the people who trust us with their finances.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 reveal">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-primary-300"
                      />
                      <div>
                        {/* Rating */}
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20}
                              className={i < testimonial.rating ? "text-accent-400 fill-accent-400" : "text-gray-400"}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg italic mb-4">"{testimonial.content}"</blockquote>
                        
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-primary-200">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 focus:outline-none transition-colors"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 focus:outline-none transition-colors"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-accent-400 w-6' : 'bg-white/30'
                }`}
                onClick={() => handleManualNavigation(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;