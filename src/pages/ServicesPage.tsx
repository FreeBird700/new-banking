import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { CreditCard, Briefcase, Home, LineChart, PiggyBank as Piggy, ShieldCheck, Globe, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Our Services</h1>
              <p className="text-xl text-gray-600 mb-8 reveal delay-1">
                Discover our comprehensive range of banking services designed to meet your financial needs, 
                whether personal or business.
              </p>
            </div>
          </div>
        </section>

        {/* Personal Banking */}
        <section className="section bg-white lg:p-6 p-2">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Personal Banking</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Tailored solutions for individuals to manage and grow their finances effectively.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<CreditCard size={32} />}
                title="Checking & Savings"
                description="Flexible accounts with competitive interest rates and easy access to your money whenever you need it."
                link="/services/personal"
                delay="delay-1"
              />
              
              <ServiceCard 
                icon={<LineChart size={32} />}
                title="Investments"
                description="Grow your wealth with our range of investment options, from mutual funds to retirement planning."
                link="/services/investments"
                delay="delay-2"
              />
              
              <ServiceCard 
                icon={<Home size={32} />}
                title="Mortgages & Loans"
                description="Competitive rates on mortgages, personal loans, and lines of credit to help you achieve your goals."
                link="/services/loans"
                delay="delay-3"
              />
              
              <ServiceCard 
                icon={<CreditCard size={32} />}
                title="Credit Cards"
                description="Rewards cards, travel cards, and cashback options to suit your spending habits and lifestyle."
                link="/services/creditcards"
                delay="delay-1"
              />
              
              <ServiceCard 
                icon={<Piggy size={32} />}
                title="Retirement Planning"
                description="Secure your future with our retirement accounts and personalized planning services."
                link="/services/retirement"
                delay="delay-2"
              />
              
              <ServiceCard 
                icon={<ShieldCheck size={32} />}
                title="Insurance"
                description="Protect what matters most with our comprehensive insurance solutions for life, home, and auto."
                link="/services/insurance"
                delay="delay-3"
              />
            </div>
          </div>
        </section>

        {/* Business Banking */}
        <section className="section bg-primary-50 lg:px-6 px-2">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Business Banking</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Comprehensive solutions to help your business thrive and grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Briefcase size={32} />}
                title="Business Accounts"
                description="Tailored checking and savings accounts designed specifically for businesses of all sizes."
                link="/services/business"
                delay="delay-1"
              />
              
              <ServiceCard 
                icon={<LineChart size={32} />}
                title="Merchant Services"
                description="Accept payments seamlessly with our secure and efficient payment processing solutions."
                link="/services/merchant"
                delay="delay-2"
              />
              
              <ServiceCard 
                icon={<Globe size={32} />}
                title="International Banking"
                description="Expand your business globally with our international banking services and foreign exchange solutions."
                link="/services/international"
                delay="delay-3"
              />
            </div>
          </div>
        </section>

      
        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Find answers to common questions about our services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FaqItem 
                question="How do I open an account with SecureBank?"
                answer="You can open an account online through our website, through our mobile app, or by visiting any of our branch locations. You'll need to provide identification and proof of address."
                delay="delay-1"
              />
              
              <FaqItem 
                question="What are the hours for customer support?"
                answer="Our customer support team is available 24/7 via phone at +1 (555) 123-4567. Live chat support is available from 7 AM to 11 PM ET, seven days a week."
                delay="delay-2"
              />
              
              <FaqItem 
                question="How are my deposits insured?"
                answer="Deposits at SecureBank are insured by the FDIC up to $250,000 per depositor, for each account ownership category."
                delay="delay-3"
              />
              
              <FaqItem 
                question="Can I use my SecureBank card internationally?"
                answer="Yes, SecureBank cards can be used worldwide wherever Visa or Mastercard is accepted. For security, we recommend notifying us before you travel."
                delay="delay-4"
              />
              
              <FaqItem 
                question="How do I report a lost or stolen card?"
                answer="You can report a lost or stolen card immediately through our mobile app, online banking, or by calling our 24/7 customer service at +1 (555) 123-4567."
                delay="delay-5"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

// Helper Components
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  return (
    <div className={`card p-6 hover:translate-y-[-8px] transition-all duration-300 reveal ${delay}`}>
      <div className="rounded-full bg-primary-100 p-4 w-fit mb-6 text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
      >
        Learn more
        <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

interface DigitalFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DigitalFeature: React.FC<DigitalFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="bg-primary-100 p-3 rounded-lg mr-4 text-primary-700">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
  delay: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`border-b border-gray-200 py-6 reveal ${delay}`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div 
        className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

export default ServicesPage;