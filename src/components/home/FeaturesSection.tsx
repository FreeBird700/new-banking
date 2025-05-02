import React from 'react';
import { Shield, CreditCard, DollarSign, Briefcase, Clock, Smartphone } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeaturesSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">Gold Banking Features</h2>
          <p className="text-lg text-gray-600 reveal delay-1">
            Discover our PMMC-accredited gold services designed to make your gold trading, storage, and financing secure and efficient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield size={40} />}
            title="PMMC Accreditation"
            description="Trade with confidence knowing all our gold services are fully accredited by the Precious Minerals Marketing Company (PMMC)."
            delay="delay-1"
          />
          
          <FeatureCard 
            icon={<CreditCard size={40} />}
            title="Gold Escrow Accounts"
            description="Secure escrow services for gold transactions with real-time balance tracking and international transfer capabilities."
            delay="delay-2"
          />
          
          <FeatureCard 
            icon={<DollarSign size={40} />}
            title="Gold-Backed Loans"
            description="Leverage your gold holdings with loans up to 70% of asset value at competitive 6.5% APR rates."
            delay="delay-3"
          />
          
          <FeatureCard 
            icon={<Briefcase size={40} />}
            title="Certified Gold Storage"
            description="Store your gold in our PMMC-approved facilities with 24/7 security, climate control, and comprehensive insurance."
            delay="delay-1"
          />
          

          <FeatureCard 
            icon={<Clock size={40} />}
            title="Instant Conversions"
            description="First Ghanaian bank to offer instant gold-to-currency conversions with competitive rates and minimal fees."
            delay="delay-2"
          />
          
          <FeatureCard 
            icon={<Smartphone size={40} />}
            title="Digital Gold Banking"
            description="Access your gold accounts, initiate transfers, and monitor market prices through our secure digital platform."
            delay="delay-3"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`card p-6 hover:shadow-lg transition-all duration-300 reveal ${delay}`}>
      <div className="rounded-full bg-primary-100 p-4 w-fit mb-6 text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;
