import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Smartphone, Globe } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Hero: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="relative h-screen flex items-center text-white lg:p-6 pt-8">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/6694876/pexels-photo-6694876.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-4 reveal">
            Ghana's <span className="text-accent-400">Gold</span> Banking <span className="text-accent-400">Specialists</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 reveal delay-1">
            Adinkrah Trust Bank offers secure, PMMC-accredited gold trading, storage, and financing solutions for traders and investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 reveal delay-2">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="btn btn-accent flex items-center justify-center sm:justify-start"
              >
                Go to Dashboard
                <ArrowRight size={20} className="ml-2" />
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn btn-accent flex items-center justify-center sm:justify-start"
              >
                Access Gold Account
                <ArrowRight size={20} className="ml-2" />
              </Link>
            )}
            <Link
              to="/services"
              className="btn btn-secondary flex items-center justify-center sm:justify-start"
            >
              Explore Gold Services
            </Link>
          </div>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 reveal delay-3">
            <FeatureItem
              icon={<ShieldCheck size={24} className="text-accent-400" />}
              title="PMMC Accredited"
            />
            <FeatureItem
              icon={<Smartphone size={24} className="text-accent-400" />}
              title="Digital Gold Banking"
            />
            <FeatureItem
              icon={<Globe size={24} className="text-accent-400" />}
              title="International Transfers"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
    <div className="mr-3">{icon}</div>
    <p className="font-medium">{title}</p>
  </div>
);

export default Hero;
