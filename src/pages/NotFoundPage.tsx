import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600 mb-2">404</h1>
              <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/"
                className="btn btn-primary flex items-center"
              >
                <Home size={18} className="mr-2" />
                Return Home
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="btn btn-secondary flex items-center"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;