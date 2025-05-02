import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  delay: string;
}

const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 reveal delay-1">
            Hear from gold traders and investors who trust Adinkrah Trust Bank with their precious metal assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="As a gold trader, I need security and efficiency. Adinkrah Trust Bank's escrow services have transformed how I conduct international transactions."
            name="Kwabena Mensah"
            title="Gold Trader, Accra"
            image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
            rating={5}
            delay="delay-1"
          />
          
          <Testimonial 
            quote="Their gold storage facilities are world-class. The biometric security and regular audits give me complete peace of mind about my assets."
            name="Abena Osei"
            title="Gold Investor"
            image="https://images.pexels.com/photos/6533883/pexels-photo-6533883.jpeg?auto=compress&cs=tinysrgb&w=300"
            rating={5}
            delay="delay-2"
          />
          
          <Testimonial 
            quote="The gold-backed financing helped me expand my mining operation when traditional banks wouldn't. Their understanding of the gold industry makes all the difference."
            name="Emmanuel Darko"
            title="Mining Company Owner"
            image="https://images.pexels.com/photos/5878520/pexels-photo-5878520.jpeg?auto=compress&cs=tinysrgb&w=300"
            rating={5}
            delay="delay-3"
          />
        </div>
      </div>
    </section>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image, rating, delay }) => {
  return (
    <div className={`card p-6 hover:shadow-lg transition-all duration-300 reveal ${delay}`}>
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-500 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
