import React from 'react';
import { CreditCard, Briefcase, Home, LineChart, PiggyBank as  ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Gold Banking Services</h1>
              <p className="text-xl text-gray-600 mb-8 reveal delay-1">
                Discover our comprehensive range of PMMC-accredited gold banking services designed to meet the needs of 
                traders, investors, and miners.
              </p>
            </div>
          </div>
        </section>

        {/* Gold Trading Services */}
        <section className="section bg-white lg:p-6 p-2">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Gold Trading Solutions</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Tailored services for gold traders to securely buy, sell, and transfer precious metals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<CreditCard size={32} />}
                title="Gold Escrow Accounts"
                description="Specialized escrow services for gold transactions, featuring real-time balance tracking and immediate international transfer capabilities."
                link="/services/escrow"
                delay="delay-1"
              />
              
              <ServiceCard 
                icon={<LineChart size={32} />}
                title="Gold-to-Currency Conversion"
                description="Instant conversion services between gold and multiple currencies with competitive rates and minimal fees."
                link="/services/conversion"
                delay="delay-2"
              />
              
              <ServiceCard 
                icon={<ShieldCheck size={32} />}
                title="Certified Gold Storage"
                description="PMMC-approved storage facilities in Kumasi, with comprehensive insurance coverage at just $15 per kilogram monthly."
                link="/services/storage"
                delay="delay-3"
              />
            </div>
          </div>
        </section>

        {/* Gold Financing */}
        <section className="section bg-primary-50 lg:px-6 px-2">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Gold-Backed Financing</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Leverage your gold holdings with competitive financing solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Briefcase size={32} />}
                title="Gold-Backed Loans"
                description="Loans up to 70% of asset value with transparent 6.5% APR rates and flexible repayment terms for traders and miners."
                link="/services/loans"
                delay="delay-1"
              />
              
              <ServiceCard 
                icon={<Home size={32} />}
                title="Mining Equipment Financing"
                description="Specialized financing for gold mining equipment, secured by future production or existing gold assets."
                link="/services/equipment"
                delay="delay-2"
              />
              
              <ServiceCard 
                icon={<Globe size={32} />}
                title="International Gold Transfers"
                description="Secure, compliant international gold transfers with full documentation for regulatory requirements."
                link="/services/transfers"
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
                Find answers to common questions about our gold banking services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <FaqItem 
                question="How is my gold secured in your storage facilities?"
                answer="Our PMMC-approved storage facilities feature 24/7 biometric security, armed guards, motion sensors, and 360° surveillance. All gold deposits are fully insured and independently audited quarterly."
                delay="delay-1"
              />
              
              <FaqItem 
                question="What documentation do I need to open a gold escrow account?"
                answer="You'll need to provide government-issued ID, proof of address, and complete our KYC process in compliance with Bank of Ghana regulations. For business accounts, additional company documentation is required."
                delay="delay-2"
              />
              
              <FaqItem 
                question="How quickly can I convert my gold to currency?"
                answer="As the first Ghanaian bank to offer instant gold-to-currency conversions, we process most transactions within minutes during business hours. International transfers typically complete within 24-48 hours."
                delay="delay-3"
              />
              
              <FaqItem 
                question="What are the fees for gold storage services?"
                answer="Our gold storage service costs $15 per kilogram monthly, which includes comprehensive insurance coverage, climate-controlled vault storage, and regular auditing."
                delay="delay-4"
              />
              
              <FaqItem 
                question="How do I qualify for a gold-backed loan?"
                answer="To qualify, you must have verified gold assets stored with us or be willing to transfer them to our secure vaults. Loans are available for up to 70% of the current market value of your gold."
                delay="delay-5"
              />
            </div>
          </div>
        </section>
      </main>

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
