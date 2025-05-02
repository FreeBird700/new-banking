import React from 'react';
import { Users, Shield, Award, Target, ArrowUpRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">Our Story</h1>
              <p className="text-xl text-gray-600 mb-8 reveal delay-1">
                Established in 2018 with full licensing from the Bank of Ghana (License No. BG/GOV/5763), 
                Adinkrah Trust Bank has become Ghana's leading financial institution specializing in gold-backed services.
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
                At Adinkrah Trust Bank, our values guide everything we do, from how we serve our clients to how we innovate for the future of gold banking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard 
                icon={<Users size={32} />}
                title="Client Focus"
                description="We put our gold traders and investors at the center of everything we do, providing specialized services tailored to their unique needs."
                delay="delay-1"
              />
              
              <ValueCard 
                icon={<Shield size={32} />}
                title="Security"
                description="We implement Ghana's most robust security measures to protect our clients' gold assets and financial information."
                delay="delay-2"
              />
              
              <ValueCard 
                icon={<Award size={32} />}
                title="Excellence"
                description="Recognized as PMMC's Digital Gold Partner of the Year (2023), we strive for excellence in all our operations."
                delay="delay-3"
              />
              
              <ValueCard 
                icon={<Target size={32} />}
                title="Innovation"
                description="As the first Ghanaian bank to offer instant gold-to-currency conversions, we embrace innovation in gold banking."
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
                  To empower gold traders and investors to achieve financial success by providing innovative, secure, and personalized gold banking services that exceed their expectations.
                </p>
                <div className="bg-primary-800/50 p-6 rounded-lg reveal delay-2">
                  <p className="italic text-primary-100">
                    "We believe that everyone deserves access to reliable and secure gold trading services that help them build a better future."
                  </p>
                  <p className="mt-4 font-medium">— Nana Yaa Asantewaa, Gold Trade Division</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 reveal">Our Vision</h2>
                <p className="text-lg text-primary-100 mb-6 reveal delay-1">
                  To be the most trusted and innovative gold banking institution in Africa, setting the standard for customer service, security, and technological advancement in the gold trading industry.
                </p>
                <ul className="space-y-4 reveal delay-2">
                  <li className="flex items-start">
                    <ArrowUpRight size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                    <span>Processed over $287 million in gold transactions to date</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                    <span>First Ghanaian bank to offer instant gold-to-currency conversions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowUpRight size={20} className="mr-3 text-accent-400 mt-1 flex-shrink-0" />
                    <span>PMMC-accredited with Bank of Ghana licensing</span>
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
                Meet the experienced professionals leading Adinkrah Trust Bank towards a future of innovation and excellence in gold banking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember 
                name="Nana Yaa Asantewaa"
                role="Gold Trade Division"
                image="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-1"
              />
              
              <TeamMember 
                name="Kwame Osei"
                role="Chief Compliance Officer"
                image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
                delay="delay-2"
              />
              
              <TeamMember 
                name="Ama Serwah"
                role="Vault Operations Manager"
                image="https://images.pexels.com/photos/6533883/pexels-photo-6533883.jpeg?auto=compress&cs=tinysrgb&w=300"
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
                From our founding to today, Adinkrah Trust Bank has continuously evolved to meet the changing needs of gold traders and investors.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <TimelineItem 
                year="2018"
                title="Founded in Kumasi"
                description="Adinkrah Trust Bank was established with a mission to provide secure and accessible gold banking services."
                isLeft={true}
                delay="delay-1"
              />
              
              <TimelineItem 
                year="2020"
                title="PMMC Accreditation"
                description="Received full accreditation from the Precious Minerals Marketing Company (PMMC) for gold trading and storage."
                isLeft={false}
                delay="delay-2"
              />
              
              <TimelineItem 
                year="2021"
                title="Launched Digital Gold Platform"
                description="Our award-winning mobile and online gold banking platforms were introduced, revolutionizing how our customers trade gold."
                isLeft={true}
                delay="delay-3"
              />
              
              <TimelineItem 
                year="2022"
                title="Gold-Backed Financing"
                description="Introduced innovative gold-backed loans with competitive 6.5% APR rates and flexible repayment terms."
                isLeft={false}
                delay="delay-4"
              />
              
              <TimelineItem 
                year="2023"
                title="Today"
                description="Recognized as PMMC's Digital Gold Partner of the Year, serving gold traders and investors with cutting-edge financial solutions."
                isLeft={true}
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
// Continuing from where we left off...

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
