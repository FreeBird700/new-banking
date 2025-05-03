import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 px-4 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold font-display flex items-center mb-4">
              <span className="mr-2 text-accent-400">Adinkrah</span>
              Trust Bank
            </Link>
            <p className="text-gray-300 mb-6">
              Ghana's leading gold banking institution, providing PMMC-accredited gold trading, storage, and financing solutions since 2018.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Linkedin size={18} />} href="https://linkedin.com" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/about" text="About Us" />
              {/* <FooterLink href="/services" text="Gold Services" />
              <FooterLink href="/services/escrow" text="Gold Escrow" />
              <FooterLink href="/services/storage" text="Gold Storage" />
              <FooterLink href="/services/loans" text="Gold-Backed Loans" /> */}
              <FooterLink href="/contact" text="Contact" />
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal & Compliance</h3>
            <ul className="space-y-2">
              <FooterLink href="#" text="Terms of Service" />
              <FooterLink href="#" text="Privacy Policy" />
              <FooterLink href="#" text="PMMC Compliance" />
              <FooterLink href="#" text="Bank of Ghana License" />
              <FooterLink href="#" text="Security Measures" />
              <FooterLink href="#" text="FAQ" />
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                <span>18 Golden Star Boulevard<br />Kumasi, Ghana</span>
              </li>
              
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                <span>goldservices@adinkrahtrust.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Adinkrah Trust Bank. All rights reserved.
          </p>
          <div>
            <p className="text-gray-400 text-sm">
              Licensed by Bank of Ghana (BG/GOV/5763) | PMMC Accredited Gold Handler
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

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

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
  <a 
    href={href} 
    className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors"
    aria-label="Social media link"
  >
    {icon}
  </a>
);

export default Footer;
