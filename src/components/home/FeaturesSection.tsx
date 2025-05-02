import React from 'react';
import { Shield, CreditCard, DollarSign, Briefcase, Clock, Smartphone } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="section bg-gray-50 ">
      <div className="container mx-auto px-4 lg:p-6 p-2">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Banking Features For Your Needs</h2>
          <p className="text-lg text-gray-600 reveal delay-1">
            Discover powerful tools and services designed to make your financial journey smooth and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield size={40} />}
            title="Secure Banking"
            description="Bank with confidence knowing your transactions and data are protected with top-tier security protocols."
            delay="delay-1"
          />
          
          <FeatureCard 
            icon={<CreditCard size={40} />}
            title="Digital Cards"
            description="Manage your cards digitally, set limits, freeze cards instantly, and monitor transactions in real-time."
            delay="delay-2"
          />
          
          <FeatureCard 
            icon={<DollarSign size={40} />}
            title="Smart Savings"
            description="Automated savings tools and goals to help you save for what matters most to you."
            delay="delay-3"
          />
          
          <FeatureCard 
            icon={<Briefcase size={40} />}
            title="Business Tools"
            description="Specialized services for businesses of all sizes, from startups to established enterprises."
            delay="delay-1"
          />
          
          <FeatureCard 
            icon={<Clock size={40} />}
            title="24/7 Access"
            description="Bank on your schedule with round-the-clock access to your accounts and services."
            delay="delay-2"
          />
          
          <FeatureCard 
            icon={<Smartphone size={40} />}
            title="Mobile Banking"
            description="Complete banking functionality in the palm of your hand with our award-winning mobile app."
            delay="delay-3"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`card p-6 hover:translate-y-[-8px] transition-all duration-300 reveal ${delay}`}>
      <div className="rounded-full bg-primary-100 p-4 w-fit mb-6 text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;