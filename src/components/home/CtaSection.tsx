import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-800 to-primary-700 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side: Image */}
            <div className="relative h-80 md:h-auto overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="Banking app on smartphone" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary-900/30"></div>
            </div>
            
            {/* Right side: Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 reveal">Ready to Take Control of Your Finances?</h2>
              <p className="text-primary-100 mb-8 reveal delay-1">
                Join thousands of satisfied customers who have transformed their banking experience with SecureBank. Open an account in minutes.
              </p>
              
              {/* Benefits */}
              <div className="mb-8 reveal delay-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <BenefitItem text="No hidden fees" />
                  <BenefitItem text="24/7 customer support" />
                  <BenefitItem text="Mobile banking app" />
                  <BenefitItem text="Secure transactions" />
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="reveal delay-3">
                <Link 
                  to="/login" 
                  className="btn bg-accent-500 hover:bg-accent-600 text-white font-medium inline-flex items-center"
                >
                  Open an Account
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center">
    <div className="bg-accent-500 rounded-full p-1 mr-3">
      <Check size={16} className="text-white" />
    </div>
    <span className="text-white">{text}</span>
  </div>
);

export default CtaSection;