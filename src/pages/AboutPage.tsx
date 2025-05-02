import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Users, Shield, Award, Target, ArrowUpRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Our Story</h1>
              <p className="text-xl text-gray-600 mb-8 reveal delay-1">
                Founded in 2005, SecureBank has been at the forefront of innovation in banking services, 
                committed to providing secure, accessible, and customer-focused financial solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Our Values</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                At SecureBank, our values guide everything we do, from how we serve our customers to how we innovate for the future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard 
                icon={<Users size={32} />}
                title="Customer Focus"
                description="We put our customers at the center of everything we do, listening to their needs and tailoring our services to meet them."
                delay="delay-1"
              />
              
              <ValueCard 
                icon={<Shield size={32} />}
                title="Security"
                description="We are committed to protecting our customers' data and assets with the highest standards of security."
                delay="delay-2"
              />
              
              <ValueCard 
                icon={<Award size={32} />}
                title="Excellence"
                description="We strive for excellence in all our operations, constantly improving our services and processes."
                delay="delay-3"
              />
              
              <ValueCard 
                icon={<Target size={32} />}
                title="Innovation"
                description="We embrace innovation and technology to create better banking experiences for our customers."
                delay="delay-4"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section bg-primary-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 reveal">Our Mission</h2>
                <p className="text-lg text-primary-100 mb-8 reveal delay-1">
                  To empower our customers to achieve financial success by providing innovative, secure, and personalized banking services that exceed their expectations.
                </p>
                <div className="bg-primary-800/50 p-6 rounded-lg reveal delay-2">
                  <p className="italic text-primary-100">
                    "We believe that everyone deserves access to reliable and secure financial services that help them build a better future."
                  </p>
                  <p className="mt-4 font-medium">— Sarah Johnson, CEO</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 reveal">Our Vision</h2>
                <p className="text-lg text-primary-100 mb-6 reveal delay-1">
                  To be the most trusted and innovative financial institution, setting the standard for customer service, security, and technological advancement in the banking industry.
                </p>
                <ul className="space-y-4 reveal delay-2">
                  <li className="flex items-start">
                    <ArrowUpRight size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                    <span>Become the leading digital banking platform by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                    <span>Expand our services to 50+ countries worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                    <span>Achieve carbon neutrality in all our operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Leadership Team</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                Meet the experienced professionals leading SecureBank towards a future of innovation and excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Sarah Johnson"
                role="Chief Executive Officer"
                image="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-1"
              />
              
              <TeamMember 
                name="Michael Chen"
                role="Chief Technology Officer"
                image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-2"
              />
              
              <TeamMember 
                name="Elizabeth Foster"
                role="Chief Financial Officer"
                image="https://images.pexels.com/photos/6533883/pexels-photo-6533883.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-3"
              />
              
              <TeamMember 
                name="Robert Williams"
                role="Chief Operations Officer"
                image="https://images.pexels.com/photos/5878520/pexels-photo-5878520.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-1"
              />
              
              <TeamMember 
                name="Jennifer Lee"
                role="Head of Customer Experience"
                image="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-2"
              />
              
              <TeamMember 
                name="David Rodriguez"
                role="Head of Security"
                image="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-3"
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 reveal">Our Journey</h2>
              <p className="text-lg text-gray-600 reveal delay-1">
                From our founding to today, SecureBank has continuously evolved to meet the changing needs of our customers.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TimelineItem 
                year="2005"
                title="Founded in New York"
                description="SecureBank was established with a mission to provide secure and accessible banking services."
                isLeft={true}
                delay="delay-1"
              />
              
              <TimelineItem 
                year="2010"
                title="Expanded to 10 States"
                description="We grew our presence across the United States, opening branches in major cities."
                isLeft={false}
                delay="delay-2"
              />
              
              <TimelineItem 
                year="2015"
                title="Launched Digital Banking Platform"
                description="Our award-winning mobile and online banking platforms were introduced, revolutionizing how our customers bank."
                isLeft={true}
                delay="delay-3"
              />
              
              <TimelineItem 
                year="2020"
                title="International Expansion"
                description="SecureBank went global, opening offices in Europe and Asia to serve our international customers."
                isLeft={false}
                delay="delay-4"
              />
              
              <TimelineItem 
                year="2025"
                title="Today"
                description="Now serving over 5 million customers worldwide with cutting-edge financial solutions."
                isLeft={true}
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
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`card p-6 hover:translate-y-[-8px] transition-all duration-300 reveal ${delay}`}>
      <div className="rounded-full bg-primary-100 p-4 w-fit mb-6 text-primary-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, delay }) => {
  return (
    <div className={`card overflow-hidden hover:shadow-lg transition-all duration-300 reveal ${delay}`}>
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  delay: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft, delay }) => {
  return (
    <div className={`flex items-center mb-12 reveal ${delay}`}>
      {isLeft ? (
        <>
          <div className="w-1/2 pr-8 text-right">
            <div className="text-primary-600 font-bold text-xl mb-2">{year}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="w-4 h-4 bg-primary-600 rounded-full z-10 border-4 border-primary-100"></div>
          <div className="w-1/2"></div>
        </>
      ) : (
        <>
          <div className="w-1/2"></div>
          <div className="w-4 h-4 bg-primary-600 rounded-full z-10 border-4 border-primary-100"></div>
          <div className="w-1/2 pl-8">
            <div className="text-primary-600 font-bold text-xl mb-2">{year}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AboutPage;