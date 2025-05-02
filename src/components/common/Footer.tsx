import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">
              <span className="text-accent-400">Secure</span>Bank
            </h3>
            <p className="text-gray-300 mb-6">
              Providing secure and innovative banking solutions since 2005. Your trusted partner for all financial needs.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/login" text="Login" />
            </ul>
          </div>

          {/* Column 3: Banking Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Banking Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services" text="Personal Banking" />
              <FooterLink href="/services" text="Business Banking" />
              <FooterLink href="/services" text="Loans & Mortgages" />
              <FooterLink href="/services" text="Investments" />
              <FooterLink href="/services" text="Online Banking" />
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Financial Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-accent-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-accent-400 flex-shrink-0" />
                <span className="text-gray-300">contact@securebank.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SecureBank. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
            <Link to="#" className="hover:text-white transition-colors mb-2 md:mb-0">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors mb-2 md:mb-0">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors mb-2 md:mb-0">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href} 
    className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors"
    aria-label="Social media link"
  >
    {icon}
  </a>
);

const FooterLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <li>
    <Link 
      to={href} 
      className="text-gray-300 hover:text-accent-400 transition-colors"
    >
      {text}
    </Link>
  </li>
);

export default Footer;