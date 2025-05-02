import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const NavLinks: React.FC<{ 
  isHomePage: boolean, 
  isDashboard: boolean,
  isMobile?: boolean,
  onClick?: () => void
}> = ({ 
  isHomePage, 
  isDashboard,
  isMobile,
  onClick
}) => {
  // Always use the scrolled style (text-gray-700)
  const textColor = 'text-gray-700';
  const hoverColor = 'hover:text-primary-600';
  const mobileClass = isMobile ? 'text-lg py-3 block w-full' : '';
  
  const { isAuthenticated } = useAuth();
  
  return (
    <>
      <Link 
        to="/" 
        className={`${textColor} ${hoverColor} font-medium ${mobileClass}`}
        onClick={onClick}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={`${textColor} ${hoverColor} font-medium ${mobileClass}`}
        onClick={onClick}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className={`${textColor} ${hoverColor} font-medium ${mobileClass}`}
        onClick={onClick}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        className={`${textColor} ${hoverColor} font-medium ${mobileClass}`}
        onClick={onClick}
      >
        Contact
      </Link>
      {isAuthenticated && (
        <Link 
          to="/dashboard" 
          className={`${textColor} ${hoverColor} font-medium ${mobileClass}`}
          onClick={onClick}
        >
          Dashboard
        </Link>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  // Handle route change to close mobile menu
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Determine if we're on the homepage to adjust header transparency
  const isHomePage = location.pathname === '/';
  const isDashboard = location.pathname.includes('/dashboard');

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fixed header height
  const headerHeight = '33px';

  return (
    <>
      {/* This empty div creates space for the fixed header */}
{/* This empty div creates space for the fixed header on small screens only */}
<div className="md:hidden" style={{ height: headerHeight }}></div>
      
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-bold font-display flex items-center text-primary-800"
            >
              <span className="mr-2 text-accent-500">Adinkra</span>
              Trust Bank
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLinks isHomePage={isHomePage} isDashboard={isDashboard} />
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/dashboard" 
                    className="btn btn-sm btn-primary flex items-center"
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>
                  <button 
                    onClick={logout}
                    className="btn btn-sm btn-outline flex items-center"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link 
                    to="/login" 
                    className="font-medium text-primary-600"
                  >
                    Login
                  </Link>
                  
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ top: '0', paddingTop: '5rem' }}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col h-full">
            {/* Close button at the top right */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-800" />
            </button>
            
            {/* Mobile logo */}
            <div className="mb-6">
              <Link 
                to="/" 
                className="text-2xl font-bold font-display flex items-center text-primary-800"
                onClick={closeMenu}
              >
                <span className="mr-2 text-accent-500">Adinkra</span>
                Trust Bank
              </Link>
            </div>
            
            <nav className="flex flex-col space-y-1 border-b border-gray-200 pb-6">
              <NavLinks 
                isHomePage={false} 
                isDashboard={false} 
                isMobile={true}
                onClick={closeMenu}
              />
            </nav>
            
            <div className="mt-6 flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="btn btn-primary flex items-center justify-center"
                    onClick={closeMenu}
                  >
                    <User size={18} className="mr-2" />
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="btn btn-outline flex items-center justify-center"
                  >
                    <LogOut size={18} className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="btn btn-outline flex items-center justify-center"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                  
                </>
              )}
            </div>
            
            <div className="mt-auto">
              <div className="text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Adinkrah Trust Bank </p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
