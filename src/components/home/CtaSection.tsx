import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="section bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">Ready to Start Gold Banking with Adinkrah Trust?</h2>
          <p className="text-xl text-primary-100 mb-8 reveal delay-1">
            Join Ghana's leading gold banking institution and experience secure, PMMC-accredited gold trading, storage, and financing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              to="/contact"
              className="btn btn-accent flex items-center justify-center sm:justify-start"
            >
              Contact Our Gold Specialists
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/services"
              className="btn btn-outline btn-white flex items-center justify-center sm:justify-start"
            >
              Explore Gold Services
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-primary-800/50 rounded-lg reveal delay-3">
            <p className="text-lg font-medium mb-2">PMMC Accredited Gold Handler</p>
            <p className="text-primary-100">
              Adinkrah Trust Bank is fully licensed by the Bank of Ghana (License No. BG/GOV/5763) and accredited by the Precious Minerals Marketing Company (PMMC) for gold trading and storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
