import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Contact Our Gold Specialists</h1>
              <p className="text-xl text-gray-600 mb-8 reveal delay-1">
                Have questions about gold trading, storage, or financing? Our PMMC-accredited team is here to help. Reach out through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <ContactCard 
                icon={<Mail size={32} />}
                title="Email"
                info="adinkratrustbank@gmail.com"
                subInfo="We'll respond within 24 hours"
                delay="delay-1"
              />
              
              <ContactCard 
                icon={<MapPin size={32} />}
                title="Address"
                info="18 Golden Star Boulevard"
                subInfo="Kumasi, Ghana"
                delay="delay-3"
              />
              
              <ContactCard 
                icon={<Clock size={32} />}
                title="Banking Hours"
                info="Monday-Friday: 9am-5pm"
                subInfo="Saturday: 10am-2pm"
                delay="delay-4"
              />
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="section bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="reveal">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  

                  {formStatus === 'success' ? (
                    <div className="bg-success-50 border border-success-500 text-success-700 rounded-lg p-6 text-center">
                      <div className="bg-success-500 rounded-full p-2 w-12 h-12 mx-auto mb-4 text-white flex items-center justify-center">
                        <Check size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                      <p>Thank you for contacting Adinkrah Trust Bank. Our gold specialists will get back to you as soon as possible.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-4 btn btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input"
                            placeholder="Abigail Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input"
                            placeholder="abigail@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input"
                            placeholder="+233 XX XXX XXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject *
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="input"
                          >
                            <option value="">Select a subject</option>
                            <option value="Gold Trading">Gold Trading</option>
                            <option value="Gold Storage">Gold Storage</option>
                            <option value="Gold-Backed Loans">Gold-Backed Loans</option>
                            <option value="Account Support">Account Support</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="input resize-none"
                          placeholder="How can our gold specialists help you?"
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className={`btn btn-primary w-full flex items-center justify-center ${
                          formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                        disabled={formStatus === 'submitting'}
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <span className="mr-2">Sending...</span>
                            <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
              
              {/* Map & Branch Info */}
              <div className="reveal delay-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                  {/* Map (placeholder) */}
                  <div className="bg-gray-200 h-96 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary-900/10">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254936.0339443108!2d-1.7086850931245835!3d6.6881209999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi%2C%20Ghana!5e0!3m2!1sen!2sus!4v1656543745932!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Adinkrah Trust Bank Headquarters Location"
                      ></iframe>
                    </div>
                  </div>
                  
                  {/* Branch Information */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Kumasi Headquarters</h3>
                    <p className="text-gray-600 mb-6">
                      Our main office is located in Kumasi, Ghana's gold trading hub. 
                      Visit us for personalized service and expert gold banking advice.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Address:</p>
                          <p className="text-gray-600">18 Golden Star Boulevard, Kumasi, Ghana</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Hours of Operation:</p>
                          <div className="text-gray-600">
                            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: 10:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone size={20} className="mr-3 text-primary-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Gold Trade Specialists:</p>
                          <p className="text-gray-600">+233 24 287 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Common Questions</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Find answers to frequently asked questions about our gold banking services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ContactFaqItem 
                question="How do I verify my gold's authenticity before trading?"
                answer="Adinkrah Trust Bank offers PMMC-certified gold verification services. Our specialists use XRF technology and acid testing to authenticate gold before any transaction is processed."
                delay="delay-1"
              />
              
              <ContactFaqItem 
                question="What security measures protect my gold in your vaults?"
                answer="Our PMMC-approved storage facilities feature 24/7 armed guards, biometric access controls, motion sensors, and 360° surveillance. All stored gold is fully insured and independently audited quarterly."
                delay="delay-2"
              />
              
              <ContactFaqItem 
                question="How quickly can I access my stored gold if needed?"
                answer="With proper identification and advance notice of 24 hours, you can access your stored gold during business hours. For larger quantities, we recommend 48-72 hours notice."
                delay="delay-3"
              />
              
              <ContactFaqItem 
                question="What documentation do I need for international gold transfers?"
                answer="International gold transfers require government-issued ID, proof of gold ownership, completed Bank of Ghana foreign exchange forms, and PMMC export documentation. Our compliance team will guide you through the process."
                delay="delay-4"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Helper Components
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  subInfo: string;
  delay: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, info, subInfo, delay }) => {
  return (
    <div className={`card p-6 text-center hover:shadow-lg transition-all duration-300 reveal ${delay}`}>
      <div className="rounded-full bg-primary-100 p-4 w-16 h-16 mx-auto mb-6 text-primary-700 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-900 font-medium mb-1">{info}</p>
      <p className="text-gray-600">{subInfo}</p>
    </div>
  );
};

interface ContactFaqItemProps {
  question: string;
  answer: string;
  delay: string;
}

const ContactFaqItem: React.FC<ContactFaqItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

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

export default ContactPage;
